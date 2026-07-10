// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPriceRequestDBNodes extends $dara.Model {
  /**
   * @remarks
   * The target node specifications.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-**************
   */
  DBNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
      DBNodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster edition. Valid values:
   * - Normal: Cluster Edition.
   * - Basic: Single Node Edition.
   * - ArchiveNormal: Archive Database.
   * - SENormal: Standard Edition.
   * - NormalMultimaster: Multi-master Cluster.
   * 
   * @example
   * Normal
   */
  creationCategory?: string;
  /**
   * @remarks
   * The cluster ID. Required for non-BUY scenarios.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The node specifications. Required for the BUY scenario. Example format: polar.mysql.x4.large.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The list of node IDs to delete. Used when ModifyType is set to DELETE.
   * 
   * @example
   * pi-**************
   */
  DBNodeIds?: string[];
  /**
   * @remarks
   * The number of nodes. Valid for the BUY scenario. This value includes the read/write node. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 2
   */
  DBNodeNum?: number;
  /**
   * @remarks
   * The list of heterogeneous specification change nodes. Used for specification change scenarios to specify the target specifications for each node.
   */
  DBNodes?: DescribeDBClusterPriceRequestDBNodes[];
  /**
   * @remarks
   * The database engine type. Required for the BUY scenario. Valid values: MySQL, PostgreSQL, and Oracle.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version. Required for the BUY scenario. Valid values for MySQL: 5.6, 5.7, and 8.0. Valid values for PostgreSQL: 11 and 14. Valid values for Oracle: 11 and 14.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable the hot standby cluster. Valid values:
   * - ON: Enable.
   * - OFF: Disable.
   * 
   * Valid for the BUY and specification change scenarios.
   * 
   * @example
   * ON
   */
  hotStandbyCluster?: string;
  /**
   * @remarks
   * The specification change direction. Valid values:
   * - ADD: add nodes.
   * - DELETE: remove nodes.
   * - UPGRADE: upgrade specifications.
   * - DOWNGRADE: downgrade specifications.
   * - HOT_STANDBY: hot standby change.
   * - STORAGE: storage space change.
   * - STORAGE_TYPE: storage type change.
   * 
   * @example
   * UPGRADE
   */
  modifyType?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * - BUY: new purchase.
   * - CONVERT: billing method conversion.
   * - RENEW: renewal.
   * - UPGRADE: upgrade specifications or add nodes.
   * - DOWNGRADE: downgrade specifications or remove nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The billing method. Required for the BUY and CONVERT scenarios. Valid values:
   * - Prepaid: subscription.
   * - Postpaid: pay-as-you-go.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription cycle. Valid values:
   * - Month: monthly.
   * - Year: yearly.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The provisioned IOPS. Used for the Standard Edition (SENormal) scenario.
   * 
   * @example
   * 1000
   */
  provisionedIops?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The serverless type. Valid values: AgileServerless.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The storage billing type. Valid values:
   * - Prepaid: subscription.
   * - Postpaid: pay-as-you-go.
   * 
   * @example
   * Prepaid
   */
  storageChargeType?: string;
  /**
   * @remarks
   * The storage space, in GB. Used for prepaid storage or storage specification change scenarios.
   * 
   * @example
   * 50
   */
  storageSpace?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * - PSL5: high performance.
   * - PSL4: standard.
   * - ESSDPL0
   * - ESSDPL1
   * - ESSDPL2
   * - ESSDPL3
   * - ESSDAUTOPL
   * 
   * @example
   * PSL5
   */
  storageType?: string;
  /**
   * @remarks
   * The subscription duration. Used together with Period. Valid for the BUY, CONVERT, and RENEW scenarios when the billing method is Prepaid.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The zone ID. We recommend that you specify this parameter for the BUY scenario.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      creationCategory: 'CreationCategory',
      DBClusterId: 'DBClusterId',
      DBNodeClass: 'DBNodeClass',
      DBNodeIds: 'DBNodeIds',
      DBNodeNum: 'DBNodeNum',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      hotStandbyCluster: 'HotStandbyCluster',
      modifyType: 'ModifyType',
      orderType: 'OrderType',
      payType: 'PayType',
      period: 'Period',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      serverlessType: 'ServerlessType',
      storageChargeType: 'StorageChargeType',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      usedTime: 'UsedTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationCategory: 'string',
      DBClusterId: 'string',
      DBNodeClass: 'string',
      DBNodeIds: { 'type': 'array', 'itemType': 'string' },
      DBNodeNum: 'number',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBClusterPriceRequestDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      hotStandbyCluster: 'string',
      modifyType: 'string',
      orderType: 'string',
      payType: 'string',
      period: 'string',
      provisionedIops: 'string',
      regionId: 'string',
      serverlessType: 'string',
      storageChargeType: 'string',
      storageSpace: 'string',
      storageType: 'string',
      usedTime: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeIds)) {
      $dara.Model.validateArray(this.DBNodeIds);
    }
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

