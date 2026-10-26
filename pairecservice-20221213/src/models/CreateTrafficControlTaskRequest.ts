// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficControlTaskRequestTrafficControlTargets extends $dara.Model {
  /**
   * @remarks
   * The end time of the control target. Specify the time in the YYYY-MM-DD format.
   * 
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @remarks
   * The event of the control target.
   * 
   * @example
   * click
   */
  event?: string;
  /**
   * @remarks
   * The conditions for items in array format.
   * 
   * @example
   * [{\\"field\\":\\"status\\",\\"option\\":\\"=\\",\\"value\\":\\"1\\"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The conditions for items in expression format.
   * 
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The condition type for item control. Valid values:
   * - Array: array format
   * - Expression: expression format
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
   * Specifies whether the target is for new product regulation.
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
   * recall_1
   */
  recallName?: string;
  /**
   * @remarks
   * The start time of the control target. Specify the time in the YYYY-MM-DD format.
   * 
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @remarks
   * The statistical period. Valid values:
   * - Daily: daily
   * - Hour: hourly
   * 
   * @example
   * Daily
   */
  statisPeriod?: string;
  /**
   * @remarks
   * The status of the control target. Valid values:
   * - Opened: enabled
   * - Closed: disabled
   * 
   * @example
   * Opened
   */
  status?: string;
  /**
   * @remarks
   * The tolerance range of the control target.
   * 
   * @example
   * 20
   */
  toleranceValue?: number;
  /**
   * @remarks
   * The target value for control.
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
   * The ID of the behavior table.
   * 
   * @example
   * 1
   */
  behaviorTableMetaId?: string;
  /**
   * @remarks
   * The control granularity. Valid values:
   * - Global: global
   * - Single: single item
   * 
   * @example
   * Global
   */
  controlGranularity?: string;
  /**
   * @remarks
   * The control logic. Valid values:
   * - Guaranteed: guaranteed traffic control
   * - Approach: approximate traffic control
   * 
   * @example
   * Guaranteed
   */
  controlLogic?: string;
  /**
   * @remarks
   * The control type. Valid values:
   * - Percent: percentage-based control
   * - Quantity: quantity-based control
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
   * The list of effective scene IDs.
   */
  effectiveSceneIds?: number[];
  /**
   * @remarks
   * The end time. Specify the time in the YYYY-MM-DD format.
   * 
   * @example
   * 2024-03-26
   */
  endTime?: string;
  /**
   * @remarks
   * The execution time. Valid values:
   * - Permanent: The task is executed permanently.
   * - TimeRange: The task is executed within a specified time range. If you select this value, you must specify StartTime and EndTime.
   * 
   * @example
   * TimeRange
   */
  executionTime?: string;
  /**
   * @remarks
   * The ID of the Flink data source.
   * 
   * @example
   * res-***
   */
  flinkResourceId?: string;
  /**
   * @remarks
   * The instance ID. You can call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain the instance ID.
   * 
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @remarks
   * The conditions for items in array format.
   * 
   * @example
   * [{\\"field\\":\\"status\\",\\"option\\":\\"=\\",\\"value\\":\\"1\\"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The conditions for items in expression format.
   * 
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The condition type for items. Valid values:
   * - Array: array format
   * - Expression: expression format
   * 
   * @example
   * Array
   */
  itemConditionType?: string;
  /**
   * @remarks
   * The ID of the item table.
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
   * The IDs of the experiments in the pre-release environment. Separate multiple IDs with commas (,).
   * 
   * @example
   * 1,2,3
   */
  preExperimentIds?: string;
  /**
   * @remarks
   * The IDs of the experiments in the production environment. Separate multiple IDs with commas (,).
   * 
   * @example
   * 4,5,6
   */
  prodExperimentIds?: string;
  /**
   * @remarks
   * The scene ID. You can call the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation to obtain the scene ID.
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
   * The list of bound engine service IDs.
   */
  serviceIds?: number[];
  /**
   * @remarks
   * The start time. Specify the time in the YYYY-MM-DD format.
   * 
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @remarks
   * The conditions for statistical behaviors in array format.
   * 
   * @example
   * [{\\"field\\":\\"click\\",\\"option\\":\\"<=\\",\\"value\\":\\"30\\"}]
   */
  statisBehaviorConditionArray?: string;
  /**
   * @remarks
   * The conditions for statistical behaviors in expression format.
   * 
   * @example
   * click=30
   */
  statisBehaviorConditionExpress?: string;
  /**
   * @remarks
   * The condition type for statistical behaviors. Valid values:
   * - Array: array format
   * - Expression: expression format
   * 
   * @example
   * Array
   */
  statisBehaviorConditionType?: string;
  /**
   * @remarks
   * The list of traffic control targets.
   */
  trafficControlTargets?: CreateTrafficControlTaskRequestTrafficControlTargets[];
  /**
   * @remarks
   * The conditions for the target users in array format.
   * 
   * @example
   * [{\\"field\\":\\"gender\\",\\"option\\":\\"=\\",\\"value\\":\\"male\\"}]
   */
  userConditionArray?: string;
  /**
   * @remarks
   * The conditions for the target users in expression format.
   * 
   * @example
   * age<=30&&(3<=level<=6)&&gender=male
   */
  userConditionExpress?: string;
  /**
   * @remarks
   * The condition type for the target users. Valid values:
   * - Array: array format
   * - Expression: expression format
   * 
   * @example
   * Array
   */
  userConditionType?: string;
  /**
   * @remarks
   * The ID of the user table.
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

