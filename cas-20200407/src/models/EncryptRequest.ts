// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptRequest extends $dara.Model {
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
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation to obtain the identifier.
   * 
   * *   If the certificate is an SSL certificate, the value of this parameter must be in the {Certificate ID}-cn-hangzhou format.
   * *   If the certificate is a private certificate, the value of this parameter must be the value of the Identifier field for the private certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certIdentifier?: string;
  customIdentifier?: string;
  /**
   * @remarks
   * The value type of the Message parameter. Valid values:
   * 
   * *   RAW: The value of the Plaintext parameter is directly encrypted. This is the default value.
   * *   Base64: The value of the Plaintext parameter is Base64-encoded data. The data is decoded and then encrypted.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  /**
   * @remarks
   * The data that you want to encrypt. The value of this parameter can be raw data or Base64-encoded data. For more information, see the description of the MessageType parameter. For example, if the hexadecimal data that you want to encrypt is `[0x31, 0x32, 0x33, 0x34]`, the Base64-encoded data is MTIzNA==. The size of data that can be encrypted varies based on the encryption algorithm that you use. The following list describes the relationship between the encryption algorithms and data sizes:
   * 
   * *   **RSAES_OAEP_SHA_1**: 214 bytes
   * *   **RSAES_OAEP_SHA_256**: 190 bytes
   * *   **SM2PKE**: 6,047 bytes
   * 
   * This parameter is required.
   * 
   * @example
   * 1234***
   */
  plaintext?: string;
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

