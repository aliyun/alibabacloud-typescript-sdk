// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * - **RSAES_OAEP_SHA_1**
   * 
   * - **RSAES_OAEP_SHA_256**
   * 
   * - **SM2PKE**
   * 
   * This parameter is required.
   * 
   * @example
   * RSAESOAEPSHA_1
   */
  algorithm?: string;
  /**
   * @remarks
   * The unique identifier of the certificate. To obtain this parameter, call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation.
   * 
   * - The identifier of an SSL certificate is usually in the {Certificate ID}-cn-hangzhou format.
   * 
   * - For a private certificate authority (PCA) certificate, this is the value of the Identifier field of the private certificate.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The custom identifier, which serves as a unique key.
   * 
   * @example
   * ****6bb538d538c70c01f81dg3****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * - RAW (default): Directly encrypts the value of Plaintext.
   * 
   * - Base64: Decodes the Base64-encoded value of Plaintext and then encrypts the decoded data.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  /**
   * @remarks
   * The data to encrypt. The data can be plaintext or Base64-encoded plaintext. For more information, see the MessageType parameter. If you use Base64 encoding, for example, if the hexadecimal content of the data to be encrypted is `[0x31, 0x32, 0x33, 0x34]`, the corresponding Base64-encoded string is MTIzNA==. The maximum size of Plaintext depends on the Algorithm:
   * 
   * - **RSAES_OAEP_SHA_1**: 214 bytes.
   * 
   * - **RSAES_OAEP_SHA_256**: 190 bytes.
   * 
   * - **SM2PKE**: 6047 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234***
   */
  plaintext?: string;
  /**
   * @remarks
   * The repository ID.
   * 
   * > To obtain this ID, call the [ListCertWarehouse](https://help.aliyun.com/document_detail/455805.html) operation.
   * 
   * @example
   * 12
   */
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certIdentifier: 'CertIdentifier',
      customIdentifier: 'CustomIdentifier',
      messageType: 'MessageType',
      plaintext: 'Plaintext',
      warehouseId: 'WarehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      customIdentifier: 'string',
      messageType: 'string',
      plaintext: 'string',
      warehouseId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

