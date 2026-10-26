// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficControlTaskTrafficRequestTraffics extends $dara.Model {
  /**
   * @remarks
   * The traffic object, which can be an item or an experiment item. Valid values: item1, ER_ALL (global), or a value in the L1_EG1_E1 format.
   * 
   * @example
   * item1
   */
  itemOrExperimentId?: string;
  /**
   * @remarks
   * The timestamp from the behavior log, indicating the log cutoff time. The value is in ISO 8601 format, using Z to indicate the UTC time zone.
   * 
   * @example
   * 2024-01-01T02:05:06.111Z
   */
  recordTime?: string;
  /**
   * @remarks
   * The target traffic of the traffic control target.
   * 
   * @example
   * 10.0
   */
  trafficControlTargetAimTraffic?: number;
  /**
   * @remarks
   * The ID of the traffic control target.
   * 
   * @example
   * 1
   */
  trafficControlTargetId?: string;
  /**
   * @remarks
   * The actual traffic of the traffic control target.
   * 
   * @example
   * 100000
   */
  trafficControlTargetTraffic?: number;
  /**
   * @remarks
   * The overall traffic under the traffic control plan.
   * 
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
   * @remarks
   * The environment to which the task belongs. Valid values:
   * - Daily: daily environment
   * - Pre: pre-release environment
   * - Prod: production environment
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * learn-pairec-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of reported traffic information.
   */
  traffics?: UpdateTrafficControlTaskTrafficRequestTraffics[];
  /**
   * @remarks
   * Invalid parameter. Ignore this parameter.
   * 
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

