// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficStatisticsResponseBodyTrafficStatisticsTrafficStatisticData extends $dara.Model {
  /**
   * @remarks
   * The statistic time.
   * 
   * @example
   * 20250815
   */
  trafficStatisticTime?: number;
  /**
   * @remarks
   * The statistic value.
   * 
   * @example
   * 1.699814
   */
  trafficStatisticValue?: number;
  static names(): { [key: string]: string } {
    return {
      trafficStatisticTime: 'TrafficStatisticTime',
      trafficStatisticValue: 'TrafficStatisticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficStatisticTime: 'number',
      trafficStatisticValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficStatisticsResponseBodyTrafficStatistics extends $dara.Model {
  /**
   * @remarks
   * The statistics information.
   */
  trafficStatisticData?: ListTrafficStatisticsResponseBodyTrafficStatisticsTrafficStatisticData[];
  /**
   * @remarks
   * The statistic target.
   * 
   * @example
   * all
   */
  trafficStatisticTarget?: string;
  static names(): { [key: string]: string } {
    return {
      trafficStatisticData: 'TrafficStatisticData',
      trafficStatisticTarget: 'TrafficStatisticTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficStatisticData: { 'type': 'array', 'itemType': ListTrafficStatisticsResponseBodyTrafficStatisticsTrafficStatisticData },
      trafficStatisticTarget: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.trafficStatisticData)) {
      $dara.Model.validateArray(this.trafficStatisticData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of traffic statistics.
   */
  trafficStatistics?: ListTrafficStatisticsResponseBodyTrafficStatistics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficStatistics: 'TrafficStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficStatistics: { 'type': 'array', 'itemType': ListTrafficStatisticsResponseBodyTrafficStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.trafficStatistics)) {
      $dara.Model.validateArray(this.trafficStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

