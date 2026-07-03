// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficStatisticsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response messages. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * A list of user IDs for batch data ingestion.
   */
  logUserIdsShrink?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select a region based on the location of your asset. Valid values:
   * 
   * - cn-hangzhou: Your asset is in the Chinese mainland.
   * 
   * - ap-southeast-1: Your asset is outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * 1
   */
  regionTag?: number;
  /**
   * @remarks
   * The user ID of a member. This parameter is used by an administrator to switch to the perspective of the member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The statistical period.
   * 
   * @example
   * 30
   */
  trafficStatisticPeriod?: string;
  /**
   * @remarks
   * The statistic granularity. Valid values:
   * 
   * - day: day. This is the default value.
   * 
   * - hour: hour.
   * 
   * @example
   * day
   */
  trafficStatisticPeriodType?: string;
  /**
   * @remarks
   * The statistic dimension. Valid values:
   * 
   * - Region
   * 
   * - Product
   * 
   * - DataIngetion
   * 
   * - logUserId
   * 
   * @example
   * Region
   */
  trafficStatisticType?: string;
  /**
   * @remarks
   * The type of the log traffic.
   * 
   * @example
   * agentAnalysisLogTraffic
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      logUserIdsShrink: 'LogUserIds',
      productId: 'ProductId',
      regionId: 'RegionId',
      regionTag: 'RegionTag',
      roleFor: 'RoleFor',
      trafficStatisticPeriod: 'TrafficStatisticPeriod',
      trafficStatisticPeriodType: 'TrafficStatisticPeriodType',
      trafficStatisticType: 'TrafficStatisticType',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      logUserIdsShrink: 'string',
      productId: 'string',
      regionId: 'string',
      regionTag: 'number',
      roleFor: 'number',
      trafficStatisticPeriod: 'string',
      trafficStatisticPeriodType: 'string',
      trafficStatisticType: 'string',
      trafficType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

