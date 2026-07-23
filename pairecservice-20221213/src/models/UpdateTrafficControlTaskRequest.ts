// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficControlTaskRequestTrafficControlTargets extends $dara.Model {
  /**
   * @remarks
   * The end time of the traffic control target.
   * 
   * @example
   * 2026-02-06T18:02:57.487556956+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The event for the traffic control target.
   * 
   * @example
   * exposure
   */
  event?: string;
  /**
   * @remarks
   * The item conditions, specified in an array format.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item conditions, specified as an expression.
   * 
   * @example
   * age>20
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The item condition type.
   * 
   * @example
   * Array
   */
  itemConditionType?: string;
  /**
   * @remarks
   * The name of the traffic control target.
   * 
   * @example
   * target-1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether this is a new item recall.
   * 
   * @example
   * false
   */
  newProductRegulation?: boolean;
  /**
   * @remarks
   * The recall policy name.
   * 
   * @example
   * hot_recall
   */
  recallName?: string;
  /**
   * @remarks
   * The start time of the traffic control target.
   * 
   * @example
   * 2026-02-10T09:16:03.893+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The statistical period.
   * 
   * @example
   * 1
   */
  statisPeriod?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The tolerance range for the traffic control target.
   * 
   * @example
   * 10
   */
  toleranceValue?: number;
  /**
   * @remarks
   * The value of the traffic control target.
   * 
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
   * @remarks
   * The behavior table ID.
   * 
   * @example
   * 1
   */
  behaviorTableMetaId?: string;
  /**
   * @remarks
   * The control granularity.
   * 
   * @example
   * Global
   */
  controlGranularity?: string;
  /**
   * @remarks
   * The control logic.
   * 
   * @example
   * Guaranteed
   */
  controlLogic?: string;
  /**
   * @remarks
   * The control type.
   * 
   * @example
   * Percent
   */
  controlType?: string;
  /**
   * @remarks
   * The description of the traffic control plan.
   * 
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @remarks
   * A list of effective scene IDs.
   */
  effectiveSceneIds?: number[];
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @remarks
   * The execution time. Valid values: `Permanent` (runs indefinitely) and `TimeRange` (runs within a specified period). If you select `TimeRange`, you must also specify `StartTime` and `EndTime`.
   * 
   * @example
   * Permanent
   */
  executionTime?: string;
  /**
   * @remarks
   * The Flink resource ID.
   * 
   * @example
   * resource-xxx
   */
  flinkResourceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-1324***
   */
  instanceId?: string;
  /**
   * @remarks
   * The item conditions, specified in an array format.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item conditions, specified as an expression.
   * 
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The item condition type.
   * 
   * @example
   * Array
   */
  itemConditionType?: string;
  /**
   * @remarks
   * The item table ID.
   * 
   * @example
   * 3
   */
  itemTableMetaId?: string;
  /**
   * @remarks
   * The name of the traffic control plan.
   * 
   * @example
   * plan-1
   */
  name?: string;
  /**
   * @remarks
   * A comma-separated list of pre-release experiment IDs.
   * 
   * @example
   * 3,4
   */
  preExperimentIds?: string;
  /**
   * @remarks
   * A comma-separated list of production experiment IDs.
   * 
   * @example
   * 1,2
   */
  prodExperimentIds?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The engine service ID.
   * 
   * @example
   * 4
   */
  serviceId?: string;
  /**
   * @remarks
   * A list of associated engine service IDs.
   */
  serviceIds?: number[];
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @remarks
   * The conditions for behavior statistics, specified in an array format.
   * 
   * @example
   * click=exposure
   */
  statisBaeaviorConditionArray?: string;
  /**
   * @remarks
   * The conditions for behavior statistics, specified in an array format.
   * 
   * @example
   * click=exposure
   */
  statisBehaviorConditionArray?: string;
  /**
   * @remarks
   * The conditions for behavior statistics, specified as an expression.
   * 
   * @example
   * click=30
   */
  statisBehaviorConditionExpress?: string;
  /**
   * @remarks
   * The condition type for behavior statistics.
   * 
   * @example
   * Array
   */
  statisBehaviorConditionType?: string;
  /**
   * @remarks
   * A list of traffic control targets.
   */
  trafficControlTargets?: UpdateTrafficControlTaskRequestTrafficControlTargets[];
  /**
   * @remarks
   * The conditions for the target user group, specified in an array format.
   * 
   * @example
   * [{"field":"gender","option":"=","value":"male"}]
   */
  userConditionArray?: string;
  /**
   * @remarks
   * The conditions for the target user group, specified as an expression.
   * 
   * @example
   * age<=30&&(3<=level<=6)&&gender=male
   */
  userConditionExpress?: string;
  /**
   * @remarks
   * The condition type for the target user group.
   * 
   * @example
   * Array
   */
  userConditionType?: string;
  /**
   * @remarks
   * The user table ID.
   * 
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

