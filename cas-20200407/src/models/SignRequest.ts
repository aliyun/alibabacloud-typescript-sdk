// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate. You can get this value by calling the [ListCert](https://help.aliyun.com/document_detail/455806.html) operation.
   * 
   * - The identifier of an SSL certificate is typically in the format \\"{Certificate ID}-cn-hangzhou\\".
   * 
   * - For a PCA certificate, this is the Identifier from the corresponding private certificate.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * A unique, user-defined identifier.
   * 
   * @example
   * ***e6bb538d538c70c01f81fg3****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The data to sign. The MessageType parameter determines the format of this data. If MessageType is set to RAW, Message is the raw data. If MessageType is set to BASE64, Message is the Base64-encoded raw data. If MessageType is set to DIGEST, Message is the message digest (hash value). If MessageType is set to BLIND, Message is the Base64-encoded blinded message.
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
   * - `RAW` (default): The raw data.
   * 
   * - `DIGEST`: The message digest (hash value) of the raw data.
   * 
   * - `BASE64`: The Base64-encoded raw data.
   * 
   * - `BLIND`: Enables blind signing. This is supported only for certificates that use an RSA algorithm.
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
   * - `SHA256withRSA`
   * 
   * - `SHA256withRSA/PSS`
   * 
   * - `SHA256withECDSA`
   * 
   * - `SM3withSM2`
   * 
   * - `SHA256withRSA/P7`
   * 
   * This parameter is required.
   * 
   * @example
   * SHA256withRSA
   */
  signingAlgorithm?: string;
  /**
   * @remarks
   * The repository ID.
   * 
   * > You can get this ID by calling the [ListCertWarehouse](https://help.aliyun.com/document_detail/455805.html) operation.
   * 
   * @example
   * 1
   */
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      customIdentifier: 'CustomIdentifier',
      message: 'Message',
      messageType: 'MessageType',
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
      signingAlgorithm: 'string',
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

