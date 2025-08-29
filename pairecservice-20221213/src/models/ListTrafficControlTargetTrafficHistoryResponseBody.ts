// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTargetTrafficHistoryResponseBodyTrafficControlTaskTrafficHistories extends $dara.Model {
  experimentId?: string;
  itemId?: string;
  recordTime?: string;
  trafficControlTargetAimTraffic?: number;
  trafficControlTargetTraffic?: number;
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
  requestId?: string;
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

