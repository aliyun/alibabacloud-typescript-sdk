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
  headers: { [key: string]: string };
  statusCode: number;
  body: BackflowFeatureConsistencyCheckJobDataResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckInstanceResourcesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CloneExperimentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CloneExperimentGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CloneFeatureConsistencyCheckJobConfigResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CloneLaboratoryResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateABMetricResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateABMetricGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCalculationJobsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCrowdResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateExperimentResponseBody;
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
  reservedBuckets?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdId: 'CrowdId',
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
      reservedBuckets: 'ReservedBuckets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateExperimentGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFeatureConsistencyCheckJobResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFeatureConsistencyCheckJobConfigResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceResourceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLaboratoryResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLayerResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateParamResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSceneResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSubCrowdResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTableMetaResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteABMetricResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteABMetricGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCrowdResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteExperimentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteExperimentGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstanceResourceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLaboratoryResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLayerResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteParamResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSceneResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSubCrowdResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTableMetaResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetABMetricResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetABMetricGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCalculationJobResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetExperimentResponseBody;
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
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  distributionTimeDuration?: number;
  distributionType?: string;
  filter?: string;
  laboratoryId?: string;
  layerId?: string;
  name?: string;
  needAA?: boolean;
  owner?: string;
  requestId?: string;
  reservedBuckets?: string;
  sceneId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdId: 'CrowdId',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      distributionTimeDuration: 'DistributionTimeDuration',
      distributionType: 'DistributionType',
      filter: 'Filter',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      needAA: 'NeedAA',
      owner: 'Owner',
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
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      distributionTimeDuration: 'number',
      distributionType: 'string',
      filter: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      needAA: 'boolean',
      owner: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetExperimentGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFeatureConsistencyCheckJobResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFeatureConsistencyCheckJobConfigResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceResourceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceResourceTableResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLaboratoryResponseBody;
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
  laboratoryId?: string;
  name?: string;
  requestId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      laboratoryId: 'LaboratoryId',
      name: 'Name',
      requestId: 'RequestId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      laboratoryId: 'string',
      name: 'string',
      requestId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLayerResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSceneResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSubCrowdResponseBody;
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
  description?: string;
  fields?: GetTableMetaResponseBodyFields[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  module?: string;
  name?: string;
  requestId?: string;
  resourceId?: string;
  tableName?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      description: 'Description',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      module: 'Module',
      name: 'Name',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      tableName: 'TableName',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      description: 'string',
      fields: { 'type': 'array', 'itemType': GetTableMetaResponseBodyFields },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      module: 'string',
      name: 'string',
      requestId: 'string',
      resourceId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTableMetaResponseBody;
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

export class ListABMetricGroupsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  realtime?: boolean;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      realtime: 'Realtime',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      realtime: 'boolean',
      sceneId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListABMetricGroupsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListABMetricsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCalculationJobsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCrowdUsersResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCrowdsResponseBody;
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
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      layerId: 'LayerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      layerId: 'string',
      status: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListExperimentGroupsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListExperimentsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFeatureConsistencyCheckJobConfigsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFeatureConsistencyCheckJobFeatureReportsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFeatureConsistencyCheckJobScoreReportsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFeatureConsistencyCheckJobsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstanceResourcesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLaboratoriesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLayersResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListParamsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListScenesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSubCrowdsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTableMetasResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OfflineExperimentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OfflineExperimentGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OfflineLaboratoryResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OnlineExperimentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OnlineExperimentGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OnlineLaboratoryResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PushAllExperimentResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ReportABMetricGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SyncFeatureConsistencyCheckJobReplayLogResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TerminateFeatureConsistencyCheckJobResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateABMetricResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateABMetricGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCrowdResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateExperimentResponseBody;
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
  reservcedBuckets?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdId: 'CrowdId',
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
      reservcedBuckets: 'ReservcedBuckets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateExperimentGroupResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFeatureConsistencyCheckJobConfigResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInstanceResourceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLaboratoryResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLayerResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateParamResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSceneResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTableMetaResponseBody;
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
  debugCrowdId?: string;
  debugUsers?: string;
  description?: string;
  distributionTimeDuration?: number;
  distributionType?: string;
  experimentGroupId?: string;
  filter?: string;
  laboratoryId?: string;
  layerId?: string;
  name?: string;
  needAA?: boolean;
  owner?: string;
  reservedBuckets?: string;
  sceneId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdId: 'CrowdId',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      distributionTimeDuration: 'DistributionTimeDuration',
      distributionType: 'DistributionType',
      experimentGroupId: 'ExperimentGroupId',
      filter: 'Filter',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      needAA: 'NeedAA',
      owner: 'Owner',
      reservedBuckets: 'ReservedBuckets',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdId: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      distributionTimeDuration: 'number',
      distributionType: 'string',
      experimentGroupId: 'string',
      filter: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      needAA: 'boolean',
      owner: 'string',
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
  laboratoryId?: string;
  layerId?: string;
  name?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
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

  async backflowFeatureConsistencyCheckJobData(request: BackflowFeatureConsistencyCheckJobDataRequest): Promise<BackflowFeatureConsistencyCheckJobDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.backflowFeatureConsistencyCheckJobDataWithOptions(request, headers, runtime);
  }

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

  async checkInstanceResources(InstanceId: string, request: CheckInstanceResourcesRequest): Promise<CheckInstanceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceResourcesWithOptions(InstanceId, request, headers, runtime);
  }

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

  async cloneExperiment(ExperimentId: string, request: CloneExperimentRequest): Promise<CloneExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

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

  async cloneExperimentGroup(ExperimentGroupId: string, request: CloneExperimentGroupRequest): Promise<CloneExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

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

  async cloneFeatureConsistencyCheckJobConfig(SourceFeatureConsistencyCheckJobConfigId: string, request: CloneFeatureConsistencyCheckJobConfigRequest): Promise<CloneFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneFeatureConsistencyCheckJobConfigWithOptions(SourceFeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

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

  async cloneLaboratory(LaboratoryId: string, request: CloneLaboratoryRequest): Promise<CloneLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

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

  async createABMetric(request: CreateABMetricRequest): Promise<CreateABMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABMetricWithOptions(request, headers, runtime);
  }

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

  async createABMetricGroup(request: CreateABMetricGroupRequest): Promise<CreateABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABMetricGroupWithOptions(request, headers, runtime);
  }

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

  async createCalculationJobs(request: CreateCalculationJobsRequest): Promise<CreateCalculationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCalculationJobsWithOptions(request, headers, runtime);
  }

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

  async createCrowd(request: CreateCrowdRequest): Promise<CreateCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCrowdWithOptions(request, headers, runtime);
  }

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

  async createExperiment(request: CreateExperimentRequest): Promise<CreateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentWithOptions(request, headers, runtime);
  }

  async createExperimentGroupWithOptions(request: CreateExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.crowdId)) {
      body["CrowdId"] = request.crowdId;
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

  async createExperimentGroup(request: CreateExperimentGroupRequest): Promise<CreateExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentGroupWithOptions(request, headers, runtime);
  }

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

  async createFeatureConsistencyCheckJob(request: CreateFeatureConsistencyCheckJobRequest): Promise<CreateFeatureConsistencyCheckJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureConsistencyCheckJobWithOptions(request, headers, runtime);
  }

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

  async createFeatureConsistencyCheckJobConfig(request: CreateFeatureConsistencyCheckJobConfigRequest): Promise<CreateFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureConsistencyCheckJobConfigWithOptions(request, headers, runtime);
  }

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

  async createInstanceResource(InstanceId: string, request: CreateInstanceResourceRequest): Promise<CreateInstanceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceResourceWithOptions(InstanceId, request, headers, runtime);
  }

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

  async createLaboratory(request: CreateLaboratoryRequest): Promise<CreateLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLaboratoryWithOptions(request, headers, runtime);
  }

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

  async createLayer(request: CreateLayerRequest): Promise<CreateLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLayerWithOptions(request, headers, runtime);
  }

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

  async createParam(request: CreateParamRequest): Promise<CreateParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createParamWithOptions(request, headers, runtime);
  }

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

  async createScene(request: CreateSceneRequest): Promise<CreateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSceneWithOptions(request, headers, runtime);
  }

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

  async createSubCrowd(CrowdId: string, request: CreateSubCrowdRequest): Promise<CreateSubCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSubCrowdWithOptions(CrowdId, request, headers, runtime);
  }

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

  async createTableMeta(request: CreateTableMetaRequest): Promise<CreateTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableMetaWithOptions(request, headers, runtime);
  }

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

  async deleteABMetric(ABMetricId: string, request: DeleteABMetricRequest): Promise<DeleteABMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

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

  async deleteABMetricGroup(ABMetricGroupId: string, request: DeleteABMetricGroupRequest): Promise<DeleteABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

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

  async deleteCrowd(CrowdId: string, request: DeleteCrowdRequest): Promise<DeleteCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCrowdWithOptions(CrowdId, request, headers, runtime);
  }

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

  async deleteExperiment(ExperimentId: string, request: DeleteExperimentRequest): Promise<DeleteExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

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

  async deleteExperimentGroup(ExperimentGroupId: string, request: DeleteExperimentGroupRequest): Promise<DeleteExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

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

  async deleteInstanceResource(InstanceId: string, ResourceId: string): Promise<DeleteInstanceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceResourceWithOptions(InstanceId, ResourceId, headers, runtime);
  }

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

  async deleteLaboratory(LaboratoryId: string, request: DeleteLaboratoryRequest): Promise<DeleteLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

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

  async deleteLayer(LayerId: string, request: DeleteLayerRequest): Promise<DeleteLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLayerWithOptions(LayerId, request, headers, runtime);
  }

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

  async deleteParam(ParamId: string, request: DeleteParamRequest): Promise<DeleteParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteParamWithOptions(ParamId, request, headers, runtime);
  }

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

  async deleteScene(SceneId: string, request: DeleteSceneRequest): Promise<DeleteSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSceneWithOptions(SceneId, request, headers, runtime);
  }

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

  async deleteSubCrowd(CrowdId: string, SubCrowdId: string, request: DeleteSubCrowdRequest): Promise<DeleteSubCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSubCrowdWithOptions(CrowdId, SubCrowdId, request, headers, runtime);
  }

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

  async deleteTableMeta(TableMetaId: string, request: DeleteTableMetaRequest): Promise<DeleteTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

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

  async getABMetric(ABMetricId: string, request: GetABMetricRequest): Promise<GetABMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

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

  async getABMetricGroup(ABMetricGroupId: string, request: GetABMetricGroupRequest): Promise<GetABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

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

  async getCalculationJob(CalculationJobId: string, request: GetCalculationJobRequest): Promise<GetCalculationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCalculationJobWithOptions(CalculationJobId, request, headers, runtime);
  }

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

  async getExperiment(ExperimentId: string, request: GetExperimentRequest): Promise<GetExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

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

  async getExperimentGroup(ExperimentGroupId: string, request: GetExperimentGroupRequest): Promise<GetExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

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

  async getFeatureConsistencyCheckJob(FeatureConsistencyCheckJobId: string, request: GetFeatureConsistencyCheckJobRequest): Promise<GetFeatureConsistencyCheckJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

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

  async getFeatureConsistencyCheckJobConfig(FeatureConsistencyCheckJobConfigId: string, request: GetFeatureConsistencyCheckJobConfigRequest): Promise<GetFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

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

  async getInstance(InstanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, headers, runtime);
  }

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

  async getInstanceResource(InstanceId: string, ResourceId: string): Promise<GetInstanceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceResourceWithOptions(InstanceId, ResourceId, headers, runtime);
  }

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

  async getInstanceResourceTable(InstanceId: string, ResourceId: string, TableName: string): Promise<GetInstanceResourceTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceResourceTableWithOptions(InstanceId, ResourceId, TableName, headers, runtime);
  }

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

  async getLaboratory(LaboratoryId: string, request: GetLaboratoryRequest): Promise<GetLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

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

  async getLayer(LayerId: string, request: GetLayerRequest): Promise<GetLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerWithOptions(LayerId, request, headers, runtime);
  }

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

  async getScene(SceneId: string, request: GetSceneRequest): Promise<GetSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSceneWithOptions(SceneId, request, headers, runtime);
  }

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

  async getSubCrowd(CrowdId: string, SubCrowdId: string, request: GetSubCrowdRequest): Promise<GetSubCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubCrowdWithOptions(CrowdId, SubCrowdId, request, headers, runtime);
  }

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

  async getTableMeta(TableMetaId: string, request: GetTableMetaRequest): Promise<GetTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

  async listABMetricGroupsWithOptions(request: ListABMetricGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABMetricGroupsResponse> {
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

    if (!Util.isUnset(request.realtime)) {
      query["Realtime"] = request.realtime;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
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

  async listABMetricGroups(request: ListABMetricGroupsRequest): Promise<ListABMetricGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABMetricGroupsWithOptions(request, headers, runtime);
  }

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

  async listABMetrics(request: ListABMetricsRequest): Promise<ListABMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABMetricsWithOptions(request, headers, runtime);
  }

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

  async listCalculationJobs(request: ListCalculationJobsRequest): Promise<ListCalculationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCalculationJobsWithOptions(request, headers, runtime);
  }

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

  async listCrowdUsers(CrowdId: string, request: ListCrowdUsersRequest): Promise<ListCrowdUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCrowdUsersWithOptions(CrowdId, request, headers, runtime);
  }

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

  async listCrowds(request: ListCrowdsRequest): Promise<ListCrowdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCrowdsWithOptions(request, headers, runtime);
  }

  async listExperimentGroupsWithOptions(request: ListExperimentGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.layerId)) {
      query["LayerId"] = request.layerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
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

  async listExperimentGroups(request: ListExperimentGroupsRequest): Promise<ListExperimentGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentGroupsWithOptions(request, headers, runtime);
  }

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

  async listExperiments(request: ListExperimentsRequest): Promise<ListExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentsWithOptions(request, headers, runtime);
  }

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

  async listFeatureConsistencyCheckJobConfigs(request: ListFeatureConsistencyCheckJobConfigsRequest): Promise<ListFeatureConsistencyCheckJobConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobConfigsWithOptions(request, headers, runtime);
  }

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

  async listFeatureConsistencyCheckJobFeatureReports(FeatureConsistencyCheckJobId: string, request: ListFeatureConsistencyCheckJobFeatureReportsRequest): Promise<ListFeatureConsistencyCheckJobFeatureReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobFeatureReportsWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

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

  async listFeatureConsistencyCheckJobScoreReports(FeatureConsistencyCheckJobId: string, request: ListFeatureConsistencyCheckJobScoreReportsRequest): Promise<ListFeatureConsistencyCheckJobScoreReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobScoreReportsWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

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

  async listFeatureConsistencyCheckJobs(request: ListFeatureConsistencyCheckJobsRequest): Promise<ListFeatureConsistencyCheckJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureConsistencyCheckJobsWithOptions(request, headers, runtime);
  }

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

  async listInstanceResources(InstanceId: string, request: ListInstanceResourcesRequest): Promise<ListInstanceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceResourcesWithOptions(InstanceId, request, headers, runtime);
  }

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

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

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

  async listLaboratories(request: ListLaboratoriesRequest): Promise<ListLaboratoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLaboratoriesWithOptions(request, headers, runtime);
  }

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

  async listLayers(request: ListLayersRequest): Promise<ListLayersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayersWithOptions(request, headers, runtime);
  }

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

  async listParams(request: ListParamsRequest): Promise<ListParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParamsWithOptions(request, headers, runtime);
  }

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

  async listScenes(request: ListScenesRequest): Promise<ListScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScenesWithOptions(request, headers, runtime);
  }

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

  async listSubCrowds(CrowdId: string, request: ListSubCrowdsRequest): Promise<ListSubCrowdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubCrowdsWithOptions(CrowdId, request, headers, runtime);
  }

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

  async listTableMetas(request: ListTableMetasRequest): Promise<ListTableMetasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableMetasWithOptions(request, headers, runtime);
  }

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

  async offlineExperiment(ExperimentId: string, request: OfflineExperimentRequest): Promise<OfflineExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

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

  async offlineExperimentGroup(ExperimentGroupId: string, request: OfflineExperimentGroupRequest): Promise<OfflineExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

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

  async offlineLaboratory(LaboratoryId: string, request: OfflineLaboratoryRequest): Promise<OfflineLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

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

  async onlineExperiment(ExperimentId: string, request: OnlineExperimentRequest): Promise<OnlineExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

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

  async onlineExperimentGroup(ExperimentGroupId: string, request: OnlineExperimentGroupRequest): Promise<OnlineExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

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

  async onlineLaboratory(LaboratoryId: string, request: OnlineLaboratoryRequest): Promise<OnlineLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

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

  async pushAllExperiment(ExperimentId: string, request: PushAllExperimentRequest): Promise<PushAllExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushAllExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

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

  async reportABMetricGroup(ABMetricGroupId: string, request: ReportABMetricGroupRequest): Promise<ReportABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reportABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

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

  async syncFeatureConsistencyCheckJobReplayLog(request: SyncFeatureConsistencyCheckJobReplayLogRequest): Promise<SyncFeatureConsistencyCheckJobReplayLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncFeatureConsistencyCheckJobReplayLogWithOptions(request, headers, runtime);
  }

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

  async terminateFeatureConsistencyCheckJob(FeatureConsistencyCheckJobId: string, request: TerminateFeatureConsistencyCheckJobRequest): Promise<TerminateFeatureConsistencyCheckJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminateFeatureConsistencyCheckJobWithOptions(FeatureConsistencyCheckJobId, request, headers, runtime);
  }

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

  async updateABMetric(ABMetricId: string, request: UpdateABMetricRequest): Promise<UpdateABMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABMetricWithOptions(ABMetricId, request, headers, runtime);
  }

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

  async updateABMetricGroup(ABMetricGroupId: string, request: UpdateABMetricGroupRequest): Promise<UpdateABMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABMetricGroupWithOptions(ABMetricGroupId, request, headers, runtime);
  }

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

  async updateCrowd(CrowdId: string, request: UpdateCrowdRequest): Promise<UpdateCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCrowdWithOptions(CrowdId, request, headers, runtime);
  }

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

  async updateExperiment(ExperimentId: string, request: UpdateExperimentRequest): Promise<UpdateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  async updateExperimentGroupWithOptions(ExperimentGroupId: string, request: UpdateExperimentGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.crowdId)) {
      body["CrowdId"] = request.crowdId;
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

  async updateExperimentGroup(ExperimentGroupId: string, request: UpdateExperimentGroupRequest): Promise<UpdateExperimentGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentGroupWithOptions(ExperimentGroupId, request, headers, runtime);
  }

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

  async updateFeatureConsistencyCheckJobConfig(FeatureConsistencyCheckJobConfigId: string, request: UpdateFeatureConsistencyCheckJobConfigRequest): Promise<UpdateFeatureConsistencyCheckJobConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFeatureConsistencyCheckJobConfigWithOptions(FeatureConsistencyCheckJobConfigId, request, headers, runtime);
  }

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

  async updateInstanceResource(InstanceId: string, ResourceId: string, request: UpdateInstanceResourceRequest): Promise<UpdateInstanceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceResourceWithOptions(InstanceId, ResourceId, request, headers, runtime);
  }

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

  async updateLaboratory(LaboratoryId: string, request: UpdateLaboratoryRequest): Promise<UpdateLaboratoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLaboratoryWithOptions(LaboratoryId, request, headers, runtime);
  }

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

  async updateLayer(LayerId: string, request: UpdateLayerRequest): Promise<UpdateLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLayerWithOptions(LayerId, request, headers, runtime);
  }

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

  async updateParam(ParamId: string, request: UpdateParamRequest): Promise<UpdateParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateParamWithOptions(ParamId, request, headers, runtime);
  }

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

  async updateScene(SceneId: string, request: UpdateSceneRequest): Promise<UpdateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSceneWithOptions(SceneId, request, headers, runtime);
  }

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

  async updateTableMeta(TableMetaId: string, request: UpdateTableMetaRequest): Promise<UpdateTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

}
