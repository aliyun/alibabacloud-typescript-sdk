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

