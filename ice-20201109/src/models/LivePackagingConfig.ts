// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LiveManifestConfig } from "./LiveManifestConfig";


export class LivePackagingConfigDrmConfig extends $dara.Model {
  /**
   * @remarks
   * The content ID in the DRM system. Format: [A-Za-z0-9_-]+. Maximum length: 256 characters. Ensure that the content ID is unique. Otherwise, DRM playback may fail.
   * 
   * @example
   * live-axb1-9dd2fa123
   */
  contentId?: string;
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * - SAMPLE_AES
   * 
   * Default value: empty, which indicates no encryption.
   * 
   * @example
   * SAMPLE_AES
   */
  encryptionMethod?: string;
  /**
   * @remarks
   * An optional 128-bit (16-byte) hexadecimal value represented by a 32-character string. This value is used together with the key to encrypt data blocks. If you do not specify this value, MediaPackage creates a constant initialization vector (IV). Default value: empty. If specified, the value is passed through to the provider as a constant initialization vector.
   * 
   * @example
   * 00000000000000000000000000000000
   */
  IV?: string;
  /**
   * @remarks
   * The DRM key rotation interval. Unit: seconds. Default value: 0, which indicates that key rotation is disabled.
   * 
   * @example
   * 0
   */
  rotatePeriod?: number;
  /**
   * @remarks
   * The DRM system IDs, determined by the protocol type.
   * - DASH: supports Google Widevine and Microsoft PlayReady.
   * - HLS: not supported.
   * - HLS_CMAF: supports Apple FairPlay, Google Widevine, and Microsoft PlayReady.
   * 
   * Three DRM systems are supported: Apple FairPlay, Google Widevine, and Microsoft PlayReady. The corresponding system IDs are:
   * - Apple FairPlay:
   * 94ce86fb-07ff-4f43-adb8-93d2fa968ca2
   * - Google Widevine:
   * edef8ba9-79d6-4ace-a3c8-27dcd51d21ed
   * - Microsoft PlayReady:
   * 9a04f079-9840-4286-ab92-e65be0885f95.
   */
  systemIds?: string[];
  /**
   * @remarks
   * The URL of the DRM key provider.
   * 
   * @example
   * https://exampledrm.com/path?arg1=xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentId: 'ContentId',
      encryptionMethod: 'EncryptionMethod',
      IV: 'IV',
      rotatePeriod: 'RotatePeriod',
      systemIds: 'SystemIds',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentId: 'string',
      encryptionMethod: 'string',
      IV: 'string',
      rotatePeriod: 'number',
      systemIds: { 'type': 'array', 'itemType': 'string' },
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.systemIds)) {
      $dara.Model.validateArray(this.systemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivePackagingConfig extends $dara.Model {
  /**
   * @remarks
   * The DRM encryption provider configuration. If encryption is not required, leave all fields empty.
   */
  drmConfig?: LivePackagingConfigDrmConfig;
  /**
   * @remarks
   * The live manifest configurations. A maximum of one configuration is supported.
   */
  liveManifestConfigs?: LiveManifestConfig[];
  partDurationMs?: number;
  /**
   * @remarks
   * The duration of each segment, in seconds. Default value: the channel segment duration. The actual segment duration is the nearest multiple of the source segment duration that is greater than or equal to the configured value. Valid values: 1 to 30.
   * 
   * @example
   * 6
   */
  segmentDuration?: number;
  /**
   * @remarks
   * Specifies whether to separate audio tracks in TS segments.
   * 
   * @example
   * true
   */
  useAudioRenditionGroups?: boolean;
  static names(): { [key: string]: string } {
    return {
      drmConfig: 'DrmConfig',
      liveManifestConfigs: 'LiveManifestConfigs',
      partDurationMs: 'PartDurationMs',
      segmentDuration: 'SegmentDuration',
      useAudioRenditionGroups: 'UseAudioRenditionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drmConfig: LivePackagingConfigDrmConfig,
      liveManifestConfigs: { 'type': 'array', 'itemType': LiveManifestConfig },
      partDurationMs: 'number',
      segmentDuration: 'number',
      useAudioRenditionGroups: 'boolean',
    };
  }

  validate() {
    if(this.drmConfig && typeof (this.drmConfig as any).validate === 'function') {
      (this.drmConfig as any).validate();
    }
    if(Array.isArray(this.liveManifestConfigs)) {
      $dara.Model.validateArray(this.liveManifestConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

