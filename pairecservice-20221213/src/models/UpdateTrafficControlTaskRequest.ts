// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficControlTaskRequestTrafficControlTargets extends $dara.Model {
  /**
   * @example
   * 2026-02-06T18:02:57.487556956+08:00
   */
  endTime?: string;
  /**
   * @example
   * exposure
   */
  event?: string;
  /**
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @example
   * age>20
   */
  itemConditionExpress?: string;
  /**
   * @example
   * Array
   */
  itemConditionType?: string;
  /**
   * @example
   * target-1
   */
  name?: string;
  /**
   * @example
   * false
   */
  newProductRegulation?: boolean;
  /**
   * @example
   * hot_recall
   */
  recallName?: string;
  /**
   * @example
   * 2026-02-10T09:16:03.893+08:00
   */
  startTime?: string;
  /**
   * @example
   * 1
   */
  statisPeriod?: string;
  /**
   * @example
   * Enable
   */
  status?: string;
  /**
   * @example
   * 10
   */
  toleranceValue?: number;
  /**
   * @example
   * 30
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      event: 'Event',
      itemConditionArray: 'ItemConditionArray',
      itemConditionExpress: 'ItemConditionExpress',
      itemConditionType: 'ItemConditionType',
      name: 'Name',
      newProductRegulation: 'NewProductRegulation',
      recallName: 'RecallName',
      startTime: 'StartTime',
      statisPeriod: 'StatisPeriod',
      status: 'Status',
      toleranceValue: 'ToleranceValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      event: 'string',
      itemConditionArray: 'string',
      itemConditionExpress: 'string',
      itemConditionType: 'string',
      name: 'string',
      newProductRegulation: 'boolean',
      recallName: 'string',
      startTime: 'string',
      statisPeriod: 'string',
      status: 'string',
      toleranceValue: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskRequest extends $dara.Model {
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
   * this is a test
   */
  description?: string;
  effectiveSceneIds?: number[];
  /**
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @example
   * Permanent
   */
  executionTime?: string;
  /**
   * @example
   * resource-xxx
   */
  flinkResourceId?: string;
  /**
   * @example
   * pairec-1324***
   */
  instanceId?: string;
  /**
   * @example
   * [{"field":"status","option":"=","value":"1"}]
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
   * plan-1
   */
  name?: string;
  /**
   * @example
   * 3,4
   */
  preExperimentIds?: string;
  /**
   * @example
   * 1,2
   */
  prodExperimentIds?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * 4
   */
  serviceId?: string;
  serviceIds?: number[];
  /**
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @example
   * click=exposure
   */
  statisBaeaviorConditionArray?: string;
  /**
   * @example
   * click=exposure
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
  trafficControlTargets?: UpdateTrafficControlTaskRequestTrafficControlTargets[];
  /**
   * @example
   * [{"field":"gender","option":"=","value":"male"}]
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
      effectiveSceneIds: 'EffectiveSceneIds',
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
      serviceIds: 'ServiceIds',
      startTime: 'StartTime',
      statisBaeaviorConditionArray: 'StatisBaeaviorConditionArray',
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
      effectiveSceneIds: { 'type': 'array', 'itemType': 'number' },
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
      serviceIds: { 'type': 'array', 'itemType': 'number' },
      startTime: 'string',
      statisBaeaviorConditionArray: 'string',
      statisBehaviorConditionArray: 'string',
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
    if(Array.isArray(this.effectiveSceneIds)) {
      $dara.Model.validateArray(this.effectiveSceneIds);
    }
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    if(Array.isArray(this.trafficControlTargets)) {
      $dara.Model.validateArray(this.trafficControlTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

