// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckLayerRequest extends $tea.Model {
  paramNames?: string;
  static names(): { [key: string]: string } {
    return {
      paramNames: 'ParamNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLayerResponseBody extends $tea.Model {
  checkResults?: CheckLayerResponseBodyCheckResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResults: 'CheckResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResults: { 'type': 'array', 'itemType': CheckLayerResponseBodyCheckResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLayerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckLayerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCrowdRequest extends $tea.Model {
  description?: string;
  label?: string;
  name?: string;
  users?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      name: 'Name',
      users: 'Users',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      name: 'string',
      users: 'string',
      workspaceId: 'string',
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

export class CreateDomainRequest extends $tea.Model {
  bucketType?: string;
  condition?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  flow?: number;
  layerId?: string;
  name?: string;
  projectId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketType: 'BucketType',
      condition: 'Condition',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      flow: 'Flow',
      layerId: 'LayerId',
      name: 'Name',
      projectId: 'ProjectId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketType: 'string',
      condition: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      flow: 'number',
      layerId: 'string',
      name: 'string',
      projectId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  domainId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentRequest extends $tea.Model {
  bucketType?: string;
  condition?: string;
  coreMetricId?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  endTime?: string;
  flow?: number;
  focusMetricIds?: string;
  layerId?: string;
  name?: string;
  startTime?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketType: 'BucketType',
      condition: 'Condition',
      coreMetricId: 'CoreMetricId',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      endTime: 'EndTime',
      flow: 'Flow',
      focusMetricIds: 'FocusMetricIds',
      layerId: 'LayerId',
      name: 'Name',
      startTime: 'StartTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketType: 'string',
      condition: 'string',
      coreMetricId: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      endTime: 'string',
      flow: 'number',
      focusMetricIds: 'string',
      layerId: 'string',
      name: 'string',
      startTime: 'string',
      workspaceId: 'string',
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

export class CreateExperimentVersionRequest extends $tea.Model {
  config?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  experimentId?: string;
  flow?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      experimentId: 'ExperimentId',
      flow: 'Flow',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      experimentId: 'string',
      flow: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentVersionResponseBody extends $tea.Model {
  experimentVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentVersionId: 'ExperimentVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExperimentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateExperimentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureResponseBody extends $tea.Model {
  featureId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureId: 'FeatureId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerRequest extends $tea.Model {
  description?: string;
  domainId?: string;
  name?: string;
  projectId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domainId: 'DomainId',
      name: 'Name',
      projectId: 'ProjectId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainId: 'string',
      name: 'string',
      projectId: 'string',
      workspaceId: 'string',
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

export class CreateMetricRequest extends $tea.Model {
  definition?: string;
  description?: string;
  metricGroupId?: string;
  name?: string;
  sourceTableMetaId?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      metricGroupId: 'MetricGroupId',
      name: 'Name',
      sourceTableMetaId: 'SourceTableMetaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      metricGroupId: 'string',
      name: 'string',
      sourceTableMetaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricResponseBody extends $tea.Model {
  metricId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricId: 'MetricId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricGroupRequest extends $tea.Model {
  description?: string;
  name?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricGroupResponseBody extends $tea.Model {
  metricGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricGroupId: 'MetricGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMetricGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMetricGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  description?: string;
  name?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  projectId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaRequest extends $tea.Model {
  datasourceInfo?: string;
  datasourceType?: string;
  description?: string;
  fields?: CreateTableMetaRequestFields[];
  name?: string;
  tableName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceInfo: 'DatasourceInfo',
      datasourceType: 'DatasourceType',
      description: 'Description',
      fields: 'Fields',
      name: 'Name',
      tableName: 'TableName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceInfo: 'string',
      datasourceType: 'string',
      description: 'string',
      fields: { 'type': 'array', 'itemType': CreateTableMetaRequestFields },
      name: 'string',
      tableName: 'string',
      workspaceId: 'string',
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

export class DeleteDomainResponseBody extends $tea.Model {
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

export class DeleteDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDomainResponseBody,
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

export class DeleteExperimentVersionResponseBody extends $tea.Model {
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

export class DeleteExperimentVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExperimentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteExperimentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFeatureResponseBody extends $tea.Model {
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

export class DeleteFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFeatureResponseBody,
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

export class DeleteMetricResponseBody extends $tea.Model {
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

export class DeleteMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricGroupResponseBody extends $tea.Model {
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

export class DeleteMetricGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMetricGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMetricGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
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

export class DeleteProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProjectResponseBody,
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

export class GetCrowdResponseBody extends $tea.Model {
  crowdId?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  label?: string;
  name?: string;
  quantity?: string;
  requestId?: string;
  users?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      crowdId: 'CrowdId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      label: 'Label',
      name: 'Name',
      quantity: 'Quantity',
      requestId: 'RequestId',
      users: 'Users',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowdId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      label: 'string',
      name: 'string',
      quantity: 'string',
      requestId: 'string',
      users: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrowdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCrowdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCrowdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBody extends $tea.Model {
  bucketType?: string;
  buckets?: string;
  condition?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  domainId?: string;
  flow?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  isDefaultDomain?: boolean;
  layerId?: string;
  layerName?: string;
  name?: string;
  projectId?: string;
  projectName?: string;
  requestId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketType: 'BucketType',
      buckets: 'Buckets',
      condition: 'Condition',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      domainId: 'DomainId',
      flow: 'Flow',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefaultDomain: 'IsDefaultDomain',
      layerId: 'LayerId',
      layerName: 'LayerName',
      name: 'Name',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketType: 'string',
      buckets: 'string',
      condition: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      domainId: 'string',
      flow: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefaultDomain: 'boolean',
      layerId: 'string',
      layerName: 'string',
      name: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBody extends $tea.Model {
  bucketType?: string;
  buckets?: string;
  condition?: string;
  coreMetricId?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  domainName?: string;
  endTime?: string;
  experimentId?: string;
  flow?: number;
  focusMetricIds?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  layerId?: string;
  layerName?: string;
  name?: string;
  owner?: string;
  projectName?: string;
  requestId?: string;
  startTime?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketType: 'BucketType',
      buckets: 'Buckets',
      condition: 'Condition',
      coreMetricId: 'CoreMetricId',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      domainName: 'DomainName',
      endTime: 'EndTime',
      experimentId: 'ExperimentId',
      flow: 'Flow',
      focusMetricIds: 'FocusMetricIds',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      layerId: 'LayerId',
      layerName: 'LayerName',
      name: 'Name',
      owner: 'Owner',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketType: 'string',
      buckets: 'string',
      condition: 'string',
      coreMetricId: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      domainName: 'string',
      endTime: 'string',
      experimentId: 'string',
      flow: 'number',
      focusMetricIds: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      layerId: 'string',
      layerName: 'string',
      name: 'string',
      owner: 'string',
      projectName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      workspaceId: 'string',
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

export class GetExperimentVersionResponseBody extends $tea.Model {
  buckets?: string;
  config?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  experimentId?: string;
  experimentVersionId?: string;
  flow?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  requestId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      config: 'Config',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      experimentId: 'ExperimentId',
      experimentVersionId: 'ExperimentVersionId',
      flow: 'Flow',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      config: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      experimentId: 'string',
      experimentVersionId: 'string',
      flow: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExperimentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetExperimentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureResponseBody extends $tea.Model {
  condition?: string;
  config?: string;
  domainId?: string;
  domainName?: string;
  experimentId?: string;
  experimentName?: string;
  experimentOwner?: string;
  experimentVersionId?: string;
  experimentVersionName?: string;
  featureId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  projectId?: string;
  projectName?: string;
  releaseTime?: string;
  requestId?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      config: 'Config',
      domainId: 'DomainId',
      domainName: 'DomainName',
      experimentId: 'ExperimentId',
      experimentName: 'ExperimentName',
      experimentOwner: 'ExperimentOwner',
      experimentVersionId: 'ExperimentVersionId',
      experimentVersionName: 'ExperimentVersionName',
      featureId: 'FeatureId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      releaseTime: 'ReleaseTime',
      requestId: 'RequestId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      config: 'string',
      domainId: 'string',
      domainName: 'string',
      experimentId: 'string',
      experimentName: 'string',
      experimentOwner: 'string',
      experimentVersionId: 'string',
      experimentVersionName: 'string',
      featureId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      projectId: 'string',
      projectName: 'string',
      releaseTime: 'string',
      requestId: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerResponseBody extends $tea.Model {
  description?: string;
  domainId?: string;
  domainName?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  isDefaultLayer?: boolean;
  layerId?: string;
  name?: string;
  projectId?: string;
  projectName?: string;
  requestId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domainId: 'DomainId',
      domainName: 'DomainName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefaultLayer: 'IsDefaultLayer',
      layerId: 'LayerId',
      name: 'Name',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefaultLayer: 'boolean',
      layerId: 'string',
      name: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      workspaceId: 'string',
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

export class GetMetricResponseBody extends $tea.Model {
  definition?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  metricGroupId?: string;
  metricId?: string;
  name?: string;
  requestId?: string;
  sourceTableMetaId?: string;
  sourceTableMetaName?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      metricGroupId: 'MetricGroupId',
      metricId: 'MetricId',
      name: 'Name',
      requestId: 'RequestId',
      sourceTableMetaId: 'SourceTableMetaId',
      sourceTableMetaName: 'SourceTableMetaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      metricGroupId: 'string',
      metricId: 'string',
      name: 'string',
      requestId: 'string',
      sourceTableMetaId: 'string',
      sourceTableMetaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricGroupResponseBody extends $tea.Model {
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  metricGroupId?: string;
  metrics?: GetMetricGroupResponseBodyMetrics[];
  name?: string;
  requestId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      metricGroupId: 'MetricGroupId',
      metrics: 'Metrics',
      name: 'Name',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      metricGroupId: 'string',
      metrics: { 'type': 'array', 'itemType': GetMetricGroupResponseBodyMetrics },
      name: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMetricGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMetricGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  defaultDomainId?: string;
  defaultLayerId?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  projectId?: string;
  requestId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomainId: 'DefaultDomainId',
      defaultLayerId: 'DefaultLayerId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomainId: 'string',
      defaultLayerId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      projectId: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaResponseBody extends $tea.Model {
  datasourceInfo?: string;
  datasourceType?: string;
  description?: string;
  fields?: GetTableMetaResponseBodyFields[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  requestId?: string;
  tableMetaId?: string;
  tableName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceInfo: 'DatasourceInfo',
      datasourceType: 'DatasourceType',
      description: 'Description',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      tableMetaId: 'TableMetaId',
      tableName: 'TableName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceInfo: 'string',
      datasourceType: 'string',
      description: 'string',
      fields: { 'type': 'array', 'itemType': GetTableMetaResponseBodyFields },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      tableMetaId: 'string',
      tableName: 'string',
      workspaceId: 'string',
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

export class ListCrowdsRequest extends $tea.Model {
  all?: boolean;
  crowdId?: string;
  crowdName?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  sortBy?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      crowdId: 'CrowdId',
      crowdName: 'CrowdName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      crowdId: 'string',
      crowdName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortBy: 'string',
      workspaceId: 'string',
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

export class ListDomainsRequest extends $tea.Model {
  all?: boolean;
  domainId?: string;
  domainName?: string;
  layerId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  sortBy?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      domainId: 'DomainId',
      domainName: 'DomainName',
      layerId: 'LayerId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      domainId: 'string',
      domainName: 'string',
      layerId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
      sortBy: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $tea.Model {
  domains?: ListDomainsResponseBodyDomains[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomains },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentVersionsRequest extends $tea.Model {
  all?: boolean;
  experimentId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      experimentId: 'ExperimentId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      experimentId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentVersionsResponseBody extends $tea.Model {
  experimentVersions?: ListExperimentVersionsResponseBodyExperimentVersions[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      experimentVersions: 'ExperimentVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentVersions: { 'type': 'array', 'itemType': ListExperimentVersionsResponseBodyExperimentVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExperimentVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExperimentVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsRequest extends $tea.Model {
  all?: boolean;
  experimentId?: string;
  experimentName?: string;
  layerId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortBy?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      experimentId: 'ExperimentId',
      experimentName: 'ExperimentName',
      layerId: 'LayerId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      experimentId: 'string',
      experimentName: 'string',
      layerId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
      status: 'string',
      workspaceId: 'string',
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

export class ListFeaturesRequest extends $tea.Model {
  all?: boolean;
  domainId?: string;
  featureId?: string;
  featureName?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  sortBy?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      domainId: 'DomainId',
      featureId: 'FeatureId',
      featureName: 'FeatureName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortBy: 'SortBy',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      domainId: 'string',
      featureId: 'string',
      featureName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortBy: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeaturesResponseBody extends $tea.Model {
  features?: ListFeaturesResponseBodyFeatures[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': ListFeaturesResponseBodyFeatures },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeaturesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersRequest extends $tea.Model {
  all?: boolean;
  domainId?: string;
  layerId?: string;
  layerName?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: string;
  projectId?: string;
  sortBy?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      domainId: 'DomainId',
      layerId: 'LayerId',
      layerName: 'LayerName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      domainId: 'string',
      layerId: 'string',
      layerName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      projectId: 'string',
      sortBy: 'string',
      workspaceId: 'string',
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

export class ListMetricGroupsRequest extends $tea.Model {
  all?: boolean;
  metricGroupId?: string;
  metricGroupName?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      metricGroupId: 'MetricGroupId',
      metricGroupName: 'MetricGroupName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      metricGroupId: 'string',
      metricGroupName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricGroupsResponseBody extends $tea.Model {
  metricGroups?: ListMetricGroupsResponseBodyMetricGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      metricGroups: 'MetricGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricGroups: { 'type': 'array', 'itemType': ListMetricGroupsResponseBodyMetricGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMetricGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMetricGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsRequest extends $tea.Model {
  all?: string;
  metricGroupId?: string;
  metricId?: string;
  metricName?: string;
  order?: string;
  pageNumber?: string;
  pageSize?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      metricGroupId: 'MetricGroupId',
      metricId: 'MetricId',
      metricName: 'MetricName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'string',
      metricGroupId: 'string',
      metricId: 'string',
      metricName: 'string',
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

export class ListMetricsResponseBody extends $tea.Model {
  metrics?: ListMetricsResponseBodyMetrics[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': ListMetricsResponseBodyMetrics },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  all?: boolean;
  name?: string;
  order?: string;
  pageNumber?: string;
  pageSize?: string;
  projectId?: string;
  sortBy?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      name: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'string',
      sortBy: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  projects?: ListProjectsResponseBodyProjects[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      projects: 'Projects',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjects },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasRequest extends $tea.Model {
  all?: boolean;
  datasourceType?: string;
  order?: string;
  pageNumber?: string;
  pageSize?: string;
  sortBy?: string;
  tableMetaId?: string;
  tableMetaName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      datasourceType: 'DatasourceType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      tableMetaId: 'TableMetaId',
      tableMetaName: 'TableMetaName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      datasourceType: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
      tableMetaId: 'string',
      tableMetaName: 'string',
      workspaceId: 'string',
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

export class PushAllExperimentVersionRequest extends $tea.Model {
  featureName?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushAllExperimentVersionResponseBody extends $tea.Model {
  featureId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureId: 'FeatureId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushAllExperimentVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushAllExperimentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushAllExperimentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExperimentResponseBody extends $tea.Model {
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

export class StartExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExperimentResponseBody extends $tea.Model {
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

export class StopExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrowdRequest extends $tea.Model {
  description?: string;
  label?: string;
  name?: string;
  users?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      name: 'Name',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      name: 'string',
      users: 'string',
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

export class UpdateDomainRequest extends $tea.Model {
  bucketType?: string;
  condition?: string;
  crowIds?: string;
  debugUsers?: string;
  description?: string;
  flow?: number;
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketType: 'BucketType',
      condition: 'Condition',
      crowIds: 'CrowIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      flow: 'Flow',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketType: 'string',
      condition: 'string',
      crowIds: 'string',
      debugUsers: 'string',
      description: 'string',
      flow: 'number',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponseBody extends $tea.Model {
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

export class UpdateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentRequest extends $tea.Model {
  bucketType?: string;
  condition?: string;
  coreMetricId?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  endTime?: string;
  flow?: number;
  focusMetricIds?: string;
  name?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bucketType: 'BucketType',
      condition: 'Condition',
      coreMetricId: 'CoreMetricId',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      endTime: 'EndTime',
      flow: 'Flow',
      focusMetricIds: 'FocusMetricIds',
      name: 'Name',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketType: 'string',
      condition: 'string',
      coreMetricId: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      endTime: 'string',
      flow: 'number',
      focusMetricIds: 'string',
      name: 'string',
      startTime: 'string',
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

export class UpdateExperimentVersionRequest extends $tea.Model {
  config?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  flow?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      flow: 'Flow',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      flow: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentVersionResponseBody extends $tea.Model {
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

export class UpdateExperimentVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExperimentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateExperimentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeatureRequest extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFeatureResponseBody extends $tea.Model {
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

export class UpdateFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLayerRequest extends $tea.Model {
  description?: string;
  domainId?: string;
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domainId: 'DomainId',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainId: 'string',
      name: 'string',
      projectId: 'string',
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

export class UpdateMetricRequest extends $tea.Model {
  definition?: string;
  description?: string;
  name?: string;
  sourceTableMetaId?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      name: 'Name',
      sourceTableMetaId: 'SourceTableMetaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      name: 'string',
      sourceTableMetaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetricResponseBody extends $tea.Model {
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

export class UpdateMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetricGroupRequest extends $tea.Model {
  description?: string;
  name?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMetricGroupResponseBody extends $tea.Model {
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

export class UpdateMetricGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMetricGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMetricGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
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

export class UpdateProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaRequest extends $tea.Model {
  description?: string;
  fields?: UpdateTableMetaRequestFields[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fields: 'Fields',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fields: { 'type': 'array', 'itemType': UpdateTableMetaRequestFields },
      name: 'string',
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

export class CheckLayerResponseBodyCheckResults extends $tea.Model {
  experimentId?: string;
  experimentName?: string;
  paramName?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      experimentName: 'ExperimentName',
      paramName: 'ParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      experimentName: 'string',
      paramName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableMetaRequestFields extends $tea.Model {
  meaning?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricGroupResponseBodyMetrics extends $tea.Model {
  definition?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  metricId?: string;
  name?: string;
  relatedExperimentNumber?: number;
  sourceTableMetaId?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      metricId: 'MetricId',
      name: 'Name',
      relatedExperimentNumber: 'RelatedExperimentNumber',
      sourceTableMetaId: 'SourceTableMetaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      metricId: 'string',
      name: 'string',
      relatedExperimentNumber: 'number',
      sourceTableMetaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableMetaResponseBodyFields extends $tea.Model {
  meaning?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrowdsResponseBodyCrowds extends $tea.Model {
  aliyunId?: string;
  crowdId?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  label?: string;
  name?: string;
  quantity?: string;
  users?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      crowdId: 'CrowdId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      label: 'Label',
      name: 'Name',
      quantity: 'Quantity',
      users: 'Users',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      crowdId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      label: 'string',
      name: 'string',
      quantity: 'string',
      users: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomains extends $tea.Model {
  bucketType?: string;
  buckets?: string;
  condition?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  domainId?: string;
  flow?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  isDefaultDomain?: boolean;
  layerId?: string;
  layerName?: string;
  name?: string;
  projectId?: string;
  projectName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketType: 'BucketType',
      buckets: 'Buckets',
      condition: 'Condition',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      domainId: 'DomainId',
      flow: 'Flow',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefaultDomain: 'IsDefaultDomain',
      layerId: 'LayerId',
      layerName: 'LayerName',
      name: 'Name',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketType: 'string',
      buckets: 'string',
      condition: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      domainId: 'string',
      flow: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefaultDomain: 'boolean',
      layerId: 'string',
      layerName: 'string',
      name: 'string',
      projectId: 'string',
      projectName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentVersionsResponseBodyExperimentVersions extends $tea.Model {
  buckets?: string;
  config?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  experimentId?: string;
  experimentVersionId?: string;
  flow?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      config: 'Config',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      experimentId: 'ExperimentId',
      experimentVersionId: 'ExperimentVersionId',
      flow: 'Flow',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      config: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      experimentId: 'string',
      experimentVersionId: 'string',
      flow: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyExperiments extends $tea.Model {
  bucketType?: string;
  buckets?: string;
  condition?: string;
  coreMetricId?: string;
  crowdIds?: string;
  debugUsers?: string;
  description?: string;
  domainName?: string;
  endTime?: string;
  experimentId?: string;
  flow?: number;
  focusMetricIds?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  layerId?: string;
  layerName?: string;
  name?: string;
  owner?: string;
  projectName?: string;
  startTime?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketType: 'BucketType',
      buckets: 'Buckets',
      condition: 'Condition',
      coreMetricId: 'CoreMetricId',
      crowdIds: 'CrowdIds',
      debugUsers: 'DebugUsers',
      description: 'Description',
      domainName: 'DomainName',
      endTime: 'EndTime',
      experimentId: 'ExperimentId',
      flow: 'Flow',
      focusMetricIds: 'FocusMetricIds',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      layerId: 'LayerId',
      layerName: 'LayerName',
      name: 'Name',
      owner: 'Owner',
      projectName: 'ProjectName',
      startTime: 'StartTime',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketType: 'string',
      buckets: 'string',
      condition: 'string',
      coreMetricId: 'string',
      crowdIds: 'string',
      debugUsers: 'string',
      description: 'string',
      domainName: 'string',
      endTime: 'string',
      experimentId: 'string',
      flow: 'number',
      focusMetricIds: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      layerId: 'string',
      layerName: 'string',
      name: 'string',
      owner: 'string',
      projectName: 'string',
      startTime: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeaturesResponseBodyFeatures extends $tea.Model {
  config?: string;
  domainId?: string;
  domainName?: string;
  experimentId?: string;
  experimentName?: string;
  experimentOwner?: string;
  experimentVersionId?: string;
  experimentVersionName?: string;
  featureId?: string;
  filter?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  projectId?: string;
  projectName?: string;
  releaseTime?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domainId: 'DomainId',
      domainName: 'DomainName',
      experimentId: 'ExperimentId',
      experimentName: 'ExperimentName',
      experimentOwner: 'ExperimentOwner',
      experimentVersionId: 'ExperimentVersionId',
      experimentVersionName: 'ExperimentVersionName',
      featureId: 'FeatureId',
      filter: 'Filter',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      releaseTime: 'ReleaseTime',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domainId: 'string',
      domainName: 'string',
      experimentId: 'string',
      experimentName: 'string',
      experimentOwner: 'string',
      experimentVersionId: 'string',
      experimentVersionName: 'string',
      featureId: 'string',
      filter: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      projectId: 'string',
      projectName: 'string',
      releaseTime: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponseBodyLayers extends $tea.Model {
  description?: string;
  domainId?: string;
  domainName?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  isDefaultLayer?: boolean;
  layerId?: string;
  name?: string;
  projectId?: string;
  projectName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domainId: 'DomainId',
      domainName: 'DomainName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      isDefaultLayer: 'IsDefaultLayer',
      layerId: 'LayerId',
      name: 'Name',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      isDefaultLayer: 'boolean',
      layerId: 'string',
      name: 'string',
      projectId: 'string',
      projectName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricGroupsResponseBodyMetricGroupsMetrics extends $tea.Model {
  definition?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  metricId?: string;
  name?: string;
  relatedExperimentsNumber?: number;
  sourceTableMetaId?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      metricId: 'MetricId',
      name: 'Name',
      relatedExperimentsNumber: 'RelatedExperimentsNumber',
      sourceTableMetaId: 'SourceTableMetaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      metricId: 'string',
      name: 'string',
      relatedExperimentsNumber: 'number',
      sourceTableMetaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricGroupsResponseBodyMetricGroups extends $tea.Model {
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  metricGroupId?: string;
  metrics?: ListMetricGroupsResponseBodyMetricGroupsMetrics[];
  name?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      metricGroupId: 'MetricGroupId',
      metrics: 'Metrics',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      metricGroupId: 'string',
      metrics: { 'type': 'array', 'itemType': ListMetricGroupsResponseBodyMetricGroupsMetrics },
      name: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsResponseBodyMetrics extends $tea.Model {
  definition?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  metricGroupId?: string;
  metricId?: string;
  name?: string;
  sourceTableMetaId?: string;
  sourceTableMetaName?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      metricGroupId: 'MetricGroupId',
      metricId: 'MetricId',
      name: 'Name',
      sourceTableMetaId: 'SourceTableMetaId',
      sourceTableMetaName: 'SourceTableMetaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      metricGroupId: 'string',
      metricId: 'string',
      name: 'string',
      sourceTableMetaId: 'string',
      sourceTableMetaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyProjects extends $tea.Model {
  aliyunId?: string;
  defaultDomainId?: string;
  defaultLayerId?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  projectId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      defaultDomainId: 'DefaultDomainId',
      defaultLayerId: 'DefaultLayerId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      projectId: 'ProjectId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      defaultDomainId: 'string',
      defaultLayerId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      projectId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableMetasResponseBodyTableMetasFields extends $tea.Model {
  meaning?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  datasourceInfo?: string;
  datasourceType?: string;
  description?: string;
  fields?: ListTableMetasResponseBodyTableMetasFields[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  tableMetaId?: string;
  tableName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      datasourceInfo: 'DatasourceInfo',
      datasourceType: 'DatasourceType',
      description: 'Description',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      tableMetaId: 'TableMetaId',
      tableName: 'TableName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      datasourceInfo: 'string',
      datasourceType: 'string',
      description: 'string',
      fields: { 'type': 'array', 'itemType': ListTableMetasResponseBodyTableMetasFields },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      tableMetaId: 'string',
      tableName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableMetaRequestFields extends $tea.Model {
  meaning?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
    this._endpoint = this.getEndpoint("paiabtest", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 对层上的参数进行校验
   *
   * @param request CheckLayerRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckLayerResponse
   */
  async checkLayerWithOptions(LayerId: string, request: CheckLayerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckLayerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramNames)) {
      query["ParamNames"] = request.paramNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckLayer",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/layers/${OpenApiUtil.getEncodeParam(LayerId)}/action/check`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckLayerResponse>(await this.callApi(params, req, runtime), new CheckLayerResponse({}));
  }

  /**
   * @summary 对层上的参数进行校验
   *
   * @param request CheckLayerRequest
   * @return CheckLayerResponse
   */
  async checkLayer(LayerId: string, request: CheckLayerRequest): Promise<CheckLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkLayerWithOptions(LayerId, request, headers, runtime);
  }

  /**
   * @summary 创建人群
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

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCrowd",
      version: "2024-01-19",
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
   * @summary 创建人群
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
   * @summary 创建实验域
   *
   * @param request CreateDomainRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDomainResponse
   */
  async createDomainWithOptions(request: CreateDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!Util.isUnset(request.condition)) {
      body["Condition"] = request.condition;
    }

    if (!Util.isUnset(request.crowdIds)) {
      body["CrowdIds"] = request.crowdIds;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.flow)) {
      body["Flow"] = request.flow;
    }

    if (!Util.isUnset(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
   * @summary 创建实验域
   *
   * @param request CreateDomainRequest
   * @return CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建实验
   *
   * @param request CreateExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateExperimentResponse
   */
  async createExperimentWithOptions(request: CreateExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!Util.isUnset(request.condition)) {
      body["Condition"] = request.condition;
    }

    if (!Util.isUnset(request.coreMetricId)) {
      body["CoreMetricId"] = request.coreMetricId;
    }

    if (!Util.isUnset(request.crowdIds)) {
      body["CrowdIds"] = request.crowdIds;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.flow)) {
      body["Flow"] = request.flow;
    }

    if (!Util.isUnset(request.focusMetricIds)) {
      body["FocusMetricIds"] = request.focusMetricIds;
    }

    if (!Util.isUnset(request.layerId)) {
      body["LayerId"] = request.layerId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateExperiment",
      version: "2024-01-19",
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
   * @summary 创建实验
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
   * @summary 创建实验版本
   *
   * @param request CreateExperimentVersionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateExperimentVersionResponse
   */
  async createExperimentVersionWithOptions(request: CreateExperimentVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.crowdIds)) {
      body["CrowdIds"] = request.crowdIds;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.experimentId)) {
      body["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.flow)) {
      body["Flow"] = request.flow;
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
      action: "CreateExperimentVersion",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentversions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateExperimentVersionResponse>(await this.callApi(params, req, runtime), new CreateExperimentVersionResponse({}));
  }

  /**
   * @summary 创建实验版本
   *
   * @param request CreateExperimentVersionRequest
   * @return CreateExperimentVersionResponse
   */
  async createExperimentVersion(request: CreateExperimentVersionRequest): Promise<CreateExperimentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentVersionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建Feature
   *
   * @param request CreateFeatureRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateFeatureResponse
   */
  async createFeatureWithOptions(request: CreateFeatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFeatureResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFeature",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/features`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFeatureResponse>(await this.callApi(params, req, runtime), new CreateFeatureResponse({}));
  }

  /**
   * @summary 创建Feature
   *
   * @param request CreateFeatureRequest
   * @return CreateFeatureResponse
   */
  async createFeature(request: CreateFeatureRequest): Promise<CreateFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建实验层
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

    if (!Util.isUnset(request.domainId)) {
      body["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLayer",
      version: "2024-01-19",
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
   * @summary 创建实验层
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
   * @summary 创建指标
   *
   * @param request CreateMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateMetricResponse
   */
  async createMetricWithOptions(request: CreateMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMetricResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.metricGroupId)) {
      body["MetricGroupId"] = request.metricGroupId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourceTableMetaId)) {
      body["SourceTableMetaId"] = request.sourceTableMetaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMetric",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metrics`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateMetricResponse>(await this.callApi(params, req, runtime), new CreateMetricResponse({}));
  }

  /**
   * @summary 创建指标
   *
   * @param request CreateMetricRequest
   * @return CreateMetricResponse
   */
  async createMetric(request: CreateMetricRequest): Promise<CreateMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMetricWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建指标组
   *
   * @param request CreateMetricGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateMetricGroupResponse
   */
  async createMetricGroupWithOptions(request: CreateMetricGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMetricGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMetricGroup",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metricgroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateMetricGroupResponse>(await this.callApi(params, req, runtime), new CreateMetricGroupResponse({}));
  }

  /**
   * @summary 创建指标组
   *
   * @param request CreateMetricGroupRequest
   * @return CreateMetricGroupResponse
   */
  async createMetricGroup(request: CreateMetricGroupRequest): Promise<CreateMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMetricGroupWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建实验项目
   *
   * @param request CreateProjectRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateProjectResponse
   */
  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  /**
   * @summary 创建实验项目
   *
   * @param request CreateProjectRequest
   * @return CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建数据表
   *
   * @param request CreateTableMetaRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTableMetaResponse
   */
  async createTableMetaWithOptions(request: CreateTableMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTableMetaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasourceInfo)) {
      body["DatasourceInfo"] = request.datasourceInfo;
    }

    if (!Util.isUnset(request.datasourceType)) {
      body["DatasourceType"] = request.datasourceType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTableMeta",
      version: "2024-01-19",
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
   * @summary 创建数据表
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
   * @summary 删除指定的人群
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCrowdResponse
   */
  async deleteCrowdWithOptions(CrowdId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCrowdResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteCrowd",
      version: "2024-01-19",
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
   * @summary 删除指定的人群
   *
   * @return DeleteCrowdResponse
   */
  async deleteCrowd(CrowdId: string): Promise<DeleteCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCrowdWithOptions(CrowdId, headers, runtime);
  }

  /**
   * @summary 删除指定的实验域
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDomainResponse
   */
  async deleteDomainWithOptions(DomainId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/domains/${OpenApiUtil.getEncodeParam(DomainId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
   * @summary 删除指定的实验域
   *
   * @return DeleteDomainResponse
   */
  async deleteDomain(DomainId: string): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(DomainId, headers, runtime);
  }

  /**
   * @summary 删除指定的实验
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperiment",
      version: "2024-01-19",
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
   * @summary 删除指定的实验
   *
   * @return DeleteExperimentResponse
   */
  async deleteExperiment(ExperimentId: string): Promise<DeleteExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * @summary 删除指定的实验版本
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteExperimentVersionResponse
   */
  async deleteExperimentVersionWithOptions(ExperimentVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperimentVersion",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentversions/${OpenApiUtil.getEncodeParam(ExperimentVersionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentVersionResponse>(await this.callApi(params, req, runtime), new DeleteExperimentVersionResponse({}));
  }

  /**
   * @summary 删除指定的实验版本
   *
   * @return DeleteExperimentVersionResponse
   */
  async deleteExperimentVersion(ExperimentVersionId: string): Promise<DeleteExperimentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentVersionWithOptions(ExperimentVersionId, headers, runtime);
  }

  /**
   * @summary 删除Feature
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteFeatureResponse
   */
  async deleteFeatureWithOptions(FeatureId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFeatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFeature",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/features/${OpenApiUtil.getEncodeParam(FeatureId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFeatureResponse>(await this.callApi(params, req, runtime), new DeleteFeatureResponse({}));
  }

  /**
   * @summary 删除Feature
   *
   * @return DeleteFeatureResponse
   */
  async deleteFeature(FeatureId: string): Promise<DeleteFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFeatureWithOptions(FeatureId, headers, runtime);
  }

  /**
   * @summary 删除指定的实验层
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteLayerResponse
   */
  async deleteLayerWithOptions(LayerId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLayerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteLayer",
      version: "2024-01-19",
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
   * @summary 删除指定的实验层
   *
   * @return DeleteLayerResponse
   */
  async deleteLayer(LayerId: string): Promise<DeleteLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLayerWithOptions(LayerId, headers, runtime);
  }

  /**
   * @summary 删除指定指标
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMetricResponse
   */
  async deleteMetricWithOptions(MetricId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteMetricResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetric",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metrics/${OpenApiUtil.getEncodeParam(MetricId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricResponse>(await this.callApi(params, req, runtime), new DeleteMetricResponse({}));
  }

  /**
   * @summary 删除指定指标
   *
   * @return DeleteMetricResponse
   */
  async deleteMetric(MetricId: string): Promise<DeleteMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMetricWithOptions(MetricId, headers, runtime);
  }

  /**
   * @summary 删除指定的指标组
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMetricGroupResponse
   */
  async deleteMetricGroupWithOptions(MetricGroupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteMetricGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricGroup",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metricgroups/${OpenApiUtil.getEncodeParam(MetricGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricGroupResponse>(await this.callApi(params, req, runtime), new DeleteMetricGroupResponse({}));
  }

  /**
   * @summary 删除指定的指标组
   *
   * @return DeleteMetricGroupResponse
   */
  async deleteMetricGroup(MetricGroupId: string): Promise<DeleteMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMetricGroupWithOptions(MetricGroupId, headers, runtime);
  }

  /**
   * @summary 删除实验项目
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteProjectResponse
   */
  async deleteProjectWithOptions(ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(ProjectId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  /**
   * @summary 删除实验项目
   *
   * @return DeleteProjectResponse
   */
  async deleteProject(ProjectId: string): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(ProjectId, headers, runtime);
  }

  /**
   * @summary 删除数据表
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTableMetaResponse
   */
  async deleteTableMetaWithOptions(TableMetaId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTableMetaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTableMeta",
      version: "2024-01-19",
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
   * @summary 删除数据表
   *
   * @return DeleteTableMetaResponse
   */
  async deleteTableMeta(TableMetaId: string): Promise<DeleteTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableMetaWithOptions(TableMetaId, headers, runtime);
  }

  /**
   * @summary 获取指定人群详情
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCrowdResponse
   */
  async getCrowdWithOptions(CrowdId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCrowdResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetCrowd",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/crowds/${OpenApiUtil.getEncodeParam(CrowdId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCrowdResponse>(await this.callApi(params, req, runtime), new GetCrowdResponse({}));
  }

  /**
   * @summary 获取指定人群详情
   *
   * @return GetCrowdResponse
   */
  async getCrowd(CrowdId: string): Promise<GetCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCrowdWithOptions(CrowdId, headers, runtime);
  }

  /**
   * @summary 获取指定实验域详情
   *
   * @param request GetDomainRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDomainResponse
   */
  async getDomainWithOptions(DomainId: string, request: GetDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDomainResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDomain",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/domains/${OpenApiUtil.getEncodeParam(DomainId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDomainResponse>(await this.callApi(params, req, runtime), new GetDomainResponse({}));
  }

  /**
   * @summary 获取指定实验域详情
   *
   * @param request GetDomainRequest
   * @return GetDomainResponse
   */
  async getDomain(DomainId: string, request: GetDomainRequest): Promise<GetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(DomainId, request, headers, runtime);
  }

  /**
   * @summary 获取指定实验的详情
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetExperimentResponse
   */
  async getExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetExperiment",
      version: "2024-01-19",
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
   * @summary 获取指定实验的详情
   *
   * @return GetExperimentResponse
   */
  async getExperiment(ExperimentId: string): Promise<GetExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * @summary 获取指定实验版本的详情
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetExperimentVersionResponse
   */
  async getExperimentVersionWithOptions(ExperimentVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetExperimentVersion",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentversions/${OpenApiUtil.getEncodeParam(ExperimentVersionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentVersionResponse>(await this.callApi(params, req, runtime), new GetExperimentVersionResponse({}));
  }

  /**
   * @summary 获取指定实验版本的详情
   *
   * @return GetExperimentVersionResponse
   */
  async getExperimentVersion(ExperimentVersionId: string): Promise<GetExperimentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentVersionWithOptions(ExperimentVersionId, headers, runtime);
  }

  /**
   * @summary 获取Feature详情
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFeatureResponse
   */
  async getFeatureWithOptions(FeatureId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFeatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFeature",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/features/${OpenApiUtil.getEncodeParam(FeatureId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFeatureResponse>(await this.callApi(params, req, runtime), new GetFeatureResponse({}));
  }

  /**
   * @summary 获取Feature详情
   *
   * @return GetFeatureResponse
   */
  async getFeature(FeatureId: string): Promise<GetFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureWithOptions(FeatureId, headers, runtime);
  }

  /**
   * @summary 获取指定的实验层详情
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetLayerResponse
   */
  async getLayerWithOptions(LayerId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLayerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLayer",
      version: "2024-01-19",
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
   * @summary 获取指定的实验层详情
   *
   * @return GetLayerResponse
   */
  async getLayer(LayerId: string): Promise<GetLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerWithOptions(LayerId, headers, runtime);
  }

  /**
   * @summary 获取指标详情
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetMetricResponse
   */
  async getMetricWithOptions(MetricId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMetricResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMetric",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metrics/${OpenApiUtil.getEncodeParam(MetricId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMetricResponse>(await this.callApi(params, req, runtime), new GetMetricResponse({}));
  }

  /**
   * @summary 获取指标详情
   *
   * @return GetMetricResponse
   */
  async getMetric(MetricId: string): Promise<GetMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetricWithOptions(MetricId, headers, runtime);
  }

  /**
   * @summary 获取指标组的详细信息
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetMetricGroupResponse
   */
  async getMetricGroupWithOptions(MetricGroupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMetricGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMetricGroup",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metricgroups/${OpenApiUtil.getEncodeParam(MetricGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMetricGroupResponse>(await this.callApi(params, req, runtime), new GetMetricGroupResponse({}));
  }

  /**
   * @summary 获取指标组的详细信息
   *
   * @return GetMetricGroupResponse
   */
  async getMetricGroup(MetricGroupId: string): Promise<GetMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetricGroupWithOptions(MetricGroupId, headers, runtime);
  }

  /**
   * @summary 获取指定的实验项目
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetProjectResponse
   */
  async getProjectWithOptions(ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(ProjectId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  /**
   * @summary 获取指定的实验项目
   *
   * @return GetProjectResponse
   */
  async getProject(ProjectId: string): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(ProjectId, headers, runtime);
  }

  /**
   * @summary 获取数据表详情
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTableMetaResponse
   */
  async getTableMetaWithOptions(TableMetaId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableMetaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTableMeta",
      version: "2024-01-19",
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
   * @summary 获取数据表详情
   *
   * @return GetTableMetaResponse
   */
  async getTableMeta(TableMetaId: string): Promise<GetTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableMetaWithOptions(TableMetaId, headers, runtime);
  }

  /**
   * @summary 获取人群列表
   *
   * @param request ListCrowdsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCrowdsResponse
   */
  async listCrowdsWithOptions(request: ListCrowdsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCrowdsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.crowdId)) {
      query["CrowdId"] = request.crowdId;
    }

    if (!Util.isUnset(request.crowdName)) {
      query["CrowdName"] = request.crowdName;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCrowds",
      version: "2024-01-19",
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
   * @summary 获取人群列表
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
   * @summary 获取实验域列表
   *
   * @param request ListDomainsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDomainsResponse
   */
  async listDomainsWithOptions(request: ListDomainsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.layerId)) {
      query["LayerId"] = request.layerId;
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

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDomains",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
  }

  /**
   * @summary 获取实验域列表
   *
   * @param request ListDomainsRequest
   * @return ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取实验版本列表
   *
   * @param request ListExperimentVersionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListExperimentVersionsResponse
   */
  async listExperimentVersionsWithOptions(request: ListExperimentVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
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
      action: "ListExperimentVersions",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentversions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListExperimentVersionsResponse>(await this.callApi(params, req, runtime), new ListExperimentVersionsResponse({}));
  }

  /**
   * @summary 获取实验版本列表
   *
   * @param request ListExperimentVersionsRequest
   * @return ListExperimentVersionsResponse
   */
  async listExperimentVersions(request: ListExperimentVersionsRequest): Promise<ListExperimentVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentVersionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取实验列表
   *
   * @param request ListExperimentsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListExperimentsResponse
   */
  async listExperimentsWithOptions(request: ListExperimentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.experimentName)) {
      query["ExperimentName"] = request.experimentName;
    }

    if (!Util.isUnset(request.layerId)) {
      query["LayerId"] = request.layerId;
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

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExperiments",
      version: "2024-01-19",
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
   * @summary 获取实验列表
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
   * @summary 获取Faeture列表
   *
   * @param request ListFeaturesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFeaturesResponse
   */
  async listFeaturesWithOptions(request: ListFeaturesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeaturesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.featureId)) {
      query["FeatureId"] = request.featureId;
    }

    if (!Util.isUnset(request.featureName)) {
      query["FeatureName"] = request.featureName;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFeatures",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/features`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFeaturesResponse>(await this.callApi(params, req, runtime), new ListFeaturesResponse({}));
  }

  /**
   * @summary 获取Faeture列表
   *
   * @param request ListFeaturesRequest
   * @return ListFeaturesResponse
   */
  async listFeatures(request: ListFeaturesRequest): Promise<ListFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeaturesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取实验层列表
   *
   * @param request ListLayersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListLayersResponse
   */
  async listLayersWithOptions(request: ListLayersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLayersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.layerId)) {
      query["LayerId"] = request.layerId;
    }

    if (!Util.isUnset(request.layerName)) {
      query["LayerName"] = request.layerName;
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

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLayers",
      version: "2024-01-19",
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
   * @summary 获取实验层列表
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
   * @summary 获取指标组列表
   *
   * @param request ListMetricGroupsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListMetricGroupsResponse
   */
  async listMetricGroupsWithOptions(request: ListMetricGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMetricGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.metricGroupId)) {
      query["MetricGroupId"] = request.metricGroupId;
    }

    if (!Util.isUnset(request.metricGroupName)) {
      query["MetricGroupName"] = request.metricGroupName;
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

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMetricGroups",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metricgroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMetricGroupsResponse>(await this.callApi(params, req, runtime), new ListMetricGroupsResponse({}));
  }

  /**
   * @summary 获取指标组列表
   *
   * @param request ListMetricGroupsRequest
   * @return ListMetricGroupsResponse
   */
  async listMetricGroups(request: ListMetricGroupsRequest): Promise<ListMetricGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMetricGroupsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取指标列表
   *
   * @param request ListMetricsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListMetricsResponse
   */
  async listMetricsWithOptions(request: ListMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.metricGroupId)) {
      query["MetricGroupId"] = request.metricGroupId;
    }

    if (!Util.isUnset(request.metricId)) {
      query["MetricId"] = request.metricId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
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
      action: "ListMetrics",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMetricsResponse>(await this.callApi(params, req, runtime), new ListMetricsResponse({}));
  }

  /**
   * @summary 获取指标列表
   *
   * @param request ListMetricsRequest
   * @return ListMetricsResponse
   */
  async listMetrics(request: ListMetricsRequest): Promise<ListMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMetricsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取实验项目列表
   *
   * @param request ListProjectsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListProjectsResponse
   */
  async listProjectsWithOptions(request: ListProjectsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
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

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  /**
   * @summary 获取实验项目列表
   *
   * @param request ListProjectsRequest
   * @return ListProjectsResponse
   */
  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取数据表列表
   *
   * @param request ListTableMetasRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTableMetasResponse
   */
  async listTableMetasWithOptions(request: ListTableMetasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTableMetasResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.datasourceType)) {
      query["DatasourceType"] = request.datasourceType;
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

    if (!Util.isUnset(request.tableMetaId)) {
      query["TableMetaId"] = request.tableMetaId;
    }

    if (!Util.isUnset(request.tableMetaName)) {
      query["TableMetaName"] = request.tableMetaName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTableMetas",
      version: "2024-01-19",
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
   * @summary 获取数据表列表
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
   * @summary 对实验版本推全
   *
   * @param request PushAllExperimentVersionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PushAllExperimentVersionResponse
   */
  async pushAllExperimentVersionWithOptions(ExperimentVersionId: string, request: PushAllExperimentVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushAllExperimentVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.featureName)) {
      body["FeatureName"] = request.featureName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushAllExperimentVersion",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentversions/${OpenApiUtil.getEncodeParam(ExperimentVersionId)}/action/pushall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushAllExperimentVersionResponse>(await this.callApi(params, req, runtime), new PushAllExperimentVersionResponse({}));
  }

  /**
   * @summary 对实验版本推全
   *
   * @param request PushAllExperimentVersionRequest
   * @return PushAllExperimentVersionResponse
   */
  async pushAllExperimentVersion(ExperimentVersionId: string, request: PushAllExperimentVersionRequest): Promise<PushAllExperimentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushAllExperimentVersionWithOptions(ExperimentVersionId, request, headers, runtime);
  }

  /**
   * @summary 启动实验
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartExperimentResponse
   */
  async startExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartExperiment",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}/action/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartExperimentResponse>(await this.callApi(params, req, runtime), new StartExperimentResponse({}));
  }

  /**
   * @summary 启动实验
   *
   * @return StartExperimentResponse
   */
  async startExperiment(ExperimentId: string): Promise<StartExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * @summary 停止实验
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopExperimentResponse
   */
  async stopExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopExperiment",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${OpenApiUtil.getEncodeParam(ExperimentId)}/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopExperimentResponse>(await this.callApi(params, req, runtime), new StopExperimentResponse({}));
  }

  /**
   * @summary 停止实验
   *
   * @return StopExperimentResponse
   */
  async stopExperiment(ExperimentId: string): Promise<StopExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopExperimentWithOptions(ExperimentId, headers, runtime);
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

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCrowd",
      version: "2024-01-19",
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
   * @summary 更新指定实验域
   *
   * @param request UpdateDomainRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateDomainResponse
   */
  async updateDomainWithOptions(DomainId: string, request: UpdateDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!Util.isUnset(request.condition)) {
      body["Condition"] = request.condition;
    }

    if (!Util.isUnset(request.crowIds)) {
      body["CrowIds"] = request.crowIds;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.flow)) {
      body["Flow"] = request.flow;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomain",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/domains/${OpenApiUtil.getEncodeParam(DomainId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainResponse>(await this.callApi(params, req, runtime), new UpdateDomainResponse({}));
  }

  /**
   * @summary 更新指定实验域
   *
   * @param request UpdateDomainRequest
   * @return UpdateDomainResponse
   */
  async updateDomain(DomainId: string, request: UpdateDomainRequest): Promise<UpdateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDomainWithOptions(DomainId, request, headers, runtime);
  }

  /**
   * @summary 更新指定的实验
   *
   * @param request UpdateExperimentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateExperimentResponse
   */
  async updateExperimentWithOptions(ExperimentId: string, request: UpdateExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketType)) {
      body["BucketType"] = request.bucketType;
    }

    if (!Util.isUnset(request.condition)) {
      body["Condition"] = request.condition;
    }

    if (!Util.isUnset(request.coreMetricId)) {
      body["CoreMetricId"] = request.coreMetricId;
    }

    if (!Util.isUnset(request.crowdIds)) {
      body["CrowdIds"] = request.crowdIds;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.flow)) {
      body["Flow"] = request.flow;
    }

    if (!Util.isUnset(request.focusMetricIds)) {
      body["FocusMetricIds"] = request.focusMetricIds;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperiment",
      version: "2024-01-19",
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
   * @summary 更新指定的实验
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
   * @summary 更新指定的实验版本
   *
   * @param request UpdateExperimentVersionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateExperimentVersionResponse
   */
  async updateExperimentVersionWithOptions(ExperimentVersionId: string, request: UpdateExperimentVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.crowdIds)) {
      body["CrowdIds"] = request.crowdIds;
    }

    if (!Util.isUnset(request.debugUsers)) {
      body["DebugUsers"] = request.debugUsers;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.flow)) {
      body["Flow"] = request.flow;
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
      action: "UpdateExperimentVersion",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentversions/${OpenApiUtil.getEncodeParam(ExperimentVersionId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentVersionResponse>(await this.callApi(params, req, runtime), new UpdateExperimentVersionResponse({}));
  }

  /**
   * @summary 更新指定的实验版本
   *
   * @param request UpdateExperimentVersionRequest
   * @return UpdateExperimentVersionResponse
   */
  async updateExperimentVersion(ExperimentVersionId: string, request: UpdateExperimentVersionRequest): Promise<UpdateExperimentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentVersionWithOptions(ExperimentVersionId, request, headers, runtime);
  }

  /**
   * @summary 更新Feature
   *
   * @param request UpdateFeatureRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateFeatureResponse
   */
  async updateFeatureWithOptions(FeatureId: string, request: UpdateFeatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFeatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFeature",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/features/${OpenApiUtil.getEncodeParam(FeatureId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFeatureResponse>(await this.callApi(params, req, runtime), new UpdateFeatureResponse({}));
  }

  /**
   * @summary 更新Feature
   *
   * @param request UpdateFeatureRequest
   * @return UpdateFeatureResponse
   */
  async updateFeature(FeatureId: string, request: UpdateFeatureRequest): Promise<UpdateFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFeatureWithOptions(FeatureId, request, headers, runtime);
  }

  /**
   * @summary 更新指定的实验层
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

    if (!Util.isUnset(request.domainId)) {
      body["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLayer",
      version: "2024-01-19",
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
   * @summary 更新指定的实验层
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
   * @summary 更新指标
   *
   * @param request UpdateMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMetricResponse
   */
  async updateMetricWithOptions(MetricId: string, request: UpdateMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMetricResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.definition)) {
      body["Definition"] = request.definition;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourceTableMetaId)) {
      body["SourceTableMetaId"] = request.sourceTableMetaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMetric",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metrics/${OpenApiUtil.getEncodeParam(MetricId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateMetricResponse>(await this.callApi(params, req, runtime), new UpdateMetricResponse({}));
  }

  /**
   * @summary 更新指标
   *
   * @param request UpdateMetricRequest
   * @return UpdateMetricResponse
   */
  async updateMetric(MetricId: string, request: UpdateMetricRequest): Promise<UpdateMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMetricWithOptions(MetricId, request, headers, runtime);
  }

  /**
   * @summary 更新指定的指标组
   *
   * @param request UpdateMetricGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMetricGroupResponse
   */
  async updateMetricGroupWithOptions(MetricGroupId: string, request: UpdateMetricGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMetricGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMetricGroup",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/metricgroups/${OpenApiUtil.getEncodeParam(MetricGroupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateMetricGroupResponse>(await this.callApi(params, req, runtime), new UpdateMetricGroupResponse({}));
  }

  /**
   * @summary 更新指定的指标组
   *
   * @param request UpdateMetricGroupRequest
   * @return UpdateMetricGroupResponse
   */
  async updateMetricGroup(MetricGroupId: string, request: UpdateMetricGroupRequest): Promise<UpdateMetricGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMetricGroupWithOptions(MetricGroupId, request, headers, runtime);
  }

  /**
   * @summary 更新指定的实验项目
   *
   * @param request UpdateProjectRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateProjectResponse
   */
  async updateProjectWithOptions(ProjectId: string, request: UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2024-01-19",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(ProjectId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  /**
   * @summary 更新指定的实验项目
   *
   * @param request UpdateProjectRequest
   * @return UpdateProjectResponse
   */
  async updateProject(ProjectId: string, request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(ProjectId, request, headers, runtime);
  }

  /**
   * @summary 更新数据表
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

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTableMeta",
      version: "2024-01-19",
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
   * @summary 更新数据表
   *
   * @param request UpdateTableMetaRequest
   * @return UpdateTableMetaResponse
   */
  async updateTableMeta(TableMetaId: string, request: UpdateTableMetaRequest): Promise<UpdateTableMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTableMetaWithOptions(TableMetaId, request, headers, runtime);
  }

}
