// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargetsSplitParts extends $dara.Model {
  setValues?: number[];
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
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @example
   * click
   */
  event?: string;
  /**
   * @example
   * 2025-06-03T15:08:10.58+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2025-11-21T16:26:58.57+08:00
   */
  gmtModifiedTime?: string;
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
   * recall-1
   */
  recallName?: string;
  splitParts?: ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargetsSplitParts;
  /**
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @example
   * Daily
   */
  statisPeriod?: string;
  /**
   * @example
   * Opened
   */
  status?: string;
  /**
   * @example
   * 10
   */
  toleranceValue?: number;
  /**
   * @example
   * 1
   */
  trafficControlTargetId?: string;
  /**
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  /**
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
  effectiveSceneIds?: number[];
  effectiveSceneNameList?: string[];
  effectiveSceneNames?: number[];
  /**
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  everPublished?: boolean;
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
   * flink_test
   */
  flinkResourceName?: string;
  /**
   * @example
   * 2024-03-25T06:04:28.441Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2024-03-25T06:04:28.441Z
   */
  gmtModifiedTime?: string;
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
   * task_1
   */
  name?: string;
  /**
   * @example
   * 1,2
   */
  preExperimentIds?: string;
  /**
   * @example
   * Runnning
   */
  prepubStatus?: string;
  /**
   * @example
   * 6,7
   */
  prodExperimentIds?: string;
  /**
   * @example
   * Runnning
   */
  productStatus?: string;
  /**
   * @example
   * 4
   */
  sceneId?: string;
  /**
   * @example
   * home_feed
   */
  sceneName?: string;
  /**
   * @example
   * 1
   */
  serviceId?: string;
  serviceIdList?: number[];
  serviceIds?: string[];
  /**
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @example
   * event=click
   */
  statisBahaviorConditionExpress?: string;
  /**
   * @example
   * [{"field":"click","option":"<=","value":"30"}]
   */
  statisBehaviorConditionArray?: string;
  /**
   * @example
   * event=exposure
   */
  statisBehaviorConditionExpress?: string;
  /**
   * @example
   * Array
   */
  statisBehaviorConditionType?: string;
  trafficControlTargets?: ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargets[];
  /**
   * @example
   * 1
   */
  trafficControlTaskId?: string;
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
   * @example
   * 3AAA45F6-0798-5461-9360-81D133823CE7
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: string;
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

