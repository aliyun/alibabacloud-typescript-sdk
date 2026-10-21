// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficStatisticsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * Note: This parameter is required in practice. If this parameter is not specified, the API returns a 400 error: "The specified Lang can not be empty."
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of user IDs for batch data ingestion.
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
   * The region where the threat detection and response data management center resides. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: The assets reside in the Chinese mainland.
   * - ap-southeast-1: The assets reside outside China.
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
   * The user ID that the administrator switches to when viewing from another member\\"s perspective.
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
   * The statistical granularity. Valid values:
   * - day: day. This is the default value.
   * - hour: hour.
   * 
   * @example
   * day
   */
  trafficStatisticPeriodType?: string;
  /**
   * @remarks
   * The statistical dimension. Valid values:
   * - Region
   * - Product
   * - DataIngetion
   * - logUserId
   * 
   * @example
   * Region
   */
  trafficStatisticType?: string;
  /**
   * @remarks
   * The log traffic type.
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

