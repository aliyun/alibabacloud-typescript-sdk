// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDownloadSecretKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The custom encryption private key string. The string is 16 to 32 characters in length and consists of letters and digits. The string must contain uppercase letters, lowercase letters, and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * AppDecryptKeyAndroid20230101
   */
  appDecryptKey?: string;
  /**
   * @remarks
   * The unique identity of the app.
   * 
   * - Android: the SHA-1 value of the keystore file. The obtained SHA-1 value is a character string with colons.
   * - iOS: the App Bundle ID value.
   * - Windows: the serial number of the digital signing certificate.
   * 
   * For information about how to obtain the unique identity of the app, see [Obtain the unique identity of the app](~~86107#section-wtj-9d7-lg2~~).
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

