// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The display language of the response. Valid values:
   * 
   * *   **zh-CN**: Chinese. This is the default value.
   * *   **en-US**: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **Redis**
   * *   **Memcache**
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PrePaid** (default): subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > This parameter is available and required only if the **OrderType** parameter is set to **UPGRADE** or **DOWNGRADE**.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * 
   * *   **professional**: Standard Edition. This edition supports the standalone, master-replica, read /write splitting, and cluster architectures and provides high scalability.
   * 
   * @example
   * professional
   */
  instanceScene?: string;
  /**
   * @remarks
   * The ID of the data node for which you want to query available resources that can be created. You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query the ID of the data node. Remove the number sign (`#`) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2\\*\\*\\*\\*-db-0.
   * 
   * > Before you specify this parameter, you must set the **InstanceId** parameter to the ID of an instance that uses the cluster or read/write splitting architecture.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * *   **BUY** (default): orders that are used to create instances
   * *   **UPGRADE**: orders that are used to upgrade instances
   * *   **DOWNGRADE**: orders that are used to downgrade instances
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The instance type. Default value: Local. Valid values:
   * 
   * *   **Local**: classic Redis Open-Source Edition instance or classic DRAM-based instance
   * *   **Tair_rdb**: cloud-native DRAM-based instance
   * *   **Tair_scm**: persistent memory-optimized instance
   * *   **Tair_essd**: ESSD/SSD-based instance
   * *   **OnECS**: cloud-native Redis Open-Source Edition instance
   * 
   * >  The default value of this parameter is Local. To query disk resources, you must specify the instance type that provides the required disk resources.
   * 
   * @example
   * Local
   */
  productType?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the IDs of resource groups.
   * 
   * >  You can also query the IDs of resource groups in the Resource Management console. For more information, see [View basic information about a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4e******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      engine: 'Engine',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceScene: 'InstanceScene',
      nodeId: 'NodeId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      engine: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceScene: 'string',
      nodeId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
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

