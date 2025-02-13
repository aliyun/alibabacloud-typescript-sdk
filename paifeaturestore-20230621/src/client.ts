// This file is auto-generated, don't edit it
/**
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
  useMock?: boolean;
  static names(): { [key: string]: string } {
    return {
      partitions: 'Partitions',
      eventTime: 'EventTime',
      equal: 'Equal',
      useMock: 'UseMock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': FeatureViewConfigValuePartitionsValue },
      eventTime: 'string',
      equal: 'boolean',
      useMock: 'boolean',
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

export class CheckInstanceDatasourceRequest extends $tea.Model {
  /**
   * @example
   * {"address": ""}
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * igraph1
   */
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
  /**
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
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
  /**
   * @example
   * {"address": ""}
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * datasource1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * igraph_instance1
   */
  uri?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234
   */
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
  /**
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @example
   * 1C5B1511-8A5B-59C3-90AF-513F9210E882
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
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
  /**
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @example
   * 0C89F5E1-7F24-5EEC-9F05-508A39278CC8
   */
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
  /**
   * @example
   * {"save_original_field":true}
   */
  config?: string;
  /**
   * @example
   * 4
   */
  featureEntityId?: string;
  fields?: CreateFeatureViewRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FeatureView1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * 5
   */
  registerDatasourceId?: string;
  /**
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  syncOnlineTable?: boolean;
  /**
   * @example
   * 90
   */
  TTL?: number;
  tags?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Batch
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  writeMethod?: string;
  writeToFeatureDB?: boolean;
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
      writeToFeatureDB: 'WriteToFeatureDB',
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
      writeToFeatureDB: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureViewResponseBody extends $tea.Model {
  /**
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @example
   * 0C89F5E1-7F24-5EEC-9F05-508A39278CC8
   */
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
  /**
   * @example
   * Basic
   */
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
  /**
   * @example
   * InstanceAlreadyExistsErrorProblem
   */
  code?: string;
  /**
   * @example
   * featureStore-cn-7mz2xfu****
   */
  instanceId?: string;
  /**
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: CreateLabelTableRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rec_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
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
  /**
   * @example
   * 1
   */
  labelTableId?: string;
  /**
   * @example
   * 0FA90B3B-F30A-5C9D-A9FD-8114F8868062
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  features?: CreateModelFeatureRequestFeatures[];
  /**
   * @example
   * 0
   */
  labelPriorityLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  labelTableId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * model_feature_1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: string;
  sequenceFeatureViewIds?: string[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      labelPriorityLevel: 'LabelPriorityLevel',
      labelTableId: 'LabelTableId',
      name: 'Name',
      projectId: 'ProjectId',
      sequenceFeatureViewIds: 'SequenceFeatureViewIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': CreateModelFeatureRequestFeatures },
      labelPriorityLevel: 'number',
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
  /**
   * @example
   * 3
   */
  modelFeatureId?: string;
  /**
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
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

export class CreateProjectRequest extends $tea.Model {
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
   * project1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  offlineDatasourceId?: string;
  /**
   * @example
   * 90
   */
  offlineLifeCycle?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  onlineDatasourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 324
   */
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
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * 977ADE3A-D69D-58AD-8323-96E2FB898E99
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AliyunServiceRoleForFeatureStore
   */
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
  /**
   * @example
   * ServiceLinkedRoleAlreadyExistsErrorProblem
   */
  code?: string;
  /**
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
  /**
   * @example
   * AliyunServiceRoleForFeatureStore
   */
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
  /**
   * @example
   * E2E1575F-29D1-5579-B649-B7883A793562
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
  /**
   * @example
   * E23EFF09-58AA-5420-934F-8453AE01548D
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
  /**
   * @example
   * BF349686-C932-55B5-9B31-DAFA395C0E06
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
  /**
   * @example
   * FFD39C0F-DD8D-51B2-864E-2842206DB0E8
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
  /**
   * @example
   * 6B662A64-E4BF-56F8-BF5F-4C63F34EC0A8
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
  /**
   * @example
   * 0DA35264-0877-5852-8971-7735B547C969
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

export class ExportModelFeatureTrainingSetTableRequest extends $tea.Model {
  featureViewConfig?: { [key: string]: FeatureViewConfigValue };
  labelInputConfig?: ExportModelFeatureTrainingSetTableRequestLabelInputConfig;
  realTimeIterateInterval?: number;
  realTimePartitionCountValue?: number;
  trainingSetConfig?: ExportModelFeatureTrainingSetTableRequestTrainingSetConfig;
  static names(): { [key: string]: string } {
    return {
      featureViewConfig: 'FeatureViewConfig',
      labelInputConfig: 'LabelInputConfig',
      realTimeIterateInterval: 'RealTimeIterateInterval',
      realTimePartitionCountValue: 'RealTimePartitionCountValue',
      trainingSetConfig: 'TrainingSetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewConfig: { 'type': 'map', 'keyType': 'string', 'valueType': FeatureViewConfigValue },
      labelInputConfig: ExportModelFeatureTrainingSetTableRequestLabelInputConfig,
      realTimeIterateInterval: 'number',
      realTimePartitionCountValue: 'number',
      trainingSetConfig: ExportModelFeatureTrainingSetTableRequestTrainingSetConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetTableResponseBody extends $tea.Model {
  /**
   * @example
   * 0FBBE454-9BD1-5D8F-9129-D14DB7FAFE0B
   */
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
  /**
   * @example
   * {"address": ""}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * datasource1
   */
  name?: string;
  /**
   * @example
   * AD7D9E95-BD31-53F2-B710-6C01866FCB05
   */
  requestId?: string;
  /**
   * @example
   * Hologres
   */
  type?: string;
  /**
   * @example
   * igraph_instance1
   */
  uri?: string;
  /**
   * @example
   * 32244
   */
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
  /**
   * @example
   * D7B2F8C4-49C7-5CFA-8075-9D715A114873
   */
  requestId?: string;
  /**
   * @example
   * table1
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
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @example
   * 123456789*****
   */
  owner?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @example
   * E23EFF09-58AA-5420-934F-8453AE01548D
   */
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
  /**
   * @example
   * {"save_original_field":true}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @example
   * featureEntity1
   */
  featureEntityName?: string;
  fields?: GetFeatureViewResponseBodyFields[];
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
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtSyncTime?: string;
  /**
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @example
   * {
   * 	"mode": "overwrite",
   * 	"partitions": {
   * 		"ds": {
   * 			"value": "20230820"
   * 		}
   * 	},
   * 	"event_time": "",
   * 	"config": {},
   * 	"offline_to_online": true
   * }
   */
  lastSyncConfig?: string;
  /**
   * @example
   * item_table_mock_1
   */
  mockTableName?: string;
  /**
   * @example
   * featureView1
   */
  name?: string;
  /**
   * @example
   * 12321421412****
   */
  owner?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
  projectName?: string;
  /**
   * @example
   * from feature_store_py.fs_client import FeatureStoreClient\nimport datetime\nfrom feature_store_py.fs_datasource import MaxComputeDataSource\nimport sys\n\ncur_day = args[\"dt\"]\nprint(\"cur_day = \", cur_day)\n\naccess_key_id = o.account.access_id\naccess_key_secret = o.account.secret_access_key\nfs = FeatureStoreClient(access_key_id=access_key_id, access_key_secret=access_key_secret, region=\"cn-beijing\")\ncur_project_name = \"p1\"\nproject = fs.get_project(cur_project_name)\n\nfeature_view_name = \"user_fea\"\nbatch_feature_view = project.get_feature_view(feature_view_name)\ntask = batch_feature_view.publish_table(partitions={\"ds\":cur_day}, mode=\"Overwrite\")\ntask.wait()\ntask.print_summary()\n
   */
  publishTableScript?: string;
  /**
   * @example
   * 4
   */
  registerDatasourceId?: string;
  /**
   * @example
   * datasource1
   */
  registerDatasourceName?: string;
  /**
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @example
   * 72F15A8A-5A28-5B18-A0DE-0EABD7D3245A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  syncOnlineTable?: boolean;
  /**
   * @example
   * 90
   */
  TTL?: number;
  tags?: string[];
  /**
   * @example
   * Batch
   */
  type?: string;
  /**
   * @example
   * custom
   */
  writeMethod?: string;
  writeToFeatureDB?: boolean;
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
      mockTableName: 'MockTableName',
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
      writeToFeatureDB: 'WriteToFeatureDB',
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
      mockTableName: 'string',
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
      writeToFeatureDB: 'boolean',
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
  featureDBInstanceInfo?: GetInstanceResponseBodyFeatureDBInstanceInfo;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 0.8
   */
  progress?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1C5B1511-8A5B-59C3-90AF-513F9210E882
   */
  requestId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureDBInstanceInfo: 'FeatureDBInstanceInfo',
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
      featureDBInstanceInfo: GetInstanceResponseBodyFeatureDBInstanceInfo,
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
  /**
   * @example
   * 1
   */
  datasourceId?: string;
  /**
   * @example
   * datasource1
   */
  datasourceName?: string;
  fields?: GetLabelTableResponseBodyFields[];
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
   * label_table1
   */
  name?: string;
  /**
   * @example
   * 12321312*****
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
  projectName?: string;
  relatedModelFeatures?: string[];
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
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
  /**
   * @example
   * from feature_store_py.fs_client import FeatureStoreClient\nfrom feature_store_py.fs_project import FeatureStoreProject\nfrom feature_store_py.fs_datasource import LabelInput, MaxComputeDataSource, TrainingSetOutput\nfrom feature_store_py.fs_features import FeatureSelector\nfrom feature_store_py.fs_config import LabelInputConfig, PartitionConfig, FeatureViewConfig\nfrom feature_store_py.fs_config import TrainSetOutputConfig, EASDeployConfig\nimport datetime\nimport sys\n\ncur_day = args[\"dt\"]\nprint(\"cur_day = \", cur_day)\noffset = datetime.timedelta(days=-1)\npre_day = (datetime.datetime.strptime(cur_day, \"%Y%m%d\") + offset).strftime(\"%Y%m%d\")\nprint(\"pre_day = \", pre_day)\n\n\naccess_key_id = o.account.access_id\naccess_key_secret = o.account.secret_access_key\nfs = FeatureStoreClient(access_key_id=access_key_id, access_key_secret=access_key_secret, region=\"cn-beijing\")\ncur_project_name = \"p1\"\nproject = fs.get_project(cur_project_name)\n\nlabel_partitions = PartitionConfig(name = \"ds\", value = cur_day)\nlabel_input_config = LabelInputConfig(partition_config=label_partitions)\n\nfeature_view_1_partitions = PartitionConfig(name = \"ds\", value = pre_day)\nfeature_view_1_config = FeatureViewConfig(name = \"user_fea\",\npartition_config=feature_view_1_partitions)\n\nfeature_view_2_partitions = PartitionConfig(name = \"ds\", value = pre_day)\nfeature_view_2_config = FeatureViewConfig(name = \"seq_fea\",\npartition_config=feature_view_2_partitions)\n\nfeature_view_3_partitions = PartitionConfig(name = \"ds\", value = pre_day)\nfeature_view_3_config = FeatureViewConfig(name = \"item_fea\",\npartition_config=feature_view_3_partitions)\n\nfeature_view_config_list = [feature_view_1_config,feature_view_2_config,feature_view_3_config]\ntrain_set_partitions = PartitionConfig(name = \"ds\", value = cur_day)\ntrain_set_output_config = TrainSetOutputConfig(partition_config=train_set_partitions)\n\n\nmodel_name = \"rank_v1\"\ncur_model = project.get_model(model_name)\ntask = cur_model.export_train_set(label_input_config, feature_view_config_list, train_set_output_config)\ntask.wait()\nprint(\"task_summary = \", task.task_summary)\n
   */
  exportTrainingSetTableScript?: string;
  features?: GetModelFeatureResponseBodyFeatures[];
  /**
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 0
   */
  labelPriorityLevel?: number;
  /**
   * @example
   * 3
   */
  labelTableId?: string;
  /**
   * @example
   * label_table1
   */
  labelTableName?: string;
  /**
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @example
   * 1231243253****
   */
  owner?: string;
  /**
   * @example
   * 5
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
  projectName?: string;
  relations?: GetModelFeatureResponseBodyRelations;
  /**
   * @example
   * 0C89F5E1-7F24-5EEC-9F05-508A39278CC8
   */
  requestId?: string;
  /**
   * @example
   * table2
   */
  trainingSetFGTable?: string;
  /**
   * @example
   * table1
   */
  trainingSetTable?: string;
  static names(): { [key: string]: string } {
    return {
      exportTrainingSetTableScript: 'ExportTrainingSetTableScript',
      features: 'Features',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labelPriorityLevel: 'LabelPriorityLevel',
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
      labelPriorityLevel: 'number',
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
  /**
   * @example
   * E23EFF09-58AA-5420-934F-8453AE01548D
   */
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
  /**
   * @example
   * {"features": [{"feature_name": "item_id","feature_type": "id_feature","value_type": "String","expression": "item:item_id","default_value": "-1024","combiner": "mean","need_prefix": false},{"feature_name": "f1","feature_type": "lookup_feature","value_type": "Integer","map": "item:f1","key": "user:1","default_value": "0","combiner": "mean","need_prefix": false,"needDiscrete": false,"needWeighting": false,"needKey": false}],"reserves": ["f1"]}
   */
  content?: string;
  /**
   * @example
   * 6B662A64-E4BF-56F8-BF5F-4C63F34EC0A8
   */
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
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 10
   */
  featureEntityCount?: number;
  /**
   * @example
   * 10
   */
  featureViewCount?: number;
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
   * 5
   */
  modelCount?: number;
  /**
   * @example
   * project1
   */
  name?: string;
  /**
   * @example
   * 4
   */
  offlineDatasourceId?: string;
  /**
   * @example
   * datasource1
   */
  offlineDatasourceName?: string;
  /**
   * @example
   * MaxCompute
   */
  offlineDatasourceType?: string;
  /**
   * @example
   * 90
   */
  offlineLifecycle?: number;
  /**
   * @example
   * 5
   */
  onlineDatasourceId?: string;
  /**
   * @example
   * datasource2
   */
  onlineDatasourceName?: string;
  /**
   * @example
   * Hologres
   */
  onlineDatasourceType?: string;
  /**
   * @example
   * 1232132543543****
   */
  owner?: string;
  /**
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
   */
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
  /**
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
   * @example
   * 34245
   */
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

export class GetServiceIdentityRoleResponseBody extends $tea.Model {
  /**
   * @example
   * {
   * "Version": "1",
   * "Statement":[]
   * }
   */
  policy?: string;
  /**
   * @example
   * 6F629E92-F64D-502D-85AA-A9C54894CA3D
   */
  requestId?: string;
  /**
   * @example
   * AliyunServiceRoleForPaiFeatureStore
   */
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
  /**
   * @example
   * {
   * 	"mode": "overwrite",
   * 	"partitions": {
   * 		"dt": "20230820"
   * 	},
   * 	"event_time": "",
   * 	"config": {},
   * 	"offline_to_online": true
   * }
   */
  config?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtExecutedTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtFinishedTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 3
   */
  objectId?: string;
  /**
   * @example
   * ModelFeature
   */
  objectType?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
   * @example
   * DROP TABLE IF EXISTS public.fsxxx
   */
  runningConfig?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * OfflineToOnline
   */
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
  /**
   * @example
   * table1
   */
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
  /**
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
  tables?: string[];
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * datasource1
   */
  name?: string;
  /**
   * @example
   * Asc
   */
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
   * GmtModifiedTime
   */
  sortBy?: string;
  /**
   * @example
   * MaxCompute
   */
  type?: string;
  /**
   * @example
   * 234
   */
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
  /**
   * @example
   * 44933189-493B-5C43-A5C6-11EEC2A43520
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
  /**
   * @example
   * 1231432*****
   */
  owner?: string;
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
   * 3
   */
  projectId?: string;
  /**
   * @example
   * GmtModifiedTime
   */
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
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
  /**
   * @example
   * 1231432*****
   */
  owner?: string;
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
   * 3
   */
  projectId?: string;
  /**
   * @example
   * GmtModifiedTime
   */
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
  /**
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * BF349686-C932-55B5-9B31-DAFA395C0E06
   */
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

export class ListFeatureViewOnlineFeaturesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  joinIds?: string[];
  static names(): { [key: string]: string } {
    return {
      joinIds: 'JoinIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewOnlineFeaturesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  joinIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      joinIdsShrink: 'JoinIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewOnlineFeaturesResponseBody extends $tea.Model {
  onlineFeatures?: string[];
  /**
   * @example
   * BF349686-C932-55B5-9B31-DAFA395C0E06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineFeatures: 'OnlineFeatures',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineFeatures: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewOnlineFeaturesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFeatureViewOnlineFeaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFeatureViewOnlineFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewRelationshipsResponseBody extends $tea.Model {
  relationships?: ListFeatureViewRelationshipsResponseBodyRelationships[];
  /**
   * @example
   * 0FBBE454-9BD1-5D8F-9129-D14DB7FAFE0B
   */
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
  /**
   * @example
   * feature1
   */
  featureName?: string;
  featureViewIds?: string[];
  /**
   * @example
   * fv1
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
  /**
   * @example
   * 1232143243242****
   */
  owner?: string;
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
   * 3
   */
  projectId?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * tag1
   */
  tag?: string;
  /**
   * @example
   * Batch
   */
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
  /**
   * @example
   * feature1
   */
  featureName?: string;
  featureViewIdsShrink?: string;
  /**
   * @example
   * fv1
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
  /**
   * @example
   * 1232143243242****
   */
  owner?: string;
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
   * 3
   */
  projectId?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * tag1
   */
  tag?: string;
  /**
   * @example
   * Batch
   */
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
  /**
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * DESC
   */
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
  /**
   * @example
   * 2CA11923-2A3D-5E5A-8314-E699D2DD15DE
   */
  requestId?: string;
  /**
   * @example
   * 10
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
  /**
   * @example
   * label_table1
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 1231432432****
   */
  owner?: string;
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * project1
   */
  projectId?: string;
  /**
   * @example
   * GmtModifiedTime
   */
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
  /**
   * @example
   * label_table1
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 1231432432****
   */
  owner?: string;
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * project1
   */
  projectId?: string;
  /**
   * @example
   * GmtModifiedTime
   */
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
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 21
   */
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
  /**
   * @example
   * f1
   */
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
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @example
   * ED4DEA2F-F216-57F0-AE28-08D791233280
   */
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
  /**
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 12323143****
   */
  owner?: string;
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
   * 4
   */
  projectId?: string;
  /**
   * @example
   * DESC
   */
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
  /**
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 12323143****
   */
  owner?: string;
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
   * 4
   */
  projectId?: string;
  /**
   * @example
   * DESC
   */
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
  /**
   * @example
   * 2CA11923-2A3D-5E5A-8314-E699D2DD15DE
   */
  requestId?: string;
  /**
   * @example
   * 4
   */
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

export class ListProjectFeatureViewsResponseBody extends $tea.Model {
  featureViews?: ListProjectFeatureViewsResponseBodyFeatureViews[];
  /**
   * @example
   * AE2AF33E-0C0D-51A8-B89B-C5F1DF261D92
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * fs1
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 134324352****
   */
  owner?: string;
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
  projectIds?: string[];
  /**
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  /**
   * @example
   * 234
   */
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
  /**
   * @example
   * fs1
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 134324352****
   */
  owner?: string;
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
  projectIdsShrink?: string;
  /**
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  /**
   * @example
   * 234
   */
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
  /**
   * @example
   * 44933189-493B-5C43-A5C6-11EEC2A43520
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * 72F15A8A-5A28-5B18-A0DE-0EABD7D3245A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * 4
   */
  objectId?: string;
  /**
   * @example
   * ModelFeature
   */
  objectType?: string;
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
   * 4
   */
  projectId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  taskIds?: string[];
  /**
   * @example
   * OfflineToOnline
   */
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
  /**
   * @example
   * 4
   */
  objectId?: string;
  /**
   * @example
   * ModelFeature
   */
  objectType?: string;
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
   * 4
   */
  projectId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  taskIdsShrink?: string;
  /**
   * @example
   * OfflineToOnline
   */
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
  /**
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
   */
  requestId?: string;
  tasks?: ListTasksResponseBodyTasks[];
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  eventTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Overwrite
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
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
  /**
   * @example
   * 627B5776-4D06-5A49-8A04-508AA39653F4
   */
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
  /**
   * @example
   * {"address": ""}
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * datasource1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * igraph_instance1
   */
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
  /**
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
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
  /**
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: UpdateLabelTableRequestFields[];
  /**
   * @example
   * rec_test
   */
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
  /**
   * @example
   * 0
   */
  labelPriorityLevel?: number;
  /**
   * @example
   * 4
   */
  labelTableId?: string;
  sequenceFeatureViewIds?: string[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      labelPriorityLevel: 'LabelPriorityLevel',
      labelTableId: 'LabelTableId',
      sequenceFeatureViewIds: 'SequenceFeatureViewIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': UpdateModelFeatureRequestFeatures },
      labelPriorityLevel: 'number',
      labelTableId: 'string',
      sequenceFeatureViewIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelFeatureResponseBody extends $tea.Model {
  /**
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
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
  /**
   * @example
   * 7D497816-607C-5B67-97B1-61354B6ACB2B
   */
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

export class UpdateProjectRequest extends $tea.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * project1
   */
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
  /**
   * @example
   * 2150233F-A1F7-54D2-B5B5-8A70567549BD
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Merge
   */
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
  /**
   * @example
   * 0C89F5E1-7F24-5EEC-9F05-508A39278CC8
   */
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

export class CreateFeatureViewRequestFields extends $tea.Model {
  attributes?: string[];
  /**
   * @example
   * age
   */
  name?: string;
  /**
   * @example
   * INT32
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lat
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INT32
   */
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
  /**
   * @example
   * userid
   */
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  featureViewId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_id
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STRING
   */
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

export class ExportModelFeatureTrainingSetTableRequestLabelInputConfig extends $tea.Model {
  /**
   * @example
   * 2022-07-02 00:00:00
   */
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
  /**
   * @example
   * field1
   */
  name?: string;
  /**
   * @example
   * INT32
   */
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
  /**
   * @example
   * user
   */
  name?: string;
  /**
   * @example
   * int
   */
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

export class GetInstanceResponseBodyFeatureDBInstanceInfo extends $tea.Model {
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

export class GetLabelTableResponseBodyFields extends $tea.Model {
  attributes?: string[];
  /**
   * @example
   * field1
   */
  name?: string;
  /**
   * @example
   * INT32
   */
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
  /**
   * @example
   * feature2
   */
  aliasName?: string;
  /**
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @example
   * feature_view_1
   */
  featureViewName?: string;
  /**
   * @example
   * feature1
   */
  name?: string;
  /**
   * @example
   * INT32
   */
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
  /**
   * @example
   * FeatureEntity
   */
  domainType?: string;
  /**
   * @remarks
   * Domain ID。
   * 
   * @example
   * 3
   */
  id?: string;
  /**
   * @example
   * feature_entity_1
   */
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
  /**
   * @example
   * model_feature_2
   */
  from?: string;
  /**
   * @example
   * user_id
   */
  link?: string;
  /**
   * @example
   * feature_entity_3
   */
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
  /**
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @example
   * Item
   */
  keyFeatureDomain?: string;
  /**
   * @example
   * 1
   */
  keyFeatureName?: string;
  /**
   * @example
   * User
   */
  mapFeatureDomain?: string;
  /**
   * @example
   * item_id
   */
  mapFeatureName?: string;
  /**
   * @example
   * STRING
   */
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
  /**
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @example
   * IdFeature
   */
  featureType?: string;
  /**
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @example
   * STRING
   */
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
  /**
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @example
   * IdFeature
   */
  featureType?: string;
  /**
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @example
   * STRING
   */
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
  /**
   * @example
   * #
   */
  attributeDelim?: string;
  /**
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @example
   * ;
   */
  sequenceDelim?: string;
  /**
   * @example
   * 50
   */
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

export class ListDatasourcesResponseBodyDatasources extends $tea.Model {
  /**
   * @example
   * {"address": ""}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  datasourceId?: string;
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
   * datasource1
   */
  name?: string;
  /**
   * @example
   * Hologres
   */
  type?: string;
  /**
   * @example
   * igraph_instance1
   */
  uri?: string;
  /**
   * @example
   * 32324
   */
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
  /**
   * @example
   * 3
   */
  featureEntityId?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @example
   * 123456789****
   */
  owner?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * project_1
   */
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
  /**
   * @example
   * 3
   */
  modelId?: string;
  /**
   * @example
   * dbmtl
   */
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
  /**
   * @example
   * featureView1
   */
  featureName?: string;
  models?: ListFeatureViewFieldRelationshipsResponseBodyRelationshipsModels[];
  /**
   * @example
   * table2
   */
  offlineTableName?: string;
  /**
   * @example
   * table1
   */
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
  /**
   * @example
   * 3
   */
  modelId?: string;
  /**
   * @example
   * dbmtl
   */
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
  /**
   * @example
   * fv1
   */
  featureViewName?: string;
  models?: ListFeatureViewRelationshipsResponseBodyRelationshipsModels[];
  /**
   * @example
   * project1
   */
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
  /**
   * @example
   * featureEntity1
   */
  featureEntityName?: string;
  /**
   * @example
   * 3
   */
  featureViewId?: string;
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
   * featureView1
   */
  name?: string;
  /**
   * @example
   * 12321421412****
   */
  owner?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
  projectName?: string;
  /**
   * @example
   * 4
   */
  registerDatasourceId?: string;
  /**
   * @example
   * datasource1
   */
  registerDatasourceName?: string;
  /**
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @example
   * 90
   */
  TTL?: number;
  /**
   * @example
   * Batch
   */
  type?: string;
  writeToFeatureDB?: boolean;
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
      writeToFeatureDB: 'WriteToFeatureDB',
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
      writeToFeatureDB: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesFeatureDBInstanceInfo extends $tea.Model {
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

export class ListInstancesResponseBodyInstances extends $tea.Model {
  featureDBInstanceInfo?: ListInstancesResponseBodyInstancesFeatureDBInstanceInfo;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * featureStore-cn-7mz2xfu****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @example
   * Basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureDBInstanceInfo: 'FeatureDBInstanceInfo',
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
      featureDBInstanceInfo: ListInstancesResponseBodyInstancesFeatureDBInstanceInfo,
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
  /**
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @example
   * datasource1
   */
  datasourceName?: string;
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
  labelTableId?: string;
  /**
   * @example
   * label_table1
   */
  name?: string;
  /**
   * @example
   * 123214213214
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
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
  /**
   * @example
   * age
   */
  name?: string;
  /**
   * @example
   * user_fea
   */
  sourceName?: string;
  /**
   * @example
   * FeatureView
   */
  sourceType?: string;
  /**
   * @example
   * STRING
   */
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
  /**
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T14:46:22.227+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * label_table_1
   */
  labelTableName?: string;
  /**
   * @example
   * 3
   */
  modelFeatureId?: string;
  /**
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @example
   * 1231243253****
   */
  owner?: string;
  /**
   * @example
   * 5
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
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
  /**
   * @example
   * f1
   */
  name?: string;
  /**
   * @example
   * INT32
   */
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
  /**
   * @example
   * 3
   */
  featureViewId?: string;
  features?: ListProjectFeatureViewsResponseBodyFeatureViewsFeatures[];
  /**
   * @example
   * feature_view1
   */
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
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 10
   */
  featureEntityCount?: number;
  /**
   * @example
   * 10
   */
  featureViewCount?: number;
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
   * 5
   */
  modelCount?: number;
  /**
   * @example
   * project1
   */
  name?: string;
  /**
   * @example
   * 4
   */
  offlineDatasourceId?: string;
  /**
   * @example
   * datasource1
   */
  offlineDatasourceName?: string;
  /**
   * @example
   * MaxCompute
   */
  offlineDatasourceType?: string;
  /**
   * @example
   * 10
   */
  offlineLifecycle?: number;
  /**
   * @example
   * 5
   */
  onlineDatasourceId?: string;
  /**
   * @example
   * datasource2
   */
  onlineDatasourceName?: string;
  /**
   * @example
   * Hologres
   */
  onlineDatasourceType?: string;
  /**
   * @example
   * 1232132543543****
   */
  owner?: string;
  /**
   * @example
   * 3
   */
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
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtExecutedTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtFinishedTime?: string;
  /**
   * @example
   * 5
   */
  objectId?: string;
  /**
   * @example
   * ModelFeature
   */
  objectType?: string;
  /**
   * @example
   * 4
   */
  projectId?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 4
   */
  taskId?: string;
  /**
   * @example
   * OfflineToOnline
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lat
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DOUBLE
   */
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
  /**
   * @example
   * sex
   */
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  featureViewId?: string;
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
   * STRING
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Item
   */
  keyFeatureDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  keyFeatureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * User
   */
  mapFeatureDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  mapFeatureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STRING
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * IdFeature
   */
  featureType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STRING
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RawFeature
   */
  featureType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STRING
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * #
   */
  attributeDelim?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ;
   */
  sequenceDelim?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50
   */
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
  /**
   * @example
   * ,
   */
  delimiter?: string;
  /**
   * @example
   * true
   */
  omitHeader?: boolean;
  /**
   * @example
   * xxx.xxx.com/file.csv
   */
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

  /**
   * 检测资源连接状态。
   * 
   * @param request - CheckInstanceDatasourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceDatasourceResponse
   */
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

  /**
   * 检测资源连接状态。
   * 
   * @param request - CheckInstanceDatasourceRequest
   * @returns CheckInstanceDatasourceResponse
   */
  async checkInstanceDatasource(InstanceId: string, request: CheckInstanceDatasourceRequest): Promise<CheckInstanceDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceDatasourceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建数据源。
   * 
   * @param request - CreateDatasourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasourceResponse
   */
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

  /**
   * 创建数据源。
   * 
   * @param request - CreateDatasourceRequest
   * @returns CreateDatasourceResponse
   */
  async createDatasource(InstanceId: string, request: CreateDatasourceRequest): Promise<CreateDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasourceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建特征实体
   * 
   * @param request - CreateFeatureEntityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFeatureEntityResponse
   */
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

  /**
   * 创建特征实体
   * 
   * @param request - CreateFeatureEntityRequest
   * @returns CreateFeatureEntityResponse
   */
  async createFeatureEntity(InstanceId: string, request: CreateFeatureEntityRequest): Promise<CreateFeatureEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureEntityWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建特征视图。
   * 
   * @param request - CreateFeatureViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFeatureViewResponse
   */
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

    if (!Util.isUnset(request.writeToFeatureDB)) {
      body["WriteToFeatureDB"] = request.writeToFeatureDB;
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

  /**
   * 创建特征视图。
   * 
   * @param request - CreateFeatureViewRequest
   * @returns CreateFeatureViewResponse
   */
  async createFeatureView(InstanceId: string, request: CreateFeatureViewRequest): Promise<CreateFeatureViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureViewWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建Feature Store实例。
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
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

  /**
   * 创建Feature Store实例。
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 创建label表
   * 
   * @param request - CreateLabelTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLabelTableResponse
   */
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

  /**
   * 创建label表
   * 
   * @param request - CreateLabelTableRequest
   * @returns CreateLabelTableResponse
   */
  async createLabelTable(InstanceId: string, request: CreateLabelTableRequest): Promise<CreateLabelTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLabelTableWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建模型特征。
   * 
   * @param request - CreateModelFeatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelFeatureResponse
   */
  async createModelFeatureWithOptions(InstanceId: string, request: CreateModelFeatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModelFeatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.features)) {
      body["Features"] = request.features;
    }

    if (!Util.isUnset(request.labelPriorityLevel)) {
      body["LabelPriorityLevel"] = request.labelPriorityLevel;
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

  /**
   * 创建模型特征。
   * 
   * @param request - CreateModelFeatureRequest
   * @returns CreateModelFeatureResponse
   */
  async createModelFeature(InstanceId: string, request: CreateModelFeatureRequest): Promise<CreateModelFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelFeatureWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建FeatureStore项目
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
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

  /**
   * 创建FeatureStore项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(InstanceId: string, request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建feature store服务账户角色
   * 
   * @param request - CreateServiceIdentityRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceIdentityRoleResponse
   */
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

  /**
   * 创建feature store服务账户角色
   * 
   * @param request - CreateServiceIdentityRoleRequest
   * @returns CreateServiceIdentityRoleResponse
   */
  async createServiceIdentityRole(request: CreateServiceIdentityRoleRequest): Promise<CreateServiceIdentityRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceIdentityRoleWithOptions(request, headers, runtime);
  }

  /**
   * 删除指定数据源。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasourceResponse
   */
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

  /**
   * 删除指定数据源。
   * @returns DeleteDatasourceResponse
   */
  async deleteDatasource(InstanceId: string, DatasourceId: string): Promise<DeleteDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasourceWithOptions(InstanceId, DatasourceId, headers, runtime);
  }

  /**
   * 删除指定特征实体
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFeatureEntityResponse
   */
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

  /**
   * 删除指定特征实体
   * @returns DeleteFeatureEntityResponse
   */
  async deleteFeatureEntity(InstanceId: string, FeatureEntityId: string): Promise<DeleteFeatureEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFeatureEntityWithOptions(InstanceId, FeatureEntityId, headers, runtime);
  }

  /**
   * 删除指定特征视图。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFeatureViewResponse
   */
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

  /**
   * 删除指定特征视图。
   * @returns DeleteFeatureViewResponse
   */
  async deleteFeatureView(InstanceId: string, FeatureViewId: string): Promise<DeleteFeatureViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFeatureViewWithOptions(InstanceId, FeatureViewId, headers, runtime);
  }

  /**
   * 删除label表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLabelTableResponse
   */
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

  /**
   * 删除label表
   * @returns DeleteLabelTableResponse
   */
  async deleteLabelTable(InstanceId: string, LabelTableId: string): Promise<DeleteLabelTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLabelTableWithOptions(InstanceId, LabelTableId, headers, runtime);
  }

  /**
   * 删除指定模型特征。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelFeatureResponse
   */
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

  /**
   * 删除指定模型特征。
   * @returns DeleteModelFeatureResponse
   */
  async deleteModelFeature(InstanceId: string, ModelFeatureId: string): Promise<DeleteModelFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelFeatureWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  /**
   * 删除指定Feature Store项目。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
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

  /**
   * 删除指定Feature Store项目。
   * @returns DeleteProjectResponse
   */
  async deleteProject(InstanceId: string, ProjectId: string): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  /**
   * 导出训练集表。
   * 
   * @param request - ExportModelFeatureTrainingSetTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportModelFeatureTrainingSetTableResponse
   */
  async exportModelFeatureTrainingSetTableWithOptions(InstanceId: string, ModelFeatureId: string, request: ExportModelFeatureTrainingSetTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExportModelFeatureTrainingSetTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.featureViewConfig)) {
      body["FeatureViewConfig"] = request.featureViewConfig;
    }

    if (!Util.isUnset(request.labelInputConfig)) {
      body["LabelInputConfig"] = request.labelInputConfig;
    }

    if (!Util.isUnset(request.realTimeIterateInterval)) {
      body["RealTimeIterateInterval"] = request.realTimeIterateInterval;
    }

    if (!Util.isUnset(request.realTimePartitionCountValue)) {
      body["RealTimePartitionCountValue"] = request.realTimePartitionCountValue;
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

  /**
   * 导出训练集表。
   * 
   * @param request - ExportModelFeatureTrainingSetTableRequest
   * @returns ExportModelFeatureTrainingSetTableResponse
   */
  async exportModelFeatureTrainingSetTable(InstanceId: string, ModelFeatureId: string, request: ExportModelFeatureTrainingSetTableRequest): Promise<ExportModelFeatureTrainingSetTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportModelFeatureTrainingSetTableWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  /**
   * 获取数据源详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasourceResponse
   */
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

  /**
   * 获取数据源详细信息。
   * @returns GetDatasourceResponse
   */
  async getDatasource(InstanceId: string, DatasourceId: string): Promise<GetDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasourceWithOptions(InstanceId, DatasourceId, headers, runtime);
  }

  /**
   * 获取数据源下指定表的详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasourceTableResponse
   */
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

  /**
   * 获取数据源下指定表的详细信息。
   * @returns GetDatasourceTableResponse
   */
  async getDatasourceTable(InstanceId: string, DatasourceId: string, TableName: string): Promise<GetDatasourceTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasourceTableWithOptions(InstanceId, DatasourceId, TableName, headers, runtime);
  }

  /**
   * 获取特征实体详细信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureEntityResponse
   */
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

  /**
   * 获取特征实体详细信息
   * @returns GetFeatureEntityResponse
   */
  async getFeatureEntity(InstanceId: string, FeatureEntityId: string): Promise<GetFeatureEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureEntityWithOptions(InstanceId, FeatureEntityId, headers, runtime);
  }

  /**
   * 获取特征视图详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureViewResponse
   */
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

  /**
   * 获取特征视图详细信息。
   * @returns GetFeatureViewResponse
   */
  async getFeatureView(InstanceId: string, FeatureViewId: string): Promise<GetFeatureViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureViewWithOptions(InstanceId, FeatureViewId, headers, runtime);
  }

  /**
   * 获取实例详细信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
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

  /**
   * 获取实例详细信息
   * @returns GetInstanceResponse
   */
  async getInstance(InstanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取Label表详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLabelTableResponse
   */
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

  /**
   * 获取Label表详细信息。
   * @returns GetLabelTableResponse
   */
  async getLabelTable(InstanceId: string, LabelTableId: string): Promise<GetLabelTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLabelTableWithOptions(InstanceId, LabelTableId, headers, runtime);
  }

  /**
   * 获取模型特征详情。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelFeatureResponse
   */
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

  /**
   * 获取模型特征详情。
   * @returns GetModelFeatureResponse
   */
  async getModelFeature(InstanceId: string, ModelFeatureId: string): Promise<GetModelFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelFeatureWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  /**
   * 获取模型特征的FG特征配置信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelFeatureFGFeatureResponse
   */
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

  /**
   * 获取模型特征的FG特征配置信息。
   * @returns GetModelFeatureFGFeatureResponse
   */
  async getModelFeatureFGFeature(InstanceId: string, ModelFeatureId: string): Promise<GetModelFeatureFGFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelFeatureFGFeatureWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  /**
   * 获取模型特征的fg.json文件配置信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelFeatureFGInfoResponse
   */
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

  /**
   * 获取模型特征的fg.json文件配置信息。
   * @returns GetModelFeatureFGInfoResponse
   */
  async getModelFeatureFGInfo(InstanceId: string, ModelFeatureId: string): Promise<GetModelFeatureFGInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelFeatureFGInfoWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  /**
   * 获取指定Feature Store项目详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
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

  /**
   * 获取指定Feature Store项目详细信息。
   * @returns GetProjectResponse
   */
  async getProject(InstanceId: string, ProjectId: string): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  /**
   * 获取项目下特征实体详细信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectFeatureEntityResponse
   */
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

  /**
   * 获取项目下特征实体详细信息
   * @returns GetProjectFeatureEntityResponse
   */
  async getProjectFeatureEntity(InstanceId: string, ProjectId: string, FeatureEntityName: string): Promise<GetProjectFeatureEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectFeatureEntityWithOptions(InstanceId, ProjectId, FeatureEntityName, headers, runtime);
  }

  /**
   * 获取feature store服务账户角色。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceIdentityRoleResponse
   */
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

  /**
   * 获取feature store服务账户角色。
   * @returns GetServiceIdentityRoleResponse
   */
  async getServiceIdentityRole(RoleName: string): Promise<GetServiceIdentityRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceIdentityRoleWithOptions(RoleName, headers, runtime);
  }

  /**
   * 获取任务详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
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

  /**
   * 获取任务详情
   * @returns GetTaskResponse
   */
  async getTask(InstanceId: string, TaskId: string): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(InstanceId, TaskId, headers, runtime);
  }

  /**
   * 获取数据源下所有表。
   * 
   * @param request - ListDatasourceTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasourceTablesResponse
   */
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

  /**
   * 获取数据源下所有表。
   * 
   * @param request - ListDatasourceTablesRequest
   * @returns ListDatasourceTablesResponse
   */
  async listDatasourceTables(InstanceId: string, DatasourceId: string, request: ListDatasourceTablesRequest): Promise<ListDatasourceTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasourceTablesWithOptions(InstanceId, DatasourceId, request, headers, runtime);
  }

  /**
   * 获取数据源列表。
   * 
   * @param request - ListDatasourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasourcesResponse
   */
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

  /**
   * 获取数据源列表。
   * 
   * @param request - ListDatasourcesRequest
   * @returns ListDatasourcesResponse
   */
  async listDatasources(InstanceId: string, request: ListDatasourcesRequest): Promise<ListDatasourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasourcesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建特征实体列表
   * 
   * @param tmpReq - ListFeatureEntitiesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureEntitiesResponse
   */
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

  /**
   * 创建特征实体列表
   * 
   * @param request - ListFeatureEntitiesRequest
   * @returns ListFeatureEntitiesResponse
   */
  async listFeatureEntities(InstanceId: string, request: ListFeatureEntitiesRequest): Promise<ListFeatureEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureEntitiesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取特征字段血缘关系。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureViewFieldRelationshipsResponse
   */
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

  /**
   * 获取特征字段血缘关系。
   * @returns ListFeatureViewFieldRelationshipsResponse
   */
  async listFeatureViewFieldRelationships(InstanceId: string, FeatureViewId: string, FieldName: string): Promise<ListFeatureViewFieldRelationshipsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewFieldRelationshipsWithOptions(InstanceId, FeatureViewId, FieldName, headers, runtime);
  }

  /**
   * 获取特征视图下的在线特征数据。
   * 
   * @param tmpReq - ListFeatureViewOnlineFeaturesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureViewOnlineFeaturesResponse
   */
  async listFeatureViewOnlineFeaturesWithOptions(InstanceId: string, FeatureViewId: string, tmpReq: ListFeatureViewOnlineFeaturesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFeatureViewOnlineFeaturesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListFeatureViewOnlineFeaturesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.joinIds)) {
      request.joinIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.joinIds, "JoinIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.joinIdsShrink)) {
      query["JoinIds"] = request.joinIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFeatureViewOnlineFeatures",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/featureviews/${OpenApiUtil.getEncodeParam(FeatureViewId)}/onlinefeatures`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFeatureViewOnlineFeaturesResponse>(await this.callApi(params, req, runtime), new ListFeatureViewOnlineFeaturesResponse({}));
  }

  /**
   * 获取特征视图下的在线特征数据。
   * 
   * @param request - ListFeatureViewOnlineFeaturesRequest
   * @returns ListFeatureViewOnlineFeaturesResponse
   */
  async listFeatureViewOnlineFeatures(InstanceId: string, FeatureViewId: string, request: ListFeatureViewOnlineFeaturesRequest): Promise<ListFeatureViewOnlineFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewOnlineFeaturesWithOptions(InstanceId, FeatureViewId, request, headers, runtime);
  }

  /**
   * 获取特征视图血缘关系。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureViewRelationshipsResponse
   */
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

  /**
   * 获取特征视图血缘关系。
   * @returns ListFeatureViewRelationshipsResponse
   */
  async listFeatureViewRelationships(InstanceId: string, FeatureViewId: string): Promise<ListFeatureViewRelationshipsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewRelationshipsWithOptions(InstanceId, FeatureViewId, headers, runtime);
  }

  /**
   * 获取特征视图列表。
   * 
   * @param tmpReq - ListFeatureViewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureViewsResponse
   */
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

  /**
   * 获取特征视图列表。
   * 
   * @param request - ListFeatureViewsRequest
   * @returns ListFeatureViewsResponse
   */
  async listFeatureViews(InstanceId: string, request: ListFeatureViewsRequest): Promise<ListFeatureViewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取Feature Store实例列表。
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
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

  /**
   * 获取Feature Store实例列表。
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取Label表列表。
   * 
   * @param tmpReq - ListLabelTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLabelTablesResponse
   */
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

  /**
   * 获取Label表列表。
   * 
   * @param request - ListLabelTablesRequest
   * @returns ListLabelTablesResponse
   */
  async listLabelTables(InstanceId: string, request: ListLabelTablesRequest): Promise<ListLabelTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLabelTablesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取注册FG特征时模型特征下可选的所有特征。
   * 
   * @param request - ListModelFeatureAvailableFeaturesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelFeatureAvailableFeaturesResponse
   */
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

  /**
   * 获取注册FG特征时模型特征下可选的所有特征。
   * 
   * @param request - ListModelFeatureAvailableFeaturesRequest
   * @returns ListModelFeatureAvailableFeaturesResponse
   */
  async listModelFeatureAvailableFeatures(InstanceId: string, ModelFeatureId: string, request: ListModelFeatureAvailableFeaturesRequest): Promise<ListModelFeatureAvailableFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelFeatureAvailableFeaturesWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  /**
   * 获取模型特征列表。
   * 
   * @param tmpReq - ListModelFeaturesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelFeaturesResponse
   */
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

  /**
   * 获取模型特征列表。
   * 
   * @param request - ListModelFeaturesRequest
   * @returns ListModelFeaturesResponse
   */
  async listModelFeatures(InstanceId: string, request: ListModelFeaturesRequest): Promise<ListModelFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelFeaturesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取项目下的所有特征视图、特征信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectFeatureViewsResponse
   */
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

  /**
   * 获取项目下的所有特征视图、特征信息。
   * @returns ListProjectFeatureViewsResponse
   */
  async listProjectFeatureViews(InstanceId: string, ProjectId: string): Promise<ListProjectFeatureViewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectFeatureViewsWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  /**
   * 获取Feature Store项目列表。
   * 
   * @param tmpReq - ListProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
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

  /**
   * 获取Feature Store项目列表。
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(InstanceId: string, request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取任务日志列表
   * 
   * @param request - ListTaskLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskLogsResponse
   */
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

  /**
   * 获取任务日志列表
   * 
   * @param request - ListTaskLogsRequest
   * @returns ListTaskLogsResponse
   */
  async listTaskLogs(InstanceId: string, TaskId: string, request: ListTaskLogsRequest): Promise<ListTaskLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaskLogsWithOptions(InstanceId, TaskId, request, headers, runtime);
  }

  /**
   * 获取任务列表
   * 
   * @param tmpReq - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
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

  /**
   * 获取任务列表
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(InstanceId: string, request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 将特征视图的离线数据发布/同步到线上。
   * 
   * @param request - PublishFeatureViewTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFeatureViewTableResponse
   */
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

  /**
   * 将特征视图的离线数据发布/同步到线上。
   * 
   * @param request - PublishFeatureViewTableRequest
   * @returns PublishFeatureViewTableResponse
   */
  async publishFeatureViewTable(InstanceId: string, FeatureViewId: string, request: PublishFeatureViewTableRequest): Promise<PublishFeatureViewTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishFeatureViewTableWithOptions(InstanceId, FeatureViewId, request, headers, runtime);
  }

  /**
   * 更新数据源信息。
   * 
   * @param request - UpdateDatasourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasourceResponse
   */
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

  /**
   * 更新数据源信息。
   * 
   * @param request - UpdateDatasourceRequest
   * @returns UpdateDatasourceResponse
   */
  async updateDatasource(InstanceId: string, DatasourceId: string, request: UpdateDatasourceRequest): Promise<UpdateDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasourceWithOptions(InstanceId, DatasourceId, request, headers, runtime);
  }

  /**
   * 更新label表。
   * 
   * @param request - UpdateLabelTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLabelTableResponse
   */
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

  /**
   * 更新label表。
   * 
   * @param request - UpdateLabelTableRequest
   * @returns UpdateLabelTableResponse
   */
  async updateLabelTable(InstanceId: string, LabelTableId: string, request: UpdateLabelTableRequest): Promise<UpdateLabelTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLabelTableWithOptions(InstanceId, LabelTableId, request, headers, runtime);
  }

  /**
   * 更新模型特征。
   * 
   * @param request - UpdateModelFeatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelFeatureResponse
   */
  async updateModelFeatureWithOptions(InstanceId: string, ModelFeatureId: string, request: UpdateModelFeatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateModelFeatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.features)) {
      body["Features"] = request.features;
    }

    if (!Util.isUnset(request.labelPriorityLevel)) {
      body["LabelPriorityLevel"] = request.labelPriorityLevel;
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

  /**
   * 更新模型特征。
   * 
   * @param request - UpdateModelFeatureRequest
   * @returns UpdateModelFeatureResponse
   */
  async updateModelFeature(InstanceId: string, ModelFeatureId: string, request: UpdateModelFeatureRequest): Promise<UpdateModelFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelFeatureWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  /**
   * 更新模型特征的FG特征配置信息。
   * 
   * @param request - UpdateModelFeatureFGFeatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelFeatureFGFeatureResponse
   */
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

  /**
   * 更新模型特征的FG特征配置信息。
   * 
   * @param request - UpdateModelFeatureFGFeatureRequest
   * @returns UpdateModelFeatureFGFeatureResponse
   */
  async updateModelFeatureFGFeature(InstanceId: string, ModelFeatureId: string, request: UpdateModelFeatureFGFeatureRequest): Promise<UpdateModelFeatureFGFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelFeatureFGFeatureWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  /**
   * 更新指定Feature Store项目信息。
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
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

  /**
   * 更新指定Feature Store项目信息。
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(InstanceId: string, ProjectId: string, request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(InstanceId, ProjectId, request, headers, runtime);
  }

  /**
   * 获取特征视图血缘关系。
   * 
   * @param request - WriteFeatureViewTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WriteFeatureViewTableResponse
   */
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

  /**
   * 获取特征视图血缘关系。
   * 
   * @param request - WriteFeatureViewTableRequest
   * @returns WriteFeatureViewTableResponse
   */
  async writeFeatureViewTable(InstanceId: string, FeatureViewId: string, request: WriteFeatureViewTableRequest): Promise<WriteFeatureViewTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.writeFeatureViewTableWithOptions(InstanceId, FeatureViewId, request, headers, runtime);
  }

}
