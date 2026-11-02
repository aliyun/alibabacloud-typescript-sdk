// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LiveManifestConfig } from "./LiveManifestConfig";


export class LivePackagingConfigDrmConfig extends $dara.Model {
  /**
   * @remarks
   * The content ID in the DRM system. Format: [A-Za-z0-9_-]+. Maximum length: 256 characters. You must ensure the uniqueness of the content ID. Otherwise, DRM playback may fail.
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
   * The optional 128-bit (16-byte) hexadecimal value represented by a 32-character string, used with the key for encrypted data blocks. If you do not specify this value, MediaPackage creates a constant initialization vector (IV). Default value: empty. If specified, the value is passed through to the provider as a constant initialization vector.
   * 
   * @example
   * 00000000000000000000000000000000
   */
  IV?: string;
  /**
   * @remarks
   * The DRM key rotation interval in seconds. Default value: 0, which indicates that keys are not rotated.
   * 
   * @example
   * 0
   */
  rotatePeriod?: number;
  /**
   * @remarks
   * The DRM system IDs, which are determined by the protocol type used.
   * - DASH: supports Google Widevine and Microsoft PlayReady
   * - HLS: not supported
   * - HLS_CMAF: supports Apple FairPlay, Google Widevine, and Microsoft PlayReady
   * 
   * The following three DRM systems are supported, with their corresponding system IDs:
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
   * The DRM encryption provider configuration. If encryption is not used, leave all fields empty.
   */
  drmConfig?: LivePackagingConfigDrmConfig;
  /**
   * @remarks
   * The live streaming manifest configuration. Up to one configuration is supported.
   */
  liveManifestConfigs?: LiveManifestConfig[];
  /**
   * @remarks
   * The duration of an LL-HLS part or an LL-DASH chunk in milliseconds. The value must be no less than 200 and no greater than the segment duration in milliseconds.
   * 
   * @example
   * 350
   */
  partDurationMs?: number;
  /**
   * @remarks
   * The duration of each segment in seconds. Default value: the segment duration of the channel. The actual segment duration is the nearest multiple of the source segment duration that is greater than or equal to the configured value. Valid values: 1 to 30.
   * 
   * @example
   * 6
   */
  segmentDuration?: number;
  /**
   * @remarks
   * Specifies whether to separate audio tracks for TS segments.
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

