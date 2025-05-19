// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTrafficControlTaskRequestTrafficControlTargets } from "./UpdateTrafficControlTaskRequestTrafficControlTargets";


export class UpdateTrafficControlTaskRequest extends $dara.Model {
  behaviorTableMetaId?: string;
  controlGranularity?: string;
  controlLogic?: string;
  controlType?: string;
  description?: string;
  endTime?: string;
  executionTime?: string;
  flinkResourceId?: string;
  instanceId?: string;
  itemConditionArray?: string;
  itemConditionExpress?: string;
  itemConditionType?: string;
  itemTableMetaId?: string;
  name?: string;
  preExperimentIds?: string;
  prodExperimentIds?: string;
  sceneId?: string;
  serviceId?: string;
  startTime?: string;
  statisBaeaviorConditionArray?: string;
  statisBehaviorConditionExpress?: string;
  statisBehaviorConditionType?: string;
  trafficControlTargets?: UpdateTrafficControlTaskRequestTrafficControlTargets[];
  userConditionArray?: string;
  userConditionExpress?: string;
  userConditionType?: string;
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
      statisBaeaviorConditionArray: 'StatisBaeaviorConditionArray',
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
      statisBaeaviorConditionArray: 'string',
      statisBehaviorConditionExpress: 'string',
      statisBehaviorConditionType: 'string',
      trafficControlTargets: { 'type': 'array', 'itemType': UpdateTrafficControlTaskRequestTrafficControlTargets },
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

