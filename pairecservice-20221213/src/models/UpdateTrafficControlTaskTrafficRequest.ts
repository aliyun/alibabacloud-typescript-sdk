// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficControlTaskTrafficRequestTraffics extends $dara.Model {
  /**
   * @example
   * item1
   */
  itemOrExperimentId?: string;
  /**
   * @example
   * 2024-01-01T02:05:06.111Z
   */
  recordTime?: string;
  /**
   * @example
   * 10.0
   */
  trafficControlTargetAimTraffic?: number;
  /**
   * @example
   * 1
   */
  trafficControlTargetId?: string;
  /**
   * @example
   * 100000
   */
  trafficControlTargetTraffic?: number;
  /**
   * @example
   * 1000000
   */
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
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * learn-pairec-cn-xxx
   */
  instanceId?: string;
  traffics?: UpdateTrafficControlTaskTrafficRequestTraffics[];
  /**
   * @example
   * null
   */
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

