// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecryptRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * *   **RSAES_OAEP_SHA_1**
   * *   **RSAES_OAEP_SHA_256**
   * *   **SM2PKE**
   * 
   * This parameter is required.
   * 
   * @example
   * RSAESOAEPSHA_1
   */
  algorithm?: string;
  /**
   * @remarks
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation to query the identifier.
   * 
   * *   If the certificate is an SSL certificate, the value of this parameter must be in the {Certificate ID}-cn-hangzhou format.
   * *   If the certificate is a private certificate, the value of this parameter must be the value of the Identifier field for the private certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The data that you want to decrypt. The value is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  ciphertextBlob?: string;
  customIdentifier?: string;
  /**
   * @remarks
   * The value type of the Message parameter. Valid values:
   * 
   * *   RAW: The returned result is raw data encoded in UTF-8.
   * *   Base64: The returned result is Base64-encoded data. This is the default value.
   * 
   * @example
   * Base64
   */
  messageType?: string;
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

