// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The additional parameter for business information.
   * 
   * @example
   * {"AccountPassword":"Pw123456","DBInstanceDescription":"test"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The commodity code. Valid values:
   * - **dds**: pay-as-you-go replica set instance
   * - **badds**: subscription replica set instance
   * - **dds_sharding**: pay-as-you-go sharded cluster instance
   * - **badds_sharding**: subscription sharded cluster instance
   * - **badds_sharding_intl**: subscription sharded cluster instance on the international site
   * - **dds_sharding_intl**: pay-as-you-go sharded cluster instance on the international site
   * - **badds_sharding_jp**: subscription sharded cluster instance on the Japan site
   * - **badds_intl**: subscription replica set instance on the international site
   * - **dds_intl**: pay-as-you-go replica set instance on the international site
   * 
   * @example
   * badds
   */
  commodityCode?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - **default** or **null** (default): Use a coupon.
   * - **youhuiquan_promotion_option_id_for_blank**: Do not use a coupon.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The JSON-formatted string that contains multiple pieces of information about instances. For metric descriptions and more JSON format examples, see [DBInstances metric description for the DescribePrice operation](https://help.aliyun.com/document_detail/197291.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [ { "DBInstanceId":"dds-bp1b6e54e7cc****", "RegionId":"cn-hangzhou", "ZoneId":"cn-hangzhou-h", "Engine":"MongoDB", "EngineVersion":" 5.0", "DBInstanceClass":"mdb.shard.2x.xlarge.d", "DBInstanceStorage":30, "ChargeType":"PrePaid", "Period":1, "StorageType":"cloud_essd1" } ]
   */
  DBInstances?: string;
  /**
   * @remarks
   * Specifies whether to return order parameters. Valid values:
   * - **false** (default): Do not return order parameters.
   * - **true**: Return order parameters.
   * 
   * @example
   * true
   */
  orderParamOut?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * - **BUY**: Create an instance.
   * - **UPGRADE**: Upgrade instance configurations.
   * - **RENEW**: Renew an instance.
   * 
   * This parameter is required.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The product code. Default value: **dds**.
   * 
   * @example
   * dds
   */
  productCode?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      businessInfo: 'BusinessInfo',
      commodityCode: 'CommodityCode',
      couponNo: 'CouponNo',
      DBInstances: 'DBInstances',
      orderParamOut: 'OrderParamOut',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessInfo: 'string',
      commodityCode: 'string',
      couponNo: 'string',
      DBInstances: 'string',
      orderParamOut: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

