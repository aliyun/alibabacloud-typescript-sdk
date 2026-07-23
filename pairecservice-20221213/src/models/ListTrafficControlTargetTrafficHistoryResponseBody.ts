// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTargetTrafficHistoryResponseBodyTrafficControlTaskTrafficHistories extends $dara.Model {
  /**
   * @remarks
   * The ID of the experiment.
   * 
   * @example
   * E1
   */
  experimentId?: string;
  /**
   * @remarks
   * The ID of the item.
   * 
   * @example
   * 1001
   */
  itemId?: string;
  /**
   * @remarks
   * The timestamp of the record.
   * 
   * @example
   * 2023-10-10 10:10:58
   */
  recordTime?: string;
  /**
   * @remarks
   * The intended traffic for the traffic control target.
   * 
   * @example
   * 30
   */
  trafficControlTargetAimTraffic?: number;
  /**
   * @remarks
   * The actual traffic of the traffic control target.
   * 
   * @example
   * 20
   */
  trafficControlTargetTraffic?: number;
  /**
   * @remarks
   * The overall traffic of the traffic control task.
   * 
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of historical records.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  /**
   * @remarks
   * A list of the traffic control history records.
   */
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

