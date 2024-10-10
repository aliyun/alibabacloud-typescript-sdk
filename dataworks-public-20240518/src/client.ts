// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AbolishDeploymentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1606087c-9ac4-43f0-83a8-0b5ced21XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDeploymentResponseBody extends $tea.Model {
  /**
   * @example
   * 55D786C9-DD57-524D-884C-C5239278XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbolishDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AbolishDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDataSourceRequest extends $tea.Model {
  /**
   * @example
   * demo_holo_datasource
   */
  cloneDataSourceName?: string;
  /**
   * @example
   * 16036
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      cloneDataSourceName: 'CloneDataSourceName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneDataSourceName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * 19715
   */
  id?: number;
  /**
   * @example
   * FCD583B9-346B-5E75-82C1-4A7C192C48DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequest extends $tea.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceSettings?: CreateDIJobRequestDestinationDataSourceSettings[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  jobName?: string;
  jobSettings?: CreateDIJobRequestJobSettings;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSettings?: CreateDIJobRequestResourceSettings;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceSettings?: CreateDIJobRequestSourceDataSourceSettings[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMappings?: CreateDIJobRequestTableMappings[];
  transformationRules?: CreateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      sourceDataSourceSettings: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationDataSourceSettings: { 'type': 'array', 'itemType': CreateDIJobRequestDestinationDataSourceSettings },
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettings: CreateDIJobRequestJobSettings,
      migrationType: 'string',
      projectId: 'number',
      resourceSettings: CreateDIJobRequestResourceSettings,
      sourceDataSourceSettings: { 'type': 'array', 'itemType': CreateDIJobRequestSourceDataSourceSettings },
      sourceDataSourceType: 'string',
      tableMappings: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappings },
      transformationRules: { 'type': 'array', 'itemType': CreateDIJobRequestTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobShrinkRequest extends $tea.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  jobName?: string;
  jobSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMappingsShrink?: string;
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettingsShrink: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettingsShrink: 'JobSettings',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettingsShrink: 'ResourceSettings',
      sourceDataSourceSettingsShrink: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationDataSourceSettingsShrink: 'string',
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettingsShrink: 'string',
      migrationType: 'string',
      projectId: 'number',
      resourceSettingsShrink: 'string',
      sourceDataSourceSettingsShrink: 'string',
      sourceDataSourceType: 'string',
      tableMappingsShrink: 'string',
      transformationRulesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobResponseBody extends $tea.Model {
  /**
   * @example
   * 11792
   */
  DIJobId?: number;
  /**
   * @example
   * 4F6AB6B3-41FB-5EBB-AFB2-0C98D49DA2BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @example
   * this is a holo datasource
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo_holo_datasource
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      description: 'Description',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
      connectionPropertiesMode: 'string',
      description: 'string',
      name: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * 22130
   */
  id?: number;
  /**
   * @example
   * B62EC203-B39E-5DC1-B5B8-EB3C61707009
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceSharedRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 144544
   */
  dataSourceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @example
   * 1107550004253538
   */
  sharedUser?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 106560
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      envType: 'EnvType',
      sharedUser: 'SharedUser',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      envType: 'string',
      sharedUser: 'string',
      targetProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceSharedRuleResponseBody extends $tea.Model {
  /**
   * @example
   * 105412
   */
  id?: number;
  /**
   * @example
   * 46F594E6-84AB-5FA5-8144-6F3D149961E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceSharedRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataSourceSharedRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDataSourceSharedRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentRequest extends $tea.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  objectIds?: string[];
  /**
   * @remarks
   * 项目Id
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      objectIds: 'ObjectIds',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      objectIds: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentShrinkRequest extends $tea.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  objectIdsShrink?: string;
  /**
   * @remarks
   * 项目Id
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      objectIdsShrink: 'ObjectIds',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      objectIdsShrink: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponseBody extends $tea.Model {
  /**
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 580667964888595XXXX
   */
  id?: string;
  /**
   * @example
   * AE49C88D-5BEE-5ADD-8B8C-C4BBC0D7XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeRequest extends $tea.Model {
  /**
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  containerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATAWORKS_PROJECT
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      projectId: 'ProjectId',
      scene: 'Scene',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      projectId: 'string',
      scene: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeResponseBody extends $tea.Model {
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTags?: CreateProjectRequestAliyunResourceTags[];
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @example
   * false
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * true
   */
  devRoleDisabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      name: 'Name',
      paiTaskEnabled: 'PaiTaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': CreateProjectRequestAliyunResourceTags },
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      name: 'string',
      paiTaskEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectShrinkRequest extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTagsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @example
   * false
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * true
   */
  devRoleDisabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTagsShrink: 'AliyunResourceTags',
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      name: 'Name',
      paiTaskEnabled: 'PaiTaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTagsShrink: 'string',
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      name: 'string',
      paiTaskEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  /**
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
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
      projectId: 'number',
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

export class CreateResourceRequest extends $tea.Model {
  /**
   * @remarks
   * 资源文件的项目id
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @example
   * A5B97987-66EA-5563-9599-A2752292XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @example
   * 0EF298E5-0940-5AC7-9CB0-65025070XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDIJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11126
   */
  DIJobId?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDIJobResponseBody extends $tea.Model {
  /**
   * @example
   * D33D4A51-5845-579A-B4BA-FAADD0F83D53
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $tea.Model {
  /**
   * @example
   * 1234
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * B56432E0-2112-5C97-88D0-AA0AE5C75C74
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceSharedRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22127
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceSharedRuleResponseBody extends $tea.Model {
  /**
   * @example
   * 64B-587A-8CED-969E1973887FXXX-TT
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceSharedRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceSharedRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataSourceSharedRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 88198F19-A36B-52A9-AE44-4518A688XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeResponseBody extends $tea.Model {
  /**
   * @example
   * A1E54497-5122-505E-91C6-BAC14980XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
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

export class DeleteResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 88198F19-A36B-52A9-AE44-4518A688XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * B17730C0-D959-548A-AE23-E754177CXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDeploymentStageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDeploymentStageResponseBody extends $tea.Model {
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDeploymentStageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecDeploymentStageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecDeploymentStageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11588
   */
  DIJobId?: string;
  /**
   * @example
   * true
   */
  withDetails?: boolean;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      withDetails: 'WithDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'string',
      withDetails: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBody extends $tea.Model {
  pagingInfo?: GetDIJobResponseBodyPagingInfo;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADE490
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: GetDIJobResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobLogRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  DIJobId?: number;
  /**
   * @example
   * 10
   */
  failoverId?: number;
  /**
   * @example
   * 6153616438
   */
  instanceId?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      failoverId: 'FailoverId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      failoverId: 'number',
      instanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * >>>>>>>> stdout:n++++++++++++++++++executing sql: create database if not exists jindo_test location \\"oss://pangbei-hdfs/tmp/hive\\" n++n
   */
  log?: string;
  /**
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDIJobLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDIJobLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 16035
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponseBody extends $tea.Model {
  dataSource?: GetDataSourceResponseBodyDataSource;
  /**
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: GetDataSourceResponseBodyDataSource,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBody extends $tea.Model {
  pipeline?: GetDeploymentResponseBodyPipeline;
  /**
   * @example
   * 08468352-032C-5262-AEDC-68C9FA05XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: GetDeploymentResponseBodyPipeline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponseBody extends $tea.Model {
  function?: GetFunctionResponseBodyFunction;
  /**
   * @example
   * 6CF95929-6D12-5A88-8CC3-4B2F4C2EXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: GetFunctionResponseBodyFunction,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBody extends $tea.Model {
  node?: GetNodeResponseBodyNode;
  /**
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: GetNodeResponseBodyNode,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  project?: GetProjectResponseBodyProject;
  /**
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: GetProjectResponseBodyProject,
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

export class GetResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBody extends $tea.Model {
  /**
   * @example
   * E871F6C0-2EFF-5790-A00D-C57543EEXXXX
   */
  requestId?: string;
  resource?: GetResourceResponseBodyResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resource: GetResourceResponseBodyResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * F2BDD628-8A21-5BD1-B930-1A2D5989XXXX
   */
  requestId?: string;
  workflowDefinition?: GetWorkflowDefinitionResponseBodyWorkflowDefinition;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowDefinition: 'WorkflowDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowDefinition: GetWorkflowDefinitionResponseBodyWorkflowDefinition,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11588
   */
  DIJobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1717971005
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Alarm
   */
  eventType?: string;
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
   * 1716971005
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      endTime: 'EndTime',
      eventType: 'EventType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'string',
      endTime: 'number',
      eventType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsResponseBody extends $tea.Model {
  pagingInfo?: ListDIJobEventsResponseBodyPagingInfo;
  /**
   * @example
   * 645F6D68-9C29-5961-80B1-BDD4B794C22D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIJobEventsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDIJobEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDIJobEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11265
   */
  DIJobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1712205941
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  metricName?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586509407
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      endTime: 'EndTime',
      metricName: 'MetricName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'string',
      endTime: 'number',
      metricName: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11265
   */
  DIJobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1712205941
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  metricNameShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586509407
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      endTime: 'EndTime',
      metricNameShrink: 'MetricName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'string',
      endTime: 'number',
      metricNameShrink: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBody extends $tea.Model {
  pagingInfo?: ListDIJobMetricsResponseBodyPagingInfo;
  /**
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIJobMetricsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDIJobMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDIJobMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsRequest extends $tea.Model {
  /**
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @example
   * test_export_01
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1967
   */
  projectId?: number;
  /**
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataSourceType: 'DestinationDataSourceType',
      migrationType: 'MigrationType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sourceDataSourceType: 'SourceDataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataSourceType: 'string',
      migrationType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sourceDataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponseBody extends $tea.Model {
  pagingInfo?: ListDIJobsResponseBodyPagingInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7263E4AC-9D2E-5B29-B8AF-7C5012E92A41
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIJobsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDIJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDIJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSharedRulesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @example
   * 1
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      targetProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSharedRulesResponseBody extends $tea.Model {
  dataSourceSharedRules?: ListDataSourceSharedRulesResponseBodyDataSourceSharedRules[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceSharedRules: 'DataSourceSharedRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceSharedRules: { 'type': 'array', 'itemType': ListDataSourceSharedRulesResponseBodyDataSourceSharedRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSharedRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceSharedRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSourceSharedRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesRequest extends $tea.Model {
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * test
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17820
   */
  projectId?: number;
  /**
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @example
   * ["tag1", "tag2", "tag3"]
   */
  tags?: string;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tags: 'Tags',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      tags: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesShrinkRequest extends $tea.Model {
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * test
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17820
   */
  projectId?: number;
  /**
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @example
   * ["tag1", "tag2", "tag3"]
   */
  tags?: string;
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tags: 'Tags',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      tags: 'string',
      typesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $tea.Model {
  pagingInfo?: ListDataSourcesResponseBodyPagingInfo;
  /**
   * @example
   * 7BE1433F-6D55-5D86-9344-CA6F7DD19B13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDataSourcesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsRequest extends $tea.Model {
  /**
   * @example
   * 110755000425XXXX
   */
  creator?: string;
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
   * 10000
   */
  projectId?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBody extends $tea.Model {
  pagingInfo?: ListDeploymentsResponseBodyPagingInfo;
  /**
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDeploymentsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeploymentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $tea.Model {
  /**
   * @example
   * 110755000425XXXX
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  /**
   * @example
   * MATH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $tea.Model {
  pagingInfo?: ListFunctionsResponseBodyPagingInfo;
  /**
   * @example
   * 89FB2BF0-EB00-5D03-9C34-05931001XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListFunctionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
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
   * 10001
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBody extends $tea.Model {
  pagingInfo?: ListNodeDependenciesResponseBodyPagingInfo;
  /**
   * @example
   * 204EAF68-CCE3-5112-8DA0-E7A60F02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListNodeDependenciesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodeDependenciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodeDependenciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  /**
   * @example
   * 860438872620113XXXX
   */
  containerId?: string;
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
   * 12345
   */
  projectId?: string;
  /**
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @example
   * Normal
   */
  rerurrence?: string;
  /**
   * @example
   * DATAWORKS_PROJECT
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      rerunMode: 'RerunMode',
      rerurrence: 'Rerurrence',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      rerunMode: 'string',
      rerurrence: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  pagingInfo?: ListNodesResponseBodyPagingInfo;
  /**
   * @example
   * 2197B9C4-39CE-55EA-8EEA-FDBAE52DXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListNodesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTags?: ListProjectsRequestAliyunResourceTags[];
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * false
   */
  devRoleDisabled?: boolean;
  ids?: number[];
  names?: string[];
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
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      ids: 'Ids',
      names: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': ListProjectsRequestAliyunResourceTags },
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      ids: { 'type': 'array', 'itemType': 'number' },
      names: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsShrinkRequest extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTagsShrink?: string;
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * false
   */
  devRoleDisabled?: boolean;
  idsShrink?: string;
  namesShrink?: string;
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
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTagsShrink: 'AliyunResourceTags',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      idsShrink: 'Ids',
      namesShrink: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTagsShrink: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      idsShrink: 'string',
      namesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  pagingInfo?: ListProjectsResponseBodyPagingInfo;
  /**
   * @example
   * 6D24AD9A-652F-59E2-AC1F-05029300F8A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListProjectsResponseBodyPagingInfo,
      requestId: 'string',
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

export class ListResourcesRequest extends $tea.Model {
  /**
   * @example
   * 110755000425XXXX
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: string;
  /**
   * @example
   * python
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $tea.Model {
  pagingInfo?: ListResourcesResponseBodyPagingInfo;
  /**
   * @example
   * 99EBE7CF-69C0-5089-BE3E-79563C31XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListResourcesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsRequest extends $tea.Model {
  /**
   * @example
   * 110755000425XXXX
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @example
   * CycleWorkflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBody extends $tea.Model {
  pagingInfo?: ListWorkflowDefinitionsResponseBodyPagingInfo;
  /**
   * @example
   * 8C3ED0C5-ABAB-55E1-854B-DAC02B11XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListWorkflowDefinitionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkflowDefinitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkflowDefinitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 48C0E2F0-52BA-5888-BDFA-28F1B9AFXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveNodeResponseBody extends $tea.Model {
  /**
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceResponseBody extends $tea.Model {
  /**
   * @example
   * F332BED4-DD73-5972-A9C2-642BA6CFXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * 05ADAF4F-7709-5FB1-B606-3513483FXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 1ED4C97F-BA2A-57C5-BA7C-8853627EXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameNodeResponseBody extends $tea.Model {
  /**
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA81XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA8XXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * 975BD43D-C421-595C-A29C-565A8AD5XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  DIJobId?: string;
  /**
   * @example
   * false
   */
  forceToRerun?: boolean;
  realtimeStartSettings?: StartDIJobRequestRealtimeStartSettings;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      forceToRerun: 'ForceToRerun',
      realtimeStartSettings: 'RealtimeStartSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'string',
      forceToRerun: 'boolean',
      realtimeStartSettings: StartDIJobRequestRealtimeStartSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  DIJobId?: string;
  /**
   * @example
   * false
   */
  forceToRerun?: boolean;
  realtimeStartSettingsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      forceToRerun: 'ForceToRerun',
      realtimeStartSettingsShrink: 'RealtimeStartSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'string',
      forceToRerun: 'boolean',
      realtimeStartSettingsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobResponseBody extends $tea.Model {
  /**
   * @example
   * 999431B2-6013-577F-B684-36F7433C753B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11588
   */
  DIJobId?: number;
  description?: string;
  jobSettings?: UpdateDIJobRequestJobSettings;
  resourceSettings?: UpdateDIJobRequestResourceSettings;
  tableMappings?: UpdateDIJobRequestTableMappings[];
  transformationRules?: UpdateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      jobSettings: 'JobSettings',
      resourceSettings: 'ResourceSettings',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      jobSettings: UpdateDIJobRequestJobSettings,
      resourceSettings: UpdateDIJobRequestResourceSettings,
      tableMappings: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappings },
      transformationRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11588
   */
  DIJobId?: number;
  description?: string;
  jobSettingsShrink?: string;
  resourceSettingsShrink?: string;
  tableMappingsShrink?: string;
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      jobSettingsShrink: 'JobSettings',
      resourceSettingsShrink: 'ResourceSettings',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      jobSettingsShrink: 'string',
      resourceSettingsShrink: 'string',
      tableMappingsShrink: 'string',
      transformationRulesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobResponseBody extends $tea.Model {
  /**
   * @example
   * AAC30B35-820D-5F3E-A42C-E96BB6379325
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: string;
  /**
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 16033
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5678
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      description: 'Description',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
      connectionPropertiesMode: 'string',
      description: 'string',
      id: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * 102E8E24-0387-531D-8A75-1C0AE7DD03E5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 12123960-CB2C-5086-868E-C6C1D024XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeResponseBody extends $tea.Model {
  /**
   * @example
   * 99EBE7CF-69C0-5089-BE3E-79563C31XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  description?: string;
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * true
   */
  devRoleDisabled?: boolean;
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Forbidden
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      id: 'Id',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      id: 'number',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
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

export class UpdateResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA81XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * 20BF7E80-668A-5620-8AD8-879B8FEAXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestDestinationDataSourceSettings extends $tea.Model {
  /**
   * @example
   * holo_datasource_1
   */
  dataSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettingsColumnDataTypeSettings extends $tea.Model {
  /**
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @example
   * bigint
   */
  sourceDataType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataType: 'DestinationDataType',
      sourceDataType: 'SourceDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataType: 'string',
      sourceDataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettingsCycleScheduleSettings extends $tea.Model {
  /**
   * @example
   * Full
   */
  cycleMigrationType?: string;
  /**
   * @example
   * bizdate=$bizdate
   */
  scheduleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      cycleMigrationType: 'CycleMigrationType',
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleMigrationType: 'string',
      scheduleParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettingsDdlHandlingSettings extends $tea.Model {
  /**
   * @example
   * Critical
   */
  action?: string;
  /**
   * @example
   * AddColumn
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettingsRuntimeSettings extends $tea.Model {
  /**
   * @example
   * runtime.offline.concurrent
   */
  name?: string;
  /**
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettings extends $tea.Model {
  /**
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  columnDataTypeSettings?: CreateDIJobRequestJobSettingsColumnDataTypeSettings[];
  cycleScheduleSettings?: CreateDIJobRequestJobSettingsCycleScheduleSettings;
  ddlHandlingSettings?: CreateDIJobRequestJobSettingsDdlHandlingSettings[];
  runtimeSettings?: CreateDIJobRequestJobSettingsRuntimeSettings[];
  static names(): { [key: string]: string } {
    return {
      channelSettings: 'ChannelSettings',
      columnDataTypeSettings: 'ColumnDataTypeSettings',
      cycleScheduleSettings: 'CycleScheduleSettings',
      ddlHandlingSettings: 'DdlHandlingSettings',
      runtimeSettings: 'RuntimeSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSettings: 'string',
      columnDataTypeSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: CreateDIJobRequestJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsRuntimeSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestResourceSettingsOfflineResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestResourceSettingsRealtimeResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestResourceSettingsScheduleResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_235454102432001_1579085295030
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestResourceSettings extends $tea.Model {
  offlineResourceSettings?: CreateDIJobRequestResourceSettingsOfflineResourceSettings;
  realtimeResourceSettings?: CreateDIJobRequestResourceSettingsRealtimeResourceSettings;
  scheduleResourceSettings?: CreateDIJobRequestResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: CreateDIJobRequestResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: CreateDIJobRequestResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: CreateDIJobRequestResourceSettingsScheduleResourceSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties extends $tea.Model {
  /**
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @example
   * GMT+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      encoding: 'Encoding',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encoding: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestSourceDataSourceSettings extends $tea.Model {
  /**
   * @example
   * mysql_datasource_1
   */
  dataSourceName?: string;
  dataSourceProperties?: CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestTableMappingsSourceObjectSelectionRules extends $tea.Model {
  /**
   * @example
   * Include
   */
  action?: string;
  /**
   * @example
   * mysql_table_1
   */
  expression?: string;
  /**
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @example
   * Table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      expression: 'Expression',
      expressionType: 'ExpressionType',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      expression: 'string',
      expressionType: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestTableMappingsTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestTableMappings extends $tea.Model {
  sourceObjectSelectionRules?: CreateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  transformationRules?: CreateDIJobRequestTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestAliyunResourceTags extends $tea.Model {
  /**
   * @example
   * batch
   */
  key?: string;
  /**
   * @example
   * blue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings extends $tea.Model {
  /**
   * @example
   * dw_mysql
   */
  dataSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings extends $tea.Model {
  /**
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @example
   * bigint
   */
  sourceDataType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataType: 'DestinationDataType',
      sourceDataType: 'SourceDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataType: 'string',
      sourceDataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings extends $tea.Model {
  /**
   * @example
   * Full
   */
  cycleMigrationType?: string;
  /**
   * @example
   * bizdate=$bizdate
   */
  scheduleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      cycleMigrationType: 'CycleMigrationType',
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleMigrationType: 'string',
      scheduleParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings extends $tea.Model {
  /**
   * @example
   * Ignore
   */
  action?: string;
  /**
   * @example
   * CreateTable
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings extends $tea.Model {
  /**
   * @example
   * runtime.offline.concurrent
   */
  name?: string;
  /**
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettings extends $tea.Model {
  /**
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  columnDataTypeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings[];
  cycleScheduleSettings?: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings;
  ddlHandlingSettings?: GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings[];
  runtimeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings[];
  static names(): { [key: string]: string } {
    return {
      channelSettings: 'ChannelSettings',
      columnDataTypeSettings: 'ColumnDataTypeSettings',
      cycleScheduleSettings: 'CycleScheduleSettings',
      ddlHandlingSettings: 'DdlHandlingSettings',
      runtimeSettings: 'RuntimeSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSettings: 'string',
      columnDataTypeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_7708_1667792816832
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_235454102432001_1579085295030
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_235454102432001_1718359176885
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoResourceSettings extends $tea.Model {
  offlineResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings;
  realtimeResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings;
  scheduleResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties extends $tea.Model {
  /**
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @example
   * GMT+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      encoding: 'Encoding',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encoding: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoSourceDataSourceSettings extends $tea.Model {
  /**
   * @example
   * dw_mysql
   */
  dataSourceName?: string;
  dataSourceProperties?: GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules extends $tea.Model {
  /**
   * @example
   * Include
   */
  action?: string;
  /**
   * @example
   * mysql_table_1
   */
  expression?: string;
  /**
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @example
   * Table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      expression: 'Expression',
      expressionType: 'ExpressionType',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      expression: 'string',
      expressionType: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules extends $tea.Model {
  /**
   * @example
   * AddColumn
   */
  ruleActionType?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoTableMappings extends $tea.Model {
  sourceObjectSelectionRules?: GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules[];
  transformationRules?: GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfo extends $tea.Model {
  /**
   * @example
   * 32601
   */
  DIJobId?: string;
  /**
   * @example
   * description
   */
  description?: string;
  destinationDataSourceSettings?: GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings[];
  /**
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @example
   * imp_ods_dms_det_dealer_info_df
   */
  jobName?: string;
  jobSettings?: GetDIJobResponseBodyPagingInfoJobSettings;
  /**
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @example
   * 98330
   */
  projectId?: number;
  resourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettings;
  sourceDataSourceSettings?: GetDIJobResponseBodyPagingInfoSourceDataSourceSettings[];
  /**
   * @example
   * Mysql
   */
  sourceDataSourceType?: string;
  tableMappings?: GetDIJobResponseBodyPagingInfoTableMappings[];
  transformationRules?: GetDIJobResponseBodyPagingInfoTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      sourceDataSourceSettings: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'string',
      description: 'string',
      destinationDataSourceSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings },
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettings: GetDIJobResponseBodyPagingInfoJobSettings,
      migrationType: 'string',
      projectId: 'number',
      resourceSettings: GetDIJobResponseBodyPagingInfoResourceSettings,
      sourceDataSourceSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoSourceDataSourceSettings },
      sourceDataSourceType: 'string',
      tableMappings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappings },
      transformationRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponseBodyDataSource extends $tea.Model {
  /**
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: any;
  /**
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @example
   * 1698286929333
   */
  createTime?: number;
  /**
   * @example
   * 1107550004253538
   */
  createUser?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 16738
   */
  id?: number;
  /**
   * @example
   * 1698286929333
   */
  modifyTime?: number;
  /**
   * @example
   * 1107550004253538
   */
  modifyUser?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 52660
   */
  projectId?: number;
  /**
   * @example
   * 1107550004253538:cn-beijing:holo:hgprecn-cn-x0r3oun4k001:testdb
   */
  qualifiedName?: string;
  /**
   * @example
   * hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      projectId: 'ProjectId',
      qualifiedName: 'QualifiedName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'any',
      connectionPropertiesMode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      projectId: 'number',
      qualifiedName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyPipelineStages extends $tea.Model {
  /**
   * @remarks
   * 阶段代号
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * 阶段描述
   */
  description?: string;
  detail?: { [key: string]: any };
  /**
   * @remarks
   * 阶段信息
   */
  message?: string;
  /**
   * @remarks
   * 阶段名称
   */
  name?: string;
  /**
   * @remarks
   * 阶段状态
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * 步骤
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * 阶段类型
   * 
   * @example
   * BUILD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      detail: 'Detail',
      message: 'Message',
      name: 'Name',
      status: 'Status',
      step: 'Step',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      status: 'string',
      step: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyPipeline extends $tea.Model {
  /**
   * @remarks
   * 发布包创建时间戳
   * 
   * @example
   * 1724984066000
   */
  createTime?: number;
  /**
   * @remarks
   * 创建人
   * 
   * @example
   * 137946317766XXXX
   */
  creator?: string;
  /**
   * @remarks
   * 发布流程Id
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  message?: string;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 1724984066000
   */
  modifyTime?: number;
  /**
   * @example
   * 56160
   */
  projectId?: string;
  /**
   * @remarks
   * 步骤详情
   */
  stages?: GetDeploymentResponseBodyPipelineStages[];
  /**
   * @remarks
   * 发布流程状态
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      id: 'Id',
      message: 'Message',
      modifyTime: 'ModifyTime',
      projectId: 'ProjectId',
      stages: 'Stages',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      id: 'string',
      message: 'string',
      modifyTime: 'number',
      projectId: 'string',
      stages: { 'type': 'array', 'itemType': GetDeploymentResponseBodyPipelineStages },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponseBodyFunction extends $tea.Model {
  /**
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 1724506661000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBodyNode extends $tea.Model {
  /**
   * @example
   * 1700539206000
   */
  createTime?: number;
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 1700539206000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 196596664824XXXX
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyProjectAliyunResourceTags extends $tea.Model {
  /**
   * @example
   * batch
   */
  key?: string;
  /**
   * @example
   * blue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyProject extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zfa
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTags?: GetProjectResponseBodyProjectAliyunResourceTags[];
  description?: string;
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * false
   */
  devRoleDisabled?: boolean;
  displayName?: string;
  /**
   * @example
   * 28477242
   */
  id?: number;
  /**
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @example
   * 207947397706614299
   */
  owner?: string;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': GetProjectResponseBodyProjectAliyunResourceTags },
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBodyResource extends $tea.Model {
  /**
   * @example
   * 1700539206000
   */
  createTime?: number;
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 1700539206000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponseBodyWorkflowDefinition extends $tea.Model {
  /**
   * @example
   * 1708481905000
   */
  createTime?: number;
  /**
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @example
   * 1708481905000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 307XXX
   */
  projectId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsResponseBodyPagingInfoDIJobEvent extends $tea.Model {
  /**
   * @example
   * Ignore
   */
  action?: string;
  /**
   * @example
   * Phone
   */
  channels?: string;
  /**
   * @example
   * 1663573162
   */
  createTime?: string;
  detail?: string;
  /**
   * @example
   * alter table table2 ***
   */
  dstSql?: string;
  /**
   * @example
   * table2
   */
  dstTable?: string;
  /**
   * @example
   * 2024-05-29 15:11:31,377 [main] INFO com.*.**.di.core.metrics.:21 []  {****} 
   * 2024-05-29 15:11:31,384 [main] INFO *.aliyun.*.di.*.*.metrics.*:27 [] - Open MarioDiReporter 
   * 2024-05-29 15:11:33,248 [flink-akka.*.*-dispatcher-17] INFO
   */
  failoverMessage?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * Warning
   */
  severity?: string;
  /**
   * @example
   * alter table table1 ***
   */
  srcSql?: string;
  /**
   * @example
   * table1
   */
  srcTable?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * Delay
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      channels: 'Channels',
      createTime: 'CreateTime',
      detail: 'Detail',
      dstSql: 'DstSql',
      dstTable: 'DstTable',
      failoverMessage: 'FailoverMessage',
      id: 'Id',
      severity: 'Severity',
      srcSql: 'SrcSql',
      srcTable: 'SrcTable',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      channels: 'string',
      createTime: 'string',
      detail: 'string',
      dstSql: 'string',
      dstTable: 'string',
      failoverMessage: 'string',
      id: 'string',
      severity: 'string',
      srcSql: 'string',
      srcTable: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsResponseBodyPagingInfo extends $tea.Model {
  DIJobEvent?: ListDIJobEventsResponseBodyPagingInfoDIJobEvent[];
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
   * 2524
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobEvent: 'DIJobEvent',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobEvent: { 'type': 'array', 'itemType': ListDIJobEventsResponseBodyPagingInfoDIJobEvent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList extends $tea.Model {
  /**
   * @example
   * 1716881141
   */
  time?: number;
  /**
   * @example
   * 10
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBodyPagingInfoJobMetrics extends $tea.Model {
  /**
   * @example
   * JobDelay
   */
  name?: string;
  seriesList?: ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      seriesList: 'SeriesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      seriesList: { 'type': 'array', 'itemType': ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBodyPagingInfo extends $tea.Model {
  jobMetrics?: ListDIJobMetricsResponseBodyPagingInfoJobMetrics[];
  static names(): { [key: string]: string } {
    return {
      jobMetrics: 'JobMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobMetrics: { 'type': 'array', 'itemType': ListDIJobMetricsResponseBodyPagingInfoJobMetrics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponseBodyPagingInfoDIJobs extends $tea.Model {
  /**
   * @example
   * 32599
   */
  DIJobId?: number;
  /**
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @example
   * mysql_to_holo_sync_35197
   */
  jobName?: string;
  /**
   * @example
   * Running
   */
  jobStatus?: string;
  /**
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @example
   * 26442
   */
  projectId?: number;
  /**
   * @example
   * Mysql
   */
  sourceDataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobStatus: 'JobStatus',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      sourceDataSourceType: 'SourceDataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobStatus: 'string',
      migrationType: 'string',
      projectId: 'number',
      sourceDataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponseBodyPagingInfo extends $tea.Model {
  DIJobs?: ListDIJobsResponseBodyPagingInfoDIJobs[];
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
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobs: 'DIJobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobs: { 'type': 'array', 'itemType': ListDIJobsResponseBodyPagingInfoDIJobs },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSharedRulesResponseBodyDataSourceSharedRules extends $tea.Model {
  /**
   * @example
   * 1724379762000
   */
  createTime?: number;
  /**
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * targetProject.datasource
   */
  sharedDataSourceName?: string;
  /**
   * @example
   * 1
   */
  sharedUser?: string;
  /**
   * @example
   * 1
   */
  sourceProjectId?: number;
  /**
   * @example
   * 1
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSourceId: 'DataSourceId',
      envType: 'EnvType',
      id: 'Id',
      sharedDataSourceName: 'SharedDataSourceName',
      sharedUser: 'SharedUser',
      sourceProjectId: 'SourceProjectId',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      dataSourceId: 'number',
      envType: 'string',
      id: 'number',
      sharedDataSourceName: 'string',
      sharedUser: 'string',
      sourceProjectId: 'number',
      targetProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource extends $tea.Model {
  /**
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: any;
  /**
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @example
   * 1648711113000
   */
  createTime?: number;
  /**
   * @example
   * 1624387842781448
   */
  createUser?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 16035
   */
  id?: number;
  /**
   * @example
   * 1648711113000
   */
  modifyTime?: number;
  /**
   * @example
   * 1624387842781448
   */
  modifyUser?: string;
  /**
   * @example
   * 1648711121000:cn-beijing:odps:yongxunQA_beijing_standard
   */
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'any',
      connectionPropertiesMode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      qualifiedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyPagingInfoDataSources extends $tea.Model {
  dataSource?: ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * mysql
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyPagingInfo extends $tea.Model {
  dataSources?: ListDataSourcesResponseBodyPagingInfoDataSources[];
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
   * 131
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyPagingInfoDataSources },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyPagingInfoDeploymentsStages extends $tea.Model {
  /**
   * @remarks
   * 阶段代号
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * 阶段描述
   */
  description?: string;
  /**
   * @remarks
   * 阶段详细信息
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * 阶段信息
   */
  message?: string;
  /**
   * @remarks
   * 阶段名称
   */
  name?: string;
  /**
   * @remarks
   * 阶段状态
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * 步骤
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * 阶段类型
   * 
   * @example
   * CHECK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      detail: 'Detail',
      message: 'Message',
      name: 'Name',
      status: 'Status',
      step: 'Step',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      status: 'string',
      step: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyPagingInfoDeployments extends $tea.Model {
  /**
   * @remarks
   * 发布包创建时间戳
   * 
   * @example
   * 1702736654000
   */
  createTime?: number;
  /**
   * @remarks
   * 创建人
   * 
   * @example
   * 110755000425XXXX
   */
  creator?: string;
  /**
   * @remarks
   * 发布流程Id
   * 
   * @example
   * ddf354a5-03df-48fc-94c1-cc973f79XXXX
   */
  id?: string;
  message?: string;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 1702736654000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 项目Id
   * 
   * @example
   * 44683
   */
  projectId?: string;
  /**
   * @remarks
   * 步骤详情
   */
  stages?: ListDeploymentsResponseBodyPagingInfoDeploymentsStages[];
  /**
   * @remarks
   * 发布流程状态
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      id: 'Id',
      message: 'Message',
      modifyTime: 'ModifyTime',
      projectId: 'ProjectId',
      stages: 'Stages',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      id: 'string',
      message: 'string',
      modifyTime: 'number',
      projectId: 'string',
      stages: { 'type': 'array', 'itemType': ListDeploymentsResponseBodyPagingInfoDeploymentsStages },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyPagingInfo extends $tea.Model {
  deployments?: ListDeploymentsResponseBodyPagingInfoDeployments[];
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
   * 2524
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      deployments: 'Deployments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployments: { 'type': 'array', 'itemType': ListDeploymentsResponseBodyPagingInfoDeployments },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsDataSource extends $tea.Model {
  /**
   * @remarks
   * 数据源名称
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource extends $tea.Model {
  /**
   * @remarks
   * 运行时资源组Id
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * ODPS_FUNCTION
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsScript extends $tea.Model {
  /**
   * @remarks
   * 脚本的id
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * 脚本路径
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctions extends $tea.Model {
  /**
   * @remarks
   * ARM集群资源文件列表
   * 
   * @example
   * xxx.jar,yyy.jar
   */
  armResource?: string;
  /**
   * @remarks
   * 函数实现类名
   * 
   * @example
   * com.demo.Main
   */
  className?: string;
  /**
   * @remarks
   * 命令描述
   * 
   * @example
   * testUdf(xx,yy)
   */
  commandDescription?: string;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 1655953028000
   */
  createTime?: number;
  /**
   * @remarks
   * 函数注册到的数据源信息
   */
  dataSource?: ListFunctionsResponseBodyPagingInfoFunctionsDataSource;
  /**
   * @remarks
   * 数据库名，可选
   * 
   * @example
   * odps_first
   */
  databaseName?: string;
  /**
   * @remarks
   * 对funciotn的描述
   */
  description?: string;
  /**
   * @remarks
   * 嵌套函数代码内容
   * 
   * @example
   * print(\\"hello,world!\\")
   */
  embeddedCode?: string;
  /**
   * @remarks
   * 嵌套代码类型
   * 
   * @example
   * Python2
   */
  embeddedCodeType?: string;
  /**
   * @remarks
   * 嵌套资源类型
   * 
   * @example
   * File
   */
  embeddedResourceType?: string;
  /**
   * @remarks
   * 示例说明
   */
  exampleDescription?: string;
  /**
   * @remarks
   * 函数的实现代码
   * 
   * @example
   * xxx.jar,yyy.jar
   */
  fileResource?: string;
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 580667964888595XXXX
   */
  id?: string;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 1655953028000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   */
  name?: string;
  /**
   * @remarks
   * 函数责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * 命令描述
   */
  parameterDescription?: string;
  /**
   * @remarks
   * 项目Id
   * 
   * @example
   * 307XXX
   */
  projectId?: string;
  /**
   * @remarks
   * 返回值说明
   */
  returnValueDescription?: string;
  /**
   * @remarks
   * 运行时资源组信息
   */
  runtimeResource?: ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListFunctionsResponseBodyPagingInfoFunctionsScript;
  /**
   * @remarks
   * 函数类型
   * 
   * @example
   * MATH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      armResource: 'ArmResource',
      className: 'ClassName',
      commandDescription: 'CommandDescription',
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      databaseName: 'DatabaseName',
      description: 'Description',
      embeddedCode: 'EmbeddedCode',
      embeddedCodeType: 'EmbeddedCodeType',
      embeddedResourceType: 'EmbeddedResourceType',
      exampleDescription: 'ExampleDescription',
      fileResource: 'FileResource',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      parameterDescription: 'ParameterDescription',
      projectId: 'ProjectId',
      returnValueDescription: 'ReturnValueDescription',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armResource: 'string',
      className: 'string',
      commandDescription: 'string',
      createTime: 'number',
      dataSource: ListFunctionsResponseBodyPagingInfoFunctionsDataSource,
      databaseName: 'string',
      description: 'string',
      embeddedCode: 'string',
      embeddedCodeType: 'string',
      embeddedResourceType: 'string',
      exampleDescription: 'string',
      fileResource: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      parameterDescription: 'string',
      projectId: 'string',
      returnValueDescription: 'string',
      runtimeResource: ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource,
      script: ListFunctionsResponseBodyPagingInfoFunctionsScript,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfo extends $tea.Model {
  functions?: ListFunctionsResponseBodyPagingInfoFunctions[];
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
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      functions: 'Functions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyPagingInfoFunctions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesDataSource extends $tea.Model {
  /**
   * @remarks
   * 数据源名称
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 860438872620113XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables extends $tea.Model {
  /**
   * @remarks
   * 表id
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 860438872620113XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables extends $tea.Model {
  /**
   * @remarks
   * 制品类型
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * 变量id
   * 
   * @example
   * 543218872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * 变量名
   * 
   * @example
   * input
   */
  name?: string;
  /**
   * @remarks
   * 变量所属节点
   */
  node?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode;
  /**
   * @remarks
   * 范围
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * 变量值
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出列表
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * 表列表
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * 变量列表
   */
  variables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables },
      variables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 463497880880954XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables extends $tea.Model {
  /**
   * @remarks
   * 表id
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 463497880880954XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables extends $tea.Model {
  /**
   * @remarks
   * 制品类型
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * 变量id
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * 变量名
   * 
   * @example
   * output
   */
  name?: string;
  /**
   * @remarks
   * 变量所属节点
   */
  node?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode;
  /**
   * @remarks
   * 范围
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * 变量值
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出列表
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * 表列表
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * 变量列表
   */
  variables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables },
      variables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource extends $tea.Model {
  /**
   * @remarks
   * 资源组id
   * 
   * @example
   * S_res_group_XXXX_XXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * ODPS_SQL
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesScript extends $tea.Model {
  /**
   * @remarks
   * 脚本的id
   * 
   * @example
   * 853573334108680XXXX
   */
  id?: string;
  /**
   * @remarks
   * 脚本路径
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesStrategy extends $tea.Model {
  /**
   * @remarks
   * 生成实例的模式
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * 重试时间间隔
   * 
   * @example
   * 180000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * 允许重跑的模式
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * 重试次数
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * 超时时间
   * 
   * @example
   * 0
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceMode: 'InstanceMode',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMode: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesTags extends $tea.Model {
  /**
   * @remarks
   * 标签键
   * 
   * @example
   * null
   */
  key?: string;
  /**
   * @remarks
   * 标签值
   * 
   * @example
   * null
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesTrigger extends $tea.Model {
  /**
   * @remarks
   * 触发器的cron表达式
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * 结束时间，格式为yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * 触发器id
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: string;
  /**
   * @remarks
   * 开始时间，格式为yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 时区
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * 触发器类型
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      id: 'string',
      startTime: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodes extends $tea.Model {
  /**
   * @remarks
   * 节点的创建时间
   * 
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * 数据源信息
   */
  dataSource?: ListNodeDependenciesResponseBodyPagingInfoNodesDataSource;
  /**
   * @remarks
   * 描述
   */
  description?: string;
  /**
   * @example
   * 723932906364267XXXX
   */
  id?: string;
  /**
   * @remarks
   * 节点输入
   */
  inputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * 属性修改时间
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 节点名
   */
  name?: string;
  /**
   * @remarks
   * 节点输出
   */
  outputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputs;
  /**
   * @remarks
   * 节点的责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 65133
   */
  projectId?: string;
  /**
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * 资源组信息
   */
  runtimeResource?: ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListNodeDependenciesResponseBodyPagingInfoNodesScript;
  /**
   * @remarks
   * 调度策略
   */
  strategy?: ListNodeDependenciesResponseBodyPagingInfoNodesStrategy;
  /**
   * @remarks
   * 标签信息
   */
  tags?: ListNodeDependenciesResponseBodyPagingInfoNodesTags[];
  /**
   * @remarks
   * 调度任务Id
   * 
   * @example
   * 580667964888595XXXX
   */
  taskId?: string;
  /**
   * @remarks
   * 触发器信息
   */
  trigger?: ListNodeDependenciesResponseBodyPagingInfoNodesTrigger;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      description: 'Description',
      id: 'Id',
      inputs: 'Inputs',
      modifyTime: 'ModifyTime',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      projectId: 'ProjectId',
      recurrence: 'Recurrence',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      strategy: 'Strategy',
      tags: 'Tags',
      taskId: 'TaskId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListNodeDependenciesResponseBodyPagingInfoNodesDataSource,
      description: 'string',
      id: 'string',
      inputs: ListNodeDependenciesResponseBodyPagingInfoNodesInputs,
      modifyTime: 'number',
      name: 'string',
      outputs: ListNodeDependenciesResponseBodyPagingInfoNodesOutputs,
      owner: 'string',
      projectId: 'string',
      recurrence: 'string',
      runtimeResource: ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource,
      script: ListNodeDependenciesResponseBodyPagingInfoNodesScript,
      strategy: ListNodeDependenciesResponseBodyPagingInfoNodesStrategy,
      tags: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesTags },
      taskId: 'string',
      trigger: ListNodeDependenciesResponseBodyPagingInfoNodesTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfo extends $tea.Model {
  nodes?: ListNodeDependenciesResponseBodyPagingInfoNodes[];
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
   * 90
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodes },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesDataSource extends $tea.Model {
  /**
   * @remarks
   * 数据源名称
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 623731286945488XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsTables extends $tea.Model {
  /**
   * @remarks
   * 表id
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 623731286945488XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsVariables extends $tea.Model {
  /**
   * @remarks
   * 制品类型
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * 变量id
   * 
   * @example
   * 543211286945488XXXX
   */
  id?: string;
  /**
   * @remarks
   * 变量名
   * 
   * @example
   * input
   */
  name?: string;
  /**
   * @remarks
   * 变量所属节点
   */
  node?: ListNodesResponseBodyPagingInfoNodesInputsVariablesNode;
  /**
   * @remarks
   * 范围
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * 变量值
   * 
   * @example
   * 222
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodesResponseBodyPagingInfoNodesInputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出列表
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * 表列表
   */
  tables?: ListNodesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * 变量列表
   */
  variables?: ListNodesResponseBodyPagingInfoNodesInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsTables },
      variables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 860438872620113XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsTables extends $tea.Model {
  /**
   * @remarks
   * 表id
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 860438872620113XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsVariables extends $tea.Model {
  /**
   * @remarks
   * 制品类型
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * 变量id
   * 
   * @example
   * 623731286945488XXXX
   */
  id?: string;
  /**
   * @remarks
   * 变量名
   * 
   * @example
   * output
   */
  name?: string;
  /**
   * @remarks
   * 变量所属节点
   */
  node?: ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode;
  /**
   * @remarks
   * 范围
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * 变量值
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出列表
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * 表列表
   */
  tables?: ListNodesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * 变量列表
   */
  variables?: ListNodesResponseBodyPagingInfoNodesOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsTables },
      variables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesRuntimeResource extends $tea.Model {
  /**
   * @remarks
   * 资源组id
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * ODPS_SQL
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesScript extends $tea.Model {
  /**
   * @remarks
   * 脚本的id
   * 
   * @example
   * 853573334108680XXXX
   */
  id?: string;
  /**
   * @remarks
   * 脚本路径
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListNodesResponseBodyPagingInfoNodesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListNodesResponseBodyPagingInfoNodesScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesStrategy extends $tea.Model {
  /**
   * @remarks
   * 生成实例的模式
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * 重试时间间隔
   * 
   * @example
   * 180000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * 允许重跑的模式
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * 重试次数
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * 超时时间
   * 
   * @example
   * 0
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceMode: 'InstanceMode',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMode: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesTags extends $tea.Model {
  /**
   * @remarks
   * 标签键
   * 
   * @example
   * null
   */
  key?: string;
  /**
   * @remarks
   * 标签值
   * 
   * @example
   * null
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesTrigger extends $tea.Model {
  /**
   * @remarks
   * 触发器的cron表达式
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * 结束时间，格式为yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * 触发器id
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: string;
  /**
   * @remarks
   * 开始时间，格式为yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 时区
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * 触发器类型
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      id: 'string',
      startTime: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodes extends $tea.Model {
  /**
   * @remarks
   * 节点的创建时间
   * 
   * @example
   * 1722910655000
   */
  createTime?: number;
  /**
   * @remarks
   * 数据源信息
   */
  dataSource?: ListNodesResponseBodyPagingInfoNodesDataSource;
  /**
   * @remarks
   * 描述
   */
  description?: string;
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * 节点输入
   */
  inputs?: ListNodesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * 属性修改时间
   * 
   * @example
   * 1722910655000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 节点名
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * 节点输出
   */
  outputs?: ListNodesResponseBodyPagingInfoNodesOutputs;
  /**
   * @remarks
   * 节点的责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 33233
   */
  projectId?: string;
  /**
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * 资源组信息
   */
  runtimeResource?: ListNodesResponseBodyPagingInfoNodesRuntimeResource;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListNodesResponseBodyPagingInfoNodesScript;
  /**
   * @remarks
   * 调度策略
   */
  strategy?: ListNodesResponseBodyPagingInfoNodesStrategy;
  /**
   * @remarks
   * 标签信息
   */
  tags?: ListNodesResponseBodyPagingInfoNodesTags[];
  /**
   * @remarks
   * 调度任务Id
   * 
   * @example
   * 88888888888
   */
  taskId?: string;
  /**
   * @remarks
   * 触发器信息
   */
  trigger?: ListNodesResponseBodyPagingInfoNodesTrigger;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      description: 'Description',
      id: 'Id',
      inputs: 'Inputs',
      modifyTime: 'ModifyTime',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      projectId: 'ProjectId',
      recurrence: 'Recurrence',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      strategy: 'Strategy',
      tags: 'Tags',
      taskId: 'TaskId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListNodesResponseBodyPagingInfoNodesDataSource,
      description: 'string',
      id: 'string',
      inputs: ListNodesResponseBodyPagingInfoNodesInputs,
      modifyTime: 'number',
      name: 'string',
      outputs: ListNodesResponseBodyPagingInfoNodesOutputs,
      owner: 'string',
      projectId: 'string',
      recurrence: 'string',
      runtimeResource: ListNodesResponseBodyPagingInfoNodesRuntimeResource,
      script: ListNodesResponseBodyPagingInfoNodesScript,
      strategy: ListNodesResponseBodyPagingInfoNodesStrategy,
      tags: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesTags },
      taskId: 'string',
      trigger: ListNodesResponseBodyPagingInfoNodesTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfo extends $tea.Model {
  nodes?: ListNodesResponseBodyPagingInfoNodes[];
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
   * 42
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodes },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequestAliyunResourceTags extends $tea.Model {
  /**
   * @example
   * batch
   */
  key?: string;
  /**
   * @example
   * blue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags extends $tea.Model {
  /**
   * @example
   * batch
   */
  key?: string;
  /**
   * @example
   * blue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyPagingInfoProjects extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zfa
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTags?: ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags[];
  description?: string;
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * false
   */
  devRoleDisabled?: boolean;
  displayName?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @example
   * 123532153125
   */
  owner?: string;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags },
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyPagingInfo extends $tea.Model {
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
  projects?: ListProjectsResponseBodyPagingInfoProjects[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projects: 'Projects',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyPagingInfoProjects },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResourcesDataSource extends $tea.Model {
  /**
   * @remarks
   * 数据源名称
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResourcesScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * ODPS_PYTHON
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResourcesScript extends $tea.Model {
  /**
   * @remarks
   * 工作流脚本的id
   * 
   * @example
   * 123348864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * 工作流的脚本路径
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResources extends $tea.Model {
  /**
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * 函数注册到的数据源信息
   */
  dataSource?: ListResourcesResponseBodyPagingInfoResourcesDataSource;
  /**
   * @remarks
   * 代表资源组的资源属性字段
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * 资源文件的最近修改时间
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * math.py
   */
  name?: string;
  /**
   * @remarks
   * 资源文件的责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * 资源文件的项目id
   * 
   * @example
   * 344247
   */
  projectId?: string;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListResourcesResponseBodyPagingInfoResourcesScript;
  /**
   * @remarks
   * 文件目标存储路径
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  sourcePath?: string;
  /**
   * @remarks
   * 文件资源来源存储类型
   * 
   * @example
   * local
   */
  sourceType?: string;
  /**
   * @remarks
   * 文件来源路径
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  targetPath?: string;
  /**
   * @remarks
   * 文件目标存储类型
   * 
   * @example
   * oss
   */
  targetType?: string;
  /**
   * @remarks
   * 资源类型
   * 
   * @example
   * jar
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      script: 'Script',
      sourcePath: 'SourcePath',
      sourceType: 'SourceType',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListResourcesResponseBodyPagingInfoResourcesDataSource,
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      script: ListResourcesResponseBodyPagingInfoResourcesScript,
      sourcePath: 'string',
      sourceType: 'string',
      targetPath: 'string',
      targetType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfo extends $tea.Model {
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
  resources?: ListResourcesResponseBodyPagingInfoResources[];
  /**
   * @example
   * 131
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyPagingInfoResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * WORKFLOW
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript extends $tea.Model {
  /**
   * @remarks
   * 工作流脚本的id
   * 
   * @example
   * 698002781368644XXXX
   */
  id?: string;
  /**
   * @remarks
   * 工作流的脚本路径
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions extends $tea.Model {
  /**
   * @remarks
   * 工作流的创建时间
   * 
   * @example
   * 1698057323000
   */
  createTime?: number;
  /**
   * @remarks
   * 工作流的描述
   */
  description?: string;
  /**
   * @remarks
   * 工作流定义的唯一ID
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * 工作流的最近修改时间
   * 
   * @example
   * 1698057323000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 工作流的名称
   */
  name?: string;
  /**
   * @remarks
   * 工作流的责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * 工作流定义的所属项目空间
   * 
   * This parameter is required.
   * 
   * @example
   * 4710
   */
  projectId?: string;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript;
  /**
   * @remarks
   * 工作流类型，可选值：CycleWorkflow、ManualWorkflow，分别表示周期工作流和手动工作流
   * 
   * @example
   * CycleWorkflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      script: 'Script',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      script: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfo extends $tea.Model {
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
   * 227
   */
  totalCount?: number;
  workflowDefinitions?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      workflowDefinitions: 'WorkflowDefinitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      workflowDefinitions: { 'type': 'array', 'itemType': ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobRequestRealtimeStartSettingsFailoverSettings extends $tea.Model {
  /**
   * @example
   * 10
   */
  interval?: number;
  /**
   * @example
   * 30
   */
  upperLimit?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      upperLimit: 'UpperLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      upperLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobRequestRealtimeStartSettings extends $tea.Model {
  failoverSettings?: StartDIJobRequestRealtimeStartSettingsFailoverSettings;
  /**
   * @example
   * 1671516776
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      failoverSettings: 'FailoverSettings',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverSettings: StartDIJobRequestRealtimeStartSettingsFailoverSettings,
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsColumnDataTypeSettings extends $tea.Model {
  /**
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @example
   * bigint
   */
  sourceDataType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataType: 'DestinationDataType',
      sourceDataType: 'SourceDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataType: 'string',
      sourceDataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsCycleScheduleSettings extends $tea.Model {
  /**
   * @example
   * bizdate=$bizdate
   */
  scheduleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsDdlHandlingSettings extends $tea.Model {
  /**
   * @example
   * Critical
   */
  action?: string;
  /**
   * @example
   * AddColumn
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsRuntimeSettings extends $tea.Model {
  /**
   * @example
   * runtime.offline.concurrent
   */
  name?: string;
  /**
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettings extends $tea.Model {
  /**
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  columnDataTypeSettings?: UpdateDIJobRequestJobSettingsColumnDataTypeSettings[];
  cycleScheduleSettings?: UpdateDIJobRequestJobSettingsCycleScheduleSettings;
  ddlHandlingSettings?: UpdateDIJobRequestJobSettingsDdlHandlingSettings[];
  runtimeSettings?: UpdateDIJobRequestJobSettingsRuntimeSettings[];
  static names(): { [key: string]: string } {
    return {
      channelSettings: 'ChannelSettings',
      columnDataTypeSettings: 'ColumnDataTypeSettings',
      cycleScheduleSettings: 'CycleScheduleSettings',
      ddlHandlingSettings: 'DdlHandlingSettings',
      runtimeSettings: 'RuntimeSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSettings: 'string',
      columnDataTypeSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: UpdateDIJobRequestJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsRuntimeSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettingsOfflineResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettingsRealtimeResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettingsScheduleResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_235454102432001_1721021993437
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettings extends $tea.Model {
  offlineResourceSettings?: UpdateDIJobRequestResourceSettingsOfflineResourceSettings;
  realtimeResourceSettings?: UpdateDIJobRequestResourceSettingsRealtimeResourceSettings;
  scheduleResourceSettings?: UpdateDIJobRequestResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: UpdateDIJobRequestResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: UpdateDIJobRequestResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: UpdateDIJobRequestResourceSettingsScheduleResourceSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTableMappingsSourceObjectSelectionRules extends $tea.Model {
  /**
   * @example
   * Include
   */
  action?: string;
  /**
   * @example
   * mysql_table_1
   */
  expression?: string;
  /**
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @example
   * Table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      expression: 'Expression',
      expressionType: 'ExpressionType',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      expression: 'string',
      expressionType: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTableMappingsTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTableMappings extends $tea.Model {
  sourceObjectSelectionRules?: UpdateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  transformationRules?: UpdateDIJobRequestTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappingsTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "dataworks.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "dataworks.ap-south-1.aliyuncs.com",
      'ap-southeast-1': "dataworks.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dataworks.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dataworks.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dataworks.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dataworks.cn-beijing.aliyuncs.com",
      'cn-chengdu': "dataworks.cn-chengdu.aliyuncs.com",
      'cn-hangzhou': "dataworks.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dataworks.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "dataworks.aliyuncs.com",
      'cn-qingdao': "dataworks.aliyuncs.com",
      'cn-shanghai': "dataworks.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "dataworks.cn-shenzhen.aliyuncs.com",
      'cn-zhangjiakou': "dataworks.aliyuncs.com",
      'eu-central-1': "dataworks.eu-central-1.aliyuncs.com",
      'eu-west-1': "dataworks.eu-west-1.aliyuncs.com",
      'me-east-1': "dataworks.me-east-1.aliyuncs.com",
      'us-east-1': "dataworks.us-east-1.aliyuncs.com",
      'us-west-1': "dataworks.us-west-1.aliyuncs.com",
      'cn-hangzhou-finance': "dataworks.aliyuncs.com",
      'cn-shenzhen-finance-1': "dataworks.aliyuncs.com",
      'cn-shanghai-finance-1': "dataworks.aliyuncs.com",
      'cn-north-2-gov-1': "dataworks.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dataworks-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 终止发布流程
   * 
   * @param request - AbolishDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbolishDeploymentResponse
   */
  async abolishDeploymentWithOptions(request: AbolishDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<AbolishDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AbolishDeployment",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbolishDeploymentResponse>(await this.callApi(params, req, runtime), new AbolishDeploymentResponse({}));
  }

  /**
   * 终止发布流程
   * 
   * @param request - AbolishDeploymentRequest
   * @returns AbolishDeploymentResponse
   */
  async abolishDeployment(request: AbolishDeploymentRequest): Promise<AbolishDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishDeploymentWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - CloneDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneDataSourceResponse
   */
  async cloneDataSourceWithOptions(request: CloneDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CloneDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cloneDataSourceName)) {
      query["CloneDataSourceName"] = request.cloneDataSourceName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloneDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloneDataSourceResponse>(await this.callApi(params, req, runtime), new CloneDataSourceResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - CloneDataSourceRequest
   * @returns CloneDataSourceResponse
   */
  async cloneDataSource(request: CloneDataSourceRequest): Promise<CloneDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneDataSourceWithOptions(request, runtime);
  }

  /**
   * 创建数据集成任务
   * 
   * @param tmpReq - CreateDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDIJobResponse
   */
  async createDIJobWithOptions(tmpReq: CreateDIJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateDIJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destinationDataSourceSettings)) {
      request.destinationDataSourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationDataSourceSettings, "DestinationDataSourceSettings", "json");
    }

    if (!Util.isUnset(tmpReq.jobSettings)) {
      request.jobSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSettings, "JobSettings", "json");
    }

    if (!Util.isUnset(tmpReq.resourceSettings)) {
      request.resourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSettings, "ResourceSettings", "json");
    }

    if (!Util.isUnset(tmpReq.sourceDataSourceSettings)) {
      request.sourceDataSourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceDataSourceSettings, "SourceDataSourceSettings", "json");
    }

    if (!Util.isUnset(tmpReq.tableMappings)) {
      request.tableMappingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableMappings, "TableMappings", "json");
    }

    if (!Util.isUnset(tmpReq.transformationRules)) {
      request.transformationRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transformationRules, "TransformationRules", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDIJobResponse>(await this.callApi(params, req, runtime), new CreateDIJobResponse({}));
  }

  /**
   * 创建数据集成任务
   * 
   * @param request - CreateDIJobRequest
   * @returns CreateDIJobResponse
   */
  async createDIJob(request: CreateDIJobRequest): Promise<CreateDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDIJobWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - CreateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
   */
  async createDataSourceWithOptions(request: CreateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionProperties)) {
      query["ConnectionProperties"] = request.connectionProperties;
    }

    if (!Util.isUnset(request.connectionPropertiesMode)) {
      query["ConnectionPropertiesMode"] = request.connectionPropertiesMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataSourceResponse>(await this.callApi(params, req, runtime), new CreateDataSourceResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - CreateDataSourceSharedRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceSharedRuleResponse
   */
  async createDataSourceSharedRuleWithOptions(request: CreateDataSourceSharedRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceSharedRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.sharedUser)) {
      query["SharedUser"] = request.sharedUser;
    }

    if (!Util.isUnset(request.targetProjectId)) {
      query["TargetProjectId"] = request.targetProjectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataSourceSharedRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataSourceSharedRuleResponse>(await this.callApi(params, req, runtime), new CreateDataSourceSharedRuleResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - CreateDataSourceSharedRuleRequest
   * @returns CreateDataSourceSharedRuleResponse
   */
  async createDataSourceSharedRule(request: CreateDataSourceSharedRuleRequest): Promise<CreateDataSourceSharedRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataSourceSharedRuleWithOptions(request, runtime);
  }

  /**
   * 创建发布流程
   * 
   * @param tmpReq - CreateDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentResponse
   */
  async createDeploymentWithOptions(tmpReq: CreateDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeploymentResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDeploymentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.objectIds)) {
      request.objectIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectIds, "ObjectIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.objectIdsShrink)) {
      body["ObjectIds"] = request.objectIdsShrink;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeployment",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeploymentResponse>(await this.callApi(params, req, runtime), new CreateDeploymentResponse({}));
  }

  /**
   * 创建发布流程
   * 
   * @param request - CreateDeploymentRequest
   * @returns CreateDeploymentResponse
   */
  async createDeployment(request: CreateDeploymentRequest): Promise<CreateDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeploymentWithOptions(request, runtime);
  }

  /**
   * 创建udf函数
   * 
   * @param request - CreateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionResponse
   */
  async createFunctionWithOptions(request: CreateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionResponse>(await this.callApi(params, req, runtime), new CreateFunctionResponse({}));
  }

  /**
   * 创建udf函数
   * 
   * @param request - CreateFunctionRequest
   * @returns CreateFunctionResponse
   */
  async createFunction(request: CreateFunctionRequest): Promise<CreateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFunctionWithOptions(request, runtime);
  }

  /**
   * 创建节点
   * 
   * @param request - CreateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeResponse
   */
  async createNodeWithOptions(request: CreateNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.containerId)) {
      body["ContainerId"] = request.containerId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNodeResponse>(await this.callApi(params, req, runtime), new CreateNodeResponse({}));
  }

  /**
   * 创建节点
   * 
   * @param request - CreateNodeRequest
   * @returns CreateNodeResponse
   */
  async createNode(request: CreateNodeRequest): Promise<CreateNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodeWithOptions(request, runtime);
  }

  /**
   * 创建工作空间
   * 
   * @param tmpReq - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(tmpReq: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aliyunResourceTags)) {
      request.aliyunResourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aliyunResourceTags, "AliyunResourceTags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunResourceGroupId)) {
      body["AliyunResourceGroupId"] = request.aliyunResourceGroupId;
    }

    if (!Util.isUnset(request.aliyunResourceTagsShrink)) {
      body["AliyunResourceTags"] = request.aliyunResourceTagsShrink;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.devEnvironmentEnabled)) {
      body["DevEnvironmentEnabled"] = request.devEnvironmentEnabled;
    }

    if (!Util.isUnset(request.devRoleDisabled)) {
      body["DevRoleDisabled"] = request.devRoleDisabled;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.paiTaskEnabled)) {
      body["PaiTaskEnabled"] = request.paiTaskEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * 创建资源文件
   * 
   * @param request - CreateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(request: CreateResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceResponse>(await this.callApi(params, req, runtime), new CreateResourceResponse({}));
  }

  /**
   * 创建资源文件
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceWithOptions(request, runtime);
  }

  /**
   * 创建工作流
   * 
   * @param request - CreateWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowDefinitionResponse
   */
  async createWorkflowDefinitionWithOptions(request: CreateWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new CreateWorkflowDefinitionResponse({}));
  }

  /**
   * 创建工作流
   * 
   * @param request - CreateWorkflowDefinitionRequest
   * @returns CreateWorkflowDefinitionResponse
   */
  async createWorkflowDefinition(request: CreateWorkflowDefinitionRequest): Promise<CreateWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 删除数据集成任务
   * 
   * @param request - DeleteDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDIJobResponse
   */
  async deleteDIJobWithOptions(request: DeleteDIJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDIJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDIJobResponse>(await this.callApi(params, req, runtime), new DeleteDIJobResponse({}));
  }

  /**
   * 删除数据集成任务
   * 
   * @param request - DeleteDIJobRequest
   * @returns DeleteDIJobResponse
   */
  async deleteDIJob(request: DeleteDIJobRequest): Promise<DeleteDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDIJobWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - DeleteDataSourceSharedRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceSharedRuleResponse
   */
  async deleteDataSourceSharedRuleWithOptions(request: DeleteDataSourceSharedRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceSharedRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSourceSharedRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceSharedRuleResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceSharedRuleResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - DeleteDataSourceSharedRuleRequest
   * @returns DeleteDataSourceSharedRuleResponse
   */
  async deleteDataSourceSharedRule(request: DeleteDataSourceSharedRuleRequest): Promise<DeleteDataSourceSharedRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceSharedRuleWithOptions(request, runtime);
  }

  /**
   * 删除udf函数
   * 
   * @param request - DeleteFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionResponse
   */
  async deleteFunctionWithOptions(request: DeleteFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFunctionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionResponse({}));
  }

  /**
   * 删除udf函数
   * 
   * @param request - DeleteFunctionRequest
   * @returns DeleteFunctionResponse
   */
  async deleteFunction(request: DeleteFunctionRequest): Promise<DeleteFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFunctionWithOptions(request, runtime);
  }

  /**
   * 删除节点
   * 
   * @param request - DeleteNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodeResponse
   */
  async deleteNodeWithOptions(request: DeleteNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNodeResponse>(await this.callApi(params, req, runtime), new DeleteNodeResponse({}));
  }

  /**
   * 删除节点
   * 
   * @param request - DeleteNodeRequest
   * @returns DeleteNodeResponse
   */
  async deleteNode(request: DeleteNodeRequest): Promise<DeleteNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodeWithOptions(request, runtime);
  }

  /**
   * 销毁工作空间
   * 
   * @param request - DeleteProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  /**
   * 销毁工作空间
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * 删除资源文件
   * 
   * @param request - DeleteResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(request: DeleteResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceResponse>(await this.callApi(params, req, runtime), new DeleteResourceResponse({}));
  }

  /**
   * 删除资源文件
   * 
   * @param request - DeleteResourceRequest
   * @returns DeleteResourceResponse
   */
  async deleteResource(request: DeleteResourceRequest): Promise<DeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceWithOptions(request, runtime);
  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowDefinitionResponse
   */
  async deleteWorkflowDefinitionWithOptions(request: DeleteWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new DeleteWorkflowDefinitionResponse({}));
  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowDefinitionRequest
   * @returns DeleteWorkflowDefinitionResponse
   */
  async deleteWorkflowDefinition(request: DeleteWorkflowDefinitionRequest): Promise<DeleteWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 执行Deployment一个阶段
   * 
   * @param request - ExecDeploymentStageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDeploymentStageResponse
   */
  async execDeploymentStageWithOptions(request: ExecDeploymentStageRequest, runtime: $Util.RuntimeOptions): Promise<ExecDeploymentStageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecDeploymentStage",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecDeploymentStageResponse>(await this.callApi(params, req, runtime), new ExecDeploymentStageResponse({}));
  }

  /**
   * 执行Deployment一个阶段
   * 
   * @param request - ExecDeploymentStageRequest
   * @returns ExecDeploymentStageResponse
   */
  async execDeploymentStage(request: ExecDeploymentStageRequest): Promise<ExecDeploymentStageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execDeploymentStageWithOptions(request, runtime);
  }

  /**
   * 查看数据集成任务
   * 
   * @param request - GetDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDIJobResponse
   */
  async getDIJobWithOptions(request: GetDIJobRequest, runtime: $Util.RuntimeOptions): Promise<GetDIJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDIJobResponse>(await this.callApi(params, req, runtime), new GetDIJobResponse({}));
  }

  /**
   * 查看数据集成任务
   * 
   * @param request - GetDIJobRequest
   * @returns GetDIJobResponse
   */
  async getDIJob(request: GetDIJobRequest): Promise<GetDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDIJobWithOptions(request, runtime);
  }

  /**
   * 获取数据集成任务日志
   * 
   * @param request - GetDIJobLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDIJobLogResponse
   */
  async getDIJobLogWithOptions(request: GetDIJobLogRequest, runtime: $Util.RuntimeOptions): Promise<GetDIJobLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDIJobLog",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDIJobLogResponse>(await this.callApi(params, req, runtime), new GetDIJobLogResponse({}));
  }

  /**
   * 获取数据集成任务日志
   * 
   * @param request - GetDIJobLogRequest
   * @returns GetDIJobLogResponse
   */
  async getDIJobLog(request: GetDIJobLogRequest): Promise<GetDIJobLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDIJobLogWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - GetDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceResponse
   */
  async getDataSourceWithOptions(request: GetDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<GetDataSourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceResponse>(await this.callApi(params, req, runtime), new GetDataSourceResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - GetDataSourceRequest
   * @returns GetDataSourceResponse
   */
  async getDataSource(request: GetDataSourceRequest): Promise<GetDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataSourceWithOptions(request, runtime);
  }

  /**
   * 获取发布流程详情
   * 
   * @param request - GetDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentResponse
   */
  async getDeploymentWithOptions(request: GetDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<GetDeploymentResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeployment",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentResponse>(await this.callApi(params, req, runtime), new GetDeploymentResponse({}));
  }

  /**
   * 获取发布流程详情
   * 
   * @param request - GetDeploymentRequest
   * @returns GetDeploymentResponse
   */
  async getDeployment(request: GetDeploymentRequest): Promise<GetDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeploymentWithOptions(request, runtime);
  }

  /**
   * 获取函数信息
   * 
   * @param request - GetFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionResponse
   */
  async getFunctionWithOptions(request: GetFunctionRequest, runtime: $Util.RuntimeOptions): Promise<GetFunctionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionResponse>(await this.callApi(params, req, runtime), new GetFunctionResponse({}));
  }

  /**
   * 获取函数信息
   * 
   * @param request - GetFunctionRequest
   * @returns GetFunctionResponse
   */
  async getFunction(request: GetFunctionRequest): Promise<GetFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFunctionWithOptions(request, runtime);
  }

  /**
   * @param request - GetNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeResponse
   */
  async getNodeWithOptions(request: GetNodeRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeResponse>(await this.callApi(params, req, runtime), new GetNodeResponse({}));
  }

  /**
   * @param request - GetNodeRequest
   * @returns GetNodeResponse
   */
  async getNode(request: GetNodeRequest): Promise<GetNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeWithOptions(request, runtime);
  }

  /**
   * 查询工作空间详情
   * 
   * @param request - GetProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(request: GetProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  /**
   * 查询工作空间详情
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  /**
   * 获取资源文件
   * 
   * @param request - GetResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceResponse
   */
  async getResourceWithOptions(request: GetResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceResponse>(await this.callApi(params, req, runtime), new GetResourceResponse({}));
  }

  /**
   * 获取资源文件
   * 
   * @param request - GetResourceRequest
   * @returns GetResourceResponse
   */
  async getResource(request: GetResourceRequest): Promise<GetResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceWithOptions(request, runtime);
  }

  /**
   * 获取工作流详情
   * 
   * @param request - GetWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowDefinitionResponse
   */
  async getWorkflowDefinitionWithOptions(request: GetWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new GetWorkflowDefinitionResponse({}));
  }

  /**
   * 获取工作流详情
   * 
   * @param request - GetWorkflowDefinitionRequest
   * @returns GetWorkflowDefinitionResponse
   */
  async getWorkflowDefinition(request: GetWorkflowDefinitionRequest): Promise<GetWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 获取数据集成任务事件
   * 
   * @param request - ListDIJobEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobEventsResponse
   */
  async listDIJobEventsWithOptions(request: ListDIJobEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListDIJobEventsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDIJobEvents",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDIJobEventsResponse>(await this.callApi(params, req, runtime), new ListDIJobEventsResponse({}));
  }

  /**
   * 获取数据集成任务事件
   * 
   * @param request - ListDIJobEventsRequest
   * @returns ListDIJobEventsResponse
   */
  async listDIJobEvents(request: ListDIJobEventsRequest): Promise<ListDIJobEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIJobEventsWithOptions(request, runtime);
  }

  /**
   * 获取数据集成任务指标
   * 
   * @param tmpReq - ListDIJobMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobMetricsResponse
   */
  async listDIJobMetricsWithOptions(tmpReq: ListDIJobMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListDIJobMetricsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDIJobMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.metricName)) {
      request.metricNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricName, "MetricName", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDIJobMetrics",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDIJobMetricsResponse>(await this.callApi(params, req, runtime), new ListDIJobMetricsResponse({}));
  }

  /**
   * 获取数据集成任务指标
   * 
   * @param request - ListDIJobMetricsRequest
   * @returns ListDIJobMetricsResponse
   */
  async listDIJobMetrics(request: ListDIJobMetricsRequest): Promise<ListDIJobMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIJobMetricsWithOptions(request, runtime);
  }

  /**
   * 获取数据集成任务
   * 
   * @param request - ListDIJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobsResponse
   */
  async listDIJobsWithOptions(request: ListDIJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListDIJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDIJobs",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDIJobsResponse>(await this.callApi(params, req, runtime), new ListDIJobsResponse({}));
  }

  /**
   * 获取数据集成任务
   * 
   * @param request - ListDIJobsRequest
   * @returns ListDIJobsResponse
   */
  async listDIJobs(request: ListDIJobsRequest): Promise<ListDIJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIJobsWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - ListDataSourceSharedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceSharedRulesResponse
   */
  async listDataSourceSharedRulesWithOptions(request: ListDataSourceSharedRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourceSharedRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSourceSharedRules",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceSharedRulesResponse>(await this.callApi(params, req, runtime), new ListDataSourceSharedRulesResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - ListDataSourceSharedRulesRequest
   * @returns ListDataSourceSharedRulesResponse
   */
  async listDataSourceSharedRules(request: ListDataSourceSharedRulesRequest): Promise<ListDataSourceSharedRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceSharedRulesWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param tmpReq - ListDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(tmpReq: ListDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDataSourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSources",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourcesResponse>(await this.callApi(params, req, runtime), new ListDataSourcesResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(request: ListDataSourcesRequest): Promise<ListDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  /**
   * 分页获取发布流程
   * 
   * @param request - ListDeploymentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentsResponse
   */
  async listDeploymentsWithOptions(request: ListDeploymentsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeploymentsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployments",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentsResponse>(await this.callApi(params, req, runtime), new ListDeploymentsResponse({}));
  }

  /**
   * 分页获取发布流程
   * 
   * @param request - ListDeploymentsRequest
   * @returns ListDeploymentsResponse
   */
  async listDeployments(request: ListDeploymentsRequest): Promise<ListDeploymentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeploymentsWithOptions(request, runtime);
  }

  /**
   * 获取udf函数列表
   * 
   * @param request - ListFunctionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionsResponse
   */
  async listFunctionsWithOptions(request: ListFunctionsRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
  }

  /**
   * 获取udf函数列表
   * 
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionsWithOptions(request, runtime);
  }

  /**
   * 获取节点依赖列表
   * 
   * @param request - ListNodeDependenciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeDependenciesResponse
   */
  async listNodeDependenciesWithOptions(request: ListNodeDependenciesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeDependenciesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeDependencies",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeDependenciesResponse>(await this.callApi(params, req, runtime), new ListNodeDependenciesResponse({}));
  }

  /**
   * 获取节点依赖列表
   * 
   * @param request - ListNodeDependenciesRequest
   * @returns ListNodeDependenciesResponse
   */
  async listNodeDependencies(request: ListNodeDependenciesRequest): Promise<ListNodeDependenciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeDependenciesWithOptions(request, runtime);
  }

  /**
   * 获取节点列表
   * 
   * @param request - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  /**
   * 获取节点列表
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * 分页查询工作空间详情
   * 
   * @param tmpReq - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aliyunResourceTags)) {
      request.aliyunResourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aliyunResourceTags, "AliyunResourceTags", "json");
    }

    if (!Util.isUnset(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    if (!Util.isUnset(tmpReq.names)) {
      request.namesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.names, "Names", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunResourceGroupId)) {
      body["AliyunResourceGroupId"] = request.aliyunResourceGroupId;
    }

    if (!Util.isUnset(request.aliyunResourceTagsShrink)) {
      body["AliyunResourceTags"] = request.aliyunResourceTagsShrink;
    }

    if (!Util.isUnset(request.devEnvironmentEnabled)) {
      body["DevEnvironmentEnabled"] = request.devEnvironmentEnabled;
    }

    if (!Util.isUnset(request.devRoleDisabled)) {
      body["DevRoleDisabled"] = request.devRoleDisabled;
    }

    if (!Util.isUnset(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!Util.isUnset(request.namesShrink)) {
      body["Names"] = request.namesShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.paiTaskEnabled)) {
      body["PaiTaskEnabled"] = request.paiTaskEnabled;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  /**
   * 分页查询工作空间详情
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * 分页获取资源文件
   * 
   * @param request - ListResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: ListResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResources",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  /**
   * 分页获取资源文件
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  /**
   * 获取workflowDefinition的列表
   * 
   * @param request - ListWorkflowDefinitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowDefinitionsResponse
   */
  async listWorkflowDefinitionsWithOptions(request: ListWorkflowDefinitionsRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkflowDefinitionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkflowDefinitions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkflowDefinitionsResponse>(await this.callApi(params, req, runtime), new ListWorkflowDefinitionsResponse({}));
  }

  /**
   * 获取workflowDefinition的列表
   * 
   * @param request - ListWorkflowDefinitionsRequest
   * @returns ListWorkflowDefinitionsResponse
   */
  async listWorkflowDefinitions(request: ListWorkflowDefinitionsRequest): Promise<ListWorkflowDefinitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkflowDefinitionsWithOptions(request, runtime);
  }

  /**
   * 移动funciton的路径
   * 
   * @param request - MoveFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveFunctionResponse
   */
  async moveFunctionWithOptions(request: MoveFunctionRequest, runtime: $Util.RuntimeOptions): Promise<MoveFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveFunctionResponse>(await this.callApi(params, req, runtime), new MoveFunctionResponse({}));
  }

  /**
   * 移动funciton的路径
   * 
   * @param request - MoveFunctionRequest
   * @returns MoveFunctionResponse
   */
  async moveFunction(request: MoveFunctionRequest): Promise<MoveFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveFunctionWithOptions(request, runtime);
  }

  /**
   * 移动节点路径
   * 
   * @param request - MoveNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveNodeResponse
   */
  async moveNodeWithOptions(request: MoveNodeRequest, runtime: $Util.RuntimeOptions): Promise<MoveNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveNodeResponse>(await this.callApi(params, req, runtime), new MoveNodeResponse({}));
  }

  /**
   * 移动节点路径
   * 
   * @param request - MoveNodeRequest
   * @returns MoveNodeResponse
   */
  async moveNode(request: MoveNodeRequest): Promise<MoveNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveNodeWithOptions(request, runtime);
  }

  /**
   * 移动资源文件路径
   * 
   * @param request - MoveResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceResponse
   */
  async moveResourceWithOptions(request: MoveResourceRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceResponse>(await this.callApi(params, req, runtime), new MoveResourceResponse({}));
  }

  /**
   * 移动资源文件路径
   * 
   * @param request - MoveResourceRequest
   * @returns MoveResourceResponse
   */
  async moveResource(request: MoveResourceRequest): Promise<MoveResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceWithOptions(request, runtime);
  }

  /**
   * 移动工作流的路径
   * 
   * @param request - MoveWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveWorkflowDefinitionResponse
   */
  async moveWorkflowDefinitionWithOptions(request: MoveWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<MoveWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new MoveWorkflowDefinitionResponse({}));
  }

  /**
   * 移动工作流的路径
   * 
   * @param request - MoveWorkflowDefinitionRequest
   * @returns MoveWorkflowDefinitionResponse
   */
  async moveWorkflowDefinition(request: MoveWorkflowDefinitionRequest): Promise<MoveWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 对function重命名
   * 
   * @param request - RenameFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameFunctionResponse
   */
  async renameFunctionWithOptions(request: RenameFunctionRequest, runtime: $Util.RuntimeOptions): Promise<RenameFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameFunctionResponse>(await this.callApi(params, req, runtime), new RenameFunctionResponse({}));
  }

  /**
   * 对function重命名
   * 
   * @param request - RenameFunctionRequest
   * @returns RenameFunctionResponse
   */
  async renameFunction(request: RenameFunctionRequest): Promise<RenameFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameFunctionWithOptions(request, runtime);
  }

  /**
   * 重命名节点
   * 
   * @param request - RenameNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameNodeResponse
   */
  async renameNodeWithOptions(request: RenameNodeRequest, runtime: $Util.RuntimeOptions): Promise<RenameNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameNodeResponse>(await this.callApi(params, req, runtime), new RenameNodeResponse({}));
  }

  /**
   * 重命名节点
   * 
   * @param request - RenameNodeRequest
   * @returns RenameNodeResponse
   */
  async renameNode(request: RenameNodeRequest): Promise<RenameNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameNodeWithOptions(request, runtime);
  }

  /**
   * 对资源文件重命名
   * 
   * @param request - RenameResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameResourceResponse
   */
  async renameResourceWithOptions(request: RenameResourceRequest, runtime: $Util.RuntimeOptions): Promise<RenameResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameResourceResponse>(await this.callApi(params, req, runtime), new RenameResourceResponse({}));
  }

  /**
   * 对资源文件重命名
   * 
   * @param request - RenameResourceRequest
   * @returns RenameResourceResponse
   */
  async renameResource(request: RenameResourceRequest): Promise<RenameResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameResourceWithOptions(request, runtime);
  }

  /**
   * 重命名工作流
   * 
   * @param request - RenameWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameWorkflowDefinitionResponse
   */
  async renameWorkflowDefinitionWithOptions(request: RenameWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<RenameWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenameWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new RenameWorkflowDefinitionResponse({}));
  }

  /**
   * 重命名工作流
   * 
   * @param request - RenameWorkflowDefinitionRequest
   * @returns RenameWorkflowDefinitionResponse
   */
  async renameWorkflowDefinition(request: RenameWorkflowDefinitionRequest): Promise<RenameWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 启动数据集成任务
   * 
   * @param tmpReq - StartDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDIJobResponse
   */
  async startDIJobWithOptions(tmpReq: StartDIJobRequest, runtime: $Util.RuntimeOptions): Promise<StartDIJobResponse> {
    Util.validateModel(tmpReq);
    let request = new StartDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.realtimeStartSettings)) {
      request.realtimeStartSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.realtimeStartSettings, "RealtimeStartSettings", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDIJobResponse>(await this.callApi(params, req, runtime), new StartDIJobResponse({}));
  }

  /**
   * 启动数据集成任务
   * 
   * @param request - StartDIJobRequest
   * @returns StartDIJobResponse
   */
  async startDIJob(request: StartDIJobRequest): Promise<StartDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDIJobWithOptions(request, runtime);
  }

  /**
   * 更新数据集成任务
   * 
   * @param tmpReq - UpdateDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDIJobResponse
   */
  async updateDIJobWithOptions(tmpReq: UpdateDIJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDIJobResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobSettings)) {
      request.jobSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSettings, "JobSettings", "json");
    }

    if (!Util.isUnset(tmpReq.resourceSettings)) {
      request.resourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSettings, "ResourceSettings", "json");
    }

    if (!Util.isUnset(tmpReq.tableMappings)) {
      request.tableMappingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableMappings, "TableMappings", "json");
    }

    if (!Util.isUnset(tmpReq.transformationRules)) {
      request.transformationRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transformationRules, "TransformationRules", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDIJobResponse>(await this.callApi(params, req, runtime), new UpdateDIJobResponse({}));
  }

  /**
   * 更新数据集成任务
   * 
   * @param request - UpdateDIJobRequest
   * @returns UpdateDIJobResponse
   */
  async updateDIJob(request: UpdateDIJobRequest): Promise<UpdateDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDIJobWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - UpdateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceResponse
   */
  async updateDataSourceWithOptions(request: UpdateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionProperties)) {
      query["ConnectionProperties"] = request.connectionProperties;
    }

    if (!Util.isUnset(request.connectionPropertiesMode)) {
      query["ConnectionPropertiesMode"] = request.connectionPropertiesMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataSourceResponse>(await this.callApi(params, req, runtime), new UpdateDataSourceResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - UpdateDataSourceRequest
   * @returns UpdateDataSourceResponse
   */
  async updateDataSource(request: UpdateDataSourceRequest): Promise<UpdateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  /**
   * 更新udf函数
   * 
   * @param request - UpdateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionResponse
   */
  async updateFunctionWithOptions(request: UpdateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionResponse>(await this.callApi(params, req, runtime), new UpdateFunctionResponse({}));
  }

  /**
   * 更新udf函数
   * 
   * @param request - UpdateFunctionRequest
   * @returns UpdateFunctionResponse
   */
  async updateFunction(request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFunctionWithOptions(request, runtime);
  }

  /**
   * 更新节点
   * 
   * @param request - UpdateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodeResponse
   */
  async updateNodeWithOptions(request: UpdateNodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNodeResponse>(await this.callApi(params, req, runtime), new UpdateNodeResponse({}));
  }

  /**
   * 更新节点
   * 
   * @param request - UpdateNodeRequest
   * @returns UpdateNodeResponse
   */
  async updateNode(request: UpdateNodeRequest): Promise<UpdateNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNodeWithOptions(request, runtime);
  }

  /**
   * 更新工作空间
   * 
   * @param request - UpdateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.devEnvironmentEnabled)) {
      body["DevEnvironmentEnabled"] = request.devEnvironmentEnabled;
    }

    if (!Util.isUnset(request.devRoleDisabled)) {
      body["DevRoleDisabled"] = request.devRoleDisabled;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.paiTaskEnabled)) {
      body["PaiTaskEnabled"] = request.paiTaskEnabled;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  /**
   * 更新工作空间
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  /**
   * 更新资源文件
   * 
   * @param request - UpdateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(request: UpdateResourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceResponse>(await this.callApi(params, req, runtime), new UpdateResourceResponse({}));
  }

  /**
   * 更新资源文件
   * 
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(request: UpdateResourceRequest): Promise<UpdateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceWithOptions(request, runtime);
  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowDefinitionResponse
   */
  async updateWorkflowDefinitionWithOptions(request: UpdateWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new UpdateWorkflowDefinitionResponse({}));
  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowDefinitionRequest
   * @returns UpdateWorkflowDefinitionResponse
   */
  async updateWorkflowDefinition(request: UpdateWorkflowDefinitionRequest): Promise<UpdateWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkflowDefinitionWithOptions(request, runtime);
  }

}
