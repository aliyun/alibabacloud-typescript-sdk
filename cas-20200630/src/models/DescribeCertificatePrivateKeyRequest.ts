// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertificatePrivateKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The password to encrypt the private key. The password can contain uppercase letters, lowercase letters, digits, and special characters, such as `,.+-_#`. The maximum length is 32 bytes.
   * 
   * >Warning: 
   * 
   * Remember the password you set. You need this password to decrypt the encrypted private key. If you forget the password, you cannot decrypt the private key that you get from this API call. You must call this API again to get a new encrypted key.
   * 
   * This parameter is required.
   * 
   * @example
   * !Demo@WS3ed
   */
  encryptedCode?: string;
  /**
   * @remarks
   * The unique identifier of the client or server-side certificate for which you want to get the private key.
   * 
   * > Call [ListClientCertificate](https://help.aliyun.com/document_detail/465990.html) to query the unique identifiers of all client and server-side certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * bc37133bb7ed68c7938d928fd26d****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the resource group to which the certificate belongs.
   * 
   * @example
   * test
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedCode: 'EncryptedCode',
      identifier: 'Identifier',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedCode: 'string',
      identifier: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

