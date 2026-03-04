// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LiveManifestConfig } from "./LiveManifestConfig";


export class LivePackagingConfigDrmConfig extends $dara.Model {
  /**
   * @remarks
   * The content ID in the DRM system. The maximum length is 256 characters. Letters, digits, underscores (_), and hyphens (-) are supported. You must ensure this ID is unique to prevent playback failures.
   * 
   * @example
   * live-axb1-9dd2fa123
   */
  contentId?: string;
  /**
   * @remarks
   * The encryption method. Valid value:
   * 
   * *   SAMPLE_AES
   * 
   * If not specified, encryption is disabled.
   * 
   * @example
   * SAMPLE_AES
   */
  encryptionMethod?: string;
  /**
   * @remarks
   * A 128-bit, 16-byte hex value represented by a 32-character string that is used with the key for encrypting data blocks. If you leave this parameter empty, MediaPackage creates a constant initialization vector (IV). If it is specified, the value is passed to the DRM service.
   * 
   * @example
   * 00000000000000000000000000000000
   */
  IV?: string;
  /**
   * @remarks
   * The key rotation interval for DRM, in seconds. The default value of 0 disables key rotation.
   * 
   * @example
   * 0
   */
  rotatePeriod?: number;
  /**
   * @remarks
   * The ID of the DRM system. The supported systems depend on the protocol.
   * 
   * *   DASH: Supports Google Widevine and Microsoft PlayReady.
   * *   HLS: DRM is not supported.
   * *   HLS-CMAF: Supports Apple FairPlay, Google Widevine, and Microsoft PlayReady.
   * 
   * The corresponding System IDs are:
   * 
   * *   Apple FairPlay: 94ce86fb-07ff-4f43-adb8-93d2fa968ca2
   * *   Google Widevine: edef8ba9-79d6-4ace-a3c8-27dcd51d21ed
   * *   Microsoft PlayReady: 9a04f079-9840-4286-ab92-e65be0885f95
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
   * Configuration for the DRM provider. To disable DRM, leave all fields in this object empty.
   */
  drmConfig?: LivePackagingConfigDrmConfig;
  /**
   * @remarks
   * Live stream manifest configuration. Only one configuration is supported.
   */
  liveManifestConfigs?: LiveManifestConfig[];
  /**
   * @remarks
   * The duration of each output segment, in seconds. If not set, this defaults to the channel\\"s configured segment duration. The final segment duration is a multiple of the source segment duration that is closest to and not less than this value. Valid values: 1 to 30.
   * 
   * @example
   * 6
   */
  segmentDuration?: number;
  /**
   * @remarks
   * Specifies whether to create separate audio rendition groups for TS segments.
   * 
   * @example
   * true
   */
  useAudioRenditionGroups?: boolean;
  static names(): { [key: string]: string } {
    return {
      drmConfig: 'DrmConfig',
      liveManifestConfigs: 'LiveManifestConfigs',
      segmentDuration: 'SegmentDuration',
      useAudioRenditionGroups: 'UseAudioRenditionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drmConfig: LivePackagingConfigDrmConfig,
      liveManifestConfigs: { 'type': 'array', 'itemType': LiveManifestConfig },
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

