// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterArchRequest extends $dara.Model {
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the hot standby storage cluster feature. Valid values:
   * 
   * *   **on**: enables hot standby storage cluster.
   * *   **equal**: Enable a peer-to-peer cluster.
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
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query information about regions.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The zone of the hot standby storage cluster. Valid values:
   * 
   * *   **auto** (default): The zone is automatically selected.
   * 
   * >  You can use the default value when HotStandbyCluster is set to on. If HotStandbyCluster is set to equal, specify the zone of the hot standby storage cluster. You can call the [DescribeZones](https://help.aliyun.com/document_detail/98041.html) operation to query information about zones.
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

