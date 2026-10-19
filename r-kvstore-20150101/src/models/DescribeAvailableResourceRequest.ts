// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * * **zh-CN**: Chinese. This is the default value.
   * * **en-US**: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * * **Redis**: Redis engine
   * * **Memcache**: Memcache engine
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PrePaid** (default): subscription
   * * **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * > This parameter is available and required only when **OrderType** is set to **UPGRADE** or **DOWNGRADE**.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The product series. Valid values:
   * - **professional**: Professional Edition. This edition supports the standalone, primary/secondary, read/write splitting, and cluster architectures, and provides high scalability.
   *  <props="china">
   * -  **economical**: Economical Edition. This edition supports only the primary/secondary architecture and is cost-effective. For more information, see [YiTian RDS instances](https://help.aliyun.com/document_detail/2489678.html).
   * 
   * @example
   * professional
   */
  instanceScene?: string;
  /**
   * @remarks
   * The data node ID. You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to obtain the data node ID. For the obtained data node ID, you must remove the number sign (`#`) and the content that follows it. For example, retain only r-bp10noxlhcoim2****-db-0.
   * > Before you specify this parameter, you must also specify the **InstanceId** parameter, and the instance must use the cluster or read/write splitting architecture.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * * **BUY** (default): new purchase
   * * **UPGRADE**: upgrade instance type
   * * **DOWNGRADE**: downgrade instance type
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The product type. Valid values:
   * - **Local** (default): Redis Community Edition instance (classic architecture) or memory-optimized instance (classic architecture).
   * - **Tair_rdb**: memory-optimized instance (cloud-native architecture).
   * - **Tair_scm**: persistent memory-optimized instance.
   * - **Tair_essd**: disk-optimized instance.
   * - **OnECS**: Redis Community Edition instance (cloud-native architecture).
   * > The default value is Local. If you want to query cloud disk resources, you must specify the product type that corresponds to the required cloud disk resources.
   * 
   * @example
   * Local
   */
  productType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can invoke the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the resource group ID.
   * > You can also obtain the resource group ID in the console. For related operations, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
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
   * The zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the zone ID.
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

