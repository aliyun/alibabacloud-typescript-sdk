// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTargetTrafficHistoryResponseBodyTrafficControlTaskTrafficHistories extends $dara.Model {
  /**
   * @example
   * E1
   */
  experimentId?: string;
  /**
   * @example
   * 1001
   */
  itemId?: string;
  /**
   * @example
   * 2023-10-10 10:10:58
   */
  recordTime?: string;
  /**
   * @example
   * 30
   */
  trafficControlTargetAimTraffic?: number;
  /**
   * @example
   * 20
   */
  trafficControlTargetTraffic?: number;
  /**
   * @example
   * 60
   */
  trafficControlTaskTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      itemId: 'ItemId',
      recordTime: 'RecordTime',
      trafficControlTargetAimTraffic: 'TrafficControlTargetAimTraffic',
      trafficControlTargetTraffic: 'TrafficControlTargetTraffic',
      trafficControlTaskTraffic: 'TrafficControlTaskTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      itemId: 'string',
      recordTime: 'string',
      trafficControlTargetAimTraffic: 'number',
      trafficControlTargetTraffic: 'number',
      trafficControlTaskTraffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTargetTrafficHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: string;
  trafficControlTaskTrafficHistories?: ListTrafficControlTargetTrafficHistoryResponseBodyTrafficControlTaskTrafficHistories[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficControlTaskTrafficHistories: 'TrafficControlTaskTrafficHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      trafficControlTaskTrafficHistories: { 'type': 'array', 'itemType': ListTrafficControlTargetTrafficHistoryResponseBodyTrafficControlTaskTrafficHistories },
    };
  }

  validate() {
    if(Array.isArray(this.trafficControlTaskTrafficHistories)) {
      $dara.Model.validateArray(this.trafficControlTaskTrafficHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

