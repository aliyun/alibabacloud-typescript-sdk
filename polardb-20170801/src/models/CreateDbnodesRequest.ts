// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBNodesRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The specifications of the new node. The specifications must be the same as those of the existing nodes in the cluster. For more information, see the following topics:
   * 
   * - PolarDB for MySQL: [compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * 
   * - PolarDB for PostgreSQL (Oracle Compatible): [compute node specifications](https://help.aliyun.com/document_detail/207921.html).
   * 
   * - PolarDB for PostgreSQL: [compute node specifications](https://help.aliyun.com/document_detail/209380.html).
   * 
   * > * You must specify either `DBNode.N.ZoneId` or `DBNode.N.TargetClass`. `N` is an integer that starts from 1. The maximum value of `N` is 16 minus the number of existing nodes.
   * >
   * > * For PolarDB for MySQL clusters, you can add multiple read-only nodes in a single request, up to a total of 15 read-only nodes.
   * >
   * > * This parameter is required for PolarDB for PostgreSQL (Oracle Compatible) and PolarDB for PostgreSQL clusters, but optional for PolarDB for MySQL clusters.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  targetClass?: string;
  /**
   * @remarks
   * The ID of the zone for the new node. This zone must be the same as the zone of the existing nodes. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query zone IDs.
   * 
   * > - You must specify either `DBNode.N.ZoneId` or `DBNode.N.TargetClass`. `N` is an integer that starts from 1. The maximum value of `N` is 16 minus the number of existing nodes.
   * >
   * > - For PolarDB for MySQL clusters, you can add multiple read-only nodes in a single request, up to a total of 15 read-only nodes.
   * >
   * > - This parameter is required for PolarDB for PostgreSQL (Oracle Compatible) and PolarDB for PostgreSQL clusters, but optional for PolarDB for MySQL clusters.
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
   * Specifies whether to automatically use a coupon. Valid values:
   * 
   * - true (Default): An available coupon is automatically used.
   * 
   * - false: A coupon is not automatically used.
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A unique, client-generated token to ensure the idempotence of the request. This token is case-sensitive and cannot exceed 64 ASCII characters.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The cloud provider of the node.
   * 
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Details of the nodes to add.
   * 
   * This parameter is required.
   */
  DBNode?: CreateDBNodesRequestDBNode[];
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - RO
   * 
   * - STANDBY
   * 
   * - DLNode
   * 
   * @example
   * RO
   */
  DBNodeType?: string;
  /**
   * @remarks
   * The ID of the cluster endpoint to which you want to add the new nodes. If you want to add the nodes to multiple cluster endpoints, separate the endpoint IDs with a comma (,).
   * 
   * > - You can call the [DescribeDBClusterEndpoints](https://help.aliyun.com/document_detail/98205.html) operation to query the details of cluster endpoints, including their IDs.
   * >
   * > - You can specify the IDs of the default cluster endpoint and custom cluster endpoints.
   * >
   * > - If you leave this parameter empty, the new nodes are automatically added to all cluster endpoints where the **Auto Add New Nodes** feature is enabled (the `AutoAddNewNodes` parameter is set to `Enable`).
   * 
   * @example
   * pe-****************,pe-****************
   */
  endpointBindList?: string;
  /**
   * @remarks
   * Specifies whether to enable In-Memory Column Index (IMCI). Valid values:
   * 
   * - **ON**: The feature is enabled.
   * 
   * - **OFF** (Default): The feature is disabled.
   * 
   * > This parameter is not supported for PolarDB for PostgreSQL (Oracle Compatible) and PolarDB for PostgreSQL clusters.
   * 
   * @example
   * ON
   */
  imciSwitch?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start the scheduled task. The time is specified in the `YYYY-MM-DDThh:mm:ssZ` format and is in UTC.
   * 
   * > - This time must be at least 30 minutes later than the value of `PlannedStartTime`.
   * >
   * > - If you specify `PlannedStartTime` but not this parameter, the latest start time defaults to 30 minutes after the `PlannedStartTime`. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled task to add the nodes. The time must be in UTC and in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * > - The start time must be within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can set this parameter to a value between `2021-01-14T09:00:00Z` and `2021-01-15T09:00:00Z`.
   * >
   * > - If you omit this parameter, the nodes are added immediately.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The promotion code. If you omit this parameter, an applicable coupon is used by default.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * The ID of the resource group.
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

