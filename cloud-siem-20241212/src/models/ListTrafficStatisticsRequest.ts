// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficStatisticsRequest extends $dara.Model {
  /**
   * @example
   * zh。
   */
  lang?: string;
  logUserIds?: number[];
  /**
   * @example
   * alibaba_cloud_sas。
   */
  productId?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 1。
   */
  regionTag?: number;
  /**
   * @example
   * 173326*******。
   */
  roleFor?: number;
  /**
   * @example
   * 30。
   */
  trafficStatisticPeriod?: string;
  /**
   * @example
   * day。
   */
  trafficStatisticPeriodType?: string;
  /**
   * @example
   * Region。
   */
  trafficStatisticType?: string;
  /**
   * @example
   * agentAnalysisLogTraffic
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      logUserIds: 'LogUserIds',
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
      logUserIds: { 'type': 'array', 'itemType': 'number' },
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
    if(Array.isArray(this.logUserIds)) {
      $dara.Model.validateArray(this.logUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

