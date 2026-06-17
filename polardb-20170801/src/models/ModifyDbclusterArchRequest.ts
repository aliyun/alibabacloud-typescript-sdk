// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterArchRequest extends $dara.Model {
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
   * Specifies whether to enable a hot standby cluster. Valid values:
   * 
   * - **on**: Enables a hot standby cluster.
   * 
   * - **equal**: Enables a peer cluster.
   * 
   * @example
   * on
   */
  hotStandbyCluster?: string;
  /**
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/98041.html).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The zone for the hot standby storage cluster. Valid values:
   * 
   * - **auto** (default): The system automatically selects a zone.
   * 
   * > The default value is valid only when \\`HotStandbyCluster\\` is set to \\`on\\`. A specific zone is required when \\`HotStandbyCluster\\` is set to \\`equal\\`. For more information about zones, see [DescribeZones](https://help.aliyun.com/document_detail/98041.html).
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

