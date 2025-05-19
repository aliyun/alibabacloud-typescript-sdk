// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTrafficControlTaskRequestTrafficControlTargets } from "./CreateTrafficControlTaskRequestTrafficControlTargets";


export class CreateTrafficControlTaskRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  behaviorTableMetaId?: string;
  /**
   * @example
   * Global
   */
  controlGranularity?: string;
  /**
   * @example
   * Guaranteed
   */
  controlLogic?: string;
  /**
   * @example
   * Percent
   */
  controlType?: string;
  /**
   * @example
   * this is a test task
   */
  description?: string;
  /**
   * @example
   * 2024-03-26
   */
  endTime?: string;
  /**
   * @example
   * TimeRange
   */
  executionTime?: string;
  flinkResourceId?: string;
  /**
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @example
   * [{\\"field\\":\\"status\\",\\"option\\":\\"=\\",\\"value\\":\\"1\\"}]
   */
  itemConditionArray?: string;
  /**
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @example
   * Array
   */
  itemConditionType?: string;
  /**
   * @example
   * 3
   */
  itemTableMetaId?: string;
  /**
   * @example
   * task-1
   */
  name?: string;
  preExperimentIds?: string;
  prodExperimentIds?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serviceId?: string;
  /**
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @example
   * [{\\"field\\":\\"click\\",\\"option\\":\\"<=\\",\\"value\\":\\"30\\"}]
   */
  statisBehaviorConditionArray?: string;
  /**
   * @example
   * click=30
   */
  statisBehaviorConditionExpress?: string;
  /**
   * @example
   * Array
   */
  statisBehaviorConditionType?: string;
  trafficControlTargets?: CreateTrafficControlTaskRequestTrafficControlTargets[];
  /**
   * @example
   * [{\\"field\\":\\"gender\\",\\"option\\":\\"=\\",\\"value\\":\\"male\\"}]
   */
  userConditionArray?: string;
  /**
   * @example
   * age<=30&&(3<=level<=6)&&gender=male
   */
  userConditionExpress?: string;
  /**
   * @example
   * Array
   */
  userConditionType?: string;
  /**
   * @example
   * 2
   */
  userTableMetaId?: string;
  static names(): { [key: string]: string } {
    return {
      behaviorTableMetaId: 'BehaviorTableMetaId',
      controlGranularity: 'ControlGranularity',
      controlLogic: 'ControlLogic',
      controlType: 'ControlType',
      description: 'Description',
      endTime: 'EndTime',
      executionTime: 'ExecutionTime',
      flinkResourceId: 'FlinkResourceId',
      instanceId: 'InstanceId',
      itemConditionArray: 'ItemConditionArray',
      itemConditionExpress: 'ItemConditionExpress',
      itemConditionType: 'ItemConditionType',
      itemTableMetaId: 'ItemTableMetaId',
      name: 'Name',
      preExperimentIds: 'PreExperimentIds',
      prodExperimentIds: 'ProdExperimentIds',
      sceneId: 'SceneId',
      serviceId: 'ServiceId',
      startTime: 'StartTime',
      statisBehaviorConditionArray: 'StatisBehaviorConditionArray',
      statisBehaviorConditionExpress: 'StatisBehaviorConditionExpress',
      statisBehaviorConditionType: 'StatisBehaviorConditionType',
      trafficControlTargets: 'TrafficControlTargets',
      userConditionArray: 'UserConditionArray',
      userConditionExpress: 'UserConditionExpress',
      userConditionType: 'UserConditionType',
      userTableMetaId: 'UserTableMetaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behaviorTableMetaId: 'string',
      controlGranularity: 'string',
      controlLogic: 'string',
      controlType: 'string',
      description: 'string',
      endTime: 'string',
      executionTime: 'string',
      flinkResourceId: 'string',
      instanceId: 'string',
      itemConditionArray: 'string',
      itemConditionExpress: 'string',
      itemConditionType: 'string',
      itemTableMetaId: 'string',
      name: 'string',
      preExperimentIds: 'string',
      prodExperimentIds: 'string',
      sceneId: 'string',
      serviceId: 'string',
      startTime: 'string',
      statisBehaviorConditionArray: 'string',
      statisBehaviorConditionExpress: 'string',
      statisBehaviorConditionType: 'string',
      trafficControlTargets: { 'type': 'array', 'itemType': CreateTrafficControlTaskRequestTrafficControlTargets },
      userConditionArray: 'string',
      userConditionExpress: 'string',
      userConditionType: 'string',
      userTableMetaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.trafficControlTargets)) {
      $dara.Model.validateArray(this.trafficControlTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

