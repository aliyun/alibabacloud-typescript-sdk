// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficControlTaskRequestTrafficControlTargets extends $dara.Model {
  /**
   * @remarks
   * The end time of the traffic control target.
   * 
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @remarks
   * The event for the traffic control target.
   * 
   * @example
   * click
   */
  event?: string;
  /**
   * @remarks
   * The item condition in array format.
   * 
   * @example
   * [{\\"field\\":\\"status\\",\\"option\\":\\"=\\",\\"value\\":\\"1\\"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item condition in expression format.
   * 
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The condition type for item control.
   * 
   * - Array: Specifies the array format.
   * 
   * - Expression: Specifies the expression format.
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
   * target_1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable new product regulation.
   * 
   * @example
   * false
   */
  newProductRegulation?: boolean;
  /**
   * @remarks
   * The name of the recall strategy.
   * 
   * @example
   * recall_1
   */
  recallName?: string;
  /**
   * @remarks
   * The start time of the traffic control target.
   * 
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @remarks
   * The statistics period.
   * 
   * - Daily: Statistics are aggregated daily.
   * 
   * - Hour: Statistics are aggregated hourly.
   * 
   * @example
   * Daily
   */
  statisPeriod?: string;
  /**
   * @remarks
   * The status of the traffic control target.
   * 
   * - Opened: The traffic control target is enabled.
   * 
   * - Closed: The traffic control target is disabled.
   * 
   * @example
   * Opened
   */
  status?: string;
  /**
   * @remarks
   * The tolerance value for the traffic control target.
   * 
   * @example
   * 20
   */
  toleranceValue?: number;
  /**
   * @remarks
   * The value of the traffic control target.
   * 
   * @example
   * 100
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

export class CreateTrafficControlTaskRequest extends $dara.Model {
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
   * The control granularity. Valid values: Global (applies globally) and Single (applies to a specific item).
   * 
   * @example
   * Global
   */
  controlGranularity?: string;
  /**
   * @remarks
   * The control logic.
   * 
   * - Guaranteed: The system strictly enforces the control target.
   * 
   * - Approach: The system attempts to meet the control target, but enforcement is not strict.
   * 
   * @example
   * Guaranteed
   */
  controlLogic?: string;
  /**
   * @remarks
   * The control type.
   * 
   * - Percent: Controls traffic by percentage.
   * 
   * - Quantity: Controls traffic by quantity.
   * 
   * @example
   * Percent
   */
  controlType?: string;
  /**
   * @remarks
   * The description of the traffic control task.
   * 
   * @example
   * this is a test task
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
   * 2024-03-26
   */
  endTime?: string;
  /**
   * @remarks
   * The execution time.
   * 
   * - Permanent: The task runs permanently.
   * 
   * - TimeRange: The task runs within a specified time range. This option requires you to also specify the StartTime and EndTime parameters.
   * 
   * @example
   * TimeRange
   */
  executionTime?: string;
  /**
   * @remarks
   * The Flink data source ID.
   * 
   * @example
   * res-***
   */
  flinkResourceId?: string;
  /**
   * @remarks
   * The instance ID. You can get this ID by calling the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @remarks
   * The item condition in array format.
   * 
   * @example
   * [{\\"field\\":\\"status\\",\\"option\\":\\"=\\",\\"value\\":\\"1\\"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item condition in expression format.
   * 
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The item condition type.
   * 
   * - Array: Specifies the array format.
   * 
   * - Expression: Specifies the expression format.
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
   * The name of the traffic control task.
   * 
   * @example
   * task-1
   */
  name?: string;
  /**
   * @remarks
   * The experiment IDs for the staging environment. Separate multiple IDs with a comma (,).
   * 
   * @example
   * 1,2,3
   */
  preExperimentIds?: string;
  /**
   * @remarks
   * The experiment IDs for the production environment. Separate multiple IDs with a comma (,).
   * 
   * @example
   * 4,5,6
   */
  prodExperimentIds?: string;
  /**
   * @remarks
   * The scene ID. You can get this ID by calling the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: string;
  /**
   * @remarks
   * A list of bound engine service IDs.
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
   * The statistical behavior condition in array format.
   * 
   * @example
   * [{\\"field\\":\\"click\\",\\"option\\":\\"<=\\",\\"value\\":\\"30\\"}]
   */
  statisBehaviorConditionArray?: string;
  /**
   * @remarks
   * The statistical behavior condition in expression format.
   * 
   * @example
   * click=30
   */
  statisBehaviorConditionExpress?: string;
  /**
   * @remarks
   * The condition type for the statistical behavior.
   * 
   * - Array: Specifies the array format.
   * 
   * - Expression: Specifies the expression format.
   * 
   * @example
   * Array
   */
  statisBehaviorConditionType?: string;
  /**
   * @remarks
   * A list of traffic control targets.
   */
  trafficControlTargets?: CreateTrafficControlTaskRequestTrafficControlTargets[];
  /**
   * @remarks
   * The intervention user group condition in array format.
   * 
   * @example
   * [{\\"field\\":\\"gender\\",\\"option\\":\\"=\\",\\"value\\":\\"male\\"}]
   */
  userConditionArray?: string;
  /**
   * @remarks
   * The intervention user group condition in expression format.
   * 
   * @example
   * age<=30&&(3<=level<=6)&&gender=male
   */
  userConditionExpress?: string;
  /**
   * @remarks
   * The condition type for the intervention user group.
   * 
   * - Array: Specifies the array format.
   * 
   * - Expression: Specifies the expression format.
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

