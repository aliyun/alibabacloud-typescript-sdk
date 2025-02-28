// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CheckInstanceResourcesResponseBodyResources extends $dara.Model {
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * OSS
   */
  type?: string;
  /**
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleRequestRuleItems extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  maxValue?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  minValue?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      maxValue: 'number',
      minValue: 'number',
      name: 'string',
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

export class CreateSceneRequestFlows extends $dara.Model {
  /**
   * @example
   * liuliang1
   */
  flowCode?: string;
  /**
   * @example
   * 流量1
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      flowCode: 'FlowCode',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCode: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaRequestFields extends $dara.Model {
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  isPartitionField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * this is gender of people
   */
  meaning?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gender
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      isDimensionField: 'IsDimensionField',
      isPartitionField: 'IsPartitionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      isDimensionField: 'boolean',
      isPartitionField: 'string',
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTaskRequestTrafficControlTargets extends $dara.Model {
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
   * [{\\"field\\":\\"status\\",\\"option\\":\\"=\\",\\"value\\":\\"1\\"}]
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
   * target_1
   */
  name?: string;
  /**
   * @example
   * false
   */
  newProductRegulation?: boolean;
  /**
   * @example
   * recall_1
   */
  recallName?: string;
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
   * 20
   */
  toleranceValue?: number;
  /**
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

export class GetInstanceResponseBodyConfigDataManagements extends $dara.Model {
  /**
   * @example
   * storage
   */
  componentCode?: string;
  meta?: { [key: string]: any };
  /**
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      meta: 'Meta',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfigEngines extends $dara.Model {
  /**
   * @example
   * feature
   */
  componentCode?: string;
  meta?: { [key: string]: any };
  /**
   * @example
   * Hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      meta: 'Meta',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfigMonitors extends $dara.Model {
  /**
   * @example
   * featuresets
   */
  componentCode?: string;
  meta?: { [key: string]: any };
  /**
   * @example
   * Platform
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      meta: 'Meta',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfig extends $dara.Model {
  dataManagements?: GetInstanceResponseBodyConfigDataManagements[];
  engines?: GetInstanceResponseBodyConfigEngines[];
  monitors?: GetInstanceResponseBodyConfigMonitors[];
  static names(): { [key: string]: string } {
    return {
      dataManagements: 'DataManagements',
      engines: 'Engines',
      monitors: 'Monitors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataManagements: { 'type': 'array', 'itemType': GetInstanceResponseBodyConfigDataManagements },
      engines: { 'type': 'array', 'itemType': GetInstanceResponseBodyConfigEngines },
      monitors: { 'type': 'array', 'itemType': GetInstanceResponseBodyConfigMonitors },
    };
  }

  validate() {
    if(Array.isArray(this.dataManagements)) {
      $dara.Model.validateArray(this.dataManagements);
    }
    if(Array.isArray(this.engines)) {
      $dara.Model.validateArray(this.engines);
    }
    if(Array.isArray(this.monitors)) {
      $dara.Model.validateArray(this.monitors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyOperatingTool extends $dara.Model {
  isEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      isEnable: 'IsEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceTableResponseBodyFields extends $dara.Model {
  /**
   * @example
   * false
   */
  isDimensionField?: boolean;
  isPartitionField?: boolean;
  /**
   * @example
   * ""
   */
  meaning?: string;
  /**
   * @example
   * age
   */
  name?: string;
  /**
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isDimensionField: 'IsDimensionField',
      isPartitionField: 'IsPartitionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDimensionField: 'boolean',
      isPartitionField: 'boolean',
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRuleResponseBodyRuleItems extends $dara.Model {
  description?: string;
  maxValue?: string;
  minValue?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      maxValue: 'string',
      minValue: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneResponseBodyFlows extends $dara.Model {
  /**
   * @example
   * liuliang1
   */
  flowCode?: string;
  /**
   * @example
   * 流量1
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      flowCode: 'FlowCode',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCode: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaResponseBodyFields extends $dara.Model {
  /**
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @example
   * the gender of people
   */
  meaning?: string;
  /**
   * @example
   * gender
   */
  name?: string;
  /**
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isDimensionField: 'IsDimensionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDimensionField: 'boolean',
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTargetResponseBodySplitParts extends $dara.Model {
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

export class GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics extends $dara.Model {
  data?: { [key: string]: TrafficControlTaskTrafficInfoTargetTrafficsDataValue };
  trafficContorlTargetId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      trafficContorlTargetId: 'TrafficContorlTargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': TrafficControlTaskTrafficInfoTargetTrafficsDataValue },
      trafficContorlTargetId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo extends $dara.Model {
  targetTraffics?: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics[];
  taskTraffics?: { [key: string]: TrafficControlTaskTrafficInfoTaskTrafficsValue };
  static names(): { [key: string]: string } {
    return {
      targetTraffics: 'TargetTraffics',
      taskTraffics: 'TaskTraffics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetTraffics: { 'type': 'array', 'itemType': GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics },
      taskTraffics: { 'type': 'map', 'keyType': 'string', 'valueType': TrafficControlTaskTrafficInfoTaskTrafficsValue },
    };
  }

  validate() {
    if(Array.isArray(this.targetTraffics)) {
      $dara.Model.validateArray(this.targetTraffics);
    }
    if(this.taskTraffics) {
      $dara.Model.validateMap(this.taskTraffics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricGroupsResponseBodyABMetricGroups extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricGroupId?: string;
  /**
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @example
   * pv,uv
   */
  ABMetricNames?: string;
  description?: string;
  /**
   * @example
   * visits
   */
  name?: string;
  /**
   * @example
   * 2799614***
   */
  owner?: string;
  /**
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricGroupId: 'ABMetricGroupId',
      ABMetricIds: 'ABMetricIds',
      ABMetricNames: 'ABMetricNames',
      description: 'Description',
      name: 'Name',
      owner: 'Owner',
      realtime: 'Realtime',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricGroupId: 'string',
      ABMetricIds: 'string',
      ABMetricNames: 'string',
      description: 'string',
      name: 'string',
      owner: 'string',
      realtime: 'boolean',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricsResponseBodyABMetrics extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @example
   * sum(click_cnt)
   */
  definition?: string;
  description?: string;
  /**
   * @example
   * 3
   */
  leftMetricId?: string;
  /**
   * @example
   * pv
   */
  name?: string;
  /**
   * @example
   * Division
   */
  operator?: string;
  /**
   * @example
   * false
   */
  realtime?: string;
  /**
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @example
   * 2
   */
  resultTableMetaId?: string;
  /**
   * @example
   * 2
   */
  rightMetricId?: string;
  /**
   * @example
   * 1
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
  statisticsCycle?: number;
  /**
   * @example
   * 1
   */
  tableMetaId?: string;
  /**
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricId: 'ABMetricId',
      definition: 'Definition',
      description: 'Description',
      leftMetricId: 'LeftMetricId',
      name: 'Name',
      operator: 'Operator',
      realtime: 'Realtime',
      resultResourceId: 'ResultResourceId',
      resultTableMetaId: 'ResultTableMetaId',
      rightMetricId: 'RightMetricId',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      statisticsCycle: 'StatisticsCycle',
      tableMetaId: 'TableMetaId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricId: 'string',
      definition: 'string',
      description: 'string',
      leftMetricId: 'string',
      name: 'string',
      operator: 'string',
      realtime: 'string',
      resultResourceId: 'string',
      resultTableMetaId: 'string',
      rightMetricId: 'string',
      sceneId: 'string',
      sceneName: 'string',
      statisticsCycle: 'number',
      tableMetaId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalculationJobsResponseBodyCalculationJobs extends $dara.Model {
  /**
   * @example
   * pv
   */
  ABMetricName?: string;
  /**
   * @example
   * 2021-12-15
   */
  bizDate?: string;
  /**
   * @example
   * 2
   */
  calculationJobId?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtRanTime?: string;
  jobMessage?: string[];
  /**
   * @example
   * CronOffline
   */
  jobSource?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricName: 'ABMetricName',
      bizDate: 'BizDate',
      calculationJobId: 'CalculationJobId',
      config: 'Config',
      gmtRanTime: 'GmtRanTime',
      jobMessage: 'JobMessage',
      jobSource: 'JobSource',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricName: 'string',
      bizDate: 'string',
      calculationJobId: 'string',
      config: 'string',
      gmtRanTime: 'string',
      jobMessage: { 'type': 'array', 'itemType': 'string' },
      jobSource: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobMessage)) {
      $dara.Model.validateArray(this.jobMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdsResponseBodyCrowds extends $dara.Model {
  /**
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * os=android
   */
  label?: string;
  /**
   * @example
   * crowd1
   */
  name?: string;
  /**
   * @example
   * 10
   */
  quantity?: string;
  /**
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @example
   * user1,user2
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      crowdId: 'CrowdId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      label: 'Label',
      name: 'Name',
      quantity: 'Quantity',
      source: 'Source',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowdId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      label: 'string',
      name: 'string',
      quantity: 'string',
      source: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineConfigsResponseBodyEngineConfigs extends $dara.Model {
  /**
   * @example
   * {}
   */
  configValue?: string;
  description?: string;
  /**
   * @example
   * 2
   */
  engineConfigId?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * 2023-08-07T01:43:42Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-08-27T12:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 2023-08-29 12:00:00
   */
  gmtReleasedTime?: string;
  /**
   * @example
   * engine_config_v1
   */
  name?: string;
  /**
   * @example
   * Released
   */
  status?: string;
  /**
   * @example
   * 20230509161300
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      engineConfigId: 'EngineConfigId',
      environment: 'Environment',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtReleasedTime: 'GmtReleasedTime',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      engineConfigId: 'string',
      environment: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      gmtReleasedTime: 'string',
      name: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentGroupsResponseBodyExperimentGroups extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  crowdId?: string;
  crowdTargetType?: string;
  /**
   * @example
   * 4
   */
  debugCrowdId?: string;
  /**
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 5
   */
  distributionTimeDuration?: number;
  /**
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @example
   * gender=female
   */
  filter?: string;
  holdingBuckets?: string;
  /**
   * @example
   * 4
   */
  laboratoryId?: string;
  /**
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @example
   * experiment_group1
   */
  name?: string;
  /**
   * @example
   * true
   */
  needAA?: boolean;
  /**
   * @example
   * 1124512470******
   */
  owner?: string;
  randomFlow?: number;
  /**
   * @example
   * 1,2,3,4
   */
  reservedBuckets?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * Offline
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdId: 'CrowdId',
      crowdTargetType: 'CrowdTargetType',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      distributionTimeDuration: 'DistributionTimeDuration',
      distributionType: 'DistributionType',
      experimentGroupId: 'ExperimentGroupId',
      filter: 'Filter',
      holdingBuckets: 'HoldingBuckets',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      needAA: 'NeedAA',
      owner: 'Owner',
      randomFlow: 'RandomFlow',
      reservedBuckets: 'ReservedBuckets',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdId: 'string',
      crowdTargetType: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      distributionTimeDuration: 'number',
      distributionType: 'string',
      experimentGroupId: 'string',
      filter: 'string',
      holdingBuckets: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      needAA: 'boolean',
      owner: 'string',
      randomFlow: 'number',
      reservedBuckets: 'string',
      sceneId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyExperiments extends $dara.Model {
  /**
   * @example
   * L1#EG1#E1
   */
  aliasExperimentId?: string;
  /**
   * @example
   * 1,2,3
   */
  buckets?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * uid1,uid2,uid3
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @example
   * 3
   */
  experimentId?: string;
  /**
   * @example
   * 100
   */
  flowPercent?: number;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @example
   * experiment_test1
   */
  name?: string;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @example
   * Offline
   */
  status?: string;
  /**
   * @example
   * Baseline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasExperimentId: 'AliasExperimentId',
      buckets: 'Buckets',
      config: 'Config',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      experimentGroupId: 'ExperimentGroupId',
      experimentId: 'ExperimentId',
      flowPercent: 'FlowPercent',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      sceneId: 'SceneId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasExperimentId: 'string',
      buckets: 'string',
      config: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      experimentGroupId: 'string',
      experimentId: 'string',
      flowPercent: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      sceneId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs extends $dara.Model {
  /**
   * @example
   * true
   */
  compareFeature?: boolean;
  datasetId?: string;
  datasetMountPath?: string;
  datasetName?: string;
  datasetType?: string;
  datasetUri?: string;
  defaultRoute?: string;
  /**
   * @example
   * eas_service_1
   */
  easServiceName?: string;
  /**
   * @example
   * oss://*******
   */
  easyRecPackagePath?: string;
  /**
   * @example
   * 1.3.60
   */
  easyRecVersion?: string;
  /**
   * @example
   * 3
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @example
   * mc_project_1
   */
  featureLandingResourceUri?: string;
  /**
   * @example
   * feature1,feature2,feature3
   */
  featurePriority?: string;
  featureStoreItemId?: string;
  featureStoreModelId?: string;
  featureStoreProjectId?: string;
  featureStoreProjectName?: string;
  featureStoreSeqFeatureView?: string;
  featureStoreUserId?: string;
  /**
   * @example
   * 1.0.0
   */
  fgJarVersion?: string;
  /**
   * @example
   * file.json
   */
  fgJsonFileName?: string;
  /**
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * item_id
   */
  itemIdField?: string;
  /**
   * @example
   * item_table
   */
  itemTable?: string;
  /**
   * @example
   * ds
   */
  itemTablePartitionField?: string;
  /**
   * @example
   * yyyymmdd
   */
  itemTablePartitionFieldFormat?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingEndTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingStartTime?: string;
  /**
   * @example
   * 3
   */
  latestJobId?: string;
  /**
   * @example
   * feature_consistency_check1
   */
  name?: string;
  /**
   * @example
   * oss_bucket_1
   */
  ossBucket?: string;
  /**
   * @example
   * reso-********
   */
  ossResourceId?: string;
  predictWorkerCount?: number;
  predictWorkerCpu?: number;
  predictWorkerMemory?: number;
  /**
   * @example
   * 0.89
   */
  sampleRate?: string;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @example
   * scene1
   */
  sceneName?: string;
  securityGroupId?: string;
  /**
   * @example
   * 4
   */
  serviceId?: string;
  /**
   * @example
   * service1
   */
  serviceName?: string;
  /**
   * @example
   * Editable
   */
  status?: string;
  switchId?: string;
  useFeatureStore?: string;
  /**
   * @example
   * user_id
   */
  userIdField?: string;
  /**
   * @example
   * user_table
   */
  userTable?: string;
  /**
   * @example
   * ds
   */
  userTablePartitionField?: string;
  /**
   * @example
   * yyyymmdd
   */
  userTablePartitionFieldFormat?: string;
  vpcId?: string;
  /**
   * @example
   * work_flow_1
   */
  workflowName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      compareFeature: 'CompareFeature',
      datasetId: 'DatasetId',
      datasetMountPath: 'DatasetMountPath',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      datasetUri: 'DatasetUri',
      defaultRoute: 'DefaultRoute',
      easServiceName: 'EasServiceName',
      easyRecPackagePath: 'EasyRecPackagePath',
      easyRecVersion: 'EasyRecVersion',
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      featureDisplayExclude: 'FeatureDisplayExclude',
      featureLandingResourceId: 'FeatureLandingResourceId',
      featureLandingResourceUri: 'FeatureLandingResourceUri',
      featurePriority: 'FeaturePriority',
      featureStoreItemId: 'FeatureStoreItemId',
      featureStoreModelId: 'FeatureStoreModelId',
      featureStoreProjectId: 'FeatureStoreProjectId',
      featureStoreProjectName: 'FeatureStoreProjectName',
      featureStoreSeqFeatureView: 'FeatureStoreSeqFeatureView',
      featureStoreUserId: 'FeatureStoreUserId',
      fgJarVersion: 'FgJarVersion',
      fgJsonFileName: 'FgJsonFileName',
      generateZip: 'GenerateZip',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      itemIdField: 'ItemIdField',
      itemTable: 'ItemTable',
      itemTablePartitionField: 'ItemTablePartitionField',
      itemTablePartitionFieldFormat: 'ItemTablePartitionFieldFormat',
      latestJobGmtSamplingEndTime: 'LatestJobGmtSamplingEndTime',
      latestJobGmtSamplingStartTime: 'LatestJobGmtSamplingStartTime',
      latestJobId: 'LatestJobId',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossResourceId: 'OssResourceId',
      predictWorkerCount: 'PredictWorkerCount',
      predictWorkerCpu: 'PredictWorkerCpu',
      predictWorkerMemory: 'PredictWorkerMemory',
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      switchId: 'SwitchId',
      useFeatureStore: 'UseFeatureStore',
      userIdField: 'UserIdField',
      userTable: 'UserTable',
      userTablePartitionField: 'UserTablePartitionField',
      userTablePartitionFieldFormat: 'UserTablePartitionFieldFormat',
      vpcId: 'VpcId',
      workflowName: 'WorkflowName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareFeature: 'boolean',
      datasetId: 'string',
      datasetMountPath: 'string',
      datasetName: 'string',
      datasetType: 'string',
      datasetUri: 'string',
      defaultRoute: 'string',
      easServiceName: 'string',
      easyRecPackagePath: 'string',
      easyRecVersion: 'string',
      featureConsistencyCheckJobConfigId: 'string',
      featureDisplayExclude: 'string',
      featureLandingResourceId: 'string',
      featureLandingResourceUri: 'string',
      featurePriority: 'string',
      featureStoreItemId: 'string',
      featureStoreModelId: 'string',
      featureStoreProjectId: 'string',
      featureStoreProjectName: 'string',
      featureStoreSeqFeatureView: 'string',
      featureStoreUserId: 'string',
      fgJarVersion: 'string',
      fgJsonFileName: 'string',
      generateZip: 'boolean',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      itemIdField: 'string',
      itemTable: 'string',
      itemTablePartitionField: 'string',
      itemTablePartitionFieldFormat: 'string',
      latestJobGmtSamplingEndTime: 'string',
      latestJobGmtSamplingStartTime: 'string',
      latestJobId: 'string',
      name: 'string',
      ossBucket: 'string',
      ossResourceId: 'string',
      predictWorkerCount: 'number',
      predictWorkerCpu: 'number',
      predictWorkerMemory: 'number',
      sampleRate: 'string',
      sceneId: 'string',
      sceneName: 'string',
      securityGroupId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      switchId: 'string',
      useFeatureStore: 'string',
      userIdField: 'string',
      userTable: 'string',
      userTablePartitionField: 'string',
      userTablePartitionFieldFormat: 'string',
      vpcId: 'string',
      workflowName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff extends $dara.Model {
  /**
   * @example
   * gender
   */
  featureName?: string;
  /**
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  logRequestId?: string;
  /**
   * @example
   * 1010
   */
  logUserId?: string;
  /**
   * @example
   * male
   */
  offlineValue?: string;
  /**
   * @example
   * male
   */
  onlineValue?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logUserId: 'LogUserId',
      offlineValue: 'OfflineValue',
      onlineValue: 'OnlineValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
      logItemId: 'string',
      logRequestId: 'string',
      logUserId: 'string',
      offlineValue: 'string',
      onlineValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff extends $dara.Model {
  /**
   * @example
   * 4
   */
  logItemId?: string;
  /**
   * @example
   * 323
   */
  logRequestId?: string;
  /**
   * @example
   * 3
   */
  logUserId?: string;
  /**
   * @example
   * 0.00000234
   */
  scoreDiff?: string;
  /**
   * @example
   * {}
   */
  scoreDiffDetail?: string;
  static names(): { [key: string]: string } {
    return {
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logUserId: 'LogUserId',
      scoreDiff: 'ScoreDiff',
      scoreDiffDetail: 'ScoreDiffDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logItemId: 'string',
      logRequestId: 'string',
      logUserId: 'string',
      scoreDiff: 'string',
      scoreDiffDetail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 5
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @example
   * feature_consistency_check_1
   */
  featureConsistencyCheckJobConfigName?: string;
  /**
   * @example
   * 4
   */
  featureConsistencyCheckJobId?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtEndTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtStartTime?: string;
  logs?: string[];
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      featureConsistencyCheckJobConfigName: 'FeatureConsistencyCheckJobConfigName',
      featureConsistencyCheckJobId: 'FeatureConsistencyCheckJobId',
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      logs: 'Logs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureConsistencyCheckJobConfigId: 'string',
      featureConsistencyCheckJobConfigName: 'string',
      featureConsistencyCheckJobId: 'string',
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResourcesResponseBodyResources extends $dara.Model {
  /**
   * @example
   * DataManagement
   */
  category?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 2020-10-13 17:34:52
   */
  gmtCreateAt?: string;
  /**
   * @example
   * 2020-10-13 17:34:52
   */
  gmtModifiedAt?: string;
  /**
   * @example
   * storage
   */
  group?: string;
  /**
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @example
   * OSS
   */
  type?: string;
  /**
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      config: 'Config',
      gmtCreateAt: 'GmtCreateAt',
      gmtModifiedAt: 'GmtModifiedAt',
      group: 'Group',
      resourceId: 'ResourceId',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: 'string',
      gmtCreateAt: 'string',
      gmtModifiedAt: 'string',
      group: 'string',
      resourceId: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesConfigDataManagements extends $dara.Model {
  /**
   * @example
   * storage
   */
  componentCode?: string;
  meta?: { [key: string]: any };
  /**
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      meta: 'Meta',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesConfigEngines extends $dara.Model {
  /**
   * @example
   * feature
   */
  componentCode?: string;
  meta?: { [key: string]: any };
  /**
   * @example
   * Hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      meta: 'Meta',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesConfigMonitors extends $dara.Model {
  /**
   * @example
   * featuresets
   */
  componentCode?: string;
  meta?: { [key: string]: any };
  /**
   * @example
   * Platform
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      meta: 'Meta',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesConfig extends $dara.Model {
  dataManagements?: ListInstancesResponseBodyInstancesConfigDataManagements[];
  engines?: ListInstancesResponseBodyInstancesConfigEngines[];
  monitors?: ListInstancesResponseBodyInstancesConfigMonitors[];
  static names(): { [key: string]: string } {
    return {
      dataManagements: 'DataManagements',
      engines: 'Engines',
      monitors: 'Monitors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataManagements: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesConfigDataManagements },
      engines: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesConfigEngines },
      monitors: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesConfigMonitors },
    };
  }

  validate() {
    if(Array.isArray(this.dataManagements)) {
      $dara.Model.validateArray(this.dataManagements);
    }
    if(Array.isArray(this.engines)) {
      $dara.Model.validateArray(this.engines);
    }
    if(Array.isArray(this.monitors)) {
      $dara.Model.validateArray(this.monitors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesOperatingTool extends $dara.Model {
  isEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      isEnable: 'IsEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @example
   * Subscription
   */
  chargeType?: string;
  /**
   * @example
   * airec_developers_public_cn
   */
  commodityCode?: string;
  config?: ListInstancesResponseBodyInstancesConfig;
  /**
   * @example
   * 2022-12-14 00:00:00.0
   */
  expiredTime?: string;
  /**
   * @example
   * 2022-10-13 17:34:52.0
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2022-11-05 09:02:30.0
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * pairec-test1
   */
  instanceId?: string;
  operatingTool?: ListInstancesResponseBodyInstancesOperatingTool;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      config: 'Config',
      expiredTime: 'ExpiredTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      operatingTool: 'OperatingTool',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      config: ListInstancesResponseBodyInstancesConfig,
      expiredTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      operatingTool: ListInstancesResponseBodyInstancesOperatingTool,
      regionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.operatingTool && typeof (this.operatingTool as any).validate === 'function') {
      (this.operatingTool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaboratoriesResponseBodyLaboratories extends $dara.Model {
  /**
   * @example
   * 100
   */
  bucketCount?: number;
  /**
   * @example
   * Filter
   */
  bucketType?: string;
  /**
   * @example
   * 1,2,3,10-20
   */
  buckets?: string;
  /**
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * user1,user2,user3
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * filter=xxx
   */
  filter?: string;
  /**
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @example
   * laboratory1
   */
  name?: string;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @example
   * Offline
   */
  status?: string;
  /**
   * @example
   * Base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucketCount: 'BucketCount',
      bucketType: 'BucketType',
      buckets: 'Buckets',
      crowdId: 'CrowdId',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      environment: 'Environment',
      filter: 'Filter',
      laboratoryId: 'LaboratoryId',
      name: 'Name',
      sceneId: 'SceneId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCount: 'number',
      bucketType: 'string',
      buckets: 'string',
      crowdId: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      environment: 'string',
      filter: 'string',
      laboratoryId: 'string',
      name: 'string',
      sceneId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponseBodyLayers extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  gmtCreateTime?: string;
  /**
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @example
   * layer1
   */
  name?: string;
  residualFlow?: number;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      residualFlow: 'ResidualFlow',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreateTime: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      residualFlow: 'number',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParamsResponseBodyParams extends $dara.Model {
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * home
   */
  name?: string;
  /**
   * @example
   * 4
   */
  paramId?: string;
  /**
   * @example
   * house
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      paramId: 'ParamId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      paramId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponseBodyResourceRulesRuleItems extends $dara.Model {
  description?: string;
  maxValue?: string;
  minValue?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      maxValue: 'string',
      minValue: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponseBodyResourceRules extends $dara.Model {
  description?: string;
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  name?: string;
  resourceRuleId?: string;
  ruleComputingDefinition?: string;
  ruleItems?: ListResourceRulesResponseBodyResourceRulesRuleItems[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metricOperationType: 'MetricOperationType',
      metricPullInfo: 'MetricPullInfo',
      metricPullPeriod: 'MetricPullPeriod',
      name: 'Name',
      resourceRuleId: 'ResourceRuleId',
      ruleComputingDefinition: 'RuleComputingDefinition',
      ruleItems: 'RuleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metricOperationType: 'string',
      metricPullInfo: 'string',
      metricPullPeriod: 'string',
      name: 'string',
      resourceRuleId: 'string',
      ruleComputingDefinition: 'string',
      ruleItems: { 'type': 'array', 'itemType': ListResourceRulesResponseBodyResourceRulesRuleItems },
    };
  }

  validate() {
    if(Array.isArray(this.ruleItems)) {
      $dara.Model.validateArray(this.ruleItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBodyScenesFlows extends $dara.Model {
  /**
   * @example
   * liuliang1
   */
  flowCode?: string;
  /**
   * @example
   * 流量1
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      flowCode: 'FlowCode',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCode: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBodyScenes extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  flows?: ListScenesResponseBodyScenesFlows[];
  /**
   * @example
   * scene1
   */
  name?: string;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flows: 'Flows',
      name: 'Name',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flows: { 'type': 'array', 'itemType': ListScenesResponseBodyScenesFlows },
      name: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubCrowdsResponseBodySubCrowds extends $dara.Model {
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2
   */
  quantity?: number;
  /**
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @example
   * 3
   */
  subCrowdId?: string;
  /**
   * @example
   * user1,user2
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      quantity: 'Quantity',
      source: 'Source',
      subCrowdId: 'SubCrowdId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      quantity: 'number',
      source: 'string',
      subCrowdId: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasResponseBodyTableMetasFields extends $dara.Model {
  /**
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @example
   * the gender of people
   */
  meaning?: string;
  /**
   * @example
   * gender
   */
  name?: string;
  /**
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isDimensionField: 'IsDimensionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDimensionField: 'boolean',
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasResponseBodyTableMetas extends $dara.Model {
  /**
   * @example
   * true
   */
  canDelete?: boolean;
  config?: string;
  /**
   * @example
   * this is a test table
   */
  description?: string;
  fields?: ListTableMetasResponseBodyTableMetasFields[];
  /**
   * @example
   * 2021-12-12 12:24:33
   */
  gmtCreateTime?: string;
  /**
   * @example
   * imprecation
   */
  gmtImportedTime?: string;
  /**
   * @example
   * 2021-12-12 12:24:33
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @example
   * test_table
   */
  name?: string;
  /**
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @example
   * 3
   */
  tableMetaId?: string;
  /**
   * @example
   * table_mysql
   */
  tableName?: string;
  /**
   * @example
   * MaxCompute
   */
  type?: string;
  /**
   * @example
   * https://dmc-xxx.com/dm/table/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      config: 'Config',
      description: 'Description',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtImportedTime: 'GmtImportedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      module: 'Module',
      name: 'Name',
      resourceId: 'ResourceId',
      tableMetaId: 'TableMetaId',
      tableName: 'TableName',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      config: 'string',
      description: 'string',
      fields: { 'type': 'array', 'itemType': ListTableMetasResponseBodyTableMetasFields },
      gmtCreateTime: 'string',
      gmtImportedTime: 'string',
      gmtModifiedTime: 'string',
      module: 'string',
      name: 'string',
      resourceId: 'string',
      tableMetaId: 'string',
      tableName: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTargetTrafficHistoryResponseBodyTrafficControlTaskTrafficHistories extends $dara.Model {
  experimentId?: string;
  itemId?: string;
  recordTime?: string;
  trafficControlTargetAimTraffic?: number;
  trafficControlTargetTraffic?: number;
  trafficControlTaskTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      itemId: 'ItemId',
      recordTime: 'RecordTime',
      trafficControlTargetAimTraffic: 'TrafficControlTargetAimTraffic',
      trafficControlTargetTraffic: 'TrafficControlTargetTraffic',
      trafficControlTaskTraffic: 'TrafficControlTaskTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      itemId: 'string',
      recordTime: 'string',
      trafficControlTargetAimTraffic: 'number',
      trafficControlTargetTraffic: 'number',
      trafficControlTaskTraffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  splitParts?: ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargetsSplitParts;
  startTime?: string;
  statisPeriod?: string;
  status?: string;
  toleranceValue?: number;
  trafficControlTargetId?: string;
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
  behaviorTableMetaId?: string;
  controlGranularity?: string;
  controlLogic?: string;
  controlType?: string;
  description?: string;
  endTime?: string;
  everPublished?: boolean;
  executionTime?: string;
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
  sceneId?: string;
  sceneName?: string;
  serviceId?: string;
  startTime?: string;
  statisBahaviorConditionExpress?: string;
  statisBehaviorConditionArray?: string;
  statisBehaviorConditionType?: string;
  trafficControlTargets?: ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargets[];
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
      endTime: 'EndTime',
      everPublished: 'EverPublished',
      executionTime: 'ExecutionTime',
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
      startTime: 'StartTime',
      statisBahaviorConditionExpress: 'StatisBahaviorConditionExpress',
      statisBehaviorConditionArray: 'StatisBehaviorConditionArray',
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
      endTime: 'string',
      everPublished: 'boolean',
      executionTime: 'string',
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
      startTime: 'string',
      statisBahaviorConditionExpress: 'string',
      statisBehaviorConditionArray: 'string',
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
    if(Array.isArray(this.trafficControlTargets)) {
      $dara.Model.validateArray(this.trafficControlTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleResponseBodyRuleItems extends $dara.Model {
  description?: string;
  maxValue?: string;
  minValue?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      maxValue: 'string',
      minValue: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails extends $dara.Model {
  features?: { [key: string]: any };
  itemId?: string;
  targetProgress?: string;
  targetTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      itemId: 'ItemId',
      targetProgress: 'TargetProgress',
      targetTraffic: 'TargetTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'string',
      targetProgress: 'string',
      targetTraffic: 'number',
    };
  }

  validate() {
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails extends $dara.Model {
  features?: { [key: string]: any };
  itemId?: string;
  targetProgress?: string;
  targetTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      itemId: 'ItemId',
      targetProgress: 'TargetProgress',
      targetTraffic: 'TargetTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'string',
      targetProgress: 'string',
      targetTraffic: 'number',
    };
  }

  validate() {
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail extends $dara.Model {
  itemControlTailReportDetails?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails[];
  itemControlTopReportDetails?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails[];
  static names(): { [key: string]: string } {
    return {
      itemControlTailReportDetails: 'ItemControlTailReportDetails',
      itemControlTopReportDetails: 'ItemControlTopReportDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemControlTailReportDetails: { 'type': 'array', 'itemType': QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTailReportDetails },
      itemControlTopReportDetails: { 'type': 'array', 'itemType': QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetailItemControlTopReportDetails },
    };
  }

  validate() {
    if(Array.isArray(this.itemControlTailReportDetails)) {
      $dara.Model.validateArray(this.itemControlTailReportDetails);
    }
    if(Array.isArray(this.itemControlTopReportDetails)) {
      $dara.Model.validateArray(this.itemControlTopReportDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRequestFlows extends $dara.Model {
  /**
   * @example
   * liuliang1
   */
  flowCode?: string;
  /**
   * @example
   * 流量1
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      flowCode: 'FlowCode',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCode: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaRequestFields extends $dara.Model {
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  isPartitionField?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  meaning?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      isDimensionField: 'IsDimensionField',
      isPartitionField: 'IsPartitionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      isDimensionField: 'boolean',
      isPartitionField: 'string',
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskRequestTrafficControlTargets extends $dara.Model {
  endTime?: string;
  event?: string;
  itemConditionArray?: string;
  itemConditionExpress?: string;
  itemConditionType?: string;
  name?: string;
  newProductRegulation?: boolean;
  recallName?: string;
  startTime?: string;
  statisPeriod?: string;
  status?: string;
  toleranceValue?: number;
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

export class UpdateTrafficControlTaskTrafficRequestTraffics extends $dara.Model {
  itemOrExperimentId?: string;
  recordTime?: string;
  trafficControlTargetAimTraffic?: number;
  trafficControlTargetId?: string;
  trafficControlTargetTraffic?: number;
  trafficControlTaskTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      itemOrExperimentId: 'ItemOrExperimentId',
      recordTime: 'RecordTime',
      trafficControlTargetAimTraffic: 'TrafficControlTargetAimTraffic',
      trafficControlTargetId: 'TrafficControlTargetId',
      trafficControlTargetTraffic: 'TrafficControlTargetTraffic',
      trafficControlTaskTraffic: 'TrafficControlTaskTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemOrExperimentId: 'string',
      recordTime: 'string',
      trafficControlTargetAimTraffic: 'number',
      trafficControlTargetId: 'string',
      trafficControlTargetTraffic: 'number',
      trafficControlTaskTraffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRecommendationDataRequestContent extends $dara.Model {
  fields?: string;
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      operationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficControlTaskTrafficInfoTargetTrafficsDataValue extends $dara.Model {
  traffic?: number;
  recordTime?: number;
  static names(): { [key: string]: string } {
    return {
      traffic: 'Traffic',
      recordTime: 'RecordTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traffic: 'number',
      recordTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficControlTaskTrafficInfoTaskTrafficsValue extends $dara.Model {
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExperimentReportValue extends $dara.Model {
  /**
   * @example
   * true
   */
  baseline?: boolean;
  metricResults?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      baseline: 'Baseline',
      metricResults: 'MetricResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: 'boolean',
      metricResults: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  validate() {
    if(this.metricResults) {
      $dara.Model.validateMap(this.metricResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyEngineConfigRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyEngineConfigResponseBody extends $dara.Model {
  /**
   * @example
   * F8F613A9-DF1C-551A-88E1-397A3981A785
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyEngineConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyEngineConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyEngineConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackflowFeatureConsistencyCheckJobDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [\\"{\\\\\\"itemid\\\\\\":{\\\\\\"value\\\\\\":1010,\\\\\\"type\\\\\\":\\\\\\"string\\\\\\"}}\\"]
   */
  itemFeatures?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  logRequestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1693900981465
   */
  logRequestTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1010
   */
  logUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * video-feed
   */
  sceneName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [\\"{\\\\\\"dbmtl_probs_is_valid_play\\\\\\":0.00032182207107543945,\\\\\\"dbmtl_y_play_time\\\\\\":0.0043269748210906982}\\"]
   */
  scores?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\\"userid\\":{\\"value\\":1010,\\"type\\":\\"string\\"},\\"click_5_seq\\":{\\"value\\":\\"9001;9002;9003;9004;9005\\",\\"type\\":\\"string\\"}}
   */
  userFeatures?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      instanceId: 'InstanceId',
      itemFeatures: 'ItemFeatures',
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logRequestTime: 'LogRequestTime',
      logUserId: 'LogUserId',
      sceneName: 'SceneName',
      scores: 'Scores',
      userFeatures: 'UserFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckJobConfigId: 'string',
      instanceId: 'string',
      itemFeatures: 'string',
      logItemId: 'string',
      logRequestId: 'string',
      logRequestTime: 'number',
      logUserId: 'string',
      sceneName: 'string',
      scores: 'string',
      userFeatures: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackflowFeatureConsistencyCheckJobDataResponseBody extends $dara.Model {
  /**
   * @example
   * BDB621CB-A81E-5D39-8793-39A365CBCC74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackflowFeatureConsistencyCheckJobDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BackflowFeatureConsistencyCheckJobDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BackflowFeatureConsistencyCheckJobDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  /**
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  resources?: CheckInstanceResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': CheckInstanceResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckInstanceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckInstanceResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrafficControlTaskExpressionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  expression?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMetaId?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      instanceId: 'InstanceId',
      tableMetaId: 'TableMetaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      instanceId: 'string',
      tableMetaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrafficControlTaskExpressionResponseBody extends $dara.Model {
  isValie?: boolean;
  reason?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isValie: 'IsValie',
      reason: 'Reason',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValie: 'boolean',
      reason: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTrafficControlTaskExpressionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckTrafficControlTaskExpressionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckTrafficControlTaskExpressionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneEngineConfigRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  configValue?: string;
  description?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneEngineConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  engineConfigId?: string;
  /**
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engineConfigId: 'EngineConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineConfigId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneEngineConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneEngineConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneEngineConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  experimentId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F8F613A9-DF1C-551A-88E1-397A3981A785
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  layerId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      layerId: 'LayerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      layerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 12A65C6C-AFA1-59B2-9A66-A9E0BB73F0E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentGroupId: 'ExperimentGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentGroupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneExperimentGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneExperimentGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFeatureConsistencyCheckJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFeatureConsistencyCheckJobConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 4
   */
  featureConsistencyCheckId?: string;
  /**
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckId: 'FeatureConsistencyCheckId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFeatureConsistencyCheckJobConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneFeatureConsistencyCheckJobConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneFeatureConsistencyCheckJobConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneLaboratoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  cloneExperimentGroup?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cloneExperimentGroup: 'CloneExperimentGroup',
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneExperimentGroup: 'boolean',
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneLaboratoryResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 01D22D08-BA20-5F35-8302-99115F288220
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      laboratoryId: 'LaboratoryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laboratoryId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneLaboratoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneLaboratoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneLaboratoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneTrafficControlTaskRequest extends $dara.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneTrafficControlTaskResponseBody extends $dara.Model {
  requestId?: string;
  trafficControlTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTaskId: 'TrafficControlTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneTrafficControlTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneTrafficControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneTrafficControlTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sum(click_cnt)
   */
  definition?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @example
   * 2
   */
  leftMetricId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pv
   */
  name?: string;
  /**
   * @example
   * Division
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @example
   * 3
   */
  rightMetricId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * 1
   */
  statisticsCycle?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  tableMetaId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      instanceId: 'InstanceId',
      leftMetricId: 'LeftMetricId',
      name: 'Name',
      operator: 'Operator',
      realtime: 'Realtime',
      resultResourceId: 'ResultResourceId',
      rightMetricId: 'RightMetricId',
      sceneId: 'SceneId',
      statisticsCycle: 'StatisticsCycle',
      tableMetaId: 'TableMetaId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      instanceId: 'string',
      leftMetricId: 'string',
      name: 'string',
      operator: 'string',
      realtime: 'boolean',
      resultResourceId: 'string',
      rightMetricId: 'string',
      sceneId: 'string',
      statisticsCycle: 'number',
      tableMetaId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricId: 'ABMetricId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateABMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateABMetricResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * visits
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricIds: 'ABMetricIds',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      realtime: 'Realtime',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricIds: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      realtime: 'boolean',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricGroupId?: string;
  /**
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricGroupId: 'ABMetricGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricGroupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateABMetricGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateABMetricGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCalculationJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2,3,4
   */
  ABMetricIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-01-03
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricIds: 'ABMetricIds',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricIds: 'string',
      endDate: 'string',
      instanceId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCalculationJobsResponseBody extends $dara.Model {
  calculationJobIds?: string[];
  /**
   * @example
   * 8C27790E-CCA5-56BB-BA17-646295DEC0A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      calculationJobIds: 'CalculationJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calculationJobIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.calculationJobIds)) {
      $dara.Model.validateArray(this.calculationJobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCalculationJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCalculationJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCalculationJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * os=android
   */
  label?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx人群
   */
  name?: string;
  /**
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @example
   * user1,user2,user3
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      label: 'Label',
      name: 'Name',
      source: 'Source',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      label: 'string',
      name: 'string',
      source: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCrowdResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      crowdId: 'CrowdId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowdId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCrowdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCrowdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCrowdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineConfigRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  configValue?: string;
  description?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @example
   * engine_config_v1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  engineConfigId?: string;
  /**
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engineConfigId: 'EngineConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineConfigId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEngineConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEngineConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentRequest extends $dara.Model {
  /**
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @example
   * 100
   */
  flowPercent?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * experiment_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Baseline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      experimentGroupId: 'ExperimentGroupId',
      flowPercent: 'FlowPercent',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      experimentGroupId: 'string',
      flowPercent: 'number',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  experimentId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3AAA45F6-0798-5461-9360-81D133823CE7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentGroupRequest extends $dara.Model {
  /**
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @example
   * 1
   */
  crowdId?: string;
  crowdTargetType?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 3
   */
  distributionTimeDuration?: number;
  /**
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @example
   * gender=male
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * experiment_group_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  needAA?: boolean;
  randomFlow?: number;
  /**
   * @example
   * 1,2,3
   */
  reservedBuckets?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdId: 'CrowdId',
      crowdTargetType: 'CrowdTargetType',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      distributionTimeDuration: 'DistributionTimeDuration',
      distributionType: 'DistributionType',
      filter: 'Filter',
      instanceId: 'InstanceId',
      layerId: 'LayerId',
      name: 'Name',
      needAA: 'NeedAA',
      randomFlow: 'RandomFlow',
      reservedBuckets: 'ReservedBuckets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdId: 'string',
      crowdTargetType: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      distributionTimeDuration: 'number',
      distributionType: 'string',
      filter: 'string',
      instanceId: 'string',
      layerId: 'string',
      name: 'string',
      needAA: 'boolean',
      randomFlow: 'number',
      reservedBuckets: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentGroupId: 'ExperimentGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentGroupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExperimentGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateExperimentGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  samplingDuration?: number;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      instanceId: 'InstanceId',
      samplingDuration: 'SamplingDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      featureConsistencyCheckJobConfigId: 'string',
      instanceId: 'string',
      samplingDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobResponseBody extends $dara.Model {
  /**
   * @example
   * 4
   */
  featureConsistencyCheckJobId?: string;
  /**
   * @example
   * 7D59453C-48AA-5FC5-8848-2D373BD1A17F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckJobId: 'FeatureConsistencyCheckJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckJobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFeatureConsistencyCheckJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFeatureConsistencyCheckJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  compareFeature?: boolean;
  datasetId?: string;
  datasetMountPath?: string;
  datasetName?: string;
  datasetType?: string;
  datasetUri?: string;
  defaultRoute?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service_123
   */
  easServiceName?: string;
  /**
   * @example
   * oss://*******
   */
  easyRecPackagePath?: string;
  /**
   * @example
   * 1.3.60
   */
  easyRecVersion?: string;
  /**
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @example
   * feature1,feature2,feature3
   */
  featurePriority?: string;
  featureStoreItemId?: string;
  featureStoreModelId?: string;
  featureStoreProjectId?: string;
  featureStoreProjectName?: string;
  featureStoreSeqFeatureView?: string;
  featureStoreUserId?: string;
  /**
   * @example
   * 1.0.0
   */
  fgJarVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file.json
   */
  fgJsonFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @example
   * item_id
   */
  itemIdField?: string;
  /**
   * @example
   * item_table
   */
  itemTable?: string;
  /**
   * @example
   * ds
   */
  itemTablePartitionField?: string;
  /**
   * @example
   * yyyymmdd
   */
  itemTablePartitionFieldFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * feature_consistency_check1
   */
  name?: string;
  /**
   * @example
   * reso-********
   */
  ossResourceId?: string;
  predictWorkerCount?: number;
  predictWorkerCpu?: number;
  predictWorkerMemory?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.89
   */
  sampleRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  serviceId?: string;
  switchId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  useFeatureStore?: boolean;
  /**
   * @example
   * user_id
   */
  userIdField?: string;
  /**
   * @example
   * user_table
   */
  userTable?: string;
  /**
   * @example
   * ds
   */
  userTablePartitionField?: string;
  /**
   * @example
   * yyyymmdd
   */
  userTablePartitionFieldFormat?: string;
  vpcId?: string;
  /**
   * @example
   * work_flow_1
   */
  workflowName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      compareFeature: 'CompareFeature',
      datasetId: 'DatasetId',
      datasetMountPath: 'DatasetMountPath',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      datasetUri: 'DatasetUri',
      defaultRoute: 'DefaultRoute',
      easServiceName: 'EasServiceName',
      easyRecPackagePath: 'EasyRecPackagePath',
      easyRecVersion: 'EasyRecVersion',
      featureDisplayExclude: 'FeatureDisplayExclude',
      featureLandingResourceId: 'FeatureLandingResourceId',
      featurePriority: 'FeaturePriority',
      featureStoreItemId: 'FeatureStoreItemId',
      featureStoreModelId: 'FeatureStoreModelId',
      featureStoreProjectId: 'FeatureStoreProjectId',
      featureStoreProjectName: 'FeatureStoreProjectName',
      featureStoreSeqFeatureView: 'FeatureStoreSeqFeatureView',
      featureStoreUserId: 'FeatureStoreUserId',
      fgJarVersion: 'FgJarVersion',
      fgJsonFileName: 'FgJsonFileName',
      generateZip: 'GenerateZip',
      instanceId: 'InstanceId',
      itemIdField: 'ItemIdField',
      itemTable: 'ItemTable',
      itemTablePartitionField: 'ItemTablePartitionField',
      itemTablePartitionFieldFormat: 'ItemTablePartitionFieldFormat',
      name: 'Name',
      ossResourceId: 'OssResourceId',
      predictWorkerCount: 'PredictWorkerCount',
      predictWorkerCpu: 'PredictWorkerCpu',
      predictWorkerMemory: 'PredictWorkerMemory',
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      switchId: 'SwitchId',
      useFeatureStore: 'UseFeatureStore',
      userIdField: 'UserIdField',
      userTable: 'UserTable',
      userTablePartitionField: 'UserTablePartitionField',
      userTablePartitionFieldFormat: 'UserTablePartitionFieldFormat',
      vpcId: 'VpcId',
      workflowName: 'WorkflowName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareFeature: 'boolean',
      datasetId: 'string',
      datasetMountPath: 'string',
      datasetName: 'string',
      datasetType: 'string',
      datasetUri: 'string',
      defaultRoute: 'string',
      easServiceName: 'string',
      easyRecPackagePath: 'string',
      easyRecVersion: 'string',
      featureDisplayExclude: 'string',
      featureLandingResourceId: 'string',
      featurePriority: 'string',
      featureStoreItemId: 'string',
      featureStoreModelId: 'string',
      featureStoreProjectId: 'string',
      featureStoreProjectName: 'string',
      featureStoreSeqFeatureView: 'string',
      featureStoreUserId: 'string',
      fgJarVersion: 'string',
      fgJsonFileName: 'string',
      generateZip: 'boolean',
      instanceId: 'string',
      itemIdField: 'string',
      itemTable: 'string',
      itemTablePartitionField: 'string',
      itemTablePartitionFieldFormat: 'string',
      name: 'string',
      ossResourceId: 'string',
      predictWorkerCount: 'number',
      predictWorkerCpu: 'number',
      predictWorkerMemory: 'number',
      sampleRate: 'number',
      sceneId: 'string',
      securityGroupId: 'string',
      serviceId: 'string',
      switchId: 'string',
      useFeatureStore: 'boolean',
      userIdField: 'string',
      userTable: 'string',
      userTablePartitionField: 'string',
      userTablePartitionFieldFormat: 'string',
      vpcId: 'string',
      workflowName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 4
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckJobConfigId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFeatureConsistencyCheckJobConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFeatureConsistencyCheckJobConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DataManagement
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * storage
   */
  group?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      group: 'Group',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      group: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 6CF1E160-3F36-5E73-A170-C75504F05BBC
   */
  requestId?: string;
  /**
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaboratoryRequest extends $dara.Model {
  /**
   * @example
   * 24
   */
  bucketCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UidHash
   */
  bucketType?: string;
  /**
   * @example
   * 1,2,3,10-20
   */
  buckets?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * filter=xxx
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * laboratory1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucketCount: 'BucketCount',
      bucketType: 'BucketType',
      buckets: 'Buckets',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      environment: 'Environment',
      filter: 'Filter',
      instanceId: 'InstanceId',
      name: 'Name',
      sceneId: 'SceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCount: 'number',
      bucketType: 'string',
      buckets: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      environment: 'string',
      filter: 'string',
      instanceId: 'string',
      name: 'string',
      sceneId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaboratoryResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 42391E6D-822C-58F8-9F7E-D991BB86D6AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      laboratoryId: 'LaboratoryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laboratoryId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaboratoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLaboratoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLaboratoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * layer1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      laboratoryId: 'LaboratoryId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      laboratoryId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layerId: 'LayerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layerId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLayerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParamRequest extends $dara.Model {
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * home
   */
  name?: string;
  /**
   * @example
   * 4
   */
  sceneId?: string;
  /**
   * @example
   * house
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
      sceneId: 'SceneId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      name: 'string',
      sceneId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParamResponseBody extends $dara.Model {
  /**
   * @example
   * 4
   */
  paramId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F8F613A9-DF1C-551A-88E1-397A3981A785
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paramId: 'ParamId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateParamResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleComputingDefinition?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleItems?: CreateResourceRuleRequestRuleItems[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      metricOperationType: 'MetricOperationType',
      metricPullInfo: 'MetricPullInfo',
      metricPullPeriod: 'MetricPullPeriod',
      name: 'Name',
      ruleComputingDefinition: 'RuleComputingDefinition',
      ruleItems: 'RuleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      metricOperationType: 'string',
      metricPullInfo: 'string',
      metricPullPeriod: 'string',
      name: 'string',
      ruleComputingDefinition: 'string',
      ruleItems: { 'type': 'array', 'itemType': CreateResourceRuleRequestRuleItems },
    };
  }

  validate() {
    if(Array.isArray(this.ruleItems)) {
      $dara.Model.validateArray(this.ruleItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleResponseBody extends $dara.Model {
  requestId?: string;
  resourceRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRuleId: 'ResourceRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleItemRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  maxValue?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  minValue?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      maxValue: 'number',
      minValue: 'number',
      name: 'string',
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

export class CreateResourceRuleItemResponseBody extends $dara.Model {
  requestId?: string;
  resourceRuleItemId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRuleItemId: 'ResourceRuleItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRuleItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceRuleItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceRuleItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRequest extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  flows?: CreateSceneRequestFlows[];
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * scene1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flows: 'Flows',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flows: { 'type': 'array', 'itemType': CreateSceneRequestFlows },
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FCF741D8-9C30-578E-807F-B935487DB34A
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSceneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user1,user2,user3
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      source: 'Source',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      source: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCrowdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  subCrowdId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subCrowdId: 'SubCrowdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subCrowdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCrowdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSubCrowdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSubCrowdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * this is a test table
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: CreateTableMetaRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reso-2s416t146ffjc3yefx
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table_mysql
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fields: 'Fields',
      instanceId: 'InstanceId',
      module: 'Module',
      name: 'Name',
      resourceId: 'ResourceId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fields: { 'type': 'array', 'itemType': CreateTableMetaRequestFields },
      instanceId: 'string',
      module: 'string',
      name: 'string',
      resourceId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaResponseBody extends $dara.Model {
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  tableMetaId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tableMetaId: 'TableMetaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tableMetaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTableMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTableMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTargetRequest extends $dara.Model {
  endTime?: string;
  event?: string;
  itemConditionArray?: string;
  itemConditionExpress?: string;
  itemConditionType?: string;
  name?: string;
  newProductRegulation?: boolean;
  recallName?: string;
  startTime?: string;
  statisPeriod?: string;
  status?: string;
  toleranceValue?: number;
  trafficControlTaskId?: string;
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
      trafficControlTaskId: 'TrafficControlTaskId',
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
      trafficControlTaskId: 'string',
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

export class CreateTrafficControlTargetResponseBody extends $dara.Model {
  requestId?: string;
  trafficControlTargetId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTargetId: 'TrafficControlTargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTargetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTrafficControlTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTrafficControlTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTaskRequest extends $dara.Model {
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
  /**
   * @example
   * 2024-03-26
   */
  endTime?: string;
  /**
   * @example
   * TimeRange
   */
  executionTime?: string;
  /**
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @example
   * [{\\"field\\":\\"status\\",\\"option\\":\\"=\\",\\"value\\":\\"1\\"}]
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
   * task-1
   */
  name?: string;
  preExperimentIds?: string;
  prodExperimentIds?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serviceId?: string;
  /**
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @example
   * [{\\"field\\":\\"click\\",\\"option\\":\\"<=\\",\\"value\\":\\"30\\"}]
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
  trafficControlTargets?: CreateTrafficControlTaskRequestTrafficControlTargets[];
  /**
   * @example
   * [{\\"field\\":\\"gender\\",\\"option\\":\\"=\\",\\"value\\":\\"male\\"}]
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
      endTime: 'EndTime',
      executionTime: 'ExecutionTime',
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
      endTime: 'string',
      executionTime: 'string',
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
    if(Array.isArray(this.trafficControlTargets)) {
      $dara.Model.validateArray(this.trafficControlTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 42391E6D-822C-58F8-9F7E-D991BB86D6AD
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTaskId: 'TrafficControlTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTrafficControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTrafficControlTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugResourceRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricInfo?: { [key: string]: any };
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      metricInfo: 'MetricInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      metricInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
    };
  }

  validate() {
    if(this.metricInfo) {
      $dara.Model.validateMap(this.metricInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugResourceRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricInfoShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      metricInfoShrink: 'MetricInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      metricInfoShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugResourceRuleResponseBody extends $dara.Model {
  currentValues?: { [key: string]: any };
  outputValues?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      currentValues: 'CurrentValues',
      outputValues: 'OutputValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      outputValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.currentValues) {
      $dara.Model.validateMap(this.currentValues);
    }
    if(this.outputValues) {
      $dara.Model.validateMap(this.outputValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugResourceRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DebugResourceRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DebugResourceRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricResponseBody extends $dara.Model {
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteABMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteABMetricResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricGroupResponseBody extends $dara.Model {
  /**
   * @example
   * BDB621CB-A81E-5D39-8793-39A365CBCC74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteABMetricGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteABMetricGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCrowdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCrowdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCrowdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCrowdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEngineConfigRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-***test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEngineConfigResponseBody extends $dara.Model {
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEngineConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEngineConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEngineConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2A734D87-2212-5C84-B63A-1AC87CA843D4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A009D9BE-C85E-57B2-AE05-BD78BB6EBF50
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExperimentGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteExperimentGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 7D59453C-48AA-5FC5-8848-2D373BD1A17F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaboratoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaboratoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1C0898E5-9220-5443-B2D9-445FF0688215
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaboratoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLaboratoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLaboratoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8F457D79-C4A2-5E8C-83E4-0D089456E2AC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLayerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParamRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F0AB6527-093F-5C44-B3BD-42C8C210C619
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteParamResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleItemRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleItemResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceRuleItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceRuleItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D75C43DC-3D3A-5CC8-9AAC-8C77306C433B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSceneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubCrowdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EE97D06A-2AA0-5AD9-B6CF-8A267924D691
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubCrowdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSubCrowdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSubCrowdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableMetaResponseBody extends $dara.Model {
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTableMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTableMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTargetRequest extends $dara.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTargetResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTrafficControlTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTrafficControlTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTaskRequest extends $dara.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTaskResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTrafficControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTrafficControlTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskCodeRequest extends $dara.Model {
  environment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskCodeResponseBody extends $dara.Model {
  code?: string;
  preNeedConfig?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      preNeedConfig: 'PreNeedConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      preNeedConfig: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateTrafficControlTaskCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateTrafficControlTaskCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskConfigRequest extends $dara.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskConfigResponseBody extends $dara.Model {
  config?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateTrafficControlTaskConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateTrafficControlTaskConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricResponseBody extends $dara.Model {
  /**
   * @example
   * sum(click_cnt)
   */
  definition?: string;
  description?: string;
  /**
   * @example
   * 3
   */
  leftMetricId?: string;
  /**
   * @example
   * pv
   */
  name?: string;
  /**
   * @example
   * Division
   */
  operator?: string;
  /**
   * @example
   * false
   */
  realtime?: string;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  resultResourceId?: string;
  /**
   * @example
   * 3
   */
  resultTableMetaId?: string;
  /**
   * @example
   * 2
   */
  rightMetricId?: string;
  /**
   * @example
   * 1
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
  statisticsCycle?: number;
  /**
   * @example
   * 2
   */
  tableMetaId?: string;
  /**
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      leftMetricId: 'LeftMetricId',
      name: 'Name',
      operator: 'Operator',
      realtime: 'Realtime',
      requestId: 'RequestId',
      resultResourceId: 'ResultResourceId',
      resultTableMetaId: 'ResultTableMetaId',
      rightMetricId: 'RightMetricId',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      statisticsCycle: 'StatisticsCycle',
      tableMetaId: 'TableMetaId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      leftMetricId: 'string',
      name: 'string',
      operator: 'string',
      realtime: 'string',
      requestId: 'string',
      resultResourceId: 'string',
      resultTableMetaId: 'string',
      rightMetricId: 'string',
      sceneId: 'string',
      sceneName: 'string',
      statisticsCycle: 'number',
      tableMetaId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetABMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetABMetricResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @example
   * pv,uv
   */
  ABMetricNames?: string;
  description?: string;
  /**
   * @example
   * visits
   */
  name?: string;
  /**
   * @example
   * 2799614***
   */
  owner?: string;
  /**
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @example
   * 01D22D08-BA20-5F35-8302-99115F288220
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricIds: 'ABMetricIds',
      ABMetricNames: 'ABMetricNames',
      description: 'Description',
      name: 'Name',
      owner: 'Owner',
      realtime: 'Realtime',
      requestId: 'RequestId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricIds: 'string',
      ABMetricNames: 'string',
      description: 'string',
      name: 'string',
      owner: 'string',
      realtime: 'boolean',
      requestId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetABMetricGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetABMetricGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCalculationJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCalculationJobResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @example
   * pv
   */
  ABMetricName?: string;
  /**
   * @example
   * 2021-12-15
   */
  bizDate?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtRanTime?: string;
  jobMessage?: string[];
  /**
   * @example
   * CronOffline
   */
  jobSource?: string;
  /**
   * @example
   * 7D59453C-48AA-5FC5-8848-2D373BD1A17F
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricId: 'ABMetricId',
      ABMetricName: 'ABMetricName',
      bizDate: 'BizDate',
      config: 'Config',
      gmtRanTime: 'GmtRanTime',
      jobMessage: 'JobMessage',
      jobSource: 'JobSource',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricId: 'string',
      ABMetricName: 'string',
      bizDate: 'string',
      config: 'string',
      gmtRanTime: 'string',
      jobMessage: { 'type': 'array', 'itemType': 'string' },
      jobSource: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobMessage)) {
      $dara.Model.validateArray(this.jobMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCalculationJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCalculationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCalculationJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineConfigRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineConfigResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  configValue?: string;
  description?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * 2024-01-03T02:28:00.000Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2024-08-27T12:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 2024-01-03 02:28:00
   */
  gmtReleasedTime?: string;
  /**
   * @example
   * engine_config_v1
   */
  name?: string;
  /**
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  /**
   * @example
   * Released
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtReleasedTime: 'GmtReleasedTime',
      name: 'Name',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      gmtReleasedTime: 'string',
      name: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEngineConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEngineConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBody extends $dara.Model {
  /**
   * @example
   * L1#EG1#E1
   */
  aliasExperimentId?: string;
  /**
   * @example
   * 1,2,3
   */
  buckets?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * uid1,uid2,uid3
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @example
   * 100
   */
  flowPercent?: number;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @example
   * experiment_test1
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @example
   * Offline
   */
  status?: string;
  /**
   * @example
   * Baseline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasExperimentId: 'AliasExperimentId',
      buckets: 'Buckets',
      config: 'Config',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      experimentGroupId: 'ExperimentGroupId',
      flowPercent: 'FlowPercent',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasExperimentId: 'string',
      buckets: 'string',
      config: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      experimentGroupId: 'string',
      flowPercent: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      requestId: 'string',
      sceneId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentGroupResponseBody extends $dara.Model {
  /**
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  crowdId?: string;
  crowdTargetType?: string;
  /**
   * @example
   * 4
   */
  debugCrowdId?: string;
  /**
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 5
   */
  distributionTimeDuration?: number;
  /**
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @example
   * gender=female
   */
  filter?: string;
  holdingBuckets?: string;
  /**
   * @example
   * 4
   */
  laboratoryId?: string;
  /**
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @example
   * experiment_group1
   */
  name?: string;
  /**
   * @example
   * true
   */
  needAA?: boolean;
  /**
   * @example
   * 1124512470******
   */
  owner?: string;
  randomFlow?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BDB621CB-A81E-5D39-8793-39A365CBCC74
   */
  requestId?: string;
  /**
   * @example
   * 1,2,3,4
   */
  reservedBuckets?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * Offline
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdId: 'CrowdId',
      crowdTargetType: 'CrowdTargetType',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      distributionTimeDuration: 'DistributionTimeDuration',
      distributionType: 'DistributionType',
      filter: 'Filter',
      holdingBuckets: 'HoldingBuckets',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      needAA: 'NeedAA',
      owner: 'Owner',
      randomFlow: 'RandomFlow',
      requestId: 'RequestId',
      reservedBuckets: 'ReservedBuckets',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdId: 'string',
      crowdTargetType: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      distributionTimeDuration: 'number',
      distributionType: 'string',
      filter: 'string',
      holdingBuckets: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      needAA: 'boolean',
      owner: 'string',
      randomFlow: 'number',
      requestId: 'string',
      reservedBuckets: 'string',
      sceneId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExperimentGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetExperimentGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 5
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @example
   * feature_consistency_check_1
   */
  featureConsistencyCheckJobConfigName?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtEndTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtStartTime?: string;
  logs?: string[];
  /**
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      featureConsistencyCheckJobConfigName: 'FeatureConsistencyCheckJobConfigName',
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      logs: 'Logs',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureConsistencyCheckJobConfigId: 'string',
      featureConsistencyCheckJobConfigName: 'string',
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFeatureConsistencyCheckJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFeatureConsistencyCheckJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobConfigResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  compareFeature?: boolean;
  datasetId?: string;
  datasetMountPath?: string;
  datasetName?: string;
  datasetType?: string;
  datasetUri?: string;
  defaultRoute?: string;
  /**
   * @example
   * eas_service_1
   */
  easServiceName?: string;
  /**
   * @example
   * oss://*******
   */
  easyRecPackagePath?: string;
  /**
   * @example
   * 1.3.60
   */
  easyRecVersion?: string;
  /**
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @example
   * mc_project_1
   */
  featureLandingResourceUri?: string;
  /**
   * @example
   * feature1,feature2,feature3
   */
  featurePriority?: string;
  featureStoreItemId?: string;
  featureStoreModelId?: string;
  featureStoreProjectId?: string;
  featureStoreProjectName?: string;
  featureStoreSeqFeatureView?: string;
  featureStoreUserId?: string;
  /**
   * @example
   * 1.0.0
   */
  fgJarVersion?: string;
  /**
   * @example
   * file.json
   */
  fgJsonFileName?: string;
  /**
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * item_id
   */
  itemIdField?: string;
  /**
   * @example
   * item_table
   */
  itemTable?: string;
  /**
   * @example
   * ds
   */
  itemTablePartitionField?: string;
  /**
   * @example
   * yyyymmdd
   */
  itemTablePartitionFieldFormat?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingEndTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  latestJobGmtSamplingStartTime?: string;
  /**
   * @example
   * 3
   */
  latestJobId?: string;
  /**
   * @example
   * feature_consistency_check1
   */
  name?: string;
  /**
   * @example
   * oss_bucket_1
   */
  ossBucket?: string;
  /**
   * @example
   * reso-********
   */
  ossResourceId?: string;
  predictWorkerCount?: number;
  predictWorkerCpu?: number;
  predictWorkerMemory?: number;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 0.89
   */
  sampleRate?: string;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @example
   * scene1
   */
  sceneName?: string;
  securityGroupId?: string;
  /**
   * @example
   * 4
   */
  serviceId?: string;
  /**
   * @example
   * service1
   */
  serviceName?: string;
  /**
   * @example
   * Editable
   */
  status?: string;
  switchId?: string;
  useFeatureStore?: boolean;
  /**
   * @example
   * user_id
   */
  userIdField?: string;
  /**
   * @example
   * user_table
   */
  userTable?: string;
  /**
   * @example
   * ds
   */
  userTablePartitionField?: string;
  /**
   * @example
   * yyyymmdd
   */
  userTablePartitionFieldFormat?: string;
  vpcId?: string;
  /**
   * @example
   * work_flow_1
   */
  workflowName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      compareFeature: 'CompareFeature',
      datasetId: 'DatasetId',
      datasetMountPath: 'DatasetMountPath',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      datasetUri: 'DatasetUri',
      defaultRoute: 'DefaultRoute',
      easServiceName: 'EasServiceName',
      easyRecPackagePath: 'EasyRecPackagePath',
      easyRecVersion: 'EasyRecVersion',
      featureDisplayExclude: 'FeatureDisplayExclude',
      featureLandingResourceId: 'FeatureLandingResourceId',
      featureLandingResourceUri: 'FeatureLandingResourceUri',
      featurePriority: 'FeaturePriority',
      featureStoreItemId: 'FeatureStoreItemId',
      featureStoreModelId: 'FeatureStoreModelId',
      featureStoreProjectId: 'FeatureStoreProjectId',
      featureStoreProjectName: 'FeatureStoreProjectName',
      featureStoreSeqFeatureView: 'FeatureStoreSeqFeatureView',
      featureStoreUserId: 'FeatureStoreUserId',
      fgJarVersion: 'FgJarVersion',
      fgJsonFileName: 'FgJsonFileName',
      generateZip: 'GenerateZip',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      itemIdField: 'ItemIdField',
      itemTable: 'ItemTable',
      itemTablePartitionField: 'ItemTablePartitionField',
      itemTablePartitionFieldFormat: 'ItemTablePartitionFieldFormat',
      latestJobGmtSamplingEndTime: 'LatestJobGmtSamplingEndTime',
      latestJobGmtSamplingStartTime: 'LatestJobGmtSamplingStartTime',
      latestJobId: 'LatestJobId',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossResourceId: 'OssResourceId',
      predictWorkerCount: 'PredictWorkerCount',
      predictWorkerCpu: 'PredictWorkerCpu',
      predictWorkerMemory: 'PredictWorkerMemory',
      requestId: 'RequestId',
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      switchId: 'SwitchId',
      useFeatureStore: 'UseFeatureStore',
      userIdField: 'UserIdField',
      userTable: 'UserTable',
      userTablePartitionField: 'UserTablePartitionField',
      userTablePartitionFieldFormat: 'UserTablePartitionFieldFormat',
      vpcId: 'VpcId',
      workflowName: 'WorkflowName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareFeature: 'boolean',
      datasetId: 'string',
      datasetMountPath: 'string',
      datasetName: 'string',
      datasetType: 'string',
      datasetUri: 'string',
      defaultRoute: 'string',
      easServiceName: 'string',
      easyRecPackagePath: 'string',
      easyRecVersion: 'string',
      featureDisplayExclude: 'string',
      featureLandingResourceId: 'string',
      featureLandingResourceUri: 'string',
      featurePriority: 'string',
      featureStoreItemId: 'string',
      featureStoreModelId: 'string',
      featureStoreProjectId: 'string',
      featureStoreProjectName: 'string',
      featureStoreSeqFeatureView: 'string',
      featureStoreUserId: 'string',
      fgJarVersion: 'string',
      fgJsonFileName: 'string',
      generateZip: 'boolean',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      itemIdField: 'string',
      itemTable: 'string',
      itemTablePartitionField: 'string',
      itemTablePartitionFieldFormat: 'string',
      latestJobGmtSamplingEndTime: 'string',
      latestJobGmtSamplingStartTime: 'string',
      latestJobId: 'string',
      name: 'string',
      ossBucket: 'string',
      ossResourceId: 'string',
      predictWorkerCount: 'number',
      predictWorkerCpu: 'number',
      predictWorkerMemory: 'number',
      requestId: 'string',
      sampleRate: 'string',
      sceneId: 'string',
      sceneName: 'string',
      securityGroupId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      switchId: 'string',
      useFeatureStore: 'boolean',
      userIdField: 'string',
      userTable: 'string',
      userTablePartitionField: 'string',
      userTablePartitionFieldFormat: 'string',
      vpcId: 'string',
      workflowName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFeatureConsistencyCheckJobConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFeatureConsistencyCheckJobConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * Subscription
   */
  chargeType?: string;
  /**
   * @example
   * airec_developers_public_cn
   */
  commodityCode?: string;
  config?: GetInstanceResponseBodyConfig;
  /**
   * @example
   * 2022-12-14 00:00:00.0
   */
  expiredTime?: string;
  /**
   * @example
   * 2022-10-13 17:34:52.0
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2022-11-05 09:02:30.0
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * pairec-test1
   */
  instanceId?: string;
  operatingTool?: GetInstanceResponseBodyOperatingTool;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      config: 'Config',
      expiredTime: 'ExpiredTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      operatingTool: 'OperatingTool',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      config: GetInstanceResponseBodyConfig,
      expiredTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      operatingTool: GetInstanceResponseBodyOperatingTool,
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.operatingTool && typeof (this.operatingTool as any).validate === 'function') {
      (this.operatingTool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceResponseBody extends $dara.Model {
  /**
   * @example
   * DataManagement
   */
  category?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 2020-10-13 17:34:52
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2020-10-13 17:34:52
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * storage
   */
  group?: string;
  /**
   * @example
   * D75C43DC-3D3A-5CC8-9AAC-8C77306C433B
   */
  requestId?: string;
  /**
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @example
   * OSS
   */
  type?: string;
  /**
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      config: 'Config',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      group: 'Group',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      group: 'string',
      requestId: 'string',
      resourceId: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceTableResponseBody extends $dara.Model {
  fields?: GetInstanceResourceTableResponseBodyFields[];
  /**
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  /**
   * @example
   * test_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      requestId: 'RequestId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': GetInstanceResourceTableResponseBodyFields },
      requestId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceTableResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResourceTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResourceTableResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaboratoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaboratoryResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  bucketCount?: number;
  /**
   * @example
   * Filter
   */
  bucketType?: string;
  /**
   * @example
   * 1,2,3,10-20
   */
  buckets?: string;
  /**
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * user1,user2,user3
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * filter=xxx
   */
  filter?: string;
  /**
   * @example
   * laboratory1
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1C0898E5-9220-5443-B2D9-445FF0688215
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @example
   * Offline
   */
  status?: string;
  /**
   * @example
   * Base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucketCount: 'BucketCount',
      bucketType: 'BucketType',
      buckets: 'Buckets',
      crowdId: 'CrowdId',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      environment: 'Environment',
      filter: 'Filter',
      name: 'Name',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCount: 'number',
      bucketType: 'string',
      buckets: 'string',
      crowdId: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      environment: 'string',
      filter: 'string',
      name: 'string',
      requestId: 'string',
      sceneId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaboratoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLaboratoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLaboratoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerResponseBody extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  gmtCreateTime?: string;
  /**
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @example
   * layer1
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EE97D06A-2AA0-5AD9-B6CF-8A267924D691
   */
  requestId?: string;
  residualFlow?: number;
  /**
   * @example
   * 4
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      laboratoryId: 'LaboratoryId',
      name: 'Name',
      requestId: 'RequestId',
      residualFlow: 'ResidualFlow',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreateTime: 'string',
      laboratoryId: 'string',
      name: 'string',
      requestId: 'string',
      residualFlow: 'number',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLayerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRuleResponseBody extends $dara.Model {
  description?: string;
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  name?: string;
  requestId?: string;
  resourceRuleId?: string;
  ruleComputingDefinition?: string;
  ruleItems?: GetResourceRuleResponseBodyRuleItems[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metricOperationType: 'MetricOperationType',
      metricPullInfo: 'MetricPullInfo',
      metricPullPeriod: 'MetricPullPeriod',
      name: 'Name',
      requestId: 'RequestId',
      resourceRuleId: 'ResourceRuleId',
      ruleComputingDefinition: 'RuleComputingDefinition',
      ruleItems: 'RuleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metricOperationType: 'string',
      metricPullInfo: 'string',
      metricPullPeriod: 'string',
      name: 'string',
      requestId: 'string',
      resourceRuleId: 'string',
      ruleComputingDefinition: 'string',
      ruleItems: { 'type': 'array', 'itemType': GetResourceRuleResponseBodyRuleItems },
    };
  }

  validate() {
    if(Array.isArray(this.ruleItems)) {
      $dara.Model.validateArray(this.ruleItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneResponseBody extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  flows?: GetSceneResponseBodyFlows[];
  /**
   * @example
   * scene1
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B8987BF7-6028-5B17-80E0-251B7BD67BBA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flows: 'Flows',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flows: { 'type': 'array', 'itemType': GetSceneResponseBodyFlows },
      name: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSceneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubCrowdResponseBody extends $dara.Model {
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 3
   */
  quantity?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 01D22D08-BA20-5F35-8302-99115F288220
   */
  requestId?: string;
  /**
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @example
   * user1,user2
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      quantity: 'Quantity',
      requestId: 'RequestId',
      source: 'Source',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      quantity: 'string',
      requestId: 'string',
      source: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubCrowdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubCrowdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSubCrowdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  canDelete?: boolean;
  config?: string;
  /**
   * @example
   * this is a test table
   */
  description?: string;
  fields?: GetTableMetaResponseBodyFields[];
  /**
   * @example
   * 2021-12-15:24:33
   */
  gmtCreateTime?: string;
  gmtImportedTime?: string;
  /**
   * @example
   * 2021-12-15:24:33
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @example
   * test_table
   */
  name?: string;
  /**
   * @example
   * 28C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * reso-wkgo***
   */
  resourceId?: string;
  tableMetaId?: string;
  /**
   * @example
   * table_mysql
   */
  tableName?: string;
  /**
   * @example
   * MaxCompute
   */
  type?: string;
  /**
   * @example
   * https://dmc-xxx.com/dm/table/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      config: 'Config',
      description: 'Description',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtImportedTime: 'GmtImportedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      module: 'Module',
      name: 'Name',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      tableMetaId: 'TableMetaId',
      tableName: 'TableName',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      config: 'string',
      description: 'string',
      fields: { 'type': 'array', 'itemType': GetTableMetaResponseBodyFields },
      gmtCreateTime: 'string',
      gmtImportedTime: 'string',
      gmtModifiedTime: 'string',
      module: 'string',
      name: 'string',
      requestId: 'string',
      resourceId: 'string',
      tableMetaId: 'string',
      tableName: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTableMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTargetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTargetResponseBody extends $dara.Model {
  endTime?: string;
  event?: string;
  gmtCreateTime?: string;
  itemConditionArray?: string;
  itemConditionExpress?: string;
  itemConditionType?: string;
  name?: string;
  newProductRegulation?: boolean;
  recallName?: string;
  requestId?: string;
  splitParts?: GetTrafficControlTargetResponseBodySplitParts;
  startTime?: string;
  statisPeriod?: string;
  status?: string;
  toleranceValue?: number;
  trafficControlTargetId?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      event: 'Event',
      gmtCreateTime: 'GmtCreateTime',
      itemConditionArray: 'ItemConditionArray',
      itemConditionExpress: 'ItemConditionExpress',
      itemConditionType: 'ItemConditionType',
      name: 'Name',
      newProductRegulation: 'NewProductRegulation',
      recallName: 'RecallName',
      requestId: 'RequestId',
      splitParts: 'SplitParts',
      startTime: 'StartTime',
      statisPeriod: 'StatisPeriod',
      status: 'Status',
      toleranceValue: 'ToleranceValue',
      trafficControlTargetId: 'TrafficControlTargetId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      event: 'string',
      gmtCreateTime: 'string',
      itemConditionArray: 'string',
      itemConditionExpress: 'string',
      itemConditionType: 'string',
      name: 'string',
      newProductRegulation: 'boolean',
      recallName: 'string',
      requestId: 'string',
      splitParts: GetTrafficControlTargetResponseBodySplitParts,
      startTime: 'string',
      statisPeriod: 'string',
      status: 'string',
      toleranceValue: 'number',
      trafficControlTargetId: 'string',
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

export class GetTrafficControlTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrafficControlTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrafficControlTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskRequest extends $dara.Model {
  controlTargetFilter?: string;
  environment?: string;
  instanceId?: string;
  regionId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      controlTargetFilter: 'ControlTargetFilter',
      environment: 'Environment',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlTargetFilter: 'string',
      environment: 'string',
      instanceId: 'string',
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
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
  endTime?: string;
  everPublished?: boolean;
  executionTime?: string;
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
      endTime: 'EndTime',
      everPublished: 'EverPublished',
      executionTime: 'ExecutionTime',
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
      endTime: 'string',
      everPublished: 'boolean',
      executionTime: 'string',
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
    if(Array.isArray(this.trafficControlTargets)) {
      $dara.Model.validateArray(this.trafficControlTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrafficControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrafficControlTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskTrafficRequest extends $dara.Model {
  environment?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskTrafficResponseBody extends $dara.Model {
  requestId?: string;
  trafficControlTaskTrafficInfo?: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTaskTrafficInfo: 'TrafficControlTaskTrafficInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTaskTrafficInfo: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo,
    };
  }

  validate() {
    if(this.trafficControlTaskTrafficInfo && typeof (this.trafficControlTaskTrafficInfo as any).validate === 'function') {
      (this.trafficControlTaskTrafficInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskTrafficResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrafficControlTaskTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrafficControlTaskTrafficResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      realtime: 'Realtime',
      sceneId: 'SceneId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      realtime: 'boolean',
      sceneId: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricGroupsResponseBody extends $dara.Model {
  ABMetricGroups?: ListABMetricGroupsResponseBodyABMetricGroups[];
  /**
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ABMetricGroups: 'ABMetricGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricGroups: { 'type': 'array', 'itemType': ListABMetricGroupsResponseBodyABMetricGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ABMetricGroups)) {
      $dara.Model.validateArray(this.ABMetricGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListABMetricGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListABMetricGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @example
   * home
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * 1
   */
  tableMetaId?: string;
  /**
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      realtime: 'Realtime',
      sceneId: 'SceneId',
      tableMetaId: 'TableMetaId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      realtime: 'boolean',
      sceneId: 'string',
      tableMetaId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricsResponseBody extends $dara.Model {
  ABMetrics?: ListABMetricsResponseBodyABMetrics[];
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ABMetrics: 'ABMetrics',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetrics: { 'type': 'array', 'itemType': ListABMetricsResponseBodyABMetrics },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ABMetrics)) {
      $dara.Model.validateArray(this.ABMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListABMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListABMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalculationJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sceneId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalculationJobsResponseBody extends $dara.Model {
  calculationJobs?: ListCalculationJobsResponseBodyCalculationJobs[];
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      calculationJobs: 'CalculationJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calculationJobs: { 'type': 'array', 'itemType': ListCalculationJobsResponseBodyCalculationJobs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.calculationJobs)) {
      $dara.Model.validateArray(this.calculationJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalculationJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCalculationJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCalculationJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F0AB6527-093F-5C44-B3BD-42C8C210C619
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCrowdUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCrowdUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdsResponseBody extends $dara.Model {
  crowds?: ListCrowdsResponseBodyCrowds[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      crowds: 'Crowds',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowds: { 'type': 'array', 'itemType': ListCrowdsResponseBodyCrowds },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.crowds)) {
      $dara.Model.validateArray(this.crowds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCrowdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCrowdsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineConfigsRequest extends $dara.Model {
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @example
   * engine_config_v1
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Released
   */
  status?: string;
  /**
   * @example
   * latest
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineConfigsResponseBody extends $dara.Model {
  engineConfigs?: ListEngineConfigsResponseBodyEngineConfigs[];
  /**
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      engineConfigs: 'EngineConfigs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineConfigs: { 'type': 'array', 'itemType': ListEngineConfigsResponseBodyEngineConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.engineConfigs)) {
      $dara.Model.validateArray(this.engineConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEngineConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEngineConfigsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * 3
   */
  layerId?: string;
  regionId?: string;
  /**
   * @example
   * Online
   */
  status?: string;
  timeRangeEnd?: string;
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      layerId: 'LayerId',
      regionId: 'RegionId',
      status: 'Status',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      layerId: 'string',
      regionId: 'string',
      status: 'string',
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentGroupsResponseBody extends $dara.Model {
  experimentGroups?: ListExperimentGroupsResponseBodyExperimentGroups[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      experimentGroups: 'ExperimentGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentGroups: { 'type': 'array', 'itemType': ListExperimentGroupsResponseBodyExperimentGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.experimentGroups)) {
      $dara.Model.validateArray(this.experimentGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExperimentGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExperimentGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @example
   * experiment_test1
   */
  query?: string;
  /**
   * @example
   * Offline
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      experimentGroupId: 'ExperimentGroupId',
      instanceId: 'InstanceId',
      query: 'Query',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentGroupId: 'string',
      instanceId: 'string',
      query: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBody extends $dara.Model {
  experiments?: ListExperimentsResponseBodyExperiments[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 68075085-1A7D-55C2-B51D-7AD9B02A6DD6
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      experiments: 'Experiments',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experiments: { 'type': 'array', 'itemType': ListExperimentsResponseBodyExperiments },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.experiments)) {
      $dara.Model.validateArray(this.experiments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExperimentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExperimentsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobConfigsResponseBody extends $dara.Model {
  featureConsistencyCheckConfigs?: ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs[];
  /**
   * @example
   * FCF741D8-9C30-578E-807F-B935487DB34A
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckConfigs: 'FeatureConsistencyCheckConfigs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckConfigs: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureConsistencyCheckConfigs)) {
      $dara.Model.validateArray(this.featureConsistencyCheckConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureConsistencyCheckJobConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureConsistencyCheckJobConfigsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobFeatureReportsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  logRequestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1010
   */
  logUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logUserId: 'LogUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      logItemId: 'string',
      logRequestId: 'string',
      logUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobFeatureReportsResponseBody extends $dara.Model {
  /**
   * @example
   * https://********
   */
  dataPath?: string;
  /**
   * @example
   * oss://********
   */
  ossPath?: string;
  reportsOfFeatureDiff?: ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff[];
  /**
   * @example
   * BBD41FBF-E75C-551A-92FA-CAD654AA006F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPath: 'DataPath',
      ossPath: 'OssPath',
      reportsOfFeatureDiff: 'ReportsOfFeatureDiff',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPath: 'string',
      ossPath: 'string',
      reportsOfFeatureDiff: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportsOfFeatureDiff)) {
      $dara.Model.validateArray(this.reportsOfFeatureDiff);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobFeatureReportsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureConsistencyCheckJobFeatureReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureConsistencyCheckJobFeatureReportsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsRequest extends $dara.Model {
  excludeRequestIds?: string[];
  /**
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      excludeRequestIds: 'ExcludeRequestIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRequestIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeRequestIds)) {
      $dara.Model.validateArray(this.excludeRequestIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsShrinkRequest extends $dara.Model {
  excludeRequestIdsShrink?: string;
  /**
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      excludeRequestIdsShrink: 'ExcludeRequestIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRequestIdsShrink: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsResponseBody extends $dara.Model {
  /**
   * @example
   * http://*******
   */
  dataPath?: string;
  /**
   * @example
   * oss://********
   */
  ossPath?: string;
  reportsOfScoreDiff?: ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff[];
  /**
   * @example
   * F0AB6527-093F-5C44-B3BD-42C8C210C619
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPath: 'DataPath',
      ossPath: 'OssPath',
      reportsOfScoreDiff: 'ReportsOfScoreDiff',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPath: 'string',
      ossPath: 'string',
      reportsOfScoreDiff: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportsOfScoreDiff)) {
      $dara.Model.validateArray(this.reportsOfScoreDiff);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureConsistencyCheckJobScoreReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureConsistencyCheckJobScoreReportsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobsResponseBody extends $dara.Model {
  featureConsistencyCheckJobs?: ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs[];
  /**
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckJobs: 'FeatureConsistencyCheckJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckJobs: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureConsistencyCheckJobs)) {
      $dara.Model.validateArray(this.featureConsistencyCheckJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureConsistencyCheckJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureConsistencyCheckJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResourcesRequest extends $dara.Model {
  /**
   * @example
   * DataManagement
   */
  category?: string;
  /**
   * @example
   * storage
   */
  group?: string;
  /**
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      group: 'Group',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      group: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  resources?: ListInstanceResourcesResponseBodyResources[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListInstanceResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  /**
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * Type
   */
  sortBy?: string;
  /**
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @example
   * BDB621CB-A81E-5D39-8793-39A365CBCC74
   */
  requestId?: string;
  /**
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaboratoriesRequest extends $dara.Model {
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @example
   * Offline
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      sceneId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaboratoriesResponseBody extends $dara.Model {
  laboratories?: ListLaboratoriesResponseBodyLaboratories[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1C0898E5-9220-5443-B2D9-445FF0688215
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      laboratories: 'Laboratories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laboratories: { 'type': 'array', 'itemType': ListLaboratoriesResponseBodyLaboratories },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.laboratories)) {
      $dara.Model.validateArray(this.laboratories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaboratoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLaboratoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLaboratoriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  laboratoryId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      laboratoryId: 'LaboratoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      laboratoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponseBody extends $dara.Model {
  layers?: ListLayersResponseBodyLayers[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 518C64F6-DFF7-11ED-85B0-00163E14B3D1
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      layers: 'Layers',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layers: { 'type': 'array', 'itemType': ListLayersResponseBodyLayers },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLayersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLayersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParamsRequest extends $dara.Model {
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * home
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParamsResponseBody extends $dara.Model {
  params?: ListParamsResponseBodyParams[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A2D07551-38DA-531E-9B22-877D1D86A579
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': ListParamsResponseBodyParams },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParamsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListParamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListParamsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesRequest extends $dara.Model {
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceRuleId?: string;
  resourceRuleName?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceRuleId: 'ResourceRuleId',
      resourceRuleName: 'ResourceRuleName',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceRuleId: 'string',
      resourceRuleName: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponseBody extends $dara.Model {
  requestId?: string;
  resourceRules?: ListResourceRulesResponseBodyResourceRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRules: 'ResourceRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRules: { 'type': 'array', 'itemType': ListResourceRulesResponseBodyResourceRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceRules)) {
      $dara.Model.validateArray(this.resourceRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * scene1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B8987BF7-6028-5B17-80E0-251B7BD67BBA
   */
  requestId?: string;
  scenes?: ListScenesResponseBodyScenes[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scenes: 'Scenes',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scenes: { 'type': 'array', 'itemType': ListScenesResponseBodyScenes },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scenes)) {
      $dara.Model.validateArray(this.scenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScenesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubCrowdsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubCrowdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C5AEB79E-FAA4-5DCE-8CD7-1CAF549ECC3E
   */
  requestId?: string;
  subCrowds?: ListSubCrowdsResponseBodySubCrowds[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subCrowds: 'SubCrowds',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subCrowds: { 'type': 'array', 'itemType': ListSubCrowdsResponseBodySubCrowds },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subCrowds)) {
      $dara.Model.validateArray(this.subCrowds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubCrowdsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubCrowdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSubCrowdsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @example
   * test1
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * MaxCompute
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      module: 'Module',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      module: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasResponseBody extends $dara.Model {
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  tableMetas?: ListTableMetasResponseBodyTableMetas[];
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tableMetas: 'TableMetas',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tableMetas: { 'type': 'array', 'itemType': ListTableMetasResponseBodyTableMetas },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tableMetas)) {
      $dara.Model.validateArray(this.tableMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTableMetasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTableMetasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTargetTrafficHistoryRequest extends $dara.Model {
  endTime?: string;
  environment?: string;
  experimentGroupId?: string;
  experimentId?: string;
  instanceId?: string;
  itemId?: string;
  startTime?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      environment: 'Environment',
      experimentGroupId: 'ExperimentGroupId',
      experimentId: 'ExperimentId',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      startTime: 'StartTime',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      environment: 'string',
      experimentGroupId: 'string',
      experimentId: 'string',
      instanceId: 'string',
      itemId: 'string',
      startTime: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTargetTrafficHistoryResponseBody extends $dara.Model {
  requestId?: string;
  totalCount?: string;
  trafficControlTaskTrafficHistories?: ListTrafficControlTargetTrafficHistoryResponseBodyTrafficControlTaskTrafficHistories[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficControlTaskTrafficHistories: 'TrafficControlTaskTrafficHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      trafficControlTaskTrafficHistories: { 'type': 'array', 'itemType': ListTrafficControlTargetTrafficHistoryResponseBodyTrafficControlTaskTrafficHistories },
    };
  }

  validate() {
    if(Array.isArray(this.trafficControlTaskTrafficHistories)) {
      $dara.Model.validateArray(this.trafficControlTaskTrafficHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTargetTrafficHistoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrafficControlTargetTrafficHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrafficControlTargetTrafficHistoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTasksRequest extends $dara.Model {
  all?: boolean;
  controlTargetFilter?: string;
  environment?: string;
  instanceId?: string;
  name?: string;
  order?: string;
  pageNumber?: string;
  pageSize?: string;
  sceneId?: string;
  sortBy?: string;
  status?: string;
  trafficControlTaskId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      controlTargetFilter: 'ControlTargetFilter',
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      sortBy: 'SortBy',
      status: 'Status',
      trafficControlTaskId: 'TrafficControlTaskId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      controlTargetFilter: 'string',
      environment: 'string',
      instanceId: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sceneId: 'string',
      sortBy: 'string',
      status: 'string',
      trafficControlTaskId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTasksResponseBody extends $dara.Model {
  requestId?: string;
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

export class ListTrafficControlTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrafficControlTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrafficControlTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 872951C9-7755-5FA1-AACD-7F9375A6D27A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OfflineExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OfflineExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 518C64F6-DFF7-11ED-85B0-00163E14B3D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OfflineExperimentGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OfflineExperimentGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineLaboratoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineLaboratoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineLaboratoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OfflineLaboratoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OfflineLaboratoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CF1E160-3F36-5E73-A170-C75504F05BBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnlineExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OnlineExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 47F761ED-BE4E-51A6-B678-78E1490DF313
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnlineExperimentGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OnlineExperimentGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineLaboratoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineLaboratoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8C27790E-CCA5-56BB-BA17-646295DEC0A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineLaboratoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnlineLaboratoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OnlineLaboratoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushAllExperimentRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushAllExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushAllExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushAllExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushAllExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      metricInfo: 'MetricInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      metricInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metricInfo) {
      $dara.Model.validateMap(this.metricInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      metricInfoShrink: 'MetricInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      metricInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleResponseBody extends $dara.Model {
  description?: string;
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  name?: string;
  requestId?: string;
  resourceRuleId?: string;
  ruleComputingDefinition?: string;
  ruleItems?: PushResourceRuleResponseBodyRuleItems[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metricOperationType: 'MetricOperationType',
      metricPullInfo: 'MetricPullInfo',
      metricPullPeriod: 'MetricPullPeriod',
      name: 'Name',
      requestId: 'RequestId',
      resourceRuleId: 'ResourceRuleId',
      ruleComputingDefinition: 'RuleComputingDefinition',
      ruleItems: 'RuleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metricOperationType: 'string',
      metricPullInfo: 'string',
      metricPullPeriod: 'string',
      name: 'string',
      requestId: 'string',
      resourceRuleId: 'string',
      ruleComputingDefinition: 'string',
      ruleItems: { 'type': 'array', 'itemType': PushResourceRuleResponseBodyRuleItems },
    };
  }

  validate() {
    if(Array.isArray(this.ruleItems)) {
      $dara.Model.validateArray(this.ruleItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushResourceRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushResourceRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTargetItemReportDetailRequest extends $dara.Model {
  date?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  environment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTargetItemReportDetailResponseBody extends $dara.Model {
  requestId?: string;
  trafficControlTargetItemReportDetail?: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTargetItemReportDetail: 'TrafficControlTargetItemReportDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTargetItemReportDetail: QueryTrafficControlTargetItemReportDetailResponseBodyTrafficControlTargetItemReportDetail,
    };
  }

  validate() {
    if(this.trafficControlTargetItemReportDetail && typeof (this.trafficControlTargetItemReportDetail as any).validate === 'function') {
      (this.trafficControlTargetItemReportDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrafficControlTargetItemReportDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTrafficControlTargetItemReportDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTrafficControlTargetItemReportDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseTrafficControlTaskRequest extends $dara.Model {
  environment?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseTrafficControlTaskResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseTrafficControlTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseTrafficControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseTrafficControlTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  baseExperimentId?: string;
  /**
   * @example
   * {"gender":"man"}
   */
  dimensionFields?: string;
  /**
   * @example
   * 2021-07-01
   */
  endDate?: string;
  /**
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3,4,5
   */
  experimentIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Offline
   */
  reportType?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * 2021-07-01
   */
  startDate?: string;
  /**
   * @example
   * Hour
   */
  timeStatisticsMethod?: string;
  static names(): { [key: string]: string } {
    return {
      baseExperimentId: 'BaseExperimentId',
      dimensionFields: 'DimensionFields',
      endDate: 'EndDate',
      experimentGroupId: 'ExperimentGroupId',
      experimentIds: 'ExperimentIds',
      instanceId: 'InstanceId',
      reportType: 'ReportType',
      sceneId: 'SceneId',
      startDate: 'StartDate',
      timeStatisticsMethod: 'TimeStatisticsMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseExperimentId: 'string',
      dimensionFields: 'string',
      endDate: 'string',
      experimentGroupId: 'string',
      experimentIds: 'string',
      instanceId: 'string',
      reportType: 'string',
      sceneId: 'string',
      startDate: 'string',
      timeStatisticsMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportABMetricGroupResponseBody extends $dara.Model {
  experimentReport?: { [key: string]: ExperimentReportValue };
  groupDimension?: string[];
  /**
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentReport: 'ExperimentReport',
      groupDimension: 'GroupDimension',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentReport: { 'type': 'map', 'keyType': 'string', 'valueType': ExperimentReportValue },
      groupDimension: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.experimentReport) {
      $dara.Model.validateMap(this.experimentReport);
    }
    if(Array.isArray(this.groupDimension)) {
      $dara.Model.validateArray(this.groupDimension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportABMetricGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportABMetricGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportABMetricGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitTrafficControlTargetRequest extends $dara.Model {
  environment?: string;
  instanceId?: string;
  setPoints?: number[];
  setValues?: number[];
  timePoints?: number[];
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      setPoints: 'SetPoints',
      setValues: 'SetValues',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
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

export class SplitTrafficControlTargetResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitTrafficControlTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SplitTrafficControlTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SplitTrafficControlTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTargetRequest extends $dara.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTargetResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartTrafficControlTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartTrafficControlTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTaskRequest extends $dara.Model {
  environment?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTaskResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartTrafficControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartTrafficControlTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTargetRequest extends $dara.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTargetResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopTrafficControlTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopTrafficControlTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTaskRequest extends $dara.Model {
  regionId?: string;
  environment?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTaskResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopTrafficControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopTrafficControlTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncFeatureConsistencyCheckJobReplayLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{\\"Value\\":{\\"FloatFeature\\":0.1}}]
   */
  contextFeatures?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * week_day:1 | userid:3 | itemid:9001 | cate:cat1 | click_5_seq__cate:cat1
   */
  generatedFeatures?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  logRequestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1693900981465
   */
  logRequestTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1010
   */
  logUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rawFeatures?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * video-feed
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      contextFeatures: 'ContextFeatures',
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      generatedFeatures: 'GeneratedFeatures',
      instanceId: 'InstanceId',
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logRequestTime: 'LogRequestTime',
      logUserId: 'LogUserId',
      rawFeatures: 'RawFeatures',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextFeatures: 'string',
      featureConsistencyCheckJobConfigId: 'string',
      generatedFeatures: 'string',
      instanceId: 'string',
      logItemId: 'string',
      logRequestId: 'string',
      logRequestTime: 'number',
      logUserId: 'string',
      rawFeatures: 'string',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncFeatureConsistencyCheckJobReplayLogResponseBody extends $dara.Model {
  /**
   * @example
   * C7D0B48F-0105-52B9-B60A-FA7606E2234D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncFeatureConsistencyCheckJobReplayLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncFeatureConsistencyCheckJobReplayLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncFeatureConsistencyCheckJobReplayLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateFeatureConsistencyCheckJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateFeatureConsistencyCheckJobResponseBody extends $dara.Model {
  /**
   * @example
   * A6C01890-54CA-5C49-BC91-AD85A98E4A98
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateFeatureConsistencyCheckJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TerminateFeatureConsistencyCheckJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TerminateFeatureConsistencyCheckJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sum(click_cnt)
   */
  definition?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @example
   * 2
   */
  leftMetricId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pv
   */
  name?: string;
  /**
   * @example
   * Division
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @example
   * 3
   */
  rightMetricId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * 1
   */
  statisticsCycle?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  tableMetaId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      instanceId: 'InstanceId',
      leftMetricId: 'LeftMetricId',
      name: 'Name',
      operator: 'Operator',
      realtime: 'Realtime',
      resultResourceId: 'ResultResourceId',
      rightMetricId: 'RightMetricId',
      sceneId: 'SceneId',
      statisticsCycle: 'StatisticsCycle',
      tableMetaId: 'TableMetaId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      instanceId: 'string',
      leftMetricId: 'string',
      name: 'string',
      operator: 'string',
      realtime: 'boolean',
      resultResourceId: 'string',
      rightMetricId: 'string',
      sceneId: 'string',
      statisticsCycle: 'number',
      tableMetaId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricResponseBody extends $dara.Model {
  /**
   * @example
   * 6CF1E160-3F36-5E73-A170-C75504F05BBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateABMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateABMetricResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * visits
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricIds: 'ABMetricIds',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      realtime: 'Realtime',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricIds: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      realtime: 'boolean',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateABMetricGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateABMetricGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx人群
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrowdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8C27790E-CCA5-56BB-BA17-646295DEC0A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrowdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCrowdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCrowdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineConfigRequest extends $dara.Model {
  /**
   * @example
   * {
   * 	"ListenConf": {
   * 		"HttpAddr": "",
   * 		"HttpPort": 8000
   * 	}
   * }
   */
  configValue?: string;
  description?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @example
   * engine_config_v1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineConfigResponseBody extends $dara.Model {
  /**
   * @example
   * F8F613A9-DF1C-551A-88E1-397A3981A785
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEngineConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEngineConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentRequest extends $dara.Model {
  /**
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 100
   */
  flowPercent?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * experiment_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Baseline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      flowPercent: 'FlowPercent',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      flowPercent: 'number',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A760D972-1475-58C0-BBB3-92B5FB08904F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentGroupRequest extends $dara.Model {
  /**
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  crowdId?: string;
  crowdTargetType?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * user1,user2,user3
   */
  debugUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 3
   */
  distributionTimeDuration?: number;
  /**
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @example
   * gender=male
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * experiment_group1
   */
  name?: string;
  /**
   * @example
   * true
   */
  needAA?: boolean;
  randomFlow?: number;
  /**
   * @example
   * 1,2,3
   */
  reservcedBuckets?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdId: 'CrowdId',
      crowdTargetType: 'CrowdTargetType',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      distributionTimeDuration: 'DistributionTimeDuration',
      distributionType: 'DistributionType',
      filter: 'Filter',
      instanceId: 'InstanceId',
      layerId: 'LayerId',
      name: 'Name',
      needAA: 'NeedAA',
      randomFlow: 'RandomFlow',
      reservcedBuckets: 'ReservcedBuckets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdId: 'string',
      crowdTargetType: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      distributionTimeDuration: 'number',
      distributionType: 'string',
      filter: 'string',
      instanceId: 'string',
      layerId: 'string',
      name: 'string',
      needAA: 'boolean',
      randomFlow: 'number',
      reservcedBuckets: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExperimentGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateExperimentGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeatureConsistencyCheckJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  compareFeature?: boolean;
  datasetId?: string;
  datasetMountPath?: string;
  datasetName?: string;
  datasetType?: string;
  datasetUri?: string;
  defaultRoute?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service_123
   */
  easServiceName?: string;
  /**
   * @example
   * oss://********
   */
  easyRecPackagePath?: string;
  /**
   * @example
   * 1.3.60
   */
  easyRecVersion?: string;
  /**
   * @example
   * feature1,feature2
   */
  featureDisplayExclude?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reso-********
   */
  featureLandingResourceId?: string;
  /**
   * @example
   * feature1,feature2,feature3
   */
  featurePriority?: string;
  featureStoreItemId?: string;
  featureStoreModelId?: string;
  featureStoreProjectId?: string;
  featureStoreProjectName?: string;
  featureStoreSeqFeatureView?: string;
  featureStoreUserId?: string;
  /**
   * @example
   * 1.0.0
   */
  fgJarVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file.json
   */
  fgJsonFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  generateZip?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  isUseFeatureStore?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  itemIdField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_table
   */
  itemTable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ds
   */
  itemTablePartitionField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yyyymmdd
   */
  itemTablePartitionFieldFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * feature_consistency_check1
   */
  name?: string;
  /**
   * @example
   * reso-********
   */
  ossResourceId?: string;
  predictWorkerCount?: number;
  predictWorkerCpu?: number;
  predictWorkerMemory?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.89
   */
  sampleRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  securityGroupId?: string;
  /**
   * @example
   * 4
   */
  serviceId?: string;
  switchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_id
   */
  userIdField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_table
   */
  userTable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ds
   */
  userTablePartitionField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yyyymmdd
   */
  userTablePartitionFieldFormat?: string;
  vpcId?: string;
  /**
   * @example
   * work_flow_1
   */
  workflowName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      compareFeature: 'CompareFeature',
      datasetId: 'DatasetId',
      datasetMountPath: 'DatasetMountPath',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      datasetUri: 'DatasetUri',
      defaultRoute: 'DefaultRoute',
      easServiceName: 'EasServiceName',
      easyRecPackagePath: 'EasyRecPackagePath',
      easyRecVersion: 'EasyRecVersion',
      featureDisplayExclude: 'FeatureDisplayExclude',
      featureLandingResourceId: 'FeatureLandingResourceId',
      featurePriority: 'FeaturePriority',
      featureStoreItemId: 'FeatureStoreItemId',
      featureStoreModelId: 'FeatureStoreModelId',
      featureStoreProjectId: 'FeatureStoreProjectId',
      featureStoreProjectName: 'FeatureStoreProjectName',
      featureStoreSeqFeatureView: 'FeatureStoreSeqFeatureView',
      featureStoreUserId: 'FeatureStoreUserId',
      fgJarVersion: 'FgJarVersion',
      fgJsonFileName: 'FgJsonFileName',
      generateZip: 'GenerateZip',
      instanceId: 'InstanceId',
      isUseFeatureStore: 'IsUseFeatureStore',
      itemIdField: 'ItemIdField',
      itemTable: 'ItemTable',
      itemTablePartitionField: 'ItemTablePartitionField',
      itemTablePartitionFieldFormat: 'ItemTablePartitionFieldFormat',
      name: 'Name',
      ossResourceId: 'OssResourceId',
      predictWorkerCount: 'PredictWorkerCount',
      predictWorkerCpu: 'PredictWorkerCpu',
      predictWorkerMemory: 'PredictWorkerMemory',
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      switchId: 'SwitchId',
      userIdField: 'UserIdField',
      userTable: 'UserTable',
      userTablePartitionField: 'UserTablePartitionField',
      userTablePartitionFieldFormat: 'UserTablePartitionFieldFormat',
      vpcId: 'VpcId',
      workflowName: 'WorkflowName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareFeature: 'boolean',
      datasetId: 'string',
      datasetMountPath: 'string',
      datasetName: 'string',
      datasetType: 'string',
      datasetUri: 'string',
      defaultRoute: 'string',
      easServiceName: 'string',
      easyRecPackagePath: 'string',
      easyRecVersion: 'string',
      featureDisplayExclude: 'string',
      featureLandingResourceId: 'string',
      featurePriority: 'string',
      featureStoreItemId: 'string',
      featureStoreModelId: 'string',
      featureStoreProjectId: 'string',
      featureStoreProjectName: 'string',
      featureStoreSeqFeatureView: 'string',
      featureStoreUserId: 'string',
      fgJarVersion: 'string',
      fgJsonFileName: 'string',
      generateZip: 'boolean',
      instanceId: 'string',
      isUseFeatureStore: 'boolean',
      itemIdField: 'string',
      itemTable: 'string',
      itemTablePartitionField: 'string',
      itemTablePartitionFieldFormat: 'string',
      name: 'string',
      ossResourceId: 'string',
      predictWorkerCount: 'number',
      predictWorkerCpu: 'number',
      predictWorkerMemory: 'number',
      sampleRate: 'number',
      sceneId: 'string',
      securityGroupId: 'string',
      serviceId: 'string',
      switchId: 'string',
      userIdField: 'string',
      userTable: 'string',
      userTablePartitionField: 'string',
      userTablePartitionFieldFormat: 'string',
      vpcId: 'string',
      workflowName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeatureConsistencyCheckJobConfigResponseBody extends $dara.Model {
  /**
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeatureConsistencyCheckJobConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFeatureConsistencyCheckJobConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFeatureConsistencyCheckJobConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResourceRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 3AAA45F6-0798-5461-9360-81D133823CE7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLaboratoryRequest extends $dara.Model {
  /**
   * @example
   * 24
   */
  bucketCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Filter
   */
  bucketType?: string;
  /**
   * @example
   * 1,2,3,10-20
   */
  buckets?: string;
  /**
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * filter=xxx
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * laboratory1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucketCount: 'BucketCount',
      bucketType: 'BucketType',
      buckets: 'Buckets',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      environment: 'Environment',
      filter: 'Filter',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCount: 'number',
      bucketType: 'string',
      buckets: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      environment: 'string',
      filter: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLaboratoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLaboratoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLaboratoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLaboratoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * layer1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0EA9215E-EC21-53AB-B8D9-D3DEA90D040A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLayerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParamRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * house
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BBD41FBF-E75C-551A-92FA-CAD654AA006F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateParamResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleComputingDefinition?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      metricOperationType: 'MetricOperationType',
      metricPullInfo: 'MetricPullInfo',
      metricPullPeriod: 'MetricPullPeriod',
      name: 'Name',
      ruleComputingDefinition: 'RuleComputingDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      metricOperationType: 'string',
      metricPullInfo: 'string',
      metricPullPeriod: 'string',
      name: 'string',
      ruleComputingDefinition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleItemRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  maxValue?: number;
  minValue?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      maxValue: 'number',
      minValue: 'number',
      name: 'string',
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

export class UpdateResourceRuleItemResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceRuleItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceRuleItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRequest extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  flows?: UpdateSceneRequestFlows[];
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * scene1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flows: 'Flows',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flows: { 'type': 'array', 'itemType': UpdateSceneRequestFlows },
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FC17887E-3C82-5096-8AA6-F4C2E7417245
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSceneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaRequest extends $dara.Model {
  /**
   * @example
   * this is a test table
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: UpdateTableMetaRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table_mysql
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fields: 'Fields',
      instanceId: 'InstanceId',
      module: 'Module',
      name: 'Name',
      resourceId: 'ResourceId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fields: { 'type': 'array', 'itemType': UpdateTableMetaRequestFields },
      instanceId: 'string',
      module: 'string',
      name: 'string',
      resourceId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaResponseBody extends $dara.Model {
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTableMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTableMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTargetRequest extends $dara.Model {
  endTime?: string;
  event?: string;
  itemConditionArray?: string;
  itemConditionExpress?: string;
  itemConditionType?: string;
  name?: string;
  newProductRegulation?: boolean;
  recallName?: string;
  startTime?: string;
  statisPeriod?: string;
  status?: string;
  toleranceValue?: number;
  value?: number;
  newParam3?: string;
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
      newParam3: 'new-param-3',
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
      newParam3: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTargetResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTrafficControlTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTrafficControlTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskRequest extends $dara.Model {
  behaviorTableMetaId?: string;
  controlGranularity?: string;
  controlLogic?: string;
  controlType?: string;
  description?: string;
  endTime?: string;
  executionTime?: string;
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

export class UpdateTrafficControlTaskResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTrafficControlTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTrafficControlTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskTrafficRequest extends $dara.Model {
  environment?: string;
  instanceId?: string;
  traffics?: UpdateTrafficControlTaskTrafficRequestTraffics[];
  newParam3?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      traffics: 'Traffics',
      newParam3: 'new-param-3',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      traffics: { 'type': 'array', 'itemType': UpdateTrafficControlTaskTrafficRequestTraffics },
      newParam3: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.traffics)) {
      $dara.Model.validateArray(this.traffics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskTrafficResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskTrafficResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTrafficControlTaskTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTrafficControlTaskTrafficResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRecommendationDataRequest extends $dara.Model {
  regionId?: string;
  content?: UploadRecommendationDataRequestContent[];
  dataType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      content: 'Content',
      dataType: 'DataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      content: { 'type': 'array', 'itemType': UploadRecommendationDataRequestContent },
      dataType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRecommendationDataResponseBody extends $dara.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRecommendationDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadRecommendationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadRecommendationDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pairecservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 应用/发布指定的推荐引擎配置
   * 
   * @param request - ApplyEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyEngineConfigResponse
   */
  async applyEngineConfigWithOptions(EngineConfigId: string, request: ApplyEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ApplyEngineConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}/action/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApplyEngineConfigResponse>(await this.callApi(params, req, runtime), new ApplyEngineConfigResponse({}));
    } else {
      return $dara.cast<ApplyEngineConfigResponse>(await this.execute(params, req, runtime), new ApplyEngineConfigResponse({}));
    }

  }

  /**
   * 应用/发布指定的推荐引擎配置
   * 
   * @param request - ApplyEngineConfigRequest
   * @returns ApplyEngineConfigResponse
   */
  async applyEngineConfig(EngineConfigId: string, request: ApplyEngineConfigRequest): Promise<ApplyEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * 特征一致性检查数据回流。
   * 
   * @param request - BackflowFeatureConsistencyCheckJobDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BackflowFeatureConsistencyCheckJobDataResponse
   */
  async backflowFeatureConsistencyCheckJobDataWithOptions(request: BackflowFeatureConsistencyCheckJobDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BackflowFeatureConsistencyCheckJobDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.featureConsistencyCheckJobConfigId)) {
      body["FeatureConsistencyCheckJobConfigId"] = request.featureConsistencyCheckJobConfigId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemFeatures)) {
      body["ItemFeatures"] = request.itemFeatures;
    }

    if (!$dara.isNull(request.logItemId)) {
      body["LogItemId"] = request.logItemId;
    }

    if (!$dara.isNull(request.logRequestId)) {
      body["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.logRequestTime)) {
      body["LogRequestTime"] = request.logRequestTime;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.scores)) {
      body["Scores"] = request.scores;
    }

    if (!$dara.isNull(request.userFeatures)) {
      body["UserFeatures"] = request.userFeatures;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BackflowFeatureConsistencyCheckJobData",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/action/backflowdata`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BackflowFeatureConsistencyCheckJobDataResponse>(await this.callApi(params, req, runtime), new BackflowFeatureConsistencyCheckJobDataResponse({}));
    } else {
      return $dara.cast<BackflowFeatureConsistencyCheckJobDataResponse>(await this.execute(params, req, runtime), new BackflowFeatureConsistencyCheckJobDataResponse({}));
    }

  }

  /**
   * 特征一致性检查数据回流。
   * 
   * @param request - BackflowFeatureConsistencyCheckJobDataRequest
   * @returns BackflowFeatureConsistencyCheckJobDataResponse
   */
  async backflowFeatureConsistencyCheckJobData(request: BackflowFeatureConsistencyCheckJobDataRequest): Promise<BackflowFeatureConsistencyCheckJobDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.backflowFeatureConsistencyCheckJobDataWithOptions(request, headers, runtime);
  }

  /**
   * 检测实例下配置的资源的连接状态。
   * 
   * @param request - CheckInstanceResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceResourcesResponse
   */
  async checkInstanceResourcesWithOptions(InstanceId: string, request: CheckInstanceResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CheckInstanceResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInstanceResources",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/action/checkresources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckInstanceResourcesResponse>(await this.callApi(params, req, runtime), new CheckInstanceResourcesResponse({}));
    } else {
      return $dara.cast<CheckInstanceResourcesResponse>(await this.execute(params, req, runtime), new CheckInstanceResourcesResponse({}));
    }

  }

  /**
   * 检测实例下配置的资源的连接状态。
   * 
   * @param request - CheckInstanceResourcesRequest
   * @returns CheckInstanceResourcesResponse
   */
  async checkInstanceResources(InstanceId: string, request: CheckInstanceResourcesRequest): Promise<CheckInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceResourcesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 校验流量调控任务中的表达式
   * 
   * @param request - CheckTrafficControlTaskExpressionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckTrafficControlTaskExpressionResponse
   */
  async checkTrafficControlTaskExpressionWithOptions(request: CheckTrafficControlTaskExpressionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CheckTrafficControlTaskExpressionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      query["TableMetaId"] = request.tableMetaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckTrafficControlTaskExpression",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/action/checkexpression`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckTrafficControlTaskExpressionResponse>(await this.callApi(params, req, runtime), new CheckTrafficControlTaskExpressionResponse({}));
    } else {
      return $dara.cast<CheckTrafficControlTaskExpressionResponse>(await this.execute(params, req, runtime), new CheckTrafficControlTaskExpressionResponse({}));
    }

  }

  /**
   * 校验流量调控任务中的表达式
   * 
   * @param request - CheckTrafficControlTaskExpressionRequest
   * @returns CheckTrafficControlTaskExpressionResponse
   */
  async checkTrafficControlTaskExpression(request: CheckTrafficControlTaskExpressionRequest): Promise<CheckTrafficControlTaskExpressionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkTrafficControlTaskExpressionWithOptions(request, headers, runtime);
  }

  /**
   * 克隆指定的推荐引擎配置
   * 
   * @param request - CloneEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneEngineConfigResponse
   */
  async cloneEngineConfigWithOptions(EngineConfigId: string, request: CloneEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneEngineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configValue)) {
      body["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloneEngineConfigResponse>(await this.callApi(params, req, runtime), new CloneEngineConfigResponse({}));
    } else {
      return $dara.cast<CloneEngineConfigResponse>(await this.execute(params, req, runtime), new CloneEngineConfigResponse({}));
    }

  }

  /**
   * 克隆指定的推荐引擎配置
   * 
   * @param request - CloneEngineConfigRequest
   * @returns CloneEngineConfigResponse
   */
  async cloneEngineConfig(EngineConfigId: string, request: CloneEngineConfigRequest): Promise<CloneEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * 克隆实验。
   * 
   * @param request - CloneExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneExperimentResponse
   */
  async cloneExperimentWithOptions(ExperimentId: string, request: CloneExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloneExperimentResponse>(await this.callApi(params, req, runtime), new CloneExperimentResponse({}));
    } else {
      return $dara.cast<CloneExperimentResponse>(await this.execute(params, req, runtime), new CloneExperimentResponse({}));
    }

  }

  /**
   * 克隆实验。
   * 
   * @param request - CloneExperimentRequest
   * @returns CloneExperimentResponse
   */
  async cloneExperiment(ExperimentId: string, request: CloneExperimentRequest): Promise<CloneExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 克隆实验组，并克隆实验组下的所有实验至新的实验组中。
   * 
   * @param request - CloneExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneExperimentGroupResponse
   */
  async cloneExperimentGroupWithOptions(ExperimentGroupId: string, request: CloneExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloneExperimentGroupResponse>(await this.callApi(params, req, runtime), new CloneExperimentGroupResponse({}));
    } else {
      return $dara.cast<CloneExperimentGroupResponse>(await this.execute(params, req, runtime), new CloneExperimentGroupResponse({}));
    }

  }

  /**
   * 克隆实验组，并克隆实验组下的所有实验至新的实验组中。
   * 
   * @param request - CloneExperimentGroupRequest
   * @returns CloneExperimentGroupResponse
   */
  async cloneExperimentGroup(ExperimentGroupId: string, request: CloneExperimentGroupRequest): Promise<CloneExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * 克隆特征一致性检查配置。
   * 
   * @param request - CloneFeatureConsistencyCheckJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneFeatureConsistencyCheckJobConfigResponse
   */
  async cloneFeatureConsistencyCheckJobConfigWithOptions(SourceFeatureConsistencyCheckJobConfigId: string, request: CloneFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneFeatureConsistencyCheckJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs/${$dara.URL.percentEncode(SourceFeatureConsistencyCheckJobConfigId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloneFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new CloneFeatureConsistencyCheckJobConfigResponse({}));
    } else {
      return $dara.cast<CloneFeatureConsistencyCheckJobConfigResponse>(await this.execute(params, req, runtime), new CloneFeatureConsistencyCheckJobConfigResponse({}));
    }

  }

  /**
   * 克隆特征一致性检查配置。
   * 
   * @param request - CloneFeatureConsistencyCheckJobConfigRequest
   * @returns CloneFeatureConsistencyCheckJobConfigResponse
   */
  async cloneFeatureConsistencyCheckJobConfig(SourceFeatureConsistencyCheckJobConfigId: string, request: CloneFeatureConsistencyCheckJobConfigRequest): Promise<CloneFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneFeatureConsistencyCheckJobConfigWithOptions(SourceFeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

  /**
   * 克隆实验室。
   * 
   * @param request - CloneLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneLaboratoryResponse
   */
  async cloneLaboratoryWithOptions(LaboratoryId: string, request: CloneLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloneExperimentGroup)) {
      body["CloneExperimentGroup"] = request.cloneExperimentGroup;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloneLaboratoryResponse>(await this.callApi(params, req, runtime), new CloneLaboratoryResponse({}));
    } else {
      return $dara.cast<CloneLaboratoryResponse>(await this.execute(params, req, runtime), new CloneLaboratoryResponse({}));
    }

  }

  /**
   * 克隆实验室。
   * 
   * @param request - CloneLaboratoryRequest
   * @returns CloneLaboratoryResponse
   */
  async cloneLaboratory(LaboratoryId: string, request: CloneLaboratoryRequest): Promise<CloneLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * 克隆流量调控任务
   * 
   * @param request - CloneTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneTrafficControlTaskResponse
   */
  async cloneTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: CloneTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloneTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new CloneTrafficControlTaskResponse({}));
    } else {
      return $dara.cast<CloneTrafficControlTaskResponse>(await this.execute(params, req, runtime), new CloneTrafficControlTaskResponse({}));
    }

  }

  /**
   * 克隆流量调控任务
   * 
   * @param request - CloneTrafficControlTaskRequest
   * @returns CloneTrafficControlTaskResponse
   */
  async cloneTrafficControlTask(TrafficControlTaskId: string, request: CloneTrafficControlTaskRequest): Promise<CloneTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 创建AB test实验指标
   * 
   * @param request - CreateABMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABMetricResponse
   */
  async createABMetricWithOptions(request: CreateABMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateABMetricResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.leftMetricId)) {
      body["LeftMetricId"] = request.leftMetricId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.resultResourceId)) {
      body["ResultResourceId"] = request.resultResourceId;
    }

    if (!$dara.isNull(request.rightMetricId)) {
      body["RightMetricId"] = request.rightMetricId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.statisticsCycle)) {
      body["StatisticsCycle"] = request.statisticsCycle;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      body["TableMetaId"] = request.tableMetaId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateABMetricResponse>(await this.callApi(params, req, runtime), new CreateABMetricResponse({}));
    } else {
      return $dara.cast<CreateABMetricResponse>(await this.execute(params, req, runtime), new CreateABMetricResponse({}));
    }

  }

  /**
   * 创建AB test实验指标
   * 
   * @param request - CreateABMetricRequest
   * @returns CreateABMetricResponse
   */
  async createABMetric(request: CreateABMetricRequest): Promise<CreateABMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABMetricWithOptions(request, headers, runtime);
  }

  /**
   * 创建指标组
   * 
   * @param request - CreateABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABMetricGroupResponse
   */
  async createABMetricGroupWithOptions(request: CreateABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateABMetricGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ABMetricIds)) {
      body["ABMetricIds"] = request.ABMetricIds;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateABMetricGroupResponse>(await this.callApi(params, req, runtime), new CreateABMetricGroupResponse({}));
    } else {
      return $dara.cast<CreateABMetricGroupResponse>(await this.execute(params, req, runtime), new CreateABMetricGroupResponse({}));
    }

  }

  /**
   * 创建指标组
   * 
   * @param request - CreateABMetricGroupRequest
   * @returns CreateABMetricGroupResponse
   */
  async createABMetricGroup(request: CreateABMetricGroupRequest): Promise<CreateABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABMetricGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建AB指标的计算任务。
   * 
   * @param request - CreateCalculationJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCalculationJobsResponse
   */
  async createCalculationJobsWithOptions(request: CreateCalculationJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateCalculationJobsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ABMetricIds)) {
      body["ABMetricIds"] = request.ABMetricIds;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCalculationJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/batch/calculationjobs/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCalculationJobsResponse>(await this.callApi(params, req, runtime), new CreateCalculationJobsResponse({}));
    } else {
      return $dara.cast<CreateCalculationJobsResponse>(await this.execute(params, req, runtime), new CreateCalculationJobsResponse({}));
    }

  }

  /**
   * 创建AB指标的计算任务。
   * 
   * @param request - CreateCalculationJobsRequest
   * @returns CreateCalculationJobsResponse
   */
  async createCalculationJobs(request: CreateCalculationJobsRequest): Promise<CreateCalculationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCalculationJobsWithOptions(request, headers, runtime);
  }

  /**
   * 创建人群。
   * 
   * @param request - CreateCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCrowdResponse
   */
  async createCrowdWithOptions(request: CreateCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateCrowdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCrowdResponse>(await this.callApi(params, req, runtime), new CreateCrowdResponse({}));
    } else {
      return $dara.cast<CreateCrowdResponse>(await this.execute(params, req, runtime), new CreateCrowdResponse({}));
    }

  }

  /**
   * 创建人群。
   * 
   * @param request - CreateCrowdRequest
   * @returns CreateCrowdResponse
   */
  async createCrowd(request: CreateCrowdRequest): Promise<CreateCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCrowdWithOptions(request, headers, runtime);
  }

  /**
   * 创建引擎配置
   * 
   * @param request - CreateEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEngineConfigResponse
   */
  async createEngineConfigWithOptions(request: CreateEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateEngineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configValue)) {
      body["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateEngineConfigResponse>(await this.callApi(params, req, runtime), new CreateEngineConfigResponse({}));
    } else {
      return $dara.cast<CreateEngineConfigResponse>(await this.execute(params, req, runtime), new CreateEngineConfigResponse({}));
    }

  }

  /**
   * 创建引擎配置
   * 
   * @param request - CreateEngineConfigRequest
   * @returns CreateEngineConfigResponse
   */
  async createEngineConfig(request: CreateEngineConfigRequest): Promise<CreateEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEngineConfigWithOptions(request, headers, runtime);
  }

  /**
   * 创建实验。
   * 
   * @param request - CreateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentResponse
   */
  async createExperimentWithOptions(request: CreateExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.experimentGroupId)) {
      body["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!$dara.isNull(request.flowPercent)) {
      body["FlowPercent"] = request.flowPercent;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateExperimentResponse>(await this.callApi(params, req, runtime), new CreateExperimentResponse({}));
    } else {
      return $dara.cast<CreateExperimentResponse>(await this.execute(params, req, runtime), new CreateExperimentResponse({}));
    }

  }

  /**
   * 创建实验。
   * 
   * @param request - CreateExperimentRequest
   * @returns CreateExperimentResponse
   */
  async createExperiment(request: CreateExperimentRequest): Promise<CreateExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentWithOptions(request, headers, runtime);
  }

  /**
   * 创建实验组。
   * 
   * @param request - CreateExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentGroupResponse
   */
  async createExperimentGroupWithOptions(request: CreateExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.crowdId)) {
      body["CrowdId"] = request.crowdId;
    }

    if (!$dara.isNull(request.crowdTargetType)) {
      body["CrowdTargetType"] = request.crowdTargetType;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.distributionTimeDuration)) {
      body["DistributionTimeDuration"] = request.distributionTimeDuration;
    }

    if (!$dara.isNull(request.distributionType)) {
      body["DistributionType"] = request.distributionType;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.needAA)) {
      body["NeedAA"] = request.needAA;
    }

    if (!$dara.isNull(request.randomFlow)) {
      body["RandomFlow"] = request.randomFlow;
    }

    if (!$dara.isNull(request.reservedBuckets)) {
      body["ReservedBuckets"] = request.reservedBuckets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateExperimentGroupResponse>(await this.callApi(params, req, runtime), new CreateExperimentGroupResponse({}));
    } else {
      return $dara.cast<CreateExperimentGroupResponse>(await this.execute(params, req, runtime), new CreateExperimentGroupResponse({}));
    }

  }

  /**
   * 创建实验组。
   * 
   * @param request - CreateExperimentGroupRequest
   * @returns CreateExperimentGroupResponse
   */
  async createExperimentGroup(request: CreateExperimentGroupRequest): Promise<CreateExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建特征一致性检查任务。
   * 
   * @param request - CreateFeatureConsistencyCheckJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFeatureConsistencyCheckJobResponse
   */
  async createFeatureConsistencyCheckJobWithOptions(request: CreateFeatureConsistencyCheckJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateFeatureConsistencyCheckJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.featureConsistencyCheckJobConfigId)) {
      body["FeatureConsistencyCheckJobConfigId"] = request.featureConsistencyCheckJobConfigId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.samplingDuration)) {
      body["SamplingDuration"] = request.samplingDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFeatureConsistencyCheckJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFeatureConsistencyCheckJobResponse>(await this.callApi(params, req, runtime), new CreateFeatureConsistencyCheckJobResponse({}));
    } else {
      return $dara.cast<CreateFeatureConsistencyCheckJobResponse>(await this.execute(params, req, runtime), new CreateFeatureConsistencyCheckJobResponse({}));
    }

  }

  /**
   * 创建特征一致性检查任务。
   * 
   * @param request - CreateFeatureConsistencyCheckJobRequest
   * @returns CreateFeatureConsistencyCheckJobResponse
   */
  async createFeatureConsistencyCheckJob(request: CreateFeatureConsistencyCheckJobRequest): Promise<CreateFeatureConsistencyCheckJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureConsistencyCheckJobWithOptions(request, headers, runtime);
  }

  /**
   * 创建特征一致性检查配置。
   * 
   * @param request - CreateFeatureConsistencyCheckJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFeatureConsistencyCheckJobConfigResponse
   */
  async createFeatureConsistencyCheckJobConfigWithOptions(request: CreateFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateFeatureConsistencyCheckJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.compareFeature)) {
      body["CompareFeature"] = request.compareFeature;
    }

    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetMountPath)) {
      body["DatasetMountPath"] = request.datasetMountPath;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.datasetType)) {
      body["DatasetType"] = request.datasetType;
    }

    if (!$dara.isNull(request.datasetUri)) {
      body["DatasetUri"] = request.datasetUri;
    }

    if (!$dara.isNull(request.defaultRoute)) {
      body["DefaultRoute"] = request.defaultRoute;
    }

    if (!$dara.isNull(request.easServiceName)) {
      body["EasServiceName"] = request.easServiceName;
    }

    if (!$dara.isNull(request.easyRecPackagePath)) {
      body["EasyRecPackagePath"] = request.easyRecPackagePath;
    }

    if (!$dara.isNull(request.easyRecVersion)) {
      body["EasyRecVersion"] = request.easyRecVersion;
    }

    if (!$dara.isNull(request.featureDisplayExclude)) {
      body["FeatureDisplayExclude"] = request.featureDisplayExclude;
    }

    if (!$dara.isNull(request.featureLandingResourceId)) {
      body["FeatureLandingResourceId"] = request.featureLandingResourceId;
    }

    if (!$dara.isNull(request.featurePriority)) {
      body["FeaturePriority"] = request.featurePriority;
    }

    if (!$dara.isNull(request.featureStoreItemId)) {
      body["FeatureStoreItemId"] = request.featureStoreItemId;
    }

    if (!$dara.isNull(request.featureStoreModelId)) {
      body["FeatureStoreModelId"] = request.featureStoreModelId;
    }

    if (!$dara.isNull(request.featureStoreProjectId)) {
      body["FeatureStoreProjectId"] = request.featureStoreProjectId;
    }

    if (!$dara.isNull(request.featureStoreProjectName)) {
      body["FeatureStoreProjectName"] = request.featureStoreProjectName;
    }

    if (!$dara.isNull(request.featureStoreSeqFeatureView)) {
      body["FeatureStoreSeqFeatureView"] = request.featureStoreSeqFeatureView;
    }

    if (!$dara.isNull(request.featureStoreUserId)) {
      body["FeatureStoreUserId"] = request.featureStoreUserId;
    }

    if (!$dara.isNull(request.fgJarVersion)) {
      body["FgJarVersion"] = request.fgJarVersion;
    }

    if (!$dara.isNull(request.fgJsonFileName)) {
      body["FgJsonFileName"] = request.fgJsonFileName;
    }

    if (!$dara.isNull(request.generateZip)) {
      body["GenerateZip"] = request.generateZip;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemIdField)) {
      body["ItemIdField"] = request.itemIdField;
    }

    if (!$dara.isNull(request.itemTable)) {
      body["ItemTable"] = request.itemTable;
    }

    if (!$dara.isNull(request.itemTablePartitionField)) {
      body["ItemTablePartitionField"] = request.itemTablePartitionField;
    }

    if (!$dara.isNull(request.itemTablePartitionFieldFormat)) {
      body["ItemTablePartitionFieldFormat"] = request.itemTablePartitionFieldFormat;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossResourceId)) {
      body["OssResourceId"] = request.ossResourceId;
    }

    if (!$dara.isNull(request.predictWorkerCount)) {
      body["PredictWorkerCount"] = request.predictWorkerCount;
    }

    if (!$dara.isNull(request.predictWorkerCpu)) {
      body["PredictWorkerCpu"] = request.predictWorkerCpu;
    }

    if (!$dara.isNull(request.predictWorkerMemory)) {
      body["PredictWorkerMemory"] = request.predictWorkerMemory;
    }

    if (!$dara.isNull(request.sampleRate)) {
      body["SampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.switchId)) {
      body["SwitchId"] = request.switchId;
    }

    if (!$dara.isNull(request.useFeatureStore)) {
      body["UseFeatureStore"] = request.useFeatureStore;
    }

    if (!$dara.isNull(request.userIdField)) {
      body["UserIdField"] = request.userIdField;
    }

    if (!$dara.isNull(request.userTable)) {
      body["UserTable"] = request.userTable;
    }

    if (!$dara.isNull(request.userTablePartitionField)) {
      body["UserTablePartitionField"] = request.userTablePartitionField;
    }

    if (!$dara.isNull(request.userTablePartitionFieldFormat)) {
      body["UserTablePartitionFieldFormat"] = request.userTablePartitionFieldFormat;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.workflowName)) {
      body["WorkflowName"] = request.workflowName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new CreateFeatureConsistencyCheckJobConfigResponse({}));
    } else {
      return $dara.cast<CreateFeatureConsistencyCheckJobConfigResponse>(await this.execute(params, req, runtime), new CreateFeatureConsistencyCheckJobConfigResponse({}));
    }

  }

  /**
   * 创建特征一致性检查配置。
   * 
   * @param request - CreateFeatureConsistencyCheckJobConfigRequest
   * @returns CreateFeatureConsistencyCheckJobConfigResponse
   */
  async createFeatureConsistencyCheckJobConfig(request: CreateFeatureConsistencyCheckJobConfigRequest): Promise<CreateFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureConsistencyCheckJobConfigWithOptions(request, headers, runtime);
  }

  /**
   * 为指定实例配置创建新的配置资源
   * 
   * @param request - CreateInstanceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResourceResponse
   */
  async createInstanceResourceWithOptions(InstanceId: string, request: CreateInstanceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.group)) {
      body["Group"] = request.group;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceResourceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResourceResponse({}));
    } else {
      return $dara.cast<CreateInstanceResourceResponse>(await this.execute(params, req, runtime), new CreateInstanceResourceResponse({}));
    }

  }

  /**
   * 为指定实例配置创建新的配置资源
   * 
   * @param request - CreateInstanceResourceRequest
   * @returns CreateInstanceResourceResponse
   */
  async createInstanceResource(InstanceId: string, request: CreateInstanceResourceRequest): Promise<CreateInstanceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceResourceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建实验室
   * 
   * @param request - CreateLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLaboratoryResponse
   */
  async createLaboratoryWithOptions(request: CreateLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bucketCount)) {
      body["BucketCount"] = request.bucketCount;
    }

    if (!$dara.isNull(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!$dara.isNull(request.buckets)) {
      body["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLaboratoryResponse>(await this.callApi(params, req, runtime), new CreateLaboratoryResponse({}));
    } else {
      return $dara.cast<CreateLaboratoryResponse>(await this.execute(params, req, runtime), new CreateLaboratoryResponse({}));
    }

  }

  /**
   * 创建实验室
   * 
   * @param request - CreateLaboratoryRequest
   * @returns CreateLaboratoryResponse
   */
  async createLaboratory(request: CreateLaboratoryRequest): Promise<CreateLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLaboratoryWithOptions(request, headers, runtime);
  }

  /**
   * 创建层。
   * 
   * @param request - CreateLayerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLayerResponse
   */
  async createLayerWithOptions(request: CreateLayerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateLayerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.laboratoryId)) {
      body["LaboratoryId"] = request.laboratoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLayerResponse>(await this.callApi(params, req, runtime), new CreateLayerResponse({}));
    } else {
      return $dara.cast<CreateLayerResponse>(await this.execute(params, req, runtime), new CreateLayerResponse({}));
    }

  }

  /**
   * 创建层。
   * 
   * @param request - CreateLayerRequest
   * @returns CreateLayerResponse
   */
  async createLayer(request: CreateLayerRequest): Promise<CreateLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLayerWithOptions(request, headers, runtime);
  }

  /**
   * 创建参数。
   * 
   * @param request - CreateParamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParamResponse
   */
  async createParamWithOptions(request: CreateParamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateParamResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateParam",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateParamResponse>(await this.callApi(params, req, runtime), new CreateParamResponse({}));
    } else {
      return $dara.cast<CreateParamResponse>(await this.execute(params, req, runtime), new CreateParamResponse({}));
    }

  }

  /**
   * 创建参数。
   * 
   * @param request - CreateParamRequest
   * @returns CreateParamResponse
   */
  async createParam(request: CreateParamRequest): Promise<CreateParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createParamWithOptions(request, headers, runtime);
  }

  /**
   * 创建资源规则
   * 
   * @param request - CreateResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceRuleResponse
   */
  async createResourceRuleWithOptions(request: CreateResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateResourceRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricOperationType)) {
      body["MetricOperationType"] = request.metricOperationType;
    }

    if (!$dara.isNull(request.metricPullInfo)) {
      body["MetricPullInfo"] = request.metricPullInfo;
    }

    if (!$dara.isNull(request.metricPullPeriod)) {
      body["MetricPullPeriod"] = request.metricPullPeriod;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ruleComputingDefinition)) {
      body["RuleComputingDefinition"] = request.ruleComputingDefinition;
    }

    if (!$dara.isNull(request.ruleItems)) {
      body["RuleItems"] = request.ruleItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateResourceRuleResponse>(await this.callApi(params, req, runtime), new CreateResourceRuleResponse({}));
    } else {
      return $dara.cast<CreateResourceRuleResponse>(await this.execute(params, req, runtime), new CreateResourceRuleResponse({}));
    }

  }

  /**
   * 创建资源规则
   * 
   * @param request - CreateResourceRuleRequest
   * @returns CreateResourceRuleResponse
   */
  async createResourceRule(request: CreateResourceRuleRequest): Promise<CreateResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceRuleWithOptions(request, headers, runtime);
  }

  /**
   * 创建资源规则条目
   * 
   * @param request - CreateResourceRuleItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceRuleItemResponse
   */
  async createResourceRuleItemWithOptions(ResourceRuleId: string, request: CreateResourceRuleItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateResourceRuleItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxValue)) {
      body["MaxValue"] = request.maxValue;
    }

    if (!$dara.isNull(request.minValue)) {
      body["MinValue"] = request.minValue;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceRuleItem",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/items`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateResourceRuleItemResponse>(await this.callApi(params, req, runtime), new CreateResourceRuleItemResponse({}));
    } else {
      return $dara.cast<CreateResourceRuleItemResponse>(await this.execute(params, req, runtime), new CreateResourceRuleItemResponse({}));
    }

  }

  /**
   * 创建资源规则条目
   * 
   * @param request - CreateResourceRuleItemRequest
   * @returns CreateResourceRuleItemResponse
   */
  async createResourceRuleItem(ResourceRuleId: string, request: CreateResourceRuleItemRequest): Promise<CreateResourceRuleItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceRuleItemWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 创建场景
   * 
   * @param request - CreateSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSceneResponse
   */
  async createSceneWithOptions(request: CreateSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.flows)) {
      body["Flows"] = request.flows;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSceneResponse>(await this.callApi(params, req, runtime), new CreateSceneResponse({}));
    } else {
      return $dara.cast<CreateSceneResponse>(await this.execute(params, req, runtime), new CreateSceneResponse({}));
    }

  }

  /**
   * 创建场景
   * 
   * @param request - CreateSceneRequest
   * @returns CreateSceneResponse
   */
  async createScene(request: CreateSceneRequest): Promise<CreateSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSceneWithOptions(request, headers, runtime);
  }

  /**
   * 在指定人群下创建子人群。
   * 
   * @param request - CreateSubCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubCrowdResponse
   */
  async createSubCrowdWithOptions(CrowdId: string, request: CreateSubCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateSubCrowdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/subcrowds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSubCrowdResponse>(await this.callApi(params, req, runtime), new CreateSubCrowdResponse({}));
    } else {
      return $dara.cast<CreateSubCrowdResponse>(await this.execute(params, req, runtime), new CreateSubCrowdResponse({}));
    }

  }

  /**
   * 在指定人群下创建子人群。
   * 
   * @param request - CreateSubCrowdRequest
   * @returns CreateSubCrowdResponse
   */
  async createSubCrowd(CrowdId: string, request: CreateSubCrowdRequest): Promise<CreateSubCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSubCrowdWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * 创建数据表。
   * 
   * @param request - CreateTableMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTableMetaResponse
   */
  async createTableMetaWithOptions(request: CreateTableMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTableMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.module)) {
      body["Module"] = request.module;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTableMetaResponse>(await this.callApi(params, req, runtime), new CreateTableMetaResponse({}));
    } else {
      return $dara.cast<CreateTableMetaResponse>(await this.execute(params, req, runtime), new CreateTableMetaResponse({}));
    }

  }

  /**
   * 创建数据表。
   * 
   * @param request - CreateTableMetaRequest
   * @returns CreateTableMetaResponse
   */
  async createTableMeta(request: CreateTableMetaRequest): Promise<CreateTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableMetaWithOptions(request, headers, runtime);
  }

  /**
   * 创建流量调控目标
   * 
   * @param request - CreateTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrafficControlTargetResponse
   */
  async createTrafficControlTargetWithOptions(request: CreateTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTrafficControlTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.event)) {
      body["Event"] = request.event;
    }

    if (!$dara.isNull(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!$dara.isNull(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!$dara.isNull(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.newProductRegulation)) {
      body["NewProductRegulation"] = request.newProductRegulation;
    }

    if (!$dara.isNull(request.recallName)) {
      body["RecallName"] = request.recallName;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisPeriod)) {
      body["StatisPeriod"] = request.statisPeriod;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.toleranceValue)) {
      body["ToleranceValue"] = request.toleranceValue;
    }

    if (!$dara.isNull(request.trafficControlTaskId)) {
      body["TrafficControlTaskId"] = request.trafficControlTaskId;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new CreateTrafficControlTargetResponse({}));
    } else {
      return $dara.cast<CreateTrafficControlTargetResponse>(await this.execute(params, req, runtime), new CreateTrafficControlTargetResponse({}));
    }

  }

  /**
   * 创建流量调控目标
   * 
   * @param request - CreateTrafficControlTargetRequest
   * @returns CreateTrafficControlTargetResponse
   */
  async createTrafficControlTarget(request: CreateTrafficControlTargetRequest): Promise<CreateTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrafficControlTargetWithOptions(request, headers, runtime);
  }

  /**
   * 创建流量调控任务
   * 
   * @param request - CreateTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrafficControlTaskResponse
   */
  async createTrafficControlTaskWithOptions(request: CreateTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.behaviorTableMetaId)) {
      body["BehaviorTableMetaId"] = request.behaviorTableMetaId;
    }

    if (!$dara.isNull(request.controlGranularity)) {
      body["ControlGranularity"] = request.controlGranularity;
    }

    if (!$dara.isNull(request.controlLogic)) {
      body["ControlLogic"] = request.controlLogic;
    }

    if (!$dara.isNull(request.controlType)) {
      body["ControlType"] = request.controlType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executionTime)) {
      body["ExecutionTime"] = request.executionTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!$dara.isNull(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!$dara.isNull(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!$dara.isNull(request.itemTableMetaId)) {
      body["ItemTableMetaId"] = request.itemTableMetaId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.preExperimentIds)) {
      body["PreExperimentIds"] = request.preExperimentIds;
    }

    if (!$dara.isNull(request.prodExperimentIds)) {
      body["ProdExperimentIds"] = request.prodExperimentIds;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisBehaviorConditionArray)) {
      body["StatisBehaviorConditionArray"] = request.statisBehaviorConditionArray;
    }

    if (!$dara.isNull(request.statisBehaviorConditionExpress)) {
      body["StatisBehaviorConditionExpress"] = request.statisBehaviorConditionExpress;
    }

    if (!$dara.isNull(request.statisBehaviorConditionType)) {
      body["StatisBehaviorConditionType"] = request.statisBehaviorConditionType;
    }

    if (!$dara.isNull(request.trafficControlTargets)) {
      body["TrafficControlTargets"] = request.trafficControlTargets;
    }

    if (!$dara.isNull(request.userConditionArray)) {
      body["UserConditionArray"] = request.userConditionArray;
    }

    if (!$dara.isNull(request.userConditionExpress)) {
      body["UserConditionExpress"] = request.userConditionExpress;
    }

    if (!$dara.isNull(request.userConditionType)) {
      body["UserConditionType"] = request.userConditionType;
    }

    if (!$dara.isNull(request.userTableMetaId)) {
      body["UserTableMetaId"] = request.userTableMetaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new CreateTrafficControlTaskResponse({}));
    } else {
      return $dara.cast<CreateTrafficControlTaskResponse>(await this.execute(params, req, runtime), new CreateTrafficControlTaskResponse({}));
    }

  }

  /**
   * 创建流量调控任务
   * 
   * @param request - CreateTrafficControlTaskRequest
   * @returns CreateTrafficControlTaskResponse
   */
  async createTrafficControlTask(request: CreateTrafficControlTaskRequest): Promise<CreateTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrafficControlTaskWithOptions(request, headers, runtime);
  }

  /**
   * 对指定资源规则中的计算公式进行调试
   * 
   * @param tmpReq - DebugResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugResourceRuleResponse
   */
  async debugResourceRuleWithOptions(ResourceRuleId: string, tmpReq: DebugResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DebugResourceRuleResponse> {
    tmpReq.validate();
    let request = new DebugResourceRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metricInfo)) {
      request.metricInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricInfo, "MetricInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricInfoShrink)) {
      query["MetricInfo"] = request.metricInfoShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DebugResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/action/debug`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DebugResourceRuleResponse>(await this.callApi(params, req, runtime), new DebugResourceRuleResponse({}));
    } else {
      return $dara.cast<DebugResourceRuleResponse>(await this.execute(params, req, runtime), new DebugResourceRuleResponse({}));
    }

  }

  /**
   * 对指定资源规则中的计算公式进行调试
   * 
   * @param request - DebugResourceRuleRequest
   * @returns DebugResourceRuleResponse
   */
  async debugResourceRule(ResourceRuleId: string, request: DebugResourceRuleRequest): Promise<DebugResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.debugResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 删除指定AB实验指标。
   * 
   * @param request - DeleteABMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABMetricResponse
   */
  async deleteABMetricWithOptions(ABMetricId: string, request: DeleteABMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteABMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics/${$dara.URL.percentEncode(ABMetricId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteABMetricResponse>(await this.callApi(params, req, runtime), new DeleteABMetricResponse({}));
    } else {
      return $dara.cast<DeleteABMetricResponse>(await this.execute(params, req, runtime), new DeleteABMetricResponse({}));
    }

  }

  /**
   * 删除指定AB实验指标。
   * 
   * @param request - DeleteABMetricRequest
   * @returns DeleteABMetricResponse
   */
  async deleteABMetric(ABMetricId: string, request: DeleteABMetricRequest): Promise<DeleteABMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

  /**
   * 删除AB实验指标组。
   * 
   * @param request - DeleteABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABMetricGroupResponse
   */
  async deleteABMetricGroupWithOptions(ABMetricGroupId: string, request: DeleteABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteABMetricGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${$dara.URL.percentEncode(ABMetricGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteABMetricGroupResponse>(await this.callApi(params, req, runtime), new DeleteABMetricGroupResponse({}));
    } else {
      return $dara.cast<DeleteABMetricGroupResponse>(await this.execute(params, req, runtime), new DeleteABMetricGroupResponse({}));
    }

  }

  /**
   * 删除AB实验指标组。
   * 
   * @param request - DeleteABMetricGroupRequest
   * @returns DeleteABMetricGroupResponse
   */
  async deleteABMetricGroup(ABMetricGroupId: string, request: DeleteABMetricGroupRequest): Promise<DeleteABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * 删除指定人群。
   * 
   * @param request - DeleteCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCrowdResponse
   */
  async deleteCrowdWithOptions(CrowdId: string, request: DeleteCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteCrowdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCrowdResponse>(await this.callApi(params, req, runtime), new DeleteCrowdResponse({}));
    } else {
      return $dara.cast<DeleteCrowdResponse>(await this.execute(params, req, runtime), new DeleteCrowdResponse({}));
    }

  }

  /**
   * 删除指定人群。
   * 
   * @param request - DeleteCrowdRequest
   * @returns DeleteCrowdResponse
   */
  async deleteCrowd(CrowdId: string, request: DeleteCrowdRequest): Promise<DeleteCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCrowdWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * 删除指定推荐引擎配置。
   * 
   * @param request - DeleteEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEngineConfigResponse
   */
  async deleteEngineConfigWithOptions(EngineConfigId: string, request: DeleteEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteEngineConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteEngineConfigResponse>(await this.callApi(params, req, runtime), new DeleteEngineConfigResponse({}));
    } else {
      return $dara.cast<DeleteEngineConfigResponse>(await this.execute(params, req, runtime), new DeleteEngineConfigResponse({}));
    }

  }

  /**
   * 删除指定推荐引擎配置。
   * 
   * @param request - DeleteEngineConfigRequest
   * @returns DeleteEngineConfigResponse
   */
  async deleteEngineConfig(EngineConfigId: string, request: DeleteEngineConfigRequest): Promise<DeleteEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * 删除实验。
   * 
   * @param request - DeleteExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(ExperimentId: string, request: DeleteExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteExperimentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteExperimentResponse>(await this.callApi(params, req, runtime), new DeleteExperimentResponse({}));
    } else {
      return $dara.cast<DeleteExperimentResponse>(await this.execute(params, req, runtime), new DeleteExperimentResponse({}));
    }

  }

  /**
   * 删除实验。
   * 
   * @param request - DeleteExperimentRequest
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(ExperimentId: string, request: DeleteExperimentRequest): Promise<DeleteExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 删除指定实验组。
   * 
   * @param request - DeleteExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentGroupResponse
   */
  async deleteExperimentGroupWithOptions(ExperimentGroupId: string, request: DeleteExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteExperimentGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteExperimentGroupResponse>(await this.callApi(params, req, runtime), new DeleteExperimentGroupResponse({}));
    } else {
      return $dara.cast<DeleteExperimentGroupResponse>(await this.execute(params, req, runtime), new DeleteExperimentGroupResponse({}));
    }

  }

  /**
   * 删除指定实验组。
   * 
   * @param request - DeleteExperimentGroupRequest
   * @returns DeleteExperimentGroupResponse
   */
  async deleteExperimentGroup(ExperimentGroupId: string, request: DeleteExperimentGroupRequest): Promise<DeleteExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * 删除指定实例下的指定配置资源。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResourceResponse
   */
  async deleteInstanceResourceWithOptions(InstanceId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceResourceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResourceResponse({}));
    } else {
      return $dara.cast<DeleteInstanceResourceResponse>(await this.execute(params, req, runtime), new DeleteInstanceResourceResponse({}));
    }

  }

  /**
   * 删除指定实例下的指定配置资源。
   * @returns DeleteInstanceResourceResponse
   */
  async deleteInstanceResource(InstanceId: string, ResourceId: string): Promise<DeleteInstanceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceResourceWithOptions(InstanceId, ResourceId, headers, runtime);
  }

  /**
   * 删除实验室。
   * 
   * @param request - DeleteLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLaboratoryResponse
   */
  async deleteLaboratoryWithOptions(LaboratoryId: string, request: DeleteLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteLaboratoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLaboratoryResponse>(await this.callApi(params, req, runtime), new DeleteLaboratoryResponse({}));
    } else {
      return $dara.cast<DeleteLaboratoryResponse>(await this.execute(params, req, runtime), new DeleteLaboratoryResponse({}));
    }

  }

  /**
   * 删除实验室。
   * 
   * @param request - DeleteLaboratoryRequest
   * @returns DeleteLaboratoryResponse
   */
  async deleteLaboratory(LaboratoryId: string, request: DeleteLaboratoryRequest): Promise<DeleteLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * 删除层。
   * 
   * @param request - DeleteLayerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayerResponse
   */
  async deleteLayerWithOptions(LayerId: string, request: DeleteLayerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteLayerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${$dara.URL.percentEncode(LayerId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLayerResponse>(await this.callApi(params, req, runtime), new DeleteLayerResponse({}));
    } else {
      return $dara.cast<DeleteLayerResponse>(await this.execute(params, req, runtime), new DeleteLayerResponse({}));
    }

  }

  /**
   * 删除层。
   * 
   * @param request - DeleteLayerRequest
   * @returns DeleteLayerResponse
   */
  async deleteLayer(LayerId: string, request: DeleteLayerRequest): Promise<DeleteLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * 删除指定参数。
   * 
   * @param request - DeleteParamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParamResponse
   */
  async deleteParamWithOptions(ParamId: string, request: DeleteParamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteParamResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteParam",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params/${$dara.URL.percentEncode(ParamId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteParamResponse>(await this.callApi(params, req, runtime), new DeleteParamResponse({}));
    } else {
      return $dara.cast<DeleteParamResponse>(await this.execute(params, req, runtime), new DeleteParamResponse({}));
    }

  }

  /**
   * 删除指定参数。
   * 
   * @param request - DeleteParamRequest
   * @returns DeleteParamResponse
   */
  async deleteParam(ParamId: string, request: DeleteParamRequest): Promise<DeleteParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteParamWithOptions(ParamId, request, headers, runtime);
  }

  /**
   * 删除资源规则
   * 
   * @param request - DeleteResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceRuleResponse
   */
  async deleteResourceRuleWithOptions(ResourceRuleId: string, request: DeleteResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteResourceRuleResponse>(await this.callApi(params, req, runtime), new DeleteResourceRuleResponse({}));
    } else {
      return $dara.cast<DeleteResourceRuleResponse>(await this.execute(params, req, runtime), new DeleteResourceRuleResponse({}));
    }

  }

  /**
   * 删除资源规则
   * 
   * @param request - DeleteResourceRuleRequest
   * @returns DeleteResourceRuleResponse
   */
  async deleteResourceRule(ResourceRuleId: string, request: DeleteResourceRuleRequest): Promise<DeleteResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 删除资源规则条目
   * 
   * @param request - DeleteResourceRuleItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceRuleItemResponse
   */
  async deleteResourceRuleItemWithOptions(ResourceRuleId: string, ResourceRuleItemId: string, request: DeleteResourceRuleItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceRuleItemResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceRuleItem",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/items/${$dara.URL.percentEncode(ResourceRuleItemId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteResourceRuleItemResponse>(await this.callApi(params, req, runtime), new DeleteResourceRuleItemResponse({}));
    } else {
      return $dara.cast<DeleteResourceRuleItemResponse>(await this.execute(params, req, runtime), new DeleteResourceRuleItemResponse({}));
    }

  }

  /**
   * 删除资源规则条目
   * 
   * @param request - DeleteResourceRuleItemRequest
   * @returns DeleteResourceRuleItemResponse
   */
  async deleteResourceRuleItem(ResourceRuleId: string, ResourceRuleItemId: string, request: DeleteResourceRuleItemRequest): Promise<DeleteResourceRuleItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceRuleItemWithOptions(ResourceRuleId, ResourceRuleItemId, request, headers, runtime);
  }

  /**
   * 删除场景
   * 
   * @param request - DeleteSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSceneResponse
   */
  async deleteSceneWithOptions(SceneId: string, request: DeleteSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteSceneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes/${$dara.URL.percentEncode(SceneId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSceneResponse>(await this.callApi(params, req, runtime), new DeleteSceneResponse({}));
    } else {
      return $dara.cast<DeleteSceneResponse>(await this.execute(params, req, runtime), new DeleteSceneResponse({}));
    }

  }

  /**
   * 删除场景
   * 
   * @param request - DeleteSceneRequest
   * @returns DeleteSceneResponse
   */
  async deleteScene(SceneId: string, request: DeleteSceneRequest): Promise<DeleteSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSceneWithOptions(SceneId, request, headers, runtime);
  }

  /**
   * 删除指定人群下的指定子人群。
   * 
   * @param request - DeleteSubCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubCrowdResponse
   */
  async deleteSubCrowdWithOptions(CrowdId: string, SubCrowdId: string, request: DeleteSubCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteSubCrowdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/subcrowds/${$dara.URL.percentEncode(SubCrowdId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSubCrowdResponse>(await this.callApi(params, req, runtime), new DeleteSubCrowdResponse({}));
    } else {
      return $dara.cast<DeleteSubCrowdResponse>(await this.execute(params, req, runtime), new DeleteSubCrowdResponse({}));
    }

  }

  /**
   * 删除指定人群下的指定子人群。
   * 
   * @param request - DeleteSubCrowdRequest
   * @returns DeleteSubCrowdResponse
   */
  async deleteSubCrowd(CrowdId: string, SubCrowdId: string, request: DeleteSubCrowdRequest): Promise<DeleteSubCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSubCrowdWithOptions(CrowdId, SubCrowdId, request, headers, runtime);
  }

  /**
   * 删除数据表。
   * 
   * @param request - DeleteTableMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTableMetaResponse
   */
  async deleteTableMetaWithOptions(TableMetaId: string, request: DeleteTableMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTableMetaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas/${$dara.URL.percentEncode(TableMetaId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTableMetaResponse>(await this.callApi(params, req, runtime), new DeleteTableMetaResponse({}));
    } else {
      return $dara.cast<DeleteTableMetaResponse>(await this.execute(params, req, runtime), new DeleteTableMetaResponse({}));
    }

  }

  /**
   * 删除数据表。
   * 
   * @param request - DeleteTableMetaRequest
   * @returns DeleteTableMetaResponse
   */
  async deleteTableMeta(TableMetaId: string, request: DeleteTableMetaRequest): Promise<DeleteTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  /**
   * 更新流量调控目标
   * 
   * @param request - DeleteTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrafficControlTargetResponse
   */
  async deleteTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: DeleteTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTrafficControlTargetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new DeleteTrafficControlTargetResponse({}));
    } else {
      return $dara.cast<DeleteTrafficControlTargetResponse>(await this.execute(params, req, runtime), new DeleteTrafficControlTargetResponse({}));
    }

  }

  /**
   * 更新流量调控目标
   * 
   * @param request - DeleteTrafficControlTargetRequest
   * @returns DeleteTrafficControlTargetResponse
   */
  async deleteTrafficControlTarget(TrafficControlTargetId: string, request: DeleteTrafficControlTargetRequest): Promise<DeleteTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * 删除指定的流量调控任务
   * 
   * @param request - DeleteTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrafficControlTaskResponse
   */
  async deleteTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: DeleteTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTrafficControlTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new DeleteTrafficControlTaskResponse({}));
    } else {
      return $dara.cast<DeleteTrafficControlTaskResponse>(await this.execute(params, req, runtime), new DeleteTrafficControlTaskResponse({}));
    }

  }

  /**
   * 删除指定的流量调控任务
   * 
   * @param request - DeleteTrafficControlTaskRequest
   * @returns DeleteTrafficControlTaskResponse
   */
  async deleteTrafficControlTask(TrafficControlTaskId: string, request: DeleteTrafficControlTaskRequest): Promise<DeleteTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 产生流量调控的相关代码
   * 
   * @param request - GenerateTrafficControlTaskCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTrafficControlTaskCodeResponse
   */
  async generateTrafficControlTaskCodeWithOptions(TrafficControlTaskId: string, request: GenerateTrafficControlTaskCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GenerateTrafficControlTaskCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateTrafficControlTaskCode",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/generatecode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenerateTrafficControlTaskCodeResponse>(await this.callApi(params, req, runtime), new GenerateTrafficControlTaskCodeResponse({}));
    } else {
      return $dara.cast<GenerateTrafficControlTaskCodeResponse>(await this.execute(params, req, runtime), new GenerateTrafficControlTaskCodeResponse({}));
    }

  }

  /**
   * 产生流量调控的相关代码
   * 
   * @param request - GenerateTrafficControlTaskCodeRequest
   * @returns GenerateTrafficControlTaskCodeResponse
   */
  async generateTrafficControlTaskCode(TrafficControlTaskId: string, request: GenerateTrafficControlTaskCodeRequest): Promise<GenerateTrafficControlTaskCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTrafficControlTaskCodeWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 产生流量调控的相关召回配置
   * 
   * @param request - GenerateTrafficControlTaskConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTrafficControlTaskConfigResponse
   */
  async generateTrafficControlTaskConfigWithOptions(TrafficControlTaskId: string, request: GenerateTrafficControlTaskConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GenerateTrafficControlTaskConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateTrafficControlTaskConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/generateconfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenerateTrafficControlTaskConfigResponse>(await this.callApi(params, req, runtime), new GenerateTrafficControlTaskConfigResponse({}));
    } else {
      return $dara.cast<GenerateTrafficControlTaskConfigResponse>(await this.execute(params, req, runtime), new GenerateTrafficControlTaskConfigResponse({}));
    }

  }

  /**
   * 产生流量调控的相关召回配置
   * 
   * @param request - GenerateTrafficControlTaskConfigRequest
   * @returns GenerateTrafficControlTaskConfigResponse
   */
  async generateTrafficControlTaskConfig(TrafficControlTaskId: string, request: GenerateTrafficControlTaskConfigRequest): Promise<GenerateTrafficControlTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTrafficControlTaskConfigWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 获取AB Test实验指标详细信息。
   * 
   * @param request - GetABMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetABMetricResponse
   */
  async getABMetricWithOptions(ABMetricId: string, request: GetABMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetABMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics/${$dara.URL.percentEncode(ABMetricId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetABMetricResponse>(await this.callApi(params, req, runtime), new GetABMetricResponse({}));
    } else {
      return $dara.cast<GetABMetricResponse>(await this.execute(params, req, runtime), new GetABMetricResponse({}));
    }

  }

  /**
   * 获取AB Test实验指标详细信息。
   * 
   * @param request - GetABMetricRequest
   * @returns GetABMetricResponse
   */
  async getABMetric(ABMetricId: string, request: GetABMetricRequest): Promise<GetABMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

  /**
   * 获取AB实验指标组详细信息。
   * 
   * @param request - GetABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetABMetricGroupResponse
   */
  async getABMetricGroupWithOptions(ABMetricGroupId: string, request: GetABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetABMetricGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${$dara.URL.percentEncode(ABMetricGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetABMetricGroupResponse>(await this.callApi(params, req, runtime), new GetABMetricGroupResponse({}));
    } else {
      return $dara.cast<GetABMetricGroupResponse>(await this.execute(params, req, runtime), new GetABMetricGroupResponse({}));
    }

  }

  /**
   * 获取AB实验指标组详细信息。
   * 
   * @param request - GetABMetricGroupRequest
   * @returns GetABMetricGroupResponse
   */
  async getABMetricGroup(ABMetricGroupId: string, request: GetABMetricGroupRequest): Promise<GetABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * 获取指定计算任务详细信息。
   * 
   * @param request - GetCalculationJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCalculationJobResponse
   */
  async getCalculationJobWithOptions(CalculationJobId: string, request: GetCalculationJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetCalculationJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCalculationJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/calculationjobs/${$dara.URL.percentEncode(CalculationJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCalculationJobResponse>(await this.callApi(params, req, runtime), new GetCalculationJobResponse({}));
    } else {
      return $dara.cast<GetCalculationJobResponse>(await this.execute(params, req, runtime), new GetCalculationJobResponse({}));
    }

  }

  /**
   * 获取指定计算任务详细信息。
   * 
   * @param request - GetCalculationJobRequest
   * @returns GetCalculationJobResponse
   */
  async getCalculationJob(CalculationJobId: string, request: GetCalculationJobRequest): Promise<GetCalculationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCalculationJobWithOptions(CalculationJobId, request, headers, runtime);
  }

  /**
   * 获取引擎配置详细信息。
   * 
   * @param request - GetEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEngineConfigResponse
   */
  async getEngineConfigWithOptions(EngineConfigId: string, request: GetEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetEngineConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetEngineConfigResponse>(await this.callApi(params, req, runtime), new GetEngineConfigResponse({}));
    } else {
      return $dara.cast<GetEngineConfigResponse>(await this.execute(params, req, runtime), new GetEngineConfigResponse({}));
    }

  }

  /**
   * 获取引擎配置详细信息。
   * 
   * @param request - GetEngineConfigRequest
   * @returns GetEngineConfigResponse
   */
  async getEngineConfig(EngineConfigId: string, request: GetEngineConfigRequest): Promise<GetEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * 获取实验详细信息。
   * 
   * @param request - GetExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentResponse
   */
  async getExperimentWithOptions(ExperimentId: string, request: GetExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetExperimentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetExperimentResponse>(await this.callApi(params, req, runtime), new GetExperimentResponse({}));
    } else {
      return $dara.cast<GetExperimentResponse>(await this.execute(params, req, runtime), new GetExperimentResponse({}));
    }

  }

  /**
   * 获取实验详细信息。
   * 
   * @param request - GetExperimentRequest
   * @returns GetExperimentResponse
   */
  async getExperiment(ExperimentId: string, request: GetExperimentRequest): Promise<GetExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 获取指定实验组详细信息。
   * 
   * @param request - GetExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentGroupResponse
   */
  async getExperimentGroupWithOptions(ExperimentGroupId: string, request: GetExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetExperimentGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetExperimentGroupResponse>(await this.callApi(params, req, runtime), new GetExperimentGroupResponse({}));
    } else {
      return $dara.cast<GetExperimentGroupResponse>(await this.execute(params, req, runtime), new GetExperimentGroupResponse({}));
    }

  }

  /**
   * 获取指定实验组详细信息。
   * 
   * @param request - GetExperimentGroupRequest
   * @returns GetExperimentGroupResponse
   */
  async getExperimentGroup(ExperimentGroupId: string, request: GetExperimentGroupRequest): Promise<GetExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * 获取特征一致性检查任务详细信息。
   * 
   * @param request - GetFeatureConsistencyCheckJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureConsistencyCheckJobResponse
   */
  async getFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId: string, request: GetFeatureConsistencyCheckJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetFeatureConsistencyCheckJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFeatureConsistencyCheckJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFeatureConsistencyCheckJobResponse>(await this.callApi(params, req, runtime), new GetFeatureConsistencyCheckJobResponse({}));
    } else {
      return $dara.cast<GetFeatureConsistencyCheckJobResponse>(await this.execute(params, req, runtime), new GetFeatureConsistencyCheckJobResponse({}));
    }

  }

  /**
   * 获取特征一致性检查任务详细信息。
   * 
   * @param request - GetFeatureConsistencyCheckJobRequest
   * @returns GetFeatureConsistencyCheckJobResponse
   */
  async getFeatureConsistencyCheckJob(FeatureConsistencyCheckJobId: string, request: GetFeatureConsistencyCheckJobRequest): Promise<GetFeatureConsistencyCheckJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * 获取特征一致性检测配置详情。
   * 
   * @param request - GetFeatureConsistencyCheckJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureConsistencyCheckJobConfigResponse
   */
  async getFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId: string, request: GetFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetFeatureConsistencyCheckJobConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new GetFeatureConsistencyCheckJobConfigResponse({}));
    } else {
      return $dara.cast<GetFeatureConsistencyCheckJobConfigResponse>(await this.execute(params, req, runtime), new GetFeatureConsistencyCheckJobConfigResponse({}));
    }

  }

  /**
   * 获取特征一致性检测配置详情。
   * 
   * @param request - GetFeatureConsistencyCheckJobConfigRequest
   * @returns GetFeatureConsistencyCheckJobConfigResponse
   */
  async getFeatureConsistencyCheckJobConfig(FeatureConsistencyCheckJobConfigId: string, request: GetFeatureConsistencyCheckJobConfigRequest): Promise<GetFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

  /**
   * 获取指定推荐全链路深度定制开发平台实例信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
    } else {
      return $dara.cast<GetInstanceResponse>(await this.execute(params, req, runtime), new GetInstanceResponse({}));
    }

  }

  /**
   * 获取指定推荐全链路深度定制开发平台实例信息。
   * @returns GetInstanceResponse
   */
  async getInstance(InstanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取指定实例下指定资源的详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResourceResponse
   */
  async getInstanceResourceWithOptions(InstanceId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceResourceResponse>(await this.callApi(params, req, runtime), new GetInstanceResourceResponse({}));
    } else {
      return $dara.cast<GetInstanceResourceResponse>(await this.execute(params, req, runtime), new GetInstanceResourceResponse({}));
    }

  }

  /**
   * 获取指定实例下指定资源的详细信息。
   * @returns GetInstanceResourceResponse
   */
  async getInstanceResource(InstanceId: string, ResourceId: string): Promise<GetInstanceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceResourceWithOptions(InstanceId, ResourceId, headers, runtime);
  }

  /**
   * 获取数据源下指定表的详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResourceTableResponse
   */
  async getInstanceResourceTableWithOptions(InstanceId: string, ResourceId: string, TableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceResourceTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceResourceTable",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}/tables/${$dara.URL.percentEncode(TableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceResourceTableResponse>(await this.callApi(params, req, runtime), new GetInstanceResourceTableResponse({}));
    } else {
      return $dara.cast<GetInstanceResourceTableResponse>(await this.execute(params, req, runtime), new GetInstanceResourceTableResponse({}));
    }

  }

  /**
   * 获取数据源下指定表的详细信息。
   * @returns GetInstanceResourceTableResponse
   */
  async getInstanceResourceTable(InstanceId: string, ResourceId: string, TableName: string): Promise<GetInstanceResourceTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceResourceTableWithOptions(InstanceId, ResourceId, TableName, headers, runtime);
  }

  /**
   * 获取实验室详细信息。
   * 
   * @param request - GetLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLaboratoryResponse
   */
  async getLaboratoryWithOptions(LaboratoryId: string, request: GetLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLaboratoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLaboratoryResponse>(await this.callApi(params, req, runtime), new GetLaboratoryResponse({}));
    } else {
      return $dara.cast<GetLaboratoryResponse>(await this.execute(params, req, runtime), new GetLaboratoryResponse({}));
    }

  }

  /**
   * 获取实验室详细信息。
   * 
   * @param request - GetLaboratoryRequest
   * @returns GetLaboratoryResponse
   */
  async getLaboratory(LaboratoryId: string, request: GetLaboratoryRequest): Promise<GetLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * 获取层详细信息。
   * 
   * @param request - GetLayerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLayerResponse
   */
  async getLayerWithOptions(LayerId: string, request: GetLayerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLayerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${$dara.URL.percentEncode(LayerId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLayerResponse>(await this.callApi(params, req, runtime), new GetLayerResponse({}));
    } else {
      return $dara.cast<GetLayerResponse>(await this.execute(params, req, runtime), new GetLayerResponse({}));
    }

  }

  /**
   * 获取层详细信息。
   * 
   * @param request - GetLayerRequest
   * @returns GetLayerResponse
   */
  async getLayer(LayerId: string, request: GetLayerRequest): Promise<GetLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * 获取资源规则详细信息
   * 
   * @param request - GetResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceRuleResponse
   */
  async getResourceRuleWithOptions(ResourceRuleId: string, request: GetResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetResourceRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetResourceRuleResponse>(await this.callApi(params, req, runtime), new GetResourceRuleResponse({}));
    } else {
      return $dara.cast<GetResourceRuleResponse>(await this.execute(params, req, runtime), new GetResourceRuleResponse({}));
    }

  }

  /**
   * 获取资源规则详细信息
   * 
   * @param request - GetResourceRuleRequest
   * @returns GetResourceRuleResponse
   */
  async getResourceRule(ResourceRuleId: string, request: GetResourceRuleRequest): Promise<GetResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 获取场景详细信息
   * 
   * @param request - GetSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSceneResponse
   */
  async getSceneWithOptions(SceneId: string, request: GetSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSceneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes/${$dara.URL.percentEncode(SceneId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSceneResponse>(await this.callApi(params, req, runtime), new GetSceneResponse({}));
    } else {
      return $dara.cast<GetSceneResponse>(await this.execute(params, req, runtime), new GetSceneResponse({}));
    }

  }

  /**
   * 获取场景详细信息
   * 
   * @param request - GetSceneRequest
   * @returns GetSceneResponse
   */
  async getScene(SceneId: string, request: GetSceneRequest): Promise<GetSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSceneWithOptions(SceneId, request, headers, runtime);
  }

  /**
   * 获取指定人群下的指定子人群的详细信息。
   * 
   * @param request - GetSubCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubCrowdResponse
   */
  async getSubCrowdWithOptions(CrowdId: string, SubCrowdId: string, request: GetSubCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSubCrowdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/subcrowds/${$dara.URL.percentEncode(SubCrowdId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSubCrowdResponse>(await this.callApi(params, req, runtime), new GetSubCrowdResponse({}));
    } else {
      return $dara.cast<GetSubCrowdResponse>(await this.execute(params, req, runtime), new GetSubCrowdResponse({}));
    }

  }

  /**
   * 获取指定人群下的指定子人群的详细信息。
   * 
   * @param request - GetSubCrowdRequest
   * @returns GetSubCrowdResponse
   */
  async getSubCrowd(CrowdId: string, SubCrowdId: string, request: GetSubCrowdRequest): Promise<GetSubCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubCrowdWithOptions(CrowdId, SubCrowdId, request, headers, runtime);
  }

  /**
   * 获取数据表详细信息。
   * 
   * @param request - GetTableMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableMetaResponse
   */
  async getTableMetaWithOptions(TableMetaId: string, request: GetTableMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTableMetaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas/${$dara.URL.percentEncode(TableMetaId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTableMetaResponse>(await this.callApi(params, req, runtime), new GetTableMetaResponse({}));
    } else {
      return $dara.cast<GetTableMetaResponse>(await this.execute(params, req, runtime), new GetTableMetaResponse({}));
    }

  }

  /**
   * 获取数据表详细信息。
   * 
   * @param request - GetTableMetaRequest
   * @returns GetTableMetaResponse
   */
  async getTableMeta(TableMetaId: string, request: GetTableMetaRequest): Promise<GetTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  /**
   * 获取流量调控目标详情
   * 
   * @param request - GetTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrafficControlTargetResponse
   */
  async getTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: GetTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTrafficControlTargetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new GetTrafficControlTargetResponse({}));
    } else {
      return $dara.cast<GetTrafficControlTargetResponse>(await this.execute(params, req, runtime), new GetTrafficControlTargetResponse({}));
    }

  }

  /**
   * 获取流量调控目标详情
   * 
   * @param request - GetTrafficControlTargetRequest
   * @returns GetTrafficControlTargetResponse
   */
  async getTrafficControlTarget(TrafficControlTargetId: string, request: GetTrafficControlTargetRequest): Promise<GetTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * 获取流量调控任务详情
   * 
   * @param request - GetTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrafficControlTaskResponse
   */
  async getTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: GetTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTrafficControlTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.controlTargetFilter)) {
      query["ControlTargetFilter"] = request.controlTargetFilter;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new GetTrafficControlTaskResponse({}));
    } else {
      return $dara.cast<GetTrafficControlTaskResponse>(await this.execute(params, req, runtime), new GetTrafficControlTaskResponse({}));
    }

  }

  /**
   * 获取流量调控任务详情
   * 
   * @param request - GetTrafficControlTaskRequest
   * @returns GetTrafficControlTaskResponse
   */
  async getTrafficControlTask(TrafficControlTaskId: string, request: GetTrafficControlTaskRequest): Promise<GetTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 获取流量调控任务的流量详情
   * 
   * @param request - GetTrafficControlTaskTrafficRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrafficControlTaskTrafficResponse
   */
  async getTrafficControlTaskTrafficWithOptions(TrafficControlTaskId: string, request: GetTrafficControlTaskTrafficRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTrafficControlTaskTrafficResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrafficControlTaskTraffic",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/trafficinfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTrafficControlTaskTrafficResponse>(await this.callApi(params, req, runtime), new GetTrafficControlTaskTrafficResponse({}));
    } else {
      return $dara.cast<GetTrafficControlTaskTrafficResponse>(await this.execute(params, req, runtime), new GetTrafficControlTaskTrafficResponse({}));
    }

  }

  /**
   * 获取流量调控任务的流量详情
   * 
   * @param request - GetTrafficControlTaskTrafficRequest
   * @returns GetTrafficControlTaskTrafficResponse
   */
  async getTrafficControlTaskTraffic(TrafficControlTaskId: string, request: GetTrafficControlTaskTrafficRequest): Promise<GetTrafficControlTaskTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrafficControlTaskTrafficWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 获取AB Test实验指标组列表。
   * 
   * @param request - ListABMetricGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABMetricGroupsResponse
   */
  async listABMetricGroupsWithOptions(request: ListABMetricGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListABMetricGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.realtime)) {
      query["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListABMetricGroups",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListABMetricGroupsResponse>(await this.callApi(params, req, runtime), new ListABMetricGroupsResponse({}));
    } else {
      return $dara.cast<ListABMetricGroupsResponse>(await this.execute(params, req, runtime), new ListABMetricGroupsResponse({}));
    }

  }

  /**
   * 获取AB Test实验指标组列表。
   * 
   * @param request - ListABMetricGroupsRequest
   * @returns ListABMetricGroupsResponse
   */
  async listABMetricGroups(request: ListABMetricGroupsRequest): Promise<ListABMetricGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABMetricGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 获取AB Test实验指标列表。
   * 
   * @param request - ListABMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABMetricsResponse
   */
  async listABMetricsWithOptions(request: ListABMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListABMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.realtime)) {
      query["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      query["TableMetaId"] = request.tableMetaId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListABMetrics",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListABMetricsResponse>(await this.callApi(params, req, runtime), new ListABMetricsResponse({}));
    } else {
      return $dara.cast<ListABMetricsResponse>(await this.execute(params, req, runtime), new ListABMetricsResponse({}));
    }

  }

  /**
   * 获取AB Test实验指标列表。
   * 
   * @param request - ListABMetricsRequest
   * @returns ListABMetricsResponse
   */
  async listABMetrics(request: ListABMetricsRequest): Promise<ListABMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABMetricsWithOptions(request, headers, runtime);
  }

  /**
   * 获取计算任务列表。
   * 
   * @param request - ListCalculationJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCalculationJobsResponse
   */
  async listCalculationJobsWithOptions(request: ListCalculationJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListCalculationJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCalculationJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/calculationjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCalculationJobsResponse>(await this.callApi(params, req, runtime), new ListCalculationJobsResponse({}));
    } else {
      return $dara.cast<ListCalculationJobsResponse>(await this.execute(params, req, runtime), new ListCalculationJobsResponse({}));
    }

  }

  /**
   * 获取计算任务列表。
   * 
   * @param request - ListCalculationJobsRequest
   * @returns ListCalculationJobsResponse
   */
  async listCalculationJobs(request: ListCalculationJobsRequest): Promise<ListCalculationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCalculationJobsWithOptions(request, headers, runtime);
  }

  /**
   * 获取人群下的所有用户。
   * 
   * @param request - ListCrowdUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCrowdUsersResponse
   */
  async listCrowdUsersWithOptions(CrowdId: string, request: ListCrowdUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListCrowdUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCrowdUsers",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCrowdUsersResponse>(await this.callApi(params, req, runtime), new ListCrowdUsersResponse({}));
    } else {
      return $dara.cast<ListCrowdUsersResponse>(await this.execute(params, req, runtime), new ListCrowdUsersResponse({}));
    }

  }

  /**
   * 获取人群下的所有用户。
   * 
   * @param request - ListCrowdUsersRequest
   * @returns ListCrowdUsersResponse
   */
  async listCrowdUsers(CrowdId: string, request: ListCrowdUsersRequest): Promise<ListCrowdUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCrowdUsersWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * 获取人群列表。
   * 
   * @param request - ListCrowdsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCrowdsResponse
   */
  async listCrowdsWithOptions(request: ListCrowdsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListCrowdsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCrowds",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCrowdsResponse>(await this.callApi(params, req, runtime), new ListCrowdsResponse({}));
    } else {
      return $dara.cast<ListCrowdsResponse>(await this.execute(params, req, runtime), new ListCrowdsResponse({}));
    }

  }

  /**
   * 获取人群列表。
   * 
   * @param request - ListCrowdsRequest
   * @returns ListCrowdsResponse
   */
  async listCrowds(request: ListCrowdsRequest): Promise<ListCrowdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCrowdsWithOptions(request, headers, runtime);
  }

  /**
   * 获取引擎配置列表。
   * 
   * @param request - ListEngineConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEngineConfigsResponse
   */
  async listEngineConfigsWithOptions(request: ListEngineConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListEngineConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEngineConfigs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEngineConfigsResponse>(await this.callApi(params, req, runtime), new ListEngineConfigsResponse({}));
    } else {
      return $dara.cast<ListEngineConfigsResponse>(await this.execute(params, req, runtime), new ListEngineConfigsResponse({}));
    }

  }

  /**
   * 获取引擎配置列表。
   * 
   * @param request - ListEngineConfigsRequest
   * @returns ListEngineConfigsResponse
   */
  async listEngineConfigs(request: ListEngineConfigsRequest): Promise<ListEngineConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEngineConfigsWithOptions(request, headers, runtime);
  }

  /**
   * 获取实验组列表。
   * 
   * @param request - ListExperimentGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentGroupsResponse
   */
  async listExperimentGroupsWithOptions(request: ListExperimentGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListExperimentGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.layerId)) {
      query["LayerId"] = request.layerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.timeRangeEnd)) {
      query["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!$dara.isNull(request.timeRangeStart)) {
      query["TimeRangeStart"] = request.timeRangeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperimentGroups",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListExperimentGroupsResponse>(await this.callApi(params, req, runtime), new ListExperimentGroupsResponse({}));
    } else {
      return $dara.cast<ListExperimentGroupsResponse>(await this.execute(params, req, runtime), new ListExperimentGroupsResponse({}));
    }

  }

  /**
   * 获取实验组列表。
   * 
   * @param request - ListExperimentGroupsRequest
   * @returns ListExperimentGroupsResponse
   */
  async listExperimentGroups(request: ListExperimentGroupsRequest): Promise<ListExperimentGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 获取实验列表。
   * 
   * @param request - ListExperimentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentsResponse
   */
  async listExperimentsWithOptions(request: ListExperimentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListExperimentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.experimentGroupId)) {
      query["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperiments",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListExperimentsResponse>(await this.callApi(params, req, runtime), new ListExperimentsResponse({}));
    } else {
      return $dara.cast<ListExperimentsResponse>(await this.execute(params, req, runtime), new ListExperimentsResponse({}));
    }

  }

  /**
   * 获取实验列表。
   * 
   * @param request - ListExperimentsRequest
   * @returns ListExperimentsResponse
   */
  async listExperiments(request: ListExperimentsRequest): Promise<ListExperimentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentsWithOptions(request, headers, runtime);
  }

  /**
   * 获取特征一致性检查配置列表。
   * 
   * @param request - ListFeatureConsistencyCheckJobConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureConsistencyCheckJobConfigsResponse
   */
  async listFeatureConsistencyCheckJobConfigsWithOptions(request: ListFeatureConsistencyCheckJobConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListFeatureConsistencyCheckJobConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureConsistencyCheckJobConfigs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFeatureConsistencyCheckJobConfigsResponse>(await this.callApi(params, req, runtime), new ListFeatureConsistencyCheckJobConfigsResponse({}));
    } else {
      return $dara.cast<ListFeatureConsistencyCheckJobConfigsResponse>(await this.execute(params, req, runtime), new ListFeatureConsistencyCheckJobConfigsResponse({}));
    }

  }

  /**
   * 获取特征一致性检查配置列表。
   * 
   * @param request - ListFeatureConsistencyCheckJobConfigsRequest
   * @returns ListFeatureConsistencyCheckJobConfigsResponse
   */
  async listFeatureConsistencyCheckJobConfigs(request: ListFeatureConsistencyCheckJobConfigsRequest): Promise<ListFeatureConsistencyCheckJobConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobConfigsWithOptions(request, headers, runtime);
  }

  /**
   * 获取特征一致性检查任务的特征报表/比对结果。
   * 
   * @param request - ListFeatureConsistencyCheckJobFeatureReportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureConsistencyCheckJobFeatureReportsResponse
   */
  async listFeatureConsistencyCheckJobFeatureReportsWithOptions(FeatureConsistencyCheckJobId: string, request: ListFeatureConsistencyCheckJobFeatureReportsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListFeatureConsistencyCheckJobFeatureReportsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logItemId)) {
      query["LogItemId"] = request.logItemId;
    }

    if (!$dara.isNull(request.logRequestId)) {
      query["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.logUserId)) {
      query["LogUserId"] = request.logUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureConsistencyCheckJobFeatureReports",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobId)}/featurereports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFeatureConsistencyCheckJobFeatureReportsResponse>(await this.callApi(params, req, runtime), new ListFeatureConsistencyCheckJobFeatureReportsResponse({}));
    } else {
      return $dara.cast<ListFeatureConsistencyCheckJobFeatureReportsResponse>(await this.execute(params, req, runtime), new ListFeatureConsistencyCheckJobFeatureReportsResponse({}));
    }

  }

  /**
   * 获取特征一致性检查任务的特征报表/比对结果。
   * 
   * @param request - ListFeatureConsistencyCheckJobFeatureReportsRequest
   * @returns ListFeatureConsistencyCheckJobFeatureReportsResponse
   */
  async listFeatureConsistencyCheckJobFeatureReports(FeatureConsistencyCheckJobId: string, request: ListFeatureConsistencyCheckJobFeatureReportsRequest): Promise<ListFeatureConsistencyCheckJobFeatureReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobFeatureReportsWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * 获取特征一致性检查任务分数报表/比对结果。
   * 
   * @param tmpReq - ListFeatureConsistencyCheckJobScoreReportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureConsistencyCheckJobScoreReportsResponse
   */
  async listFeatureConsistencyCheckJobScoreReportsWithOptions(FeatureConsistencyCheckJobId: string, tmpReq: ListFeatureConsistencyCheckJobScoreReportsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListFeatureConsistencyCheckJobScoreReportsResponse> {
    tmpReq.validate();
    let request = new ListFeatureConsistencyCheckJobScoreReportsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeRequestIds)) {
      request.excludeRequestIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeRequestIds, "ExcludeRequestIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeRequestIdsShrink)) {
      query["ExcludeRequestIds"] = request.excludeRequestIdsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureConsistencyCheckJobScoreReports",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobId)}/scorereports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFeatureConsistencyCheckJobScoreReportsResponse>(await this.callApi(params, req, runtime), new ListFeatureConsistencyCheckJobScoreReportsResponse({}));
    } else {
      return $dara.cast<ListFeatureConsistencyCheckJobScoreReportsResponse>(await this.execute(params, req, runtime), new ListFeatureConsistencyCheckJobScoreReportsResponse({}));
    }

  }

  /**
   * 获取特征一致性检查任务分数报表/比对结果。
   * 
   * @param request - ListFeatureConsistencyCheckJobScoreReportsRequest
   * @returns ListFeatureConsistencyCheckJobScoreReportsResponse
   */
  async listFeatureConsistencyCheckJobScoreReports(FeatureConsistencyCheckJobId: string, request: ListFeatureConsistencyCheckJobScoreReportsRequest): Promise<ListFeatureConsistencyCheckJobScoreReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobScoreReportsWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * 获取特征一致性检查任务列表。
   * 
   * @param request - ListFeatureConsistencyCheckJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureConsistencyCheckJobsResponse
   */
  async listFeatureConsistencyCheckJobsWithOptions(request: ListFeatureConsistencyCheckJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListFeatureConsistencyCheckJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureConsistencyCheckJobs",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFeatureConsistencyCheckJobsResponse>(await this.callApi(params, req, runtime), new ListFeatureConsistencyCheckJobsResponse({}));
    } else {
      return $dara.cast<ListFeatureConsistencyCheckJobsResponse>(await this.execute(params, req, runtime), new ListFeatureConsistencyCheckJobsResponse({}));
    }

  }

  /**
   * 获取特征一致性检查任务列表。
   * 
   * @param request - ListFeatureConsistencyCheckJobsRequest
   * @returns ListFeatureConsistencyCheckJobsResponse
   */
  async listFeatureConsistencyCheckJobs(request: ListFeatureConsistencyCheckJobsRequest): Promise<ListFeatureConsistencyCheckJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobsWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例下配置的资源列表。
   * 
   * @param request - ListInstanceResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResourcesResponse
   */
  async listInstanceResourcesWithOptions(InstanceId: string, request: ListInstanceResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstanceResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceResources",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceResourcesResponse>(await this.callApi(params, req, runtime), new ListInstanceResourcesResponse({}));
    } else {
      return $dara.cast<ListInstanceResourcesResponse>(await this.execute(params, req, runtime), new ListInstanceResourcesResponse({}));
    }

  }

  /**
   * 获取实例下配置的资源列表。
   * 
   * @param request - ListInstanceResourcesRequest
   * @returns ListInstanceResourcesResponse
   */
  async listInstanceResources(InstanceId: string, request: ListInstanceResourcesRequest): Promise<ListInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceResourcesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取推荐全链路深度定制开发平台实例信息列表。
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
    } else {
      return $dara.cast<ListInstancesResponse>(await this.execute(params, req, runtime), new ListInstancesResponse({}));
    }

  }

  /**
   * 获取推荐全链路深度定制开发平台实例信息列表。
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取实验室列表。
   * 
   * @param request - ListLaboratoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLaboratoriesResponse
   */
  async listLaboratoriesWithOptions(request: ListLaboratoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListLaboratoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLaboratories",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLaboratoriesResponse>(await this.callApi(params, req, runtime), new ListLaboratoriesResponse({}));
    } else {
      return $dara.cast<ListLaboratoriesResponse>(await this.execute(params, req, runtime), new ListLaboratoriesResponse({}));
    }

  }

  /**
   * 获取实验室列表。
   * 
   * @param request - ListLaboratoriesRequest
   * @returns ListLaboratoriesResponse
   */
  async listLaboratories(request: ListLaboratoriesRequest): Promise<ListLaboratoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLaboratoriesWithOptions(request, headers, runtime);
  }

  /**
   * 获取层列表。
   * 
   * @param request - ListLayersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLayersResponse
   */
  async listLayersWithOptions(request: ListLayersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListLayersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.laboratoryId)) {
      query["LaboratoryId"] = request.laboratoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLayers",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLayersResponse>(await this.callApi(params, req, runtime), new ListLayersResponse({}));
    } else {
      return $dara.cast<ListLayersResponse>(await this.execute(params, req, runtime), new ListLayersResponse({}));
    }

  }

  /**
   * 获取层列表。
   * 
   * @param request - ListLayersRequest
   * @returns ListLayersResponse
   */
  async listLayers(request: ListLayersRequest): Promise<ListLayersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayersWithOptions(request, headers, runtime);
  }

  /**
   * 获取参数列表。
   * 
   * @param request - ListParamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParamsResponse
   */
  async listParamsWithOptions(request: ListParamsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListParamsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListParams",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListParamsResponse>(await this.callApi(params, req, runtime), new ListParamsResponse({}));
    } else {
      return $dara.cast<ListParamsResponse>(await this.execute(params, req, runtime), new ListParamsResponse({}));
    }

  }

  /**
   * 获取参数列表。
   * 
   * @param request - ListParamsRequest
   * @returns ListParamsResponse
   */
  async listParams(request: ListParamsRequest): Promise<ListParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParamsWithOptions(request, headers, runtime);
  }

  /**
   * 获取资源规则列表
   * 
   * @param request - ListResourceRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceRulesResponse
   */
  async listResourceRulesWithOptions(request: ListResourceRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourceRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceRuleId)) {
      query["ResourceRuleId"] = request.resourceRuleId;
    }

    if (!$dara.isNull(request.resourceRuleName)) {
      query["ResourceRuleName"] = request.resourceRuleName;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceRules",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourceRulesResponse>(await this.callApi(params, req, runtime), new ListResourceRulesResponse({}));
    } else {
      return $dara.cast<ListResourceRulesResponse>(await this.execute(params, req, runtime), new ListResourceRulesResponse({}));
    }

  }

  /**
   * 获取资源规则列表
   * 
   * @param request - ListResourceRulesRequest
   * @returns ListResourceRulesResponse
   */
  async listResourceRules(request: ListResourceRulesRequest): Promise<ListResourceRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceRulesWithOptions(request, headers, runtime);
  }

  /**
   * 获取场景列表
   * 
   * @param request - ListScenesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScenesResponse
   */
  async listScenesWithOptions(request: ListScenesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListScenesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScenes",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListScenesResponse>(await this.callApi(params, req, runtime), new ListScenesResponse({}));
    } else {
      return $dara.cast<ListScenesResponse>(await this.execute(params, req, runtime), new ListScenesResponse({}));
    }

  }

  /**
   * 获取场景列表
   * 
   * @param request - ListScenesRequest
   * @returns ListScenesResponse
   */
  async listScenes(request: ListScenesRequest): Promise<ListScenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScenesWithOptions(request, headers, runtime);
  }

  /**
   * 获取人群下的所有子人群。
   * 
   * @param request - ListSubCrowdsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubCrowdsResponse
   */
  async listSubCrowdsWithOptions(CrowdId: string, request: ListSubCrowdsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListSubCrowdsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubCrowds",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}/subcrowds`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSubCrowdsResponse>(await this.callApi(params, req, runtime), new ListSubCrowdsResponse({}));
    } else {
      return $dara.cast<ListSubCrowdsResponse>(await this.execute(params, req, runtime), new ListSubCrowdsResponse({}));
    }

  }

  /**
   * 获取人群下的所有子人群。
   * 
   * @param request - ListSubCrowdsRequest
   * @returns ListSubCrowdsResponse
   */
  async listSubCrowds(CrowdId: string, request: ListSubCrowdsRequest): Promise<ListSubCrowdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubCrowdsWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * 获取数据表列表。
   * 
   * @param request - ListTableMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTableMetasResponse
   */
  async listTableMetasWithOptions(request: ListTableMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTableMetasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.module)) {
      query["Module"] = request.module;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTableMetas",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTableMetasResponse>(await this.callApi(params, req, runtime), new ListTableMetasResponse({}));
    } else {
      return $dara.cast<ListTableMetasResponse>(await this.execute(params, req, runtime), new ListTableMetasResponse({}));
    }

  }

  /**
   * 获取数据表列表。
   * 
   * @param request - ListTableMetasRequest
   * @returns ListTableMetasResponse
   */
  async listTableMetas(request: ListTableMetasRequest): Promise<ListTableMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableMetasWithOptions(request, headers, runtime);
  }

  /**
   * 获取流量调控任务流量变更的历史列表
   * 
   * @param request - ListTrafficControlTargetTrafficHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrafficControlTargetTrafficHistoryResponse
   */
  async listTrafficControlTargetTrafficHistoryWithOptions(TrafficControlTargetId: string, request: ListTrafficControlTargetTrafficHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTrafficControlTargetTrafficHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.experimentGroupId)) {
      query["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!$dara.isNull(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrafficControlTargetTrafficHistory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/traffichistories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTrafficControlTargetTrafficHistoryResponse>(await this.callApi(params, req, runtime), new ListTrafficControlTargetTrafficHistoryResponse({}));
    } else {
      return $dara.cast<ListTrafficControlTargetTrafficHistoryResponse>(await this.execute(params, req, runtime), new ListTrafficControlTargetTrafficHistoryResponse({}));
    }

  }

  /**
   * 获取流量调控任务流量变更的历史列表
   * 
   * @param request - ListTrafficControlTargetTrafficHistoryRequest
   * @returns ListTrafficControlTargetTrafficHistoryResponse
   */
  async listTrafficControlTargetTrafficHistory(TrafficControlTargetId: string, request: ListTrafficControlTargetTrafficHistoryRequest): Promise<ListTrafficControlTargetTrafficHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrafficControlTargetTrafficHistoryWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * 获取流量调控列表
   * 
   * @param request - ListTrafficControlTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrafficControlTasksResponse
   */
  async listTrafficControlTasksWithOptions(request: ListTrafficControlTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTrafficControlTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.controlTargetFilter)) {
      query["ControlTargetFilter"] = request.controlTargetFilter;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.trafficControlTaskId)) {
      query["TrafficControlTaskId"] = request.trafficControlTaskId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrafficControlTasks",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTrafficControlTasksResponse>(await this.callApi(params, req, runtime), new ListTrafficControlTasksResponse({}));
    } else {
      return $dara.cast<ListTrafficControlTasksResponse>(await this.execute(params, req, runtime), new ListTrafficControlTasksResponse({}));
    }

  }

  /**
   * 获取流量调控列表
   * 
   * @param request - ListTrafficControlTasksRequest
   * @returns ListTrafficControlTasksResponse
   */
  async listTrafficControlTasks(request: ListTrafficControlTasksRequest): Promise<ListTrafficControlTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrafficControlTasksWithOptions(request, headers, runtime);
  }

  /**
   * 上线实验。
   * 
   * @param request - OfflineExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineExperimentResponse
   */
  async offlineExperimentWithOptions(ExperimentId: string, request: OfflineExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<OfflineExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OfflineExperimentResponse>(await this.callApi(params, req, runtime), new OfflineExperimentResponse({}));
    } else {
      return $dara.cast<OfflineExperimentResponse>(await this.execute(params, req, runtime), new OfflineExperimentResponse({}));
    }

  }

  /**
   * 上线实验。
   * 
   * @param request - OfflineExperimentRequest
   * @returns OfflineExperimentResponse
   */
  async offlineExperiment(ExperimentId: string, request: OfflineExperimentRequest): Promise<OfflineExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 下线实验组。
   * 
   * @param request - OfflineExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineExperimentGroupResponse
   */
  async offlineExperimentGroupWithOptions(ExperimentGroupId: string, request: OfflineExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<OfflineExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OfflineExperimentGroupResponse>(await this.callApi(params, req, runtime), new OfflineExperimentGroupResponse({}));
    } else {
      return $dara.cast<OfflineExperimentGroupResponse>(await this.execute(params, req, runtime), new OfflineExperimentGroupResponse({}));
    }

  }

  /**
   * 下线实验组。
   * 
   * @param request - OfflineExperimentGroupRequest
   * @returns OfflineExperimentGroupResponse
   */
  async offlineExperimentGroup(ExperimentGroupId: string, request: OfflineExperimentGroupRequest): Promise<OfflineExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * 下线实验室。
   * 
   * @param request - OfflineLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineLaboratoryResponse
   */
  async offlineLaboratoryWithOptions(LaboratoryId: string, request: OfflineLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<OfflineLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OfflineLaboratoryResponse>(await this.callApi(params, req, runtime), new OfflineLaboratoryResponse({}));
    } else {
      return $dara.cast<OfflineLaboratoryResponse>(await this.execute(params, req, runtime), new OfflineLaboratoryResponse({}));
    }

  }

  /**
   * 下线实验室。
   * 
   * @param request - OfflineLaboratoryRequest
   * @returns OfflineLaboratoryResponse
   */
  async offlineLaboratory(LaboratoryId: string, request: OfflineLaboratoryRequest): Promise<OfflineLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * 上线实验
   * 
   * @param request - OnlineExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineExperimentResponse
   */
  async onlineExperimentWithOptions(ExperimentId: string, request: OnlineExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<OnlineExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OnlineExperimentResponse>(await this.callApi(params, req, runtime), new OnlineExperimentResponse({}));
    } else {
      return $dara.cast<OnlineExperimentResponse>(await this.execute(params, req, runtime), new OnlineExperimentResponse({}));
    }

  }

  /**
   * 上线实验
   * 
   * @param request - OnlineExperimentRequest
   * @returns OnlineExperimentResponse
   */
  async onlineExperiment(ExperimentId: string, request: OnlineExperimentRequest): Promise<OnlineExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 上线实验组。
   * 
   * @param request - OnlineExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineExperimentGroupResponse
   */
  async onlineExperimentGroupWithOptions(ExperimentGroupId: string, request: OnlineExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<OnlineExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OnlineExperimentGroupResponse>(await this.callApi(params, req, runtime), new OnlineExperimentGroupResponse({}));
    } else {
      return $dara.cast<OnlineExperimentGroupResponse>(await this.execute(params, req, runtime), new OnlineExperimentGroupResponse({}));
    }

  }

  /**
   * 上线实验组。
   * 
   * @param request - OnlineExperimentGroupRequest
   * @returns OnlineExperimentGroupResponse
   */
  async onlineExperimentGroup(ExperimentGroupId: string, request: OnlineExperimentGroupRequest): Promise<OnlineExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * 上线实验室。
   * 
   * @param request - OnlineLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineLaboratoryResponse
   */
  async onlineLaboratoryWithOptions(LaboratoryId: string, request: OnlineLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<OnlineLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OnlineLaboratoryResponse>(await this.callApi(params, req, runtime), new OnlineLaboratoryResponse({}));
    } else {
      return $dara.cast<OnlineLaboratoryResponse>(await this.execute(params, req, runtime), new OnlineLaboratoryResponse({}));
    }

  }

  /**
   * 上线实验室。
   * 
   * @param request - OnlineLaboratoryRequest
   * @returns OnlineLaboratoryResponse
   */
  async onlineLaboratory(LaboratoryId: string, request: OnlineLaboratoryRequest): Promise<OnlineLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * 推全。
   * 
   * @param request - PushAllExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushAllExperimentResponse
   */
  async pushAllExperimentWithOptions(ExperimentId: string, request: PushAllExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PushAllExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushAllExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/action/pushall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushAllExperimentResponse>(await this.callApi(params, req, runtime), new PushAllExperimentResponse({}));
    } else {
      return $dara.cast<PushAllExperimentResponse>(await this.execute(params, req, runtime), new PushAllExperimentResponse({}));
    }

  }

  /**
   * 推全。
   * 
   * @param request - PushAllExperimentRequest
   * @returns PushAllExperimentResponse
   */
  async pushAllExperiment(ExperimentId: string, request: PushAllExperimentRequest): Promise<PushAllExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushAllExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 推送指标到指定资源规则
   * 
   * @param tmpReq - PushResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushResourceRuleResponse
   */
  async pushResourceRuleWithOptions(ResourceRuleId: string, tmpReq: PushResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PushResourceRuleResponse> {
    tmpReq.validate();
    let request = new PushResourceRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metricInfo)) {
      request.metricInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricInfo, "MetricInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricInfoShrink)) {
      query["MetricInfo"] = request.metricInfoShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/action/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushResourceRuleResponse>(await this.callApi(params, req, runtime), new PushResourceRuleResponse({}));
    } else {
      return $dara.cast<PushResourceRuleResponse>(await this.execute(params, req, runtime), new PushResourceRuleResponse({}));
    }

  }

  /**
   * 推送指标到指定资源规则
   * 
   * @param request - PushResourceRuleRequest
   * @returns PushResourceRuleResponse
   */
  async pushResourceRule(ResourceRuleId: string, request: PushResourceRuleRequest): Promise<PushResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 查询流量调控目标的单品调控报表详情。
   * 
   * @param request - QueryTrafficControlTargetItemReportDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTrafficControlTargetItemReportDetailResponse
   */
  async queryTrafficControlTargetItemReportDetailWithOptions(TrafficControlTargetId: string, request: QueryTrafficControlTargetItemReportDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryTrafficControlTargetItemReportDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["Date"] = request.date;
    }

    if (!$dara.isNull(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTrafficControlTargetItemReportDetail",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/itemcontrolreportdetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryTrafficControlTargetItemReportDetailResponse>(await this.callApi(params, req, runtime), new QueryTrafficControlTargetItemReportDetailResponse({}));
    } else {
      return $dara.cast<QueryTrafficControlTargetItemReportDetailResponse>(await this.execute(params, req, runtime), new QueryTrafficControlTargetItemReportDetailResponse({}));
    }

  }

  /**
   * 查询流量调控目标的单品调控报表详情。
   * 
   * @param request - QueryTrafficControlTargetItemReportDetailRequest
   * @returns QueryTrafficControlTargetItemReportDetailResponse
   */
  async queryTrafficControlTargetItemReportDetail(TrafficControlTargetId: string, request: QueryTrafficControlTargetItemReportDetailRequest): Promise<QueryTrafficControlTargetItemReportDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTrafficControlTargetItemReportDetailWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * 发布流量调控任务
   * 
   * @param request - ReleaseTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseTrafficControlTaskResponse
   */
  async releaseTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: ReleaseTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ReleaseTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/release`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new ReleaseTrafficControlTaskResponse({}));
    } else {
      return $dara.cast<ReleaseTrafficControlTaskResponse>(await this.execute(params, req, runtime), new ReleaseTrafficControlTaskResponse({}));
    }

  }

  /**
   * 发布流量调控任务
   * 
   * @param request - ReleaseTrafficControlTaskRequest
   * @returns ReleaseTrafficControlTaskResponse
   */
  async releaseTrafficControlTask(TrafficControlTaskId: string, request: ReleaseTrafficControlTaskRequest): Promise<ReleaseTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 对指标组进行报表。
   * 
   * @param request - ReportABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportABMetricGroupResponse
   */
  async reportABMetricGroupWithOptions(ABMetricGroupId: string, request: ReportABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ReportABMetricGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseExperimentId)) {
      body["BaseExperimentId"] = request.baseExperimentId;
    }

    if (!$dara.isNull(request.dimensionFields)) {
      body["DimensionFields"] = request.dimensionFields;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.experimentGroupId)) {
      body["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!$dara.isNull(request.experimentIds)) {
      body["ExperimentIds"] = request.experimentIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.timeStatisticsMethod)) {
      body["TimeStatisticsMethod"] = request.timeStatisticsMethod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${$dara.URL.percentEncode(ABMetricGroupId)}/action/report`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReportABMetricGroupResponse>(await this.callApi(params, req, runtime), new ReportABMetricGroupResponse({}));
    } else {
      return $dara.cast<ReportABMetricGroupResponse>(await this.execute(params, req, runtime), new ReportABMetricGroupResponse({}));
    }

  }

  /**
   * 对指标组进行报表。
   * 
   * @param request - ReportABMetricGroupRequest
   * @returns ReportABMetricGroupResponse
   */
  async reportABMetricGroup(ABMetricGroupId: string, request: ReportABMetricGroupRequest): Promise<ReportABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reportABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * 拆分流量调控目标
   * 
   * @param request - SplitTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SplitTrafficControlTargetResponse
   */
  async splitTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: SplitTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SplitTrafficControlTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.setPoints)) {
      body["SetPoints"] = request.setPoints;
    }

    if (!$dara.isNull(request.setValues)) {
      body["SetValues"] = request.setValues;
    }

    if (!$dara.isNull(request.timePoints)) {
      body["TimePoints"] = request.timePoints;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SplitTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/action/split`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SplitTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new SplitTrafficControlTargetResponse({}));
    } else {
      return $dara.cast<SplitTrafficControlTargetResponse>(await this.execute(params, req, runtime), new SplitTrafficControlTargetResponse({}));
    }

  }

  /**
   * 拆分流量调控目标
   * 
   * @param request - SplitTrafficControlTargetRequest
   * @returns SplitTrafficControlTargetResponse
   */
  async splitTrafficControlTarget(TrafficControlTargetId: string, request: SplitTrafficControlTargetRequest): Promise<SplitTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.splitTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * 开启流量调控目标
   * 
   * @param request - StartTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTrafficControlTargetResponse
   */
  async startTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: StartTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartTrafficControlTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/action/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new StartTrafficControlTargetResponse({}));
    } else {
      return $dara.cast<StartTrafficControlTargetResponse>(await this.execute(params, req, runtime), new StartTrafficControlTargetResponse({}));
    }

  }

  /**
   * 开启流量调控目标
   * 
   * @param request - StartTrafficControlTargetRequest
   * @returns StartTrafficControlTargetResponse
   */
  async startTrafficControlTarget(TrafficControlTargetId: string, request: StartTrafficControlTargetRequest): Promise<StartTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * 开启流量调控任务
   * 
   * @param request - StartTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTrafficControlTaskResponse
   */
  async startTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: StartTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new StartTrafficControlTaskResponse({}));
    } else {
      return $dara.cast<StartTrafficControlTaskResponse>(await this.execute(params, req, runtime), new StartTrafficControlTaskResponse({}));
    }

  }

  /**
   * 开启流量调控任务
   * 
   * @param request - StartTrafficControlTaskRequest
   * @returns StartTrafficControlTaskResponse
   */
  async startTrafficControlTask(TrafficControlTaskId: string, request: StartTrafficControlTaskRequest): Promise<StartTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 停止流量调控目标
   * 
   * @param request - StopTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTrafficControlTargetResponse
   */
  async stopTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: StopTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopTrafficControlTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new StopTrafficControlTargetResponse({}));
    } else {
      return $dara.cast<StopTrafficControlTargetResponse>(await this.execute(params, req, runtime), new StopTrafficControlTargetResponse({}));
    }

  }

  /**
   * 停止流量调控目标
   * 
   * @param request - StopTrafficControlTargetRequest
   * @returns StopTrafficControlTargetResponse
   */
  async stopTrafficControlTarget(TrafficControlTargetId: string, request: StopTrafficControlTargetRequest): Promise<StopTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * 停止流量调控任务
   * 
   * @param request - StopTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTrafficControlTaskResponse
   */
  async stopTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: StopTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopTrafficControlTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new StopTrafficControlTaskResponse({}));
    } else {
      return $dara.cast<StopTrafficControlTaskResponse>(await this.execute(params, req, runtime), new StopTrafficControlTaskResponse({}));
    }

  }

  /**
   * 停止流量调控任务
   * 
   * @param request - StopTrafficControlTaskRequest
   * @returns StopTrafficControlTaskResponse
   */
  async stopTrafficControlTask(TrafficControlTaskId: string, request: StopTrafficControlTaskRequest): Promise<StopTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 同步特征一致性检测任务重放日志。
   * 
   * @param request - SyncFeatureConsistencyCheckJobReplayLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncFeatureConsistencyCheckJobReplayLogResponse
   */
  async syncFeatureConsistencyCheckJobReplayLogWithOptions(request: SyncFeatureConsistencyCheckJobReplayLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SyncFeatureConsistencyCheckJobReplayLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contextFeatures)) {
      body["ContextFeatures"] = request.contextFeatures;
    }

    if (!$dara.isNull(request.featureConsistencyCheckJobConfigId)) {
      body["FeatureConsistencyCheckJobConfigId"] = request.featureConsistencyCheckJobConfigId;
    }

    if (!$dara.isNull(request.generatedFeatures)) {
      body["GeneratedFeatures"] = request.generatedFeatures;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logItemId)) {
      body["LogItemId"] = request.logItemId;
    }

    if (!$dara.isNull(request.logRequestId)) {
      body["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.logRequestTime)) {
      body["LogRequestTime"] = request.logRequestTime;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.rawFeatures)) {
      body["RawFeatures"] = request.rawFeatures;
    }

    if (!$dara.isNull(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncFeatureConsistencyCheckJobReplayLog",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/action/syncreplaylog`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SyncFeatureConsistencyCheckJobReplayLogResponse>(await this.callApi(params, req, runtime), new SyncFeatureConsistencyCheckJobReplayLogResponse({}));
    } else {
      return $dara.cast<SyncFeatureConsistencyCheckJobReplayLogResponse>(await this.execute(params, req, runtime), new SyncFeatureConsistencyCheckJobReplayLogResponse({}));
    }

  }

  /**
   * 同步特征一致性检测任务重放日志。
   * 
   * @param request - SyncFeatureConsistencyCheckJobReplayLogRequest
   * @returns SyncFeatureConsistencyCheckJobReplayLogResponse
   */
  async syncFeatureConsistencyCheckJobReplayLog(request: SyncFeatureConsistencyCheckJobReplayLogRequest): Promise<SyncFeatureConsistencyCheckJobReplayLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncFeatureConsistencyCheckJobReplayLogWithOptions(request, headers, runtime);
  }

  /**
   * 取消指定特征一致性检查正在运行中的任务。
   * 
   * @param request - TerminateFeatureConsistencyCheckJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateFeatureConsistencyCheckJobResponse
   */
  async terminateFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId: string, request: TerminateFeatureConsistencyCheckJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TerminateFeatureConsistencyCheckJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateFeatureConsistencyCheckJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobId)}/action/terminate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TerminateFeatureConsistencyCheckJobResponse>(await this.callApi(params, req, runtime), new TerminateFeatureConsistencyCheckJobResponse({}));
    } else {
      return $dara.cast<TerminateFeatureConsistencyCheckJobResponse>(await this.execute(params, req, runtime), new TerminateFeatureConsistencyCheckJobResponse({}));
    }

  }

  /**
   * 取消指定特征一致性检查正在运行中的任务。
   * 
   * @param request - TerminateFeatureConsistencyCheckJobRequest
   * @returns TerminateFeatureConsistencyCheckJobResponse
   */
  async terminateFeatureConsistencyCheckJob(FeatureConsistencyCheckJobId: string, request: TerminateFeatureConsistencyCheckJobRequest): Promise<TerminateFeatureConsistencyCheckJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminateFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * 更新AB Test实验指标。
   * 
   * @param request - UpdateABMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABMetricResponse
   */
  async updateABMetricWithOptions(ABMetricId: string, request: UpdateABMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateABMetricResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.leftMetricId)) {
      body["LeftMetricId"] = request.leftMetricId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.resultResourceId)) {
      body["ResultResourceId"] = request.resultResourceId;
    }

    if (!$dara.isNull(request.rightMetricId)) {
      body["RightMetricId"] = request.rightMetricId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.statisticsCycle)) {
      body["StatisticsCycle"] = request.statisticsCycle;
    }

    if (!$dara.isNull(request.tableMetaId)) {
      body["TableMetaId"] = request.tableMetaId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics/${$dara.URL.percentEncode(ABMetricId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateABMetricResponse>(await this.callApi(params, req, runtime), new UpdateABMetricResponse({}));
    } else {
      return $dara.cast<UpdateABMetricResponse>(await this.execute(params, req, runtime), new UpdateABMetricResponse({}));
    }

  }

  /**
   * 更新AB Test实验指标。
   * 
   * @param request - UpdateABMetricRequest
   * @returns UpdateABMetricResponse
   */
  async updateABMetric(ABMetricId: string, request: UpdateABMetricRequest): Promise<UpdateABMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

  /**
   * 更新AB test实验指标组。
   * 
   * @param request - UpdateABMetricGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABMetricGroupResponse
   */
  async updateABMetricGroupWithOptions(ABMetricGroupId: string, request: UpdateABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateABMetricGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ABMetricIds)) {
      body["ABMetricIds"] = request.ABMetricIds;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${$dara.URL.percentEncode(ABMetricGroupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateABMetricGroupResponse>(await this.callApi(params, req, runtime), new UpdateABMetricGroupResponse({}));
    } else {
      return $dara.cast<UpdateABMetricGroupResponse>(await this.execute(params, req, runtime), new UpdateABMetricGroupResponse({}));
    }

  }

  /**
   * 更新AB test实验指标组。
   * 
   * @param request - UpdateABMetricGroupRequest
   * @returns UpdateABMetricGroupResponse
   */
  async updateABMetricGroup(ABMetricGroupId: string, request: UpdateABMetricGroupRequest): Promise<UpdateABMetricGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * 更新指定人群。
   * 
   * @param request - UpdateCrowdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCrowdResponse
   */
  async updateCrowdWithOptions(CrowdId: string, request: UpdateCrowdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateCrowdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${$dara.URL.percentEncode(CrowdId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCrowdResponse>(await this.callApi(params, req, runtime), new UpdateCrowdResponse({}));
    } else {
      return $dara.cast<UpdateCrowdResponse>(await this.execute(params, req, runtime), new UpdateCrowdResponse({}));
    }

  }

  /**
   * 更新指定人群。
   * 
   * @param request - UpdateCrowdRequest
   * @returns UpdateCrowdResponse
   */
  async updateCrowd(CrowdId: string, request: UpdateCrowdRequest): Promise<UpdateCrowdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCrowdWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * 更新引擎配置。
   * 
   * @param request - UpdateEngineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEngineConfigResponse
   */
  async updateEngineConfigWithOptions(EngineConfigId: string, request: UpdateEngineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateEngineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configValue)) {
      body["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEngineConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/engineconfigs/${$dara.URL.percentEncode(EngineConfigId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateEngineConfigResponse>(await this.callApi(params, req, runtime), new UpdateEngineConfigResponse({}));
    } else {
      return $dara.cast<UpdateEngineConfigResponse>(await this.execute(params, req, runtime), new UpdateEngineConfigResponse({}));
    }

  }

  /**
   * 更新引擎配置。
   * 
   * @param request - UpdateEngineConfigRequest
   * @returns UpdateEngineConfigResponse
   */
  async updateEngineConfig(EngineConfigId: string, request: UpdateEngineConfigRequest): Promise<UpdateEngineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEngineConfigWithOptions(EngineConfigId, request, headers, runtime);
  }

  /**
   * 更新实验。
   * 
   * @param request - UpdateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentResponse
   */
  async updateExperimentWithOptions(ExperimentId: string, request: UpdateExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.flowPercent)) {
      body["FlowPercent"] = request.flowPercent;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateExperimentResponse>(await this.callApi(params, req, runtime), new UpdateExperimentResponse({}));
    } else {
      return $dara.cast<UpdateExperimentResponse>(await this.execute(params, req, runtime), new UpdateExperimentResponse({}));
    }

  }

  /**
   * 更新实验。
   * 
   * @param request - UpdateExperimentRequest
   * @returns UpdateExperimentResponse
   */
  async updateExperiment(ExperimentId: string, request: UpdateExperimentRequest): Promise<UpdateExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 更新指定实验组。
   * 
   * @param request - UpdateExperimentGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentGroupResponse
   */
  async updateExperimentGroupWithOptions(ExperimentGroupId: string, request: UpdateExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateExperimentGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.crowdId)) {
      body["CrowdId"] = request.crowdId;
    }

    if (!$dara.isNull(request.crowdTargetType)) {
      body["CrowdTargetType"] = request.crowdTargetType;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.distributionTimeDuration)) {
      body["DistributionTimeDuration"] = request.distributionTimeDuration;
    }

    if (!$dara.isNull(request.distributionType)) {
      body["DistributionType"] = request.distributionType;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.needAA)) {
      body["NeedAA"] = request.needAA;
    }

    if (!$dara.isNull(request.randomFlow)) {
      body["RandomFlow"] = request.randomFlow;
    }

    if (!$dara.isNull(request.reservcedBuckets)) {
      body["ReservcedBuckets"] = request.reservcedBuckets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${$dara.URL.percentEncode(ExperimentGroupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateExperimentGroupResponse>(await this.callApi(params, req, runtime), new UpdateExperimentGroupResponse({}));
    } else {
      return $dara.cast<UpdateExperimentGroupResponse>(await this.execute(params, req, runtime), new UpdateExperimentGroupResponse({}));
    }

  }

  /**
   * 更新指定实验组。
   * 
   * @param request - UpdateExperimentGroupRequest
   * @returns UpdateExperimentGroupResponse
   */
  async updateExperimentGroup(ExperimentGroupId: string, request: UpdateExperimentGroupRequest): Promise<UpdateExperimentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * 更新特征一致性检查配置信息。
   * 
   * @param request - UpdateFeatureConsistencyCheckJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFeatureConsistencyCheckJobConfigResponse
   */
  async updateFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId: string, request: UpdateFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateFeatureConsistencyCheckJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.compareFeature)) {
      body["CompareFeature"] = request.compareFeature;
    }

    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetMountPath)) {
      body["DatasetMountPath"] = request.datasetMountPath;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.datasetType)) {
      body["DatasetType"] = request.datasetType;
    }

    if (!$dara.isNull(request.datasetUri)) {
      body["DatasetUri"] = request.datasetUri;
    }

    if (!$dara.isNull(request.defaultRoute)) {
      body["DefaultRoute"] = request.defaultRoute;
    }

    if (!$dara.isNull(request.easServiceName)) {
      body["EasServiceName"] = request.easServiceName;
    }

    if (!$dara.isNull(request.easyRecPackagePath)) {
      body["EasyRecPackagePath"] = request.easyRecPackagePath;
    }

    if (!$dara.isNull(request.easyRecVersion)) {
      body["EasyRecVersion"] = request.easyRecVersion;
    }

    if (!$dara.isNull(request.featureDisplayExclude)) {
      body["FeatureDisplayExclude"] = request.featureDisplayExclude;
    }

    if (!$dara.isNull(request.featureLandingResourceId)) {
      body["FeatureLandingResourceId"] = request.featureLandingResourceId;
    }

    if (!$dara.isNull(request.featurePriority)) {
      body["FeaturePriority"] = request.featurePriority;
    }

    if (!$dara.isNull(request.featureStoreItemId)) {
      body["FeatureStoreItemId"] = request.featureStoreItemId;
    }

    if (!$dara.isNull(request.featureStoreModelId)) {
      body["FeatureStoreModelId"] = request.featureStoreModelId;
    }

    if (!$dara.isNull(request.featureStoreProjectId)) {
      body["FeatureStoreProjectId"] = request.featureStoreProjectId;
    }

    if (!$dara.isNull(request.featureStoreProjectName)) {
      body["FeatureStoreProjectName"] = request.featureStoreProjectName;
    }

    if (!$dara.isNull(request.featureStoreSeqFeatureView)) {
      body["FeatureStoreSeqFeatureView"] = request.featureStoreSeqFeatureView;
    }

    if (!$dara.isNull(request.featureStoreUserId)) {
      body["FeatureStoreUserId"] = request.featureStoreUserId;
    }

    if (!$dara.isNull(request.fgJarVersion)) {
      body["FgJarVersion"] = request.fgJarVersion;
    }

    if (!$dara.isNull(request.fgJsonFileName)) {
      body["FgJsonFileName"] = request.fgJsonFileName;
    }

    if (!$dara.isNull(request.generateZip)) {
      body["GenerateZip"] = request.generateZip;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isUseFeatureStore)) {
      body["IsUseFeatureStore"] = request.isUseFeatureStore;
    }

    if (!$dara.isNull(request.itemIdField)) {
      body["ItemIdField"] = request.itemIdField;
    }

    if (!$dara.isNull(request.itemTable)) {
      body["ItemTable"] = request.itemTable;
    }

    if (!$dara.isNull(request.itemTablePartitionField)) {
      body["ItemTablePartitionField"] = request.itemTablePartitionField;
    }

    if (!$dara.isNull(request.itemTablePartitionFieldFormat)) {
      body["ItemTablePartitionFieldFormat"] = request.itemTablePartitionFieldFormat;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossResourceId)) {
      body["OssResourceId"] = request.ossResourceId;
    }

    if (!$dara.isNull(request.predictWorkerCount)) {
      body["PredictWorkerCount"] = request.predictWorkerCount;
    }

    if (!$dara.isNull(request.predictWorkerCpu)) {
      body["PredictWorkerCpu"] = request.predictWorkerCpu;
    }

    if (!$dara.isNull(request.predictWorkerMemory)) {
      body["PredictWorkerMemory"] = request.predictWorkerMemory;
    }

    if (!$dara.isNull(request.sampleRate)) {
      body["SampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.switchId)) {
      body["SwitchId"] = request.switchId;
    }

    if (!$dara.isNull(request.userIdField)) {
      body["UserIdField"] = request.userIdField;
    }

    if (!$dara.isNull(request.userTable)) {
      body["UserTable"] = request.userTable;
    }

    if (!$dara.isNull(request.userTablePartitionField)) {
      body["UserTablePartitionField"] = request.userTablePartitionField;
    }

    if (!$dara.isNull(request.userTablePartitionFieldFormat)) {
      body["UserTablePartitionFieldFormat"] = request.userTablePartitionFieldFormat;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.workflowName)) {
      body["WorkflowName"] = request.workflowName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs/${$dara.URL.percentEncode(FeatureConsistencyCheckJobConfigId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new UpdateFeatureConsistencyCheckJobConfigResponse({}));
    } else {
      return $dara.cast<UpdateFeatureConsistencyCheckJobConfigResponse>(await this.execute(params, req, runtime), new UpdateFeatureConsistencyCheckJobConfigResponse({}));
    }

  }

  /**
   * 更新特征一致性检查配置信息。
   * 
   * @param request - UpdateFeatureConsistencyCheckJobConfigRequest
   * @returns UpdateFeatureConsistencyCheckJobConfigResponse
   */
  async updateFeatureConsistencyCheckJobConfig(FeatureConsistencyCheckJobConfigId: string, request: UpdateFeatureConsistencyCheckJobConfigRequest): Promise<UpdateFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

  /**
   * 更新指定实例下指定资源的信息。
   * 
   * @param request - UpdateInstanceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResourceResponse
   */
  async updateInstanceResourceWithOptions(InstanceId: string, ResourceId: string, request: UpdateInstanceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/resources/${$dara.URL.percentEncode(ResourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceResourceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResourceResponse({}));
    } else {
      return $dara.cast<UpdateInstanceResourceResponse>(await this.execute(params, req, runtime), new UpdateInstanceResourceResponse({}));
    }

  }

  /**
   * 更新指定实例下指定资源的信息。
   * 
   * @param request - UpdateInstanceResourceRequest
   * @returns UpdateInstanceResourceResponse
   */
  async updateInstanceResource(InstanceId: string, ResourceId: string, request: UpdateInstanceResourceRequest): Promise<UpdateInstanceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceResourceWithOptions(InstanceId, ResourceId, request, headers, runtime);
  }

  /**
   * 更新实验室。
   * 
   * @param request - UpdateLaboratoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLaboratoryResponse
   */
  async updateLaboratoryWithOptions(LaboratoryId: string, request: UpdateLaboratoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateLaboratoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bucketCount)) {
      body["BucketCount"] = request.bucketCount;
    }

    if (!$dara.isNull(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!$dara.isNull(request.buckets)) {
      body["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!$dara.isNull(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${$dara.URL.percentEncode(LaboratoryId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateLaboratoryResponse>(await this.callApi(params, req, runtime), new UpdateLaboratoryResponse({}));
    } else {
      return $dara.cast<UpdateLaboratoryResponse>(await this.execute(params, req, runtime), new UpdateLaboratoryResponse({}));
    }

  }

  /**
   * 更新实验室。
   * 
   * @param request - UpdateLaboratoryRequest
   * @returns UpdateLaboratoryResponse
   */
  async updateLaboratory(LaboratoryId: string, request: UpdateLaboratoryRequest): Promise<UpdateLaboratoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * 更新层。
   * 
   * @param request - UpdateLayerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLayerResponse
   */
  async updateLayerWithOptions(LayerId: string, request: UpdateLayerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateLayerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${$dara.URL.percentEncode(LayerId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateLayerResponse>(await this.callApi(params, req, runtime), new UpdateLayerResponse({}));
    } else {
      return $dara.cast<UpdateLayerResponse>(await this.execute(params, req, runtime), new UpdateLayerResponse({}));
    }

  }

  /**
   * 更新层。
   * 
   * @param request - UpdateLayerRequest
   * @returns UpdateLayerResponse
   */
  async updateLayer(LayerId: string, request: UpdateLayerRequest): Promise<UpdateLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * 更新参数。
   * 
   * @param request - UpdateParamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateParamResponse
   */
  async updateParamWithOptions(ParamId: string, request: UpdateParamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateParamResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateParam",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params/${$dara.URL.percentEncode(ParamId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateParamResponse>(await this.callApi(params, req, runtime), new UpdateParamResponse({}));
    } else {
      return $dara.cast<UpdateParamResponse>(await this.execute(params, req, runtime), new UpdateParamResponse({}));
    }

  }

  /**
   * 更新参数。
   * 
   * @param request - UpdateParamRequest
   * @returns UpdateParamResponse
   */
  async updateParam(ParamId: string, request: UpdateParamRequest): Promise<UpdateParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateParamWithOptions(ParamId, request, headers, runtime);
  }

  /**
   * 获取资源规则列表
   * 
   * @param request - UpdateResourceRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceRuleResponse
   */
  async updateResourceRuleWithOptions(ResourceRuleId: string, request: UpdateResourceRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateResourceRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricOperationType)) {
      body["MetricOperationType"] = request.metricOperationType;
    }

    if (!$dara.isNull(request.metricPullInfo)) {
      body["MetricPullInfo"] = request.metricPullInfo;
    }

    if (!$dara.isNull(request.metricPullPeriod)) {
      body["MetricPullPeriod"] = request.metricPullPeriod;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ruleComputingDefinition)) {
      body["RuleComputingDefinition"] = request.ruleComputingDefinition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateResourceRuleResponse>(await this.callApi(params, req, runtime), new UpdateResourceRuleResponse({}));
    } else {
      return $dara.cast<UpdateResourceRuleResponse>(await this.execute(params, req, runtime), new UpdateResourceRuleResponse({}));
    }

  }

  /**
   * 获取资源规则列表
   * 
   * @param request - UpdateResourceRuleRequest
   * @returns UpdateResourceRuleResponse
   */
  async updateResourceRule(ResourceRuleId: string, request: UpdateResourceRuleRequest): Promise<UpdateResourceRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * 更新资源规则条目
   * 
   * @param request - UpdateResourceRuleItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceRuleItemResponse
   */
  async updateResourceRuleItemWithOptions(ResourceRuleId: string, ResourceRuleItemId: string, request: UpdateResourceRuleItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateResourceRuleItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxValue)) {
      body["MaxValue"] = request.maxValue;
    }

    if (!$dara.isNull(request.minValue)) {
      body["MinValue"] = request.minValue;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceRuleItem",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${$dara.URL.percentEncode(ResourceRuleId)}/items/${$dara.URL.percentEncode(ResourceRuleItemId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateResourceRuleItemResponse>(await this.callApi(params, req, runtime), new UpdateResourceRuleItemResponse({}));
    } else {
      return $dara.cast<UpdateResourceRuleItemResponse>(await this.execute(params, req, runtime), new UpdateResourceRuleItemResponse({}));
    }

  }

  /**
   * 更新资源规则条目
   * 
   * @param request - UpdateResourceRuleItemRequest
   * @returns UpdateResourceRuleItemResponse
   */
  async updateResourceRuleItem(ResourceRuleId: string, ResourceRuleItemId: string, request: UpdateResourceRuleItemRequest): Promise<UpdateResourceRuleItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceRuleItemWithOptions(ResourceRuleId, ResourceRuleItemId, request, headers, runtime);
  }

  /**
   * 更新场景
   * 
   * @param request - UpdateSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSceneResponse
   */
  async updateSceneWithOptions(SceneId: string, request: UpdateSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.flows)) {
      body["Flows"] = request.flows;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes/${$dara.URL.percentEncode(SceneId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateSceneResponse>(await this.callApi(params, req, runtime), new UpdateSceneResponse({}));
    } else {
      return $dara.cast<UpdateSceneResponse>(await this.execute(params, req, runtime), new UpdateSceneResponse({}));
    }

  }

  /**
   * 更新场景
   * 
   * @param request - UpdateSceneRequest
   * @returns UpdateSceneResponse
   */
  async updateScene(SceneId: string, request: UpdateSceneRequest): Promise<UpdateSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSceneWithOptions(SceneId, request, headers, runtime);
  }

  /**
   * 获取数据表详细信息。
   * 
   * @param request - UpdateTableMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableMetaResponse
   */
  async updateTableMetaWithOptions(TableMetaId: string, request: UpdateTableMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTableMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.module)) {
      body["Module"] = request.module;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas/${$dara.URL.percentEncode(TableMetaId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTableMetaResponse>(await this.callApi(params, req, runtime), new UpdateTableMetaResponse({}));
    } else {
      return $dara.cast<UpdateTableMetaResponse>(await this.execute(params, req, runtime), new UpdateTableMetaResponse({}));
    }

  }

  /**
   * 获取数据表详细信息。
   * 
   * @param request - UpdateTableMetaRequest
   * @returns UpdateTableMetaResponse
   */
  async updateTableMeta(TableMetaId: string, request: UpdateTableMetaRequest): Promise<UpdateTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  /**
   * 更新流量调控目标
   * 
   * @param request - UpdateTrafficControlTargetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrafficControlTargetResponse
   */
  async updateTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: UpdateTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTrafficControlTargetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newParam3)) {
      query["new-param-3"] = request.newParam3;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.event)) {
      body["Event"] = request.event;
    }

    if (!$dara.isNull(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!$dara.isNull(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!$dara.isNull(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.newProductRegulation)) {
      body["NewProductRegulation"] = request.newProductRegulation;
    }

    if (!$dara.isNull(request.recallName)) {
      body["RecallName"] = request.recallName;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisPeriod)) {
      body["StatisPeriod"] = request.statisPeriod;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.toleranceValue)) {
      body["ToleranceValue"] = request.toleranceValue;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${$dara.URL.percentEncode(TrafficControlTargetId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new UpdateTrafficControlTargetResponse({}));
    } else {
      return $dara.cast<UpdateTrafficControlTargetResponse>(await this.execute(params, req, runtime), new UpdateTrafficControlTargetResponse({}));
    }

  }

  /**
   * 更新流量调控目标
   * 
   * @param request - UpdateTrafficControlTargetRequest
   * @returns UpdateTrafficControlTargetResponse
   */
  async updateTrafficControlTarget(TrafficControlTargetId: string, request: UpdateTrafficControlTargetRequest): Promise<UpdateTrafficControlTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * 更新流量调控任务
   * 
   * @param request - UpdateTrafficControlTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrafficControlTaskResponse
   */
  async updateTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: UpdateTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTrafficControlTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.behaviorTableMetaId)) {
      body["BehaviorTableMetaId"] = request.behaviorTableMetaId;
    }

    if (!$dara.isNull(request.controlGranularity)) {
      body["ControlGranularity"] = request.controlGranularity;
    }

    if (!$dara.isNull(request.controlLogic)) {
      body["ControlLogic"] = request.controlLogic;
    }

    if (!$dara.isNull(request.controlType)) {
      body["ControlType"] = request.controlType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executionTime)) {
      body["ExecutionTime"] = request.executionTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!$dara.isNull(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!$dara.isNull(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!$dara.isNull(request.itemTableMetaId)) {
      body["ItemTableMetaId"] = request.itemTableMetaId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.preExperimentIds)) {
      body["PreExperimentIds"] = request.preExperimentIds;
    }

    if (!$dara.isNull(request.prodExperimentIds)) {
      body["ProdExperimentIds"] = request.prodExperimentIds;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisBaeaviorConditionArray)) {
      body["StatisBaeaviorConditionArray"] = request.statisBaeaviorConditionArray;
    }

    if (!$dara.isNull(request.statisBehaviorConditionExpress)) {
      body["StatisBehaviorConditionExpress"] = request.statisBehaviorConditionExpress;
    }

    if (!$dara.isNull(request.statisBehaviorConditionType)) {
      body["StatisBehaviorConditionType"] = request.statisBehaviorConditionType;
    }

    if (!$dara.isNull(request.trafficControlTargets)) {
      body["TrafficControlTargets"] = request.trafficControlTargets;
    }

    if (!$dara.isNull(request.userConditionArray)) {
      body["UserConditionArray"] = request.userConditionArray;
    }

    if (!$dara.isNull(request.userConditionExpress)) {
      body["UserConditionExpress"] = request.userConditionExpress;
    }

    if (!$dara.isNull(request.userConditionType)) {
      body["UserConditionType"] = request.userConditionType;
    }

    if (!$dara.isNull(request.userTableMetaId)) {
      body["UserTableMetaId"] = request.userTableMetaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new UpdateTrafficControlTaskResponse({}));
    } else {
      return $dara.cast<UpdateTrafficControlTaskResponse>(await this.execute(params, req, runtime), new UpdateTrafficControlTaskResponse({}));
    }

  }

  /**
   * 更新流量调控任务
   * 
   * @param request - UpdateTrafficControlTaskRequest
   * @returns UpdateTrafficControlTaskResponse
   */
  async updateTrafficControlTask(TrafficControlTaskId: string, request: UpdateTrafficControlTaskRequest): Promise<UpdateTrafficControlTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 更新流量调控任务的流量参数
   * 
   * @param request - UpdateTrafficControlTaskTrafficRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrafficControlTaskTrafficResponse
   */
  async updateTrafficControlTaskTrafficWithOptions(TrafficControlTaskId: string, request: UpdateTrafficControlTaskTrafficRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTrafficControlTaskTrafficResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newParam3)) {
      query["new-param-3"] = request.newParam3;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.traffics)) {
      body["Traffics"] = request.traffics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrafficControlTaskTraffic",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${$dara.URL.percentEncode(TrafficControlTaskId)}/action/traffic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTrafficControlTaskTrafficResponse>(await this.callApi(params, req, runtime), new UpdateTrafficControlTaskTrafficResponse({}));
    } else {
      return $dara.cast<UpdateTrafficControlTaskTrafficResponse>(await this.execute(params, req, runtime), new UpdateTrafficControlTaskTrafficResponse({}));
    }

  }

  /**
   * 更新流量调控任务的流量参数
   * 
   * @param request - UpdateTrafficControlTaskTrafficRequest
   * @returns UpdateTrafficControlTaskTrafficResponse
   */
  async updateTrafficControlTaskTraffic(TrafficControlTaskId: string, request: UpdateTrafficControlTaskTrafficRequest): Promise<UpdateTrafficControlTaskTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrafficControlTaskTrafficWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * 上传数据
   * 
   * @param request - UploadRecommendationDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadRecommendationDataResponse
   */
  async uploadRecommendationDataWithOptions(request: UploadRecommendationDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UploadRecommendationDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadRecommendationData",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/recommendationdata/action/upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadRecommendationDataResponse>(await this.callApi(params, req, runtime), new UploadRecommendationDataResponse({}));
    } else {
      return $dara.cast<UploadRecommendationDataResponse>(await this.execute(params, req, runtime), new UploadRecommendationDataResponse({}));
    }

  }

  /**
   * 上传数据
   * 
   * @param request - UploadRecommendationDataRequest
   * @returns UploadRecommendationDataResponse
   */
  async uploadRecommendationData(request: UploadRecommendationDataRequest): Promise<UploadRecommendationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadRecommendationDataWithOptions(request, headers, runtime);
  }

}
