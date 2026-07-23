// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargetsSplitParts extends $dara.Model {
  /**
   * @remarks
   * The list of value-based split points for the target.
   */
  setValues?: number[];
  /**
   * @remarks
   * The list of time-based split points.
   */
  timePoints?: number[];
  static names(): { [key: string]: string } {
    return {
      setValues: 'SetValues',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setValues: { 'type': 'array', 'itemType': 'number' },
      timePoints: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
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

export class ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargets extends $dara.Model {
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
   * The event for the traffic control target.
   * 
   * @example
   * click
   */
  event?: string;
  /**
   * @remarks
   * The creation time of the target.
   * 
   * @example
   * 2025-06-03T15:08:10.58+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last update time of the target.
   * 
   * @example
   * 2025-11-21T16:26:58.57+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The item condition, in an array format.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item condition, in an expression format.
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
   * The name of the traffic control target.
   * 
   * @example
   * target-1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the traffic control target is for a new product recall.
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
   * recall-1
   */
  recallName?: string;
  /**
   * @remarks
   * The details of the split points.
   */
  splitParts?: ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargetsSplitParts;
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
   * The statistics period.
   * 
   * @example
   * Daily
   */
  statisPeriod?: string;
  /**
   * @remarks
   * The status of the traffic control target.
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
   * 10
   */
  toleranceValue?: number;
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
   * The traffic control task ID.
   * 
   * @example
   * 1
   */
  trafficControlTaskId?: string;
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
      splitParts: ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargetsSplitParts,
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

export class ListTrafficControlTasksResponseBodyTrafficControlTasks extends $dara.Model {
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
  effectiveSceneNameList?: string[];
  /**
   * @remarks
   * The list of effective scene names.
   */
  effectiveSceneNames?: number[];
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
   * false
   */
  everPublished?: boolean;
  /**
   * @remarks
   * The execution schedule for the task. Valid values:
   * 
   * - `Permanent`: The task runs indefinitely.
   * 
   * - `TimeRange`: The task runs within a specified time range. If you set this parameter to this value, you must also specify the `StartTime` and `EndTime` parameters.
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
   * The name of the Flink resource.
   * 
   * @example
   * flink_test
   */
  flinkResourceName?: string;
  /**
   * @remarks
   * The creation time of the task.
   * 
   * @example
   * 2024-03-25T06:04:28.441Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last update time of the task.
   * 
   * @example
   * 2024-03-25T06:04:28.441Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The item condition, in an array format.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item condition, in an expression format.
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
   * task_1
   */
  name?: string;
  /**
   * @remarks
   * A comma-separated list of staging experiment IDs.
   * 
   * @example
   * 1,2
   */
  preExperimentIds?: string;
  /**
   * @remarks
   * The staging environment status.
   * 
   * @example
   * Runnning
   */
  prepubStatus?: string;
  /**
   * @remarks
   * A comma-separated list of production experiment IDs.
   * 
   * @example
   * 6,7
   */
  prodExperimentIds?: string;
  /**
   * @remarks
   * The production environment status.
   * 
   * @example
   * Runnning
   */
  productStatus?: string;
  /**
   * @remarks
   * The scene ID. You can obtain this ID by calling the `ListScenes` operation.
   * 
   * @example
   * 4
   */
  sceneId?: string;
  /**
   * @remarks
   * The name of the scene.
   * 
   * @example
   * home_feed
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
  serviceIdList?: number[];
  /**
   * @remarks
   * The list of bound engine service IDs.
   */
  serviceIds?: string[];
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
   * The behavior statistics expression.
   * 
   * @example
   * event=click
   */
  statisBahaviorConditionExpress?: string;
  /**
   * @remarks
   * The behavior statistics condition, in an array format.
   * 
   * @example
   * [{"field":"click","option":"<=","value":"30"}]
   */
  statisBehaviorConditionArray?: string;
  /**
   * @remarks
   * The behavior statistics expression.
   * 
   * @example
   * event=exposure
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
   * The list of traffic control targets.
   */
  trafficControlTargets?: ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargets[];
  /**
   * @remarks
   * The traffic control task ID.
   * 
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  /**
   * @remarks
   * The condition for the target user group, in an array format.
   * 
   * @example
   * [{"field":"gender","option":"=","value":"male"}]
   */
  userConditionArray?: string;
  /**
   * @remarks
   * The condition for the target user group, in an expression format.
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
      effectiveSceneNameList: 'EffectiveSceneNameList',
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
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      serviceId: 'ServiceId',
      serviceIdList: 'ServiceIdList',
      serviceIds: 'ServiceIds',
      startTime: 'StartTime',
      statisBahaviorConditionExpress: 'StatisBahaviorConditionExpress',
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
      effectiveSceneNameList: { 'type': 'array', 'itemType': 'string' },
      effectiveSceneNames: { 'type': 'array', 'itemType': 'number' },
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
      sceneId: 'string',
      sceneName: 'string',
      serviceId: 'string',
      serviceIdList: { 'type': 'array', 'itemType': 'number' },
      serviceIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      statisBahaviorConditionExpress: 'string',
      statisBehaviorConditionArray: 'string',
      statisBehaviorConditionExpress: 'string',
      statisBehaviorConditionType: 'string',
      trafficControlTargets: { 'type': 'array', 'itemType': ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargets },
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
    if(Array.isArray(this.effectiveSceneNameList)) {
      $dara.Model.validateArray(this.effectiveSceneNameList);
    }
    if(Array.isArray(this.effectiveSceneNames)) {
      $dara.Model.validateArray(this.effectiveSceneNames);
    }
    if(Array.isArray(this.serviceIdList)) {
      $dara.Model.validateArray(this.serviceIdList);
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

export class ListTrafficControlTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3AAA45F6-0798-5461-9360-81D133823CE7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of traffic control tasks.
   * 
   * @example
   * 20
   */
  totalCount?: string;
  /**
   * @remarks
   * The list of traffic control tasks.
   */
  trafficControlTasks?: ListTrafficControlTasksResponseBodyTrafficControlTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficControlTasks: 'TrafficControlTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      trafficControlTasks: { 'type': 'array', 'itemType': ListTrafficControlTasksResponseBodyTrafficControlTasks },
    };
  }

  validate() {
    if(Array.isArray(this.trafficControlTasks)) {
      $dara.Model.validateArray(this.trafficControlTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

