// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class FeatureViewConfigValue extends $tea.Model {
  partitions?: { [key: string]: FeatureViewConfigValuePartitionsValue };
  eventTime?: string;
  equal?: boolean;
  static names(): { [key: string]: string } {
    return {
      partitions: 'Partitions',
      eventTime: 'EventTime',
      equal: 'Equal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': FeatureViewConfigValuePartitionsValue },
      eventTime: 'string',
      equal: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeatureViewConfigValuePartitionsValue extends $tea.Model {
  value?: string;
  values?: string[];
  startValue?: string;
  endValue?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      values: 'Values',
      startValue: 'StartValue',
      endValue: 'EndValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
      startValue: 'string',
      endValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeProjectFeatureEntityHotIdVersionRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeProjectFeatureEntityHotIdVersionResponseBody extends $tea.Model {
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

export class ChangeProjectFeatureEntityHotIdVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeProjectFeatureEntityHotIdVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeProjectFeatureEntityHotIdVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceDatasourceRequest extends $tea.Model {
  config?: string;
  type?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceDatasourceResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceDatasourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckInstanceDatasourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckInstanceDatasourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasourceRequest extends $tea.Model {
  config?: string;
  name?: string;
  type?: string;
  uri?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      type: 'Type',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      type: 'string',
      uri: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasourceResponseBody extends $tea.Model {
  datasourceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDatasourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureEntityRequest extends $tea.Model {
  joinId?: string;
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      joinId: 'JoinId',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinId: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureEntityResponseBody extends $tea.Model {
  featureEntityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityId: 'FeatureEntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFeatureEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFeatureEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureViewRequest extends $tea.Model {
  config?: string;
  featureEntityId?: string;
  fields?: CreateFeatureViewRequestFields[];
  name?: string;
  projectId?: string;
  registerDatasourceId?: string;
  registerTable?: string;
  syncOnlineTable?: boolean;
  TTL?: number;
  tags?: string[];
  type?: string;
  writeMethod?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureEntityId: 'FeatureEntityId',
      fields: 'Fields',
      name: 'Name',
      projectId: 'ProjectId',
      registerDatasourceId: 'RegisterDatasourceId',
      registerTable: 'RegisterTable',
      syncOnlineTable: 'SyncOnlineTable',
      TTL: 'TTL',
      tags: 'Tags',
      type: 'Type',
      writeMethod: 'WriteMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureEntityId: 'string',
      fields: { 'type': 'array', 'itemType': CreateFeatureViewRequestFields },
      name: 'string',
      projectId: 'string',
      registerDatasourceId: 'string',
      registerTable: 'string',
      syncOnlineTable: 'boolean',
      TTL: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      writeMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureViewResponseBody extends $tea.Model {
  featureViewId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      featureViewId: 'FeatureViewId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFeatureViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFeatureViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  code?: string;
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTableRequest extends $tea.Model {
  datasourceId?: string;
  fields?: CreateLabelTableRequestFields[];
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      fields: 'Fields',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      fields: { 'type': 'array', 'itemType': CreateLabelTableRequestFields },
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTableResponseBody extends $tea.Model {
  labelTableId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      labelTableId: 'LabelTableId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelTableId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLabelTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLabelTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelFeatureRequest extends $tea.Model {
  features?: CreateModelFeatureRequestFeatures[];
  labelTableId?: string;
  name?: string;
  projectId?: string;
  sequenceFeatureViewIds?: string[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      labelTableId: 'LabelTableId',
      name: 'Name',
      projectId: 'ProjectId',
      sequenceFeatureViewIds: 'SequenceFeatureViewIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': CreateModelFeatureRequestFeatures },
      labelTableId: 'string',
      name: 'string',
      projectId: 'string',
      sequenceFeatureViewIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelFeatureResponseBody extends $tea.Model {
  modelFeatureId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelFeatureId: 'ModelFeatureId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeatureId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateModelFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelFeatureTrainingSetFGTableResponseBody extends $tea.Model {
  trainingSetFGTableName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      trainingSetFGTableName: 'TrainingSetFGTableName',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trainingSetFGTableName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelFeatureTrainingSetFGTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelFeatureTrainingSetFGTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateModelFeatureTrainingSetFGTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  description?: string;
  name?: string;
  offlineDatasourceId?: string;
  offlineLifeCycle?: number;
  onlineDatasourceId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      offlineDatasourceId: 'OfflineDatasourceId',
      offlineLifeCycle: 'OfflineLifeCycle',
      onlineDatasourceId: 'OnlineDatasourceId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      offlineDatasourceId: 'string',
      offlineLifeCycle: 'number',
      onlineDatasourceId: 'string',
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

export class CreateServiceIdentityRoleRequest extends $tea.Model {
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceIdentityRoleResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceIdentityRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceIdentityRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceIdentityRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasourceResponseBody extends $tea.Model {
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

export class DeleteDatasourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDatasourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFeatureEntityResponseBody extends $tea.Model {
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

export class DeleteFeatureEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFeatureEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFeatureEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFeatureViewResponseBody extends $tea.Model {
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

export class DeleteFeatureViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFeatureViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFeatureViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelTableResponseBody extends $tea.Model {
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

export class DeleteLabelTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLabelTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLabelTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelFeatureResponseBody extends $tea.Model {
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

export class DeleteModelFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteModelFeatureResponseBody,
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

export class ExportModelFeatureTrainingSetFGTableRequest extends $tea.Model {
  trainingSetFgConfig?: ExportModelFeatureTrainingSetFGTableRequestTrainingSetFgConfig;
  static names(): { [key: string]: string } {
    return {
      trainingSetFgConfig: 'TrainingSetFgConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trainingSetFgConfig: ExportModelFeatureTrainingSetFGTableRequestTrainingSetFgConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetFGTableResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetFGTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportModelFeatureTrainingSetFGTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportModelFeatureTrainingSetFGTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetTableRequest extends $tea.Model {
  featureViewConfig?: { [key: string]: FeatureViewConfigValue };
  labelInputConfig?: ExportModelFeatureTrainingSetTableRequestLabelInputConfig;
  trainingSetConfig?: ExportModelFeatureTrainingSetTableRequestTrainingSetConfig;
  static names(): { [key: string]: string } {
    return {
      featureViewConfig: 'FeatureViewConfig',
      labelInputConfig: 'LabelInputConfig',
      trainingSetConfig: 'TrainingSetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewConfig: { 'type': 'map', 'keyType': 'string', 'valueType': FeatureViewConfigValue },
      labelInputConfig: ExportModelFeatureTrainingSetTableRequestLabelInputConfig,
      trainingSetConfig: ExportModelFeatureTrainingSetTableRequestTrainingSetConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetTableResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportModelFeatureTrainingSetTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportModelFeatureTrainingSetTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasourceResponseBody extends $tea.Model {
  config?: string;
  datasourceId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  requestId?: string;
  type?: string;
  uri?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      datasourceId: 'DatasourceId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      type: 'Type',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      datasourceId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      type: 'string',
      uri: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDatasourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasourceTableResponseBody extends $tea.Model {
  fields?: GetDatasourceTableResponseBodyFields[];
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
      fields: { 'type': 'array', 'itemType': GetDatasourceTableResponseBodyFields },
      requestId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasourceTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasourceTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDatasourceTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureEntityResponseBody extends $tea.Model {
  gmtCreateTime?: string;
  joinId?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      joinId: 'JoinId',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      joinId: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFeatureEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFeatureEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureViewResponseBody extends $tea.Model {
  config?: string;
  featureEntityId?: string;
  featureEntityName?: string;
  fields?: GetFeatureViewResponseBodyFields[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  gmtSyncTime?: string;
  joinId?: string;
  lastSyncConfig?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  publishTableScript?: string;
  registerDatasourceId?: string;
  registerDatasourceName?: string;
  registerTable?: string;
  requestId?: string;
  syncOnlineTable?: boolean;
  TTL?: number;
  tags?: string[];
  type?: string;
  writeMethod?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureEntityId: 'FeatureEntityId',
      featureEntityName: 'FeatureEntityName',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtSyncTime: 'GmtSyncTime',
      joinId: 'JoinId',
      lastSyncConfig: 'LastSyncConfig',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      publishTableScript: 'PublishTableScript',
      registerDatasourceId: 'RegisterDatasourceId',
      registerDatasourceName: 'RegisterDatasourceName',
      registerTable: 'RegisterTable',
      requestId: 'RequestId',
      syncOnlineTable: 'SyncOnlineTable',
      TTL: 'TTL',
      tags: 'Tags',
      type: 'Type',
      writeMethod: 'WriteMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureEntityId: 'string',
      featureEntityName: 'string',
      fields: { 'type': 'array', 'itemType': GetFeatureViewResponseBodyFields },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      gmtSyncTime: 'string',
      joinId: 'string',
      lastSyncConfig: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      publishTableScript: 'string',
      registerDatasourceId: 'string',
      registerDatasourceName: 'string',
      registerTable: 'string',
      requestId: 'string',
      syncOnlineTable: 'boolean',
      TTL: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      writeMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFeatureViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFeatureViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  message?: string;
  progress?: number;
  regionId?: string;
  requestId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      message: 'Message',
      progress: 'Progress',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      message: 'string',
      progress: 'number',
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

export class GetLabelTableResponseBody extends $tea.Model {
  datasourceId?: string;
  datasourceName?: string;
  fields?: GetLabelTableResponseBodyFields[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  relatedModelFeatures?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      relatedModelFeatures: 'RelatedModelFeatures',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      datasourceName: 'string',
      fields: { 'type': 'array', 'itemType': GetLabelTableResponseBodyFields },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      relatedModelFeatures: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLabelTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLabelTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureResponseBody extends $tea.Model {
  exportTrainingSetTableScript?: string;
  features?: GetModelFeatureResponseBodyFeatures[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labelTableId?: string;
  labelTableName?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  relations?: GetModelFeatureResponseBodyRelations;
  requestId?: string;
  trainingSetFGTable?: string;
  trainingSetTable?: string;
  static names(): { [key: string]: string } {
    return {
      exportTrainingSetTableScript: 'ExportTrainingSetTableScript',
      features: 'Features',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelTableId: 'LabelTableId',
      labelTableName: 'LabelTableName',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      relations: 'Relations',
      requestId: 'RequestId',
      trainingSetFGTable: 'TrainingSetFGTable',
      trainingSetTable: 'TrainingSetTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTrainingSetTableScript: 'string',
      features: { 'type': 'array', 'itemType': GetModelFeatureResponseBodyFeatures },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelTableId: 'string',
      labelTableName: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      relations: GetModelFeatureResponseBodyRelations,
      requestId: 'string',
      trainingSetFGTable: 'string',
      trainingSetTable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModelFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureFGFeatureResponseBody extends $tea.Model {
  lookupFeatures?: GetModelFeatureFGFeatureResponseBodyLookupFeatures[];
  rawFeatures?: GetModelFeatureFGFeatureResponseBodyRawFeatures[];
  requestId?: string;
  reserves?: string[];
  sequenceFeatures?: GetModelFeatureFGFeatureResponseBodySequenceFeatures[];
  static names(): { [key: string]: string } {
    return {
      lookupFeatures: 'LookupFeatures',
      rawFeatures: 'RawFeatures',
      requestId: 'RequestId',
      reserves: 'Reserves',
      sequenceFeatures: 'SequenceFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lookupFeatures: { 'type': 'array', 'itemType': GetModelFeatureFGFeatureResponseBodyLookupFeatures },
      rawFeatures: { 'type': 'array', 'itemType': GetModelFeatureFGFeatureResponseBodyRawFeatures },
      requestId: 'string',
      reserves: { 'type': 'array', 'itemType': 'string' },
      sequenceFeatures: { 'type': 'array', 'itemType': GetModelFeatureFGFeatureResponseBodySequenceFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureFGFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelFeatureFGFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModelFeatureFGFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureFGInfoResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureFGInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelFeatureFGInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModelFeatureFGInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  description?: string;
  featureEntityCount?: number;
  featureViewCount?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  modelCount?: number;
  name?: string;
  offlineDatasourceId?: string;
  offlineDatasourceName?: string;
  offlineDatasourceType?: string;
  offlineLifecycle?: number;
  onlineDatasourceId?: string;
  onlineDatasourceName?: string;
  onlineDatasourceType?: string;
  owner?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      featureEntityCount: 'FeatureEntityCount',
      featureViewCount: 'FeatureViewCount',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modelCount: 'ModelCount',
      name: 'Name',
      offlineDatasourceId: 'OfflineDatasourceId',
      offlineDatasourceName: 'OfflineDatasourceName',
      offlineDatasourceType: 'OfflineDatasourceType',
      offlineLifecycle: 'OfflineLifecycle',
      onlineDatasourceId: 'OnlineDatasourceId',
      onlineDatasourceName: 'OnlineDatasourceName',
      onlineDatasourceType: 'OnlineDatasourceType',
      owner: 'Owner',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      featureEntityCount: 'number',
      featureViewCount: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modelCount: 'number',
      name: 'string',
      offlineDatasourceId: 'string',
      offlineDatasourceName: 'string',
      offlineDatasourceType: 'string',
      offlineLifecycle: 'number',
      onlineDatasourceId: 'string',
      onlineDatasourceName: 'string',
      onlineDatasourceType: 'string',
      owner: 'string',
      requestId: 'string',
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

export class GetProjectFeatureEntityResponseBody extends $tea.Model {
  featureEntityId?: string;
  joinId?: string;
  name?: string;
  projectName?: string;
  requestId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityId: 'FeatureEntityId',
      joinId: 'JoinId',
      name: 'Name',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityId: 'string',
      joinId: 'string',
      name: 'string',
      projectName: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectFeatureEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectFeatureEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectFeatureEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectFeatureEntityHotIdsResponseBody extends $tea.Model {
  count?: number;
  hotIds?: string;
  nextSeqNumber?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      hotIds: 'HotIds',
      nextSeqNumber: 'NextSeqNumber',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      hotIds: 'string',
      nextSeqNumber: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectFeatureEntityHotIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectFeatureEntityHotIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectFeatureEntityHotIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectFeatureViewResponseBody extends $tea.Model {
  config?: string;
  featureEntityId?: string;
  featureEntityName?: string;
  featureViewId?: string;
  fields?: GetProjectFeatureViewResponseBodyFields[];
  gmtSyncTime?: string;
  joinId?: string;
  lastSyncConfig?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  registerDatasourceId?: string;
  registerTable?: string;
  requestId?: string;
  syncOnlineTable?: boolean;
  TTL?: number;
  tags?: string[];
  type?: string;
  writeMethod?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureEntityId: 'FeatureEntityId',
      featureEntityName: 'FeatureEntityName',
      featureViewId: 'FeatureViewId',
      fields: 'Fields',
      gmtSyncTime: 'GmtSyncTime',
      joinId: 'JoinId',
      lastSyncConfig: 'LastSyncConfig',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      registerDatasourceId: 'RegisterDatasourceId',
      registerTable: 'RegisterTable',
      requestId: 'RequestId',
      syncOnlineTable: 'SyncOnlineTable',
      TTL: 'TTL',
      tags: 'Tags',
      type: 'Type',
      writeMethod: 'WriteMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureEntityId: 'string',
      featureEntityName: 'string',
      featureViewId: 'string',
      fields: { 'type': 'array', 'itemType': GetProjectFeatureViewResponseBodyFields },
      gmtSyncTime: 'string',
      joinId: 'string',
      lastSyncConfig: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      registerDatasourceId: 'string',
      registerTable: 'string',
      requestId: 'string',
      syncOnlineTable: 'boolean',
      TTL: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      writeMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectFeatureViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectFeatureViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectFeatureViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectModelFeatureResponseBody extends $tea.Model {
  features?: GetProjectModelFeatureResponseBodyFeatures[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labelDatasourceId?: string;
  labelDatasourceTable?: string;
  labelEventTime?: string;
  labelTableId?: string;
  modelFeatureId?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  requestId?: string;
  trainingSetFGTable?: string;
  trainingSetTable?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelDatasourceId: 'LabelDatasourceId',
      labelDatasourceTable: 'LabelDatasourceTable',
      labelEventTime: 'LabelEventTime',
      labelTableId: 'LabelTableId',
      modelFeatureId: 'ModelFeatureId',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      trainingSetFGTable: 'TrainingSetFGTable',
      trainingSetTable: 'TrainingSetTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': GetProjectModelFeatureResponseBodyFeatures },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelDatasourceId: 'string',
      labelDatasourceTable: 'string',
      labelEventTime: 'string',
      labelTableId: 'string',
      modelFeatureId: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      trainingSetFGTable: 'string',
      trainingSetTable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectModelFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectModelFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectModelFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceIdentityRoleResponseBody extends $tea.Model {
  policy?: string;
  requestId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      requestId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceIdentityRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceIdentityRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceIdentityRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  config?: string;
  gmtCreateTime?: string;
  gmtExecutedTime?: string;
  gmtFinishedTime?: string;
  gmtModifiedTime?: string;
  objectId?: string;
  objectType?: string;
  projectId?: string;
  projectName?: string;
  requestId?: string;
  runningConfig?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      gmtCreateTime: 'GmtCreateTime',
      gmtExecutedTime: 'GmtExecutedTime',
      gmtFinishedTime: 'GmtFinishedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      runningConfig: 'RunningConfig',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      gmtCreateTime: 'string',
      gmtExecutedTime: 'string',
      gmtFinishedTime: 'string',
      gmtModifiedTime: 'string',
      objectId: 'string',
      objectType: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      runningConfig: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceTablesRequest extends $tea.Model {
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceTablesResponseBody extends $tea.Model {
  requestId?: string;
  tables?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourceTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasourceTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDatasourceTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourcesRequest extends $tea.Model {
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourcesResponseBody extends $tea.Model {
  datasources?: ListDatasourcesResponseBodyDatasources[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasources: 'Datasources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasources: { 'type': 'array', 'itemType': ListDatasourcesResponseBodyDatasources },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDatasourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureEntitiesRequest extends $tea.Model {
  featureEntityIds?: string[];
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityIds: 'FeatureEntityIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureEntitiesShrinkRequest extends $tea.Model {
  featureEntityIdsShrink?: string;
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityIdsShrink: 'FeatureEntityIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityIdsShrink: 'string',
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureEntitiesResponseBody extends $tea.Model {
  featureEntities?: ListFeatureEntitiesResponseBodyFeatureEntities[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureEntities: 'FeatureEntities',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntities: { 'type': 'array', 'itemType': ListFeatureEntitiesResponseBodyFeatureEntities },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureEntitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewFieldRelationshipsResponseBody extends $tea.Model {
  relationships?: ListFeatureViewFieldRelationshipsResponseBodyRelationships[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      relationships: 'Relationships',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationships: { 'type': 'array', 'itemType': ListFeatureViewFieldRelationshipsResponseBodyRelationships },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewFieldRelationshipsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureViewFieldRelationshipsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureViewFieldRelationshipsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewRelationshipsResponseBody extends $tea.Model {
  relationships?: ListFeatureViewRelationshipsResponseBodyRelationships[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      relationships: 'Relationships',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationships: { 'type': 'array', 'itemType': ListFeatureViewRelationshipsResponseBodyRelationships },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewRelationshipsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureViewRelationshipsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureViewRelationshipsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewsRequest extends $tea.Model {
  featureName?: string;
  featureViewIds?: string[];
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortBy?: string;
  tag?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
      featureViewIds: 'FeatureViewIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
      featureViewIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
      tag: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewsShrinkRequest extends $tea.Model {
  featureName?: string;
  featureViewIdsShrink?: string;
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortBy?: string;
  tag?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
      featureViewIdsShrink: 'FeatureViewIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
      featureViewIdsShrink: 'string',
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
      tag: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewsResponseBody extends $tea.Model {
  featureViews?: ListFeatureViewsResponseBodyFeatureViews[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureViews: 'FeatureViews',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViews: { 'type': 'array', 'itemType': ListFeatureViewsResponseBodyFeatureViews },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureViewsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureViewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      status: 'string',
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

export class ListLabelTablesRequest extends $tea.Model {
  labelTableIds?: string[];
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      labelTableIds: 'LabelTableIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelTableIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelTablesShrinkRequest extends $tea.Model {
  labelTableIdsShrink?: string;
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      labelTableIdsShrink: 'LabelTableIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelTableIdsShrink: 'string',
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelTablesResponseBody extends $tea.Model {
  labelTables?: ListLabelTablesResponseBodyLabelTables[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labelTables: 'LabelTables',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelTables: { 'type': 'array', 'itemType': ListLabelTablesResponseBodyLabelTables },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLabelTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLabelTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelFeatureAvailableFeaturesRequest extends $tea.Model {
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

export class ListModelFeatureAvailableFeaturesResponseBody extends $tea.Model {
  avaliableFeatures?: ListModelFeatureAvailableFeaturesResponseBodyAvaliableFeatures[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      avaliableFeatures: 'AvaliableFeatures',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliableFeatures: { 'type': 'array', 'itemType': ListModelFeatureAvailableFeaturesResponseBodyAvaliableFeatures },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelFeatureAvailableFeaturesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModelFeatureAvailableFeaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListModelFeatureAvailableFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelFeaturesRequest extends $tea.Model {
  modelFeatureIds?: string[];
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      modelFeatureIds: 'ModelFeatureIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeatureIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelFeaturesShrinkRequest extends $tea.Model {
  modelFeatureIdsShrink?: string;
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      modelFeatureIdsShrink: 'ModelFeatureIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeatureIdsShrink: 'string',
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelFeaturesResponseBody extends $tea.Model {
  modelFeatures?: ListModelFeaturesResponseBodyModelFeatures[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modelFeatures: 'ModelFeatures',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeatures: { 'type': 'array', 'itemType': ListModelFeaturesResponseBodyModelFeatures },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelFeaturesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModelFeaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListModelFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewOwnersResponseBody extends $tea.Model {
  owners?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      owners: 'Owners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owners: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewOwnersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectFeatureViewOwnersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectFeatureViewOwnersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectFeatureViewTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectFeatureViewTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewsResponseBody extends $tea.Model {
  featureViews?: ListProjectFeatureViewsResponseBodyFeatureViews[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureViews: 'FeatureViews',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViews: { 'type': 'array', 'itemType': ListProjectFeatureViewsResponseBodyFeatureViews },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectFeatureViewsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectFeatureViewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectIds?: string[];
  sortBy?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectIds: 'ProjectIds',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectIds: { 'type': 'array', 'itemType': 'string' },
      sortBy: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsShrinkRequest extends $tea.Model {
  name?: string;
  order?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectIdsShrink?: string;
  sortBy?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectIdsShrink: 'ProjectIds',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectIdsShrink: 'string',
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

export class ListTaskLogsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskLogsResponseBody extends $tea.Model {
  logs?: string[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTaskLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTaskLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  objectId?: string;
  objectType?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  status?: string;
  taskIds?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
      taskIds: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      objectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksShrinkRequest extends $tea.Model {
  objectId?: string;
  objectType?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  status?: string;
  taskIdsShrink?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
      taskIdsShrink: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      objectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
      taskIdsShrink: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  requestId?: string;
  tasks?: ListTasksResponseBodyTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFeatureViewTableRequest extends $tea.Model {
  config?: string;
  eventTime?: string;
  mode?: string;
  offlineToOnline?: boolean;
  partitions?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      eventTime: 'EventTime',
      mode: 'Mode',
      offlineToOnline: 'OfflineToOnline',
      partitions: 'Partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      eventTime: 'string',
      mode: 'string',
      offlineToOnline: 'boolean',
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFeatureViewTableResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFeatureViewTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishFeatureViewTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishFeatureViewTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasourceRequest extends $tea.Model {
  config?: string;
  name?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasourceResponseBody extends $tea.Model {
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

export class UpdateDatasourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatasourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDatasourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelTableRequest extends $tea.Model {
  datasourceId?: string;
  fields?: UpdateLabelTableRequestFields[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      fields: 'Fields',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      fields: { 'type': 'array', 'itemType': UpdateLabelTableRequestFields },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelTableResponseBody extends $tea.Model {
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

export class UpdateLabelTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLabelTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLabelTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureRequest extends $tea.Model {
  features?: UpdateModelFeatureRequestFeatures[];
  labelTableId?: string;
  sequenceFeatureViewIds?: string[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      labelTableId: 'LabelTableId',
      sequenceFeatureViewIds: 'SequenceFeatureViewIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': UpdateModelFeatureRequestFeatures },
      labelTableId: 'string',
      sequenceFeatureViewIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureResponseBody extends $tea.Model {
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

export class UpdateModelFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModelFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateModelFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureFGFeatureRequest extends $tea.Model {
  lookupFeatures?: UpdateModelFeatureFGFeatureRequestLookupFeatures[];
  rawFeatures?: UpdateModelFeatureFGFeatureRequestRawFeatures[];
  reserves?: string[];
  sequenceFeatures?: UpdateModelFeatureFGFeatureRequestSequenceFeatures[];
  static names(): { [key: string]: string } {
    return {
      lookupFeatures: 'LookupFeatures',
      rawFeatures: 'RawFeatures',
      reserves: 'Reserves',
      sequenceFeatures: 'SequenceFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lookupFeatures: { 'type': 'array', 'itemType': UpdateModelFeatureFGFeatureRequestLookupFeatures },
      rawFeatures: { 'type': 'array', 'itemType': UpdateModelFeatureFGFeatureRequestRawFeatures },
      reserves: { 'type': 'array', 'itemType': 'string' },
      sequenceFeatures: { 'type': 'array', 'itemType': UpdateModelFeatureFGFeatureRequestSequenceFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureFGFeatureResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateModelFeatureFGFeatureResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModelFeatureFGFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateModelFeatureFGFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureFGInfoRequest extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureFGInfoResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class UpdateModelFeatureFGInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModelFeatureFGInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateModelFeatureFGInfoResponseBody,
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

export class WriteFeatureViewTableRequest extends $tea.Model {
  mode?: string;
  partitions?: { [key: string]: {[key: string]: any} };
  urlDatasource?: WriteFeatureViewTableRequestUrlDatasource;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      partitions: 'Partitions',
      urlDatasource: 'UrlDatasource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      urlDatasource: WriteFeatureViewTableRequestUrlDatasource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteFeatureViewTableResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteFeatureViewTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WriteFeatureViewTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WriteFeatureViewTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteProjectFeatureEntityHotIdsRequest extends $tea.Model {
  hotIds?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      hotIds: 'HotIds',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotIds: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteProjectFeatureEntityHotIdsResponseBody extends $tea.Model {
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

export class WriteProjectFeatureEntityHotIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WriteProjectFeatureEntityHotIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WriteProjectFeatureEntityHotIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureViewRequestFields extends $tea.Model {
  attributes?: string[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTableRequestFields extends $tea.Model {
  attributes?: string[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelFeatureRequestFeatures extends $tea.Model {
  aliasName?: string;
  featureViewId?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      featureViewId: 'FeatureViewId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetFGTableRequestTrainingSetFgConfig extends $tea.Model {
  fgJsonName?: string;
  jarName?: string;
  partitions?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      fgJsonName: 'FgJsonName',
      jarName: 'JarName',
      partitions: 'Partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fgJsonName: 'string',
      jarName: 'string',
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetTableRequestLabelInputConfig extends $tea.Model {
  eventTime?: string;
  partitions?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      partitions: 'Partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: 'string',
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetTableRequestTrainingSetConfig extends $tea.Model {
  partitions?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      partitions: 'Partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasourceTableResponseBodyFields extends $tea.Model {
  attributes?: string[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureViewResponseBodyFields extends $tea.Model {
  attributes?: string[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelTableResponseBodyFields extends $tea.Model {
  attributes?: string[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureResponseBodyFeatures extends $tea.Model {
  aliasName?: string;
  featureViewId?: string;
  featureViewName?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      featureViewId: 'FeatureViewId',
      featureViewName: 'FeatureViewName',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      featureViewName: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureResponseBodyRelationsDomains extends $tea.Model {
  domainType?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domainType: 'DomainType',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainType: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureResponseBodyRelationsLinks extends $tea.Model {
  from?: string;
  link?: string;
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      link: 'Link',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      link: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureResponseBodyRelations extends $tea.Model {
  domains?: GetModelFeatureResponseBodyRelationsDomains[];
  links?: GetModelFeatureResponseBodyRelationsLinks[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      links: 'Links',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': GetModelFeatureResponseBodyRelationsDomains },
      links: { 'type': 'array', 'itemType': GetModelFeatureResponseBodyRelationsLinks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureFGFeatureResponseBodyLookupFeatures extends $tea.Model {
  defaultValue?: string;
  featureName?: string;
  keyFeatureDomain?: string;
  keyFeatureName?: string;
  mapFeatureDomain?: string;
  mapFeatureName?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      featureName: 'FeatureName',
      keyFeatureDomain: 'KeyFeatureDomain',
      keyFeatureName: 'KeyFeatureName',
      mapFeatureDomain: 'MapFeatureDomain',
      mapFeatureName: 'MapFeatureName',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      featureName: 'string',
      keyFeatureDomain: 'string',
      keyFeatureName: 'string',
      mapFeatureDomain: 'string',
      mapFeatureName: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureFGFeatureResponseBodyRawFeatures extends $tea.Model {
  defaultValue?: string;
  featureDomain?: string;
  featureName?: string;
  featureType?: string;
  inputFeatureName?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      featureDomain: 'FeatureDomain',
      featureName: 'FeatureName',
      featureType: 'FeatureType',
      inputFeatureName: 'InputFeatureName',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      featureDomain: 'string',
      featureName: 'string',
      featureType: 'string',
      inputFeatureName: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureFGFeatureResponseBodySequenceFeaturesSubFeatures extends $tea.Model {
  defaultValue?: string;
  featureDomain?: string;
  featureName?: string;
  featureType?: string;
  inputFeatureName?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      featureDomain: 'FeatureDomain',
      featureName: 'FeatureName',
      featureType: 'FeatureType',
      inputFeatureName: 'InputFeatureName',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      featureDomain: 'string',
      featureName: 'string',
      featureType: 'string',
      inputFeatureName: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureFGFeatureResponseBodySequenceFeatures extends $tea.Model {
  attributeDelim?: string;
  featureName?: string;
  sequenceDelim?: string;
  sequenceLength?: number;
  subFeatures?: GetModelFeatureFGFeatureResponseBodySequenceFeaturesSubFeatures[];
  static names(): { [key: string]: string } {
    return {
      attributeDelim: 'AttributeDelim',
      featureName: 'FeatureName',
      sequenceDelim: 'SequenceDelim',
      sequenceLength: 'SequenceLength',
      subFeatures: 'SubFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeDelim: 'string',
      featureName: 'string',
      sequenceDelim: 'string',
      sequenceLength: 'number',
      subFeatures: { 'type': 'array', 'itemType': GetModelFeatureFGFeatureResponseBodySequenceFeaturesSubFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectFeatureViewResponseBodyFields extends $tea.Model {
  attributes?: string[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectModelFeatureResponseBodyFeatures extends $tea.Model {
  aliasName?: string;
  featureViewId?: string;
  featureViewName?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      featureViewId: 'FeatureViewId',
      featureViewName: 'FeatureViewName',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      featureViewName: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasourcesResponseBodyDatasources extends $tea.Model {
  config?: string;
  datasourceId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  type?: string;
  uri?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      datasourceId: 'DatasourceId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      type: 'Type',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      datasourceId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      type: 'string',
      uri: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureEntitiesResponseBodyFeatureEntities extends $tea.Model {
  featureEntityId?: string;
  gmtCreateTime?: string;
  joinId?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityId: 'FeatureEntityId',
      gmtCreateTime: 'GmtCreateTime',
      joinId: 'JoinId',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityId: 'string',
      gmtCreateTime: 'string',
      joinId: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewFieldRelationshipsResponseBodyRelationshipsModels extends $tea.Model {
  modelId?: string;
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      modelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewFieldRelationshipsResponseBodyRelationships extends $tea.Model {
  featureName?: string;
  models?: ListFeatureViewFieldRelationshipsResponseBodyRelationshipsModels[];
  offlineTableName?: string;
  onlineTableName?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
      models: 'Models',
      offlineTableName: 'OfflineTableName',
      onlineTableName: 'OnlineTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
      models: { 'type': 'array', 'itemType': ListFeatureViewFieldRelationshipsResponseBodyRelationshipsModels },
      offlineTableName: 'string',
      onlineTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewRelationshipsResponseBodyRelationshipsModels extends $tea.Model {
  modelId?: string;
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      modelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewRelationshipsResponseBodyRelationships extends $tea.Model {
  featureViewName?: string;
  models?: ListFeatureViewRelationshipsResponseBodyRelationshipsModels[];
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      featureViewName: 'FeatureViewName',
      models: 'Models',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewName: 'string',
      models: { 'type': 'array', 'itemType': ListFeatureViewRelationshipsResponseBodyRelationshipsModels },
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewsResponseBodyFeatureViews extends $tea.Model {
  featureEntityName?: string;
  featureViewId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  registerDatasourceId?: string;
  registerDatasourceName?: string;
  registerTable?: string;
  TTL?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityName: 'FeatureEntityName',
      featureViewId: 'FeatureViewId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      registerDatasourceId: 'RegisterDatasourceId',
      registerDatasourceName: 'RegisterDatasourceName',
      registerTable: 'RegisterTable',
      TTL: 'TTL',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityName: 'string',
      featureViewId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      registerDatasourceId: 'string',
      registerDatasourceName: 'string',
      registerTable: 'string',
      TTL: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  regionId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
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

export class ListLabelTablesResponseBodyLabelTables extends $tea.Model {
  datasourceId?: string;
  datasourceName?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labelTableId?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelTableId: 'LabelTableId',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      datasourceName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelTableId: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelFeatureAvailableFeaturesResponseBodyAvaliableFeatures extends $tea.Model {
  name?: string;
  sourceName?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceName: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelFeaturesResponseBodyModelFeatures extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labelTableName?: string;
  modelFeatureId?: string;
  name?: string;
  owner?: string;
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelTableName: 'LabelTableName',
      modelFeatureId: 'ModelFeatureId',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labelTableName: 'string',
      modelFeatureId: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewsResponseBodyFeatureViewsFeatures extends $tea.Model {
  attributes?: string[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFeatureViewsResponseBodyFeatureViews extends $tea.Model {
  featureViewId?: string;
  features?: ListProjectFeatureViewsResponseBodyFeatureViewsFeatures[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureViewId: 'FeatureViewId',
      features: 'Features',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewId: 'string',
      features: { 'type': 'array', 'itemType': ListProjectFeatureViewsResponseBodyFeatureViewsFeatures },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyProjects extends $tea.Model {
  description?: string;
  featureEntityCount?: number;
  featureViewCount?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  modelCount?: number;
  name?: string;
  offlineDatasourceId?: string;
  offlineDatasourceName?: string;
  offlineDatasourceType?: string;
  offlineLifecycle?: number;
  onlineDatasourceId?: string;
  onlineDatasourceName?: string;
  onlineDatasourceType?: string;
  owner?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      featureEntityCount: 'FeatureEntityCount',
      featureViewCount: 'FeatureViewCount',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modelCount: 'ModelCount',
      name: 'Name',
      offlineDatasourceId: 'OfflineDatasourceId',
      offlineDatasourceName: 'OfflineDatasourceName',
      offlineDatasourceType: 'OfflineDatasourceType',
      offlineLifecycle: 'OfflineLifecycle',
      onlineDatasourceId: 'OnlineDatasourceId',
      onlineDatasourceName: 'OnlineDatasourceName',
      onlineDatasourceType: 'OnlineDatasourceType',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      featureEntityCount: 'number',
      featureViewCount: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modelCount: 'number',
      name: 'string',
      offlineDatasourceId: 'string',
      offlineDatasourceName: 'string',
      offlineDatasourceType: 'string',
      offlineLifecycle: 'number',
      onlineDatasourceId: 'string',
      onlineDatasourceName: 'string',
      onlineDatasourceType: 'string',
      owner: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasks extends $tea.Model {
  gmtCreateTime?: string;
  gmtExecutedTime?: string;
  gmtFinishedTime?: string;
  objectId?: string;
  objectType?: string;
  projectId?: string;
  projectName?: string;
  status?: string;
  taskId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtExecutedTime: 'GmtExecutedTime',
      gmtFinishedTime: 'GmtFinishedTime',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtExecutedTime: 'string',
      gmtFinishedTime: 'string',
      objectId: 'string',
      objectType: 'string',
      projectId: 'string',
      projectName: 'string',
      status: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelTableRequestFields extends $tea.Model {
  attributes?: string[];
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureRequestFeatures extends $tea.Model {
  aliasName?: string;
  featureViewId?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      featureViewId: 'FeatureViewId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureFGFeatureRequestLookupFeatures extends $tea.Model {
  defaultValue?: string;
  featureName?: string;
  keyFeatureDomain?: string;
  keyFeatureName?: string;
  mapFeatureDomain?: string;
  mapFeatureName?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      featureName: 'FeatureName',
      keyFeatureDomain: 'KeyFeatureDomain',
      keyFeatureName: 'KeyFeatureName',
      mapFeatureDomain: 'MapFeatureDomain',
      mapFeatureName: 'MapFeatureName',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      featureName: 'string',
      keyFeatureDomain: 'string',
      keyFeatureName: 'string',
      mapFeatureDomain: 'string',
      mapFeatureName: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureFGFeatureRequestRawFeatures extends $tea.Model {
  defaultValue?: string;
  featureDomain?: string;
  featureName?: string;
  featureType?: string;
  inputFeatureName?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      featureDomain: 'FeatureDomain',
      featureName: 'FeatureName',
      featureType: 'FeatureType',
      inputFeatureName: 'InputFeatureName',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      featureDomain: 'string',
      featureName: 'string',
      featureType: 'string',
      inputFeatureName: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureFGFeatureRequestSequenceFeaturesSubFeatures extends $tea.Model {
  defaultValue?: string;
  featureDomain?: string;
  featureName?: string;
  featureType?: string;
  inputFeatureName?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      featureDomain: 'FeatureDomain',
      featureName: 'FeatureName',
      featureType: 'FeatureType',
      inputFeatureName: 'InputFeatureName',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      featureDomain: 'string',
      featureName: 'string',
      featureType: 'string',
      inputFeatureName: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureFGFeatureRequestSequenceFeatures extends $tea.Model {
  attributeDelim?: string;
  featureName?: string;
  sequenceDelim?: string;
  sequenceLength?: number;
  subFeatures?: UpdateModelFeatureFGFeatureRequestSequenceFeaturesSubFeatures[];
  static names(): { [key: string]: string } {
    return {
      attributeDelim: 'AttributeDelim',
      featureName: 'FeatureName',
      sequenceDelim: 'SequenceDelim',
      sequenceLength: 'SequenceLength',
      subFeatures: 'SubFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeDelim: 'string',
      featureName: 'string',
      sequenceDelim: 'string',
      sequenceLength: 'number',
      subFeatures: { 'type': 'array', 'itemType': UpdateModelFeatureFGFeatureRequestSequenceFeaturesSubFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteFeatureViewTableRequestUrlDatasource extends $tea.Model {
  delimiter?: string;
  omitHeader?: boolean;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      delimiter: 'Delimiter',
      omitHeader: 'OmitHeader',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delimiter: 'string',
      omitHeader: 'boolean',
      path: 'string',
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
    this._endpoint = this.getEndpoint("paifeaturestore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async changeProjectFeatureEntityHotIdVersionWithOptions(InstanceId: string, ProjectId: string, FeatureEntityName: string, request: ChangeProjectFeatureEntityHotIdVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ChangeProjectFeatureEntityHotIdVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.version)) {
      body["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeProjectFeatureEntityHotIdVersion",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/featureentities/${OpenApiUtil.getEncodeParam(FeatureEntityName)}/action/changehotidversion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ChangeProjectFeatureEntityHotIdVersionResponse>(await this.callApi(params, req, runtime), new ChangeProjectFeatureEntityHotIdVersionResponse({}));
  }

  async changeProjectFeatureEntityHotIdVersion(InstanceId: string, ProjectId: string, FeatureEntityName: string, request: ChangeProjectFeatureEntityHotIdVersionRequest): Promise<ChangeProjectFeatureEntityHotIdVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeProjectFeatureEntityHotIdVersionWithOptions(InstanceId, ProjectId, FeatureEntityName, request, headers, runtime);
  }

  async checkInstanceDatasourceWithOptions(InstanceId: string, request: CheckInstanceDatasourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckInstanceDatasourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
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
      action: "CheckInstanceDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/action/checkdatasource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckInstanceDatasourceResponse>(await this.callApi(params, req, runtime), new CheckInstanceDatasourceResponse({}));
  }

  async checkInstanceDatasource(InstanceId: string, request: CheckInstanceDatasourceRequest): Promise<CheckInstanceDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceDatasourceWithOptions(InstanceId, request, headers, runtime);
  }

  async createDatasourceWithOptions(InstanceId: string, request: CreateDatasourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDatasourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/datasources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasourceResponse>(await this.callApi(params, req, runtime), new CreateDatasourceResponse({}));
  }

  async createDatasource(InstanceId: string, request: CreateDatasourceRequest): Promise<CreateDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasourceWithOptions(InstanceId, request, headers, runtime);
  }

  async createFeatureEntityWithOptions(InstanceId: string, request: CreateFeatureEntityRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFeatureEntityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.joinId)) {
      body["JoinId"] = request.joinId;
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
      action: "CreateFeatureEntity",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureentities`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFeatureEntityResponse>(await this.callApi(params, req, runtime), new CreateFeatureEntityResponse({}));
  }

  async createFeatureEntity(InstanceId: string, request: CreateFeatureEntityRequest): Promise<CreateFeatureEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureEntityWithOptions(InstanceId, request, headers, runtime);
  }

  async createFeatureViewWithOptions(InstanceId: string, request: CreateFeatureViewRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFeatureViewResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.featureEntityId)) {
      body["FeatureEntityId"] = request.featureEntityId;
    }

    if (!Util.isUnset(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.registerDatasourceId)) {
      body["RegisterDatasourceId"] = request.registerDatasourceId;
    }

    if (!Util.isUnset(request.registerTable)) {
      body["RegisterTable"] = request.registerTable;
    }

    if (!Util.isUnset(request.syncOnlineTable)) {
      body["SyncOnlineTable"] = request.syncOnlineTable;
    }

    if (!Util.isUnset(request.TTL)) {
      body["TTL"] = request.TTL;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.writeMethod)) {
      body["WriteMethod"] = request.writeMethod;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFeatureView",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureviews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFeatureViewResponse>(await this.callApi(params, req, runtime), new CreateFeatureViewResponse({}));
  }

  async createFeatureView(InstanceId: string, request: CreateFeatureViewRequest): Promise<CreateFeatureViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureViewWithOptions(InstanceId, request, headers, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  async createLabelTableWithOptions(InstanceId: string, request: CreateLabelTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLabelTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!Util.isUnset(request.fields)) {
      body["Fields"] = request.fields;
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
      action: "CreateLabelTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/labeltables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateLabelTableResponse>(await this.callApi(params, req, runtime), new CreateLabelTableResponse({}));
  }

  async createLabelTable(InstanceId: string, request: CreateLabelTableRequest): Promise<CreateLabelTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLabelTableWithOptions(InstanceId, request, headers, runtime);
  }

  async createModelFeatureWithOptions(InstanceId: string, request: CreateModelFeatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModelFeatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.features)) {
      body["Features"] = request.features;
    }

    if (!Util.isUnset(request.labelTableId)) {
      body["LabelTableId"] = request.labelTableId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sequenceFeatureViewIds)) {
      body["SequenceFeatureViewIds"] = request.sequenceFeatureViewIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateModelFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateModelFeatureResponse>(await this.callApi(params, req, runtime), new CreateModelFeatureResponse({}));
  }

  async createModelFeature(InstanceId: string, request: CreateModelFeatureRequest): Promise<CreateModelFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelFeatureWithOptions(InstanceId, request, headers, runtime);
  }

  async createModelFeatureTrainingSetFGTableWithOptions(InstanceId: string, ModelFeatureId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModelFeatureTrainingSetFGTableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateModelFeatureTrainingSetFGTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}/trainingsetfgtable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateModelFeatureTrainingSetFGTableResponse>(await this.callApi(params, req, runtime), new CreateModelFeatureTrainingSetFGTableResponse({}));
  }

  async createModelFeatureTrainingSetFGTable(InstanceId: string, ModelFeatureId: string): Promise<CreateModelFeatureTrainingSetFGTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelFeatureTrainingSetFGTableWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  async createProjectWithOptions(InstanceId: string, request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.offlineDatasourceId)) {
      body["OfflineDatasourceId"] = request.offlineDatasourceId;
    }

    if (!Util.isUnset(request.offlineLifeCycle)) {
      body["OfflineLifeCycle"] = request.offlineLifeCycle;
    }

    if (!Util.isUnset(request.onlineDatasourceId)) {
      body["OnlineDatasourceId"] = request.onlineDatasourceId;
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
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(InstanceId: string, request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(InstanceId, request, headers, runtime);
  }

  async createServiceIdentityRoleWithOptions(request: CreateServiceIdentityRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceIdentityRoleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceIdentityRole",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/serviceidentityroles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceIdentityRoleResponse({}));
  }

  async createServiceIdentityRole(request: CreateServiceIdentityRoleRequest): Promise<CreateServiceIdentityRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceIdentityRoleWithOptions(request, headers, runtime);
  }

  async deleteDatasourceWithOptions(InstanceId: string, DatasourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDatasourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/datasources/${OpenApiUtil.getEncodeParam(DatasourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatasourceResponse>(await this.callApi(params, req, runtime), new DeleteDatasourceResponse({}));
  }

  async deleteDatasource(InstanceId: string, DatasourceId: string): Promise<DeleteDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasourceWithOptions(InstanceId, DatasourceId, headers, runtime);
  }

  async deleteFeatureEntityWithOptions(InstanceId: string, FeatureEntityId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFeatureEntityResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFeatureEntity",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureentities/${OpenApiUtil.getEncodeParam(FeatureEntityId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFeatureEntityResponse>(await this.callApi(params, req, runtime), new DeleteFeatureEntityResponse({}));
  }

  async deleteFeatureEntity(InstanceId: string, FeatureEntityId: string): Promise<DeleteFeatureEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFeatureEntityWithOptions(InstanceId, FeatureEntityId, headers, runtime);
  }

  async deleteFeatureViewWithOptions(InstanceId: string, FeatureViewId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFeatureViewResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFeatureView",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureviews/${OpenApiUtil.getEncodeParam(FeatureViewId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFeatureViewResponse>(await this.callApi(params, req, runtime), new DeleteFeatureViewResponse({}));
  }

  async deleteFeatureView(InstanceId: string, FeatureViewId: string): Promise<DeleteFeatureViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFeatureViewWithOptions(InstanceId, FeatureViewId, headers, runtime);
  }

  async deleteLabelTableWithOptions(InstanceId: string, LabelTableId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLabelTableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteLabelTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/labeltables/${OpenApiUtil.getEncodeParam(LabelTableId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteLabelTableResponse>(await this.callApi(params, req, runtime), new DeleteLabelTableResponse({}));
  }

  async deleteLabelTable(InstanceId: string, LabelTableId: string): Promise<DeleteLabelTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLabelTableWithOptions(InstanceId, LabelTableId, headers, runtime);
  }

  async deleteModelFeatureWithOptions(InstanceId: string, ModelFeatureId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteModelFeatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteModelFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteModelFeatureResponse>(await this.callApi(params, req, runtime), new DeleteModelFeatureResponse({}));
  }

  async deleteModelFeature(InstanceId: string, ModelFeatureId: string): Promise<DeleteModelFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelFeatureWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  async deleteProjectWithOptions(InstanceId: string, ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(InstanceId: string, ProjectId: string): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  async exportModelFeatureTrainingSetFGTableWithOptions(InstanceId: string, ModelFeatureId: string, request: ExportModelFeatureTrainingSetFGTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExportModelFeatureTrainingSetFGTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.trainingSetFgConfig)) {
      body["TrainingSetFgConfig"] = request.trainingSetFgConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportModelFeatureTrainingSetFGTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}/action/exporttrainingsetfgtable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExportModelFeatureTrainingSetFGTableResponse>(await this.callApi(params, req, runtime), new ExportModelFeatureTrainingSetFGTableResponse({}));
  }

  async exportModelFeatureTrainingSetFGTable(InstanceId: string, ModelFeatureId: string, request: ExportModelFeatureTrainingSetFGTableRequest): Promise<ExportModelFeatureTrainingSetFGTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportModelFeatureTrainingSetFGTableWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  async exportModelFeatureTrainingSetTableWithOptions(InstanceId: string, ModelFeatureId: string, request: ExportModelFeatureTrainingSetTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExportModelFeatureTrainingSetTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.featureViewConfig)) {
      body["FeatureViewConfig"] = request.featureViewConfig;
    }

    if (!Util.isUnset(request.labelInputConfig)) {
      body["LabelInputConfig"] = request.labelInputConfig;
    }

    if (!Util.isUnset(request.trainingSetConfig)) {
      body["TrainingSetConfig"] = request.trainingSetConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportModelFeatureTrainingSetTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}/action/exporttrainingsettable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExportModelFeatureTrainingSetTableResponse>(await this.callApi(params, req, runtime), new ExportModelFeatureTrainingSetTableResponse({}));
  }

  async exportModelFeatureTrainingSetTable(InstanceId: string, ModelFeatureId: string, request: ExportModelFeatureTrainingSetTableRequest): Promise<ExportModelFeatureTrainingSetTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportModelFeatureTrainingSetTableWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  async getDatasourceWithOptions(InstanceId: string, DatasourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDatasourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/datasources/${OpenApiUtil.getEncodeParam(DatasourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDatasourceResponse>(await this.callApi(params, req, runtime), new GetDatasourceResponse({}));
  }

  async getDatasource(InstanceId: string, DatasourceId: string): Promise<GetDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasourceWithOptions(InstanceId, DatasourceId, headers, runtime);
  }

  async getDatasourceTableWithOptions(InstanceId: string, DatasourceId: string, TableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDatasourceTableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDatasourceTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/datasources/${OpenApiUtil.getEncodeParam(DatasourceId)}/tables/${OpenApiUtil.getEncodeParam(TableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDatasourceTableResponse>(await this.callApi(params, req, runtime), new GetDatasourceTableResponse({}));
  }

  async getDatasourceTable(InstanceId: string, DatasourceId: string, TableName: string): Promise<GetDatasourceTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasourceTableWithOptions(InstanceId, DatasourceId, TableName, headers, runtime);
  }

  async getFeatureEntityWithOptions(InstanceId: string, FeatureEntityId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFeatureEntityResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFeatureEntity",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureentities/${OpenApiUtil.getEncodeParam(FeatureEntityId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFeatureEntityResponse>(await this.callApi(params, req, runtime), new GetFeatureEntityResponse({}));
  }

  async getFeatureEntity(InstanceId: string, FeatureEntityId: string): Promise<GetFeatureEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureEntityWithOptions(InstanceId, FeatureEntityId, headers, runtime);
  }

  async getFeatureViewWithOptions(InstanceId: string, FeatureViewId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFeatureViewResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFeatureView",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureviews/${OpenApiUtil.getEncodeParam(FeatureViewId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFeatureViewResponse>(await this.callApi(params, req, runtime), new GetFeatureViewResponse({}));
  }

  async getFeatureView(InstanceId: string, FeatureViewId: string): Promise<GetFeatureViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureViewWithOptions(InstanceId, FeatureViewId, headers, runtime);
  }

  async getInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2023-06-21",
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

  async getLabelTableWithOptions(InstanceId: string, LabelTableId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLabelTableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLabelTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/labeltables/${OpenApiUtil.getEncodeParam(LabelTableId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLabelTableResponse>(await this.callApi(params, req, runtime), new GetLabelTableResponse({}));
  }

  async getLabelTable(InstanceId: string, LabelTableId: string): Promise<GetLabelTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLabelTableWithOptions(InstanceId, LabelTableId, headers, runtime);
  }

  async getModelFeatureWithOptions(InstanceId: string, ModelFeatureId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModelFeatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetModelFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModelFeatureResponse>(await this.callApi(params, req, runtime), new GetModelFeatureResponse({}));
  }

  async getModelFeature(InstanceId: string, ModelFeatureId: string): Promise<GetModelFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelFeatureWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  async getModelFeatureFGFeatureWithOptions(InstanceId: string, ModelFeatureId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModelFeatureFGFeatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetModelFeatureFGFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}/fgfeature`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModelFeatureFGFeatureResponse>(await this.callApi(params, req, runtime), new GetModelFeatureFGFeatureResponse({}));
  }

  async getModelFeatureFGFeature(InstanceId: string, ModelFeatureId: string): Promise<GetModelFeatureFGFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelFeatureFGFeatureWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  async getModelFeatureFGInfoWithOptions(InstanceId: string, ModelFeatureId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModelFeatureFGInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetModelFeatureFGInfo",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}/fginfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModelFeatureFGInfoResponse>(await this.callApi(params, req, runtime), new GetModelFeatureFGInfoResponse({}));
  }

  async getModelFeatureFGInfo(InstanceId: string, ModelFeatureId: string): Promise<GetModelFeatureFGInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelFeatureFGInfoWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  async getProjectWithOptions(InstanceId: string, ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  async getProject(InstanceId: string, ProjectId: string): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  async getProjectFeatureEntityWithOptions(InstanceId: string, ProjectId: string, FeatureEntityName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectFeatureEntityResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProjectFeatureEntity",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/featureentities/${OpenApiUtil.getEncodeParam(FeatureEntityName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectFeatureEntityResponse>(await this.callApi(params, req, runtime), new GetProjectFeatureEntityResponse({}));
  }

  async getProjectFeatureEntity(InstanceId: string, ProjectId: string, FeatureEntityName: string): Promise<GetProjectFeatureEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectFeatureEntityWithOptions(InstanceId, ProjectId, FeatureEntityName, headers, runtime);
  }

  async getProjectFeatureEntityHotIdsWithOptions(InstanceId: string, ProjectId: string, NextSeqNumber: string, FeatureEntityName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectFeatureEntityHotIdsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProjectFeatureEntityHotIds",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/featureentities/${OpenApiUtil.getEncodeParam(FeatureEntityName)}/hotids/${OpenApiUtil.getEncodeParam(NextSeqNumber)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectFeatureEntityHotIdsResponse>(await this.callApi(params, req, runtime), new GetProjectFeatureEntityHotIdsResponse({}));
  }

  async getProjectFeatureEntityHotIds(InstanceId: string, ProjectId: string, NextSeqNumber: string, FeatureEntityName: string): Promise<GetProjectFeatureEntityHotIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectFeatureEntityHotIdsWithOptions(InstanceId, ProjectId, NextSeqNumber, FeatureEntityName, headers, runtime);
  }

  async getProjectFeatureViewWithOptions(InstanceId: string, ProjectId: string, FeatureViewName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectFeatureViewResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProjectFeatureView",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/featureviews/${OpenApiUtil.getEncodeParam(FeatureViewName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectFeatureViewResponse>(await this.callApi(params, req, runtime), new GetProjectFeatureViewResponse({}));
  }

  async getProjectFeatureView(InstanceId: string, ProjectId: string, FeatureViewName: string): Promise<GetProjectFeatureViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectFeatureViewWithOptions(InstanceId, ProjectId, FeatureViewName, headers, runtime);
  }

  async getProjectModelFeatureWithOptions(InstanceId: string, ProjectId: string, ModelFeatureName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectModelFeatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProjectModelFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectModelFeatureResponse>(await this.callApi(params, req, runtime), new GetProjectModelFeatureResponse({}));
  }

  async getProjectModelFeature(InstanceId: string, ProjectId: string, ModelFeatureName: string): Promise<GetProjectModelFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectModelFeatureWithOptions(InstanceId, ProjectId, ModelFeatureName, headers, runtime);
  }

  async getServiceIdentityRoleWithOptions(RoleName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceIdentityRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetServiceIdentityRole",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/serviceidentityroles/${OpenApiUtil.getEncodeParam(RoleName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new GetServiceIdentityRoleResponse({}));
  }

  async getServiceIdentityRole(RoleName: string): Promise<GetServiceIdentityRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceIdentityRoleWithOptions(RoleName, headers, runtime);
  }

  async getTaskWithOptions(InstanceId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  async getTask(InstanceId: string, TaskId: string): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(InstanceId, TaskId, headers, runtime);
  }

  async listDatasourceTablesWithOptions(InstanceId: string, DatasourceId: string, request: ListDatasourceTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDatasourceTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDatasourceTables",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/datasources/${OpenApiUtil.getEncodeParam(DatasourceId)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDatasourceTablesResponse>(await this.callApi(params, req, runtime), new ListDatasourceTablesResponse({}));
  }

  async listDatasourceTables(InstanceId: string, DatasourceId: string, request: ListDatasourceTablesRequest): Promise<ListDatasourceTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasourceTablesWithOptions(InstanceId, DatasourceId, request, headers, runtime);
  }

  async listDatasourcesWithOptions(InstanceId: string, request: ListDatasourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDatasourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDatasources",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/datasources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDatasourcesResponse>(await this.callApi(params, req, runtime), new ListDatasourcesResponse({}));
  }

  async listDatasources(InstanceId: string, request: ListDatasourcesRequest): Promise<ListDatasourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasourcesWithOptions(InstanceId, request, headers, runtime);
  }

  async listFeatureEntitiesWithOptions(InstanceId: string, tmpReq: ListFeatureEntitiesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureEntitiesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListFeatureEntitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.featureEntityIds)) {
      request.featureEntityIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.featureEntityIds, "FeatureEntityIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.featureEntityIdsShrink)) {
      query["FeatureEntityIds"] = request.featureEntityIdsShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFeatureEntities",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureentities`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFeatureEntitiesResponse>(await this.callApi(params, req, runtime), new ListFeatureEntitiesResponse({}));
  }

  async listFeatureEntities(InstanceId: string, request: ListFeatureEntitiesRequest): Promise<ListFeatureEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureEntitiesWithOptions(InstanceId, request, headers, runtime);
  }

  async listFeatureViewFieldRelationshipsWithOptions(InstanceId: string, FeatureViewId: string, FieldName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureViewFieldRelationshipsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListFeatureViewFieldRelationships",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureviews/${OpenApiUtil.getEncodeParam(FeatureViewId)}/fields/${OpenApiUtil.getEncodeParam(FieldName)}/relationships`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFeatureViewFieldRelationshipsResponse>(await this.callApi(params, req, runtime), new ListFeatureViewFieldRelationshipsResponse({}));
  }

  async listFeatureViewFieldRelationships(InstanceId: string, FeatureViewId: string, FieldName: string): Promise<ListFeatureViewFieldRelationshipsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewFieldRelationshipsWithOptions(InstanceId, FeatureViewId, FieldName, headers, runtime);
  }

  async listFeatureViewRelationshipsWithOptions(InstanceId: string, FeatureViewId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureViewRelationshipsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListFeatureViewRelationships",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureviews/${OpenApiUtil.getEncodeParam(FeatureViewId)}/relationships`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFeatureViewRelationshipsResponse>(await this.callApi(params, req, runtime), new ListFeatureViewRelationshipsResponse({}));
  }

  async listFeatureViewRelationships(InstanceId: string, FeatureViewId: string): Promise<ListFeatureViewRelationshipsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewRelationshipsWithOptions(InstanceId, FeatureViewId, headers, runtime);
  }

  async listFeatureViewsWithOptions(InstanceId: string, tmpReq: ListFeatureViewsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureViewsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListFeatureViewsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.featureViewIds)) {
      request.featureViewIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.featureViewIds, "FeatureViewIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!Util.isUnset(request.featureViewIdsShrink)) {
      query["FeatureViewIds"] = request.featureViewIdsShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFeatureViews",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFeatureViewsResponse>(await this.callApi(params, req, runtime), new ListFeatureViewsResponse({}));
  }

  async listFeatureViews(InstanceId: string, request: ListFeatureViewsRequest): Promise<ListFeatureViewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewsWithOptions(InstanceId, request, headers, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
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
      action: "ListInstances",
      version: "2023-06-21",
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

  async listLabelTablesWithOptions(InstanceId: string, tmpReq: ListLabelTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLabelTablesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListLabelTablesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelTableIds)) {
      request.labelTableIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelTableIds, "LabelTableIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelTableIdsShrink)) {
      query["LabelTableIds"] = request.labelTableIdsShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLabelTables",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/labeltables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLabelTablesResponse>(await this.callApi(params, req, runtime), new ListLabelTablesResponse({}));
  }

  async listLabelTables(InstanceId: string, request: ListLabelTablesRequest): Promise<ListLabelTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLabelTablesWithOptions(InstanceId, request, headers, runtime);
  }

  async listModelFeatureAvailableFeaturesWithOptions(InstanceId: string, ModelFeatureId: string, request: ListModelFeatureAvailableFeaturesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListModelFeatureAvailableFeaturesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModelFeatureAvailableFeatures",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}/availablefeatures`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListModelFeatureAvailableFeaturesResponse>(await this.callApi(params, req, runtime), new ListModelFeatureAvailableFeaturesResponse({}));
  }

  async listModelFeatureAvailableFeatures(InstanceId: string, ModelFeatureId: string, request: ListModelFeatureAvailableFeaturesRequest): Promise<ListModelFeatureAvailableFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelFeatureAvailableFeaturesWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  async listModelFeaturesWithOptions(InstanceId: string, tmpReq: ListModelFeaturesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListModelFeaturesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListModelFeaturesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.modelFeatureIds)) {
      request.modelFeatureIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelFeatureIds, "ModelFeatureIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelFeatureIdsShrink)) {
      query["ModelFeatureIds"] = request.modelFeatureIdsShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModelFeatures",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListModelFeaturesResponse>(await this.callApi(params, req, runtime), new ListModelFeaturesResponse({}));
  }

  async listModelFeatures(InstanceId: string, request: ListModelFeaturesRequest): Promise<ListModelFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelFeaturesWithOptions(InstanceId, request, headers, runtime);
  }

  async listProjectFeatureViewOwnersWithOptions(InstanceId: string, ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectFeatureViewOwnersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListProjectFeatureViewOwners",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/featureviewowners`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectFeatureViewOwnersResponse>(await this.callApi(params, req, runtime), new ListProjectFeatureViewOwnersResponse({}));
  }

  async listProjectFeatureViewOwners(InstanceId: string, ProjectId: string): Promise<ListProjectFeatureViewOwnersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectFeatureViewOwnersWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  async listProjectFeatureViewTagsWithOptions(InstanceId: string, ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectFeatureViewTagsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListProjectFeatureViewTags",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/featureviewtags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectFeatureViewTagsResponse>(await this.callApi(params, req, runtime), new ListProjectFeatureViewTagsResponse({}));
  }

  async listProjectFeatureViewTags(InstanceId: string, ProjectId: string): Promise<ListProjectFeatureViewTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectFeatureViewTagsWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  async listProjectFeatureViewsWithOptions(InstanceId: string, ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectFeatureViewsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListProjectFeatureViews",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/featureviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectFeatureViewsResponse>(await this.callApi(params, req, runtime), new ListProjectFeatureViewsResponse({}));
  }

  async listProjectFeatureViews(InstanceId: string, ProjectId: string): Promise<ListProjectFeatureViewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectFeatureViewsWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  async listProjectsWithOptions(InstanceId: string, tmpReq: ListProjectsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.projectIds)) {
      request.projectIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.projectIds, "ProjectIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectIdsShrink)) {
      query["ProjectIds"] = request.projectIdsShrink;
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
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(InstanceId: string, request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(InstanceId, request, headers, runtime);
  }

  async listTaskLogsWithOptions(InstanceId: string, TaskId: string, request: ListTaskLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTaskLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskLogs",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/tasks/${OpenApiUtil.getEncodeParam(TaskId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTaskLogsResponse>(await this.callApi(params, req, runtime), new ListTaskLogsResponse({}));
  }

  async listTaskLogs(InstanceId: string, TaskId: string, request: ListTaskLogsRequest): Promise<ListTaskLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaskLogsWithOptions(InstanceId, TaskId, request, headers, runtime);
  }

  async listTasksWithOptions(InstanceId: string, tmpReq: ListTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskIdsShrink)) {
      query["TaskIds"] = request.taskIdsShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  async listTasks(InstanceId: string, request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(InstanceId, request, headers, runtime);
  }

  async publishFeatureViewTableWithOptions(InstanceId: string, FeatureViewId: string, request: PublishFeatureViewTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishFeatureViewTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.eventTime)) {
      body["EventTime"] = request.eventTime;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.offlineToOnline)) {
      body["OfflineToOnline"] = request.offlineToOnline;
    }

    if (!Util.isUnset(request.partitions)) {
      body["Partitions"] = request.partitions;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishFeatureViewTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureviews/${OpenApiUtil.getEncodeParam(FeatureViewId)}/action/publishtable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishFeatureViewTableResponse>(await this.callApi(params, req, runtime), new PublishFeatureViewTableResponse({}));
  }

  async publishFeatureViewTable(InstanceId: string, FeatureViewId: string, request: PublishFeatureViewTableRequest): Promise<PublishFeatureViewTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishFeatureViewTableWithOptions(InstanceId, FeatureViewId, request, headers, runtime);
  }

  async updateDatasourceWithOptions(InstanceId: string, DatasourceId: string, request: UpdateDatasourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDatasourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/datasources/${OpenApiUtil.getEncodeParam(DatasourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDatasourceResponse>(await this.callApi(params, req, runtime), new UpdateDatasourceResponse({}));
  }

  async updateDatasource(InstanceId: string, DatasourceId: string, request: UpdateDatasourceRequest): Promise<UpdateDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasourceWithOptions(InstanceId, DatasourceId, request, headers, runtime);
  }

  async updateLabelTableWithOptions(InstanceId: string, LabelTableId: string, request: UpdateLabelTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLabelTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
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
      action: "UpdateLabelTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/labeltables/${OpenApiUtil.getEncodeParam(LabelTableId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateLabelTableResponse>(await this.callApi(params, req, runtime), new UpdateLabelTableResponse({}));
  }

  async updateLabelTable(InstanceId: string, LabelTableId: string, request: UpdateLabelTableRequest): Promise<UpdateLabelTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLabelTableWithOptions(InstanceId, LabelTableId, request, headers, runtime);
  }

  async updateModelFeatureWithOptions(InstanceId: string, ModelFeatureId: string, request: UpdateModelFeatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateModelFeatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.features)) {
      body["Features"] = request.features;
    }

    if (!Util.isUnset(request.labelTableId)) {
      body["LabelTableId"] = request.labelTableId;
    }

    if (!Util.isUnset(request.sequenceFeatureViewIds)) {
      body["SequenceFeatureViewIds"] = request.sequenceFeatureViewIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateModelFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateModelFeatureResponse>(await this.callApi(params, req, runtime), new UpdateModelFeatureResponse({}));
  }

  async updateModelFeature(InstanceId: string, ModelFeatureId: string, request: UpdateModelFeatureRequest): Promise<UpdateModelFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelFeatureWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  async updateModelFeatureFGFeatureWithOptions(InstanceId: string, ModelFeatureId: string, request: UpdateModelFeatureFGFeatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateModelFeatureFGFeatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lookupFeatures)) {
      body["LookupFeatures"] = request.lookupFeatures;
    }

    if (!Util.isUnset(request.rawFeatures)) {
      body["RawFeatures"] = request.rawFeatures;
    }

    if (!Util.isUnset(request.reserves)) {
      body["Reserves"] = request.reserves;
    }

    if (!Util.isUnset(request.sequenceFeatures)) {
      body["SequenceFeatures"] = request.sequenceFeatures;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateModelFeatureFGFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}/fgfeature`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateModelFeatureFGFeatureResponse>(await this.callApi(params, req, runtime), new UpdateModelFeatureFGFeatureResponse({}));
  }

  async updateModelFeatureFGFeature(InstanceId: string, ModelFeatureId: string, request: UpdateModelFeatureFGFeatureRequest): Promise<UpdateModelFeatureFGFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelFeatureFGFeatureWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  async updateModelFeatureFGInfoWithOptions(InstanceId: string, ModelFeatureId: string, request: UpdateModelFeatureFGInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateModelFeatureFGInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateModelFeatureFGInfo",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/modelfeatures/${OpenApiUtil.getEncodeParam(ModelFeatureId)}/fginfo`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateModelFeatureFGInfoResponse>(await this.callApi(params, req, runtime), new UpdateModelFeatureFGInfoResponse({}));
  }

  async updateModelFeatureFGInfo(InstanceId: string, ModelFeatureId: string, request: UpdateModelFeatureFGInfoRequest): Promise<UpdateModelFeatureFGInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelFeatureFGInfoWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  async updateProjectWithOptions(InstanceId: string, ProjectId: string, request: UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
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
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(InstanceId: string, ProjectId: string, request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(InstanceId, ProjectId, request, headers, runtime);
  }

  async writeFeatureViewTableWithOptions(InstanceId: string, FeatureViewId: string, request: WriteFeatureViewTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<WriteFeatureViewTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.partitions)) {
      body["Partitions"] = request.partitions;
    }

    if (!Util.isUnset(request.urlDatasource)) {
      body["UrlDatasource"] = request.urlDatasource;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "WriteFeatureViewTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureviews/${OpenApiUtil.getEncodeParam(FeatureViewId)}/action/writetable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<WriteFeatureViewTableResponse>(await this.callApi(params, req, runtime), new WriteFeatureViewTableResponse({}));
  }

  async writeFeatureViewTable(InstanceId: string, FeatureViewId: string, request: WriteFeatureViewTableRequest): Promise<WriteFeatureViewTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.writeFeatureViewTableWithOptions(InstanceId, FeatureViewId, request, headers, runtime);
  }

  async writeProjectFeatureEntityHotIdsWithOptions(InstanceId: string, ProjectId: string, FeatureEntityName: string, request: WriteProjectFeatureEntityHotIdsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<WriteProjectFeatureEntityHotIdsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotIds)) {
      body["HotIds"] = request.hotIds;
    }

    if (!Util.isUnset(request.version)) {
      body["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "WriteProjectFeatureEntityHotIds",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/projects/${OpenApiUtil.getEncodeParam(ProjectId)}/featureentities/${OpenApiUtil.getEncodeParam(FeatureEntityName)}/action/writehotids`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<WriteProjectFeatureEntityHotIdsResponse>(await this.callApi(params, req, runtime), new WriteProjectFeatureEntityHotIdsResponse({}));
  }

  async writeProjectFeatureEntityHotIds(InstanceId: string, ProjectId: string, FeatureEntityName: string, request: WriteProjectFeatureEntityHotIdsRequest): Promise<WriteProjectFeatureEntityHotIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.writeProjectFeatureEntityHotIdsWithOptions(InstanceId, ProjectId, FeatureEntityName, request, headers, runtime);
  }

}
