// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertificatePublicKeyEncryptRequest extends $dara.Model {
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
   * >The SM2PKE encryption algorithm is supported only in regions in mainland China. In these regions, managed hardware security modules (HSMs) are used. For more information, see [Managed HSM overview](https://help.aliyun.com/document_detail/125803.html).
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
   * The data that you want to encrypt.
   * 
   * The value is encoded in Base64. For example, if the hexadecimal data that you want to encrypt is `[0x31, 0x32, 0x33, 0x34]`, the Base64-encoded data is `MTIzNA==`.
   * 
   * The size of data that can be encrypted varies based on the encryption algorithm that you use:
   * 
   * *   RSAES_OAEP_SHA_1: 214 bytes
   * *   RSAES_OAEP_SHA_256: 190 bytes
   * *   SM2PKE: 6,047 bytes
   * 
   * If the size of data that you want to encrypt exceeds the preceding limits, you can call the [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html) operation to generate a data key to encrypt the data. Then, call the CertificatePublicKeyEncrypt operation to encrypt the data key.
   * 
   * This parameter is required.
   * 
   * @example
   * VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      plaintext: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

