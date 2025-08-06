// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDownloadSecretKeyRequest extends $dara.Model {
  /**
   * @remarks
   * A custom string of 16 to 32 characters in length. The string must contain uppercase letters, lowercase letters, and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * AppDecryptKeyAndroid20230101
   */
  appDecryptKey?: string;
  /**
   * @remarks
   * The unique identifier of the app.
   * 
   * *   Android: the SHA-1 fingerprint of the keystore. The value is a string that contains a colon (:).
   * *   iOS: the bundle ID of the app.
   * *   Windows: the serial number in the digital signature certificate.
   * 
   * For more information about how to obtain the unique identifier of an app, see [Obtain the unique app identifier](~~86107#section-wtj-9d7-lg2~~).
   * 
   * This parameter is required.
   * 
   * @example
   * BB:0D:AC:74:D3:21:09:EF:9C:71:1A:5E:77:2C:8E:BF:03:FD:FA:5A
   */
  appIdentification?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      appDecryptKey: 'AppDecryptKey',
      appIdentification: 'AppIdentification',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDecryptKey: 'string',
      appIdentification: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

