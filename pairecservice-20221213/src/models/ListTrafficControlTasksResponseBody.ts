// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargetsSplitParts extends $dara.Model {
  /**
   * @remarks
   * The list of target value split points.
   */
  setValues?: number[];
  /**
   * @remarks
   * The list of time split points.
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
   * The end time. The time is in the YYYY-MM-DD format.
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
   * The creation time. The time is in the ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2025-06-03T15:08:10.58+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time. The time is in the ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2025-11-21T16:26:58.57+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The array-formatted conditions for items.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The expression-formatted conditions for items.
   * 
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The condition type for items.
   * 
   * @example
   * Array
   */
  itemConditionType?: string;
  /**
   * @remarks
   * The traffic control target.
   * 
   * @example
   * target-1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the recall applies to new items.
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
   * The start time. The time is in the YYYY-MM-DD format.
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
   * The tolerance range of the traffic control target.
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
   * The target value for traffic control.
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
   * The ID of the behavior table.
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
   * The description of the traffic control.
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
   * The list of effective scenes.
   */
  effectiveSceneNameList?: string[];
  /**
   * @remarks
   * The list of effective scene names.
   */
  effectiveSceneNames?: number[];
  /**
   * @remarks
   * The end time. The time is in the YYYY-MM-DD format.
   * 
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the task has been published.
   * 
   * @example
   * false
   */
  everPublished?: boolean;
  /**
   * @remarks
   * The execution time. Valid values:
   * - Permanent: Executes permanently.
   * - TimeRange: Executes within a specified time range. If you select this value, you must specify the StartTime and EndTime parameters.
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
   * The creation time. The time is in the ISO 8601 format and uses Z to indicate the UTC time zone.
   * 
   * @example
   * 2024-03-25T06:04:28.441Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time. The time is in the ISO 8601 format and uses Z to indicate the UTC time zone.
   * 
   * @example
   * 2024-03-25T06:04:28.441Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The array-formatted conditions for items.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The expression-formatted conditions for items.
   * 
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The condition type for items.
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
   * The name of the traffic control.
   * 
   * @example
   * task_1
   */
  name?: string;
  /**
   * @remarks
   * The list of pre-release experiment IDs.
   * 
   * @example
   * 1,2
   */
  preExperimentIds?: string;
  /**
   * @remarks
   * The status in the pre-release environment.
   * 
   * @example
   * Runnning
   */
  prepubStatus?: string;
  /**
   * @remarks
   * The list of production experiments.
   * 
   * @example
   * 6,7
   */
  prodExperimentIds?: string;
  /**
   * @remarks
   * The status in the production environment.
   * 
   * @example
   * Runnning
   */
  productStatus?: string;
  /**
   * @remarks
   * The scene ID. You can obtain this ID by calling the ListScenes operation.
   * 
   * @example
   * 4
   */
  sceneId?: string;
  /**
   * @remarks
   * The scene name.
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
   * The start time. The time is in the YYYY-MM-DD format.
   * 
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @remarks
   * The expression-formatted conditions for behavior statistics.
   * 
   * @example
   * event=click
   */
  statisBahaviorConditionExpress?: string;
  /**
   * @remarks
   * The array-formatted conditions for behavior statistics.
   * 
   * @example
   * [{"field":"click","option":"<=","value":"30"}]
   */
  statisBehaviorConditionArray?: string;
  /**
   * @remarks
   * The behavior expression.
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
   * The ID of the traffic control task.
   * 
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  /**
   * @remarks
   * The array-formatted conditions for the target user group.
   * 
   * @example
   * [{"field":"gender","option":"=","value":"male"}]
   */
  userConditionArray?: string;
  /**
   * @remarks
   * The expression-formatted conditions for the target user group.
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
   * The total number of elements in the list.
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

