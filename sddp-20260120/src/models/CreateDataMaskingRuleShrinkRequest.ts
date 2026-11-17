// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataMaskingRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the column encryption algorithm. The availability of AES_128_GCM, AES_256_GCM, and SM4_128_GCM depends on the instance. Select an available algorithm from ListDataMaskingEncryptionAlgorithms.
   * 
   * @example
   * AES_256_GCM
   */
  encAlgorithm?: string;
  /**
   * @remarks
   * The KMS key identifier. You can obtain it from Items[].KeyId in the response of ListKmsKeys. Provide this parameter when you use a KMS key. Do not pass this parameter in local key scenarios.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The key mode. Valid values:
   * - client_key: local key.
   * - kms_key: KMS key.
   * If you use kms_key, you must specify EncryptionKeyId.
   * 
   * @example
   * client_key
   */
  encryptionKeyMode?: string;
  /**
   * @remarks
   * The database engine type. The value must be consistent with the EngineType of the target instance, such as MySQL or PostgreSQL.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The expiration time of the plaintext access permissions. The value is a UNIX timestamp in milliseconds since 00:00:00 UTC on January 1, 1970. Specify this parameter only when ExpireTimeOperation is set to SET. The value must be later than the current time and no greater than 2145953410000. The server saves the value with second precision. Do not pass this parameter when ExpireTimeOperation is set to PRESERVE or CLEAR.
   * 
   * @example
   * 2145953410000
   */
  expireTime?: number;
  /**
   * @remarks
   * The processing method for the permission expiration time. Valid values:
   * - PRESERVE: retains the original expiration time.
   * - CLEAR: clears the expiration time.
   * - SET: sets ExpireTime.
   * Default value: PRESERVE. Only fullAccess supports setting a validity period.
   * 
   * @example
   * PRESERVE
   */
  expireTimeOperation?: string;
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
   * The cloud service code. Column encryption supports RDS, POLARDB, and PolarDBX2. If you pass ProductId at the same time, the two values must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud service type identifier. Valid values:
   * - 5: RDS.
   * - 8: POLARDB.
   * - 27: PolarDBX2.
   * If you specify this parameter together with ProductCode, the values must match.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The identifier of the associated risk handling record. You do not need to specify this parameter in the standard column encryption creation process.
   * 
   * @example
   * 1001
   */
  riskHandleId?: number;
  /**
   * @remarks
   * The list of column encryption targets grouped by database and table.
   */
  subRuleListShrink?: string;
  /**
   * @remarks
   * The list of database accounts to which the fullAccess plaintext access permissions are granted. The accounts must belong to the target instance.
   */
  userListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      encAlgorithm: 'EncAlgorithm',
      encryptionKeyId: 'EncryptionKeyId',
      encryptionKeyMode: 'EncryptionKeyMode',
      engineType: 'EngineType',
      expireTime: 'ExpireTime',
      expireTimeOperation: 'ExpireTimeOperation',
      instanceId: 'InstanceId',
      lang: 'Lang',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskHandleId: 'RiskHandleId',
      subRuleListShrink: 'SubRuleList',
      userListShrink: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encAlgorithm: 'string',
      encryptionKeyId: 'string',
      encryptionKeyMode: 'string',
      engineType: 'string',
      expireTime: 'number',
      expireTimeOperation: 'string',
      instanceId: 'string',
      lang: 'string',
      productCode: 'string',
      productId: 'number',
      riskHandleId: 'number',
      subRuleListShrink: 'string',
      userListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

