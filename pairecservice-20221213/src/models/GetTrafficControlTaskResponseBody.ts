// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrafficControlTaskResponseBodyTrafficControlTargetsSplitParts extends $dara.Model {
  /**
   * @remarks
   * The list of target value split points.
   */
  setPoints?: number[];
  /**
   * @remarks
   * The list of control target set values.
   */
  setValues?: number[];
  /**
   * @remarks
   * The time points for splitting the control target.
   */
  timePoints?: number[];
  static names(): { [key: string]: string } {
    return {
      setPoints: 'SetPoints',
      setValues: 'SetValues',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setPoints: { 'type': 'array', 'itemType': 'number' },
      setValues: { 'type': 'array', 'itemType': 'number' },
      timePoints: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.setPoints)) {
      $dara.Model.validateArray(this.setPoints);
    }
    if(Array.isArray(this.setValues)) {
      $dara.Model.validateArray(this.setValues);
    }
    if(Array.isArray(this.timePoints)) {
      $dara.Model.validateArray(this.timePoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskResponseBodyTrafficControlTargets extends $dara.Model {
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
   * The control target event.
   * 
   * @example
   * click
   */
  event?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-03-25T06:04:28.441Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2024-03-25T06:04:28.441Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The item conditions in array format.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item conditions in expression format.
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
   * The name of the control target.
   * 
   * @example
   * target-1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether this is a new product regulation.
   * 
   * @example
   * false
   */
  newProductRegulation?: boolean;
  /**
   * @remarks
   * The recall Policy Name.
   * 
   * @example
   * recall-1
   */
  recallName?: string;
  /**
   * @remarks
   * The split configuration of the control target.
   */
  splitParts?: GetTrafficControlTaskResponseBodyTrafficControlTargetsSplitParts;
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
   * The statistical period.
   * 
   * @example
   * Daily
   */
  statisPeriod?: string;
  /**
   * @remarks
   * The status.
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
   * 10
   */
  toleranceValue?: number;
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
   * The ID of the traffic control task.
   * 
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  /**
   * @remarks
   * The control target value.
   * 
   * @example
   * 30
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      event: 'Event',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      itemConditionArray: 'ItemConditionArray',
      itemConditionExpress: 'ItemConditionExpress',
      itemConditionType: 'ItemConditionType',
      name: 'Name',
      newProductRegulation: 'NewProductRegulation',
      recallName: 'RecallName',
      splitParts: 'SplitParts',
      startTime: 'StartTime',
      statisPeriod: 'StatisPeriod',
      status: 'Status',
      toleranceValue: 'ToleranceValue',
      trafficControlTargetId: 'TrafficControlTargetId',
      trafficControlTaskId: 'TrafficControlTaskId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      event: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      itemConditionArray: 'string',
      itemConditionExpress: 'string',
      itemConditionType: 'string',
      name: 'string',
      newProductRegulation: 'boolean',
      recallName: 'string',
      splitParts: GetTrafficControlTaskResponseBodyTrafficControlTargetsSplitParts,
      startTime: 'string',
      statisPeriod: 'string',
      status: 'string',
      toleranceValue: 'number',
      trafficControlTargetId: 'string',
      trafficControlTaskId: 'string',
      value: 'number',
    };
  }

  validate() {
    if(this.splitParts && typeof (this.splitParts as any).validate === 'function') {
      (this.splitParts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskResponseBody extends $dara.Model {
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
   * The list of effective scene names.
   */
  effectiveSceneNames?: string[];
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
   * Indicates whether the task has ever been published.
   * 
   * @example
   * true
   */
  everPublished?: boolean;
  /**
   * @remarks
   * The execution time.
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
   * The Flink resource name.
   * 
   * @example
   * flink_test
   */
  flinkResourceName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-11T02:27:38.208Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2024-01-11T02:27:38.208Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The item conditions in array format.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item conditions in expression format.
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
   * The name of the traffic control task.
   * 
   * @example
   * task-1
   */
  name?: string;
  /**
   * @remarks
   * The experiment IDs in the staging environment.
   * 
   * @example
   * 1,2,3
   */
  preExperimentIds?: string;
  /**
   * @remarks
   * The staging environment status.
   * 
   * @example
   * Running
   */
  prepubStatus?: string;
  /**
   * @remarks
   * The experiment IDs in the production environment.
   * 
   * @example
   * 4,5,6
   */
  prodExperimentIds?: string;
  /**
   * @remarks
   * The production environment status.
   * 
   * @example
   * Running
   */
  productStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 2
   */
  sceneId?: string;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * scene-2
   */
  sceneName?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  serviceId?: string;
  /**
   * @remarks
   * The list of service IDs.
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
   * The behavior statistics conditions in array format.
   * 
   * @example
   * [{"field":"click","option":"<=","value":"30"}]
   */
  statisBehaviorConditionArray?: string;
  /**
   * @remarks
   * The behavior statistics conditions in expression format.
   * 
   * @example
   * click=30
   */
  statisBehaviorConditionExpress?: string;
  /**
   * @remarks
   * The behavior statistics condition type.
   * 
   * @example
   * Array
   */
  statisBehaviorConditionType?: string;
  /**
   * @remarks
   * The list of traffic control targets.
   */
  trafficControlTargets?: GetTrafficControlTaskResponseBodyTrafficControlTargets[];
  /**
   * @remarks
   * The ID of the traffic control task.
   * 
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  /**
   * @remarks
   * The target user group conditions in array format.
   * 
   * @example
   * [{"field":"gender","option":"=","value":"male"}]
   */
  userConditionArray?: string;
  /**
   * @remarks
   * The target user group conditions in expression format.
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
      effectiveSceneNames: 'EffectiveSceneNames',
      endTime: 'EndTime',
      everPublished: 'EverPublished',
      executionTime: 'ExecutionTime',
      flinkResourceId: 'FlinkResourceId',
      flinkResourceName: 'FlinkResourceName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      itemConditionArray: 'ItemConditionArray',
      itemConditionExpress: 'ItemConditionExpress',
      itemConditionType: 'ItemConditionType',
      itemTableMetaId: 'ItemTableMetaId',
      name: 'Name',
      preExperimentIds: 'PreExperimentIds',
      prepubStatus: 'PrepubStatus',
      prodExperimentIds: 'ProdExperimentIds',
      productStatus: 'ProductStatus',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      serviceId: 'ServiceId',
      serviceIds: 'ServiceIds',
      startTime: 'StartTime',
      statisBehaviorConditionArray: 'StatisBehaviorConditionArray',
      statisBehaviorConditionExpress: 'StatisBehaviorConditionExpress',
      statisBehaviorConditionType: 'StatisBehaviorConditionType',
      trafficControlTargets: 'TrafficControlTargets',
      trafficControlTaskId: 'TrafficControlTaskId',
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
      effectiveSceneNames: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      everPublished: 'boolean',
      executionTime: 'string',
      flinkResourceId: 'string',
      flinkResourceName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      itemConditionArray: 'string',
      itemConditionExpress: 'string',
      itemConditionType: 'string',
      itemTableMetaId: 'string',
      name: 'string',
      preExperimentIds: 'string',
      prepubStatus: 'string',
      prodExperimentIds: 'string',
      productStatus: 'string',
      requestId: 'string',
      sceneId: 'string',
      sceneName: 'string',
      serviceId: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'number' },
      startTime: 'string',
      statisBehaviorConditionArray: 'string',
      statisBehaviorConditionExpress: 'string',
      statisBehaviorConditionType: 'string',
      trafficControlTargets: { 'type': 'array', 'itemType': GetTrafficControlTaskResponseBodyTrafficControlTargets },
      trafficControlTaskId: 'string',
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
    if(Array.isArray(this.effectiveSceneNames)) {
      $dara.Model.validateArray(this.effectiveSceneNames);
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

