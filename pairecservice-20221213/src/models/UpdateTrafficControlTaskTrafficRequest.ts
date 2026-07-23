// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficControlTaskTrafficRequestTraffics extends $dara.Model {
  /**
   * @remarks
   * The identifier for the traffic object. This can be an item ID, such as `item1`, an experiment ID, a global identifier (`ER_ALL`), or a value in `L1_EG1_E1` format.
   * 
   * @example
   * item1
   */
  itemOrExperimentId?: string;
  /**
   * @remarks
   * The timestamp from the behavior log. This indicates that the log data is current as of this timestamp.
   * 
   * @example
   * 2024-01-01T02:05:06.111Z
   */
  recordTime?: string;
  /**
   * @remarks
   * The configured target traffic for the traffic control target.
   * 
   * @example
   * 10.0
   */
  trafficControlTargetAimTraffic?: number;
  /**
   * @remarks
   * The traffic control target ID.
   * 
   * @example
   * 1
   */
  trafficControlTargetId?: string;
  /**
   * @remarks
   * The actual traffic volume observed for the traffic control target.
   * 
   * @example
   * 100000
   */
  trafficControlTargetTraffic?: number;
  /**
   * @remarks
   * The total traffic for the traffic control task.
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
   * The environment. Valid values: `Daily` (daily environment), `Pre` (pre-release environment), and `Prod` (production environment).
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
   * A list of traffic objects to report.
   */
  traffics?: UpdateTrafficControlTaskTrafficRequestTraffics[];
  /**
   * @remarks
   * This parameter is invalid and should be ignored.
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

