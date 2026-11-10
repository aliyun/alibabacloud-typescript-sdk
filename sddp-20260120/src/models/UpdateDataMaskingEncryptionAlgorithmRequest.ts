// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataMaskingEncryptionAlgorithmRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance-level column encryption algorithm. Select an available algorithm from ListDataMaskingEncryptionAlgorithms.
   * 
   * @example
   * AES_256_GCM
   */
  encryptionAlgorithm?: string;
  /**
   * @remarks
   * The identifier of the Key Management Service (KMS) key. You can obtain it from Items[].KeyId in the response of ListKmsKeys. Provide this parameter when using a KMS key. Do not pass this parameter in local key scenarios.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The database instance identity. You can obtain it from Items[].InstanceId in the response of ListDataMaskingInstances.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The code of the cloud service. Column encryption supports ApsaraDB RDS, PolarDB, and PolarDB-X 2.0. If ProductId is also provided, the two parameters must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The identifier of the cloud service type. Valid values:
   * - 5: ApsaraDB RDS.
   * - 8: PolarDB.
   * - 27: PolarDB-X 2.0.
   * If specified together with ProductCode, the values must match.
   * 
   * @example
   * 5
   */
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      encryptionAlgorithm: 'EncryptionAlgorithm',
      encryptionKeyId: 'EncryptionKeyId',
      instanceId: 'InstanceId',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionAlgorithm: 'string',
      encryptionKeyId: 'string',
      instanceId: 'string',
      lang: 'string',
      productCode: 'string',
      productId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

