// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVodPackagingConfigurationRequestPackageConfigDrmProvider extends $dara.Model {
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * *   AES_128: Advanced Encryption Standard (AES) with 128-bit key length.
   * *   SAMPLE_AES: an encryption method that encrypts individual media samples.
   * 
   * @example
   * AES_128
   */
  encryptionMethod?: string;
  /**
   * @remarks
   * A 128-bit, 16-byte hex value represented by a 32-character string that is used with the key for encrypting data blocks. If you leave this parameter empty, MediaPackage creates a constant initialization vector (IV). If it is specified, the value is passed to the DRM service.
   * 
   * @example
   * 00001111222233334444555566667777
   */
  IV?: string;
  /**
   * @remarks
   * The ID of the DRM system. The maximum number of system IDs allowed is determined by the protocol type. Limits:
   * 
   * *   DASH: 2
   * *   HLS: 1
   * *   HLS_CMAF: 2
   * 
   * Apple FairPlay, Google Widevine, and Microsoft PlayReady are supported. Their system IDs are as follows:
   * 
   * *   Apple FairPlay: 94ce86fb-07ff-4f43-adb8-93d2fa968ca2
   * *   Google Widevine: edef8ba9-79d6-4ace-a3c8-27dcd51d21e
   * *   Microsoft PlayReady: 9a04f079-9840-4286-ab92-e65be0885f95
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

export class CreateVodPackagingConfigurationRequestPackageConfigStreamSelection extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate of the video stream. Unit: bit/s.
   * 
   * @example
   * 1000000000
   */
  maxVideoBitsPerSecond?: number;
  /**
   * @remarks
   * The minimum bitrate of the video stream. Unit: bit/s.
   * 
   * @example
   * 100000
   */
  minVideoBitsPerSecond?: number;
  /**
   * @remarks
   * The order of manifest files in the master playlist. Valid values:
   * 
   * *   ORIGINAL: sorts the manifest files in the same order as the source.
   * *   VIDEO_BITRATE_ASCENDING: sorts the manifest files in ascending order of bitrates, from lowest to highest.
   * *   VIDEO_BITRATE_DESCENDING: sorts the manifest files in descending order of bitrates, from highest to lowest.
   * 
   * @example
   * ORIGINAL
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

export class CreateVodPackagingConfigurationRequestPackageConfig extends $dara.Model {
  /**
   * @remarks
   * The settings of digital rights management (DRM) encryption.
   * 
   * **if can be null:**
   * true
   */
  drmProvider?: CreateVodPackagingConfigurationRequestPackageConfigDrmProvider;
  /**
   * @remarks
   * The manifest name. The name can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * index
   */
  manifestName?: string;
  /**
   * @remarks
   * The duration of each segment in a packaged stream. Unit: seconds. MediaPackage rounds segments to the nearest multiple of the input segment duration. Valid values: 1 to 30.
   * 
   * @example
   * 6
   */
  segmentDuration?: number;
  /**
   * @remarks
   * The settings of stream selection.
   */
  streamSelection?: CreateVodPackagingConfigurationRequestPackageConfigStreamSelection;
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
      drmProvider: CreateVodPackagingConfigurationRequestPackageConfigDrmProvider,
      manifestName: 'string',
      segmentDuration: 'number',
      streamSelection: CreateVodPackagingConfigurationRequestPackageConfigStreamSelection,
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

export class CreateVodPackagingConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the packaging configuration. The name must be unique in an account and can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * hls_3s
   */
  configurationName?: string;
  /**
   * @remarks
   * The description of the packaging configuration.
   * 
   * @example
   * HLS 3s vod packaging
   */
  description?: string;
  /**
   * @remarks
   * The name of the packaging group. The name can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  /**
   * @remarks
   * The packaging configuration.
   */
  packageConfig?: CreateVodPackagingConfigurationRequestPackageConfig;
  /**
   * @remarks
   * The package type.
   * 
   * *   HLS: packages content into TS segments for delivery over the HLS protocol.
   * *   HLS_CMAF: packages content into CMAF segments for delivery over the HLS protocol.
   * *   DASH: packages content for delivery over the DASH protocol.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      configurationName: 'ConfigurationName',
      description: 'Description',
      groupName: 'GroupName',
      packageConfig: 'PackageConfig',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationName: 'string',
      description: 'string',
      groupName: 'string',
      packageConfig: CreateVodPackagingConfigurationRequestPackageConfig,
      protocol: 'string',
    };
  }

  validate() {
    if(this.packageConfig && typeof (this.packageConfig as any).validate === 'function') {
      (this.packageConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

