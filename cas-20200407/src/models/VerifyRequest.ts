// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate. To get this parameter, call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation.
   * 
   * - The identifier for an SSL certificate is typically in the format \\`{Certificate ID}-cn-hangzhou\\`.
   * 
   * - For a PCA certificate, this is the value of the \\`Identifier\\` field.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The custom identifier. This key must be unique.
   * 
   * @example
   * ****6bb538d538c70c01f81jh2****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The data to verify. The data must be Base64-encoded. For example, if the hexadecimal content of the data to sign is \\`[0x31, 0x32, 0x33, 0x34]\\`, the Base64-encoded value is \\`MTIzNA==\\`. If you set \\`MessageType\\` to \\`RAW\\`, the data size must be less than 4 KB. If the data to sign is larger than 4 KB, set \\`MessageType\\` to \\`DIGEST\\`. Then, set \\`Message\\` to the message digest, or hash, that you calculate locally. The hashing algorithm for the digest must be compatible with the signature algorithm:<br>
   * 
   * - The hashing algorithm for \\`SHA256withRSA\\`, \\`SHA256withRSA/PSS\\`, and \\`SHA256withECDSA\\` is SHA-256.
   * 
   * - The hashing algorithm for \\`SM3withSM2\\` is SM3.
   * 
   * This parameter is required.
   * 
   * @example
   * MTIzNA==
   */
  message?: string;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * - **RAW** (default): The raw data.
   * 
   * - **DIGEST**: The message digest of the raw data.
   * 
   * This parameter is required.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  /**
   * @remarks
   * The signature value. The value must be Base64-encoded.
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
   * - **SHA256withRSA**
   * 
   * - **SHA256withRSA/PSS**
   * 
   * - **SHA256withECDSA**
   * 
   * - **SM3withSM2**
   * 
   * This parameter is required.
   * 
   * @example
   * SHA256withRSA
   */
  signingAlgorithm?: string;
  /**
   * @remarks
   * The ID of the repository. To get this parameter, call the [ListCertWarehouse](https://help.aliyun.com/document_detail/453246.html) operation.
   * 
   * @example
   * 1
   */
  warehouseId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      customIdentifier: 'CustomIdentifier',
      message: 'Message',
      messageType: 'MessageType',
      signatureValue: 'SignatureValue',
      signingAlgorithm: 'SigningAlgorithm',
      warehouseId: 'WarehouseId',
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
      warehouseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

