// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {"AccountPassword":"Pw123456","DBInstanceDescription":"test"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The code of the instance. Valid values:
   * 
   * *   **dds**: a replica set instance that uses the pay-as-you-go billing method
   * *   **badds**: a replica set instance that uses the subscription billing method
   * *   **dds_sharding**: a sharded cluster instance that uses the pay-as-you-go billing method
   * *   **badds_sharding**: a sharded cluster instance that uses the subscription billing method
   * *   **badds_sharding_intl**: a sharded cluster instance that uses the subscription billing method and is available on the International site (alibabacloud.com)
   * *   **dds_sharding_intl**: a sharded cluster instance that uses the pay-as-you-go billing method and is available on the International site (alibabacloud.com)
   * *   **badds_sharding_jp**: a sharded cluster instance that uses the subscription billing method and is available on the Japan site (jp.alibabacloud.com)
   * *   **badds_intl**: a replica set instance that uses the subscription billing method and is available on the International site (alibabacloud.com)
   * *   **dds_intl**: a replica set instance that uses the pay-as-you-go billing method and is available on the International site (alibabacloud.com)
   * 
   * @example
   * badds
   */
  commodityCode?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: null. Valid values:
   * 
   * *   **default** or **null**: uses coupons.
   * *   **youhuiquan_promotion_option_id_for_blank**: does not use coupons.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * A JSON string that contains the details of the instance. For more information about the parameter and sample JSON formats, see [DescribePrice](https://help.aliyun.com/document_detail/197291.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [ { "DBInstanceId":"dds-bp1b6e54e7cc****", "RegionId":"cn-hangzhou", "ZoneId":"cn-hangzhou-h", "Engine":"MongoDB", "EngineVersion":" 5.0", "DBInstanceClass":"mdb.shard.2x.xlarge.d", "DBInstanceStorage":30, "ChargeType":"PrePaid", "Period":1, "StorageType":"cloud_essd1" } ]
   */
  DBInstances?: string;
  /**
   * @remarks
   * Specifies whether to return the OrderParams parameter. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * true
   */
  orderParamOut?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * *   **BUY**
   * *   **UPGRADE**
   * *   **RENEW**
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
   * The code of the service. Default value: **dds**.
   * 
   * @example
   * dds
   */
  productCode?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
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

