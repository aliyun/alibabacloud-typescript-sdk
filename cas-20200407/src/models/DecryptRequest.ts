// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecryptRequest extends $dara.Model {
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
   * The unique identifier of the certificate. Call [ListCert](https://help.aliyun.com/document_detail/455806.html) to obtain this parameter.
   * 
   * - The identifier of an SSL certificate is typically in the format {Certificate ID}-cn-hangzhou.
   * 
   * - For a private certificate authority (PCA) certificate, this is the value of the Identifier field of the private certificate.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The Base64-encoded data to decrypt.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * A custom identifier that serves as a unique key.
   * 
   * @example
   * ****6bb538d538c70c01f81jh2****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * - RAW: The response returns the plaintext in UTF-8 encoding.
   * 
   * - Base64 (default): The response returns the Base64-encoded plaintext.
   * 
   * @example
   * Base64
   */
  messageType?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * > Call [ListCertWarehouse](https://help.aliyun.com/document_detail/455805.html) to obtain this ID.
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

