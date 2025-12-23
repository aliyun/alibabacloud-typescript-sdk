// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation to obtain the unique identifier of a certificate.
   * 
   * *   If the certificate is an SSL certificate, the value of this parameter must be in the {Certificate ID}-cn-hangzhou format.
   * *   If the certificate is a private certificate, the value of this parameter must be the value of the Identifier field for the private certificate.
   * 
   * @example
   * 5870821-cn-hangzhou
   */
  certIdentifier?: string;
  customIdentifier?: string;
  /**
   * @remarks
   * The data for which you want to verify the signature. The value must be encoded in Base64.\\
   * For example, if the hexadecimal data that you want to verify is [0x31, 0x32, 0x33, 0x34], set the parameter to the Base64-encoded value MTIzNA==. If you set MessageType to RAW, the size of the data must be less than 4 KB. If the size of the data is greater than 4 KB, you can set MessageType to DIGEST and set Message to the digest of the data. The digest is also called hash value. You can compute the digest of the data on an on-premises machine. The certificate repository uses your certificate application system to compute the message digest. The message digest algorithm that is used must meet the requirements of the specified signature algorithm. The following signature algorithms require different message digest algorithms:
   * 
   * *   If the signature algorithm is SHA256withRSA, SHA256withRSA/PSS, or SHA256withECDSA, the message digest algorithm must be SHA-256.
   * *   If the signature algorithm is SM3withSM2, the message digest algorithm must be SM3.
   * 
   * This parameter is required.
   * 
   * @example
   * MTIzNA==
   */
  message?: string;
  /**
   * @remarks
   * The value type of the Message parameter. Valid values:
   * 
   * *   **RAW**: the raw data. This is the default value.
   * *   **DIGEST**: the message digest of the raw data.
   * 
   * This parameter is required.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  /**
   * @remarks
   * The signature value. The value must be encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * eyaC0w3ROK5b3QcHmUtAhMY/sQjKu2t3uBfnf6J/gn7JfZtyxwcCUjzXbw5jmqJQRbj1te670Bshg9kUdanKhtHFhJjU5jX+ZMMBr6pH0gqQDJxR0K0yHXRc0Q5OQoUZ6BfpbI4Wt4jJvJSdCstz1vSg12CfEHS8Kd5qfhItK7Y=
   */
  signatureValue?: string;
  /**
   * @remarks
   * The signature algorithm. Valid values:
   * 
   * *   **SHA256withRSA**
   * *   **SHA256withRSA/PSS**
   * *   **SHA256withECDSA**
   * *   **SM3withSM2**
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
      customIdentifier: 'CustomIdentifier',
      message: 'Message',
      messageType: 'MessageType',
      signatureValue: 'SignatureValue',
      signingAlgorithm: 'SigningAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      customIdentifier: 'string',
      message: 'string',
      messageType: 'string',
      signatureValue: 'string',
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

