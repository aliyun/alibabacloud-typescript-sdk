// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModifyBEClusterInquiryRequest extends $dara.Model {
  /**
   * @remarks
   * The size of the elastic cache.
   * 
   * @example
   * 200
   */
  cacheSize?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-xxx-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * Valid values:
   * 
   * *   selectdb_pre_public_intl: subscription commodity on the international site (alibabacloud.com)
   * *   selectdb_go_public_cn: pay-as-you-go commodity on the China site (aliyun.com)
   * *   selectdb_go_public_intl: pay-as-you-go commodity on the international site (alibabacloud.com)
   * *   selectdb_pre_public_cn: subscription commodity on the China site (aliyun.com)
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb_go_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The number of elastic CPU cores.
   * 
   * @example
   * 4
   */
  computeSize?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-xxx
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to change the billing method of the cluster.
   * 
   * @example
   * true
   */
  modifyClusterChargeType?: boolean;
  /**
   * @remarks
   * The size of the reserved cache.
   * 
   * @example
   * 200
   */
  preCacheSize?: number;
  /**
   * @remarks
   * The number of reserved CPU cores.
   * 
   * @example
   * 4
   */
  preComputeSize?: number;
  /**
   * @remarks
   * The billing cycle.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * *   Minute
   * *   Hour
   * *   Day
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  pricingCycle?: string;
  /**
   * @example
   * 123412345
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The number of clusters whose specifications are to be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      commodityCode: 'CommodityCode',
      computeSize: 'ComputeSize',
      dbInstanceId: 'DbInstanceId',
      modifyClusterChargeType: 'ModifyClusterChargeType',
      preCacheSize: 'PreCacheSize',
      preComputeSize: 'PreComputeSize',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'number',
      chargeType: 'string',
      clusterId: 'string',
      commodityCode: 'string',
      computeSize: 'number',
      dbInstanceId: 'string',
      modifyClusterChargeType: 'boolean',
      preCacheSize: 'number',
      preComputeSize: 'number',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      quantity: 'number',
      regionId: 'string',
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

