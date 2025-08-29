// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrafficControlTaskResponseBodyTrafficControlTargetsSplitParts extends $dara.Model {
  setPoints?: number[];
  setValues?: number[];
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
  endTime?: string;
  event?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  itemConditionArray?: string;
  itemConditionExpress?: string;
  itemConditionType?: string;
  name?: string;
  newProductRegulation?: boolean;
  recallName?: string;
  splitParts?: GetTrafficControlTaskResponseBodyTrafficControlTargetsSplitParts;
  startTime?: string;
  statisPeriod?: string;
  status?: string;
  toleranceValue?: number;
  trafficControlTargetId?: string;
  trafficControlTaskId?: string;
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
  behaviorTableMetaId?: string;
  controlGranularity?: string;
  controlLogic?: string;
  controlType?: string;
  description?: string;
  effectiveSceneIds?: number[];
  effectiveSceneNames?: string[];
  endTime?: string;
  everPublished?: boolean;
  executionTime?: string;
  flinkResourceId?: string;
  flinkResourceName?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  itemConditionArray?: string;
  itemConditionExpress?: string;
  itemConditionType?: string;
  itemTableMetaId?: string;
  name?: string;
  preExperimentIds?: string;
  prepubStatus?: string;
  prodExperimentIds?: string;
  productStatus?: string;
  requestId?: string;
  sceneId?: string;
  sceneName?: string;
  serviceId?: string;
  serviceIds?: number[];
  startTime?: string;
  statisBehaviorConditionArray?: string;
  statisBehaviorConditionExpress?: string;
  statisBehaviorConditionType?: string;
  trafficControlTargets?: GetTrafficControlTaskResponseBodyTrafficControlTargets[];
  trafficControlTaskId?: string;
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

