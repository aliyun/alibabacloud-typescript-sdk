// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecryptRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * - **RSAES_OAEP_SHA_1**
   * - **RSAES_OAEP_SHA_256**
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
   * The unique identifier of the certificate. You can obtain this parameter by calling the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation.
   * - The identifier of an SSL certificate is typically in the {Certificate ID}-cn-hangzhou format.
   * - The identifier of a PCA certificate is the Identifier field of the corresponding private certificate.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The data to be decrypted. The data is Base64-encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The custom user identifier, which is a unique key.
   * 
   * @example
   * ****6bb538d538c70c01f81jh2****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * - RAW: The plaintext result encoded in UTF-8 is returned.
   * - Base64: The Base64-encoded result is returned. This is the default value.
   * 
   * @example
   * Base64
   */
  messageType?: string;
  /**
   * @remarks
   * The repository ID.
   * > You can obtain this ID by calling the [ListCertWarehouse](https://help.aliyun.com/document_detail/455805.html) operation.
   * 
   * @example
   * 1
   */
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certIdentifier: 'CertIdentifier',
      ciphertextBlob: 'CiphertextBlob',
      customIdentifier: 'CustomIdentifier',
      messageType: 'MessageType',
      warehouseId: 'WarehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      ciphertextBlob: 'string',
      customIdentifier: 'string',
      messageType: 'string',
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

