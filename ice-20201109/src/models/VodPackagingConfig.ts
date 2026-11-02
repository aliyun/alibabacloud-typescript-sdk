// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VodPackagingConfigDrmProvider extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * - AES_128
   * - SAMPLE_AES
   */
  encryptionMethod?: string;
  /**
   * @remarks
   * The optional 128-bit (16-byte) hexadecimal value represented by a 32-character string, which is used with the key for encrypted data blocks. If you do not specify this value, MediaPackage creates a constant initialization vector (IV). Default value: empty. If specified, the value is passed through to the provider as a constant initialization vector.
   * 
   * @example
   * 0123456789abcdef0123456789abcdef
   */
  IV?: string;
  /**
   * @remarks
   * The DRM system IDs. The number of system IDs depends on the protocol type used:
   * - DASH: up to two
   * - HLS: one
   * - HLS_CMAF: up to two
   * Only the following three DRM systems are supported: Apple FairPlay, Google Widevine, and Microsoft PlayReady. The corresponding system IDs are:
   * Apple FairPlay:
   * 94ce86fb-07ff-4f43-adb8-93d2fa968ca2
   * Google Widevine:
   * edef8ba9-79d6-4ace-a3c8-27dcd51d21ed
   * Microsoft PlayReady:
   * 9a04f079-9840-4286-ab92-e65be0885f95.
   */
  systemIds?: string[];
  /**
   * @remarks
   * The URL of the DRM key provider.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionMethod: 'EncryptionMethod',
      IV: 'IV',
      systemIds: 'SystemIds',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionMethod: 'string',
      IV: 'string',
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

export class VodPackagingConfigStreamSelection extends $dara.Model {
  /**
   * @remarks
   * The maximum video stream bitrate in bps.
   */
  maxVideoBitsPerSecond?: number;
  /**
   * @remarks
   * The minimum video stream bitrate in bps.
   */
  minVideoBitsPerSecond?: number;
  /**
   * @remarks
   * The stream sorting rule. Valid values:
   * - ORIGINAL: Keeps the input sequence number.
   * - VIDEO_BITRATE_ASCENDING: Sorts streams by video bitrate in ascending order.
   * - VIDEO_BITRATE_DESCENDING: Sorts streams by video bitrate in descending order.
   */
  streamOrder?: string;
  static names(): { [key: string]: string } {
    return {
      maxVideoBitsPerSecond: 'MaxVideoBitsPerSecond',
      minVideoBitsPerSecond: 'MinVideoBitsPerSecond',
      streamOrder: 'StreamOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxVideoBitsPerSecond: 'number',
      minVideoBitsPerSecond: 'number',
      streamOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VodPackagingConfig extends $dara.Model {
  /**
   * @remarks
   * The DRM encryption provider configuration.
   */
  drmProvider?: VodPackagingConfigDrmProvider;
  /**
   * @remarks
   * The manifest name. The value must match the regular expression [A-Za-z0-9_]+ and cannot exceed 128 characters in length.
   */
  manifestName?: string;
  /**
   * @remarks
   * The duration of each segment in seconds. The actual segment duration is rounded to the nearest multiple of the source segment duration. Valid values: 1 to 30.
   * 
   * @example
   * 6
   */
  segmentDuration?: number;
  /**
   * @remarks
   * The stream selection configuration for packaging output.
   */
  streamSelection?: VodPackagingConfigStreamSelection;
  static names(): { [key: string]: string } {
    return {
      drmProvider: 'DrmProvider',
      manifestName: 'ManifestName',
      segmentDuration: 'SegmentDuration',
      streamSelection: 'StreamSelection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drmProvider: VodPackagingConfigDrmProvider,
      manifestName: 'string',
      segmentDuration: 'number',
      streamSelection: VodPackagingConfigStreamSelection,
    };
  }

  validate() {
    if(this.drmProvider && typeof (this.drmProvider as any).validate === 'function') {
      (this.drmProvider as any).validate();
    }
    if(this.streamSelection && typeof (this.streamSelection as any).validate === 'function') {
      (this.streamSelection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

