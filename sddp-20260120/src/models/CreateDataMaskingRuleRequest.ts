// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDataMaskingRuleRequestSubRuleList extends $dara.Model {
  /**
   * @remarks
   * The list of target column names. Separate multiple column names with commas (,).
   * 
   * @example
   * phone,email
   */
  columns?: string;
  /**
   * @remarks
   * The name of the target database.
   * 
   * @example
   * business_db
   */
  dbName?: string;
  /**
   * @remarks
   * The name of the target table.
   * 
   * @example
   * customer
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      dbName: 'DbName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: 'string',
      dbName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataMaskingRuleRequestUserList extends $dara.Model {
  /**
   * @remarks
   * The database account ID. You can obtain this value from Items[].Id in the response of [ListDataAssetAccounts](https://help.aliyun.com/document_detail/2859330.html). Pass this value as a string.
   * 
   * @example
   * 1001
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataMaskingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the column encryption algorithm. The availability of AES_128_GCM, AES_256_GCM, and SM4_128_GCM depends on the instance. Select an available algorithm from [ListDataMaskingEncryptionAlgorithms](https://help.aliyun.com/document_detail/2859327.html).
   * 
   * @example
   * AES_256_GCM
   */
  encAlgorithm?: string;
  /**
   * @remarks
   * The KMS key ID. You can obtain this value from Items[].KeyId in the response of [ListKmsKeys](https://help.aliyun.com/document_detail/2859328.html). Specify this parameter when you use a KMS key. Do not specify this parameter for local key scenarios.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The key mode. Valid values:
   * 
   * - client_key: local key.
   * - kms_key: KMS key. If you set this parameter to kms_key, you must specify EncryptionKeyId.
   * 
   * @example
   * client_key
   */
  encryptionKeyMode?: string;
  /**
   * @remarks
   * The database engine type. This value must match the EngineType of the target instance, such as MySQL or PostgreSQL.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The expiration time of the plaintext access permissions. This value is a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC. Specify this parameter only when ExpireTimeOperation is set to SET. The value must be later than the current time and no greater than 2145953410000. The server stores the value with second-level precision. Do not specify this parameter when ExpireTimeOperation is set to PRESERVE or CLEAR.
   * 
   * @example
   * 2145953410000
   */
  expireTime?: number;
  /**
   * @remarks
   * The handling method for the permission expiration time. Valid values:
   * 
   * - PRESERVE: Retains the original expiration time.
   * - CLEAR: Clears the expiration time.
   * - SET: Sets the expiration time to the value specified by ExpireTime.
   * 
   * Default value: PRESERVE. Only fullAccess supports expiration time settings.
   * 
   * @example
   * PRESERVE
   */
  expireTimeOperation?: string;
  /**
   * @remarks
   * The database instance identity. You can obtain this value from Items[].InstanceId in the response of [ListDataMaskingInstances](https://help.aliyun.com/document_detail/2859326.html).
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The cloud product code. Column encryption supports RDS, POLARDB, and PolarDBX2. If you specify both ProductCode and ProductId, the values must correspond to each other.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud product type ID. Valid values:
   * 
   * - 5: RDS.
   * - 8: POLARDB.
   * - 27: PolarDBX2.
   * 
   * If you specify both ProductId and ProductCode, the values must correspond to each other.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The ID of the associated risk handling record. You do not need to specify this parameter for standard column encryption creation.
   * 
   * @example
   * 1001
   */
  riskHandleId?: number;
  /**
   * @remarks
   * The list of column encryption targets grouped by database and table.
   */
  subRuleList?: CreateDataMaskingRuleRequestSubRuleList[];
  /**
   * @remarks
   * The list of database accounts to be granted fullAccess plaintext access permissions. The accounts must belong to the target instance.
   */
  userList?: CreateDataMaskingRuleRequestUserList[];
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
      subRuleList: 'SubRuleList',
      userList: 'UserList',
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
      subRuleList: { 'type': 'array', 'itemType': CreateDataMaskingRuleRequestSubRuleList },
      userList: { 'type': 'array', 'itemType': CreateDataMaskingRuleRequestUserList },
    };
  }

  validate() {
    if(Array.isArray(this.subRuleList)) {
      $dara.Model.validateArray(this.subRuleList);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

