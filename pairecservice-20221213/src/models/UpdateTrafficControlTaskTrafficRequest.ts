// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficControlTaskTrafficRequestTraffics extends $dara.Model {
  itemOrExperimentId?: string;
  recordTime?: string;
  trafficControlTargetAimTraffic?: number;
  trafficControlTargetId?: string;
  trafficControlTargetTraffic?: number;
  trafficControlTaskTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      itemOrExperimentId: 'ItemOrExperimentId',
      recordTime: 'RecordTime',
      trafficControlTargetAimTraffic: 'TrafficControlTargetAimTraffic',
      trafficControlTargetId: 'TrafficControlTargetId',
      trafficControlTargetTraffic: 'TrafficControlTargetTraffic',
      trafficControlTaskTraffic: 'TrafficControlTaskTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemOrExperimentId: 'string',
      recordTime: 'string',
      trafficControlTargetAimTraffic: 'number',
      trafficControlTargetId: 'string',
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

export class UpdateTrafficControlTaskTrafficRequest extends $dara.Model {
  environment?: string;
  instanceId?: string;
  traffics?: UpdateTrafficControlTaskTrafficRequestTraffics[];
  newParam3?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      traffics: 'Traffics',
      newParam3: 'new-param-3',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      traffics: { 'type': 'array', 'itemType': UpdateTrafficControlTaskTrafficRequestTraffics },
      newParam3: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.traffics)) {
      $dara.Model.validateArray(this.traffics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

