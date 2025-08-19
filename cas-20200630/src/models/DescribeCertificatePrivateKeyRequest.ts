// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertificatePrivateKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The password that is used to encrypt the private key. The password can contain letters, digits, and special characters, such as `, + - _ #`. The password can be up to 32 bytes in length.
   * 
   * **Warning** You must remember the password that you specify. The password is required to decrypt the encrypted private key. If you forget the password, the encrypted private key that is returned cannot be decrypted. You must call this operation again.
   * 
   * This parameter is required.
   * 
   * @example
   * !QA@WS3ed
   */
  encryptedCode?: string;
  /**
   * @remarks
   * The unique identifier of the client certificate or server certificate that you want to query.
   * 
   * >  You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to query the unique identifiers of all client certificates and server certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * bc37133bb7ed68c7938d928fd26d****
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedCode: 'EncryptedCode',
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedCode: 'string',
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

