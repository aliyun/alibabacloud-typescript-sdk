// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterArchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): Uses coupons.
   * * false: Does not use coupons.
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the hot standby cluster. Valid values:
   * 
   * - **on**: Enables the hot standby cluster.
   * - **equal**: Enables the peer cluster.
   * 
   * @example
   * on
   */
  hotStandbyCluster?: string;
  /**
   * @remarks
   * The coupon code. If this parameter is not specified, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region information.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The zone of the hot standby storage cluster. Valid values:
   * 
   * - **auto** (default): Automatically selected.
   * > When the HotStandbyCluster parameter is set to on, you can use the default value. When the HotStandbyCluster parameter is set to equal, you must specify a specific zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/98041.html) operation to query zone details.
   * 
   * @example
   * cn-beijing-i
   */
  standbyAZ?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      DBClusterId: 'DBClusterId',
      hotStandbyCluster: 'HotStandbyCluster',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      standbyAZ: 'StandbyAZ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      DBClusterId: 'string',
      hotStandbyCluster: 'string',
      promotionCode: 'string',
      regionId: 'string',
      standbyAZ: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

