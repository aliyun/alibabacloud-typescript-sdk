// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficStatisticsShrinkRequest extends $dara.Model {
  /**
   * @example
   * zh。
   */
  lang?: string;
  logUserIdsShrink?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

