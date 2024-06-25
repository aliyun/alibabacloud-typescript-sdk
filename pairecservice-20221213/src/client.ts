// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ExperimentReportValue extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackflowFeatureConsistencyCheckJobDataRequest extends $tea.Model {
  featureConsistencyCheckJobConfigId?: string;
  instanceId?: string;
  itemFeatures?: string;
  logItemId?: string;
  logRequestId?: string;
  logRequestTime?: number;
  logUserId?: string;
  sceneName?: string;
  scores?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackflowFeatureConsistencyCheckJobDataResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackflowFeatureConsistencyCheckJobDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceResourcesRequest extends $tea.Model {
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceResourcesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceResourcesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentResponseBody extends $tea.Model {
  experimentId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentGroupRequest extends $tea.Model {
  environment?: string;
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentGroupResponseBody extends $tea.Model {
  experimentGroupId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneExperimentGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFeatureConsistencyCheckJobConfigRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFeatureConsistencyCheckJobConfigResponseBody extends $tea.Model {
  featureConsistencyCheckId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFeatureConsistencyCheckJobConfigResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneLaboratoryRequest extends $tea.Model {
  cloneExperimentGroup?: boolean;
  environment?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneLaboratoryResponseBody extends $tea.Model {
  laboratoryId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneLaboratoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneTrafficControlTaskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneTrafficControlTaskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneTrafficControlTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricRequest extends $tea.Model {
  definition?: string;
  description?: string;
  instanceId?: string;
  leftMetricId?: string;
  name?: string;
  operator?: string;
  realtime?: boolean;
  resultResourceId?: string;
  rightMetricId?: string;
  sceneId?: string;
  statisticsCycle?: number;
  tableMetaId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricResponseBody extends $tea.Model {
  ABMetricId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricGroupRequest extends $tea.Model {
  ABMetricIds?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  realtime?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricGroupResponseBody extends $tea.Model {
  ABMetricGroupId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABMetricGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCalculationJobsRequest extends $tea.Model {
  ABMetricIds?: string;
  endDate?: string;
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCalculationJobsResponseBody extends $tea.Model {
  calculationJobIds?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCalculationJobsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCrowdRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  label?: string;
  name?: string;
  source?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCrowdResponseBody extends $tea.Model {
  crowdId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCrowdResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentRequest extends $tea.Model {
  config?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  experimentGroupId?: string;
  flowPercent?: number;
  instanceId?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponseBody extends $tea.Model {
  experimentId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentGroupRequest extends $tea.Model {
  config?: string;
  crowdId?: string;
  crowdTargetType?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  distributionTimeDuration?: number;
  distributionType?: string;
  filter?: string;
  instanceId?: string;
  layerId?: string;
  name?: string;
  needAA?: boolean;
  randomFlow?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentGroupResponseBody extends $tea.Model {
  experimentGroupId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobRequest extends $tea.Model {
  environment?: string;
  featureConsistencyCheckJobConfigId?: string;
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobResponseBody extends $tea.Model {
  featureConsistencyCheckJobId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobConfigRequest extends $tea.Model {
  compareFeature?: boolean;
  easServiceName?: string;
  easyRecPackagePath?: string;
  easyRecVersion?: string;
  featureDisplayExclude?: string;
  featureLandingResourceId?: string;
  featurePriority?: string;
  featureStoreItemId?: string;
  featureStoreModelId?: string;
  featureStoreProjectId?: string;
  featureStoreProjectName?: string;
  featureStoreSeqFeatureView?: string;
  featureStoreUserId?: string;
  fgJarVersion?: string;
  fgJsonFileName?: string;
  generateZip?: boolean;
  instanceId?: string;
  itemIdField?: string;
  itemTable?: string;
  itemTablePartitionField?: string;
  itemTablePartitionFieldFormat?: string;
  name?: string;
  ossResourceId?: string;
  sampleRate?: number;
  sceneId?: string;
  serviceId?: string;
  useFeatureStore?: boolean;
  userIdField?: string;
  userTable?: string;
  userTablePartitionField?: string;
  userTablePartitionFieldFormat?: string;
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      compareFeature: 'CompareFeature',
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
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      serviceId: 'ServiceId',
      useFeatureStore: 'UseFeatureStore',
      userIdField: 'UserIdField',
      userTable: 'UserTable',
      userTablePartitionField: 'UserTablePartitionField',
      userTablePartitionFieldFormat: 'UserTablePartitionFieldFormat',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareFeature: 'boolean',
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
      sampleRate: 'number',
      sceneId: 'string',
      serviceId: 'string',
      useFeatureStore: 'boolean',
      userIdField: 'string',
      userTable: 'string',
      userTablePartitionField: 'string',
      userTablePartitionFieldFormat: 'string',
      workflowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobConfigResponseBody extends $tea.Model {
  featureConsistencyCheckJobConfigId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureConsistencyCheckJobConfigResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResourceRequest extends $tea.Model {
  category?: string;
  group?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResourceResponseBody extends $tea.Model {
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResourceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaboratoryRequest extends $tea.Model {
  bucketCount?: number;
  bucketType?: string;
  buckets?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  environment?: string;
  filter?: string;
  instanceId?: string;
  name?: string;
  sceneId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaboratoryResponseBody extends $tea.Model {
  laboratoryId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaboratoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  laboratoryId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerResponseBody extends $tea.Model {
  layerId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParamRequest extends $tea.Model {
  environment?: string;
  instanceId?: string;
  name?: string;
  sceneId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParamResponseBody extends $tea.Model {
  paramId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParamResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  name?: string;
  ruleComputingDefinition?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleItemRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  maxValue?: number;
  minValue?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleItemResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleItemResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRequest extends $tea.Model {
  description?: string;
  flows?: CreateSceneRequestFlows[];
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponseBody extends $tea.Model {
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCrowdRequest extends $tea.Model {
  instanceId?: string;
  source?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCrowdResponseBody extends $tea.Model {
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCrowdResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaRequest extends $tea.Model {
  description?: string;
  fields?: CreateTableMetaRequestFields[];
  instanceId?: string;
  module?: string;
  name?: string;
  resourceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaResponseBody extends $tea.Model {
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTargetRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTargetResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTargetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTaskRequest extends $tea.Model {
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
  sceneId?: string;
  startTime?: string;
  statisBehaviorConditionArray?: string;
  statisBehaviorConditionExpress?: string;
  statisBehaviorConditionType?: string;
  trafficControlTargets?: CreateTrafficControlTaskRequestTrafficControlTargets[];
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
      sceneId: 'SceneId',
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
      sceneId: 'string',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTaskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugResourceRuleRequest extends $tea.Model {
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugResourceRuleShrinkRequest extends $tea.Model {
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugResourceRuleResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugResourceRuleResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricGroupRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricGroupResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABMetricGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCrowdRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCrowdResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCrowdResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentGroupRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentGroupResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResourceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResourceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaboratoryRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaboratoryResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaboratoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParamRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParamResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleItemRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleItemResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRuleItemResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubCrowdRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubCrowdResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubCrowdResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableMetaRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableMetaResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableMetaResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTargetRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTargetResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTargetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTaskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTaskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrafficControlTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskCodeRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskCodeResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskCodeResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskConfigRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTrafficControlTaskConfigResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricResponseBody extends $tea.Model {
  definition?: string;
  description?: string;
  leftMetricId?: string;
  name?: string;
  operator?: string;
  realtime?: string;
  requestId?: string;
  resultResourceId?: string;
  resultTableMetaId?: string;
  rightMetricId?: string;
  sceneId?: string;
  sceneName?: string;
  statisticsCycle?: number;
  tableMetaId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricGroupRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricGroupResponseBody extends $tea.Model {
  ABMetricIds?: string;
  ABMetricNames?: string;
  description?: string;
  name?: string;
  owner?: string;
  realtime?: boolean;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetABMetricGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCalculationJobRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCalculationJobResponseBody extends $tea.Model {
  ABMetricId?: string;
  ABMetricName?: string;
  bizDate?: string;
  config?: string;
  gmtRanTime?: string;
  jobMessage?: string[];
  jobSource?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCalculationJobResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBody extends $tea.Model {
  aliasExperimentId?: string;
  buckets?: string;
  config?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  experimentGroupId?: string;
  flowPercent?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  laboratoryId?: string;
  layerId?: string;
  name?: string;
  requestId?: string;
  sceneId?: string;
  status?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentGroupRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentGroupResponseBody extends $tea.Model {
  config?: string;
  crowdId?: string;
  crowdTargetType?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  distributionTimeDuration?: number;
  distributionType?: string;
  filter?: string;
  holdingBuckets?: string;
  laboratoryId?: string;
  layerId?: string;
  name?: string;
  needAA?: boolean;
  owner?: string;
  randomFlow?: number;
  requestId?: string;
  reservedBuckets?: string;
  sceneId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobResponseBody extends $tea.Model {
  config?: string;
  featureConsistencyCheckJobConfigId?: string;
  featureConsistencyCheckJobConfigName?: string;
  gmtEndTime?: string;
  gmtStartTime?: string;
  logs?: string[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobConfigRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobConfigResponseBody extends $tea.Model {
  compareFeature?: boolean;
  easServiceName?: string;
  easyRecPackagePath?: string;
  easyRecVersion?: string;
  featureDisplayExclude?: string;
  featureLandingResourceId?: string;
  featureLandingResourceUri?: string;
  featurePriority?: string;
  featureStoreItemId?: string;
  featureStoreModelId?: string;
  featureStoreProjectId?: string;
  featureStoreProjectName?: string;
  featureStoreSeqFeatureView?: string;
  featureStoreUserId?: string;
  fgJarVersion?: string;
  fgJsonFileName?: string;
  generateZip?: boolean;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  itemIdField?: string;
  itemTable?: string;
  itemTablePartitionField?: string;
  itemTablePartitionFieldFormat?: string;
  latestJobGmtSamplingEndTime?: string;
  latestJobGmtSamplingStartTime?: string;
  latestJobId?: string;
  name?: string;
  ossBucket?: string;
  ossResourceId?: string;
  requestId?: string;
  sampleRate?: string;
  sceneId?: string;
  sceneName?: string;
  serviceId?: string;
  serviceName?: string;
  status?: string;
  useFeatureStore?: boolean;
  userIdField?: string;
  userTable?: string;
  userTablePartitionField?: string;
  userTablePartitionFieldFormat?: string;
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      compareFeature: 'CompareFeature',
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
      requestId: 'RequestId',
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      useFeatureStore: 'UseFeatureStore',
      userIdField: 'UserIdField',
      userTable: 'UserTable',
      userTablePartitionField: 'UserTablePartitionField',
      userTablePartitionFieldFormat: 'UserTablePartitionFieldFormat',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareFeature: 'boolean',
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
      requestId: 'string',
      sampleRate: 'string',
      sceneId: 'string',
      sceneName: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      useFeatureStore: 'boolean',
      userIdField: 'string',
      userTable: 'string',
      userTablePartitionField: 'string',
      userTablePartitionFieldFormat: 'string',
      workflowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConsistencyCheckJobConfigResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  config?: GetInstanceResponseBodyConfig;
  expiredTime?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  regionId?: string;
  requestId?: string;
  status?: string;
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
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceResponseBody extends $tea.Model {
  category?: string;
  config?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  group?: string;
  requestId?: string;
  resourceId?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceTableResponseBody extends $tea.Model {
  fields?: GetInstanceResourceTableResponseBodyFields[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceTableResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaboratoryRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaboratoryResponseBody extends $tea.Model {
  bucketCount?: number;
  bucketType?: string;
  buckets?: string;
  crowdId?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  environment?: string;
  filter?: string;
  name?: string;
  requestId?: string;
  sceneId?: string;
  status?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaboratoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerResponseBody extends $tea.Model {
  description?: string;
  gmtCreateTime?: string;
  laboratoryId?: string;
  name?: string;
  requestId?: string;
  residualFlow?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRuleRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRuleResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRuleResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneResponseBody extends $tea.Model {
  description?: string;
  flows?: GetSceneResponseBodyFlows[];
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubCrowdRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubCrowdResponseBody extends $tea.Model {
  gmtCreateTime?: string;
  quantity?: string;
  requestId?: string;
  source?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubCrowdResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaResponseBody extends $tea.Model {
  canDelete?: boolean;
  config?: string;
  description?: string;
  fields?: GetTableMetaResponseBodyFields[];
  gmtCreateTime?: string;
  gmtImportedTime?: string;
  gmtModifiedTime?: string;
  module?: string;
  name?: string;
  requestId?: string;
  resourceId?: string;
  tableMetaId?: string;
  tableName?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTargetRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTargetResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTargetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskResponseBody extends $tea.Model {
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
  prepubStatus?: string;
  productStatus?: string;
  requestId?: string;
  sceneId?: string;
  sceneName?: string;
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
      prepubStatus: 'PrepubStatus',
      productStatus: 'ProductStatus',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
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
      prepubStatus: 'string',
      productStatus: 'string',
      requestId: 'string',
      sceneId: 'string',
      sceneName: 'string',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskTrafficRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskTrafficResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskTrafficResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricGroupsRequest extends $tea.Model {
  instanceId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  realtime?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricGroupsResponseBody extends $tea.Model {
  ABMetricGroups?: ListABMetricGroupsResponseBodyABMetricGroups[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricGroupsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricsRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  realtime?: boolean;
  sceneId?: string;
  tableMetaId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricsResponseBody extends $tea.Model {
  ABMetrics?: ListABMetricsResponseBodyABMetrics[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalculationJobsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  sceneId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalculationJobsResponseBody extends $tea.Model {
  calculationJobs?: ListCalculationJobsResponseBodyCalculationJobs[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalculationJobsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdUsersRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdUsersResponseBody extends $tea.Model {
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdUsersResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdsRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdsResponseBody extends $tea.Model {
  crowds?: ListCrowdsResponseBodyCrowds[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentGroupsRequest extends $tea.Model {
  instanceId?: string;
  layerId?: string;
  regionId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentGroupsResponseBody extends $tea.Model {
  experimentGroups?: ListExperimentGroupsResponseBodyExperimentGroups[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentGroupsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsRequest extends $tea.Model {
  experimentGroupId?: string;
  instanceId?: string;
  query?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBody extends $tea.Model {
  experiments?: ListExperimentsResponseBodyExperiments[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobConfigsRequest extends $tea.Model {
  instanceId?: string;
  order?: string;
  pageNumber?: string;
  pageSize?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobConfigsResponseBody extends $tea.Model {
  featureConsistencyCheckConfigs?: ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobConfigsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobFeatureReportsRequest extends $tea.Model {
  instanceId?: string;
  logItemId?: string;
  logRequestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobFeatureReportsResponseBody extends $tea.Model {
  dataPath?: string;
  ossPath?: string;
  reportsOfFeatureDiff?: ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobFeatureReportsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsRequest extends $tea.Model {
  excludeRequestIds?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsShrinkRequest extends $tea.Model {
  excludeRequestIdsShrink?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsResponseBody extends $tea.Model {
  dataPath?: string;
  ossPath?: string;
  reportsOfScoreDiff?: ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobsRequest extends $tea.Model {
  instanceId?: string;
  order?: string;
  pageNumber?: string;
  pageSize?: string;
  sortBy?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobsResponseBody extends $tea.Model {
  featureConsistencyCheckJobs?: ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResourcesRequest extends $tea.Model {
  category?: string;
  group?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResourcesResponseBody extends $tea.Model {
  requestId?: string;
  resources?: ListInstanceResourcesResponseBodyResources[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResourcesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  instanceId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  instances?: ListInstancesResponseBodyInstances[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaboratoriesRequest extends $tea.Model {
  environment?: string;
  instanceId?: string;
  sceneId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaboratoriesResponseBody extends $tea.Model {
  laboratories?: ListLaboratoriesResponseBodyLaboratories[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaboratoriesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersRequest extends $tea.Model {
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponseBody extends $tea.Model {
  layers?: ListLayersResponseBodyLayers[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParamsRequest extends $tea.Model {
  environment?: string;
  instanceId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParamsResponseBody extends $tea.Model {
  params?: ListParamsResponseBodyParams[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParamsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesRequest extends $tea.Model {
  all?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesRequest extends $tea.Model {
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBody extends $tea.Model {
  requestId?: string;
  scenes?: ListScenesResponseBodyScenes[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubCrowdsRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubCrowdsResponseBody extends $tea.Model {
  requestId?: string;
  subCrowds?: ListSubCrowdsResponseBodySubCrowds[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubCrowdsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasRequest extends $tea.Model {
  instanceId?: string;
  module?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasResponseBody extends $tea.Model {
  requestId?: string;
  tableMetas?: ListTableMetasResponseBodyTableMetas[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTargetTrafficHistoryRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTargetTrafficHistoryResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTargetTrafficHistoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTasksRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTasksResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTasksResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentGroupRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentGroupResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineExperimentGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineLaboratoryRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineLaboratoryResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineLaboratoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentGroupRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentGroupResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineExperimentGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineLaboratoryRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineLaboratoryResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineLaboratoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushAllExperimentRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushAllExperimentResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushAllExperimentResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleRequest extends $tea.Model {
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleShrinkRequest extends $tea.Model {
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseTrafficControlTaskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseTrafficControlTaskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseTrafficControlTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportABMetricGroupRequest extends $tea.Model {
  baseExperimentId?: string;
  dimensionFields?: string;
  endDate?: string;
  experimentGroupId?: string;
  experimentIds?: string;
  instanceId?: string;
  reportType?: string;
  sceneId?: string;
  startDate?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportABMetricGroupResponseBody extends $tea.Model {
  experimentReport?: { [key: string]: ExperimentReportValue };
  groupDimension?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportABMetricGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitTrafficControlTargetRequest extends $tea.Model {
  environment?: string;
  instanceId?: string;
  setValues?: number[];
  timePoints?: number[];
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      setValues: 'SetValues',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      setValues: { 'type': 'array', 'itemType': 'number' },
      timePoints: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitTrafficControlTargetResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitTrafficControlTargetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTargetRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTargetResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTargetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTaskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTaskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrafficControlTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTargetRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTargetResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTargetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTaskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTaskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrafficControlTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncFeatureConsistencyCheckJobReplayLogRequest extends $tea.Model {
  contextFeatures?: string;
  featureConsistencyCheckJobConfigId?: string;
  generatedFeatures?: string;
  instanceId?: string;
  logItemId?: string;
  logRequestId?: string;
  logRequestTime?: number;
  logUserId?: string;
  rawFeatures?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncFeatureConsistencyCheckJobReplayLogResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncFeatureConsistencyCheckJobReplayLogResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateFeatureConsistencyCheckJobRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateFeatureConsistencyCheckJobResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateFeatureConsistencyCheckJobResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricRequest extends $tea.Model {
  definition?: string;
  description?: string;
  instanceId?: string;
  leftMetricId?: string;
  name?: string;
  operator?: string;
  realtime?: boolean;
  resultResourceId?: string;
  rightMetricId?: string;
  sceneId?: string;
  statisticsCycle?: number;
  tableMetaId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricGroupRequest extends $tea.Model {
  ABMetricIds?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  realtime?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricGroupResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABMetricGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrowdRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrowdResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrowdResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentRequest extends $tea.Model {
  config?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  flowPercent?: number;
  instanceId?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentGroupRequest extends $tea.Model {
  config?: string;
  crowdId?: string;
  crowdTargetType?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  distributionTimeDuration?: number;
  distributionType?: string;
  filter?: string;
  instanceId?: string;
  layerId?: string;
  name?: string;
  needAA?: boolean;
  randomFlow?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentGroupResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeatureConsistencyCheckJobConfigRequest extends $tea.Model {
  compareFeature?: boolean;
  easServiceName?: string;
  easyRecPackagePath?: string;
  easyRecVersion?: string;
  featureDisplayExclude?: string;
  featureLandingResourceId?: string;
  featurePriority?: string;
  featureStoreItemId?: string;
  featureStoreModelId?: string;
  featureStoreProjectId?: string;
  featureStoreProjectName?: string;
  featureStoreSeqFeatureView?: string;
  featureStoreUserId?: string;
  fgJarVersion?: string;
  fgJsonFileName?: string;
  generateZip?: boolean;
  instanceId?: string;
  isUseFeatureStore?: boolean;
  itemIdField?: string;
  itemTable?: string;
  itemTablePartitionField?: string;
  itemTablePartitionFieldFormat?: string;
  name?: string;
  ossResourceId?: string;
  sampleRate?: number;
  sceneId?: string;
  serviceId?: string;
  userIdField?: string;
  userTable?: string;
  userTablePartitionField?: string;
  userTablePartitionFieldFormat?: string;
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      compareFeature: 'CompareFeature',
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
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      serviceId: 'ServiceId',
      userIdField: 'UserIdField',
      userTable: 'UserTable',
      userTablePartitionField: 'UserTablePartitionField',
      userTablePartitionFieldFormat: 'UserTablePartitionFieldFormat',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareFeature: 'boolean',
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
      sampleRate: 'number',
      sceneId: 'string',
      serviceId: 'string',
      userIdField: 'string',
      userTable: 'string',
      userTablePartitionField: 'string',
      userTablePartitionFieldFormat: 'string',
      workflowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeatureConsistencyCheckJobConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeatureConsistencyCheckJobConfigResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResourceRequest extends $tea.Model {
  config?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResourceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResourceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLaboratoryRequest extends $tea.Model {
  bucketCount?: number;
  bucketType?: string;
  buckets?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  environment?: string;
  filter?: string;
  instanceId?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLaboratoryResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLaboratoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayerRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayerResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayerResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParamRequest extends $tea.Model {
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParamResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  metricOperationType?: string;
  metricPullInfo?: string;
  metricPullPeriod?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleItemRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  maxValue?: number;
  minValue?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleItemResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRuleItemResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRequest extends $tea.Model {
  description?: string;
  flows?: UpdateSceneRequestFlows[];
  instanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaRequest extends $tea.Model {
  description?: string;
  fields?: UpdateTableMetaRequestFields[];
  instanceId?: string;
  module?: string;
  name?: string;
  resourceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTargetRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTargetResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTargetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskRequest extends $tea.Model {
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
  sceneId?: string;
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
      sceneId: 'SceneId',
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
      sceneId: 'string',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskTrafficRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskTrafficResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskTrafficResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRecommendationDataRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRecommendationDataResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRecommendationDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceResourcesResponseBodyResources extends $tea.Model {
  status?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRuleRequestRuleItems extends $tea.Model {
  description?: string;
  maxValue?: number;
  minValue?: number;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRequestFlows extends $tea.Model {
  flowCode?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaRequestFields extends $tea.Model {
  dataType?: string;
  isDimensionField?: boolean;
  isPartitionField?: string;
  meaning?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficControlTaskRequestTrafficControlTargets extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfigDataManagements extends $tea.Model {
  componentCode?: string;
  meta?: { [key: string]: any };
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfigEngines extends $tea.Model {
  componentCode?: string;
  meta?: { [key: string]: any };
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfigMonitors extends $tea.Model {
  componentCode?: string;
  meta?: { [key: string]: any };
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyConfig extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResourceTableResponseBodyFields extends $tea.Model {
  isDimensionField?: boolean;
  isPartitionField?: boolean;
  meaning?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRuleResponseBodyRuleItems extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneResponseBodyFlows extends $tea.Model {
  flowCode?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaResponseBodyFields extends $tea.Model {
  isDimensionField?: boolean;
  meaning?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTargetResponseBodySplitParts extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskResponseBodyTrafficControlTargetsSplitParts extends $tea.Model {
  setPoints?: number[];
  timePoints?: number[];
  static names(): { [key: string]: string } {
    return {
      setPoints: 'SetPoints',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setPoints: { 'type': 'array', 'itemType': 'number' },
      timePoints: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskResponseBodyTrafficControlTargets extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics extends $tea.Model {
  data?: { [key: string]: any }[];
  trafficContorlTargetId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      trafficContorlTargetId: 'TrafficContorlTargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      trafficContorlTargetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfo extends $tea.Model {
  targetTraffics?: GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics[];
  taskTraffics?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      targetTraffics: 'TargetTraffics',
      taskTraffics: 'TaskTraffics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetTraffics: { 'type': 'array', 'itemType': GetTrafficControlTaskTrafficResponseBodyTrafficControlTaskTrafficInfoTargetTraffics },
      taskTraffics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricGroupsResponseBodyABMetricGroups extends $tea.Model {
  ABMetricGroupId?: string;
  ABMetricIds?: string;
  ABMetricNames?: string;
  description?: string;
  name?: string;
  owner?: string;
  realtime?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricsResponseBodyABMetrics extends $tea.Model {
  ABMetricId?: string;
  definition?: string;
  description?: string;
  leftMetricId?: string;
  name?: string;
  operator?: string;
  realtime?: string;
  resultResourceId?: string;
  resultTableMetaId?: string;
  rightMetricId?: string;
  sceneId?: string;
  sceneName?: string;
  statisticsCycle?: number;
  tableMetaId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalculationJobsResponseBodyCalculationJobs extends $tea.Model {
  ABMetricName?: string;
  bizDate?: string;
  calculationJobId?: string;
  config?: string;
  gmtRanTime?: string;
  jobMessage?: string[];
  jobSource?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdsResponseBodyCrowds extends $tea.Model {
  crowdId?: string;
  description?: string;
  gmtCreateTime?: string;
  label?: string;
  name?: string;
  quantity?: string;
  source?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentGroupsResponseBodyExperimentGroups extends $tea.Model {
  config?: string;
  crowdId?: string;
  crowdTargetType?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  distributionTimeDuration?: number;
  distributionType?: string;
  experimentGroupId?: string;
  filter?: string;
  holdingBuckets?: string;
  laboratoryId?: string;
  layerId?: string;
  name?: string;
  needAA?: boolean;
  owner?: string;
  randomFlow?: number;
  reservedBuckets?: string;
  sceneId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyExperiments extends $tea.Model {
  aliasExperimentId?: string;
  buckets?: string;
  config?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  experimentGroupId?: string;
  experimentId?: string;
  flowPercent?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  laboratoryId?: string;
  layerId?: string;
  name?: string;
  sceneId?: string;
  status?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs extends $tea.Model {
  compareFeature?: boolean;
  easServiceName?: string;
  easyRecPackagePath?: string;
  easyRecVersion?: string;
  featureConsistencyCheckJobConfigId?: string;
  featureDisplayExclude?: string;
  featureLandingResourceId?: string;
  featureLandingResourceUri?: string;
  featurePriority?: string;
  featureStoreItemId?: string;
  featureStoreModelId?: string;
  featureStoreProjectId?: string;
  featureStoreProjectName?: string;
  featureStoreSeqFeatureView?: string;
  featureStoreUserId?: string;
  fgJarVersion?: string;
  fgJsonFileName?: string;
  generateZip?: boolean;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  itemIdField?: string;
  itemTable?: string;
  itemTablePartitionField?: string;
  itemTablePartitionFieldFormat?: string;
  latestJobGmtSamplingEndTime?: string;
  latestJobGmtSamplingStartTime?: string;
  latestJobId?: string;
  name?: string;
  ossBucket?: string;
  ossResourceId?: string;
  sampleRate?: string;
  sceneId?: string;
  sceneName?: string;
  serviceId?: string;
  serviceName?: string;
  status?: string;
  useFeatureStore?: string;
  userIdField?: string;
  userTable?: string;
  userTablePartitionField?: string;
  userTablePartitionFieldFormat?: string;
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      compareFeature: 'CompareFeature',
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
      sampleRate: 'SampleRate',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      useFeatureStore: 'UseFeatureStore',
      userIdField: 'UserIdField',
      userTable: 'UserTable',
      userTablePartitionField: 'UserTablePartitionField',
      userTablePartitionFieldFormat: 'UserTablePartitionFieldFormat',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareFeature: 'boolean',
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
      sampleRate: 'string',
      sceneId: 'string',
      sceneName: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      useFeatureStore: 'string',
      userIdField: 'string',
      userTable: 'string',
      userTablePartitionField: 'string',
      userTablePartitionFieldFormat: 'string',
      workflowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff extends $tea.Model {
  featureName?: string;
  logItemId?: string;
  logRequestId?: string;
  logUserId?: string;
  offlineValue?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff extends $tea.Model {
  logItemId?: string;
  logRequestId?: string;
  logUserId?: string;
  scoreDiff?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs extends $tea.Model {
  config?: string;
  featureConsistencyCheckJobConfigId?: string;
  featureConsistencyCheckJobConfigName?: string;
  featureConsistencyCheckJobId?: string;
  gmtEndTime?: string;
  gmtStartTime?: string;
  logs?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResourcesResponseBodyResources extends $tea.Model {
  category?: string;
  config?: string;
  gmtCreateAt?: string;
  gmtModifiedAt?: string;
  group?: string;
  resourceId?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesConfigDataManagements extends $tea.Model {
  componentCode?: string;
  meta?: { [key: string]: any };
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesConfigEngines extends $tea.Model {
  componentCode?: string;
  meta?: { [key: string]: any };
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesConfigMonitors extends $tea.Model {
  componentCode?: string;
  meta?: { [key: string]: any };
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesConfig extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  config?: ListInstancesResponseBodyInstancesConfig;
  expiredTime?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  regionId?: string;
  status?: string;
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
      regionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaboratoriesResponseBodyLaboratories extends $tea.Model {
  bucketCount?: number;
  bucketType?: string;
  buckets?: string;
  crowdId?: string;
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  environment?: string;
  filter?: string;
  laboratoryId?: string;
  name?: string;
  sceneId?: string;
  status?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponseBodyLayers extends $tea.Model {
  description?: string;
  gmtCreateTime?: string;
  laboratoryId?: string;
  layerId?: string;
  name?: string;
  residualFlow?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParamsResponseBodyParams extends $tea.Model {
  environment?: string;
  gmtModifiedTime?: string;
  name?: string;
  paramId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponseBodyResourceRulesRuleItems extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRulesResponseBodyResourceRules extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBodyScenesFlows extends $tea.Model {
  flowCode?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseBodyScenes extends $tea.Model {
  description?: string;
  flows?: ListScenesResponseBodyScenesFlows[];
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubCrowdsResponseBodySubCrowds extends $tea.Model {
  gmtCreateTime?: string;
  quantity?: number;
  source?: string;
  subCrowdId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasResponseBodyTableMetasFields extends $tea.Model {
  isDimensionField?: boolean;
  meaning?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasResponseBodyTableMetas extends $tea.Model {
  canDelete?: boolean;
  config?: string;
  description?: string;
  fields?: ListTableMetasResponseBodyTableMetasFields[];
  gmtCreateTime?: string;
  gmtImportedTime?: string;
  gmtModifiedTime?: string;
  module?: string;
  name?: string;
  resourceId?: string;
  tableMetaId?: string;
  tableName?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTargetTrafficHistoryResponseBodyTrafficControlTaskTrafficHistories extends $tea.Model {
  experimentId?: string;
  itemId?: string;
  recordTime?: string;
  trafficControlTargetAimTraffic?: string;
  trafficControlTargetTraffic?: string;
  trafficControlTaskTraffic?: string;
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
      trafficControlTargetAimTraffic: 'string',
      trafficControlTargetTraffic: 'string',
      trafficControlTaskTraffic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargetsSplitParts extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTasksResponseBodyTrafficControlTasksTrafficControlTargets extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficControlTasksResponseBodyTrafficControlTasks extends $tea.Model {
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
  prepubStatus?: string;
  productStatus?: string;
  sceneId?: string;
  sceneName?: string;
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
      prepubStatus: 'PrepubStatus',
      productStatus: 'ProductStatus',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
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
      prepubStatus: 'string',
      productStatus: 'string',
      sceneId: 'string',
      sceneName: 'string',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResourceRuleResponseBodyRuleItems extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRequestFlows extends $tea.Model {
  flowCode?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaRequestFields extends $tea.Model {
  dataType?: string;
  isDimensionField?: boolean;
  isPartitionField?: string;
  meaning?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskRequestTrafficControlTargets extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrafficControlTaskTrafficRequestTraffics extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRecommendationDataRequestContent extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pairecservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @summary 特征一致性检查数据回流。
   *
   * @param request BackflowFeatureConsistencyCheckJobDataRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BackflowFeatureConsistencyCheckJobDataResponse
   */
  async backflowFeatureConsistencyCheckJobDataWithOptions(request: BackflowFeatureConsistencyCheckJobDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BackflowFeatureConsistencyCheckJobDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.featureConsistencyCheckJobConfigId)) {
      body["FeatureConsistencyCheckJobConfigId"] = request.featureConsistencyCheckJobConfigId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.itemFeatures)) {
      body["ItemFeatures"] = request.itemFeatures;
    }

    if (!Util.isUnset(request.logItemId)) {
      body["LogItemId"] = request.logItemId;
    }

    if (!Util.isUnset(request.logRequestId)) {
      body["LogRequestId"] = request.logRequestId;
    }

    if (!Util.isUnset(request.logRequestTime)) {
      body["LogRequestTime"] = request.logRequestTime;
    }

    if (!Util.isUnset(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!Util.isUnset(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    if (!Util.isUnset(request.scores)) {
      body["Scores"] = request.scores;
    }

    if (!Util.isUnset(request.userFeatures)) {
      body["UserFeatures"] = request.userFeatures;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BackflowFeatureConsistencyCheckJobDataResponse>(await this.callApi(params, req, runtime), new BackflowFeatureConsistencyCheckJobDataResponse({}));
  }

  /**
   * @summary 特征一致性检查数据回流。
   *
   * @param request BackflowFeatureConsistencyCheckJobDataRequest
   * @return BackflowFeatureConsistencyCheckJobDataResponse
   */
  async backflowFeatureConsistencyCheckJobData(request: BackflowFeatureConsistencyCheckJobDataRequest): Promise<BackflowFeatureConsistencyCheckJobDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.backflowFeatureConsistencyCheckJobDataWithOptions(request, headers, runtime);
  }

  /**
   * @summary 检测实例下配置的资源的连接状态。
   *
   * @param request CheckInstanceResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckInstanceResourcesResponse
   */
  async checkInstanceResourcesWithOptions(InstanceId: string, request: CheckInstanceResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckInstanceResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckInstanceResources",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/action/checkresources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckInstanceResourcesResponse>(await this.callApi(params, req, runtime), new CheckInstanceResourcesResponse({}));
  }

  /**
   * @summary 检测实例下配置的资源的连接状态。
   *
   * @param request CheckInstanceResourcesRequest
   * @return CheckInstanceResourcesResponse
   */
  async checkInstanceResources(InstanceId: string, request: CheckInstanceResourcesRequest): Promise<CheckInstanceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceResourcesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @summary 克隆实验。
   *
   * @param request CloneExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CloneExperimentResponse
   */
  async cloneExperimentWithOptions(ExperimentId: string, request: CloneExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloneExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneExperimentResponse>(await this.callApi(params, req, runtime), new CloneExperimentResponse({}));
  }

  /**
   * @summary 克隆实验。
   *
   * @param request CloneExperimentRequest
   * @return CloneExperimentResponse
   */
  async cloneExperiment(ExperimentId: string, request: CloneExperimentRequest): Promise<CloneExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * @summary 克隆实验组，并克隆实验组下的所有实验至新的实验组中。
   *
   * @param request CloneExperimentGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CloneExperimentGroupResponse
   */
  async cloneExperimentGroupWithOptions(ExperimentGroupId: string, request: CloneExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneExperimentGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloneExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${OpenApiUtil.getEncodeParam(ExperimentGroupId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneExperimentGroupResponse>(await this.callApi(params, req, runtime), new CloneExperimentGroupResponse({}));
  }

  /**
   * @summary 克隆实验组，并克隆实验组下的所有实验至新的实验组中。
   *
   * @param request CloneExperimentGroupRequest
   * @return CloneExperimentGroupResponse
   */
  async cloneExperimentGroup(ExperimentGroupId: string, request: CloneExperimentGroupRequest): Promise<CloneExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * @summary 克隆特征一致性检查配置。
   *
   * @param request CloneFeatureConsistencyCheckJobConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CloneFeatureConsistencyCheckJobConfigResponse
   */
  async cloneFeatureConsistencyCheckJobConfigWithOptions(SourceFeatureConsistencyCheckJobConfigId: string, request: CloneFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneFeatureConsistencyCheckJobConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloneFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs/${OpenApiUtil.getEncodeParam(SourceFeatureConsistencyCheckJobConfigId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new CloneFeatureConsistencyCheckJobConfigResponse({}));
  }

  /**
   * @summary 克隆特征一致性检查配置。
   *
   * @param request CloneFeatureConsistencyCheckJobConfigRequest
   * @return CloneFeatureConsistencyCheckJobConfigResponse
   */
  async cloneFeatureConsistencyCheckJobConfig(SourceFeatureConsistencyCheckJobConfigId: string, request: CloneFeatureConsistencyCheckJobConfigRequest): Promise<CloneFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneFeatureConsistencyCheckJobConfigWithOptions(SourceFeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

  /**
   * @summary 克隆实验室。
   *
   * @param request CloneLaboratoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CloneLaboratoryResponse
   */
  async cloneLaboratoryWithOptions(LaboratoryId: string, request: CloneLaboratoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneLaboratoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloneExperimentGroup)) {
      body["CloneExperimentGroup"] = request.cloneExperimentGroup;
    }

    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloneLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${OpenApiUtil.getEncodeParam(LaboratoryId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneLaboratoryResponse>(await this.callApi(params, req, runtime), new CloneLaboratoryResponse({}));
  }

  /**
   * @summary 克隆实验室。
   *
   * @param request CloneLaboratoryRequest
   * @return CloneLaboratoryResponse
   */
  async cloneLaboratory(LaboratoryId: string, request: CloneLaboratoryRequest): Promise<CloneLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * @summary 克隆流量调控任务
   *
   * @param request CloneTrafficControlTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CloneTrafficControlTaskResponse
   */
  async cloneTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: CloneTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneTrafficControlTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloneTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}/action/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new CloneTrafficControlTaskResponse({}));
  }

  /**
   * @summary 克隆流量调控任务
   *
   * @param request CloneTrafficControlTaskRequest
   * @return CloneTrafficControlTaskResponse
   */
  async cloneTrafficControlTask(TrafficControlTaskId: string, request: CloneTrafficControlTaskRequest): Promise<CloneTrafficControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 创建AB test实验指标
   *
   * @param request CreateABMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateABMetricResponse
   */
  async createABMetricWithOptions(request: CreateABMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateABMetricResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.leftMetricId)) {
      body["LeftMetricId"] = request.leftMetricId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!Util.isUnset(request.resultResourceId)) {
      body["ResultResourceId"] = request.resultResourceId;
    }

    if (!Util.isUnset(request.rightMetricId)) {
      body["RightMetricId"] = request.rightMetricId;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.statisticsCycle)) {
      body["StatisticsCycle"] = request.statisticsCycle;
    }

    if (!Util.isUnset(request.tableMetaId)) {
      body["TableMetaId"] = request.tableMetaId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateABMetricResponse>(await this.callApi(params, req, runtime), new CreateABMetricResponse({}));
  }

  /**
   * @summary 创建AB test实验指标
   *
   * @param request CreateABMetricRequest
   * @return CreateABMetricResponse
   */
  async createABMetric(request: CreateABMetricRequest): Promise<CreateABMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABMetricWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建指标组
   *
   * @param request CreateABMetricGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateABMetricGroupResponse
   */
  async createABMetricGroupWithOptions(request: CreateABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateABMetricGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ABMetricIds)) {
      body["ABMetricIds"] = request.ABMetricIds;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateABMetricGroupResponse>(await this.callApi(params, req, runtime), new CreateABMetricGroupResponse({}));
  }

  /**
   * @summary 创建指标组
   *
   * @param request CreateABMetricGroupRequest
   * @return CreateABMetricGroupResponse
   */
  async createABMetricGroup(request: CreateABMetricGroupRequest): Promise<CreateABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABMetricGroupWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建AB指标的计算任务。
   *
   * @param request CreateCalculationJobsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCalculationJobsResponse
   */
  async createCalculationJobsWithOptions(request: CreateCalculationJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCalculationJobsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ABMetricIds)) {
      body["ABMetricIds"] = request.ABMetricIds;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateCalculationJobsResponse>(await this.callApi(params, req, runtime), new CreateCalculationJobsResponse({}));
  }

  /**
   * @summary 创建AB指标的计算任务。
   *
   * @param request CreateCalculationJobsRequest
   * @return CreateCalculationJobsResponse
   */
  async createCalculationJobs(request: CreateCalculationJobsRequest): Promise<CreateCalculationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCalculationJobsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建人群。
   *
   * @param request CreateCrowdRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCrowdResponse
   */
  async createCrowdWithOptions(request: CreateCrowdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCrowdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateCrowdResponse>(await this.callApi(params, req, runtime), new CreateCrowdResponse({}));
  }

  /**
   * @summary 创建人群。
   *
   * @param request CreateCrowdRequest
   * @return CreateCrowdResponse
   */
  async createCrowd(request: CreateCrowdRequest): Promise<CreateCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCrowdWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建实验。
   *
   * @param request CreateExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateExperimentResponse
   */
  async createExperimentWithOptions(request: CreateExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.experimentGroupId)) {
      body["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!Util.isUnset(request.flowPercent)) {
      body["FlowPercent"] = request.flowPercent;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateExperimentResponse>(await this.callApi(params, req, runtime), new CreateExperimentResponse({}));
  }

  /**
   * @summary 创建实验。
   *
   * @param request CreateExperimentRequest
   * @return CreateExperimentResponse
   */
  async createExperiment(request: CreateExperimentRequest): Promise<CreateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建实验组。
   *
   * @param request CreateExperimentGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateExperimentGroupResponse
   */
  async createExperimentGroupWithOptions(request: CreateExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.crowdId)) {
      body["CrowdId"] = request.crowdId;
    }

    if (!Util.isUnset(request.crowdTargetType)) {
      body["CrowdTargetType"] = request.crowdTargetType;
    }

    if (!Util.isUnset(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.distributionTimeDuration)) {
      body["DistributionTimeDuration"] = request.distributionTimeDuration;
    }

    if (!Util.isUnset(request.distributionType)) {
      body["DistributionType"] = request.distributionType;
    }

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.needAA)) {
      body["NeedAA"] = request.needAA;
    }

    if (!Util.isUnset(request.randomFlow)) {
      body["RandomFlow"] = request.randomFlow;
    }

    if (!Util.isUnset(request.reservedBuckets)) {
      body["ReservedBuckets"] = request.reservedBuckets;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateExperimentGroupResponse>(await this.callApi(params, req, runtime), new CreateExperimentGroupResponse({}));
  }

  /**
   * @summary 创建实验组。
   *
   * @param request CreateExperimentGroupRequest
   * @return CreateExperimentGroupResponse
   */
  async createExperimentGroup(request: CreateExperimentGroupRequest): Promise<CreateExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentGroupWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建特征一致性检查任务。
   *
   * @param request CreateFeatureConsistencyCheckJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateFeatureConsistencyCheckJobResponse
   */
  async createFeatureConsistencyCheckJobWithOptions(request: CreateFeatureConsistencyCheckJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFeatureConsistencyCheckJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.featureConsistencyCheckJobConfigId)) {
      body["FeatureConsistencyCheckJobConfigId"] = request.featureConsistencyCheckJobConfigId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.samplingDuration)) {
      body["SamplingDuration"] = request.samplingDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateFeatureConsistencyCheckJobResponse>(await this.callApi(params, req, runtime), new CreateFeatureConsistencyCheckJobResponse({}));
  }

  /**
   * @summary 创建特征一致性检查任务。
   *
   * @param request CreateFeatureConsistencyCheckJobRequest
   * @return CreateFeatureConsistencyCheckJobResponse
   */
  async createFeatureConsistencyCheckJob(request: CreateFeatureConsistencyCheckJobRequest): Promise<CreateFeatureConsistencyCheckJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureConsistencyCheckJobWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建特征一致性检查配置。
   *
   * @param request CreateFeatureConsistencyCheckJobConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateFeatureConsistencyCheckJobConfigResponse
   */
  async createFeatureConsistencyCheckJobConfigWithOptions(request: CreateFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFeatureConsistencyCheckJobConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.compareFeature)) {
      body["CompareFeature"] = request.compareFeature;
    }

    if (!Util.isUnset(request.easServiceName)) {
      body["EasServiceName"] = request.easServiceName;
    }

    if (!Util.isUnset(request.easyRecPackagePath)) {
      body["EasyRecPackagePath"] = request.easyRecPackagePath;
    }

    if (!Util.isUnset(request.easyRecVersion)) {
      body["EasyRecVersion"] = request.easyRecVersion;
    }

    if (!Util.isUnset(request.featureDisplayExclude)) {
      body["FeatureDisplayExclude"] = request.featureDisplayExclude;
    }

    if (!Util.isUnset(request.featureLandingResourceId)) {
      body["FeatureLandingResourceId"] = request.featureLandingResourceId;
    }

    if (!Util.isUnset(request.featurePriority)) {
      body["FeaturePriority"] = request.featurePriority;
    }

    if (!Util.isUnset(request.featureStoreItemId)) {
      body["FeatureStoreItemId"] = request.featureStoreItemId;
    }

    if (!Util.isUnset(request.featureStoreModelId)) {
      body["FeatureStoreModelId"] = request.featureStoreModelId;
    }

    if (!Util.isUnset(request.featureStoreProjectId)) {
      body["FeatureStoreProjectId"] = request.featureStoreProjectId;
    }

    if (!Util.isUnset(request.featureStoreProjectName)) {
      body["FeatureStoreProjectName"] = request.featureStoreProjectName;
    }

    if (!Util.isUnset(request.featureStoreSeqFeatureView)) {
      body["FeatureStoreSeqFeatureView"] = request.featureStoreSeqFeatureView;
    }

    if (!Util.isUnset(request.featureStoreUserId)) {
      body["FeatureStoreUserId"] = request.featureStoreUserId;
    }

    if (!Util.isUnset(request.fgJarVersion)) {
      body["FgJarVersion"] = request.fgJarVersion;
    }

    if (!Util.isUnset(request.fgJsonFileName)) {
      body["FgJsonFileName"] = request.fgJsonFileName;
    }

    if (!Util.isUnset(request.generateZip)) {
      body["GenerateZip"] = request.generateZip;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.itemIdField)) {
      body["ItemIdField"] = request.itemIdField;
    }

    if (!Util.isUnset(request.itemTable)) {
      body["ItemTable"] = request.itemTable;
    }

    if (!Util.isUnset(request.itemTablePartitionField)) {
      body["ItemTablePartitionField"] = request.itemTablePartitionField;
    }

    if (!Util.isUnset(request.itemTablePartitionFieldFormat)) {
      body["ItemTablePartitionFieldFormat"] = request.itemTablePartitionFieldFormat;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossResourceId)) {
      body["OssResourceId"] = request.ossResourceId;
    }

    if (!Util.isUnset(request.sampleRate)) {
      body["SampleRate"] = request.sampleRate;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.useFeatureStore)) {
      body["UseFeatureStore"] = request.useFeatureStore;
    }

    if (!Util.isUnset(request.userIdField)) {
      body["UserIdField"] = request.userIdField;
    }

    if (!Util.isUnset(request.userTable)) {
      body["UserTable"] = request.userTable;
    }

    if (!Util.isUnset(request.userTablePartitionField)) {
      body["UserTablePartitionField"] = request.userTablePartitionField;
    }

    if (!Util.isUnset(request.userTablePartitionFieldFormat)) {
      body["UserTablePartitionFieldFormat"] = request.userTablePartitionFieldFormat;
    }

    if (!Util.isUnset(request.workflowName)) {
      body["WorkflowName"] = request.workflowName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new CreateFeatureConsistencyCheckJobConfigResponse({}));
  }

  /**
   * @summary 创建特征一致性检查配置。
   *
   * @param request CreateFeatureConsistencyCheckJobConfigRequest
   * @return CreateFeatureConsistencyCheckJobConfigResponse
   */
  async createFeatureConsistencyCheckJobConfig(request: CreateFeatureConsistencyCheckJobConfigRequest): Promise<CreateFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureConsistencyCheckJobConfigWithOptions(request, headers, runtime);
  }

  /**
   * @summary 为指定实例配置创建新的配置资源
   *
   * @param request CreateInstanceResourceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateInstanceResourceResponse
   */
  async createInstanceResourceWithOptions(InstanceId: string, request: CreateInstanceResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.group)) {
      body["Group"] = request.group;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResourceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResourceResponse({}));
  }

  /**
   * @summary 为指定实例配置创建新的配置资源
   *
   * @param request CreateInstanceResourceRequest
   * @return CreateInstanceResourceResponse
   */
  async createInstanceResource(InstanceId: string, request: CreateInstanceResourceRequest): Promise<CreateInstanceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceResourceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @summary 创建实验室
   *
   * @param request CreateLaboratoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateLaboratoryResponse
   */
  async createLaboratoryWithOptions(request: CreateLaboratoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLaboratoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketCount)) {
      body["BucketCount"] = request.bucketCount;
    }

    if (!Util.isUnset(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!Util.isUnset(request.buckets)) {
      body["Buckets"] = request.buckets;
    }

    if (!Util.isUnset(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateLaboratoryResponse>(await this.callApi(params, req, runtime), new CreateLaboratoryResponse({}));
  }

  /**
   * @summary 创建实验室
   *
   * @param request CreateLaboratoryRequest
   * @return CreateLaboratoryResponse
   */
  async createLaboratory(request: CreateLaboratoryRequest): Promise<CreateLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLaboratoryWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建层。
   *
   * @param request CreateLayerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateLayerResponse
   */
  async createLayerWithOptions(request: CreateLayerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLayerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.laboratoryId)) {
      body["LaboratoryId"] = request.laboratoryId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateLayerResponse>(await this.callApi(params, req, runtime), new CreateLayerResponse({}));
  }

  /**
   * @summary 创建层。
   *
   * @param request CreateLayerRequest
   * @return CreateLayerResponse
   */
  async createLayer(request: CreateLayerRequest): Promise<CreateLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLayerWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建参数。
   *
   * @param request CreateParamRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateParamResponse
   */
  async createParamWithOptions(request: CreateParamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateParamResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateParamResponse>(await this.callApi(params, req, runtime), new CreateParamResponse({}));
  }

  /**
   * @summary 创建参数。
   *
   * @param request CreateParamRequest
   * @return CreateParamResponse
   */
  async createParam(request: CreateParamRequest): Promise<CreateParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createParamWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建资源规则
   *
   * @param request CreateResourceRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateResourceRuleResponse
   */
  async createResourceRuleWithOptions(request: CreateResourceRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metricOperationType)) {
      body["MetricOperationType"] = request.metricOperationType;
    }

    if (!Util.isUnset(request.metricPullInfo)) {
      body["MetricPullInfo"] = request.metricPullInfo;
    }

    if (!Util.isUnset(request.metricPullPeriod)) {
      body["MetricPullPeriod"] = request.metricPullPeriod;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ruleComputingDefinition)) {
      body["RuleComputingDefinition"] = request.ruleComputingDefinition;
    }

    if (!Util.isUnset(request.ruleItems)) {
      body["RuleItems"] = request.ruleItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateResourceRuleResponse>(await this.callApi(params, req, runtime), new CreateResourceRuleResponse({}));
  }

  /**
   * @summary 创建资源规则
   *
   * @param request CreateResourceRuleRequest
   * @return CreateResourceRuleResponse
   */
  async createResourceRule(request: CreateResourceRuleRequest): Promise<CreateResourceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceRuleWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建资源规则条目
   *
   * @param request CreateResourceRuleItemRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateResourceRuleItemResponse
   */
  async createResourceRuleItemWithOptions(ResourceRuleId: string, request: CreateResourceRuleItemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceRuleItemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxValue)) {
      body["MaxValue"] = request.maxValue;
    }

    if (!Util.isUnset(request.minValue)) {
      body["MinValue"] = request.minValue;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceRuleItem",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${OpenApiUtil.getEncodeParam(ResourceRuleId)}/items`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceRuleItemResponse>(await this.callApi(params, req, runtime), new CreateResourceRuleItemResponse({}));
  }

  /**
   * @summary 创建资源规则条目
   *
   * @param request CreateResourceRuleItemRequest
   * @return CreateResourceRuleItemResponse
   */
  async createResourceRuleItem(ResourceRuleId: string, request: CreateResourceRuleItemRequest): Promise<CreateResourceRuleItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceRuleItemWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * @summary 创建场景
   *
   * @param request CreateSceneRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSceneResponse
   */
  async createSceneWithOptions(request: CreateSceneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.flows)) {
      body["Flows"] = request.flows;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateSceneResponse>(await this.callApi(params, req, runtime), new CreateSceneResponse({}));
  }

  /**
   * @summary 创建场景
   *
   * @param request CreateSceneRequest
   * @return CreateSceneResponse
   */
  async createScene(request: CreateSceneRequest): Promise<CreateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSceneWithOptions(request, headers, runtime);
  }

  /**
   * @summary 在指定人群下创建子人群。
   *
   * @param request CreateSubCrowdRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSubCrowdResponse
   */
  async createSubCrowdWithOptions(CrowdId: string, request: CreateSubCrowdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSubCrowdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSubCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${OpenApiUtil.getEncodeParam(CrowdId)}/subcrowds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSubCrowdResponse>(await this.callApi(params, req, runtime), new CreateSubCrowdResponse({}));
  }

  /**
   * @summary 在指定人群下创建子人群。
   *
   * @param request CreateSubCrowdRequest
   * @return CreateSubCrowdResponse
   */
  async createSubCrowd(CrowdId: string, request: CreateSubCrowdRequest): Promise<CreateSubCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSubCrowdWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * @summary 创建数据表。
   *
   * @param request CreateTableMetaRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTableMetaResponse
   */
  async createTableMetaWithOptions(request: CreateTableMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTableMetaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.module)) {
      body["Module"] = request.module;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateTableMetaResponse>(await this.callApi(params, req, runtime), new CreateTableMetaResponse({}));
  }

  /**
   * @summary 创建数据表。
   *
   * @param request CreateTableMetaRequest
   * @return CreateTableMetaResponse
   */
  async createTableMeta(request: CreateTableMetaRequest): Promise<CreateTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableMetaWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建流量调控目标
   *
   * @param request CreateTrafficControlTargetRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTrafficControlTargetResponse
   */
  async createTrafficControlTargetWithOptions(request: CreateTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTrafficControlTargetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.event)) {
      body["Event"] = request.event;
    }

    if (!Util.isUnset(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!Util.isUnset(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!Util.isUnset(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.newProductRegulation)) {
      body["NewProductRegulation"] = request.newProductRegulation;
    }

    if (!Util.isUnset(request.recallName)) {
      body["RecallName"] = request.recallName;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.statisPeriod)) {
      body["StatisPeriod"] = request.statisPeriod;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.toleranceValue)) {
      body["ToleranceValue"] = request.toleranceValue;
    }

    if (!Util.isUnset(request.trafficControlTaskId)) {
      body["TrafficControlTaskId"] = request.trafficControlTaskId;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new CreateTrafficControlTargetResponse({}));
  }

  /**
   * @summary 创建流量调控目标
   *
   * @param request CreateTrafficControlTargetRequest
   * @return CreateTrafficControlTargetResponse
   */
  async createTrafficControlTarget(request: CreateTrafficControlTargetRequest): Promise<CreateTrafficControlTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrafficControlTargetWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建流量调控任务
   *
   * @param request CreateTrafficControlTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTrafficControlTaskResponse
   */
  async createTrafficControlTaskWithOptions(request: CreateTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTrafficControlTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.behaviorTableMetaId)) {
      body["BehaviorTableMetaId"] = request.behaviorTableMetaId;
    }

    if (!Util.isUnset(request.controlGranularity)) {
      body["ControlGranularity"] = request.controlGranularity;
    }

    if (!Util.isUnset(request.controlLogic)) {
      body["ControlLogic"] = request.controlLogic;
    }

    if (!Util.isUnset(request.controlType)) {
      body["ControlType"] = request.controlType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executionTime)) {
      body["ExecutionTime"] = request.executionTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!Util.isUnset(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!Util.isUnset(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!Util.isUnset(request.itemTableMetaId)) {
      body["ItemTableMetaId"] = request.itemTableMetaId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.statisBehaviorConditionArray)) {
      body["StatisBehaviorConditionArray"] = request.statisBehaviorConditionArray;
    }

    if (!Util.isUnset(request.statisBehaviorConditionExpress)) {
      body["StatisBehaviorConditionExpress"] = request.statisBehaviorConditionExpress;
    }

    if (!Util.isUnset(request.statisBehaviorConditionType)) {
      body["StatisBehaviorConditionType"] = request.statisBehaviorConditionType;
    }

    if (!Util.isUnset(request.trafficControlTargets)) {
      body["TrafficControlTargets"] = request.trafficControlTargets;
    }

    if (!Util.isUnset(request.userConditionArray)) {
      body["UserConditionArray"] = request.userConditionArray;
    }

    if (!Util.isUnset(request.userConditionExpress)) {
      body["UserConditionExpress"] = request.userConditionExpress;
    }

    if (!Util.isUnset(request.userConditionType)) {
      body["UserConditionType"] = request.userConditionType;
    }

    if (!Util.isUnset(request.userTableMetaId)) {
      body["UserTableMetaId"] = request.userTableMetaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new CreateTrafficControlTaskResponse({}));
  }

  /**
   * @summary 创建流量调控任务
   *
   * @param request CreateTrafficControlTaskRequest
   * @return CreateTrafficControlTaskResponse
   */
  async createTrafficControlTask(request: CreateTrafficControlTaskRequest): Promise<CreateTrafficControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrafficControlTaskWithOptions(request, headers, runtime);
  }

  /**
   * @summary 对指定资源规则中的计算公式进行调试
   *
   * @param tmpReq DebugResourceRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DebugResourceRuleResponse
   */
  async debugResourceRuleWithOptions(ResourceRuleId: string, tmpReq: DebugResourceRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DebugResourceRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new DebugResourceRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.metricInfo)) {
      request.metricInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricInfo, "MetricInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metricInfoShrink)) {
      query["MetricInfo"] = request.metricInfoShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DebugResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${OpenApiUtil.getEncodeParam(ResourceRuleId)}/action/debug`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DebugResourceRuleResponse>(await this.callApi(params, req, runtime), new DebugResourceRuleResponse({}));
  }

  /**
   * @summary 对指定资源规则中的计算公式进行调试
   *
   * @param request DebugResourceRuleRequest
   * @return DebugResourceRuleResponse
   */
  async debugResourceRule(ResourceRuleId: string, request: DebugResourceRuleRequest): Promise<DebugResourceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.debugResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * @summary 删除指定AB实验指标。
   *
   * @param request DeleteABMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteABMetricResponse
   */
  async deleteABMetricWithOptions(ABMetricId: string, request: DeleteABMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteABMetricResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics/${OpenApiUtil.getEncodeParam(ABMetricId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteABMetricResponse>(await this.callApi(params, req, runtime), new DeleteABMetricResponse({}));
  }

  /**
   * @summary 删除指定AB实验指标。
   *
   * @param request DeleteABMetricRequest
   * @return DeleteABMetricResponse
   */
  async deleteABMetric(ABMetricId: string, request: DeleteABMetricRequest): Promise<DeleteABMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

  /**
   * @summary 删除AB实验指标组。
   *
   * @param request DeleteABMetricGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteABMetricGroupResponse
   */
  async deleteABMetricGroupWithOptions(ABMetricGroupId: string, request: DeleteABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteABMetricGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${OpenApiUtil.getEncodeParam(ABMetricGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteABMetricGroupResponse>(await this.callApi(params, req, runtime), new DeleteABMetricGroupResponse({}));
  }

  /**
   * @summary 删除AB实验指标组。
   *
   * @param request DeleteABMetricGroupRequest
   * @return DeleteABMetricGroupResponse
   */
  async deleteABMetricGroup(ABMetricGroupId: string, request: DeleteABMetricGroupRequest): Promise<DeleteABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * @summary 删除指定人群。
   *
   * @param request DeleteCrowdRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCrowdResponse
   */
  async deleteCrowdWithOptions(CrowdId: string, request: DeleteCrowdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCrowdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${OpenApiUtil.getEncodeParam(CrowdId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteCrowdResponse>(await this.callApi(params, req, runtime), new DeleteCrowdResponse({}));
  }

  /**
   * @summary 删除指定人群。
   *
   * @param request DeleteCrowdRequest
   * @return DeleteCrowdResponse
   */
  async deleteCrowd(CrowdId: string, request: DeleteCrowdRequest): Promise<DeleteCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCrowdWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * @summary 删除实验。
   *
   * @param request DeleteExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(ExperimentId: string, request: DeleteExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentResponse>(await this.callApi(params, req, runtime), new DeleteExperimentResponse({}));
  }

  /**
   * @summary 删除实验。
   *
   * @param request DeleteExperimentRequest
   * @return DeleteExperimentResponse
   */
  async deleteExperiment(ExperimentId: string, request: DeleteExperimentRequest): Promise<DeleteExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * @summary 删除指定实验组。
   *
   * @param request DeleteExperimentGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteExperimentGroupResponse
   */
  async deleteExperimentGroupWithOptions(ExperimentGroupId: string, request: DeleteExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${OpenApiUtil.getEncodeParam(ExperimentGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentGroupResponse>(await this.callApi(params, req, runtime), new DeleteExperimentGroupResponse({}));
  }

  /**
   * @summary 删除指定实验组。
   *
   * @param request DeleteExperimentGroupRequest
   * @return DeleteExperimentGroupResponse
   */
  async deleteExperimentGroup(ExperimentGroupId: string, request: DeleteExperimentGroupRequest): Promise<DeleteExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * @summary 删除指定实例下的指定配置资源。
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteInstanceResourceResponse
   */
  async deleteInstanceResourceWithOptions(InstanceId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/resources/${OpenApiUtil.getEncodeParam(ResourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResourceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResourceResponse({}));
  }

  /**
   * @summary 删除指定实例下的指定配置资源。
   *
   * @return DeleteInstanceResourceResponse
   */
  async deleteInstanceResource(InstanceId: string, ResourceId: string): Promise<DeleteInstanceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceResourceWithOptions(InstanceId, ResourceId, headers, runtime);
  }

  /**
   * @summary 删除实验室。
   *
   * @param request DeleteLaboratoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteLaboratoryResponse
   */
  async deleteLaboratoryWithOptions(LaboratoryId: string, request: DeleteLaboratoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLaboratoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${OpenApiUtil.getEncodeParam(LaboratoryId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteLaboratoryResponse>(await this.callApi(params, req, runtime), new DeleteLaboratoryResponse({}));
  }

  /**
   * @summary 删除实验室。
   *
   * @param request DeleteLaboratoryRequest
   * @return DeleteLaboratoryResponse
   */
  async deleteLaboratory(LaboratoryId: string, request: DeleteLaboratoryRequest): Promise<DeleteLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * @summary 删除层。
   *
   * @param request DeleteLayerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteLayerResponse
   */
  async deleteLayerWithOptions(LayerId: string, request: DeleteLayerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLayerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${OpenApiUtil.getEncodeParam(LayerId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteLayerResponse>(await this.callApi(params, req, runtime), new DeleteLayerResponse({}));
  }

  /**
   * @summary 删除层。
   *
   * @param request DeleteLayerRequest
   * @return DeleteLayerResponse
   */
  async deleteLayer(LayerId: string, request: DeleteLayerRequest): Promise<DeleteLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * @summary 删除指定参数。
   *
   * @param request DeleteParamRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteParamResponse
   */
  async deleteParamWithOptions(ParamId: string, request: DeleteParamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteParamResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteParam",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params/${OpenApiUtil.getEncodeParam(ParamId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteParamResponse>(await this.callApi(params, req, runtime), new DeleteParamResponse({}));
  }

  /**
   * @summary 删除指定参数。
   *
   * @param request DeleteParamRequest
   * @return DeleteParamResponse
   */
  async deleteParam(ParamId: string, request: DeleteParamRequest): Promise<DeleteParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteParamWithOptions(ParamId, request, headers, runtime);
  }

  /**
   * @summary 删除资源规则
   *
   * @param request DeleteResourceRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteResourceRuleResponse
   */
  async deleteResourceRuleWithOptions(ResourceRuleId: string, request: DeleteResourceRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${OpenApiUtil.getEncodeParam(ResourceRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceRuleResponse>(await this.callApi(params, req, runtime), new DeleteResourceRuleResponse({}));
  }

  /**
   * @summary 删除资源规则
   *
   * @param request DeleteResourceRuleRequest
   * @return DeleteResourceRuleResponse
   */
  async deleteResourceRule(ResourceRuleId: string, request: DeleteResourceRuleRequest): Promise<DeleteResourceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * @summary 删除资源规则条目
   *
   * @param request DeleteResourceRuleItemRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteResourceRuleItemResponse
   */
  async deleteResourceRuleItemWithOptions(ResourceRuleId: string, ResourceRuleItemId: string, request: DeleteResourceRuleItemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceRuleItemResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceRuleItem",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${OpenApiUtil.getEncodeParam(ResourceRuleId)}/items/${OpenApiUtil.getEncodeParam(ResourceRuleItemId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceRuleItemResponse>(await this.callApi(params, req, runtime), new DeleteResourceRuleItemResponse({}));
  }

  /**
   * @summary 删除资源规则条目
   *
   * @param request DeleteResourceRuleItemRequest
   * @return DeleteResourceRuleItemResponse
   */
  async deleteResourceRuleItem(ResourceRuleId: string, ResourceRuleItemId: string, request: DeleteResourceRuleItemRequest): Promise<DeleteResourceRuleItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceRuleItemWithOptions(ResourceRuleId, ResourceRuleItemId, request, headers, runtime);
  }

  /**
   * @summary 删除场景
   *
   * @param request DeleteSceneRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteSceneResponse
   */
  async deleteSceneWithOptions(SceneId: string, request: DeleteSceneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSceneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes/${OpenApiUtil.getEncodeParam(SceneId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSceneResponse>(await this.callApi(params, req, runtime), new DeleteSceneResponse({}));
  }

  /**
   * @summary 删除场景
   *
   * @param request DeleteSceneRequest
   * @return DeleteSceneResponse
   */
  async deleteScene(SceneId: string, request: DeleteSceneRequest): Promise<DeleteSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSceneWithOptions(SceneId, request, headers, runtime);
  }

  /**
   * @summary 删除指定人群下的指定子人群。
   *
   * @param request DeleteSubCrowdRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteSubCrowdResponse
   */
  async deleteSubCrowdWithOptions(CrowdId: string, SubCrowdId: string, request: DeleteSubCrowdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSubCrowdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSubCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${OpenApiUtil.getEncodeParam(CrowdId)}/subcrowds/${OpenApiUtil.getEncodeParam(SubCrowdId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSubCrowdResponse>(await this.callApi(params, req, runtime), new DeleteSubCrowdResponse({}));
  }

  /**
   * @summary 删除指定人群下的指定子人群。
   *
   * @param request DeleteSubCrowdRequest
   * @return DeleteSubCrowdResponse
   */
  async deleteSubCrowd(CrowdId: string, SubCrowdId: string, request: DeleteSubCrowdRequest): Promise<DeleteSubCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSubCrowdWithOptions(CrowdId, SubCrowdId, request, headers, runtime);
  }

  /**
   * @summary 删除数据表。
   *
   * @param request DeleteTableMetaRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTableMetaResponse
   */
  async deleteTableMetaWithOptions(TableMetaId: string, request: DeleteTableMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTableMetaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas/${OpenApiUtil.getEncodeParam(TableMetaId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTableMetaResponse>(await this.callApi(params, req, runtime), new DeleteTableMetaResponse({}));
  }

  /**
   * @summary 删除数据表。
   *
   * @param request DeleteTableMetaRequest
   * @return DeleteTableMetaResponse
   */
  async deleteTableMeta(TableMetaId: string, request: DeleteTableMetaRequest): Promise<DeleteTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  /**
   * @summary 更新流量调控目标
   *
   * @param request DeleteTrafficControlTargetRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTrafficControlTargetResponse
   */
  async deleteTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: DeleteTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTrafficControlTargetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${OpenApiUtil.getEncodeParam(TrafficControlTargetId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new DeleteTrafficControlTargetResponse({}));
  }

  /**
   * @summary 更新流量调控目标
   *
   * @param request DeleteTrafficControlTargetRequest
   * @return DeleteTrafficControlTargetResponse
   */
  async deleteTrafficControlTarget(TrafficControlTargetId: string, request: DeleteTrafficControlTargetRequest): Promise<DeleteTrafficControlTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * @summary 删除指定的流量调控任务
   *
   * @param request DeleteTrafficControlTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTrafficControlTaskResponse
   */
  async deleteTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: DeleteTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTrafficControlTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new DeleteTrafficControlTaskResponse({}));
  }

  /**
   * @summary 删除指定的流量调控任务
   *
   * @param request DeleteTrafficControlTaskRequest
   * @return DeleteTrafficControlTaskResponse
   */
  async deleteTrafficControlTask(TrafficControlTaskId: string, request: DeleteTrafficControlTaskRequest): Promise<DeleteTrafficControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 产生流量调控的相关代码
   *
   * @param request GenerateTrafficControlTaskCodeRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateTrafficControlTaskCodeResponse
   */
  async generateTrafficControlTaskCodeWithOptions(TrafficControlTaskId: string, request: GenerateTrafficControlTaskCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateTrafficControlTaskCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateTrafficControlTaskCode",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}/action/generatecode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateTrafficControlTaskCodeResponse>(await this.callApi(params, req, runtime), new GenerateTrafficControlTaskCodeResponse({}));
  }

  /**
   * @summary 产生流量调控的相关代码
   *
   * @param request GenerateTrafficControlTaskCodeRequest
   * @return GenerateTrafficControlTaskCodeResponse
   */
  async generateTrafficControlTaskCode(TrafficControlTaskId: string, request: GenerateTrafficControlTaskCodeRequest): Promise<GenerateTrafficControlTaskCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTrafficControlTaskCodeWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 产生流量调控的相关召回配置
   *
   * @param request GenerateTrafficControlTaskConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateTrafficControlTaskConfigResponse
   */
  async generateTrafficControlTaskConfigWithOptions(TrafficControlTaskId: string, request: GenerateTrafficControlTaskConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateTrafficControlTaskConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateTrafficControlTaskConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}/action/generateconfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateTrafficControlTaskConfigResponse>(await this.callApi(params, req, runtime), new GenerateTrafficControlTaskConfigResponse({}));
  }

  /**
   * @summary 产生流量调控的相关召回配置
   *
   * @param request GenerateTrafficControlTaskConfigRequest
   * @return GenerateTrafficControlTaskConfigResponse
   */
  async generateTrafficControlTaskConfig(TrafficControlTaskId: string, request: GenerateTrafficControlTaskConfigRequest): Promise<GenerateTrafficControlTaskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTrafficControlTaskConfigWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 获取AB Test实验指标详细信息。
   *
   * @param request GetABMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetABMetricResponse
   */
  async getABMetricWithOptions(ABMetricId: string, request: GetABMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetABMetricResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics/${OpenApiUtil.getEncodeParam(ABMetricId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetABMetricResponse>(await this.callApi(params, req, runtime), new GetABMetricResponse({}));
  }

  /**
   * @summary 获取AB Test实验指标详细信息。
   *
   * @param request GetABMetricRequest
   * @return GetABMetricResponse
   */
  async getABMetric(ABMetricId: string, request: GetABMetricRequest): Promise<GetABMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

  /**
   * @summary 获取AB实验指标组详细信息。
   *
   * @param request GetABMetricGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetABMetricGroupResponse
   */
  async getABMetricGroupWithOptions(ABMetricGroupId: string, request: GetABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetABMetricGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${OpenApiUtil.getEncodeParam(ABMetricGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetABMetricGroupResponse>(await this.callApi(params, req, runtime), new GetABMetricGroupResponse({}));
  }

  /**
   * @summary 获取AB实验指标组详细信息。
   *
   * @param request GetABMetricGroupRequest
   * @return GetABMetricGroupResponse
   */
  async getABMetricGroup(ABMetricGroupId: string, request: GetABMetricGroupRequest): Promise<GetABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * @summary 获取指定计算任务详细信息。
   *
   * @param request GetCalculationJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCalculationJobResponse
   */
  async getCalculationJobWithOptions(CalculationJobId: string, request: GetCalculationJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCalculationJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCalculationJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/calculationjobs/${OpenApiUtil.getEncodeParam(CalculationJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCalculationJobResponse>(await this.callApi(params, req, runtime), new GetCalculationJobResponse({}));
  }

  /**
   * @summary 获取指定计算任务详细信息。
   *
   * @param request GetCalculationJobRequest
   * @return GetCalculationJobResponse
   */
  async getCalculationJob(CalculationJobId: string, request: GetCalculationJobRequest): Promise<GetCalculationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCalculationJobWithOptions(CalculationJobId, request, headers, runtime);
  }

  /**
   * @summary 获取实验详细信息。
   *
   * @param request GetExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetExperimentResponse
   */
  async getExperimentWithOptions(ExperimentId: string, request: GetExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentResponse>(await this.callApi(params, req, runtime), new GetExperimentResponse({}));
  }

  /**
   * @summary 获取实验详细信息。
   *
   * @param request GetExperimentRequest
   * @return GetExperimentResponse
   */
  async getExperiment(ExperimentId: string, request: GetExperimentRequest): Promise<GetExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * @summary 获取指定实验组详细信息。
   *
   * @param request GetExperimentGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetExperimentGroupResponse
   */
  async getExperimentGroupWithOptions(ExperimentGroupId: string, request: GetExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${OpenApiUtil.getEncodeParam(ExperimentGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentGroupResponse>(await this.callApi(params, req, runtime), new GetExperimentGroupResponse({}));
  }

  /**
   * @summary 获取指定实验组详细信息。
   *
   * @param request GetExperimentGroupRequest
   * @return GetExperimentGroupResponse
   */
  async getExperimentGroup(ExperimentGroupId: string, request: GetExperimentGroupRequest): Promise<GetExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * @summary 获取特征一致性检查任务详细信息。
   *
   * @param request GetFeatureConsistencyCheckJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFeatureConsistencyCheckJobResponse
   */
  async getFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId: string, request: GetFeatureConsistencyCheckJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFeatureConsistencyCheckJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFeatureConsistencyCheckJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${OpenApiUtil.getEncodeParam(FeatureConsistencyCheckJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFeatureConsistencyCheckJobResponse>(await this.callApi(params, req, runtime), new GetFeatureConsistencyCheckJobResponse({}));
  }

  /**
   * @summary 获取特征一致性检查任务详细信息。
   *
   * @param request GetFeatureConsistencyCheckJobRequest
   * @return GetFeatureConsistencyCheckJobResponse
   */
  async getFeatureConsistencyCheckJob(FeatureConsistencyCheckJobId: string, request: GetFeatureConsistencyCheckJobRequest): Promise<GetFeatureConsistencyCheckJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * @summary 获取特征一致性检测配置详情。
   *
   * @param request GetFeatureConsistencyCheckJobConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFeatureConsistencyCheckJobConfigResponse
   */
  async getFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId: string, request: GetFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFeatureConsistencyCheckJobConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs/${OpenApiUtil.getEncodeParam(FeatureConsistencyCheckJobConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new GetFeatureConsistencyCheckJobConfigResponse({}));
  }

  /**
   * @summary 获取特征一致性检测配置详情。
   *
   * @param request GetFeatureConsistencyCheckJobConfigRequest
   * @return GetFeatureConsistencyCheckJobConfigResponse
   */
  async getFeatureConsistencyCheckJobConfig(FeatureConsistencyCheckJobConfigId: string, request: GetFeatureConsistencyCheckJobConfigRequest): Promise<GetFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

  /**
   * @summary 获取指定推荐全链路深度定制开发平台实例信息。
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInstanceResponse
   */
  async getInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * @summary 获取指定推荐全链路深度定制开发平台实例信息。
   *
   * @return GetInstanceResponse
   */
  async getInstance(InstanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * @summary 获取指定实例下指定资源的详细信息。
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInstanceResourceResponse
   */
  async getInstanceResourceWithOptions(InstanceId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/resources/${OpenApiUtil.getEncodeParam(ResourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResourceResponse>(await this.callApi(params, req, runtime), new GetInstanceResourceResponse({}));
  }

  /**
   * @summary 获取指定实例下指定资源的详细信息。
   *
   * @return GetInstanceResourceResponse
   */
  async getInstanceResource(InstanceId: string, ResourceId: string): Promise<GetInstanceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceResourceWithOptions(InstanceId, ResourceId, headers, runtime);
  }

  /**
   * @summary 获取数据源下指定表的详细信息。
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInstanceResourceTableResponse
   */
  async getInstanceResourceTableWithOptions(InstanceId: string, ResourceId: string, TableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResourceTableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceResourceTable",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/resources/${OpenApiUtil.getEncodeParam(ResourceId)}/tables/${OpenApiUtil.getEncodeParam(TableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResourceTableResponse>(await this.callApi(params, req, runtime), new GetInstanceResourceTableResponse({}));
  }

  /**
   * @summary 获取数据源下指定表的详细信息。
   *
   * @return GetInstanceResourceTableResponse
   */
  async getInstanceResourceTable(InstanceId: string, ResourceId: string, TableName: string): Promise<GetInstanceResourceTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceResourceTableWithOptions(InstanceId, ResourceId, TableName, headers, runtime);
  }

  /**
   * @summary 获取实验室详细信息。
   *
   * @param request GetLaboratoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetLaboratoryResponse
   */
  async getLaboratoryWithOptions(LaboratoryId: string, request: GetLaboratoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLaboratoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${OpenApiUtil.getEncodeParam(LaboratoryId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLaboratoryResponse>(await this.callApi(params, req, runtime), new GetLaboratoryResponse({}));
  }

  /**
   * @summary 获取实验室详细信息。
   *
   * @param request GetLaboratoryRequest
   * @return GetLaboratoryResponse
   */
  async getLaboratory(LaboratoryId: string, request: GetLaboratoryRequest): Promise<GetLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * @summary 获取层详细信息。
   *
   * @param request GetLayerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetLayerResponse
   */
  async getLayerWithOptions(LayerId: string, request: GetLayerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLayerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${OpenApiUtil.getEncodeParam(LayerId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLayerResponse>(await this.callApi(params, req, runtime), new GetLayerResponse({}));
  }

  /**
   * @summary 获取层详细信息。
   *
   * @param request GetLayerRequest
   * @return GetLayerResponse
   */
  async getLayer(LayerId: string, request: GetLayerRequest): Promise<GetLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * @summary 获取资源规则详细信息
   *
   * @param request GetResourceRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourceRuleResponse
   */
  async getResourceRuleWithOptions(ResourceRuleId: string, request: GetResourceRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${OpenApiUtil.getEncodeParam(ResourceRuleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceRuleResponse>(await this.callApi(params, req, runtime), new GetResourceRuleResponse({}));
  }

  /**
   * @summary 获取资源规则详细信息
   *
   * @param request GetResourceRuleRequest
   * @return GetResourceRuleResponse
   */
  async getResourceRule(ResourceRuleId: string, request: GetResourceRuleRequest): Promise<GetResourceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * @summary 获取场景详细信息
   *
   * @param request GetSceneRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSceneResponse
   */
  async getSceneWithOptions(SceneId: string, request: GetSceneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSceneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes/${OpenApiUtil.getEncodeParam(SceneId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSceneResponse>(await this.callApi(params, req, runtime), new GetSceneResponse({}));
  }

  /**
   * @summary 获取场景详细信息
   *
   * @param request GetSceneRequest
   * @return GetSceneResponse
   */
  async getScene(SceneId: string, request: GetSceneRequest): Promise<GetSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSceneWithOptions(SceneId, request, headers, runtime);
  }

  /**
   * @summary 获取指定人群下的指定子人群的详细信息。
   *
   * @param request GetSubCrowdRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSubCrowdResponse
   */
  async getSubCrowdWithOptions(CrowdId: string, SubCrowdId: string, request: GetSubCrowdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSubCrowdResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSubCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${OpenApiUtil.getEncodeParam(CrowdId)}/subcrowds/${OpenApiUtil.getEncodeParam(SubCrowdId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSubCrowdResponse>(await this.callApi(params, req, runtime), new GetSubCrowdResponse({}));
  }

  /**
   * @summary 获取指定人群下的指定子人群的详细信息。
   *
   * @param request GetSubCrowdRequest
   * @return GetSubCrowdResponse
   */
  async getSubCrowd(CrowdId: string, SubCrowdId: string, request: GetSubCrowdRequest): Promise<GetSubCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubCrowdWithOptions(CrowdId, SubCrowdId, request, headers, runtime);
  }

  /**
   * @summary 获取数据表详细信息。
   *
   * @param request GetTableMetaRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTableMetaResponse
   */
  async getTableMetaWithOptions(TableMetaId: string, request: GetTableMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableMetaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas/${OpenApiUtil.getEncodeParam(TableMetaId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableMetaResponse>(await this.callApi(params, req, runtime), new GetTableMetaResponse({}));
  }

  /**
   * @summary 获取数据表详细信息。
   *
   * @param request GetTableMetaRequest
   * @return GetTableMetaResponse
   */
  async getTableMeta(TableMetaId: string, request: GetTableMetaRequest): Promise<GetTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  /**
   * @summary 获取流量调控目标详情
   *
   * @param request GetTrafficControlTargetRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTrafficControlTargetResponse
   */
  async getTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: GetTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTrafficControlTargetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${OpenApiUtil.getEncodeParam(TrafficControlTargetId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new GetTrafficControlTargetResponse({}));
  }

  /**
   * @summary 获取流量调控目标详情
   *
   * @param request GetTrafficControlTargetRequest
   * @return GetTrafficControlTargetResponse
   */
  async getTrafficControlTarget(TrafficControlTargetId: string, request: GetTrafficControlTargetRequest): Promise<GetTrafficControlTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * @summary 获取流量调控任务详情
   *
   * @param request GetTrafficControlTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTrafficControlTaskResponse
   */
  async getTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: GetTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTrafficControlTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.controlTargetFilter)) {
      query["ControlTargetFilter"] = request.controlTargetFilter;
    }

    if (!Util.isUnset(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new GetTrafficControlTaskResponse({}));
  }

  /**
   * @summary 获取流量调控任务详情
   *
   * @param request GetTrafficControlTaskRequest
   * @return GetTrafficControlTaskResponse
   */
  async getTrafficControlTask(TrafficControlTaskId: string, request: GetTrafficControlTaskRequest): Promise<GetTrafficControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 获取流量调控任务的流量详情
   *
   * @param request GetTrafficControlTaskTrafficRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTrafficControlTaskTrafficResponse
   */
  async getTrafficControlTaskTrafficWithOptions(TrafficControlTaskId: string, request: GetTrafficControlTaskTrafficRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTrafficControlTaskTrafficResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrafficControlTaskTraffic",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}/trafficinfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTrafficControlTaskTrafficResponse>(await this.callApi(params, req, runtime), new GetTrafficControlTaskTrafficResponse({}));
  }

  /**
   * @summary 获取流量调控任务的流量详情
   *
   * @param request GetTrafficControlTaskTrafficRequest
   * @return GetTrafficControlTaskTrafficResponse
   */
  async getTrafficControlTaskTraffic(TrafficControlTaskId: string, request: GetTrafficControlTaskTrafficRequest): Promise<GetTrafficControlTaskTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrafficControlTaskTrafficWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 获取AB Test实验指标组列表。
   *
   * @param request ListABMetricGroupsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListABMetricGroupsResponse
   */
  async listABMetricGroupsWithOptions(request: ListABMetricGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABMetricGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.realtime)) {
      query["Realtime"] = request.realtime;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListABMetricGroupsResponse>(await this.callApi(params, req, runtime), new ListABMetricGroupsResponse({}));
  }

  /**
   * @summary 获取AB Test实验指标组列表。
   *
   * @param request ListABMetricGroupsRequest
   * @return ListABMetricGroupsResponse
   */
  async listABMetricGroups(request: ListABMetricGroupsRequest): Promise<ListABMetricGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABMetricGroupsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取AB Test实验指标列表。
   *
   * @param request ListABMetricsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListABMetricsResponse
   */
  async listABMetricsWithOptions(request: ListABMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.realtime)) {
      query["Realtime"] = request.realtime;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.tableMetaId)) {
      query["TableMetaId"] = request.tableMetaId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListABMetricsResponse>(await this.callApi(params, req, runtime), new ListABMetricsResponse({}));
  }

  /**
   * @summary 获取AB Test实验指标列表。
   *
   * @param request ListABMetricsRequest
   * @return ListABMetricsResponse
   */
  async listABMetrics(request: ListABMetricsRequest): Promise<ListABMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABMetricsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取计算任务列表。
   *
   * @param request ListCalculationJobsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCalculationJobsResponse
   */
  async listCalculationJobsWithOptions(request: ListCalculationJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCalculationJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListCalculationJobsResponse>(await this.callApi(params, req, runtime), new ListCalculationJobsResponse({}));
  }

  /**
   * @summary 获取计算任务列表。
   *
   * @param request ListCalculationJobsRequest
   * @return ListCalculationJobsResponse
   */
  async listCalculationJobs(request: ListCalculationJobsRequest): Promise<ListCalculationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCalculationJobsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取人群下的所有用户。
   *
   * @param request ListCrowdUsersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCrowdUsersResponse
   */
  async listCrowdUsersWithOptions(CrowdId: string, request: ListCrowdUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCrowdUsersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCrowdUsers",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${OpenApiUtil.getEncodeParam(CrowdId)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCrowdUsersResponse>(await this.callApi(params, req, runtime), new ListCrowdUsersResponse({}));
  }

  /**
   * @summary 获取人群下的所有用户。
   *
   * @param request ListCrowdUsersRequest
   * @return ListCrowdUsersResponse
   */
  async listCrowdUsers(CrowdId: string, request: ListCrowdUsersRequest): Promise<ListCrowdUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCrowdUsersWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * @summary 获取人群列表。
   *
   * @param request ListCrowdsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCrowdsResponse
   */
  async listCrowdsWithOptions(request: ListCrowdsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCrowdsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListCrowdsResponse>(await this.callApi(params, req, runtime), new ListCrowdsResponse({}));
  }

  /**
   * @summary 获取人群列表。
   *
   * @param request ListCrowdsRequest
   * @return ListCrowdsResponse
   */
  async listCrowds(request: ListCrowdsRequest): Promise<ListCrowdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCrowdsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取实验组列表。
   *
   * @param request ListExperimentGroupsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListExperimentGroupsResponse
   */
  async listExperimentGroupsWithOptions(request: ListExperimentGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.layerId)) {
      query["LayerId"] = request.layerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.timeRangeEnd)) {
      query["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!Util.isUnset(request.timeRangeStart)) {
      query["TimeRangeStart"] = request.timeRangeStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListExperimentGroupsResponse>(await this.callApi(params, req, runtime), new ListExperimentGroupsResponse({}));
  }

  /**
   * @summary 获取实验组列表。
   *
   * @param request ListExperimentGroupsRequest
   * @return ListExperimentGroupsResponse
   */
  async listExperimentGroups(request: ListExperimentGroupsRequest): Promise<ListExperimentGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentGroupsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取实验列表。
   *
   * @param request ListExperimentsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListExperimentsResponse
   */
  async listExperimentsWithOptions(request: ListExperimentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.experimentGroupId)) {
      query["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListExperimentsResponse>(await this.callApi(params, req, runtime), new ListExperimentsResponse({}));
  }

  /**
   * @summary 获取实验列表。
   *
   * @param request ListExperimentsRequest
   * @return ListExperimentsResponse
   */
  async listExperiments(request: ListExperimentsRequest): Promise<ListExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取特征一致性检查配置列表。
   *
   * @param request ListFeatureConsistencyCheckJobConfigsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFeatureConsistencyCheckJobConfigsResponse
   */
  async listFeatureConsistencyCheckJobConfigsWithOptions(request: ListFeatureConsistencyCheckJobConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureConsistencyCheckJobConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListFeatureConsistencyCheckJobConfigsResponse>(await this.callApi(params, req, runtime), new ListFeatureConsistencyCheckJobConfigsResponse({}));
  }

  /**
   * @summary 获取特征一致性检查配置列表。
   *
   * @param request ListFeatureConsistencyCheckJobConfigsRequest
   * @return ListFeatureConsistencyCheckJobConfigsResponse
   */
  async listFeatureConsistencyCheckJobConfigs(request: ListFeatureConsistencyCheckJobConfigsRequest): Promise<ListFeatureConsistencyCheckJobConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobConfigsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取特征一致性检查任务的特征报表/比对结果。
   *
   * @param request ListFeatureConsistencyCheckJobFeatureReportsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFeatureConsistencyCheckJobFeatureReportsResponse
   */
  async listFeatureConsistencyCheckJobFeatureReportsWithOptions(FeatureConsistencyCheckJobId: string, request: ListFeatureConsistencyCheckJobFeatureReportsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureConsistencyCheckJobFeatureReportsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logItemId)) {
      query["LogItemId"] = request.logItemId;
    }

    if (!Util.isUnset(request.logRequestId)) {
      query["LogRequestId"] = request.logRequestId;
    }

    if (!Util.isUnset(request.logUserId)) {
      query["LogUserId"] = request.logUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFeatureConsistencyCheckJobFeatureReports",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${OpenApiUtil.getEncodeParam(FeatureConsistencyCheckJobId)}/featurereports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFeatureConsistencyCheckJobFeatureReportsResponse>(await this.callApi(params, req, runtime), new ListFeatureConsistencyCheckJobFeatureReportsResponse({}));
  }

  /**
   * @summary 获取特征一致性检查任务的特征报表/比对结果。
   *
   * @param request ListFeatureConsistencyCheckJobFeatureReportsRequest
   * @return ListFeatureConsistencyCheckJobFeatureReportsResponse
   */
  async listFeatureConsistencyCheckJobFeatureReports(FeatureConsistencyCheckJobId: string, request: ListFeatureConsistencyCheckJobFeatureReportsRequest): Promise<ListFeatureConsistencyCheckJobFeatureReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobFeatureReportsWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * @summary 获取特征一致性检查任务分数报表/比对结果。
   *
   * @param tmpReq ListFeatureConsistencyCheckJobScoreReportsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFeatureConsistencyCheckJobScoreReportsResponse
   */
  async listFeatureConsistencyCheckJobScoreReportsWithOptions(FeatureConsistencyCheckJobId: string, tmpReq: ListFeatureConsistencyCheckJobScoreReportsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureConsistencyCheckJobScoreReportsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListFeatureConsistencyCheckJobScoreReportsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.excludeRequestIds)) {
      request.excludeRequestIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeRequestIds, "ExcludeRequestIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeRequestIdsShrink)) {
      query["ExcludeRequestIds"] = request.excludeRequestIdsShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFeatureConsistencyCheckJobScoreReports",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${OpenApiUtil.getEncodeParam(FeatureConsistencyCheckJobId)}/scorereports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFeatureConsistencyCheckJobScoreReportsResponse>(await this.callApi(params, req, runtime), new ListFeatureConsistencyCheckJobScoreReportsResponse({}));
  }

  /**
   * @summary 获取特征一致性检查任务分数报表/比对结果。
   *
   * @param request ListFeatureConsistencyCheckJobScoreReportsRequest
   * @return ListFeatureConsistencyCheckJobScoreReportsResponse
   */
  async listFeatureConsistencyCheckJobScoreReports(FeatureConsistencyCheckJobId: string, request: ListFeatureConsistencyCheckJobScoreReportsRequest): Promise<ListFeatureConsistencyCheckJobScoreReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobScoreReportsWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * @summary 获取特征一致性检查任务列表。
   *
   * @param request ListFeatureConsistencyCheckJobsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFeatureConsistencyCheckJobsResponse
   */
  async listFeatureConsistencyCheckJobsWithOptions(request: ListFeatureConsistencyCheckJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureConsistencyCheckJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListFeatureConsistencyCheckJobsResponse>(await this.callApi(params, req, runtime), new ListFeatureConsistencyCheckJobsResponse({}));
  }

  /**
   * @summary 获取特征一致性检查任务列表。
   *
   * @param request ListFeatureConsistencyCheckJobsRequest
   * @return ListFeatureConsistencyCheckJobsResponse
   */
  async listFeatureConsistencyCheckJobs(request: ListFeatureConsistencyCheckJobsRequest): Promise<ListFeatureConsistencyCheckJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取实例下配置的资源列表。
   *
   * @param request ListInstanceResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInstanceResourcesResponse
   */
  async listInstanceResourcesWithOptions(InstanceId: string, request: ListInstanceResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceResources",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceResourcesResponse>(await this.callApi(params, req, runtime), new ListInstanceResourcesResponse({}));
  }

  /**
   * @summary 获取实例下配置的资源列表。
   *
   * @param request ListInstanceResourcesRequest
   * @return ListInstanceResourcesResponse
   */
  async listInstanceResources(InstanceId: string, request: ListInstanceResourcesRequest): Promise<ListInstanceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceResourcesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @summary 获取推荐全链路深度定制开发平台实例信息列表。
   *
   * @param request ListInstancesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * @summary 获取推荐全链路深度定制开发平台实例信息列表。
   *
   * @param request ListInstancesRequest
   * @return ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取实验室列表。
   *
   * @param request ListLaboratoriesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListLaboratoriesResponse
   */
  async listLaboratoriesWithOptions(request: ListLaboratoriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLaboratoriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListLaboratoriesResponse>(await this.callApi(params, req, runtime), new ListLaboratoriesResponse({}));
  }

  /**
   * @summary 获取实验室列表。
   *
   * @param request ListLaboratoriesRequest
   * @return ListLaboratoriesResponse
   */
  async listLaboratories(request: ListLaboratoriesRequest): Promise<ListLaboratoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLaboratoriesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取层列表。
   *
   * @param request ListLayersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListLayersResponse
   */
  async listLayersWithOptions(request: ListLayersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLayersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.laboratoryId)) {
      query["LaboratoryId"] = request.laboratoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListLayersResponse>(await this.callApi(params, req, runtime), new ListLayersResponse({}));
  }

  /**
   * @summary 获取层列表。
   *
   * @param request ListLayersRequest
   * @return ListLayersResponse
   */
  async listLayers(request: ListLayersRequest): Promise<ListLayersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayersWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取参数列表。
   *
   * @param request ListParamsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListParamsResponse
   */
  async listParamsWithOptions(request: ListParamsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListParamsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListParamsResponse>(await this.callApi(params, req, runtime), new ListParamsResponse({}));
  }

  /**
   * @summary 获取参数列表。
   *
   * @param request ListParamsRequest
   * @return ListParamsResponse
   */
  async listParams(request: ListParamsRequest): Promise<ListParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParamsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取资源规则列表
   *
   * @param request ListResourceRulesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListResourceRulesResponse
   */
  async listResourceRulesWithOptions(request: ListResourceRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceRuleId)) {
      query["ResourceRuleId"] = request.resourceRuleId;
    }

    if (!Util.isUnset(request.resourceRuleName)) {
      query["ResourceRuleName"] = request.resourceRuleName;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListResourceRulesResponse>(await this.callApi(params, req, runtime), new ListResourceRulesResponse({}));
  }

  /**
   * @summary 获取资源规则列表
   *
   * @param request ListResourceRulesRequest
   * @return ListResourceRulesResponse
   */
  async listResourceRules(request: ListResourceRulesRequest): Promise<ListResourceRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceRulesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取场景列表
   *
   * @param request ListScenesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListScenesResponse
   */
  async listScenesWithOptions(request: ListScenesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListScenesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListScenesResponse>(await this.callApi(params, req, runtime), new ListScenesResponse({}));
  }

  /**
   * @summary 获取场景列表
   *
   * @param request ListScenesRequest
   * @return ListScenesResponse
   */
  async listScenes(request: ListScenesRequest): Promise<ListScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScenesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取人群下的所有子人群。
   *
   * @param request ListSubCrowdsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSubCrowdsResponse
   */
  async listSubCrowdsWithOptions(CrowdId: string, request: ListSubCrowdsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSubCrowdsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubCrowds",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${OpenApiUtil.getEncodeParam(CrowdId)}/subcrowds`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSubCrowdsResponse>(await this.callApi(params, req, runtime), new ListSubCrowdsResponse({}));
  }

  /**
   * @summary 获取人群下的所有子人群。
   *
   * @param request ListSubCrowdsRequest
   * @return ListSubCrowdsResponse
   */
  async listSubCrowds(CrowdId: string, request: ListSubCrowdsRequest): Promise<ListSubCrowdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubCrowdsWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * @summary 获取数据表列表。
   *
   * @param request ListTableMetasRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTableMetasResponse
   */
  async listTableMetasWithOptions(request: ListTableMetasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTableMetasResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.module)) {
      query["Module"] = request.module;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListTableMetasResponse>(await this.callApi(params, req, runtime), new ListTableMetasResponse({}));
  }

  /**
   * @summary 获取数据表列表。
   *
   * @param request ListTableMetasRequest
   * @return ListTableMetasResponse
   */
  async listTableMetas(request: ListTableMetasRequest): Promise<ListTableMetasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableMetasWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取流量调控任务流量变更的历史列表
   *
   * @param request ListTrafficControlTargetTrafficHistoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTrafficControlTargetTrafficHistoryResponse
   */
  async listTrafficControlTargetTrafficHistoryWithOptions(TrafficControlTargetId: string, request: ListTrafficControlTargetTrafficHistoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTrafficControlTargetTrafficHistoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.experimentGroupId)) {
      query["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrafficControlTargetTrafficHistory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${OpenApiUtil.getEncodeParam(TrafficControlTargetId)}/traffichistories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTrafficControlTargetTrafficHistoryResponse>(await this.callApi(params, req, runtime), new ListTrafficControlTargetTrafficHistoryResponse({}));
  }

  /**
   * @summary 获取流量调控任务流量变更的历史列表
   *
   * @param request ListTrafficControlTargetTrafficHistoryRequest
   * @return ListTrafficControlTargetTrafficHistoryResponse
   */
  async listTrafficControlTargetTrafficHistory(TrafficControlTargetId: string, request: ListTrafficControlTargetTrafficHistoryRequest): Promise<ListTrafficControlTargetTrafficHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrafficControlTargetTrafficHistoryWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * @summary 获取流量调控列表
   *
   * @param request ListTrafficControlTasksRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTrafficControlTasksResponse
   */
  async listTrafficControlTasksWithOptions(request: ListTrafficControlTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTrafficControlTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.controlTargetFilter)) {
      query["ControlTargetFilter"] = request.controlTargetFilter;
    }

    if (!Util.isUnset(request.environment)) {
      query["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.trafficControlTaskId)) {
      query["TrafficControlTaskId"] = request.trafficControlTaskId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListTrafficControlTasksResponse>(await this.callApi(params, req, runtime), new ListTrafficControlTasksResponse({}));
  }

  /**
   * @summary 获取流量调控列表
   *
   * @param request ListTrafficControlTasksRequest
   * @return ListTrafficControlTasksResponse
   */
  async listTrafficControlTasks(request: ListTrafficControlTasksRequest): Promise<ListTrafficControlTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrafficControlTasksWithOptions(request, headers, runtime);
  }

  /**
   * @summary 上线实验。
   *
   * @param request OfflineExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return OfflineExperimentResponse
   */
  async offlineExperimentWithOptions(ExperimentId: string, request: OfflineExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OfflineExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OfflineExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OfflineExperimentResponse>(await this.callApi(params, req, runtime), new OfflineExperimentResponse({}));
  }

  /**
   * @summary 上线实验。
   *
   * @param request OfflineExperimentRequest
   * @return OfflineExperimentResponse
   */
  async offlineExperiment(ExperimentId: string, request: OfflineExperimentRequest): Promise<OfflineExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * @summary 下线实验组。
   *
   * @param request OfflineExperimentGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return OfflineExperimentGroupResponse
   */
  async offlineExperimentGroupWithOptions(ExperimentGroupId: string, request: OfflineExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OfflineExperimentGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OfflineExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${OpenApiUtil.getEncodeParam(ExperimentGroupId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OfflineExperimentGroupResponse>(await this.callApi(params, req, runtime), new OfflineExperimentGroupResponse({}));
  }

  /**
   * @summary 下线实验组。
   *
   * @param request OfflineExperimentGroupRequest
   * @return OfflineExperimentGroupResponse
   */
  async offlineExperimentGroup(ExperimentGroupId: string, request: OfflineExperimentGroupRequest): Promise<OfflineExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * @summary 下线实验室。
   *
   * @param request OfflineLaboratoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return OfflineLaboratoryResponse
   */
  async offlineLaboratoryWithOptions(LaboratoryId: string, request: OfflineLaboratoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OfflineLaboratoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OfflineLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${OpenApiUtil.getEncodeParam(LaboratoryId)}/action/offline`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OfflineLaboratoryResponse>(await this.callApi(params, req, runtime), new OfflineLaboratoryResponse({}));
  }

  /**
   * @summary 下线实验室。
   *
   * @param request OfflineLaboratoryRequest
   * @return OfflineLaboratoryResponse
   */
  async offlineLaboratory(LaboratoryId: string, request: OfflineLaboratoryRequest): Promise<OfflineLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * @summary 上线实验
   *
   * @param request OnlineExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return OnlineExperimentResponse
   */
  async onlineExperimentWithOptions(ExperimentId: string, request: OnlineExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OnlineExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OnlineExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OnlineExperimentResponse>(await this.callApi(params, req, runtime), new OnlineExperimentResponse({}));
  }

  /**
   * @summary 上线实验
   *
   * @param request OnlineExperimentRequest
   * @return OnlineExperimentResponse
   */
  async onlineExperiment(ExperimentId: string, request: OnlineExperimentRequest): Promise<OnlineExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * @summary 上线实验组。
   *
   * @param request OnlineExperimentGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return OnlineExperimentGroupResponse
   */
  async onlineExperimentGroupWithOptions(ExperimentGroupId: string, request: OnlineExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OnlineExperimentGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OnlineExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${OpenApiUtil.getEncodeParam(ExperimentGroupId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OnlineExperimentGroupResponse>(await this.callApi(params, req, runtime), new OnlineExperimentGroupResponse({}));
  }

  /**
   * @summary 上线实验组。
   *
   * @param request OnlineExperimentGroupRequest
   * @return OnlineExperimentGroupResponse
   */
  async onlineExperimentGroup(ExperimentGroupId: string, request: OnlineExperimentGroupRequest): Promise<OnlineExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * @summary 上线实验室。
   *
   * @param request OnlineLaboratoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return OnlineLaboratoryResponse
   */
  async onlineLaboratoryWithOptions(LaboratoryId: string, request: OnlineLaboratoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OnlineLaboratoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OnlineLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${OpenApiUtil.getEncodeParam(LaboratoryId)}/action/online`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OnlineLaboratoryResponse>(await this.callApi(params, req, runtime), new OnlineLaboratoryResponse({}));
  }

  /**
   * @summary 上线实验室。
   *
   * @param request OnlineLaboratoryRequest
   * @return OnlineLaboratoryResponse
   */
  async onlineLaboratory(LaboratoryId: string, request: OnlineLaboratoryRequest): Promise<OnlineLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * @summary 推全。
   *
   * @param request PushAllExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PushAllExperimentResponse
   */
  async pushAllExperimentWithOptions(ExperimentId: string, request: PushAllExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushAllExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushAllExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}/action/pushall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushAllExperimentResponse>(await this.callApi(params, req, runtime), new PushAllExperimentResponse({}));
  }

  /**
   * @summary 推全。
   *
   * @param request PushAllExperimentRequest
   * @return PushAllExperimentResponse
   */
  async pushAllExperiment(ExperimentId: string, request: PushAllExperimentRequest): Promise<PushAllExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushAllExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * @summary 推送指标到指定资源规则
   *
   * @param tmpReq PushResourceRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PushResourceRuleResponse
   */
  async pushResourceRuleWithOptions(ResourceRuleId: string, tmpReq: PushResourceRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushResourceRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new PushResourceRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.metricInfo)) {
      request.metricInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricInfo, "MetricInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metricInfoShrink)) {
      query["MetricInfo"] = request.metricInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${OpenApiUtil.getEncodeParam(ResourceRuleId)}/action/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushResourceRuleResponse>(await this.callApi(params, req, runtime), new PushResourceRuleResponse({}));
  }

  /**
   * @summary 推送指标到指定资源规则
   *
   * @param request PushResourceRuleRequest
   * @return PushResourceRuleResponse
   */
  async pushResourceRule(ResourceRuleId: string, request: PushResourceRuleRequest): Promise<PushResourceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * @summary 发布流量调控任务
   *
   * @param request ReleaseTrafficControlTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReleaseTrafficControlTaskResponse
   */
  async releaseTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: ReleaseTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReleaseTrafficControlTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}/action/release`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReleaseTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new ReleaseTrafficControlTaskResponse({}));
  }

  /**
   * @summary 发布流量调控任务
   *
   * @param request ReleaseTrafficControlTaskRequest
   * @return ReleaseTrafficControlTaskResponse
   */
  async releaseTrafficControlTask(TrafficControlTaskId: string, request: ReleaseTrafficControlTaskRequest): Promise<ReleaseTrafficControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 对指标组进行报表。
   *
   * @param request ReportABMetricGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReportABMetricGroupResponse
   */
  async reportABMetricGroupWithOptions(ABMetricGroupId: string, request: ReportABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReportABMetricGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baseExperimentId)) {
      body["BaseExperimentId"] = request.baseExperimentId;
    }

    if (!Util.isUnset(request.dimensionFields)) {
      body["DimensionFields"] = request.dimensionFields;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.experimentGroupId)) {
      body["ExperimentGroupId"] = request.experimentGroupId;
    }

    if (!Util.isUnset(request.experimentIds)) {
      body["ExperimentIds"] = request.experimentIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.timeStatisticsMethod)) {
      body["TimeStatisticsMethod"] = request.timeStatisticsMethod;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReportABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${OpenApiUtil.getEncodeParam(ABMetricGroupId)}/action/report`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReportABMetricGroupResponse>(await this.callApi(params, req, runtime), new ReportABMetricGroupResponse({}));
  }

  /**
   * @summary 对指标组进行报表。
   *
   * @param request ReportABMetricGroupRequest
   * @return ReportABMetricGroupResponse
   */
  async reportABMetricGroup(ABMetricGroupId: string, request: ReportABMetricGroupRequest): Promise<ReportABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reportABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * @summary 拆分流量调控目标
   *
   * @param request SplitTrafficControlTargetRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SplitTrafficControlTargetResponse
   */
  async splitTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: SplitTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SplitTrafficControlTargetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.setValues)) {
      body["SetValues"] = request.setValues;
    }

    if (!Util.isUnset(request.timePoints)) {
      body["TimePoints"] = request.timePoints;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SplitTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${OpenApiUtil.getEncodeParam(TrafficControlTargetId)}/action/split`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SplitTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new SplitTrafficControlTargetResponse({}));
  }

  /**
   * @summary 拆分流量调控目标
   *
   * @param request SplitTrafficControlTargetRequest
   * @return SplitTrafficControlTargetResponse
   */
  async splitTrafficControlTarget(TrafficControlTargetId: string, request: SplitTrafficControlTargetRequest): Promise<SplitTrafficControlTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.splitTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * @summary 开启流量调控目标
   *
   * @param request StartTrafficControlTargetRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartTrafficControlTargetResponse
   */
  async startTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: StartTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartTrafficControlTargetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${OpenApiUtil.getEncodeParam(TrafficControlTargetId)}/action/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new StartTrafficControlTargetResponse({}));
  }

  /**
   * @summary 开启流量调控目标
   *
   * @param request StartTrafficControlTargetRequest
   * @return StartTrafficControlTargetResponse
   */
  async startTrafficControlTarget(TrafficControlTargetId: string, request: StartTrafficControlTargetRequest): Promise<StartTrafficControlTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * @summary 开启流量调控任务
   *
   * @param request StartTrafficControlTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartTrafficControlTaskResponse
   */
  async startTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: StartTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartTrafficControlTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}/action/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new StartTrafficControlTaskResponse({}));
  }

  /**
   * @summary 开启流量调控任务
   *
   * @param request StartTrafficControlTaskRequest
   * @return StartTrafficControlTaskResponse
   */
  async startTrafficControlTask(TrafficControlTaskId: string, request: StartTrafficControlTaskRequest): Promise<StartTrafficControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 停止流量调控目标
   *
   * @param request StopTrafficControlTargetRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopTrafficControlTargetResponse
   */
  async stopTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: StopTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopTrafficControlTargetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${OpenApiUtil.getEncodeParam(TrafficControlTargetId)}/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new StopTrafficControlTargetResponse({}));
  }

  /**
   * @summary 停止流量调控目标
   *
   * @param request StopTrafficControlTargetRequest
   * @return StopTrafficControlTargetResponse
   */
  async stopTrafficControlTarget(TrafficControlTargetId: string, request: StopTrafficControlTargetRequest): Promise<StopTrafficControlTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * @summary 停止流量调控任务
   *
   * @param request StopTrafficControlTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopTrafficControlTaskResponse
   */
  async stopTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: StopTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopTrafficControlTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new StopTrafficControlTaskResponse({}));
  }

  /**
   * @summary 停止流量调控任务
   *
   * @param request StopTrafficControlTaskRequest
   * @return StopTrafficControlTaskResponse
   */
  async stopTrafficControlTask(TrafficControlTaskId: string, request: StopTrafficControlTaskRequest): Promise<StopTrafficControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 同步特征一致性检测任务重放日志。
   *
   * @param request SyncFeatureConsistencyCheckJobReplayLogRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SyncFeatureConsistencyCheckJobReplayLogResponse
   */
  async syncFeatureConsistencyCheckJobReplayLogWithOptions(request: SyncFeatureConsistencyCheckJobReplayLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SyncFeatureConsistencyCheckJobReplayLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contextFeatures)) {
      body["ContextFeatures"] = request.contextFeatures;
    }

    if (!Util.isUnset(request.featureConsistencyCheckJobConfigId)) {
      body["FeatureConsistencyCheckJobConfigId"] = request.featureConsistencyCheckJobConfigId;
    }

    if (!Util.isUnset(request.generatedFeatures)) {
      body["GeneratedFeatures"] = request.generatedFeatures;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logItemId)) {
      body["LogItemId"] = request.logItemId;
    }

    if (!Util.isUnset(request.logRequestId)) {
      body["LogRequestId"] = request.logRequestId;
    }

    if (!Util.isUnset(request.logRequestTime)) {
      body["LogRequestTime"] = request.logRequestTime;
    }

    if (!Util.isUnset(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!Util.isUnset(request.rawFeatures)) {
      body["RawFeatures"] = request.rawFeatures;
    }

    if (!Util.isUnset(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SyncFeatureConsistencyCheckJobReplayLogResponse>(await this.callApi(params, req, runtime), new SyncFeatureConsistencyCheckJobReplayLogResponse({}));
  }

  /**
   * @summary 同步特征一致性检测任务重放日志。
   *
   * @param request SyncFeatureConsistencyCheckJobReplayLogRequest
   * @return SyncFeatureConsistencyCheckJobReplayLogResponse
   */
  async syncFeatureConsistencyCheckJobReplayLog(request: SyncFeatureConsistencyCheckJobReplayLogRequest): Promise<SyncFeatureConsistencyCheckJobReplayLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncFeatureConsistencyCheckJobReplayLogWithOptions(request, headers, runtime);
  }

  /**
   * @summary 取消指定特征一致性检查正在运行中的任务。
   *
   * @param request TerminateFeatureConsistencyCheckJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return TerminateFeatureConsistencyCheckJobResponse
   */
  async terminateFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId: string, request: TerminateFeatureConsistencyCheckJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TerminateFeatureConsistencyCheckJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TerminateFeatureConsistencyCheckJob",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobs/${OpenApiUtil.getEncodeParam(FeatureConsistencyCheckJobId)}/action/terminate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TerminateFeatureConsistencyCheckJobResponse>(await this.callApi(params, req, runtime), new TerminateFeatureConsistencyCheckJobResponse({}));
  }

  /**
   * @summary 取消指定特征一致性检查正在运行中的任务。
   *
   * @param request TerminateFeatureConsistencyCheckJobRequest
   * @return TerminateFeatureConsistencyCheckJobResponse
   */
  async terminateFeatureConsistencyCheckJob(FeatureConsistencyCheckJobId: string, request: TerminateFeatureConsistencyCheckJobRequest): Promise<TerminateFeatureConsistencyCheckJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminateFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

  /**
   * @summary 更新AB Test实验指标。
   *
   * @param request UpdateABMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateABMetricResponse
   */
  async updateABMetricWithOptions(ABMetricId: string, request: UpdateABMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABMetricResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.leftMetricId)) {
      body["LeftMetricId"] = request.leftMetricId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!Util.isUnset(request.resultResourceId)) {
      body["ResultResourceId"] = request.resultResourceId;
    }

    if (!Util.isUnset(request.rightMetricId)) {
      body["RightMetricId"] = request.rightMetricId;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.statisticsCycle)) {
      body["StatisticsCycle"] = request.statisticsCycle;
    }

    if (!Util.isUnset(request.tableMetaId)) {
      body["TableMetaId"] = request.tableMetaId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateABMetric",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetrics/${OpenApiUtil.getEncodeParam(ABMetricId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateABMetricResponse>(await this.callApi(params, req, runtime), new UpdateABMetricResponse({}));
  }

  /**
   * @summary 更新AB Test实验指标。
   *
   * @param request UpdateABMetricRequest
   * @return UpdateABMetricResponse
   */
  async updateABMetric(ABMetricId: string, request: UpdateABMetricRequest): Promise<UpdateABMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

  /**
   * @summary 更新AB test实验指标组。
   *
   * @param request UpdateABMetricGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateABMetricGroupResponse
   */
  async updateABMetricGroupWithOptions(ABMetricGroupId: string, request: UpdateABMetricGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABMetricGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ABMetricIds)) {
      body["ABMetricIds"] = request.ABMetricIds;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.realtime)) {
      body["Realtime"] = request.realtime;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateABMetricGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/abmetricgroups/${OpenApiUtil.getEncodeParam(ABMetricGroupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateABMetricGroupResponse>(await this.callApi(params, req, runtime), new UpdateABMetricGroupResponse({}));
  }

  /**
   * @summary 更新AB test实验指标组。
   *
   * @param request UpdateABMetricGroupRequest
   * @return UpdateABMetricGroupResponse
   */
  async updateABMetricGroup(ABMetricGroupId: string, request: UpdateABMetricGroupRequest): Promise<UpdateABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

  /**
   * @summary 更新指定人群。
   *
   * @param request UpdateCrowdRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCrowdResponse
   */
  async updateCrowdWithOptions(CrowdId: string, request: UpdateCrowdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateCrowdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCrowd",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${OpenApiUtil.getEncodeParam(CrowdId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateCrowdResponse>(await this.callApi(params, req, runtime), new UpdateCrowdResponse({}));
  }

  /**
   * @summary 更新指定人群。
   *
   * @param request UpdateCrowdRequest
   * @return UpdateCrowdResponse
   */
  async updateCrowd(CrowdId: string, request: UpdateCrowdRequest): Promise<UpdateCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCrowdWithOptions(CrowdId, request, headers, runtime);
  }

  /**
   * @summary 更新实验。
   *
   * @param request UpdateExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateExperimentResponse
   */
  async updateExperimentWithOptions(ExperimentId: string, request: UpdateExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.flowPercent)) {
      body["FlowPercent"] = request.flowPercent;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperiment",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentResponse>(await this.callApi(params, req, runtime), new UpdateExperimentResponse({}));
  }

  /**
   * @summary 更新实验。
   *
   * @param request UpdateExperimentRequest
   * @return UpdateExperimentResponse
   */
  async updateExperiment(ExperimentId: string, request: UpdateExperimentRequest): Promise<UpdateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * @summary 更新指定实验组。
   *
   * @param request UpdateExperimentGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateExperimentGroupResponse
   */
  async updateExperimentGroupWithOptions(ExperimentGroupId: string, request: UpdateExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.crowdId)) {
      body["CrowdId"] = request.crowdId;
    }

    if (!Util.isUnset(request.crowdTargetType)) {
      body["CrowdTargetType"] = request.crowdTargetType;
    }

    if (!Util.isUnset(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.distributionTimeDuration)) {
      body["DistributionTimeDuration"] = request.distributionTimeDuration;
    }

    if (!Util.isUnset(request.distributionType)) {
      body["DistributionType"] = request.distributionType;
    }

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.needAA)) {
      body["NeedAA"] = request.needAA;
    }

    if (!Util.isUnset(request.randomFlow)) {
      body["RandomFlow"] = request.randomFlow;
    }

    if (!Util.isUnset(request.reservcedBuckets)) {
      body["ReservcedBuckets"] = request.reservcedBuckets;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperimentGroup",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentgroups/${OpenApiUtil.getEncodeParam(ExperimentGroupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentGroupResponse>(await this.callApi(params, req, runtime), new UpdateExperimentGroupResponse({}));
  }

  /**
   * @summary 更新指定实验组。
   *
   * @param request UpdateExperimentGroupRequest
   * @return UpdateExperimentGroupResponse
   */
  async updateExperimentGroup(ExperimentGroupId: string, request: UpdateExperimentGroupRequest): Promise<UpdateExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

  /**
   * @summary 更新特征一致性检查配置信息。
   *
   * @param request UpdateFeatureConsistencyCheckJobConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateFeatureConsistencyCheckJobConfigResponse
   */
  async updateFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId: string, request: UpdateFeatureConsistencyCheckJobConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFeatureConsistencyCheckJobConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.compareFeature)) {
      body["CompareFeature"] = request.compareFeature;
    }

    if (!Util.isUnset(request.easServiceName)) {
      body["EasServiceName"] = request.easServiceName;
    }

    if (!Util.isUnset(request.easyRecPackagePath)) {
      body["EasyRecPackagePath"] = request.easyRecPackagePath;
    }

    if (!Util.isUnset(request.easyRecVersion)) {
      body["EasyRecVersion"] = request.easyRecVersion;
    }

    if (!Util.isUnset(request.featureDisplayExclude)) {
      body["FeatureDisplayExclude"] = request.featureDisplayExclude;
    }

    if (!Util.isUnset(request.featureLandingResourceId)) {
      body["FeatureLandingResourceId"] = request.featureLandingResourceId;
    }

    if (!Util.isUnset(request.featurePriority)) {
      body["FeaturePriority"] = request.featurePriority;
    }

    if (!Util.isUnset(request.featureStoreItemId)) {
      body["FeatureStoreItemId"] = request.featureStoreItemId;
    }

    if (!Util.isUnset(request.featureStoreModelId)) {
      body["FeatureStoreModelId"] = request.featureStoreModelId;
    }

    if (!Util.isUnset(request.featureStoreProjectId)) {
      body["FeatureStoreProjectId"] = request.featureStoreProjectId;
    }

    if (!Util.isUnset(request.featureStoreProjectName)) {
      body["FeatureStoreProjectName"] = request.featureStoreProjectName;
    }

    if (!Util.isUnset(request.featureStoreSeqFeatureView)) {
      body["FeatureStoreSeqFeatureView"] = request.featureStoreSeqFeatureView;
    }

    if (!Util.isUnset(request.featureStoreUserId)) {
      body["FeatureStoreUserId"] = request.featureStoreUserId;
    }

    if (!Util.isUnset(request.fgJarVersion)) {
      body["FgJarVersion"] = request.fgJarVersion;
    }

    if (!Util.isUnset(request.fgJsonFileName)) {
      body["FgJsonFileName"] = request.fgJsonFileName;
    }

    if (!Util.isUnset(request.generateZip)) {
      body["GenerateZip"] = request.generateZip;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isUseFeatureStore)) {
      body["IsUseFeatureStore"] = request.isUseFeatureStore;
    }

    if (!Util.isUnset(request.itemIdField)) {
      body["ItemIdField"] = request.itemIdField;
    }

    if (!Util.isUnset(request.itemTable)) {
      body["ItemTable"] = request.itemTable;
    }

    if (!Util.isUnset(request.itemTablePartitionField)) {
      body["ItemTablePartitionField"] = request.itemTablePartitionField;
    }

    if (!Util.isUnset(request.itemTablePartitionFieldFormat)) {
      body["ItemTablePartitionFieldFormat"] = request.itemTablePartitionFieldFormat;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossResourceId)) {
      body["OssResourceId"] = request.ossResourceId;
    }

    if (!Util.isUnset(request.sampleRate)) {
      body["SampleRate"] = request.sampleRate;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.userIdField)) {
      body["UserIdField"] = request.userIdField;
    }

    if (!Util.isUnset(request.userTable)) {
      body["UserTable"] = request.userTable;
    }

    if (!Util.isUnset(request.userTablePartitionField)) {
      body["UserTablePartitionField"] = request.userTablePartitionField;
    }

    if (!Util.isUnset(request.userTablePartitionFieldFormat)) {
      body["UserTablePartitionFieldFormat"] = request.userTablePartitionFieldFormat;
    }

    if (!Util.isUnset(request.workflowName)) {
      body["WorkflowName"] = request.workflowName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFeatureConsistencyCheckJobConfig",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/featureconsistencycheck/jobconfigs/${OpenApiUtil.getEncodeParam(FeatureConsistencyCheckJobConfigId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFeatureConsistencyCheckJobConfigResponse>(await this.callApi(params, req, runtime), new UpdateFeatureConsistencyCheckJobConfigResponse({}));
  }

  /**
   * @summary 更新特征一致性检查配置信息。
   *
   * @param request UpdateFeatureConsistencyCheckJobConfigRequest
   * @return UpdateFeatureConsistencyCheckJobConfigResponse
   */
  async updateFeatureConsistencyCheckJobConfig(FeatureConsistencyCheckJobConfigId: string, request: UpdateFeatureConsistencyCheckJobConfigRequest): Promise<UpdateFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

  /**
   * @summary 更新指定实例下指定资源的信息。
   *
   * @param request UpdateInstanceResourceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateInstanceResourceResponse
   */
  async updateInstanceResourceWithOptions(InstanceId: string, ResourceId: string, request: UpdateInstanceResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceResource",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/resources/${OpenApiUtil.getEncodeParam(ResourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceResourceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResourceResponse({}));
  }

  /**
   * @summary 更新指定实例下指定资源的信息。
   *
   * @param request UpdateInstanceResourceRequest
   * @return UpdateInstanceResourceResponse
   */
  async updateInstanceResource(InstanceId: string, ResourceId: string, request: UpdateInstanceResourceRequest): Promise<UpdateInstanceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceResourceWithOptions(InstanceId, ResourceId, request, headers, runtime);
  }

  /**
   * @summary 更新实验室。
   *
   * @param request UpdateLaboratoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateLaboratoryResponse
   */
  async updateLaboratoryWithOptions(LaboratoryId: string, request: UpdateLaboratoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLaboratoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketCount)) {
      body["BucketCount"] = request.bucketCount;
    }

    if (!Util.isUnset(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!Util.isUnset(request.buckets)) {
      body["Buckets"] = request.buckets;
    }

    if (!Util.isUnset(request.debugCrowdId)) {
      body["DebugCrowdId"] = request.debugCrowdId;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLaboratory",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/laboratories/${OpenApiUtil.getEncodeParam(LaboratoryId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateLaboratoryResponse>(await this.callApi(params, req, runtime), new UpdateLaboratoryResponse({}));
  }

  /**
   * @summary 更新实验室。
   *
   * @param request UpdateLaboratoryRequest
   * @return UpdateLaboratoryResponse
   */
  async updateLaboratory(LaboratoryId: string, request: UpdateLaboratoryRequest): Promise<UpdateLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

  /**
   * @summary 更新层。
   *
   * @param request UpdateLayerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateLayerResponse
   */
  async updateLayerWithOptions(LayerId: string, request: UpdateLayerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLayerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLayer",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${OpenApiUtil.getEncodeParam(LayerId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateLayerResponse>(await this.callApi(params, req, runtime), new UpdateLayerResponse({}));
  }

  /**
   * @summary 更新层。
   *
   * @param request UpdateLayerRequest
   * @return UpdateLayerResponse
   */
  async updateLayer(LayerId: string, request: UpdateLayerRequest): Promise<UpdateLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * @summary 更新参数。
   *
   * @param request UpdateParamRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateParamResponse
   */
  async updateParamWithOptions(ParamId: string, request: UpdateParamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateParamResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateParam",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/params/${OpenApiUtil.getEncodeParam(ParamId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateParamResponse>(await this.callApi(params, req, runtime), new UpdateParamResponse({}));
  }

  /**
   * @summary 更新参数。
   *
   * @param request UpdateParamRequest
   * @return UpdateParamResponse
   */
  async updateParam(ParamId: string, request: UpdateParamRequest): Promise<UpdateParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateParamWithOptions(ParamId, request, headers, runtime);
  }

  /**
   * @summary 获取资源规则列表
   *
   * @param request UpdateResourceRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateResourceRuleResponse
   */
  async updateResourceRuleWithOptions(ResourceRuleId: string, request: UpdateResourceRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceRuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metricOperationType)) {
      body["MetricOperationType"] = request.metricOperationType;
    }

    if (!Util.isUnset(request.metricPullInfo)) {
      body["MetricPullInfo"] = request.metricPullInfo;
    }

    if (!Util.isUnset(request.metricPullPeriod)) {
      body["MetricPullPeriod"] = request.metricPullPeriod;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ruleComputingDefinition)) {
      body["RuleComputingDefinition"] = request.ruleComputingDefinition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceRule",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${OpenApiUtil.getEncodeParam(ResourceRuleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceRuleResponse>(await this.callApi(params, req, runtime), new UpdateResourceRuleResponse({}));
  }

  /**
   * @summary 获取资源规则列表
   *
   * @param request UpdateResourceRuleRequest
   * @return UpdateResourceRuleResponse
   */
  async updateResourceRule(ResourceRuleId: string, request: UpdateResourceRuleRequest): Promise<UpdateResourceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceRuleWithOptions(ResourceRuleId, request, headers, runtime);
  }

  /**
   * @summary 更新资源规则条目
   *
   * @param request UpdateResourceRuleItemRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateResourceRuleItemResponse
   */
  async updateResourceRuleItemWithOptions(ResourceRuleId: string, ResourceRuleItemId: string, request: UpdateResourceRuleItemRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceRuleItemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxValue)) {
      body["MaxValue"] = request.maxValue;
    }

    if (!Util.isUnset(request.minValue)) {
      body["MinValue"] = request.minValue;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceRuleItem",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/resourcerules/${OpenApiUtil.getEncodeParam(ResourceRuleId)}/items/${OpenApiUtil.getEncodeParam(ResourceRuleItemId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceRuleItemResponse>(await this.callApi(params, req, runtime), new UpdateResourceRuleItemResponse({}));
  }

  /**
   * @summary 更新资源规则条目
   *
   * @param request UpdateResourceRuleItemRequest
   * @return UpdateResourceRuleItemResponse
   */
  async updateResourceRuleItem(ResourceRuleId: string, ResourceRuleItemId: string, request: UpdateResourceRuleItemRequest): Promise<UpdateResourceRuleItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceRuleItemWithOptions(ResourceRuleId, ResourceRuleItemId, request, headers, runtime);
  }

  /**
   * @summary 更新场景
   *
   * @param request UpdateSceneRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateSceneResponse
   */
  async updateSceneWithOptions(SceneId: string, request: UpdateSceneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.flows)) {
      body["Flows"] = request.flows;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScene",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/scenes/${OpenApiUtil.getEncodeParam(SceneId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSceneResponse>(await this.callApi(params, req, runtime), new UpdateSceneResponse({}));
  }

  /**
   * @summary 更新场景
   *
   * @param request UpdateSceneRequest
   * @return UpdateSceneResponse
   */
  async updateScene(SceneId: string, request: UpdateSceneRequest): Promise<UpdateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSceneWithOptions(SceneId, request, headers, runtime);
  }

  /**
   * @summary 获取数据表详细信息。
   *
   * @param request UpdateTableMetaRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTableMetaResponse
   */
  async updateTableMetaWithOptions(TableMetaId: string, request: UpdateTableMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTableMetaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.module)) {
      body["Module"] = request.module;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTableMeta",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/tablemetas/${OpenApiUtil.getEncodeParam(TableMetaId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTableMetaResponse>(await this.callApi(params, req, runtime), new UpdateTableMetaResponse({}));
  }

  /**
   * @summary 获取数据表详细信息。
   *
   * @param request UpdateTableMetaRequest
   * @return UpdateTableMetaResponse
   */
  async updateTableMeta(TableMetaId: string, request: UpdateTableMetaRequest): Promise<UpdateTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  /**
   * @summary 更新流量调控目标
   *
   * @param request UpdateTrafficControlTargetRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTrafficControlTargetResponse
   */
  async updateTrafficControlTargetWithOptions(TrafficControlTargetId: string, request: UpdateTrafficControlTargetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTrafficControlTargetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newParam3)) {
      query["new-param-3"] = request.newParam3;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.event)) {
      body["Event"] = request.event;
    }

    if (!Util.isUnset(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!Util.isUnset(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!Util.isUnset(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.newProductRegulation)) {
      body["NewProductRegulation"] = request.newProductRegulation;
    }

    if (!Util.isUnset(request.recallName)) {
      body["RecallName"] = request.recallName;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.statisPeriod)) {
      body["StatisPeriod"] = request.statisPeriod;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.toleranceValue)) {
      body["ToleranceValue"] = request.toleranceValue;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrafficControlTarget",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltargets/${OpenApiUtil.getEncodeParam(TrafficControlTargetId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTrafficControlTargetResponse>(await this.callApi(params, req, runtime), new UpdateTrafficControlTargetResponse({}));
  }

  /**
   * @summary 更新流量调控目标
   *
   * @param request UpdateTrafficControlTargetRequest
   * @return UpdateTrafficControlTargetResponse
   */
  async updateTrafficControlTarget(TrafficControlTargetId: string, request: UpdateTrafficControlTargetRequest): Promise<UpdateTrafficControlTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrafficControlTargetWithOptions(TrafficControlTargetId, request, headers, runtime);
  }

  /**
   * @summary 更新流量调控任务
   *
   * @param request UpdateTrafficControlTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTrafficControlTaskResponse
   */
  async updateTrafficControlTaskWithOptions(TrafficControlTaskId: string, request: UpdateTrafficControlTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTrafficControlTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.behaviorTableMetaId)) {
      body["BehaviorTableMetaId"] = request.behaviorTableMetaId;
    }

    if (!Util.isUnset(request.controlGranularity)) {
      body["ControlGranularity"] = request.controlGranularity;
    }

    if (!Util.isUnset(request.controlLogic)) {
      body["ControlLogic"] = request.controlLogic;
    }

    if (!Util.isUnset(request.controlType)) {
      body["ControlType"] = request.controlType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executionTime)) {
      body["ExecutionTime"] = request.executionTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.itemConditionArray)) {
      body["ItemConditionArray"] = request.itemConditionArray;
    }

    if (!Util.isUnset(request.itemConditionExpress)) {
      body["ItemConditionExpress"] = request.itemConditionExpress;
    }

    if (!Util.isUnset(request.itemConditionType)) {
      body["ItemConditionType"] = request.itemConditionType;
    }

    if (!Util.isUnset(request.itemTableMetaId)) {
      body["ItemTableMetaId"] = request.itemTableMetaId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.statisBaeaviorConditionArray)) {
      body["StatisBaeaviorConditionArray"] = request.statisBaeaviorConditionArray;
    }

    if (!Util.isUnset(request.statisBehaviorConditionExpress)) {
      body["StatisBehaviorConditionExpress"] = request.statisBehaviorConditionExpress;
    }

    if (!Util.isUnset(request.statisBehaviorConditionType)) {
      body["StatisBehaviorConditionType"] = request.statisBehaviorConditionType;
    }

    if (!Util.isUnset(request.trafficControlTargets)) {
      body["TrafficControlTargets"] = request.trafficControlTargets;
    }

    if (!Util.isUnset(request.userConditionArray)) {
      body["UserConditionArray"] = request.userConditionArray;
    }

    if (!Util.isUnset(request.userConditionExpress)) {
      body["UserConditionExpress"] = request.userConditionExpress;
    }

    if (!Util.isUnset(request.userConditionType)) {
      body["UserConditionType"] = request.userConditionType;
    }

    if (!Util.isUnset(request.userTableMetaId)) {
      body["UserTableMetaId"] = request.userTableMetaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrafficControlTask",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTrafficControlTaskResponse>(await this.callApi(params, req, runtime), new UpdateTrafficControlTaskResponse({}));
  }

  /**
   * @summary 更新流量调控任务
   *
   * @param request UpdateTrafficControlTaskRequest
   * @return UpdateTrafficControlTaskResponse
   */
  async updateTrafficControlTask(TrafficControlTaskId: string, request: UpdateTrafficControlTaskRequest): Promise<UpdateTrafficControlTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrafficControlTaskWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 更新流量调控任务的流量参数
   *
   * @param request UpdateTrafficControlTaskTrafficRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTrafficControlTaskTrafficResponse
   */
  async updateTrafficControlTaskTrafficWithOptions(TrafficControlTaskId: string, request: UpdateTrafficControlTaskTrafficRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTrafficControlTaskTrafficResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newParam3)) {
      query["new-param-3"] = request.newParam3;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environment)) {
      body["Environment"] = request.environment;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.traffics)) {
      body["Traffics"] = request.traffics;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrafficControlTaskTraffic",
      version: "2022-12-13",
      protocol: "HTTPS",
      pathname: `/api/v1/trafficcontroltasks/${OpenApiUtil.getEncodeParam(TrafficControlTaskId)}/action/traffic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTrafficControlTaskTrafficResponse>(await this.callApi(params, req, runtime), new UpdateTrafficControlTaskTrafficResponse({}));
  }

  /**
   * @summary 更新流量调控任务的流量参数
   *
   * @param request UpdateTrafficControlTaskTrafficRequest
   * @return UpdateTrafficControlTaskTrafficResponse
   */
  async updateTrafficControlTaskTraffic(TrafficControlTaskId: string, request: UpdateTrafficControlTaskTrafficRequest): Promise<UpdateTrafficControlTaskTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrafficControlTaskTrafficWithOptions(TrafficControlTaskId, request, headers, runtime);
  }

  /**
   * @summary 上传数据
   *
   * @param request UploadRecommendationDataRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UploadRecommendationDataResponse
   */
  async uploadRecommendationDataWithOptions(request: UploadRecommendationDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadRecommendationDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UploadRecommendationDataResponse>(await this.callApi(params, req, runtime), new UploadRecommendationDataResponse({}));
  }

  /**
   * @summary 上传数据
   *
   * @param request UploadRecommendationDataRequest
   * @return UploadRecommendationDataResponse
   */
  async uploadRecommendationData(request: UploadRecommendationDataRequest): Promise<UploadRecommendationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadRecommendationDataWithOptions(request, headers, runtime);
  }

}
