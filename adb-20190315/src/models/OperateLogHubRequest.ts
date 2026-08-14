// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateLogHubRequestLogHubStores extends $dara.Model {
  /**
   * @remarks
   * The value that corresponds to the keyword.
   * 
   * This parameter is required.
   * 
   * @example
   * testValue
   */
  fieldKey?: string;
  /**
   * @remarks
   * The log keyword.
   * 
   * This parameter is required.
   * 
   * @example
   * testKey
   */
  logKey?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'FieldKey',
      logKey: 'LogKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      logKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateLogHubRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to create the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  create?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of AnalyticDB for MySQL clusters in your account.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6rtqaj25491628z
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The delivery name.
   * 
   * This parameter is required.
   * 
   * @example
   * xhxsblz_limited_gift_pay
   */
  deliverName?: string;
  /**
   * @remarks
   * The delivery time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-10-24\\"T\\"13:10\\"Z\\"
   */
  deliverTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to filter dirty data.
   * 
   * @example
   * false
   */
  filterDirtyData?: boolean;
  /**
   * @remarks
   * An array of field mappings.
   * 
   * This parameter is required.
   */
  logHubStores?: OperateLogHubRequestLogHubStores[];
  /**
   * @remarks
   * The name of the Simple Log Service (SLS) Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * beta-game-mjxb-ham-pool-export
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password.
   * 
   * This parameter is required.
   * 
   * @example
   * ads_123
   */
  password?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * test-adb
   */
  projectName?: string;
  /**
   * @remarks
   * The provider.
   * 
   * @example
   * SLS
   */
  provider?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * wddata
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * rest_action_latest
   */
  tableName?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * admin
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      DBClusterId: 'DBClusterId',
      deliverName: 'DeliverName',
      deliverTime: 'DeliverTime',
      description: 'Description',
      filterDirtyData: 'FilterDirtyData',
      logHubStores: 'LogHubStores',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      projectName: 'ProjectName',
      provider: 'Provider',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'boolean',
      DBClusterId: 'string',
      deliverName: 'string',
      deliverTime: 'string',
      description: 'string',
      filterDirtyData: 'boolean',
      logHubStores: { 'type': 'array', 'itemType': OperateLogHubRequestLogHubStores },
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      projectName: 'string',
      provider: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logHubStores)) {
      $dara.Model.validateArray(this.logHubStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

