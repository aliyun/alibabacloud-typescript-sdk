// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation to obtain the identifier.
   * 
   * *   If the certificate is an SSL certificate, the value of this parameter must be in the {Certificate ID}-cn-hangzhou format.
   * *   If the certificate is a private certificate, the value of this parameter must be the value of the Identifier field for the private certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * ccaf0c629c2be1e2abb63bb76b
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The data to sign. The value must be encoded in Base64.\\
   * For example, if the hexadecimal data that you want to sign is [0x31, 0x32, 0x33, 0x34], set the parameter to the Base64-encoded value MTIzNA==. If you set MessageType to RAW, the size of the data must be less than 4 KB. If the size of the data is greater than 4 KB, you can set MessageType to DIGEST and set Message to the digest of the data. The digest is a hash value. You can compute the digest of the data on an on-premises machine. The certificate application repository uses the digest that you compute in your own certificate application system. The message digest algorithm that you use must match the specified signature algorithm. The following items describe the details:
   * 
   * *   If the signature algorithm is SHA256withRSA, SHA256withRSA/PSS, or SHA256withECDSA, the message digest algorithm must be SHA-256.
   * *   If the signature algorithm is SM3withSM2, the message digest algorithm must be SM3.
   * 
   * This parameter is required.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The value type of the Message parameter. Valid values:
   * 
   * *   RAW: the raw data. This is the default value.
   * *   DIGEST: the message digest (hash value) of the raw data.
   * 
   * This parameter is required.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  /**
   * @remarks
   * The signature algorithm. Valid values:
   * 
   * *   SHA256withRSA
   * *   SHA256withRSA/PSS
   * *   SHA256withECDSA
   * *   SM3withSM2
   * 
   * This parameter is required.
   * 
   * @example
   * SHA256withRSA
   */
  signingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      message: 'Message',
      messageType: 'MessageType',
      signingAlgorithm: 'SigningAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      message: 'string',
      messageType: 'string',
      signingAlgorithm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

