// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBNodesRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The specification of the new node. The specification must be the same as that of the existing nodes. For more information, see the following topics:
   * * PolarDB for MySQL: [Compute node specifications](https://help.aliyun.com/document_detail/102542.html). 
   * * PolarDB for PostgreSQL (Compatible with Oracle): [Compute node specifications](https://help.aliyun.com/document_detail/207921.html).
   * * PolarDB for PostgreSQL: [Compute node specifications](https://help.aliyun.com/document_detail/209380.html).
   * >* You must specify at least one of DBNode.N.ZoneId and DBNode.N.TargetClass. N is an integer that starts from 1. Maximum value of N = 16 - current number of nodes.
   * >* Only PolarDB for MySQL clusters support adding multiple read-only nodes at a time. You can add up to 15 read-only nodes.
   * >* This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL clusters. This parameter is optional for PolarDB for MySQL clusters.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  targetClass?: string;
  /**
   * @remarks
   * The zone of the new node. The zone must be the same as that of the existing nodes. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query zone IDs.
   * 
   * >* You must specify at least one of DBNode.N.ZoneId and DBNode.N.TargetClass. N is an integer that starts from 1. Maximum value of N = 16 - current number of nodes. 
   * >* Only PolarDB for MySQL clusters support adding multiple read-only nodes at a time. You can add up to 15 read-only nodes.
   * >* This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL clusters. This parameter is optional for PolarDB for MySQL clusters.
   * 
   * @example
   * cn-qingdao-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      targetClass: 'TargetClass',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetClass: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): Use coupons.
   * * false: Do not use coupons.
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value. Make sure that the value is unique among different requests. The token is case-sensitive and can contain only ASCII characters. The token can be up to 64 characters in length.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The cloud service provider to which the node belongs.
   * 
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The information about the new node.
   * 
   * This parameter is required.
   */
  DBNode?: CreateDBNodesRequestDBNode[];
  /**
   * @remarks
   * The node type. Valid values:
   * - RO
   * - STANDBY
   * - DLNode.
   * 
   * @example
   * RO
   */
  DBNodeType?: string;
  /**
   * @remarks
   * The ID of the cluster endpoint to which you want to add the new node. If you want to add the node to multiple endpoints, separate the endpoint IDs with commas (,).
   * > * You can call the [DescribeDBClusterEndpoints](https://help.aliyun.com/document_detail/98205.html) operation to query the details of cluster endpoints, including endpoint IDs.
   * >* You can specify the IDs of the default cluster endpoint and custom cluster endpoints.
   * >* If you leave this parameter empty, the new node is added to all cluster endpoints that have the **Automatically Associate New Nodes** feature enabled (the value of `AutoAddNewNodes` is `Enable`).
   * 
   * @example
   * pe-****************,pe-****************
   */
  endpointBindList?: string;
  /**
   * @remarks
   * Specifies whether to enable In-Memory Column Index (IMCI). Valid values:
   * 
   * - **ON**: enabled.
   * 
   * - **OFF**: disabled. This is the default value.
   * 
   * > PolarDB for PostgreSQL (Compatible with Oracle) and PolarDB for PostgreSQL do not support this parameter.
   * 
   * @example
   * ON
   */
  imciSwitch?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start running the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * The latest time must be at least 30 minutes later than the start time.
   * >* If you specify `PlannedStartTime` but leave this parameter empty, the latest time defaults to `start time + 30 minutes`. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start running the scheduled task for adding nodes. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * The start time must be within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can specify a start time within the range of `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * >* If you leave this parameter empty, the task for adding nodes is immediately run.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The coupon code. If you do not specify this parameter, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      cloudProvider: 'CloudProvider',
      DBClusterId: 'DBClusterId',
      DBNode: 'DBNode',
      DBNodeType: 'DBNodeType',
      endpointBindList: 'EndpointBindList',
      imciSwitch: 'ImciSwitch',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      promotionCode: 'PromotionCode',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      cloudProvider: 'string',
      DBClusterId: 'string',
      DBNode: { 'type': 'array', 'itemType': CreateDBNodesRequestDBNode },
      DBNodeType: 'string',
      endpointBindList: 'string',
      imciSwitch: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      promotionCode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

