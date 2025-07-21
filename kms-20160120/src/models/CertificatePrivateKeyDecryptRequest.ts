// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertificatePrivateKeyDecryptRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * *   RSAES_OAEP_SHA_1
   * 
   * *   RSAES_OAEP_SHA_256
   * 
   * *   SM2PKE
   * 
   * > The SM2PKE encryption algorithm is supported only in regions in mainland China. In these regions, managed hardware security modules (HSMs) are used. For more information, see [Managed HSM overview](https://help.aliyun.com/document_detail/125803.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The data that you want to decrypt.
   * 
   * The value is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  ciphertextBlob?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      ciphertextBlob: 'CiphertextBlob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      ciphertextBlob: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

