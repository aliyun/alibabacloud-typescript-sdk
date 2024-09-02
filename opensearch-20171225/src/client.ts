// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ABTestExperiment extends $tea.Model {
  name?: string;
  online?: boolean;
  params?: { [key: string]: string };
  serialNumber?: number;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      online: 'online',
      params: 'params',
      serialNumber: 'serialNumber',
      traffic: 'traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      online: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serialNumber: 'number',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ABTestGroup extends $tea.Model {
  name?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ABTestScene extends $tea.Model {
  name?: string;
  /**
   * @example
   * 0 停止实验 1 开通实验
   */
  status?: number;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class App extends $tea.Model {
  autoSwitch?: boolean;
  cluster?: AppCluster;
  dataSources?: DataSource[];
  description?: string;
  domain?: Domain;
  fetchFields?: string[];
  firstRanks?: FirstRank[];
  networkType?: string;
  queryProcessors?: QueryProcessor[];
  quota?: Quota;
  realtimeShared?: boolean;
  schema?: Schema;
  schemas?: Schema[];
  secondRanks?: SecondRank[];
  summaries?: Summary[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoSwitch: 'autoSwitch',
      cluster: 'cluster',
      dataSources: 'dataSources',
      description: 'description',
      domain: 'domain',
      fetchFields: 'fetchFields',
      firstRanks: 'firstRanks',
      networkType: 'networkType',
      queryProcessors: 'queryProcessors',
      quota: 'quota',
      realtimeShared: 'realtimeShared',
      schema: 'schema',
      schemas: 'schemas',
      secondRanks: 'secondRanks',
      summaries: 'summaries',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitch: 'boolean',
      cluster: AppCluster,
      dataSources: { 'type': 'array', 'itemType': DataSource },
      description: 'string',
      domain: Domain,
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      firstRanks: { 'type': 'array', 'itemType': FirstRank },
      networkType: 'string',
      queryProcessors: { 'type': 'array', 'itemType': QueryProcessor },
      quota: Quota,
      realtimeShared: 'boolean',
      schema: Schema,
      schemas: { 'type': 'array', 'itemType': Schema },
      secondRanks: { 'type': 'array', 'itemType': SecondRank },
      summaries: { 'type': 'array', 'itemType': Summary },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGroup extends $tea.Model {
  chargeType?: string;
  description?: string;
  domain?: string;
  name?: string;
  order?: AppGroupOrder;
  quota?: Quota;
  resourceGroupId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      description: 'description',
      domain: 'domain',
      name: 'name',
      order: 'order',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      description: 'string',
      domain: 'string',
      name: 'string',
      order: AppGroupOrder,
      quota: Quota,
      resourceGroupId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSource extends $tea.Model {
  fields?: { [key: string]: string }[];
  keyField?: string;
  parameters?: { [key: string]: any };
  plugins?: { [key: string]: DataSourcePluginsValue };
  schemaName?: string;
  tableName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      keyField: 'keyField',
      parameters: 'parameters',
      plugins: 'plugins',
      schemaName: 'schemaName',
      tableName: 'tableName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      keyField: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plugins: { 'type': 'map', 'keyType': 'string', 'valueType': DataSourcePluginsValue },
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Domain extends $tea.Model {
  category?: string;
  functions?: { [key: string]: string[] };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      functions: 'functions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      functions: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FirstRank extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepayOrderInfo extends $tea.Model {
  autoRenew?: boolean;
  duration?: number;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      duration: 'duration',
      pricingCycle: 'pricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProcessor extends $tea.Model {
  active?: boolean;
  category?: string;
  domain?: string;
  indexes?: string[];
  name?: string;
  processors?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      category: 'category',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      category: 'string',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Quota extends $tea.Model {
  computeResource?: number;
  docSize?: number;
  orderType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      orderType: 'orderType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      orderType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledTask extends $tea.Model {
  autoSwitch?: boolean;
  cron?: string;
  enabled?: boolean;
  filter?: ScheduledTaskFilter;
  forkedAppId?: string;
  permanent?: boolean;
  runNow?: boolean;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      autoSwitch: 'autoSwitch',
      cron: 'cron',
      enabled: 'enabled',
      filter: 'filter',
      forkedAppId: 'forkedAppId',
      permanent: 'permanent',
      runNow: 'runNow',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitch: 'boolean',
      cron: 'string',
      enabled: 'boolean',
      filter: ScheduledTaskFilter,
      forkedAppId: 'string',
      permanent: 'boolean',
      runNow: 'boolean',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Schema extends $tea.Model {
  indexSortConfig?: SchemaIndexSortConfig[];
  indexes?: SchemaIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: SchemaTablesValue };
  ttlField?: SchemaTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': SchemaIndexSortConfig },
      indexes: SchemaIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': SchemaTablesValue },
      ttlField: SchemaTtlField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStrategy extends $tea.Model {
  description?: string;
  isDefault?: boolean;
  mergeConfig?: SearchStrategyMergeConfig;
  name?: string;
  searchConfigs?: SearchStrategySearchConfigs[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      isDefault: 'isDefault',
      mergeConfig: 'mergeConfig',
      name: 'name',
      searchConfigs: 'searchConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isDefault: 'boolean',
      mergeConfig: SearchStrategyMergeConfig,
      name: 'string',
      searchConfigs: { 'type': 'array', 'itemType': SearchStrategySearchConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SecondRank extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Summary extends $tea.Model {
  active?: boolean;
  meta?: SummaryMeta;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      meta: SummaryMeta,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSourcePluginsValue extends $tea.Model {
  name?: string;
  fromFields?: string;
  parameters?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      fromFields: 'fromFields',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      fromFields: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemaIndexesSearchFieldsValue extends $tea.Model {
  analyzer?: string;
  analyzerType?: string;
  analyzerGeneration?: string;
  fields?: string[];
  label?: string;
  static names(): { [key: string]: string } {
    return {
      analyzer: 'analyzer',
      analyzerType: 'analyzerType',
      analyzerGeneration: 'analyzerGeneration',
      fields: 'fields',
      label: 'label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzer: 'string',
      analyzerType: 'string',
      analyzerGeneration: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemaTablesValue extends $tea.Model {
  name?: string;
  primaryTable?: boolean;
  fields?: { [key: string]: SchemaTablesValueFieldsValue };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      primaryTable: 'primaryTable',
      fields: 'fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      primaryTable: 'boolean',
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': SchemaTablesValueFieldsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemaTablesValueFieldsValue extends $tea.Model {
  name?: string;
  primaryKey?: boolean;
  type?: string;
  joinWith?: string[];
  label?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      primaryKey: 'primaryKey',
      type: 'type',
      joinWith: 'joinWith',
      label: 'label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      primaryKey: 'boolean',
      type: 'string',
      joinWith: { 'type': 'array', 'itemType': 'string' },
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindESUserAnalyzerRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameters.
   * 
   * @example
   * {
   *   "name": "kevintest-analyzer"
   * }
   */
  body?: any;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindESUserAnalyzerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3AD34CAD-9603-5251-AFF5-3916C848A1D3
   */
  requestId?: string;
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * []
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindESUserAnalyzerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindESUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindESUserAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEsInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The body of the request.
   * 
   * @example
   * {
   *   "esInstanceId": "es-cn-abcde"
   * }
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEsInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5099063-6B86-F398-D843-905F9EFB683A
   */
  requestId?: string;
  /**
   * @remarks
   * The result
   * 
   * @example
   * []
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindEsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindEsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompileSortScriptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
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

export class CompileSortScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompileSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CompileSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestExperimentRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: ABTestExperiment;
  /**
   * @remarks
   * Specifies whether to perform a dry run. This parameter is only used to check whether the data source is valid. Valid values: true and false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ABTestExperiment,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The experiment details.
   */
  result?: CreateABTestExperimentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateABTestExperimentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateABTestExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The request body. For more information, see [ABTestGroup](https://help.aliyun.com/document_detail/178935.html).
   */
  body?: ABTestGroup;
  /**
   * @remarks
   * Specifies whether to check the validity of input parameters. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**: checks only the validity of input parameters.
   * *   **false**: checks the validity of input parameters and creates an attribution configuration.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ABTestGroup,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: CreateABTestGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateABTestGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateABTestGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestSceneRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: ABTestScene;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ABTestScene,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestSceneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   */
  result?: CreateABTestSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateABTestSceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateABTestSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  autoSwitch?: boolean;
  cluster?: CreateAppRequestCluster;
  dataSources?: CreateAppRequestDataSources[];
  description?: string;
  domain?: CreateAppRequestDomain;
  fetchFields?: string[];
  firstRanks?: CreateAppRequestFirstRanks[];
  networkType?: string;
  queryProcessors?: CreateAppRequestQueryProcessors[];
  schema?: CreateAppRequestSchema;
  schemas?: CreateAppRequestSchemas[];
  secondRanks?: CreateAppRequestSecondRanks[];
  summaries?: CreateAppRequestSummaries[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. This parameter is only used to check whether the data source is valid. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoSwitch: 'autoSwitch',
      cluster: 'cluster',
      dataSources: 'dataSources',
      description: 'description',
      domain: 'domain',
      fetchFields: 'fetchFields',
      firstRanks: 'firstRanks',
      networkType: 'networkType',
      queryProcessors: 'queryProcessors',
      schema: 'schema',
      schemas: 'schemas',
      secondRanks: 'secondRanks',
      summaries: 'summaries',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitch: 'boolean',
      cluster: CreateAppRequestCluster,
      dataSources: { 'type': 'array', 'itemType': CreateAppRequestDataSources },
      description: 'string',
      domain: CreateAppRequestDomain,
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      firstRanks: { 'type': 'array', 'itemType': CreateAppRequestFirstRanks },
      networkType: 'string',
      queryProcessors: { 'type': 'array', 'itemType': CreateAppRequestQueryProcessors },
      schema: CreateAppRequestSchema,
      schemas: { 'type': 'array', 'itemType': CreateAppRequestSchemas },
      secondRanks: { 'type': 'array', 'itemType': CreateAppRequestSecondRanks },
      summaries: { 'type': 'array', 'itemType': CreateAppRequestSummaries },
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFG
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   * 
   * @example
   * {}
   */
  result?: CreateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupRequest extends $tea.Model {
  chargeType?: string;
  name?: string;
  quota?: CreateAppGroupRequestQuota;
  resourceGroupId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      name: 'name',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      name: 'string',
      quota: CreateAppGroupRequestQuota,
      resourceGroupId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 766CF6DB-CA02-3E12-7CBA-6AC21FC978FD
   */
  requestId?: string;
  /**
   * @remarks
   * N/A
   */
  result?: CreateAppGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAppGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupCredentialsRequest extends $tea.Model {
  /**
   * @example
   * api-token
   */
  type?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupCredentialsResponseBody extends $tea.Model {
  /**
   * @example
   * 1-2-3-4
   */
  requestId?: string;
  result?: CreateAppGroupCredentialsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAppGroupCredentialsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupCredentialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppGroupCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppGroupCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankRequest extends $tea.Model {
  /**
   * @remarks
   * The request body that contains the parameters of the rough sort expression.
   */
  body?: FirstRank;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: FirstRank,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the rough sort expression.
   */
  result?: CreateFirstRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateFirstRankResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFirstRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The parameters used to create the instance.
   * 
   * @example
   * [   { "name": "param1", "value": "val1"   } ]
   */
  createParameters?: CreateFunctionInstanceRequestCreateParameters[];
  /**
   * @remarks
   * The CRON expression used to schedule periodic training, in the format of Minutes Hours DayofMonth Month DayofWeek. The default value is empty, which specifies that no periodic training is performed. A value of 0 for DayofWeek specifies Sunday.
   * 
   * @example
   * 0 0 ? * 0,1,2,3,4,5,6
   */
  cron?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test instance
   */
  description?: string;
  /**
   * @remarks
   * The feature type.
   * 
   * *   Default value: PAAS. Training is required before you can use the feature.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The instance name. The name must be 1 to 30 characters in length and can contain letters, digits, and underscores (_). The name is case-sensitive and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * ctr_test
   */
  instanceName?: string;
  /**
   * @remarks
   * The model type. The value varies based on the model.
   * 
   * *   Click-through rate (CTR) model: tf_checkpoint
   * *   Popularity model: pop
   * *   Category model: offline_inference
   * *   Hotword model: offline_inference
   * *   Hint model: offline_inference
   * *   Hotword model for real-time top searches: near_realtime
   * *   Personalized hint model: near_realtime
   * *   Drop-down suggestion model: offline_inference
   * *   Tokenization model: text
   * *   Term weight model: tf_checkpoint
   * *   Synonym model: offline_inference
   * 
   * This parameter is required.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The parameters used to use the instance.
   */
  usageParameters?: CreateFunctionInstanceRequestUsageParameters[];
  static names(): { [key: string]: string } {
    return {
      createParameters: 'createParameters',
      cron: 'cron',
      description: 'description',
      functionType: 'functionType',
      instanceName: 'instanceName',
      modelType: 'modelType',
      usageParameters: 'usageParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createParameters: { 'type': 'array', 'itemType': CreateFunctionInstanceRequestCreateParameters },
      cron: 'string',
      description: 'string',
      functionType: 'string',
      instanceName: 'string',
      modelType: 'string',
      usageParameters: { 'type': 'array', 'itemType': CreateFunctionInstanceRequestUsageParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Version.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message. If no error occurs, this parameter is left empty.
   * 
   * @example
   * version not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 98724351-D6B2-5D8A-B089-7FFD1821A7E9
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFunctionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFunctionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The resource data. The data structure varies with the resource type.
   */
  data?: CreateFunctionResourceRequestData;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * fg_jsoon
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   feature_generator
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   raw_file
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * feature_generator
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      description: 'Description',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateFunctionResourceRequestData,
      description: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code. If no error occurs, this parameter is left empty.
   * 
   * @example
   * ""
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request. Unit: milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4D487A9-A456-5AA5-A9C6-B7BF2889CF74
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   OK
   * *   FAIL
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFunctionResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFunctionResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Task.IsRunning
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1638157990724
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFunctionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFunctionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInterventionDictionaryRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the analyzer. Valid values:
   * 
   * *   MODEL: model-based custom analyzer.
   * *   SYSTEM: system analyzer.
   * *   USER: custom analyzer.
   * 
   * @example
   * SYSTEM
   */
  analyzerType?: string;
  /**
   * @remarks
   * The name of the intervention dictionary.
   * 
   * @example
   * ner_dict_ec
   */
  name?: string;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * *   stopword: an intervention dictionary for stop word filtering.
   * *   synonym: an intervention dictionary for synonym configuration.
   * *   correction: an intervention dictionary for spelling correction.
   * *   category_prediction: an intervention dictionary for category prediction.
   * *   ner: an intervention dictionary for named entity recognition (NER).
   * *   term_weighting: an intervention dictionary for term weight analysis.
   * *   suggest_allowlist: a drop-down suggestion whitelist.
   * *   suggest_denylist: a drop-down suggestion blacklist.
   * *   hot_allowlist: a top search whitelist.
   * *   hot_denylist: a top search blacklist.
   * *   hint_allowlist: a hint whitelist.
   * *   hint_denylist: a hint blacklist.
   * 
   * @example
   * ner
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      analyzerType: 'analyzerType',
      name: 'name',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzerType: 'string',
      name: 'string',
      type: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInterventionDictionaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 80326EFE-485F-46E7-B291-5A1DD08D2198
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: CreateInterventionDictionaryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateInterventionDictionaryResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInterventionDictionaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInterventionDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInterventionDictionaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryProcessorRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: any;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryProcessorResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the query analysis rule.
   */
  result?: CreateQueryProcessorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateQueryProcessorResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryProcessorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQueryProcessorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskRequest extends $tea.Model {
  /**
   * @remarks
   * 请求体
   */
  body?: ScheduledTask;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ScheduledTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the scheduled task.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSearchStrategyRequest extends $tea.Model {
  /**
   * @remarks
   * The query policy.
   */
  body?: SearchStrategy;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SearchStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSearchStrategyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * "abc123"
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

export class CreateSearchStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSearchStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSearchStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecondRankRequest extends $tea.Model {
  /**
   * @remarks
   * The request body. For more information, see [SecondRank](https://help.aliyun.com/document_detail/170008.html).
   */
  body?: SecondRank;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SecondRank,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecondRankResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the fine sort expression.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecondRankResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSecondRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSortScriptRequest extends $tea.Model {
  /**
   * @remarks
   * The sort phase to which the script applies.
   * 
   * @example
   * second_rank
   */
  scope?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * rank_cava_20230606_v7
   */
  scriptName?: string;
  /**
   * @remarks
   * The script type. Set the value to cava_script.
   * 
   * @example
   * cava_script
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      scriptName: 'scriptName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      scriptName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSortScriptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The response parameters.
   */
  result?: CreateSortScriptResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateSortScriptResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSortScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserAnalyzerRequest extends $tea.Model {
  /**
   * @remarks
   * The basic analyzer.
   * 
   * @example
   * chn_standard
   */
  business?: string;
  /**
   * @remarks
   * The application ID of the custom analyzer.
   * 
   * @example
   * 110123123
   */
  businessAppGroupId?: string;
  /**
   * @remarks
   * The basic analyzer type. Valid values: AUTO, MODEL, SYSTEM, and USER.
   * 
   * @example
   * AUTO
   */
  businessType?: string;
  /**
   * @remarks
   * The analyzer name.
   * 
   * @example
   * jmbon_analyzer
   */
  name?: string;
  /**
   * @remarks
   * The engine type. Valid values: HA3 and ES.
   * 
   * @example
   * HA3
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      business: 'business',
      businessAppGroupId: 'businessAppGroupId',
      businessType: 'businessType',
      name: 'name',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      businessAppGroupId: 'string',
      businessType: 'string',
      name: 'string',
      type: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserAnalyzerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 98724351-D6B2-5D8A-B089-7FFD1821A7E9
   */
  requestId?: string;
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserAnalyzerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The result that was returned.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteABTestExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteABTestGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestSceneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteABTestSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteABTestSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code. If no error occurs, this parameter is left empty.
   * 
   * @example
   * "Instance.NotExist"
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 10
   */
  latency?: number;
  /**
   * @remarks
   * The error message. If no error occurs, this parameter is left empty.
   * 
   * @example
   * "instance not exist."
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * "1081EB05-473C-5BF4-95BE-6D7CAD5E2213"
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request. Valid values:
   * 
   * *   OK: The request is successful.
   * *   FAIL: The request fails.
   * 
   * @example
   * "OK"
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFunctionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFunctionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned. If no error occurs, this value is empty.
   * 
   * @example
   * ""
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request. Unit: milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4D487A9-A456-5AA5-A9C6-B7BF2889CF74
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   OK
   * *   FAIL
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFunctionResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFunctionResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code. If no error occurs, this parameter is left empty.
   * 
   * @example
   * Task.UnableDelete
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * "1081EB05-473C-5BF4-95BE-6D7CAD5E2213"
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFunctionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFunctionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSortScriptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
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

export class DeleteSortScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSortScriptFileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
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

export class DeleteSortScriptFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSortScriptFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSortScriptFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test.
   */
  result?: DescribeABTestExperimentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeABTestExperimentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeABTestExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test group.
   */
  result?: DescribeABTestGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeABTestGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeABTestGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestSceneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test scenario.
   */
  result?: DescribeABTestSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeABTestSceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeABTestSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 33477D76-C380-1D84-A4AD-043F52876CB1
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the version.
   * 
   * @example
   * {}
   */
  result?: DescribeAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the application.
   */
  result?: DescribeAppGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAppGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStatisticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 76FC45F1-4167-D3CD-6737-4F97BA503FA0
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 77CAA411-0010-4DB9-82E2-1C384E590AFF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about each version.
   */
  result?: DescribeAppsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCollctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72FAD77B-83F9-F393-BA8E-5834E2427BF8
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the data collection task.
   */
  result?: DescribeDataCollctionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDataCollctionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCollctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataCollctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataCollctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirstRankResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the rough sort expression.
   */
  result?: DescribeFirstRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeFirstRankResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirstRankResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFirstRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInterventionDictionaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7CCF454-472A-030E-F254-604520B028AA
   */
  requestId?: string;
  /**
   * @remarks
   * The information the intervention dictionary.
   */
  result?: DescribeInterventionDictionaryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeInterventionDictionaryResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInterventionDictionaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInterventionDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInterventionDictionaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryProcessorResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the query analysis rule.
   */
  result?: DescribeQueryProcessorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeQueryProcessorResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryProcessorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQueryProcessorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3B7E42BD-1D63-2F6B-C8E0-41BACEA76EEB
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: DescribeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 922DC0D9-31B5-45F9-47B7-37DC678D61A8
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the scheduled task.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecondRankResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the fine sort expression.
   */
  result?: DescribeSecondRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeSecondRankResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecondRankResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecondRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5C1C1C45-C64A-AD30-565F-140871D57E5E
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   */
  result?: DescribeSlowQueryStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeSlowQueryStatusResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowQueryStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlowQueryStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAnalyzerRequest extends $tea.Model {
  /**
   * @remarks
   * The Associated information,output properties based on hierarchy.
   * * **all**: Outputs associated app information
   * 
   * @example
   * all
   */
  with?: string;
  static names(): { [key: string]: string } {
    return {
      with: 'with',
    };
  }

  static types(): { [key: string]: any } {
    return {
      with: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAnalyzerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FFAEF396-10EF-53C7-1F51-518853880729
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the custom analyzer.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAnalyzerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSlowQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 728E89C6-8673-D39B-39A1-5BA2B56D448F
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSlowQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableSlowQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableSlowQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSlowQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 728E89C6-8673-D39B-39A1-5BA2B56D448F
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSlowQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableSlowQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableSlowQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMergedTableRequest extends $tea.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: Schema;
  /**
   * @remarks
   * The specifications of the OpenSearch instance. This parameter is used to check whether the OpenSearch instance meets the special limits on an exclusive instance.
   * 
   * Default value: opensearch.share.common.
   * 
   * For more information, see the description of the spec field in the Quota topic.
   * 
   * @example
   * "opensearch.share.common"
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Schema,
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMergedTableResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The response parameters.
   */
  result?: GenerateMergedTableResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GenerateMergedTableResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMergedTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateMergedTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateMergedTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainRequest extends $tea.Model {
  /**
   * @remarks
   * The name or ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * my_app_group_name
   */
  appGroupIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupIdentity: 'appGroupIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupIdentity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * -
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class GetFunctionCurrentVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The category. By default, this parameter is left empty.
   * 
   * @example
   * general
   */
  category?: string;
  /**
   * @remarks
   * The industry. By default, this parameter is left empty, which indicates General-purpose Edition.
   * 
   * @example
   * ecommerce
   */
  domain?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * *   PAAS. This is the default value.
   * *   SAAS.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The type of the model. The following features correspond to different model types:
   * 
   * *   CTR model: tf_checkpoint
   * *   Popularity model: pop
   * *   Category model: offline_inference
   * *   Hotword model: offline_inference
   * *   Shading model: offline_inference
   * *   Drop-down suggestion model: offline_inference
   * *   Word segmentation model: text
   * *   Word weight model: tf_checkpoint
   * 
   * This parameter is required.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      domain: 'domain',
      functionType: 'functionType',
      modelType: 'modelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      domain: 'string',
      functionType: 'string',
      modelType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCurrentVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Version.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * version not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1638157479281
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   */
  result?: GetFunctionCurrentVersionResponseBodyResult;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionCurrentVersionResponseBodyResult,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCurrentVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionCurrentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionCurrentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionDefaultInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DefaultInstance.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * cdn_waf
   */
  functionName?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * sh-bp1oi31w1jn4ctdyv
   */
  instanceName?: string;
  /**
   * @remarks
   * The default running time.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * default instance not set.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 062BA91F-A568-5779-8A5B-9E62C9BB3DC1
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * {\\"Pagination\\": {\\"TotalCount\\": 0, \\"PageNumber\\": 1, \\"PageSize\\": 10}, \\"AntConsortiums\\": []}
   */
  result?: GetFunctionDefaultInstanceResponseBodyResult;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      functionName: 'FunctionName',
      httpCode: 'HttpCode',
      instanceName: 'InstanceName',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      functionName: 'string',
      httpCode: 'number',
      instanceName: 'string',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionDefaultInstanceResponseBodyResult,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionDefaultInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionDefaultInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionDefaultInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies the richness of returned information. Valid values:
   * 
   * *   simple: displays only the basic information.
   * *   normal: displays information such as createParameters and cron. This is the default value.
   * *   detail: returns the details of the training task.
   * 
   * @example
   * detail
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
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

export class GetFunctionInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code. If no error occurs, this parameter is left empty.
   * 
   * @example
   * Instance.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * instance not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 68ED4E1B-92B8-5821-A886-9C90686139EB
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the instance.
   * 
   * @example
   * {}
   */
  result?: GetFunctionInstanceResponseBodyResult;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionInstanceResponseBodyResult,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The output level.
   * 
   * Valid values:
   * 
   * *   simple
   * *   normal
   * *   detail
   * 
   * @example
   * detail
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
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

export class GetFunctionResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned. If no error occurs, this value is empty.
   * 
   * @example
   * Resource.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the API request. Unit: milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Resource not exist.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E215C843-0795-5293-AC9A-14FE0723E890
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: GetFunctionResourceResponseBodyResult;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   OK
   * *   FAIL
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionResourceResponseBodyResult,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Task.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A4D487A9-A456-5AA5-A9C6-B7BF2889CF74
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   */
  result?: GetFunctionTaskResponseBodyResult;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionTaskResponseBodyResult,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Version.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The maximum duration for which a task can be executed.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * version not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1638157479281
   */
  requestId?: string;
  /**
   * @remarks
   * The result body.
   * 
   * @example
   * []
   */
  result?: GetFunctionVersionResponseBodyResult;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionVersionResponseBodyResult,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptFileNamesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The files of the script.
   */
  result?: GetScriptFileNamesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetScriptFileNamesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptFileNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScriptFileNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScriptFileNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSearchStrategyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5C1C1C45-C64A-AD30-565F-140871D57E5E
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

export class GetSearchStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSearchStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSearchStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the script.
   */
  result?: GetSortScriptResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSortScriptResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptFileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the sort script.
   */
  result?: GetSortScriptFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSortScriptFileResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSortScriptFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSortScriptFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestExperimentsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The experiment details.\\
   * For more information, see [ABTestExperiment](https://help.aliyun.com/document_detail/173617.html).
   */
  result?: ListABTestExperimentsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListABTestExperimentsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestExperimentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListABTestExperimentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListABTestExperimentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestFixedFlowDividersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The queried whitelists.
   */
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestFixedFlowDividersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListABTestFixedFlowDividersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListABTestFixedFlowDividersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The test groups.
   * 
   * For more information, see [ABTestGroup](https://help.aliyun.com/document_detail/178935.html).
   */
  result?: ListABTestGroupsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListABTestGroupsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListABTestGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListABTestGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestScenesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test scenarios.
   * 
   * For more information, see [ABTestScene](https://help.aliyun.com/document_detail/173618.html).
   */
  result?: ListABTestScenesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListABTestScenesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestScenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListABTestScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListABTestScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance. Exact match is used.
   * 
   * @example
   * ops-cn-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * my_name
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * "110123123"
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The method based on which applications are sorted. Valid values:
   * 
   * *   0: sorts applications in descending order by creation time.
   * *   1: sorts applications in descending order by modification time.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  sortBy?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListAppGroupsRequestTags[];
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a High-performance Search Edition application.
   * *   enhanced: an Industry Algorithm Edition application.
   * 
   * @example
   * standard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      sortBy: 'sortBy',
      tags: 'tags',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sortBy: 'number',
      tags: { 'type': 'array', 'itemType': ListAppGroupsRequestTags },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance. Exact match is used.
   * 
   * @example
   * ops-cn-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * my_name
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * "110123123"
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The method based on which applications are sorted. Valid values:
   * 
   * *   0: sorts applications in descending order by creation time.
   * *   1: sorts applications in descending order by modification time.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  sortBy?: number;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a High-performance Search Edition application.
   * *   enhanced: an Industry Algorithm Edition application.
   * 
   * @example
   * standard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      sortBy: 'sortBy',
      tagsShrink: 'tags',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sortBy: 'number',
      tagsShrink: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the application.
   * 
   * For more information, see [AppGroup](https://help.aliyun.com/document_detail/170000.html).
   * 
   * @example
   * []
   */
  result?: ListAppGroupsResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAppGroupsResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCollectionsRequest extends $tea.Model {
  /**
   * @remarks
   * 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
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

export class ListDataCollectionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 959D8782-B130-95EB-86CC-1F6ED447981F
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the data collection tasks.
   * 
   * For more information, see [DataCollection](https://help.aliyun.com/document_detail/173605.html).
   */
  result?: ListDataCollectionsResponseBodyResult[];
  /**
   * @remarks
   * The total number of the returned data collection tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataCollectionsResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCollectionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataCollectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataCollectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTableFieldsRequest extends $tea.Model {
  /**
   * @remarks
   * The parameters of the data source. The value of the params parameter is a JSON string. The value must be URL-encoded.
   * 
   * Different types of data sources use different parameters. For more information, see the following sections of the "DataSource" topic:
   * 
   * *   [rds](https://help.aliyun.com/document_detail/170005.html)
   * *   [polardb](https://help.aliyun.com/document_detail/170005.html)
   * *   [odps](https://help.aliyun.com/document_detail/170005.html)
   * *   [mysql](https://help.aliyun.com/document_detail/173627.html)
   * *   [drds](https://help.aliyun.com/document_detail/173627.html)
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  params?: string;
  /**
   * @remarks
   * Specifies whether to return the original field types of the data source.
   * 
   * @example
   * false
   */
  rawType?: boolean;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
      rawType: 'rawType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      rawType: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTableFieldsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTableFieldsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceTableFieldsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSourceTableFieldsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTablesRequest extends $tea.Model {
  /**
   * @remarks
   * N/A
   * 
   * This parameter is required.
   * 
   * @example
   * -
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTablesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The data tables.
   */
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSourceTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirstRanksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about each rough sort expression.
   * 
   * For more information, see [FirstRank](https://help.aliyun.com/document_detail/170007.html).
   * 
   * @example
   * []
   */
  result?: ListFirstRanksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFirstRanksResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirstRanksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFirstRanksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFirstRanksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the feature.
   * 
   * @example
   * "PAAS"
   */
  functionType?: string;
  /**
   * @remarks
   * The type of the model.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The richness of the returned information. Valid values:
   * 
   * *   normal: displays information such as createParameters and cron. This is the default value.
   * *   simple: displays only the basic information.
   * *   detail: returns the details of the training task.
   * 
   * @example
   * normal
   */
  output?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * How the instance is created. Valid values:
   * 
   * *   builtin: The instance is created by system.
   * *   user: The instance is created by user. This is the default value.
   * *   all: all instances
   * 
   * @example
   * user
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      functionType: 'functionType',
      modelType: 'modelType',
      output: 'output',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionType: 'string',
      modelType: 'string',
      output: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code. If no error occurs, the parameter is left empty.
   * 
   * @example
   * Instance.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message. If no error occurs, the parameter is left empty.
   * 
   * @example
   * instance not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A4D487A9-A456-5AA5-A9C6-B7BF2889CF74
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the instances.
   * 
   * @example
   * []
   */
  result?: ListFunctionInstancesResponseBodyResult[];
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * "OK"
   */
  status?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFunctionInstancesResponseBodyResult },
      status: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The output level.
   * 
   * Valid values:
   * 
   * *   simple
   * *   normal
   * *   detail
   * 
   * @example
   * detail
   */
  output?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * Valid values:
   * 
   * *   feature_generator
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   raw_file
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * feature_generator
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned. If no error occurs, this value is empty.
   * 
   * @example
   * Resource.InvalidResourceName
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The amount of time consumed for the request. Unit: milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Invalid resource name.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * "3A809095-C554-5CF5-8FCE-BE19D4673790"
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: ListFunctionResourcesResponseBodyResult[];
  /**
   * @remarks
   * The status of the request. Valid values: OK and FAIL.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The total number of records that meet the requirements.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFunctionResourcesResponseBodyResult },
      status: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The end time is less than the specified time. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1582646399
   */
  endTime?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 1.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time is greater than the specified time. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1582214400
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   success
   * *   failed
   * *   running
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * fail
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1638157479281
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * [         {             "functionName": "ctr",             "progress": 100,             "status": "success",             "startTime": 100010,             "endTime": 200020,             "extendInfo": "{\\"recall\\":91,\\"errors\\":[]}",             "runId": "trigger__2021-03-05T12:18:41"         }     ]
   */
  result?: ListFunctionTasksResponseBodyResult[];
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * The total number of records that meet the requirements.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFunctionTasksResponseBodyResult },
      status: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionariesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * *   stopword: an intervention dictionary for stop word filtering
   * *   synonym: an intervention dictionary for synonym configuration
   * *   correction: an intervention dictionary for spelling correction
   * *   category_prediction: an intervention dictionary for category prediction
   * *   ner: an intervention dictionary for named entity recognition (NER)
   * *   term_weighting: an intervention dictionary for term weight analysis
   * 
   * @example
   * ["synonym"]
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionariesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about each intervention dictionary.
   * 
   * For more information, see [InterventionDictionary](https://help.aliyun.com/document_detail/173608.html).
   */
  result?: ListInterventionDictionariesResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInterventionDictionariesResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionariesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterventionDictionariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInterventionDictionariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The intervention entry.
   * 
   * @example
   * test
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 516A02B7-2167-8D92-12D0-B639A2A0F3C5
   */
  requestId?: string;
  /**
   * @remarks
   * The information about intervention entries.
   * 
   * For more information, see [InterventionDictionaryEntry](https://help.aliyun.com/document_detail/173606.html).
   */
  result?: ListInterventionDictionaryEntriesResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInterventionDictionaryEntriesResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterventionDictionaryEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInterventionDictionaryEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryNerResultsRequest extends $tea.Model {
  /**
   * @remarks
   * Query keywords.
   * 
   * This parameter is required.
   * 
   * @example
   * "hello world"
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryNerResultsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F780CA8-D4D4-2FFE-B8AC-42040822C554
   */
  requestId?: string;
  /**
   * @remarks
   * The NER result.
   * 
   * For more information, see [InterventionDictionaryEntry](https://help.aliyun.com/document_detail/173606.html).
   */
  result?: ListInterventionDictionaryNerResultsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInterventionDictionaryNerResultsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryNerResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterventionDictionaryNerResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInterventionDictionaryNerResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryRelatedEntitiesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The information about each application and each query analysis rule. If no query analysis rule references the intervention dictionary, the value of the result parameter is an empty list.
   */
  result?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryRelatedEntitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterventionDictionaryRelatedEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInterventionDictionaryRelatedEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProceedingsRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the filtering is complete.
   * 
   * @example
   * true
   */
  filterFinished?: boolean;
  static names(): { [key: string]: string } {
    return {
      filterFinished: 'filterFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFinished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProceedingsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5099063-6B86-F398-D843-905F9EFB683A
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

export class ListProceedingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProceedingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProceedingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorAnalyzerResultsRequest extends $tea.Model {
  /**
   * @remarks
   * The text to be tested.
   * 
   * This parameter is required.
   * 
   * @example
   * "abcde"
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorAnalyzerResultsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 98724351-D6B2-5D8A-B089-7FFD1821A7E9
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorAnalyzerResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueryProcessorAnalyzerResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQueryProcessorAnalyzerResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorNersRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the industry.
   * 
   * *   ECOMMERCE
   * 
   * @example
   * ECOMMERCE
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorNersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The priority settings of entity types.
   * 
   * For more information, see [Priority settings of entity types](https://help.aliyun.com/document_detail/173616.html).
   */
  result?: ListQueryProcessorNersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListQueryProcessorNersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorNersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueryProcessorNersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQueryProcessorNersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorsRequest extends $tea.Model {
  /**
   * @remarks
   * The scope of query analysis rules to be queried. Default value: 0. Valid values:
   * 
   * *   0: queries all query analysis rules.
   * *   1: queries the default query analysis rules.
   * *   2: queries the query analysis rules that are not the default rules.
   * 
   * @example
   * 0
   */
  isActive?: number;
  static names(): { [key: string]: string } {
    return {
      isActive: 'isActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isActive: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the query analysis rule.
   * 
   * For more information, see [QueryProcessor](https://help.aliyun.com/document_detail/170014.html).
   */
  result?: ListQueryProcessorsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListQueryProcessorsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueryProcessorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQueryProcessorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaReviewTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
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

export class ListQuotaReviewTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * "3351A21F-705B-508C-9450-DA65A681547F"
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tickets. For more information, see [QuotaReviewTask](https://help.aliyun.com/document_detail/173609.html).
   * 
   * @example
   * []
   */
  result?: ListQuotaReviewTasksResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 500
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListQuotaReviewTasksResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaReviewTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotaReviewTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQuotaReviewTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The scheduled task type. Valid values:
   * 
   * *   wipe: data cleaning.
   * *   fork: reindexing.
   * *   check-status: application status check.
   * *   index: reindexing.
   * 
   * @example
   * wipe
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  result?: { [key: string]: any }[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScheduledTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScheduledTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchStrategiesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9C6351F5-2E2E-5249-888B-88A74E1B8A65
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

export class ListSearchStrategiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSearchStrategiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSearchStrategiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecondRanksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about each fine sort expression.
   * 
   * For more information, see [SecondRank](https://help.aliyun.com/document_detail/170008.html).
   */
  result?: ListSecondRanksResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSecondRanksResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecondRanksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecondRanksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSecondRanksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryCategoriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4406F40B-A0A2-9D5D-531F-3B6936567584
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned.
   */
  result?: ListSlowQueryCategoriesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListSlowQueryCategoriesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryCategoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSlowQueryCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSlowQueryCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryQueriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EB250CA0-ACFD-C5DE-17CD-01445BFE8AE5
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   */
  result?: ListSlowQueryQueriesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListSlowQueryQueriesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryQueriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSlowQueryQueriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSlowQueryQueriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortExpressionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the rough sort or fine sort expressions that are returned.
   * 
   * For more information, see [FirstRank](https://help.aliyun.com/document_detail/170007.html) and [SecondRank](https://help.aliyun.com/document_detail/170008.html).
   */
  result?: ListSortExpressionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSortExpressionsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortExpressionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSortExpressionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSortExpressionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortScriptsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The scripts.
   */
  result?: ListSortScriptsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSortScriptsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortScriptsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSortScriptsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSortScriptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticLogsRequest extends $tea.Model {
  /**
   * @remarks
   * The fields to query. Format: columns=wordsTopPv.
   * 
   * For more information, see [Metrics in statistical reports](https://help.aliyun.com/document_detail/187665.html).
   * 
   * @example
   * wordsTopPv
   */
  columns?: string;
  /**
   * @remarks
   * Specifies whether to use the distinct clause.
   * 
   * @example
   * true
   */
  distinct?: boolean;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The content of the query clause.
   * 
   * @example
   * "default:\\"OpenSearch\\""
   */
  query?: string;
  /**
   * @remarks
   * The content of the sort clause.
   * 
   * @example
   * "-id"
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The default value is the timestamp of 00:00:00 on the current day.
   * 
   * @example
   * 1582214400
   */
  startTime?: number;
  /**
   * @remarks
   * The end of the time range to query. The default value is the timestamp of 24:00:00 on the current day.
   * 
   * @example
   * 1682222400
   */
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      distinct: 'distinct',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      query: 'query',
      sortBy: 'sortBy',
      startTime: 'startTime',
      stopTime: 'stopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: 'string',
      distinct: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      sortBy: 'string',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticLogsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F76ACE3D-E510-EE2C-B7B1-39B3136A61EE
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result. For more information, see
   * 
   * *   [Parameters of hotwords rankings](https://help.aliyun.com/document_detail/421248.html).
   * 
   * @example
   * []
   */
  result?: { [key: string]: any }[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStatisticLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListStatisticLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticReportRequest extends $tea.Model {
  /**
   * @remarks
   * pv,uv
   * 
   * @example
   * pv,uv
   */
  columns?: string;
  /**
   * @remarks
   * 1582646399
   * 
   * @example
   * 1582646399
   */
  endTime?: number;
  /**
   * @remarks
   * 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * bizType:test,sceneTag:myTag
   * 
   * @example
   * bizType:test,sceneTag:myTag
   */
  query?: string;
  /**
   * @remarks
   * 1582214400
   * 
   * @example
   * 1582214400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      query: 'query',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticReportResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F65C8BB2-C14F-5983-888B-41C4E082D3BC
   */
  requestId?: string;
  /**
   * @remarks
   * The queried reports. Valid values:
   * 
   * For more information about the metrics in data quality reports, see the Upload behavioral data section of [Data collection 2.0](https://help.aliyun.com/document_detail/131547.html).
   * 
   * For more information about the metrics in application and A/B test reports, see the Core metrics section of [Metrics of statistical reports](https://help.aliyun.com/document_detail/187654.html).
   * 
   * For more information about the metrics in query analysis reports, see the Query analysis metrics section of [Metrics of statistical reports](https://help.aliyun.com/document_detail/187654.html).
   * 
   * @example
   * []
   */
  result?: { [key: string]: any }[];
  /**
   * @remarks
   * The total number of the queried reports.
   * 
   * @example
   * 43
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatisticReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStatisticReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListStatisticReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The token that is used to retrieve the next page.
   * 
   * @example
   * 60
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs. You can specify a maximum number of 50 resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * BIGDATA
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. You can specify a maximum number of 20 tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The token that is used to retrieve the next page.
   * 
   * @example
   * 60
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs. You can specify a maximum number of 50 resource IDs.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * BIGDATA
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. You can specify a maximum number of 20 tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      resourceIdShrink: 'resourceId',
      resourceType: 'resourceType',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The token that is used to retrieve the next page.
   * 
   * @example
   * 20
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  result?: ListTagResourcesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzerEntriesRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The key to be used to query entries.
   * 
   * @example
   * kevintest
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzerEntriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 516A02B7-2167-8D92-12D0-B639A2A0F3C5
   */
  requestId?: string;
  /**
   * @remarks
   * The entries of the custom analyzer. For more information, see [UserAnalyzerEntry](https://www.alibabacloud.com/help/en/open-search/industry-algorithm-edition/useranalyzerentry).
   * 
   * @example
   * []
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzerEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserAnalyzerEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserAnalyzerEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
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

export class ListUserAnalyzersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The custom analyzer.
   * 
   * For more information, see [UserAnalyzer](https://help.aliyun.com/document_detail/178934.html).
   */
  result?: ListUserAnalyzersResponseBodyResult[];
  /**
   * @remarks
   * The total number.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListUserAnalyzersResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserAnalyzersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserAnalyzersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The online version of the application.
   * 
   * @example
   * 1223232
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * "test"
   */
  description?: string;
  /**
   * @remarks
   * The type of the industry. Valid values:
   * 
   * *   general: general.
   * *   ecommerce: e-commerce.
   * *   education: education.
   * *   esports: electronic sports.
   * *   community: content community.
   * 
   * @example
   * "ecommerce"
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to verify the application before modification. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'currentVersion',
      description: 'description',
      domain: 'domain',
      resourceGroupId: 'resourceGroupId',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      description: 'string',
      domain: 'string',
      resourceGroupId: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  result?: ModifyAppGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyAppGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupQuotaRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: Quota;
  /**
   * @remarks
   * Specifies whether to verify the application before modification. Valid values: true and false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Quota,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupQuotaResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the application.
   */
  result?: ModifyAppGroupQuotaResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyAppGroupQuotaResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppGroupQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppGroupQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: FirstRank;
  /**
   * @remarks
   * Specifies whether the request is a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: FirstRank,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the rough sort expression.
   */
  result?: ModifyFirstRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyFirstRankResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFirstRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQueryProcessorRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameters.
   * 
   * @example
   * {
   *     "domain": "GENERAL",
   *     "category": "",
   *     "processors": [
   *         {
   *             "name": "synonym",
   *             "useSystemDictionary": true
   *         },
   *         {
   *             "name": "stop_word",
   *             "useSystemDictionary": true
   *         }
   *     ]
   * }
   */
  body?: any;
  /**
   * @remarks
   * Specifies whether the request is a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQueryProcessorResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the query analysis rule.
   * 
   * @example
   * {}
   */
  result?: ModifyQueryProcessorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyQueryProcessorResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQueryProcessorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyQueryProcessorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameters.
   * 
   * @example
   * The request parameters.
   */
  body?: any;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the scheduled task.
   * 
   * @example
   * Array
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecondRankRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameters.
   */
  body?: SecondRank;
  /**
   * @remarks
   * Specifies whether the request is a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SecondRank,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecondRankResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5E2F73C-8241-81F8-3A62-65478C5A3111
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the fine sort expression.
   * 
   * @example
   * {}
   */
  result?: ModifySecondRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifySecondRankResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecondRankResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySecondRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionDictionaryEntriesRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: { [key: string]: any }[];
  /**
   * @remarks
   * Specifies whether to check the validity of input parameters. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**: checks only the validity of input parameters.
   * *   **false**: checks the validity of input parameters and creates an attribution configuration.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionDictionaryEntriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionDictionaryEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushInterventionDictionaryEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushInterventionDictionaryEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserAnalyzerEntriesRequest extends $tea.Model {
  /**
   * @remarks
   * The entries of the custom analyzer.
   */
  entries?: PushUserAnalyzerEntriesRequestEntries[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. This parameter is only used to check whether the data source is valid. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      entries: 'entries',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: { 'type': 'array', 'itemType': PushUserAnalyzerEntriesRequestEntries },
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserAnalyzerEntriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserAnalyzerEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushUserAnalyzerEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushUserAnalyzerEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSortScriptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
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

export class ReleaseSortScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33477D76-C380-2D84-A4AD-043F52876CB1
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   */
  result?: number[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3AA29D02-54F3-8569-F71A-90E1B7BE4E7E
   */
  requestId?: string;
  /**
   * @remarks
   * N/A
   */
  result?: number[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataCollectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * —
   * 
   * @example
   * {}
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataCollectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDataCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveDataCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFirstRankResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E676FAB6-A0AC-64D9-F9D7-D0D33C930CFF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the rough sort expression.
   */
  result?: RemoveFirstRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RemoveFirstRankResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFirstRankResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveFirstRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInterventionDictionaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06BBD41A-5F72-34E4-2DAF-E43B0526051D
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the intervention dictionary.
   */
  result?: RemoveInterventionDictionaryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RemoveInterventionDictionaryResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInterventionDictionaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveInterventionDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveInterventionDictionaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveQueryProcessorResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * []
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveQueryProcessorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveQueryProcessorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScheduledTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * N/A
   */
  result?: number[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScheduledTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSearchStrategyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5099063-6B86-F398-D843-905F9EFB683A
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

export class RemoveSearchStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveSearchStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveSearchStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSecondRankResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSecondRankResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveSecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveSecondRankResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserAnalyzerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * []
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserAnalyzerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUserAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAppGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The renewal request body.
   */
  body?: PrepayOrderInfo;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 74db41d8cd3c784209093aa76afbe89e
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PrepayOrderInfo,
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAppGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application was renewed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC5F78BA-66B9-545B-9CF1-8F542E682E1F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * {}
   */
  result?: ReplaceAppGroupCommodityCodeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ReplaceAppGroupCommodityCodeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReplaceAppGroupCommodityCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReplaceAppGroupCommodityCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSortScriptFileRequest extends $tea.Model {
  /**
   * @remarks
   * The script content that is encoded in the Base64 format.
   * 
   * @example
   * 4769#0: *28194492991 a client request body is buffered to a temporary file /usr/local/webserver/openresty/nginx/client_body_temp/0000624474,
   */
  content?: string;
  /**
   * @remarks
   * The version number of the script content.
   * 
   * @example
   * 2022-12-01
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveSortScriptFileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
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

export class SaveSortScriptFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveSortScriptFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveSortScriptFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSlowQueryAnalyzerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSlowQueryAnalyzerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartSlowQueryAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartSlowQueryAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The resource IDs. You can specify a maximum number of 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ProductVersion
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. You can specify a maximum number of 20 tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
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

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindESUserAnalyzerRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameters.
   * 
   * @example
   * {
   *   "name": "kevintest-analyzer"
   * }
   */
  body?: any;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindESUserAnalyzerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * []
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindESUserAnalyzerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindESUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindESUserAnalyzerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEsInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindEsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindEsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified one or more resources. This parameter takes effect only if the tagKey parameter is not specified. Valid values: true and false. Default value: false.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs. You can specify a maximum number of 50 IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ProductVersion
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of tags. You can specify a maximum number of 20 keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified one or more resources. This parameter takes effect only if the tagKey parameter is not specified. Valid values: true and false. Default value: false.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs. You can specify a maximum number of 50 IDs.
   * 
   * This parameter is required.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ProductVersion
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of tags. You can specify a maximum number of 20 keys.
   */
  tagKeyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceIdShrink: 'resourceId',
      resourceType: 'resourceType',
      tagKeyShrink: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagKeyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1-A-0-B
   */
  tequestId?: string;
  static names(): { [key: string]: string } {
    return {
      tequestId: 'tequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tequestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestExperimentRequest extends $tea.Model {
  /**
   * @remarks
   * The request body. For more information, see [ABTestExperiment](https://help.aliyun.com/document_detail/173617.html).
   */
  body?: ABTestExperiment;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. No endpoint is created. The system checks whether your AccessKey is valid, whether Resource Access Management (RAM) users are authorized, and whether the required parameters are set.
   * *   false (default): creates an endpoint immediately.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ABTestExperiment,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestExperimentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test.
   */
  result?: UpdateABTestExperimentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateABTestExperimentResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestExperimentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateABTestExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestFixedFlowDividersRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: string[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestFixedFlowDividersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestFixedFlowDividersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateABTestFixedFlowDividersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateABTestFixedFlowDividersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The request body. For more information, see [ABTestGroup](https://help.aliyun.com/document_detail/178935.html).
   */
  body?: ABTestGroup;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. No endpoint is created. The system checks whether your AccessKey is valid, whether Resource Access Management (RAM) users are authorized, and whether the required parameters are set.
   * *   false (default): creates an endpoint immediately.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ABTestGroup,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * \\"\\"1111\\"\\"
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test group.
   */
  result?: UpdateABTestGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateABTestGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateABTestGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestSceneRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: ABTestScene;
  /**
   * @remarks
   * Specifies whether to perform a dry run. This parameter is only used to check whether the data source is valid. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ABTestScene,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestSceneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test scenario. For more information, see [ABTestScene](https://help.aliyun.com/document_detail/173618.html).
   * 
   * @example
   * {}
   */
  result?: UpdateABTestSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateABTestSceneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateABTestSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFetchFieldsRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: string[];
  /**
   * @remarks
   * true
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFetchFieldsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFetchFieldsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFetchFieldsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFetchFieldsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionDefaultInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * "pop_test"
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionDefaultInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DefaultInstance.SetFail
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A4D487A9-A456-5AA5-A9C6-B7BF2889CF74
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionDefaultInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFunctionDefaultInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFunctionDefaultInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The parameters that are used to create the instance.
   * 
   * @example
   * {             "name": "title_field",             "value": "title"         }
   */
  createParameters?: UpdateFunctionInstanceRequestCreateParameters[];
  /**
   * @remarks
   * The cron expression used to schedule periodic training, in the format of (Minutes Hours DayofMonth Month DayofWeek). The default value is empty, which indicates that no periodic training is performed. DayofWeek 0 indicates Sunday.
   * 
   * @example
   * "0 3 ? * 0,1,3,5"
   */
  cron?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test instance
   */
  description?: string;
  /**
   * @remarks
   * The parameters that are used.
   */
  usageParameters?: UpdateFunctionInstanceRequestUsageParameters[];
  static names(): { [key: string]: string } {
    return {
      createParameters: 'createParameters',
      cron: 'cron',
      description: 'description',
      usageParameters: 'usageParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createParameters: { 'type': 'array', 'itemType': UpdateFunctionInstanceRequestCreateParameters },
      cron: 'string',
      description: 'string',
      usageParameters: { 'type': 'array', 'itemType': UpdateFunctionInstanceRequestUsageParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * "Instance.NotExist"
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 10
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "instance not exist."
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * "3A809095-C554-5CF5-8FCE-BE19D4673790"
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request. Valid values:
   * 
   * *       OK: The request was successful.
   * *       FAIL: The request failed.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFunctionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFunctionInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The resource data. The data structure varies with the resource type.
   */
  data?: UpdateFunctionResourceRequestData;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * updated description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateFunctionResourceRequestData,
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code. If no error occurs, this parameter is left empty.
   * 
   * @example
   * InvalidRequest
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request. Unit: milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Invalid request.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E375703-5B12-5466-8B48-C4D01AE1291A
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFunctionResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFunctionResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSearchStrategyRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: SearchStrategy;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SearchStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSearchStrategyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABCDEFGH
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

export class UpdateSearchStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSearchStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSearchStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSortScriptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9F165784-5507-5342-ABF3-545293F9808A
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

export class UpdateSortScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSortScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSummariesRequest extends $tea.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateSummariesRequestBody[];
  /**
   * @remarks
   * Specifies whether the request is a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateSummariesRequestBody },
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSummariesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A389E09-7964-5A2B-FE9D-F6CFA7162852
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSummariesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSummariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSummariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDataSourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameter. For more information, see [DataSource](https://help.aliyun.com/document_detail/170005.html).
   */
  body?: DataSource;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DataSource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDataSourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FA2B338-AFDC-46B4-A132-B5487820C2BF
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned.
   * 
   * @example
   * []
   */
  result?: ValidateDataSourcesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ValidateDataSourcesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDataSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ValidateDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppCluster extends $tea.Model {
  maxQueryClauseLength?: number;
  maxTimeoutMS?: number;
  static names(): { [key: string]: string } {
    return {
      maxQueryClauseLength: 'maxQueryClauseLength',
      maxTimeoutMS: 'maxTimeoutMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxQueryClauseLength: 'number',
      maxTimeoutMS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGroupOrder extends $tea.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      duration: 'duration',
      pricingCycle: 'pricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledTaskFilter extends $tea.Model {
  days?: number;
  expression?: string;
  field?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'days',
      expression: 'expression',
      field: 'field',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: 'number',
      expression: 'string',
      field: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemaIndexSortConfig extends $tea.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemaIndexes extends $tea.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: SchemaIndexesSearchFieldsValue };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': SchemaIndexesSearchFieldsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemaTtlField extends $tea.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStrategyMergeConfig extends $tea.Model {
  docCount?: number;
  rankName?: string;
  static names(): { [key: string]: string } {
    return {
      docCount: 'docCount',
      rankName: 'rankName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docCount: 'number',
      rankName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStrategySearchConfigs extends $tea.Model {
  firstRankName?: string;
  mergeProportion?: number;
  /**
   * @example
   * keyword: 关键字查询 vector: 向量查询
   */
  queryType?: string;
  secondRankName?: string;
  static names(): { [key: string]: string } {
    return {
      firstRankName: 'firstRankName',
      mergeProportion: 'mergeProportion',
      queryType: 'queryType',
      secondRankName: 'secondRankName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstRankName: 'string',
      mergeProportion: 'number',
      queryType: 'string',
      secondRankName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SummaryMeta extends $tea.Model {
  element?: string;
  ellipsis?: string;
  field?: string;
  len?: number;
  snippet?: string;
  static names(): { [key: string]: string } {
    return {
      element: 'element',
      ellipsis: 'ellipsis',
      field: 'field',
      len: 'len',
      snippet: 'snippet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      element: 'string',
      ellipsis: 'string',
      field: 'string',
      len: 'number',
      snippet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestExperimentResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the experiment was created.
   * 
   * @example
   * 0
   */
  created?: number;
  /**
   * @remarks
   * The experiment ID.
   * 
   * @example
   * 12889
   */
  id?: string;
  /**
   * @remarks
   * The experiment alias.
   * 
   * @example
   * test3
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the experiment is in effect. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The experiment parameters.
   * 
   * @example
   * {"firstFormulaName": "default"}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The percentage of traffic that is routed to the experiment.
   * 
   * @example
   * 30
   */
  traffic?: number;
  /**
   * @remarks
   * The time when the experiment was last modified.
   * 
   * @example
   * 1589017861
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      online: 'online',
      params: 'params',
      traffic: 'traffic',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      online: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      traffic: 'number',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestGroupResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test group was created.
   * 
   * @example
   * 1588839490
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test group.
   * 
   * @example
   * 13466
   */
  id?: string;
  /**
   * @remarks
   * The alias of the test group.
   * 
   * @example
   * Group_2020-5-7_15:23:3
   */
  name?: string;
  /**
   * @remarks
   * The status of the test group.
   * 
   * *   0: not in effect
   * *   1: in effect
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time when the test group was last updated.
   * 
   * @example
   * 1588839490
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      status: 'status',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      status: 'number',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateABTestSceneResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test scenario was created.
   * 
   * @example
   * 0
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test group.
   * 
   * @example
   * 20405
   */
  id?: string;
  /**
   * @remarks
   * The name of the test group.
   * 
   * @example
   * kevintest_2020-5-7_15:21:48
   */
  name?: string;
  /**
   * @remarks
   * The status of the test scenario. Valid values:
   * 
   * *   0: not in effect
   * *   1: in effect
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time when the test scenario was last modified.
   * 
   * @example
   * 1589012351
   */
  updated?: number;
  /**
   * @remarks
   * The tag of the test scenario.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      status: 'status',
      updated: 'updated',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      status: 'number',
      updated: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestCluster extends $tea.Model {
  maxQueryClauseLength?: number;
  maxTimeoutMS?: number;
  static names(): { [key: string]: string } {
    return {
      maxQueryClauseLength: 'maxQueryClauseLength',
      maxTimeoutMS: 'maxTimeoutMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxQueryClauseLength: 'number',
      maxTimeoutMS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestDataSources extends $tea.Model {
  fields?: { [key: string]: any }[];
  keyField?: string;
  parameters?: { [key: string]: any };
  plugins?: { [key: string]: any };
  schemaName?: string;
  tableName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      keyField: 'keyField',
      parameters: 'parameters',
      plugins: 'plugins',
      schemaName: 'schemaName',
      tableName: 'tableName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      keyField: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plugins: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestDomain extends $tea.Model {
  category?: string;
  functions?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      functions: 'functions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      functions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestFirstRanks extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestQueryProcessors extends $tea.Model {
  active?: boolean;
  category?: string;
  domain?: string;
  indexes?: string[];
  name?: string;
  processors?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      category: 'category',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      category: 'string',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSchemaIndexSortConfig extends $tea.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSchemaIndexes extends $tea.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSchemaTtlField extends $tea.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSchema extends $tea.Model {
  indexSortConfig?: CreateAppRequestSchemaIndexSortConfig[];
  indexes?: CreateAppRequestSchemaIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: any };
  ttlField?: CreateAppRequestSchemaTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': CreateAppRequestSchemaIndexSortConfig },
      indexes: CreateAppRequestSchemaIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttlField: CreateAppRequestSchemaTtlField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSchemasIndexSortConfig extends $tea.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSchemasIndexes extends $tea.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSchemasTtlField extends $tea.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSchemas extends $tea.Model {
  indexSortConfig?: CreateAppRequestSchemasIndexSortConfig[];
  indexes?: CreateAppRequestSchemasIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: any };
  ttlField?: CreateAppRequestSchemasTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': CreateAppRequestSchemasIndexSortConfig },
      indexes: CreateAppRequestSchemasIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttlField: CreateAppRequestSchemasTtlField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSecondRanks extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSummariesMeta extends $tea.Model {
  element?: string;
  ellipsis?: string;
  field?: string;
  len?: number;
  snippet?: string;
  static names(): { [key: string]: string } {
    return {
      element: 'element',
      ellipsis: 'ellipsis',
      field: 'field',
      len: 'len',
      snippet: 'snippet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      element: 'string',
      ellipsis: 'string',
      field: 'string',
      len: 'number',
      snippet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestSummaries extends $tea.Model {
  meta?: CreateAppRequestSummariesMeta[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'array', 'itemType': CreateAppRequestSummariesMeta },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultCluster extends $tea.Model {
  maxQueryClauseLength?: number;
  maxTimeoutMS?: number;
  static names(): { [key: string]: string } {
    return {
      maxQueryClauseLength: 'maxQueryClauseLength',
      maxTimeoutMS: 'maxTimeoutMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxQueryClauseLength: 'number',
      maxTimeoutMS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultDataSources extends $tea.Model {
  fields?: { [key: string]: any }[];
  keyField?: string;
  parameters?: { [key: string]: any };
  plugins?: { [key: string]: any };
  schemaName?: string;
  tableName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      keyField: 'keyField',
      parameters: 'parameters',
      plugins: 'plugins',
      schemaName: 'schemaName',
      tableName: 'tableName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      keyField: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plugins: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultDomainFunctions extends $tea.Model {
  algo?: string[];
  qp?: string[];
  service?: string[];
  static names(): { [key: string]: string } {
    return {
      algo: 'algo',
      qp: 'qp',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algo: { 'type': 'array', 'itemType': 'string' },
      qp: { 'type': 'array', 'itemType': 'string' },
      service: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultDomain extends $tea.Model {
  category?: string;
  functions?: CreateAppResponseBodyResultDomainFunctions;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      functions: 'functions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      functions: CreateAppResponseBodyResultDomainFunctions,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultFirstRanks extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultQueryProcessors extends $tea.Model {
  active?: boolean;
  category?: string;
  domain?: string;
  indexes?: string[];
  name?: string;
  processors?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      category: 'category',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      category: 'string',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultQuota extends $tea.Model {
  computeResource?: number;
  docSize?: number;
  qps?: number;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      qps: 'qps',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      qps: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSchemaIndexSortConfig extends $tea.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSchemaIndexes extends $tea.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSchemaTtlField extends $tea.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSchema extends $tea.Model {
  indexSortConfig?: CreateAppResponseBodyResultSchemaIndexSortConfig[];
  indexes?: CreateAppResponseBodyResultSchemaIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: any };
  ttlField?: CreateAppResponseBodyResultSchemaTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': CreateAppResponseBodyResultSchemaIndexSortConfig },
      indexes: CreateAppResponseBodyResultSchemaIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttlField: CreateAppResponseBodyResultSchemaTtlField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSchemasIndexSortConfig extends $tea.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSchemasIndexes extends $tea.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSchemasTtlField extends $tea.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSchemas extends $tea.Model {
  indexSortConfig?: CreateAppResponseBodyResultSchemasIndexSortConfig[];
  indexes?: CreateAppResponseBodyResultSchemasIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: any };
  ttlField?: CreateAppResponseBodyResultSchemasTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': CreateAppResponseBodyResultSchemasIndexSortConfig },
      indexes: CreateAppResponseBodyResultSchemasIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttlField: CreateAppResponseBodyResultSchemasTtlField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSecondRanks extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSummariesMeta extends $tea.Model {
  element?: string;
  ellipsis?: string;
  field?: string;
  len?: number;
  snippet?: string;
  static names(): { [key: string]: string } {
    return {
      element: 'element',
      ellipsis: 'ellipsis',
      field: 'field',
      len: 'len',
      snippet: 'snippet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      element: 'string',
      ellipsis: 'string',
      field: 'string',
      len: 'number',
      snippet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSummaries extends $tea.Model {
  meta?: CreateAppResponseBodyResultSummariesMeta[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'array', 'itemType': CreateAppResponseBodyResultSummariesMeta },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResult extends $tea.Model {
  autoSwitch?: boolean;
  cluster?: CreateAppResponseBodyResultCluster;
  clusterName?: string;
  dataSources?: CreateAppResponseBodyResultDataSources[];
  description?: string;
  domain?: CreateAppResponseBodyResultDomain;
  fetchFields?: string[];
  firstRanks?: CreateAppResponseBodyResultFirstRanks[];
  id?: string;
  interpretations?: { [key: string]: any };
  isCurrent?: boolean;
  progressPercent?: number;
  prompts?: { [key: string]: any }[];
  queryProcessors?: CreateAppResponseBodyResultQueryProcessors[];
  quota?: CreateAppResponseBodyResultQuota;
  schema?: CreateAppResponseBodyResultSchema;
  schemas?: CreateAppResponseBodyResultSchemas[];
  secondRanks?: CreateAppResponseBodyResultSecondRanks[];
  status?: string;
  summaries?: CreateAppResponseBodyResultSummaries[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoSwitch: 'autoSwitch',
      cluster: 'cluster',
      clusterName: 'clusterName',
      dataSources: 'dataSources',
      description: 'description',
      domain: 'domain',
      fetchFields: 'fetchFields',
      firstRanks: 'firstRanks',
      id: 'id',
      interpretations: 'interpretations',
      isCurrent: 'isCurrent',
      progressPercent: 'progressPercent',
      prompts: 'prompts',
      queryProcessors: 'queryProcessors',
      quota: 'quota',
      schema: 'schema',
      schemas: 'schemas',
      secondRanks: 'secondRanks',
      status: 'status',
      summaries: 'summaries',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitch: 'boolean',
      cluster: CreateAppResponseBodyResultCluster,
      clusterName: 'string',
      dataSources: { 'type': 'array', 'itemType': CreateAppResponseBodyResultDataSources },
      description: 'string',
      domain: CreateAppResponseBodyResultDomain,
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      firstRanks: { 'type': 'array', 'itemType': CreateAppResponseBodyResultFirstRanks },
      id: 'string',
      interpretations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isCurrent: 'boolean',
      progressPercent: 'number',
      prompts: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      queryProcessors: { 'type': 'array', 'itemType': CreateAppResponseBodyResultQueryProcessors },
      quota: CreateAppResponseBodyResultQuota,
      schema: CreateAppResponseBodyResultSchema,
      schemas: { 'type': 'array', 'itemType': CreateAppResponseBodyResultSchemas },
      secondRanks: { 'type': 'array', 'itemType': CreateAppResponseBodyResultSecondRanks },
      status: 'string',
      summaries: { 'type': 'array', 'itemType': CreateAppResponseBodyResultSummaries },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupRequestQuota extends $tea.Model {
  computeResource?: number;
  docSize?: number;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBodyResultQuota extends $tea.Model {
  /**
   * @remarks
   * The computing resources. Unit: logical computing units (LCUs).
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications of the application. Valid values:
   * 
   * *   opensearch.share.junior: basic
   * *   opensearch.share.common: shared general-purpose
   * *   opensearch.share.compute: shared computing
   * *   opensearch.share.storage: shared storage
   * *   opensearch.private.common: exclusive general-purpose
   * *   opensearch.private.compute: exclusive computing
   * *   opensearch.private.storage: exclusive storage
   * 
   * @example
   * opensearch.share.common
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The billing method of the application. Valid values:
   * 
   * *   POSTPAY: pay-as-you-go
   * *   PREPAY: subscription
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billing model. Valid values:
   * 
   * *   1: computing resources
   * *   2: queries per second (QPS)
   * 
   * @example
   * 1
   */
  chargingWay?: number;
  /**
   * @remarks
   * The code of the commodity.
   * 
   * @example
   * opensearch
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1590139542
   */
  created?: number;
  /**
   * @remarks
   * The ID of the current online version.
   * 
   * @example
   * 100302903
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The type of the industry. Valid values:
   * 
   * *   GENERAL: general.
   * *   ECOMMERCE: e-commerce.
   * *   IT_CONTENT: IT content.
   * 
   * @example
   * GENERAL
   */
  domain?: string;
  engineType?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * -
   */
  expireOn?: string;
  /**
   * @remarks
   * The approval status of the quotas. Valid values:
   * 
   * *   0: The quotas are approved.
   * *   1: The quotas are being approved.
   * 
   * @example
   * 0
   */
  hasPendingQuotaReviewTask?: number;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 100302881
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * -
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock mode of the instance. Valid values:
   * 
   * *   Unlock: The instance is not locked.
   * *   LockByExpiration: The instance is automatically locked after it expires.
   * *   ManualLock: The instance is manually locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * lsh_test_1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the order is complete. Valid values:
   * 
   * *   0: The order is in progress.
   * *   1: The order is complete.
   * 
   * @example
   * 1
   */
  produced?: number;
  /**
   * @remarks
   * The name of the A/B test group.
   * 
   * @example
   * -
   */
  projectId?: string;
  /**
   * @remarks
   * The information about the quotas of the application.
   */
  quota?: CreateAppGroupResponseBodyResultQuota;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   producing
   * *   review_pending
   * *   config_pending
   * *   normal
   * *   frozen
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the current online version was published.
   * 
   * @example
   * 1590486386
   */
  switchedTime?: number;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a standard application.
   * *   advance: an advanced application which is of an old application type. New applications cannot be of this type.
   * *   enhanced: an advanced application which is of a new application type.
   * 
   * @example
   * enhanced
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was last updated.
   * 
   * @example
   * 1590978265
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      chargingWay: 'chargingWay',
      commodityCode: 'commodityCode',
      created: 'created',
      currentVersion: 'currentVersion',
      description: 'description',
      domain: 'domain',
      engineType: 'engineType',
      expireOn: 'expireOn',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      id: 'id',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      name: 'name',
      produced: 'produced',
      projectId: 'projectId',
      quota: 'quota',
      status: 'status',
      switchedTime: 'switchedTime',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      chargingWay: 'number',
      commodityCode: 'string',
      created: 'number',
      currentVersion: 'string',
      description: 'string',
      domain: 'string',
      engineType: 'string',
      expireOn: 'string',
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      name: 'string',
      produced: 'number',
      projectId: 'string',
      quota: CreateAppGroupResponseBodyResultQuota,
      status: 'string',
      switchedTime: 'number',
      type: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupCredentialsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * app_group_123
   */
  appGroupId?: number;
  enabled?: boolean;
  /**
   * @example
   * generated_token_string
   */
  token?: string;
  /**
   * @example
   * api-token
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'appGroupId',
      enabled: 'enabled',
      token: 'token',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      enabled: 'boolean',
      token: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The parameters that are used by a function in the expression.
   * 
   * @example
   * 1
   */
  arg?: string;
  /**
   * @remarks
   * The attribute, feature functions, or field to be searched for.
   * 
   * @example
   * static_bm25()
   */
  attribute?: string;
  /**
   * @remarks
   * The weight. Valid values: [-100000,100000]. The value cannot be 0.
   * 
   * @example
   * 10
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirstRankResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The content of the expression.
   */
  meta?: CreateFirstRankResponseBodyResultMeta[];
  /**
   * @remarks
   * The name of the expression.
   * 
   * @example
   * default
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      meta: { 'type': 'array', 'itemType': CreateFirstRankResponseBodyResultMeta },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionInstanceRequestCreateParameters extends $tea.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * title_field
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * title
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
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

export class CreateFunctionInstanceRequestUsageParameters extends $tea.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * allow_dict_id
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
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

export class CreateFunctionResourceRequestDataGeneratorsInputFeatures extends $tea.Model {
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * system_item_id
   */
  name?: string;
  /**
   * @remarks
   * The type of the feature.
   * 
   * Valid values:
   * 
   * *   item
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   user
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * item
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

export class CreateFunctionResourceRequestDataGeneratorsInput extends $tea.Model {
  /**
   * @remarks
   * The input features.
   */
  features?: CreateFunctionResourceRequestDataGeneratorsInputFeatures[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': CreateFunctionResourceRequestDataGeneratorsInputFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResourceRequestDataGenerators extends $tea.Model {
  /**
   * @remarks
   * The type of the feature generator.
   * 
   * Valid values:
   * 
   * *   lookup
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   sequence
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   overlap
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   raw
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   combo
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   id
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * id
   */
  generator?: string;
  /**
   * @remarks
   * The input.
   */
  input?: CreateFunctionResourceRequestDataGeneratorsInput;
  /**
   * @remarks
   * The name of the output feature.
   * 
   * @example
   * item_id_feature
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      generator: 'Generator',
      input: 'Input',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generator: 'string',
      input: CreateFunctionResourceRequestDataGeneratorsInput,
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResourceRequestData extends $tea.Model {
  /**
   * @remarks
   * The content of the file that corresponds to a resource of the raw_file type.
   * 
   * @example
   * "abc"
   */
  content?: string;
  /**
   * @remarks
   * The feature generators that correspond to resources of the feature_generator type.
   */
  generators?: CreateFunctionResourceRequestDataGenerators[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generators: 'Generators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generators: { 'type': 'array', 'itemType': CreateFunctionResourceRequestDataGenerators },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInterventionDictionaryResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * dianshang
   */
  analyzer?: string;
  /**
   * @remarks
   * The time when the test scenario was created.
   * 
   * @example
   * 1591086323
   */
  created?: string;
  /**
   * @remarks
   * The name of the test group.
   * 
   * @example
   * testb
   */
  name?: string;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * *   stopword: an intervention dictionary for stop word filtering
   * *   synonym: an intervention dictionary for synonym configuration
   * *   correction: an intervention dictionary for spelling correction
   * *   category_prediction: an intervention dictionary for category prediction
   * *   ner: an intervention dictionary for named entity recognition (NER)
   * *   term_weighting: an intervention dictionary for term weight analysis
   * 
   * @example
   * ner
   */
  type?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was last updated.
   * 
   * @example
   * 1591086323
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      analyzer: 'analyzer',
      created: 'created',
      name: 'name',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzer: 'string',
      created: 'string',
      name: 'string',
      type: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueryProcessorResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the query analysis rule is the default one.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the query analysis rule was created.
   * 
   * @example
   * 1587398402
   */
  created?: number;
  /**
   * @remarks
   * The type of the industry to which the query analysis rule was applied. Valid values:
   * 
   * *   GENERAL: general.
   * *   ECOMMERCE: e-commerce.
   * *   IT_CONTENT: IT content.
   * 
   * @example
   * GENERAL
   */
  domain?: string;
  /**
   * @remarks
   * The indexes to which the query analysis rule was applied.
   */
  indexes?: string[];
  /**
   * @remarks
   * The name of the query analysis rule.
   * 
   * @example
   * query_filter
   */
  name?: string;
  /**
   * @remarks
   * The features that are used in the query analysis rule.
   * 
   * For more information, see [QueryProcessor](https://help.aliyun.com/document_detail/170014.html).
   */
  processors?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the query analysis rule was last modified.
   * 
   * @example
   * 1587398402
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSortScriptResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The sort phase to which the script applies.
   * 
   * @example
   * second_rank
   */
  scope?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * rank_cava_20230606_v7
   */
  scriptName?: string;
  /**
   * @remarks
   * The script type.
   * 
   * @example
   * cava_script
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      scriptName: 'scriptName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      scriptName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponseBodyResultParams extends $tea.Model {
  /**
   * @remarks
   * The name of the rough sort policy.
   * 
   * @example
   * default
   */
  firstFormulaName?: string;
  static names(): { [key: string]: string } {
    return {
      firstFormulaName: 'first_formula_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstFormulaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test was created.
   * 
   * @example
   * 1588842080
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test.
   * 
   * @example
   * 12888
   */
  id?: string;
  /**
   * @remarks
   * The name of the test.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The status of the test. Valid values:
   * 
   * *   true: in effect
   * *   false: not in effect
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The parameters of the test.
   */
  params?: DescribeABTestExperimentResponseBodyResultParams;
  /**
   * @remarks
   * The percentage of traffic that is routed to the test.
   * 
   * @example
   * 30
   */
  traffic?: number;
  /**
   * @remarks
   * The time when the test was last modified.
   * 
   * @example
   * 1588842080
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      online: 'online',
      params: 'params',
      traffic: 'traffic',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      online: 'boolean',
      params: DescribeABTestExperimentResponseBodyResultParams,
      traffic: 'number',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestGroupResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test group was created.
   * 
   * @example
   * 1588839490
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test group.
   * 
   * @example
   * 13466
   */
  id?: string;
  /**
   * @remarks
   * The name of the test group.
   * 
   * @example
   * Group_2020-5-7_15:23:3
   */
  name?: string;
  /**
   * @remarks
   * The status of the test group. Valid values:
   * 
   * *   0: not in effect
   * *   1: in effect
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time when the test group was last modified.
   * 
   * @example
   * 1588839490
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      status: 'status',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      status: 'number',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestSceneResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test scenario was created.
   * 
   * @example
   * 1596527691
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test scenario.
   * 
   * @example
   * 20614
   */
  id?: string;
  /**
   * @remarks
   * The name of the test scenario.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The status of the test scenario. Valid values:
   * 
   * *   0: The test is stopped.
   * *   1: The test is started.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The time when the test was last modified.
   * 
   * @example
   * 1596527691
   */
  updated?: number;
  /**
   * @remarks
   * The indicators of the test scenarios.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      status: 'status',
      updated: 'updated',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      status: 'number',
      updated: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultCluster extends $tea.Model {
  maxQueryClauseLength?: number;
  maxTimeoutMS?: number;
  static names(): { [key: string]: string } {
    return {
      maxQueryClauseLength: 'maxQueryClauseLength',
      maxTimeoutMS: 'maxTimeoutMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxQueryClauseLength: 'number',
      maxTimeoutMS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultDataSources extends $tea.Model {
  fields?: { [key: string]: any }[];
  keyField?: string;
  parameters?: { [key: string]: any };
  plugins?: { [key: string]: any };
  schemaName?: string;
  tableName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      keyField: 'keyField',
      parameters: 'parameters',
      plugins: 'plugins',
      schemaName: 'schemaName',
      tableName: 'tableName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      keyField: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plugins: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultDomainFunctions extends $tea.Model {
  /**
   * @remarks
   * Algorithm structure
   * 
   * @example
   * []
   */
  algo?: string[];
  /**
   * @remarks
   * Queryprocessor description
   * 
   * @example
   * []
   */
  qp?: string[];
  /**
   * @remarks
   * Function description
   * 
   * @example
   * []
   */
  service?: string[];
  static names(): { [key: string]: string } {
    return {
      algo: 'algo',
      qp: 'qp',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algo: { 'type': 'array', 'itemType': 'string' },
      qp: { 'type': 'array', 'itemType': 'string' },
      service: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultDomain extends $tea.Model {
  /**
   * @remarks
   * The category. By default, this parameter is left empty.
   * 
   * @example
   * -
   */
  category?: string;
  /**
   * @remarks
   * search functions
   * 
   * @example
   * {}
   */
  functions?: DescribeAppResponseBodyResultDomainFunctions;
  /**
   * @remarks
   * The name
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      functions: 'functions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      functions: DescribeAppResponseBodyResultDomainFunctions,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultFirstRanks extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultQueryProcessors extends $tea.Model {
  active?: boolean;
  category?: string;
  domain?: string;
  indexes?: string[];
  name?: string;
  processors?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      category: 'category',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      category: 'string',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultQuota extends $tea.Model {
  /**
   * @remarks
   * The computing resources. Unit: logical computing units (LCUs).
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The number of search requests per second. You are charged based on the number of search requests per second in the earlier billing model.
   * 
   * @example
   * 5
   */
  qps?: number;
  /**
   * @remarks
   * The specifications of the application. Valid values:
   * 
   * *   opensearch.share.junior: basic
   * *   opensearch.share.common: shared general-purpose
   * *   opensearch.share.compute: shared computing
   * *   opensearch.share.storage: shared storage
   * *   opensearch.private.common: exclusive general-purpose
   * *   opensearch.private.compute: exclusive computing
   * *   opensearch.private.storage: exclusive storage
   * 
   * @example
   * opensearch.share.common
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      qps: 'qps',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      qps: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSchemaIndexSortConfig extends $tea.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSchemaIndexes extends $tea.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSchemaTtlField extends $tea.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSchema extends $tea.Model {
  indexSortConfig?: DescribeAppResponseBodyResultSchemaIndexSortConfig[];
  indexes?: DescribeAppResponseBodyResultSchemaIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: any };
  ttlField?: DescribeAppResponseBodyResultSchemaTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultSchemaIndexSortConfig },
      indexes: DescribeAppResponseBodyResultSchemaIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttlField: DescribeAppResponseBodyResultSchemaTtlField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSchemasIndexSortConfig extends $tea.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSchemasIndexes extends $tea.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSchemasTtlField extends $tea.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSchemas extends $tea.Model {
  indexSortConfig?: DescribeAppResponseBodyResultSchemasIndexSortConfig[];
  indexes?: DescribeAppResponseBodyResultSchemasIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: any };
  ttlField?: DescribeAppResponseBodyResultSchemasTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultSchemasIndexSortConfig },
      indexes: DescribeAppResponseBodyResultSchemasIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttlField: DescribeAppResponseBodyResultSchemasTtlField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSecondRanks extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSummariesMeta extends $tea.Model {
  element?: string;
  ellipsis?: string;
  field?: string;
  len?: number;
  snippet?: string;
  static names(): { [key: string]: string } {
    return {
      element: 'element',
      ellipsis: 'ellipsis',
      field: 'field',
      len: 'len',
      snippet: 'snippet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      element: 'string',
      ellipsis: 'string',
      field: 'string',
      len: 'number',
      snippet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResultSummaries extends $tea.Model {
  meta?: DescribeAppResponseBodyResultSummariesMeta[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultSummariesMeta },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the version is automatically published to the online environment.
   * 
   * @example
   * true
   */
  autoSwitch?: boolean;
  cluster?: DescribeAppResponseBodyResultCluster;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * -
   */
  clusterName?: string;
  dataSources?: DescribeAppResponseBodyResultDataSources[];
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The type of the industry. Valid values:
   * 
   * *   GENERAL
   * *   ECOMMERCE
   * *   IT_CONTENT
   * 
   * @example
   * GENERAL
   */
  domain?: DescribeAppResponseBodyResultDomain;
  /**
   * @remarks
   * The default display fields.
   * 
   * @example
   * []
   */
  fetchFields?: string[];
  firstRanks?: DescribeAppResponseBodyResultFirstRanks[];
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 100303063
   */
  id?: string;
  interpretations?: { [key: string]: any };
  isCurrent?: boolean;
  /**
   * @remarks
   * The progress of data import, in percentage. For example, a value of 83 indicates 83%.
   * 
   * @example
   * 100
   */
  progressPercent?: number;
  prompts?: { [key: string]: any }[];
  queryProcessors?: DescribeAppResponseBodyResultQueryProcessors[];
  /**
   * @remarks
   * The quota information about the version.
   * 
   * @example
   * {}
   */
  quota?: DescribeAppResponseBodyResultQuota;
  /**
   * @remarks
   * The application schema.
   * 
   * @example
   * {}
   */
  schema?: DescribeAppResponseBodyResultSchema;
  schemas?: DescribeAppResponseBodyResultSchemas[];
  secondRanks?: DescribeAppResponseBodyResultSecondRanks[];
  /**
   * @remarks
   * The status of the version. Valid values:
   * 
   * *   ok
   * *   stopped
   * *   frozen
   * *   initializing
   * *   unavailable
   * *   data_waiting
   * *   data_preparing
   * 
   * @example
   * ok
   */
  status?: string;
  summaries?: DescribeAppResponseBodyResultSummaries[];
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a standard application.
   * *   advance: an advanced application which is of an old application type. New applications cannot be of this type.
   * *   enhanced: an advanced application which is of a new application type.
   * 
   * @example
   * enhanced
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoSwitch: 'autoSwitch',
      cluster: 'cluster',
      clusterName: 'clusterName',
      dataSources: 'dataSources',
      description: 'description',
      domain: 'domain',
      fetchFields: 'fetchFields',
      firstRanks: 'firstRanks',
      id: 'id',
      interpretations: 'interpretations',
      isCurrent: 'isCurrent',
      progressPercent: 'progressPercent',
      prompts: 'prompts',
      queryProcessors: 'queryProcessors',
      quota: 'quota',
      schema: 'schema',
      schemas: 'schemas',
      secondRanks: 'secondRanks',
      status: 'status',
      summaries: 'summaries',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitch: 'boolean',
      cluster: DescribeAppResponseBodyResultCluster,
      clusterName: 'string',
      dataSources: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultDataSources },
      description: 'string',
      domain: DescribeAppResponseBodyResultDomain,
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      firstRanks: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultFirstRanks },
      id: 'string',
      interpretations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isCurrent: 'boolean',
      progressPercent: 'number',
      prompts: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      queryProcessors: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultQueryProcessors },
      quota: DescribeAppResponseBodyResultQuota,
      schema: DescribeAppResponseBodyResultSchema,
      schemas: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultSchemas },
      secondRanks: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultSecondRanks },
      status: 'string',
      summaries: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultSummaries },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponseBodyResultQuota extends $tea.Model {
  /**
   * @remarks
   * The computing resources. Unit: logical computing unit (LCU).
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications. Valid values:
   * 
   * *   opensearch.share.junior: basic.
   * *   opensearch.share.common: shared general-purpose.
   * *   opensearch.share.compute: shared computing.
   * *   opensearch.share.storage: shared storage.
   * *   opensearch.private.common: exclusive general-purpose.
   * *   opensearch.private.compute: exclusive computing.
   * *   opensearch.private.storage: exclusive storage.
   * 
   * @example
   * opensearch.share.common
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponseBodyResultTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * foo
   */
  key?: string;
  /**
   * @remarks
   * The tag value
   * 
   * @example
   * bar
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class DescribeAppGroupResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   POSTPAY: pay-as-you-go.
   * *   PREPAY: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billable item. Valid values:
   * 
   * *   1: computing resources.
   * *   2: queries per second (QPS).
   * 
   * @example
   * 1
   */
  chargingWay?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * opensearch
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1575442875
   */
  created?: number;
  /**
   * @remarks
   * The ID of the current online version.
   * 
   * @example
   * 110116134
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The industry of the application.
   * 
   * @example
   * ecommerce
   */
  domain?: string;
  engineType?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * -
   */
  expireOn?: string;
  /**
   * @remarks
   * The ID of the created rough sort expression.
   * 
   * @example
   * 0
   */
  firstRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The approval state of the quotas. Valid values:
   * 
   * *   0: The application is in service.
   * *   1: The quotas are being reviewed.
   * 
   * @example
   * 0
   */
  hasPendingQuotaReviewTask?: number;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 110116134
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * -
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock state. Valid values:
   * 
   * *   Unlock: The instance is unlocked.
   * *   LockByExpiration: The instance is automatically locked after it expires.
   * *   ManualLock: The instance is manually locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * Indicates whether the instance is automatically locked after it expires.
   * 
   * @example
   * 0
   */
  lockedByExpiration?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * os_function_test_v1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the fine sort expression that is being created.
   * 
   * @example
   * 0
   */
  pendingSecondRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The ID of the order that is not complete.
   * 
   * @example
   * -
   */
  processingOrderId?: string;
  /**
   * @remarks
   * Indicates whether the application is created. Valid values:
   * 
   * *   0: The application is being created.
   * *   1: The application is created.
   * 
   * @example
   * 1
   */
  produced?: number;
  /**
   * @remarks
   * The name of the A/B test group.
   * 
   * @example
   * -
   */
  projectId?: string;
  /**
   * @remarks
   * The information about the quotas of the application.
   */
  quota?: DescribeAppGroupResponseBodyResultQuota;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmoiyerh6nzly
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the created fine sort expression.
   * 
   * @example
   * 0
   */
  secondRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The state of the application. Valid values:
   * 
   * *   producing: The application is being created.
   * *   review_pending: The application is being reviewed.
   * *   config_pending: The application is to be configured.
   * *   normal: The application is in service.
   * *   frozen: The application is frozen.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the current online version was published.
   * 
   * @example
   * 0
   */
  switchedTime?: number;
  /**
   * @remarks
   * The application tags.
   */
  tags?: DescribeAppGroupResponseBodyResultTags[];
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a High-performance Search Edition application.
   * *
   * *   enhanced: an Industry Algorithm Edition application.
   * 
   * @example
   * enhanced
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was last updated.
   * 
   * @example
   * 1578916076
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      chargingWay: 'chargingWay',
      commodityCode: 'commodityCode',
      created: 'created',
      currentVersion: 'currentVersion',
      description: 'description',
      domain: 'domain',
      engineType: 'engineType',
      expireOn: 'expireOn',
      firstRankAlgoDeploymentId: 'firstRankAlgoDeploymentId',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      id: 'id',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      lockedByExpiration: 'lockedByExpiration',
      name: 'name',
      pendingSecondRankAlgoDeploymentId: 'pendingSecondRankAlgoDeploymentId',
      processingOrderId: 'processingOrderId',
      produced: 'produced',
      projectId: 'projectId',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      status: 'status',
      switchedTime: 'switchedTime',
      tags: 'tags',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      chargingWay: 'number',
      commodityCode: 'string',
      created: 'number',
      currentVersion: 'string',
      description: 'string',
      domain: 'string',
      engineType: 'string',
      expireOn: 'string',
      firstRankAlgoDeploymentId: 'number',
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      lockedByExpiration: 'number',
      name: 'string',
      pendingSecondRankAlgoDeploymentId: 'number',
      processingOrderId: 'string',
      produced: 'number',
      projectId: 'string',
      quota: DescribeAppGroupResponseBodyResultQuota,
      resourceGroupId: 'string',
      secondRankAlgoDeploymentId: 'number',
      status: 'string',
      switchedTime: 'number',
      tags: { 'type': 'array', 'itemType': DescribeAppGroupResponseBodyResultTags },
      type: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultCluster extends $tea.Model {
  maxQueryClauseLength?: number;
  maxTimeoutMS?: number;
  static names(): { [key: string]: string } {
    return {
      maxQueryClauseLength: 'maxQueryClauseLength',
      maxTimeoutMS: 'maxTimeoutMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxQueryClauseLength: 'number',
      maxTimeoutMS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultDataSources extends $tea.Model {
  fields?: { [key: string]: any }[];
  keyField?: string;
  parameters?: { [key: string]: any };
  plugins?: { [key: string]: any };
  schemaName?: string;
  tableName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      keyField: 'keyField',
      parameters: 'parameters',
      plugins: 'plugins',
      schemaName: 'schemaName',
      tableName: 'tableName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      keyField: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plugins: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultDomainFunctions extends $tea.Model {
  algo?: string[];
  qp?: string[];
  service?: string[];
  static names(): { [key: string]: string } {
    return {
      algo: 'algo',
      qp: 'qp',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algo: { 'type': 'array', 'itemType': 'string' },
      qp: { 'type': 'array', 'itemType': 'string' },
      service: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultDomain extends $tea.Model {
  category?: string;
  functions?: DescribeAppsResponseBodyResultDomainFunctions;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      functions: 'functions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      functions: DescribeAppsResponseBodyResultDomainFunctions,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultFirstRanks extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultQueryProcessors extends $tea.Model {
  active?: boolean;
  category?: string;
  domain?: string;
  indexes?: string[];
  name?: string;
  processors?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      category: 'category',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      category: 'string',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultQuota extends $tea.Model {
  computeResource?: number;
  docSize?: number;
  qps?: number;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      qps: 'qps',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      qps: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemaIndexSortConfig extends $tea.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemaIndexes extends $tea.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemaTtlField extends $tea.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchema extends $tea.Model {
  indexSortConfig?: DescribeAppsResponseBodyResultSchemaIndexSortConfig[];
  indexes?: DescribeAppsResponseBodyResultSchemaIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: any };
  ttlField?: DescribeAppsResponseBodyResultSchemaTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultSchemaIndexSortConfig },
      indexes: DescribeAppsResponseBodyResultSchemaIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttlField: DescribeAppsResponseBodyResultSchemaTtlField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemasIndexSortConfig extends $tea.Model {
  direction?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemasIndexes extends $tea.Model {
  filterFields?: string[];
  searchFields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filterFields: 'filterFields',
      searchFields: 'searchFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterFields: { 'type': 'array', 'itemType': 'string' },
      searchFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemasTtlField extends $tea.Model {
  name?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemas extends $tea.Model {
  indexSortConfig?: DescribeAppsResponseBodyResultSchemasIndexSortConfig[];
  indexes?: DescribeAppsResponseBodyResultSchemasIndexes;
  name?: string;
  routeField?: string;
  routeFieldValues?: string[];
  secondRouteField?: string;
  tables?: { [key: string]: any };
  ttlField?: DescribeAppsResponseBodyResultSchemasTtlField;
  static names(): { [key: string]: string } {
    return {
      indexSortConfig: 'indexSortConfig',
      indexes: 'indexes',
      name: 'name',
      routeField: 'routeField',
      routeFieldValues: 'routeFieldValues',
      secondRouteField: 'secondRouteField',
      tables: 'tables',
      ttlField: 'ttlField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexSortConfig: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultSchemasIndexSortConfig },
      indexes: DescribeAppsResponseBodyResultSchemasIndexes,
      name: 'string',
      routeField: 'string',
      routeFieldValues: { 'type': 'array', 'itemType': 'string' },
      secondRouteField: 'string',
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttlField: DescribeAppsResponseBodyResultSchemasTtlField,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSecondRanks extends $tea.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSummariesMeta extends $tea.Model {
  element?: string;
  ellipsis?: string;
  field?: string;
  len?: number;
  snippet?: string;
  static names(): { [key: string]: string } {
    return {
      element: 'element',
      ellipsis: 'ellipsis',
      field: 'field',
      len: 'len',
      snippet: 'snippet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      element: 'string',
      ellipsis: 'string',
      field: 'string',
      len: 'number',
      snippet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSummaries extends $tea.Model {
  meta?: DescribeAppsResponseBodyResultSummariesMeta[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultSummariesMeta },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResult extends $tea.Model {
  autoSwitch?: boolean;
  cluster?: DescribeAppsResponseBodyResultCluster;
  clusterName?: string;
  dataSources?: DescribeAppsResponseBodyResultDataSources[];
  description?: string;
  domain?: DescribeAppsResponseBodyResultDomain;
  fetchFields?: string[];
  firstRanks?: DescribeAppsResponseBodyResultFirstRanks[];
  id?: string;
  interpretations?: { [key: string]: any };
  isCurrent?: boolean;
  progressPercent?: number;
  prompts?: { [key: string]: any }[];
  queryProcessors?: DescribeAppsResponseBodyResultQueryProcessors[];
  quota?: DescribeAppsResponseBodyResultQuota;
  schema?: DescribeAppsResponseBodyResultSchema;
  schemas?: DescribeAppsResponseBodyResultSchemas[];
  secondRanks?: DescribeAppsResponseBodyResultSecondRanks[];
  status?: string;
  summaries?: DescribeAppsResponseBodyResultSummaries[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoSwitch: 'autoSwitch',
      cluster: 'cluster',
      clusterName: 'clusterName',
      dataSources: 'dataSources',
      description: 'description',
      domain: 'domain',
      fetchFields: 'fetchFields',
      firstRanks: 'firstRanks',
      id: 'id',
      interpretations: 'interpretations',
      isCurrent: 'isCurrent',
      progressPercent: 'progressPercent',
      prompts: 'prompts',
      queryProcessors: 'queryProcessors',
      quota: 'quota',
      schema: 'schema',
      schemas: 'schemas',
      secondRanks: 'secondRanks',
      status: 'status',
      summaries: 'summaries',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitch: 'boolean',
      cluster: DescribeAppsResponseBodyResultCluster,
      clusterName: 'string',
      dataSources: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultDataSources },
      description: 'string',
      domain: DescribeAppsResponseBodyResultDomain,
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      firstRanks: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultFirstRanks },
      id: 'string',
      interpretations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isCurrent: 'boolean',
      progressPercent: 'number',
      prompts: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      queryProcessors: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultQueryProcessors },
      quota: DescribeAppsResponseBodyResultQuota,
      schema: DescribeAppsResponseBodyResultSchema,
      schemas: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultSchemas },
      secondRanks: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultSecondRanks },
      status: 'string',
      summaries: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultSummaries },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCollctionResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1581065837
   */
  created?: number;
  /**
   * @remarks
   * The type of data collected. Valid values:
   * 
   * *   behavior: behavioral data.
   * *   item_info: project information.
   * *   industry_specific: industry-specific data.
   * 
   * @example
   * BEHAVIOR
   */
  dataCollectionType?: string;
  /**
   * @remarks
   * The ID of the data collection task.
   * 
   * @example
   * 286
   */
  id?: string;
  /**
   * @remarks
   * The industry name. Valid values:
   * 
   * *   general
   * *   ecommerce
   * 
   * @example
   * GENERAL
   */
  industryName?: string;
  /**
   * @remarks
   * The name of the data collection task.
   * 
   * @example
   * os_function_test_v1
   */
  name?: string;
  /**
   * @remarks
   * The status of the data collection feature. Valid values:
   * 
   * *   0: The feature is disabled.
   * *   1: The feature is being enabled.
   * *   2: The feature is enabled.
   * *   3: The feature failed to be enabled.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The sundial ID.
   * 
   * @example
   * 1755
   */
  sundialId?: string;
  /**
   * @remarks
   * The type of the source from which data was collected. Valid values:
   * 
   * *   server
   * *   web
   * *   app Note: Only server is supported.
   * 
   * @example
   * server
   */
  type?: string;
  /**
   * @remarks
   * The time when the data collection task was updated.
   * 
   * @example
   * 1581065904
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      dataCollectionType: 'dataCollectionType',
      id: 'id',
      industryName: 'industryName',
      name: 'name',
      status: 'status',
      sundialId: 'sundialId',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      dataCollectionType: 'string',
      id: 'string',
      industryName: 'string',
      name: 'string',
      status: 'number',
      sundialId: 'string',
      type: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirstRankResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The parameters that are used by a function in the expression.
   * 
   * @example
   * ar_edit_time
   */
  arg?: string;
  /**
   * @remarks
   * The attribute, feature function, or field to be searched for.
   * 
   * @example
   * timeliness_ms()
   */
  attribute?: string;
  /**
   * @remarks
   * The weight.
   * 
   * Valid values: [-100000,100000] (excluding 0).
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirstRankResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * false
   */
  active?: boolean;
  /**
   * @remarks
   * The description of the expression.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The content of the expression.
   */
  meta?: DescribeFirstRankResponseBodyResultMeta[];
  /**
   * @remarks
   * The name of the expression.
   * 
   * @example
   * ar_wear_edit_time
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: { 'type': 'array', 'itemType': DescribeFirstRankResponseBodyResultMeta },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInterventionDictionaryResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * -
   */
  analyzer?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was created.
   * 
   * @example
   * 1536233287
   */
  created?: string;
  /**
   * @remarks
   * The name of the intervention dictionary.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * *   stopword: an intervention dictionary for stop word filtering
   * *   synonym: an intervention dictionary for synonym configuration
   * *   correction: an intervention dictionary for spelling correction
   * *   category_prediction: an intervention dictionary for category prediction
   * *   ner: an intervention dictionary for named entity recognition (NER)
   * *   term_weighting: an intervention dictionary for term weight analysis
   * 
   * @example
   * category_prediction
   */
  type?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was last updated.
   * 
   * @example
   * 1536233287
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      analyzer: 'analyzer',
      created: 'created',
      name: 'name',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzer: 'string',
      created: 'string',
      name: 'string',
      type: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryProcessorResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the query analysis rule is the default one.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the query analysis rule was created.
   * 
   * @example
   * 1587398402
   */
  created?: number;
  /**
   * @remarks
   * The type of the industry. Valid values:
   * 
   * *   GENERAL
   * *   ECOMMERCE
   * *   IT_CONTENT
   * 
   * @example
   * GENERAL
   */
  domain?: string;
  /**
   * @remarks
   * The indexes to which the query analysis rule applies.
   */
  indexes?: string[];
  /**
   * @remarks
   * The name of the query analysis rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The features that are used in the query analysis rule.
   */
  processors?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the query analysis rule was last updated.
   * 
   * @example
   * 1587398402
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The console URL.
   * 
   * @example
   * https://opensearch-cn-hangzhou.console.aliyun.com
   */
  consoleUrl?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * opensearch.cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleUrl: 'consoleUrl',
      endpoint: 'endpoint',
      localName: 'localName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleUrl: 'string',
      endpoint: 'string',
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecondRankResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the expression was created.
   * 
   * @example
   * 1587052801
   */
  created?: number;
  /**
   * @remarks
   * The description of the expression.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The ID of the expression. This parameter appears only in the response.
   * 
   * @example
   * 89047
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the expression is the default one. This parameter appears only in the response. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isDefault?: string;
  /**
   * @remarks
   * Indicates whether the expression is a system expression. This parameter appears only in the response. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isSys?: string;
  /**
   * @remarks
   * The content of the fine sort expression.
   * 
   * You can define an expression that consists of fields, feature functions, and mathematical functions to implement complex sort logic.
   * 
   * @example
   * random()+now()
   */
  meta?: string;
  /**
   * @remarks
   * The name of the expression.
   * 
   * @example
   * tests
   */
  name?: string;
  /**
   * @remarks
   * The time when the expression was last updated.
   * 
   * @example
   * 1587052801
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      description: 'description',
      id: 'id',
      isDefault: 'isDefault',
      isSys: 'isSys',
      meta: 'meta',
      name: 'name',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      description: 'string',
      id: 'string',
      isDefault: 'string',
      isSys: 'string',
      meta: 'string',
      name: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryStatusResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 100298370
   */
  appGroupId?: string;
  /**
   * @remarks
   * The network type of the slow query optimization service. Valid values:
   * 
   * *   outer: the Internet
   * *   internal: the internal network
   * 
   * @example
   * internal
   */
  region?: string;
  /**
   * @remarks
   * The status of the slow query optimization service. Valid values:
   * 
   * *   enabled
   * *   disabled
   * *   n/a
   * 
   * @example
   * disabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'appGroupId',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      region: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMergedTableResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The tables on which the JOIN operation is performed.
   * 
   * @example
   * -
   */
  fromTable?: { [key: string]: any };
  /**
   * @remarks
   * The wide table that is generated after the JOIN operation is performed on multiple tables.
   * 
   * @example
   * -
   */
  mergeTable?: { [key: string]: any };
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * -
   */
  primaryKey?: string;
  static names(): { [key: string]: string } {
    return {
      fromTable: 'fromTable',
      mergeTable: 'mergeTable',
      primaryKey: 'primaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTable: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mergeTable: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      primaryKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCurrentVersionResponseBodyResultVersionConfigCreateParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * params1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * true
   */
  required?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCurrentVersionResponseBodyResultVersionConfigDepends extends $tea.Model {
  /**
   * @remarks
   * The condition.
   * 
   * @example
   * ""
   */
  condition?: string;
  /**
   * @remarks
   * The dependency.
   * 
   * @example
   * ""
   */
  dependency?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ""
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      dependency: 'Dependency',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      dependency: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCurrentVersionResponseBodyResultVersionConfigUsageParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ""
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * ""
   */
  required?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCurrentVersionResponseBodyResultVersionConfig extends $tea.Model {
  /**
   * @remarks
   * The parameters that are used to create the instance.
   * 
   * @example
   * [                 {                     "name": "params1",                     "required": "true",                     "formItemProps": "{\\"required\\": true, \\"pattern?\\": \\"/^[a-zA-Z][a-zA-Z0-9_]{0,29}$/\\"}",                     "componentProps": "{\\"component\\": \\"Input\\", \\"attributes\\": {\\"defaultValue\\": \\"value1\\"}}"                 }             ]
   */
  createParameters?: GetFunctionCurrentVersionResponseBodyResultVersionConfigCreateParameters[];
  /**
   * @remarks
   * The dependencies of the instance.
   */
  depends?: GetFunctionCurrentVersionResponseBodyResultVersionConfigDepends[];
  /**
   * @remarks
   * The parameters that are used to use the instance online.
   * 
   * @example
   * []
   */
  usageParameters?: GetFunctionCurrentVersionResponseBodyResultVersionConfigUsageParameters[];
  static names(): { [key: string]: string } {
    return {
      createParameters: 'CreateParameters',
      depends: 'Depends',
      usageParameters: 'UsageParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createParameters: { 'type': 'array', 'itemType': GetFunctionCurrentVersionResponseBodyResultVersionConfigCreateParameters },
      depends: { 'type': 'array', 'itemType': GetFunctionCurrentVersionResponseBodyResultVersionConfigDepends },
      usageParameters: { 'type': 'array', 'itemType': GetFunctionCurrentVersionResponseBodyResultVersionConfigUsageParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCurrentVersionResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * ctr
   */
  functionName?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * *   PAAS
   * *   SAAS
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The type of the model.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The configuration information about the instance.
   */
  versionConfig?: GetFunctionCurrentVersionResponseBodyResultVersionConfig;
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 101
   */
  versionId?: number;
  /**
   * @remarks
   * The name of the version.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      functionType: 'FunctionType',
      modelType: 'ModelType',
      versionConfig: 'VersionConfig',
      versionId: 'VersionId',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      functionType: 'string',
      modelType: 'string',
      versionConfig: GetFunctionCurrentVersionResponseBodyResultVersionConfig,
      versionId: 'number',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionDefaultInstanceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The default instance name.
   * 
   * @example
   * model1
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceResponseBodyResultBelongs extends $tea.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * general
   */
  category?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * ecommerce
   */
  domain?: string;
  /**
   * @remarks
   * The abbreviation of the language that applies.
   * 
   * @example
   * zh
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      domain: 'Domain',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      domain: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceResponseBodyResultCreateParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * param1
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * value1
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

export class GetFunctionInstanceResponseBodyResultTask extends $tea.Model {
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   success: succeeded
   * *   failed: failed
   * *   untrained: to be trained
   * *   pending: being scheduled
   * *   running: being trained
   * 
   * @example
   * success
   */
  dagStatus?: string;
  /**
   * @remarks
   * The time consumed for the most recent run, in milliseconds.
   * 
   * @example
   * 1234
   */
  lastRunTime?: number;
  static names(): { [key: string]: string } {
    return {
      dagStatus: 'DagStatus',
      lastRunTime: 'LastRunTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagStatus: 'string',
      lastRunTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceResponseBodyResultUsageParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * use_param1
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * value1
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

export class GetFunctionInstanceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The information about the instance.
   */
  belongs?: GetFunctionInstanceResponseBodyResultBelongs;
  /**
   * @remarks
   * The parameters that are used to create the instance.
   */
  createParameters?: GetFunctionInstanceResponseBodyResultCreateParameters[];
  /**
   * @remarks
   * The time when the task was created. Unit: milliseconds.
   * 
   * @example
   * 1234
   */
  createTime?: number;
  /**
   * @remarks
   * The cron expression used to schedule training, in the format of (Minutes Hours DayofMonth Month DayofWeek). If the value is empty, it indicates that no periodic training is performed.
   * 
   * @example
   * 0 3 ? \\* 0,1,3,5 (at 3 a.m. on Sunday, Monday, Wednesday, and Friday)
   */
  cron?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * instance descriptions
   */
  description?: string;
  /**
   * @remarks
   * The extended information, which is a JSON string.
   * 
   * @example
   * {\\"dataReport\\":{},\\"errors\\":{}}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * ctr
   */
  functionName?: string;
  /**
   * @remarks
   * The type of the feature.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ctr_test
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the model.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * How the instance is created. Valid values:
   * 
   * *   user: The instance is created by user.
   * *   builtin: The instance is created by the system.
   * 
   * @example
   * user
   */
  source?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * 1.  unavailable: No model is available. Models must be trained before you can use them.
   * 2.  available: Models can be used.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The information about the training task. This parameter is not displayed if no task is available.
   */
  task?: GetFunctionInstanceResponseBodyResultTask;
  /**
   * @remarks
   * The parameters that are used.
   */
  usageParameters?: GetFunctionInstanceResponseBodyResultUsageParameters[];
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 101
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      belongs: 'Belongs',
      createParameters: 'CreateParameters',
      createTime: 'CreateTime',
      cron: 'Cron',
      description: 'Description',
      extendInfo: 'ExtendInfo',
      functionName: 'FunctionName',
      functionType: 'FunctionType',
      instanceName: 'InstanceName',
      modelType: 'ModelType',
      source: 'Source',
      status: 'Status',
      task: 'Task',
      usageParameters: 'UsageParameters',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongs: GetFunctionInstanceResponseBodyResultBelongs,
      createParameters: { 'type': 'array', 'itemType': GetFunctionInstanceResponseBodyResultCreateParameters },
      createTime: 'number',
      cron: 'string',
      description: 'string',
      extendInfo: 'string',
      functionName: 'string',
      functionType: 'string',
      instanceName: 'string',
      modelType: 'string',
      source: 'string',
      status: 'string',
      task: GetFunctionInstanceResponseBodyResultTask,
      usageParameters: { 'type': 'array', 'itemType': GetFunctionInstanceResponseBodyResultUsageParameters },
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResourceResponseBodyResultDataGeneratorsInputFeatures extends $tea.Model {
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * system_item_id
   */
  name?: string;
  /**
   * @remarks
   * The type of the feature.
   * 
   * @example
   * item
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

export class GetFunctionResourceResponseBodyResultDataGeneratorsInput extends $tea.Model {
  /**
   * @remarks
   * The input features.
   */
  features?: GetFunctionResourceResponseBodyResultDataGeneratorsInputFeatures[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': GetFunctionResourceResponseBodyResultDataGeneratorsInputFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResourceResponseBodyResultDataGenerators extends $tea.Model {
  /**
   * @remarks
   * The type of the feature generator.
   * 
   * @example
   * id
   */
  generator?: string;
  /**
   * @remarks
   * The input.
   */
  input?: GetFunctionResourceResponseBodyResultDataGeneratorsInput;
  /**
   * @remarks
   * The name of the output feature.
   * 
   * @example
   * output_feature_name
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      generator: 'Generator',
      input: 'Input',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generator: 'string',
      input: GetFunctionResourceResponseBodyResultDataGeneratorsInput,
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResourceResponseBodyResultData extends $tea.Model {
  /**
   * @remarks
   * The content of the file that corresponds to a resource of the raw_file type.
   * 
   * @example
   * abc
   */
  content?: string;
  /**
   * @remarks
   * The feature generators that correspond to resources of the feature_generator type.
   */
  generators?: GetFunctionResourceResponseBodyResultDataGenerators[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generators: 'Generators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generators: { 'type': 'array', 'itemType': GetFunctionResourceResponseBodyResultDataGenerators },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResourceResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the resource was created. Unit: milliseconds.
   * 
   * @example
   * 1234
   */
  createTime?: number;
  /**
   * @remarks
   * The resource data. The data structure varies with the resource type.
   */
  data?: GetFunctionResourceResponseBodyResultData;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * rank
   */
  functionName?: string;
  /**
   * @remarks
   * The time when the resource was modified. Unit: milliseconds.
   * 
   * @example
   * 1234
   */
  modifyTime?: number;
  /**
   * @remarks
   * The algorithm instances that are referenced.
   */
  referencedInstances?: string[];
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * fg_json
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * raw_file
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      data: 'Data',
      description: 'Description',
      functionName: 'FunctionName',
      modifyTime: 'ModifyTime',
      referencedInstances: 'ReferencedInstances',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      data: GetFunctionResourceResponseBodyResultData,
      description: 'string',
      functionName: 'string',
      modifyTime: 'number',
      referencedInstances: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionTaskResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The timestamp that indicates the end time of the task. Unit: milliseconds.
   * 
   * @example
   * 1647213406267
   */
  endTime?: number;
  /**
   * @remarks
   * The extended information, which is a JSON string.
   * 
   * @example
   * {\\"recall\\":91,\\"errors\\":[]}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * ctr
   */
  functionName?: string;
  /**
   * @remarks
   * The number of iterations.
   * 
   * @example
   * 1
   */
  generation?: string;
  /**
   * @remarks
   * The progress. 90 indicates 90%.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * trigger__2021-03-05T12:18:41
   */
  runId?: string;
  /**
   * @remarks
   * The timestamp that indicates the start time of the task. Unit: milliseconds.
   * 
   * @example
   * 1647212220000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   success
   * *   failed
   * *   running
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extendInfo: 'ExtendInfo',
      functionName: 'FunctionName',
      generation: 'Generation',
      progress: 'Progress',
      runId: 'RunId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      extendInfo: 'string',
      functionName: 'string',
      generation: 'string',
      progress: 'number',
      runId: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBodyResultVersionConfigCreateParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * params1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * true
   */
  required?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBodyResultVersionConfigDepends extends $tea.Model {
  /**
   * @remarks
   * The condition.
   * 
   * @example
   * ""
   */
  condition?: string;
  /**
   * @remarks
   * The dependency.
   * 
   * @example
   * ""
   */
  dependency?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ""
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      dependency: 'Dependency',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      dependency: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBodyResultVersionConfigUsageParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ""
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * ""
   */
  required?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBodyResultVersionConfig extends $tea.Model {
  /**
   * @remarks
   * The parameters that are used to create the instance.
   * 
   * @example
   * [                 {                     "name": "params1",                     "required": "true",                     "formItemProps": "{\\"required\\": true, \\"pattern?\\": \\"/^[a-zA-Z][a-zA-Z0-9_]{0,29}$/\\"}",                     "componentProps": "{\\"component\\": \\"Input\\", \\"attributes\\": {\\"defaultValue\\": \\"value1\\"}}"                 }             ]
   */
  createParameters?: GetFunctionVersionResponseBodyResultVersionConfigCreateParameters[];
  /**
   * @remarks
   * The dependencies of the instance.
   */
  depends?: GetFunctionVersionResponseBodyResultVersionConfigDepends[];
  /**
   * @remarks
   * The parameters that are used during online use of the instance.
   * 
   * @example
   * []
   */
  usageParameters?: GetFunctionVersionResponseBodyResultVersionConfigUsageParameters[];
  static names(): { [key: string]: string } {
    return {
      createParameters: 'CreateParameters',
      depends: 'Depends',
      usageParameters: 'UsageParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createParameters: { 'type': 'array', 'itemType': GetFunctionVersionResponseBodyResultVersionConfigCreateParameters },
      depends: { 'type': 'array', 'itemType': GetFunctionVersionResponseBodyResultVersionConfigDepends },
      usageParameters: { 'type': 'array', 'itemType': GetFunctionVersionResponseBodyResultVersionConfigUsageParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionVersionResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * ctr
   */
  functionName?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * *   PAAS
   * *   SAAS
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The type of the model.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The configuration information.
   */
  versionConfig?: GetFunctionVersionResponseBodyResultVersionConfig;
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 101
   */
  versionId?: number;
  /**
   * @remarks
   * The name of the version.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      functionType: 'FunctionType',
      modelType: 'ModelType',
      versionConfig: 'VersionConfig',
      versionId: 'VersionId',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      functionType: 'string',
      modelType: 'string',
      versionConfig: GetFunctionVersionResponseBodyResultVersionConfig,
      versionId: 'number',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptFileNamesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the script file was created.
   * 
   * @example
   * 2020-04-02 20:21:14
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the script file.
   * 
   * @example
   * my_cava_script.cava
   */
  fileName?: string;
  /**
   * @remarks
   * The time when the script file was last modified.
   * 
   * @example
   * 2020-04-02 21:21:14
   */
  modifyTime?: string;
  /**
   * @remarks
   * The path name of the script file.
   * 
   * @example
   * src
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      fileName: 'fileName',
      modifyTime: 'modifyTime',
      pathName: 'pathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileName: 'string',
      modifyTime: 'string',
      pathName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the script was created.
   * 
   * @example
   * 2020-04-02 20:21:14
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the script was last modified.
   * 
   * @example
   * 2020-04-02 21:21:14
   */
  modifyTime?: string;
  /**
   * @remarks
   * The sort phase to which the script applies.
   * 
   * @example
   * second_rank
   */
  scope?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * rank_cava_20230606_v7
   */
  scriptName?: string;
  /**
   * @remarks
   * The status of the script. For more information, see the description of the status response parameter in the ListSortScripts topic.
   * 
   * @example
   * released
   */
  status?: string;
  /**
   * @remarks
   * The type of the script.
   * 
   * @example
   * cava_script
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      modifyTime: 'modifyTime',
      scope: 'scope',
      scriptName: 'scriptName',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      scope: 'string',
      scriptName: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptFileResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The script content that is encoded in the Base64 format.
   * 
   * @example
   * YWJjZGVmZw==
   */
  content?: string;
  /**
   * @remarks
   * The time when the script was created.
   * 
   * @example
   * 2020-04-02 20:21:14
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the script was last modified.
   * 
   * @example
   * 2020-04-02 21:21:14
   */
  modifyTime?: string;
  /**
   * @remarks
   * The version of the script content.
   * 
   * @example
   * 123456
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      modifyTime: 'modifyTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      modifyTime: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestExperimentsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the experiment was created.
   * 
   * @example
   * 1588842080
   */
  created?: number;
  /**
   * @remarks
   * The experiment ID.
   * 
   * @example
   * 12888
   */
  id?: string;
  /**
   * @remarks
   * The group alias.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the experiment is in effect. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The experiment parameters.
   * 
   * @example
   * 1
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The percentage of traffic that is routed to the experiment.
   * 
   * Valid values: [0,100]
   * 
   * @example
   * 30
   */
  traffic?: number;
  /**
   * @remarks
   * The time when the experiment was last modified.
   * 
   * @example
   * 1588842080
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      online: 'online',
      params: 'params',
      traffic: 'traffic',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      online: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      traffic: 'number',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestGroupsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test group was created.
   * 
   * @example
   * 1588839490
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test group.
   * 
   * @example
   * 13466
   */
  id?: string;
  /**
   * @remarks
   * The name of the test group.
   * 
   * @example
   * Group_2020-5-7_15:23:3
   */
  name?: string;
  /**
   * @remarks
   * The status of the test group. Valid values:
   * 
   * *   0: not in effect
   * *   1: in effect
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time when the test group was last modified.
   * 
   * @example
   * 1588839490
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      status: 'status',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      status: 'number',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestScenesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test scenario was created.
   * 
   * @example
   * 1588836130
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test group.
   * 
   * @example
   * 20404
   */
  id?: string;
  /**
   * @remarks
   * The name of the test group.
   * 
   * @example
   * kevintest_2020-5-7_15:21:482
   */
  name?: string;
  /**
   * @remarks
   * The status of the test scenario. Valid values:
   * 
   * *   0: not in effect
   * *   1: in effect
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time when the test scenario was last modified.
   * 
   * @example
   * 1588836129
   */
  updated?: number;
  /**
   * @remarks
   * The name of the test scenario.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      status: 'status',
      updated: 'updated',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      status: 'number',
      updated: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * foo
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * bar
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListAppGroupsResponseBodyResultQuota extends $tea.Model {
  /**
   * @remarks
   * The computing resources. Unit: logical computing unit (LCU).
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications. Valid values:
   * 
   * *   opensearch.share.junior: basic.
   * *   opensearch.share.common: shared general-purpose.
   * *   opensearch.share.compute: shared computing.
   * *   opensearch.share.storage: shared storage.
   * *   opensearch.private.common: exclusive general-purpose.
   * *   opensearch.private.compute: exclusive computing.
   * *   opensearch.private.storage: exclusive storage.
   * 
   * @example
   * opensearch.share.common
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupsResponseBodyResultTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * foo
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * bar
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListAppGroupsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   POSTPAY: pay-as-you-go.
   * *   PREPAY: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billable item. Valid values:
   * 
   * *   1: computing resources.
   * *   2: queries per second (QPS).
   * 
   * @example
   * 1
   */
  chargingWay?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * opensearch
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1575442875
   */
  created?: number;
  /**
   * @remarks
   * The ID of the current online version.
   * 
   * @example
   * 110116134
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * "xxx"
   */
  description?: string;
  /**
   * @remarks
   * The industry of the application.
   * 
   * @example
   * ""
   */
  domain?: string;
  engineType?: string;
  /**
   * @remarks
   * The time when the application expired.
   * 
   * @example
   * "xxx"
   */
  expireOn?: string;
  /**
   * @remarks
   * The approval state of the quotas. Valid values:
   * 
   * *   0: The application is in service.
   * *   1: The quotas are being reviewed.
   * 
   * @example
   * 0
   */
  hasPendingQuotaReviewTask?: number;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 110116134
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * "xxx"
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock state. Valid values:
   * 
   * *   Unlock: The instance is unlocked.
   * *   LockByExpiration: The instance is automatically locked after it expires.
   * *   ManualLock: The instance is manually locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * Indicates whether the instance is automatically locked after it expires.
   * 
   * @example
   * 0
   */
  lockedByExpiration?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * os_function_test_v1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the application is created. Valid values:
   * 
   * *   0: The application is being created.
   * *   1: The application is created.
   * 
   * @example
   * 1
   */
  produced?: number;
  /**
   * @remarks
   * The name of the A/B test group.
   * 
   * @example
   * "xxx"
   */
  projectId?: string;
  /**
   * @remarks
   * The information about the quotas of the application. For more information, see [Quota](https://help.aliyun.com/document_detail/170001.html).
   * 
   * @example
   * {}
   */
  quota?: ListAppGroupsResponseBodyResultQuota;
  /**
   * @remarks
   * The state of the application. Valid values:
   * 
   * *   producing: The application is being created.
   * *   review_pending: The application is being reviewed.
   * *   config_pending: The application is to be configured.
   * *   normal: The application is in service.
   * *   frozen: The application is frozen.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the current online version was published.
   * 
   * @example
   * 0
   */
  switchedTime?: number;
  /**
   * @remarks
   * The application tags.
   */
  tags?: ListAppGroupsResponseBodyResultTags[];
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a High-performance Search Edition application.
   * *
   * *   enhanced: an Industry Algorithm Edition application.
   * 
   * @example
   * enhanced
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was last updated.
   * 
   * @example
   * 1578916076
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      chargingWay: 'chargingWay',
      commodityCode: 'commodityCode',
      created: 'created',
      currentVersion: 'currentVersion',
      description: 'description',
      domain: 'domain',
      engineType: 'engineType',
      expireOn: 'expireOn',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      id: 'id',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      lockedByExpiration: 'lockedByExpiration',
      name: 'name',
      produced: 'produced',
      projectId: 'projectId',
      quota: 'quota',
      status: 'status',
      switchedTime: 'switchedTime',
      tags: 'tags',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      chargingWay: 'number',
      commodityCode: 'string',
      created: 'number',
      currentVersion: 'string',
      description: 'string',
      domain: 'string',
      engineType: 'string',
      expireOn: 'string',
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      lockedByExpiration: 'number',
      name: 'string',
      produced: 'number',
      projectId: 'string',
      quota: ListAppGroupsResponseBodyResultQuota,
      status: 'string',
      switchedTime: 'number',
      tags: { 'type': 'array', 'itemType': ListAppGroupsResponseBodyResultTags },
      type: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCollectionsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the data collection task was created.
   * 
   * @example
   * 1581065837
   */
  created?: number;
  /**
   * @remarks
   * The type of the data that is collected by the task. Valid values:
   * 
   * *   behavior: behavioral data
   * *   item_info: project data
   * *   industry_specific: industry-specific data
   * 
   * @example
   * BEHAVIOR
   */
  dataCollectionType?: string;
  /**
   * @remarks
   * The ID of the data collection task.
   * 
   * @example
   * 286
   */
  id?: string;
  /**
   * @remarks
   * The industry to which the data collection task applies. Valid values:
   * 
   * *   general
   * *   ecommerce
   * 
   * @example
   * GENERAL
   */
  industryName?: string;
  /**
   * @remarks
   * The name of the data collection task.
   * 
   * @example
   * os_function_test_v1
   */
  name?: string;
  /**
   * @remarks
   * The status of the data collection task. Valid values:
   * 
   * *   0: disabled
   * *   1: being enabled
   * *   2: enabled
   * *   3: failed to be enabled
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The ID of the sundial.
   * 
   * @example
   * 1755
   */
  sundialId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   server
   * *   web
   * *   app
   * 
   * Note: Only server is supported.
   * 
   * @example
   * server
   */
  type?: string;
  /**
   * @remarks
   * The time when the data collection task was updated.
   * 
   * @example
   * 1581065904
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      dataCollectionType: 'dataCollectionType',
      id: 'id',
      industryName: 'industryName',
      name: 'name',
      status: 'status',
      sundialId: 'sundialId',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      dataCollectionType: 'string',
      id: 'string',
      industryName: 'string',
      name: 'string',
      status: 'number',
      sundialId: 'string',
      type: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirstRanksResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The parameters that are used by a function in the expression.
   * 
   * For more information, see [Rough sort functions](https://help.aliyun.com/document_detail/180765.html).
   * 
   * @example
   * ""
   */
  arg?: string;
  /**
   * @remarks
   * The attribute, feature function, or field to be searched for.
   * 
   * For more information about supported feature functions, see [Rough sort functions](https://help.aliyun.com/document_detail/180765.html).
   * 
   * @example
   * static_bm25()
   */
  attribute?: string;
  /**
   * @remarks
   * The weight.
   * 
   * Valid values: [-100000,100000] (excluding 0).
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirstRanksResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 0
   */
  created?: number;
  /**
   * @remarks
   * The description of the expression.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The content of the expression.
   * 
   * @example
   * []
   */
  meta?: ListFirstRanksResponseBodyResultMeta[];
  /**
   * @remarks
   * The name of the expression.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 0
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      description: 'description',
      meta: 'meta',
      name: 'name',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      description: 'string',
      meta: { 'type': 'array', 'itemType': ListFirstRanksResponseBodyResultMeta },
      name: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponseBodyResultBelongs extends $tea.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * "general"
   */
  category?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * "ecommerce"
   */
  domain?: string;
  /**
   * @remarks
   * The abbreviation of the language that applies.
   * 
   * @example
   * "zh"
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      domain: 'Domain',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      domain: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionInstancesResponseBodyResultCreateParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * "param1"
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * "value1"
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

export class ListFunctionInstancesResponseBodyResultUsageParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * use_param1
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * value1
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

export class ListFunctionInstancesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The information about the instance.
   * 
   * @example
   * {}
   */
  belongs?: ListFunctionInstancesResponseBodyResultBelongs;
  /**
   * @remarks
   * The parameters of the instance.
   * 
   * @example
   * []
   */
  createParameters?: ListFunctionInstancesResponseBodyResultCreateParameters[];
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1234
   */
  createTime?: number;
  /**
   * @remarks
   * The cron expression used to schedule training, in the format of (Minutes Hours DayofMonth Month DayofWeek). If the value is empty, it indicates that no periodic training is performed.
   * 
   * @example
   * 0 3 ? \\* 0,1,3,5 (at 3 a.m. on Sunday, Monday, Wednesday, and Friday)
   */
  cron?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * " "
   */
  description?: string;
  /**
   * @remarks
   * The extended information, which is a JSON string. It includes model evaluation information and error information.
   * 
   * @example
   * "{\\"dataReport\\":{},\\"errors\\":{}}"
   */
  extendInfo?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * "ctr"
   */
  functionName?: string;
  /**
   * @remarks
   * The type of the feature.
   * 
   * @example
   * "PAAS"
   */
  functionType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * "ctr_test"
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the model.
   * 
   * @example
   * "tf_checkpoint"
   */
  modelType?: string;
  /**
   * @remarks
   * How the instance is created. Valid values:
   * 
   * *   user: The instance is created by user.
   * *   builtin: The instance is created by system.
   * 
   * @example
   * "user"
   */
  source?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * 1.  unavailable: No model is available. Models must be trained before you can use them.
   * 2.  available: Models can be used.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The parameters that are used.
   */
  usageParameters?: ListFunctionInstancesResponseBodyResultUsageParameters[];
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 123
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      belongs: 'Belongs',
      createParameters: 'CreateParameters',
      createTime: 'CreateTime',
      cron: 'Cron',
      description: 'Description',
      extendInfo: 'ExtendInfo',
      functionName: 'FunctionName',
      functionType: 'FunctionType',
      instanceName: 'InstanceName',
      modelType: 'ModelType',
      source: 'Source',
      status: 'Status',
      usageParameters: 'UsageParameters',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongs: ListFunctionInstancesResponseBodyResultBelongs,
      createParameters: { 'type': 'array', 'itemType': ListFunctionInstancesResponseBodyResultCreateParameters },
      createTime: 'number',
      cron: 'string',
      description: 'string',
      extendInfo: 'string',
      functionName: 'string',
      functionType: 'string',
      instanceName: 'string',
      modelType: 'string',
      source: 'string',
      status: 'string',
      usageParameters: { 'type': 'array', 'itemType': ListFunctionInstancesResponseBodyResultUsageParameters },
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResourcesResponseBodyResultDataGeneratorsInputFeatures extends $tea.Model {
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * system_item_id
   */
  name?: string;
  /**
   * @remarks
   * The type of the feature.
   * 
   * Valid values:
   * 
   * *   item
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   user
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * item
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

export class ListFunctionResourcesResponseBodyResultDataGeneratorsInput extends $tea.Model {
  /**
   * @remarks
   * The input features.
   */
  features?: ListFunctionResourcesResponseBodyResultDataGeneratorsInputFeatures[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': ListFunctionResourcesResponseBodyResultDataGeneratorsInputFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResourcesResponseBodyResultDataGenerators extends $tea.Model {
  /**
   * @remarks
   * The type of the feature generator.
   * 
   * @example
   * combo
   */
  generator?: string;
  /**
   * @remarks
   * The input.
   */
  input?: ListFunctionResourcesResponseBodyResultDataGeneratorsInput;
  /**
   * @remarks
   * The name of the output feature.
   * 
   * @example
   * feature1
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      generator: 'Generator',
      input: 'Input',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generator: 'string',
      input: ListFunctionResourcesResponseBodyResultDataGeneratorsInput,
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResourcesResponseBodyResultData extends $tea.Model {
  /**
   * @remarks
   * The content of the file that corresponds to a resource of the raw_file type.
   * 
   * @example
   * "abc"
   */
  content?: string;
  /**
   * @remarks
   * The feature generators that correspond to resources of the feature_generator type.
   */
  generators?: ListFunctionResourcesResponseBodyResultDataGenerators[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generators: 'Generators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generators: { 'type': 'array', 'itemType': ListFunctionResourcesResponseBodyResultDataGenerators },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionResourcesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the resource was created. Unit: milliseconds.
   * 
   * @example
   * 1234
   */
  createTime?: number;
  /**
   * @remarks
   * The resource data. The data structure varies with the resource type.
   */
  data?: ListFunctionResourcesResponseBodyResultData;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * resource description
   */
  description?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * rank
   */
  functionName?: string;
  /**
   * @remarks
   * The time when the resource was modified. Unit: milliseconds.
   * 
   * @example
   * 1234
   */
  modifyTime?: number;
  /**
   * @remarks
   * The algorithm instances that are referenced.
   */
  referencedInstances?: string[];
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * fg_json
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * feature_generator
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      data: 'Data',
      description: 'Description',
      functionName: 'FunctionName',
      modifyTime: 'ModifyTime',
      referencedInstances: 'ReferencedInstances',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      data: ListFunctionResourcesResponseBodyResultData,
      description: 'string',
      functionName: 'string',
      modifyTime: 'number',
      referencedInstances: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionTasksResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The timestamp that indicates the end time. Unit: milliseconds. 0 indicates that the task has not ended.
   * 
   * @example
   * 100010
   */
  endTime?: number;
  /**
   * @remarks
   * The value is a JSON string. It includes model evaluation information and training error information.
   * 
   * @example
   * {\\"recall\\":91,\\"errors\\":[]}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * ctr
   */
  functionName?: string;
  /**
   * @remarks
   * The number of iterations.
   * 
   * @example
   * 2
   */
  generation?: string;
  /**
   * @remarks
   * The progress. 90 indicates 90%.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * trigger__2021-03-05T12:18:41
   */
  runId?: string;
  /**
   * @remarks
   * The timestamp that indicates the start time. Unit: milliseconds.
   * 
   * @example
   * 100010
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   success
   * *   failed
   * *   running
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extendInfo: 'ExtendInfo',
      functionName: 'FunctionName',
      generation: 'Generation',
      progress: 'Progress',
      runId: 'RunId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      extendInfo: 'string',
      functionName: 'string',
      generation: 'string',
      progress: 'number',
      runId: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionariesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * ""
   */
  analyzer?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was created.
   * 
   * @example
   * 1539158325
   */
  created?: number;
  /**
   * @remarks
   * The ID of the intervention dictionary.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the intervention dictionary.
   * 
   * @example
   * tongyici
   */
  name?: string;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * *   stopword: an intervention dictionary for stop word filtering
   * *   synonym: an intervention dictionary for synonym configuration
   * *   correction: an intervention dictionary for spelling correction
   * *   category_prediction: an intervention dictionary for category prediction
   * *   ner: an intervention dictionary for named entity recognition (NER)
   * *   term_weighting: an intervention dictionary for term weight analysis
   * 
   * @example
   * synonym
   */
  type?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was last updated.
   * 
   * @example
   * 1539158313
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      analyzer: 'analyzer',
      created: 'created',
      id: 'id',
      name: 'name',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzer: 'string',
      created: 'number',
      id: 'number',
      name: 'string',
      type: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesResponseBodyResultTokens extends $tea.Model {
  /**
   * @remarks
   * The sequence number.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The internal name of the identified entity type. Valid values:
   * 
   * *   brand
   * *   category
   * *   material
   * *   element
   * *   style
   * *   color
   * *   function
   * *   scenario
   * *   people
   * *   season
   * *   model
   * *   region
   * *   name
   * *   adjective
   * *   category-modifier
   * *   size
   * *   quality
   * *   suit
   * *   new-release
   * *   series
   * *   marketing
   * *   entertainment
   * *   organization
   * *   movie
   * *   game
   * *   number
   * *   unit
   * *   common
   * *   new-word
   * *   proper-noun
   * *   symbol
   * *   prefix
   * *   suffix
   * *   gift
   * *   negative
   * *   agent
   * 
   * @example
   * category
   */
  tag?: string;
  /**
   * @remarks
   * The description of the internal name of the identified entity type.
   * 
   * @example
   * category
   */
  tagLabel?: string;
  /**
   * @remarks
   * The entity.
   * 
   * @example
   * category
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'order',
      tag: 'tag',
      tagLabel: 'tagLabel',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'number',
      tag: 'string',
      tagLabel: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The command. Valid values:
   * 
   * *   add
   * *   delete
   * 
   * @example
   * add
   */
  cmd?: string;
  /**
   * @remarks
   * The timestamp when the intervention entry was created.
   * 
   * @example
   * 1536690285
   */
  created?: number;
  /**
   * @remarks
   * The content of an intervention entry for category prediction. The field value consists of key-value pairs. The key in a key-value pair indicates the ID of the category. The value in a key-value pair indicates the relevance to the category. A value of 0 indicates irrelevant. A value of 1 indicates slightly relevant. A value of 2 indicates relevant. Example: {"2":1, "100":0}
   * 
   * @example
   * {                 "100": "0",                 "200": "2"             }
   */
  relevance?: { [key: string]: any };
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * *   ACTIVE: The intervention entry takes effect.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The content of the intervention entry for term weight analysis.
   */
  tokens?: ListInterventionDictionaryEntriesResponseBodyResultTokens[];
  /**
   * @remarks
   * The timestamp when the intervention entry was last updated.
   * 
   * @example
   * 1537348987
   */
  updated?: number;
  /**
   * @remarks
   * The intervention entry.
   * 
   * @example
   * \\u8fc7\\u513f
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'cmd',
      created: 'created',
      relevance: 'relevance',
      status: 'status',
      tokens: 'tokens',
      updated: 'updated',
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      created: 'number',
      relevance: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      tokens: { 'type': 'array', 'itemType': ListInterventionDictionaryEntriesResponseBodyResultTokens },
      updated: 'number',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryNerResultsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The sequence number.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The internal name of the identified entity type. Valid values:
   * 
   * *   brand
   * *   category
   * *   material
   * *   element
   * *   style
   * *   color
   * *   function
   * *   scenario
   * *   people
   * *   season
   * *   model
   * *   region
   * *   name
   * *   adjective
   * *   category-modifier
   * *   size
   * *   quality
   * *   suit
   * *   new-release
   * *   series
   * *   marketing
   * *   entertainment
   * *   organization
   * *   movie
   * *   game
   * *   number
   * *   unit
   * *   common
   * *   new-word
   * *   proper-noun
   * *   symbol
   * *   prefix
   * *   suffix
   * *   gift
   * *   negative
   * *   agent
   * 
   * @example
   * category
   */
  tag?: string;
  /**
   * @remarks
   * The description of the internal name of the identified entity type.
   * 
   * @example
   * category
   */
  tagLabel?: string;
  /**
   * @remarks
   * The entity.
   * 
   * @example
   * eaa73f35-007a-4be7-88c7-37dca4a04ab7
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'order',
      tag: 'tag',
      tagLabel: 'tagLabel',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'number',
      tag: 'string',
      tagLabel: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorNersResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The name of the entity type.
   * 
   * @example
   * brand
   */
  label?: string;
  /**
   * @remarks
   * The priority of an entity type among entity types that have the same priority level. A smaller value indicates a higher priority. Default value: 0.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The priority level of the entity type. Valid values:
   * 
   * *   HIGH
   * *   MIDDLE
   * *   LOW
   * 
   * @example
   * HIGH
   */
  priority?: string;
  /**
   * @remarks
   * The internal name of the entity type.
   * 
   * @example
   * brand
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      order: 'order',
      priority: 'priority',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      order: 'number',
      priority: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueryProcessorsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the query analysis rule is a default rule.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the query analysis rule was created.
   * 
   * @example
   * 1587398402
   */
  created?: number;
  /**
   * @remarks
   * The type of the industry to which the query analysis rule is applied. Valid values:
   * 
   * *   GENERAL
   * *   ECOMMERCE
   * *   IT_CONTENT
   * 
   * @example
   * GENERAL
   */
  domain?: string;
  /**
   * @remarks
   * The indexes to which the query analysis rule is applied.
   */
  indexes?: string[];
  /**
   * @remarks
   * The name of the query analysis rule.
   * 
   * @example
   * ner
   */
  name?: string;
  /**
   * @remarks
   * The features that are used in the query analysis rule.
   */
  processors?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the query analysis rule was last modified.
   * 
   * @example
   * 1587398402
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaReviewTasksResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 120123456
   */
  appGroupId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * "td_test_os"
   */
  appGroupName?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * "standard"
   */
  appGroupType?: string;
  /**
   * @remarks
   * Indicates whether the ticket is approved.
   * 
   * @example
   * true
   */
  approved?: boolean;
  /**
   * @remarks
   * Indicates whether the application is available.
   * 
   * @example
   * true
   */
  available?: boolean;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * "2020-04-08T08:29:45+0000"
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the ticket was last updated.
   * 
   * @example
   * "2020-04-08T08:36:36+0000"
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 142
   */
  id?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * null
   */
  memo?: string;
  /**
   * @remarks
   * The computing resource quota that is applied for.
   * 
   * @example
   * 6000
   */
  newComputeResource?: number;
  /**
   * @remarks
   * The storage capacity quota that is applied for.
   * 
   * @example
   * 1100
   */
  newSocSize?: number;
  /**
   * @remarks
   * The application specifications that are applied for.
   * 
   * @example
   * "opensearch.private.common"
   */
  newSpec?: string;
  /**
   * @remarks
   * The original quota of computing resources.
   * 
   * @example
   * 500
   */
  oldComputeResource?: number;
  /**
   * @remarks
   * The original quota of storage capacity.
   * 
   * @example
   * 900
   */
  oldDocSize?: number;
  /**
   * @remarks
   * The original specifications of the application.
   * 
   * @example
   * "opensearch.private.common"
   */
  oldSpec?: string;
  /**
   * @remarks
   * Indicates whether the ticket is pending.
   * 
   * @example
   * false
   */
  pending?: boolean;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'appGroupId',
      appGroupName: 'appGroupName',
      appGroupType: 'appGroupType',
      approved: 'approved',
      available: 'available',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      memo: 'memo',
      newComputeResource: 'newComputeResource',
      newSocSize: 'newSocSize',
      newSpec: 'newSpec',
      oldComputeResource: 'oldComputeResource',
      oldDocSize: 'oldDocSize',
      oldSpec: 'oldSpec',
      pending: 'pending',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appGroupName: 'string',
      appGroupType: 'string',
      approved: 'boolean',
      available: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      memo: 'string',
      newComputeResource: 'number',
      newSocSize: 'number',
      newSpec: 'string',
      oldComputeResource: 'number',
      oldDocSize: 'number',
      oldSpec: 'string',
      pending: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecondRanksResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * false
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the expression was created.
   * 
   * @example
   * 0
   */
  created?: number;
  /**
   * @remarks
   * The description of the expression.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The ID of the expression. This parameter appears only in the response.
   * 
   * @example
   * 890473
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the expression is the default one. This parameter appears only in the response. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isDefault?: string;
  /**
   * @remarks
   * Indicates whether the expression is a system expression. This parameter appears only in the response. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isSys?: string;
  /**
   * @remarks
   * The content of the fine sort expression.
   * 
   * You can define an expression that consists of fields, feature functions, and mathematical functions to implement complex sort logic.
   * 
   * @example
   * random()+now()
   */
  meta?: string;
  /**
   * @remarks
   * The name of the expression.
   * 
   * @example
   * tests
   */
  name?: string;
  /**
   * @remarks
   * The time when the expression was last updated.
   * 
   * @example
   * 1587052801
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      description: 'description',
      id: 'id',
      isDefault: 'isDefault',
      isSys: 'isSys',
      meta: 'meta',
      name: 'name',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      description: 'string',
      id: 'string',
      isDefault: 'string',
      isSys: 'string',
      meta: 'string',
      name: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryCategoriesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The status of the analysis. Valid values:
   * 
   * *   PENDING: preparing
   * *   SUCCESS: succeeded
   * *   RUNNING: running
   * *   FAILED: failed
   * *   N/A: unknown
   * 
   * @example
   * "PENDING"
   */
  analyzeStatus?: string;
  /**
   * @remarks
   * The timestamp that indicates the end of the time range to query.
   * 
   * @example
   * 1589990340
   */
  end?: number;
  /**
   * @remarks
   * The timestamp that indicates the beginning of the time range to query.
   * 
   * @example
   * 1589986800
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      analyzeStatus: 'analyzeStatus',
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeStatus: 'string',
      end: 'number',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlowQueryQueriesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The content of the optimization suggestion for the query.
   * 
   * @example
   * no data
   */
  appQuery?: string;
  /**
   * @remarks
   * The end of the time range that was queried.
   * 
   * @example
   * 1589990340
   */
  end?: number;
  /**
   * @remarks
   * The ID of the optimization suggestion.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The beginning of the time range that was queried.
   * 
   * @example
   * 1589986800
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      appQuery: 'appQuery',
      end: 'end',
      index: 'index',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQuery: 'string',
      end: 'number',
      index: 'number',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortExpressionsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The timestamp when the sort expression was created.
   * 
   * @example
   * 1655793690
   */
  created?: number;
  /**
   * @remarks
   * The description of the sort expression.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The name of the sort expression.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The timestamp when the sort expression was updated.
   * 
   * @example
   * 1655793690
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      description: 'description',
      name: 'name',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      description: 'string',
      name: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSortScriptsResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the script was created.
   * 
   * @example
   * 2020-04-02 20:21:14
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the script was last modified.
   * 
   * @example
   * 2020-04-02 21:21:14
   */
  modifyTime?: string;
  /**
   * @remarks
   * The sort phase to which the script applies.
   * 
   * @example
   * second_rank
   */
  scope?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * test
   */
  scriptName?: string;
  /**
   * @remarks
   * The status of the script. Valid values:
   * 
   * *   configurable: The script is created, but no script files are uploaded.
   * *   not compiled: The script is not compiled.
   * *   compile failed: The compilation of the script failed.
   * *   compile successful: The script is compiled.
   * *   released: The script is published.
   * 
   * @example
   * released
   */
  status?: string;
  /**
   * @remarks
   * The type of the script.
   * 
   * @example
   * cava_script
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      modifyTime: 'modifyTime',
      scope: 'scope',
      scriptName: 'scriptName',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      scope: 'string',
      scriptName: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * bm
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * Uefi
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListTagResourcesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 54041
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * hostGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * GENIE_FUNCTION
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * ALLOW
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersResponseBodyResultDicts extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the application is available.
   * 
   * @example
   * false
   */
  available?: boolean;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1588054131
   */
  created?: number;
  /**
   * @remarks
   * The number of intervention entries.
   * 
   * @example
   * -1
   */
  entriesCount?: number;
  /**
   * @remarks
   * The maximum number of intervention entries that can be created in the dictionary.
   * 
   * @example
   * 4
   */
  entriesLimit?: number;
  /**
   * @remarks
   * The ID of the dictionary.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The type. Valid value:
   * 
   * *   segment
   * 
   * @example
   * segment
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was last updated.
   * 
   * @example
   * 1588054131
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'available',
      created: 'created',
      entriesCount: 'entriesCount',
      entriesLimit: 'entriesLimit',
      id: 'id',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      created: 'number',
      entriesCount: 'number',
      entriesLimit: 'number',
      id: 'string',
      type: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the application is available.
   * 
   * @example
   * false
   */
  available?: boolean;
  /**
   * @remarks
   * The basic analyzer. Valid values:
   * 
   * *   chn_standard: [a common analyzer in Chinese](https://help.aliyun.com/document_detail/179424.html)
   * *   chn_scene_name: an analyzer for person names in Chinese
   * *   chn_ecommerce: [an analyzer for E-commerce in Chinese](https://help.aliyun.com/document_detail/179424.html)
   * *   chn_it_content: [an analyzer for IT content in Chinese](https://help.aliyun.com/document_detail/179424.html)
   * *   en_min: a small-granularity analyzer in English
   * *   th_standard: a common analyzer in Thai
   * *   th_ecommerce: an analyzer for E-commerce in Thai
   * *   vn_standard: a common analyzer in Vietnamese
   * *   chn_community_it: an analyzer for IT community content in Chinese
   * *   chn_ecommerce_general: a common analyzer for the E-commerce industry in Chinese
   * *   chn_esports_general: a common analyzer for the gaming industry in Chinese
   * *   chn_edu_question: an analyzer for question search of the education industry in Chinese
   * 
   * @example
   * chn_standard
   */
  business?: string;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1588054131
   */
  created?: number;
  /**
   * @remarks
   * The dictionaries that are used by the custom analyzer.
   * 
   * For more information, see [UserDict](https://help.aliyun.com/document_detail/178933.html).
   */
  dicts?: ListUserAnalyzersResponseBodyResultDicts[];
  /**
   * @remarks
   * The ID of the custom analyzer.
   * 
   * @example
   * 1234
   */
  id?: string;
  /**
   * @remarks
   * The name of the custom analyzer.
   * 
   * @example
   * kevin_test2
   */
  name?: string;
  /**
   * @remarks
   * The timestamp when the application was last updated.
   * 
   * @example
   * 1588054131
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'available',
      business: 'business',
      created: 'created',
      dicts: 'dicts',
      id: 'id',
      name: 'name',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      business: 'string',
      created: 'number',
      dicts: { 'type': 'array', 'itemType': ListUserAnalyzersResponseBodyResultDicts },
      id: 'string',
      name: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupResponseBodyResultQuota extends $tea.Model {
  /**
   * @remarks
   * The computing resources. Unit: logical computing unit (LCU).
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications. Valid values:
   * 
   * *   opensearch.share.junior: basic.
   * *   opensearch.share.common: shared general-purpose.
   * *   opensearch.share.compute: shared computing.
   * *   opensearch.share.storage: shared storage.
   * *   opensearch.private.common: exclusive general-purpose.
   * *   opensearch.private.compute: exclusive computing.
   * *   opensearch.private.storage: exclusive storage.
   * 
   * @example
   * opensearch.share.common
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   POSTPAY: pay-as-you-go.
   * *   PREPAY: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billable item. Valid values:
   * 
   * *   1: computing resources.
   * *   2: QPS.
   * 
   * @example
   * 1
   */
  chargingWay?: number;
  /**
   * @remarks
   * The code of the commodity.
   * 
   * @example
   * opensearch
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1590139524
   */
  created?: number;
  /**
   * @remarks
   * The ID of the current online version.
   * 
   * @example
   * 100302903
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * 1
   */
  description?: string;
  /**
   * @remarks
   * The type of the industry. Valid values:
   * 
   * *   GENERAL: general.
   * *   ECOMMERCE: e-commerce.
   * *   IT_CONTENT: IT content.
   * 
   * @example
   * GENERAL
   */
  domain?: string;
  engineType?: string;
  /**
   * @remarks
   * The time when the application expired.
   * 
   * @example
   * 1
   */
  expireOn?: string;
  /**
   * @remarks
   * The approval status of the quotas. Valid values:
   * 
   * *   0: normal.
   * *   1: being approved.
   * 
   * @example
   * 0
   */
  hasPendingQuotaReviewTask?: number;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 100302881
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 10030288
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock status. Valid values:
   * 
   * *   Unlock: The instance is unlocked.
   * *   LockByExpiration: The instance is automatically locked after it expires.
   * *   ManualLock: The instance is manually locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * lsh_test_1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the order is complete. Valid values:
   * 
   * *   0: The order is in progress.
   * *   1: The order is complete.
   * 
   * @example
   * 1
   */
  produced?: number;
  /**
   * @remarks
   * The name of the A/B test group.
   * 
   * @example
   * 1
   */
  projectId?: string;
  /**
   * @remarks
   * The information about the quotas of the application.
   * 
   * @example
   * {}
   */
  quota?: ModifyAppGroupResponseBodyResultQuota;
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the application. Valid values:
   * 
   * *   producing: being produced.
   * *   review_pending: being approved.
   * *   config_pending: to be configured.
   * *   normal: normal.
   * *   frozen: frozen.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the current online version was published.
   * 
   * @example
   * 1590486386
   */
  switchedTime?: number;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a standard edition application.
   * *   advance: an advanced edition application of an old version. New versions are not supported for this edition.
   * *   enhanced: an advanced edition application of a new version.
   * 
   * @example
   * enhanced
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was last modified.
   * 
   * @example
   * 1590978265
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      chargingWay: 'chargingWay',
      commodityCode: 'commodityCode',
      created: 'created',
      currentVersion: 'currentVersion',
      description: 'description',
      domain: 'domain',
      engineType: 'engineType',
      expireOn: 'expireOn',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      id: 'id',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      name: 'name',
      produced: 'produced',
      projectId: 'projectId',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      switchedTime: 'switchedTime',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      chargingWay: 'number',
      commodityCode: 'string',
      created: 'number',
      currentVersion: 'string',
      description: 'string',
      domain: 'string',
      engineType: 'string',
      expireOn: 'string',
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      name: 'string',
      produced: 'number',
      projectId: 'string',
      quota: ModifyAppGroupResponseBodyResultQuota,
      resourceGroupId: 'string',
      status: 'string',
      switchedTime: 'number',
      type: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupQuotaResponseBodyResultQuota extends $tea.Model {
  /**
   * @remarks
   * The computing resources. Unit: logical computing units (LCUs).
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications of the application. Valid values:
   * 
   * *   opensearch.share.junior: basic
   * *   opensearch.share.common: shared general-purpose
   * *   opensearch.share.compute: shared computing
   * *   opensearch.share.storage: shared storage
   * *   opensearch.private.common: exclusive general-purpose
   * *   opensearch.private.compute: exclusive computing
   * *   opensearch.private.storage: exclusive storage
   * 
   * @example
   * opensearch.share.common
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupQuotaResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The billing method of the application. Valid values:
   * 
   * *   POSTPAY: pay-as-you-go
   * *   PREPAY: subscription
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billing model. Valid values:
   * 
   * *   1: computing resources
   * *   2: queries per second (QPS)
   * 
   * @example
   * 1
   */
  chargingWay?: number;
  /**
   * @remarks
   * The code of the commodity.
   * 
   * @example
   * opensearch
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1590139542
   */
  created?: number;
  /**
   * @remarks
   * The ID of the current online version.
   * 
   * @example
   * 100302903
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * 1
   */
  description?: string;
  engineType?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1
   */
  expireOn?: string;
  /**
   * @remarks
   * The approval status of the quotas. Valid values:
   * 
   * *   0: The quotas are approved.
   * *   1: The quotas are being approved.
   * 
   * @example
   * 0
   */
  hasPendingQuotaReviewTask?: number;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 100302881
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock mode of the instance. Valid values:
   * 
   * *   Unlock: The instance is not locked.
   * *   LockByExpiration: The instance is automatically locked after it expires.
   * *   ManualLock: The instance is manually locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * lsh_test_1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the order is complete. Valid values:
   * 
   * *   0: The order is in progress.
   * *   1: The order is complete.
   * 
   * @example
   * 1
   */
  produced?: number;
  /**
   * @remarks
   * The name of the A/B test group.
   * 
   * @example
   * 1000
   */
  projectId?: string;
  /**
   * @remarks
   * The information about the quotas of the application.
   */
  quota?: ModifyAppGroupQuotaResponseBodyResultQuota;
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   producing
   * *   review_pending
   * *   config_pending
   * *   normal
   * *   frozen
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the current online version was published.
   * 
   * @example
   * 1590486386
   */
  switchedTime?: number;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a standard application.
   * *   advance: an advanced application which is of an old application type. New applications cannot be of this type.
   * *   enhanced: an advanced application which is of a new application type.
   * 
   * @example
   * enhanced
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was last updated.
   * 
   * @example
   * 1590978265
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      chargingWay: 'chargingWay',
      commodityCode: 'commodityCode',
      created: 'created',
      currentVersion: 'currentVersion',
      description: 'description',
      engineType: 'engineType',
      expireOn: 'expireOn',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      id: 'id',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      name: 'name',
      produced: 'produced',
      projectId: 'projectId',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      switchedTime: 'switchedTime',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      chargingWay: 'number',
      commodityCode: 'string',
      created: 'number',
      currentVersion: 'string',
      description: 'string',
      engineType: 'string',
      expireOn: 'string',
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      name: 'string',
      produced: 'number',
      projectId: 'string',
      quota: ModifyAppGroupQuotaResponseBodyResultQuota,
      resourceGroupId: 'string',
      status: 'string',
      switchedTime: 'number',
      type: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The parameters that are used by a function in the expression.
   * 
   * @example
   * “1 ”
   */
  arg?: string;
  /**
   * @remarks
   * The attribute, feature function, or field to be searched for.
   * 
   * @example
   * static_bm25()
   */
  attribute?: string;
  /**
   * @remarks
   * The weight. Valid values: -100000 to 100000. The value cannot be 0.
   * 
   * @example
   * 10
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The description of the rough sort expression.
   * 
   * @example
   * 1
   */
  description?: string;
  /**
   * @remarks
   * The information about the expression.
   */
  meta?: ModifyFirstRankResponseBodyResultMeta[];
  /**
   * @remarks
   * The name of the expression.
   * 
   * @example
   * default
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: { 'type': 'array', 'itemType': ModifyFirstRankResponseBodyResultMeta },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQueryProcessorResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the query analysis rule is a default rule.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 0
   */
  created?: number;
  /**
   * @remarks
   * The type of the industry to which the query analysis rule is applied. Valid values:
   * 
   * *   GENERAL
   * *   ECOMMERCE
   * *   IT_CONTENT
   * 
   * @example
   * GENERAL
   */
  domain?: string;
  /**
   * @remarks
   * The indexes to which the query analysis rule is applied.
   * 
   * @example
   * ["default"]
   */
  indexes?: string[];
  /**
   * @remarks
   * The name of the query analysis rule.
   * 
   * @example
   * synonym
   */
  name?: string;
  /**
   * @remarks
   * The analysis rule.
   * 
   * @example
   * []
   */
  processors?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the rule was updated.
   * 
   * @example
   * 1
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecondRankResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the expression was created.
   * 
   * @example
   * 1
   */
  created?: number;
  /**
   * @remarks
   * The description of the expression.
   * 
   * @example
   * "11"
   */
  description?: string;
  /**
   * @remarks
   * The expression ID. This parameter is displayed only in the response.
   * 
   * @example
   * 890473
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the expression is the default one. This parameter is displayed only in the response. Valid values:
   * 
   * *   true: the expression is the default one.
   * *   false: the expression is not the default one.
   * 
   * @example
   * true
   */
  isDefault?: string;
  /**
   * @remarks
   * Indicates whether the expression is a system expression. This parameter is displayed only in the response. Valid values:
   * 
   * *   true: The expression is a system expression.
   * *   false:The expression is not a system expression
   * 
   * @example
   * false
   */
  isSys?: string;
  /**
   * @remarks
   * The content of the fine sort expression. You can define an expression that consists of fields, feature functions, and mathematical functions to implement complex sort logic.
   * 
   * @example
   * cate_id > 0 and cate_id < 1000
   */
  meta?: string;
  /**
   * @remarks
   * The expression name.
   * 
   * @example
   * lsh_second_1
   */
  name?: string;
  /**
   * @remarks
   * The time when the expression was updated.
   * 
   * @example
   * 1
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      description: 'description',
      id: 'id',
      isDefault: 'isDefault',
      isSys: 'isSys',
      meta: 'meta',
      name: 'name',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      description: 'string',
      id: 'string',
      isDefault: 'string',
      isSys: 'string',
      meta: 'string',
      name: 'string',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserAnalyzerEntriesRequestEntries extends $tea.Model {
  /**
   * @remarks
   * The operation to be performed on the entries.
   * 
   * Valid values:
   * 
   * *   add
   * *   delete
   * 
   * @example
   * "add"
   */
  cmd?: string;
  /**
   * @remarks
   * The key to be used to query entries.
   * 
   * @example
   * "testvalue"
   */
  key?: string;
  /**
   * @remarks
   * Specifies whether to further analyze the terms that are generated after the search query is analyzed.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  splitEnabled?: boolean;
  /**
   * @remarks
   * The analysis result.
   * 
   * @example
   * "test value"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'cmd',
      key: 'key',
      splitEnabled: 'splitEnabled',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      key: 'string',
      splitEnabled: 'boolean',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFirstRankResponseBodyResultMeta extends $tea.Model {
  /**
   * @remarks
   * The parameters that are used by a function in the expression.
   * 
   * For more information, see Rough sort functions.
   * 
   * @example
   * ""
   */
  arg?: string;
  /**
   * @remarks
   * The attribute, feature function, or field to be searched for.
   * 
   * For more information about supported feature functions, see Rough sort functions.
   * 
   * @example
   * static_bm25()
   */
  attribute?: string;
  /**
   * @remarks
   * The weight.
   * 
   * Valid values: [-100000,100000] (excluding 0).
   * 
   * @example
   * 10
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFirstRankResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The description of the expression.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The content of the expression.
   */
  meta?: RemoveFirstRankResponseBodyResultMeta[];
  /**
   * @remarks
   * The name of the expression.
   * 
   * @example
   * default
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: { 'type': 'array', 'itemType': RemoveFirstRankResponseBodyResultMeta },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInterventionDictionaryResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * ""
   */
  analyzer?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was created.
   * 
   * @example
   * 1539158313
   */
  created?: string;
  /**
   * @remarks
   * The name of the intervention dictionary.
   * 
   * @example
   * tongyici
   */
  name?: string;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * *   stopword: an intervention dictionary for stop word filtering
   * *   synonym: an intervention dictionary for synonym configuration
   * *   correction: an intervention dictionary for spelling correction
   * *   category_prediction: an intervention dictionary for category prediction
   * *   ner: an intervention dictionary for named entity recognition (NER)
   * *   term_weighting: an intervention dictionary for term weight analysis
   * 
   * @example
   * synonym
   */
  type?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was last updated.
   * 
   * @example
   * 1539158313
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      analyzer: 'analyzer',
      created: 'created',
      name: 'name',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzer: 'string',
      created: 'string',
      name: 'string',
      type: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponseBodyResultQuota extends $tea.Model {
  /**
   * @remarks
   * The number of computing resources configured.
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications configured.
   * 
   * @example
   * -
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   POSTPAY: pay-as-you-go.
   * *   PREPAY: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * *   1: computing resources.
   * *   2: queries per second (QPS).
   * 
   * @example
   * 1
   */
  chargingWay?: number;
  /**
   * @remarks
   * The code of the commodity.
   * 
   * @example
   * opensearch
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1588054131
   */
  created?: number;
  /**
   * @remarks
   * The ID of the current online version.
   * 
   * @example
   * 100302903
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * -
   */
  expireOn?: string;
  /**
   * @remarks
   * The ID of the rough sort expression.
   * 
   * @example
   * 0
   */
  firstRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The approval state of the quotas. Valid values:
   * 
   * *   0: The approval status is normal.
   * *   1: The quotas are being approved.
   * 
   * @example
   * 0
   */
  hasPendingQuotaReviewTask?: number;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * -
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * -
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock state. Valid values:
   * 
   * *   Unlock: The instance is unlocked.
   * *   LockByExpiration: The instance is automatically locked after it expires.
   * *   ManualLock: The instance is manually locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * Indicates whether the instance is automatically locked after it expires. Valid values:
   * 
   * *   0: The instance is not automatically locked after it expires.
   * *   1: The instance is automatically locked after it expires.
   * 
   * @example
   * 0
   */
  lockedByExpiration?: number;
  /**
   * @remarks
   * The name of the order.
   * 
   * @example
   * -
   */
  name?: string;
  /**
   * @remarks
   * The ID of the fine sort expression that is being created.
   * 
   * @example
   * 0
   */
  pendingSecondRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The ID of the order that is in progress.
   * 
   * @example
   * -
   */
  processingOrderId?: string;
  /**
   * @remarks
   * Indicates whether the order is produced.
   * 
   * @example
   * 0
   */
  produced?: number;
  /**
   * @remarks
   * The name of the A/B test group.
   * 
   * @example
   * -
   */
  projectId?: string;
  /**
   * @remarks
   * The configuration information.
   */
  quota?: ReplaceAppGroupCommodityCodeResponseBodyResultQuota;
  /**
   * @remarks
   * The ID of the fine sort expression.
   * 
   * @example
   * 0
   */
  secondRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The status of the application.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the current online version was published.
   * 
   * @example
   * 1590486386
   */
  switchedTime?: number;
  /**
   * @remarks
   * The type of the application.
   * 
   * @example
   * -
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was updated.
   * 
   * @example
   * 1581065904
   */
  updated?: number;
  /**
   * @remarks
   * The versions.
   */
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      chargingWay: 'chargingWay',
      commodityCode: 'commodityCode',
      created: 'created',
      currentVersion: 'currentVersion',
      description: 'description',
      expireOn: 'expireOn',
      firstRankAlgoDeploymentId: 'firstRankAlgoDeploymentId',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      id: 'id',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      lockedByExpiration: 'lockedByExpiration',
      name: 'name',
      pendingSecondRankAlgoDeploymentId: 'pendingSecondRankAlgoDeploymentId',
      processingOrderId: 'processingOrderId',
      produced: 'produced',
      projectId: 'projectId',
      quota: 'quota',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      status: 'status',
      switchedTime: 'switchedTime',
      type: 'type',
      updated: 'updated',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      chargingWay: 'number',
      commodityCode: 'string',
      created: 'number',
      currentVersion: 'string',
      description: 'string',
      expireOn: 'string',
      firstRankAlgoDeploymentId: 'number',
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      lockedByExpiration: 'number',
      name: 'string',
      pendingSecondRankAlgoDeploymentId: 'number',
      processingOrderId: 'string',
      produced: 'number',
      projectId: 'string',
      quota: ReplaceAppGroupCommodityCodeResponseBodyResultQuota,
      secondRankAlgoDeploymentId: 'number',
      status: 'string',
      switchedTime: 'number',
      type: 'string',
      updated: 'number',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * cloud_manage
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 31261301
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class UpdateABTestExperimentResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test was created.
   * 
   * @example
   * 1588842080
   */
  created?: number;
  /**
   * @remarks
   * The test ID.
   * 
   * @example
   * 12888
   */
  id?: string;
  /**
   * @remarks
   * The alias of the test.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the test is in effect. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The test parameters.
   * 
   * @example
   * {}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The percentage of traffic that is routed to the test. Valid values: [0,100]
   * 
   * @example
   * 30
   */
  traffic?: number;
  /**
   * @remarks
   * The time when the test was last modified.
   * 
   * @example
   * 1588842080
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      online: 'online',
      params: 'params',
      traffic: 'traffic',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      online: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      traffic: 'number',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestGroupResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test group was created.
   * 
   * @example
   * 1588839490
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test group.
   * 
   * @example
   * 13466
   */
  id?: string;
  /**
   * @remarks
   * The alias of the test group.
   * 
   * @example
   * Group_2020-5-7_15:23:3
   */
  name?: string;
  /**
   * @remarks
   * The status of the test group. Valid values:
   * 
   * *   0: not in effect
   * *   1: in effect
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time when the test group was last updated.
   * 
   * @example
   * 1588839490
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      status: 'status',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      status: 'number',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestSceneResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The time when the test scenario was created.
   * 
   * @example
   * 1596527691
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test scenario.
   * 
   * @example
   * 20614
   */
  id?: string;
  /**
   * @remarks
   * The name of the test scenario.
   * 
   * @example
   * kevintest22
   */
  name?: string;
  /**
   * @remarks
   * The status of the test. Valid values:
   * 
   * *   true: The test is started.
   * *   false: The test is stopped.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The parameters of the A/B test.
   * 
   * @example
   * {}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The percentage of traffic that is allocated to the A/B test. Valid values: 0 to 100.
   * 
   * @example
   * 111
   */
  traffic?: number;
  /**
   * @remarks
   * The time when the test scenario was last modified.
   * 
   * @example
   * 1596527691
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      online: 'online',
      params: 'params',
      traffic: 'traffic',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      online: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      traffic: 'number',
      updated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionInstanceRequestCreateParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * title_field
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * title
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
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

export class UpdateFunctionInstanceRequestUsageParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * allow_dict_id
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
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

export class UpdateFunctionResourceRequestDataGeneratorsInputFeatures extends $tea.Model {
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * system_item_id
   */
  name?: string;
  /**
   * @remarks
   * The type of the feature.
   * 
   * @example
   * item
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

export class UpdateFunctionResourceRequestDataGeneratorsInput extends $tea.Model {
  /**
   * @remarks
   * The input features.
   */
  features?: UpdateFunctionResourceRequestDataGeneratorsInputFeatures[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': UpdateFunctionResourceRequestDataGeneratorsInputFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResourceRequestDataGenerators extends $tea.Model {
  /**
   * @remarks
   * The type of the feature generator.
   * 
   * @example
   * combo
   */
  generator?: string;
  /**
   * @remarks
   * The input.
   */
  input?: UpdateFunctionResourceRequestDataGeneratorsInput;
  /**
   * @remarks
   * The name of the output feature.
   * 
   * @example
   * feature1
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      generator: 'Generator',
      input: 'Input',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generator: 'string',
      input: UpdateFunctionResourceRequestDataGeneratorsInput,
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResourceRequestData extends $tea.Model {
  /**
   * @remarks
   * The content of the file that corresponds to a resource of the raw_file type.
   * 
   * @example
   * abc
   */
  content?: string;
  /**
   * @remarks
   * The feature generators that correspond to resources of the feature_generator type.
   */
  generators?: UpdateFunctionResourceRequestDataGenerators[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generators: 'Generators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generators: { 'type': 'array', 'itemType': UpdateFunctionResourceRequestDataGenerators },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSummariesRequestBody extends $tea.Model {
  /**
   * @remarks
   * The HTML tag that is used to highlight terms in red.
   * 
   * @example
   * "em"
   */
  element?: string;
  /**
   * @remarks
   * The connector that is used to connect segments.
   * 
   * @example
   * "..."
   */
  ellipsis?: string;
  /**
   * @remarks
   * The field.
   * 
   * @example
   * "title"
   */
  field?: string;
  /**
   * @remarks
   * The length of a segment.
   * 
   * @example
   * 50
   */
  len?: number;
  /**
   * @remarks
   * The number of segments.
   * 
   * @example
   * 1
   */
  snippet?: number;
  static names(): { [key: string]: string } {
    return {
      element: 'element',
      ellipsis: 'ellipsis',
      field: 'field',
      len: 'len',
      snippet: 'snippet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      element: 'string',
      ellipsis: 'string',
      field: 'string',
      len: 'number',
      snippet: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDataSourcesResponseBodyResultDataSource extends $tea.Model {
  /**
   * @remarks
   * The parameters of the data source.
   * 
   * @example
   * {}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * user_activity_decision
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * rds
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      tableName: 'tableName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDataSourcesResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The code returned for the request.
   * 
   * @example
   * SUCCEED
   */
  code?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * {}
   */
  dataSource?: ValidateDataSourcesResponseBodyResultDataSource;
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * successful
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataSource: 'dataSource',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataSource: ValidateDataSourcesResponseBodyResultDataSource,
      message: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("opensearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Binds a custom analyzer to an Elasticsearch instance.
   * 
   * @param request - BindESUserAnalyzerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindESUserAnalyzerResponse
   */
  async bindESUserAnalyzerWithOptions(appGroupIdentity: string, esInstanceId: string, request: BindESUserAnalyzerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BindESUserAnalyzerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "BindESUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/es/${OpenApiUtil.getEncodeParam(esInstanceId)}/actions/bind-analyzer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BindESUserAnalyzerResponse>(await this.callApi(params, req, runtime), new BindESUserAnalyzerResponse({}));
  }

  /**
   * Binds a custom analyzer to an Elasticsearch instance.
   * 
   * @param request - BindESUserAnalyzerRequest
   * @returns BindESUserAnalyzerResponse
   */
  async bindESUserAnalyzer(appGroupIdentity: string, esInstanceId: string, request: BindESUserAnalyzerRequest): Promise<BindESUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindESUserAnalyzerWithOptions(appGroupIdentity, esInstanceId, request, headers, runtime);
  }

  /**
   * Binds an Elasticsearch instance.
   * 
   * @param request - BindEsInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindEsInstanceResponse
   */
  async bindEsInstanceWithOptions(appGroupIdentity: string, request: BindEsInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BindEsInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindEsInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/actions/bind-es-instance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BindEsInstanceResponse>(await this.callApi(params, req, runtime), new BindEsInstanceResponse({}));
  }

  /**
   * Binds an Elasticsearch instance.
   * 
   * @param request - BindEsInstanceRequest
   * @returns BindEsInstanceResponse
   */
  async bindEsInstance(appGroupIdentity: string, request: BindEsInstanceRequest): Promise<BindEsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindEsInstanceWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompileSortScriptResponse
   */
  async compileSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CompileSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CompileSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts/${OpenApiUtil.getEncodeParam(scriptName)}/actions/compiling`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CompileSortScriptResponse>(await this.callApi(params, req, runtime), new CompileSortScriptResponse({}));
  }

  /**
   * @returns CompileSortScriptResponse
   */
  async compileSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<CompileSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.compileSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  /**
   * Creates an experiment.
   * 
   * @param request - CreateABTestExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABTestExperimentResponse
   */
  async createABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, request: CreateABTestExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateABTestExperimentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateABTestExperiment",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}/experiments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateABTestExperimentResponse>(await this.callApi(params, req, runtime), new CreateABTestExperimentResponse({}));
  }

  /**
   * Creates an experiment.
   * 
   * @param request - CreateABTestExperimentRequest
   * @returns CreateABTestExperimentResponse
   */
  async createABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, request: CreateABTestExperimentRequest): Promise<CreateABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, request, headers, runtime);
  }

  /**
   * Creates a test group.
   * 
   * @param request - CreateABTestGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABTestGroupResponse
   */
  async createABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, request: CreateABTestGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateABTestGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateABTestGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateABTestGroupResponse>(await this.callApi(params, req, runtime), new CreateABTestGroupResponse({}));
  }

  /**
   * Creates a test group.
   * 
   * @param request - CreateABTestGroupRequest
   * @returns CreateABTestGroupResponse
   */
  async createABTestGroup(appGroupIdentity: string, sceneId: string, request: CreateABTestGroupRequest): Promise<CreateABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestGroupWithOptions(appGroupIdentity, sceneId, request, headers, runtime);
  }

  /**
   * @param request - CreateABTestSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABTestSceneResponse
   */
  async createABTestSceneWithOptions(appGroupIdentity: string, request: CreateABTestSceneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateABTestSceneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateABTestScene",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateABTestSceneResponse>(await this.callApi(params, req, runtime), new CreateABTestSceneResponse({}));
  }

  /**
   * @param request - CreateABTestSceneRequest
   * @returns CreateABTestSceneResponse
   */
  async createABTestScene(appGroupIdentity: string, request: CreateABTestSceneRequest): Promise<CreateABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestSceneWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Creates a version for an OpenSearch application.
   * 
   * @remarks
   *   When you create a standard application, a new version of the application is created if the specified application name already exists.
   * *   When you create a version of an existing application, you must specify the autoSwitch and realtimeShared parameters.
   * *   When you create a version of an existing application, the value of the quota parameter is the same as that of the quota parameter in the previous version of the application.
   * *   When you create a version of an existing application, the modification of the value of the quota parameter does not take effect.
   * 
   * @param request - CreateAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(appGroupIdentity: string, request: CreateAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoSwitch)) {
      body["autoSwitch"] = request.autoSwitch;
    }

    if (!Util.isUnset(request.cluster)) {
      body["cluster"] = request.cluster;
    }

    if (!Util.isUnset(request.dataSources)) {
      body["dataSources"] = request.dataSources;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!Util.isUnset(request.fetchFields)) {
      body["fetchFields"] = request.fetchFields;
    }

    if (!Util.isUnset(request.firstRanks)) {
      body["firstRanks"] = request.firstRanks;
    }

    if (!Util.isUnset(request.networkType)) {
      body["networkType"] = request.networkType;
    }

    if (!Util.isUnset(request.queryProcessors)) {
      body["queryProcessors"] = request.queryProcessors;
    }

    if (!Util.isUnset(request.schema)) {
      body["schema"] = request.schema;
    }

    if (!Util.isUnset(request.schemas)) {
      body["schemas"] = request.schemas;
    }

    if (!Util.isUnset(request.secondRanks)) {
      body["secondRanks"] = request.secondRanks;
    }

    if (!Util.isUnset(request.summaries)) {
      body["summaries"] = request.summaries;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  /**
   * Creates a version for an OpenSearch application.
   * 
   * @remarks
   *   When you create a standard application, a new version of the application is created if the specified application name already exists.
   * *   When you create a version of an existing application, you must specify the autoSwitch and realtimeShared parameters.
   * *   When you create a version of an existing application, the value of the quota parameter is the same as that of the quota parameter in the previous version of the application.
   * *   When you create a version of an existing application, the modification of the value of the quota parameter does not take effect.
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(appGroupIdentity: string, request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Create an OpenSearch application.
   * 
   * @param request - CreateAppGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppGroupResponse
   */
  async createAppGroupWithOptions(request: CreateAppGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.quota)) {
      body["quota"] = request.quota;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAppGroupResponse>(await this.callApi(params, req, runtime), new CreateAppGroupResponse({}));
  }

  /**
   * Create an OpenSearch application.
   * 
   * @param request - CreateAppGroupRequest
   * @returns CreateAppGroupResponse
   */
  async createAppGroup(request: CreateAppGroupRequest): Promise<CreateAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppGroupWithOptions(request, headers, runtime);
  }

  /**
   * @param request - CreateAppGroupCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppGroupCredentialsResponse
   */
  async createAppGroupCredentialsWithOptions(appGroupIdentity: string, request: CreateAppGroupCredentialsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppGroupCredentialsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppGroupCredentials",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/credentials`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAppGroupCredentialsResponse>(await this.callApi(params, req, runtime), new CreateAppGroupCredentialsResponse({}));
  }

  /**
   * @param request - CreateAppGroupCredentialsRequest
   * @returns CreateAppGroupCredentialsResponse
   */
  async createAppGroupCredentials(appGroupIdentity: string, request: CreateAppGroupCredentialsRequest): Promise<CreateAppGroupCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppGroupCredentialsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Creates a rough sort expression for a version of an OpenSearch application. If you set dryRun to true, this operation checks the specified rough sort expression. By default, the value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateFirstRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirstRankResponse
   */
  async createFirstRankWithOptions(appGroupIdentity: string, appId: string, request: CreateFirstRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFirstRankResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFirstRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/first-ranks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFirstRankResponse>(await this.callApi(params, req, runtime), new CreateFirstRankResponse({}));
  }

  /**
   * Creates a rough sort expression for a version of an OpenSearch application. If you set dryRun to true, this operation checks the specified rough sort expression. By default, the value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateFirstRankRequest
   * @returns CreateFirstRankResponse
   */
  async createFirstRank(appGroupIdentity: string, appId: string, request: CreateFirstRankRequest): Promise<CreateFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFirstRankWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Creates an algorithm instance of a feature.
   * 
   * @remarks
   * You can call the [GetFunctionCurrentVersion](https://help.aliyun.com/document_detail/421377.html) operation to query the latest version of a feature. The response of the operation includes the createParameters parameter that is used to create an algorithm instance, the usageParameters parameter, and the requirements for setting these parameters.
   * 
   * @param request - CreateFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionInstanceResponse
   */
  async createFunctionInstanceWithOptions(appGroupIdentity: string, functionName: string, request: CreateFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFunctionInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createParameters)) {
      body["createParameters"] = request.createParameters;
    }

    if (!Util.isUnset(request.cron)) {
      body["cron"] = request.cron;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.functionType)) {
      body["functionType"] = request.functionType;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.modelType)) {
      body["modelType"] = request.modelType;
    }

    if (!Util.isUnset(request.usageParameters)) {
      body["usageParameters"] = request.usageParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunctionInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionInstanceResponse>(await this.callApi(params, req, runtime), new CreateFunctionInstanceResponse({}));
  }

  /**
   * Creates an algorithm instance of a feature.
   * 
   * @remarks
   * You can call the [GetFunctionCurrentVersion](https://help.aliyun.com/document_detail/421377.html) operation to query the latest version of a feature. The response of the operation includes the createParameters parameter that is used to create an algorithm instance, the usageParameters parameter, and the requirements for setting these parameters.
   * 
   * @param request - CreateFunctionInstanceRequest
   * @returns CreateFunctionInstanceResponse
   */
  async createFunctionInstance(appGroupIdentity: string, functionName: string, request: CreateFunctionInstanceRequest): Promise<CreateFunctionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionInstanceWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Creates an algorithm resource for a specific feature.
   * 
   * @param request - CreateFunctionResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionResourceResponse
   */
  async createFunctionResourceWithOptions(appGroupIdentity: string, functionName: string, request: CreateFunctionResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunctionResource",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionResourceResponse>(await this.callApi(params, req, runtime), new CreateFunctionResourceResponse({}));
  }

  /**
   * Creates an algorithm resource for a specific feature.
   * 
   * @param request - CreateFunctionResourceRequest
   * @returns CreateFunctionResourceResponse
   */
  async createFunctionResource(appGroupIdentity: string, functionName: string, request: CreateFunctionResourceRequest): Promise<CreateFunctionResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionResourceWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Starts a training task for an algorithm instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionTaskResponse
   */
  async createFunctionTaskWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFunctionTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateFunctionTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances/${OpenApiUtil.getEncodeParam(instanceName)}/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionTaskResponse>(await this.callApi(params, req, runtime), new CreateFunctionTaskResponse({}));
  }

  /**
   * Starts a training task for an algorithm instance.
   * @returns CreateFunctionTaskResponse
   */
  async createFunctionTask(appGroupIdentity: string, functionName: string, instanceName: string): Promise<CreateFunctionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionTaskWithOptions(appGroupIdentity, functionName, instanceName, headers, runtime);
  }

  /**
   * Create an intervention dictionary.
   * 
   * @param request - CreateInterventionDictionaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInterventionDictionaryResponse
   */
  async createInterventionDictionaryWithOptions(request: CreateInterventionDictionaryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInterventionDictionaryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.analyzerType)) {
      body["analyzerType"] = request.analyzerType;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInterventionDictionary",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInterventionDictionaryResponse>(await this.callApi(params, req, runtime), new CreateInterventionDictionaryResponse({}));
  }

  /**
   * Create an intervention dictionary.
   * 
   * @param request - CreateInterventionDictionaryRequest
   * @returns CreateInterventionDictionaryResponse
   */
  async createInterventionDictionary(request: CreateInterventionDictionaryRequest): Promise<CreateInterventionDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInterventionDictionaryWithOptions(request, headers, runtime);
  }

  /**
   * Creates a query analysis rule. If you set dryRun to true, this operation checks the specified query analysis rule. By default, the value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateQueryProcessorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueryProcessorResponse
   */
  async createQueryProcessorWithOptions(appGroupIdentity: string, appId: string, request: CreateQueryProcessorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateQueryProcessorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateQueryProcessor",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/query-processors`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateQueryProcessorResponse>(await this.callApi(params, req, runtime), new CreateQueryProcessorResponse({}));
  }

  /**
   * Creates a query analysis rule. If you set dryRun to true, this operation checks the specified query analysis rule. By default, the value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateQueryProcessorRequest
   * @returns CreateQueryProcessorResponse
   */
  async createQueryProcessor(appGroupIdentity: string, appId: string, request: CreateQueryProcessorRequest): Promise<CreateQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQueryProcessorWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * @param request - CreateScheduledTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTaskWithOptions(appGroupIdentity: string, request: CreateScheduledTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateScheduledTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateScheduledTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scheduled-tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateScheduledTaskResponse>(await this.callApi(params, req, runtime), new CreateScheduledTaskResponse({}));
  }

  /**
   * @param request - CreateScheduledTaskRequest
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTask(appGroupIdentity: string, request: CreateScheduledTaskRequest): Promise<CreateScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduledTaskWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Creates a query policy.
   * 
   * @param request - CreateSearchStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSearchStrategyResponse
   */
  async createSearchStrategyWithOptions(appGroupIdentity: string, appId: string, request: CreateSearchStrategyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSearchStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSearchStrategy",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/search-strategies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSearchStrategyResponse>(await this.callApi(params, req, runtime), new CreateSearchStrategyResponse({}));
  }

  /**
   * Creates a query policy.
   * 
   * @param request - CreateSearchStrategyRequest
   * @returns CreateSearchStrategyResponse
   */
  async createSearchStrategy(appGroupIdentity: string, appId: string, request: CreateSearchStrategyRequest): Promise<CreateSearchStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSearchStrategyWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Creates a fine sort expression for a version of an OpenSearch application. If you set dryRun to true, this operation checks the specified fine sort expression. The default value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateSecondRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecondRankResponse
   */
  async createSecondRankWithOptions(appGroupIdentity: string, appId: string, request: CreateSecondRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSecondRankResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecondRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/second-ranks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSecondRankResponse>(await this.callApi(params, req, runtime), new CreateSecondRankResponse({}));
  }

  /**
   * Creates a fine sort expression for a version of an OpenSearch application. If you set dryRun to true, this operation checks the specified fine sort expression. The default value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateSecondRankRequest
   * @returns CreateSecondRankResponse
   */
  async createSecondRank(appGroupIdentity: string, appId: string, request: CreateSecondRankRequest): Promise<CreateSecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSecondRankWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Creates a sort script.
   * 
   * @param request - CreateSortScriptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSortScriptResponse
   */
  async createSortScriptWithOptions(appGroupIdentity: string, appVersionId: string, request: CreateSortScriptRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSortScriptResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!Util.isUnset(request.scriptName)) {
      body["scriptName"] = request.scriptName;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSortScriptResponse>(await this.callApi(params, req, runtime), new CreateSortScriptResponse({}));
  }

  /**
   * Creates a sort script.
   * 
   * @param request - CreateSortScriptRequest
   * @returns CreateSortScriptResponse
   */
  async createSortScript(appGroupIdentity: string, appVersionId: string, request: CreateSortScriptRequest): Promise<CreateSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSortScriptWithOptions(appGroupIdentity, appVersionId, request, headers, runtime);
  }

  /**
   * @param request - CreateUserAnalyzerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserAnalyzerResponse
   */
  async createUserAnalyzerWithOptions(request: CreateUserAnalyzerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateUserAnalyzerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.business)) {
      body["business"] = request.business;
    }

    if (!Util.isUnset(request.businessAppGroupId)) {
      body["businessAppGroupId"] = request.businessAppGroupId;
    }

    if (!Util.isUnset(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateUserAnalyzerResponse>(await this.callApi(params, req, runtime), new CreateUserAnalyzerResponse({}));
  }

  /**
   * @param request - CreateUserAnalyzerRequest
   * @returns CreateUserAnalyzerResponse
   */
  async createUserAnalyzer(request: CreateUserAnalyzerRequest): Promise<CreateUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserAnalyzerWithOptions(request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABTestExperimentResponse
   */
  async deleteABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteABTestExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteABTestExperiment",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteABTestExperimentResponse>(await this.callApi(params, req, runtime), new DeleteABTestExperimentResponse({}));
  }

  /**
   * @returns DeleteABTestExperimentResponse
   */
  async deleteABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<DeleteABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABTestGroupResponse
   */
  async deleteABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteABTestGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteABTestGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteABTestGroupResponse>(await this.callApi(params, req, runtime), new DeleteABTestGroupResponse({}));
  }

  /**
   * @returns DeleteABTestGroupResponse
   */
  async deleteABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string): Promise<DeleteABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  /**
   * Deletes an A/B test scenario.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABTestSceneResponse
   */
  async deleteABTestSceneWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteABTestSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteABTestScene",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteABTestSceneResponse>(await this.callApi(params, req, runtime), new DeleteABTestSceneResponse({}));
  }

  /**
   * Deletes an A/B test scenario.
   * @returns DeleteABTestSceneResponse
   */
  async deleteABTestScene(appGroupIdentity: string, sceneId: string): Promise<DeleteABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestSceneWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  /**
   * Deletes an algorithm instance. Before you delete an instance, make sure that it is not in use to prevent service interruptions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionInstanceResponse
   */
  async deleteFunctionInstanceWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunctionInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances/${OpenApiUtil.getEncodeParam(instanceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFunctionInstanceResponse>(await this.callApi(params, req, runtime), new DeleteFunctionInstanceResponse({}));
  }

  /**
   * Deletes an algorithm instance. Before you delete an instance, make sure that it is not in use to prevent service interruptions.
   * @returns DeleteFunctionInstanceResponse
   */
  async deleteFunctionInstance(appGroupIdentity: string, functionName: string, instanceName: string): Promise<DeleteFunctionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionInstanceWithOptions(appGroupIdentity, functionName, instanceName, headers, runtime);
  }

  /**
   * Deletes an algorithm resource.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionResourceResponse
   */
  async deleteFunctionResourceWithOptions(appGroupIdentity: string, functionName: string, resourceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunctionResource",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/resources/${OpenApiUtil.getEncodeParam(resourceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFunctionResourceResponse>(await this.callApi(params, req, runtime), new DeleteFunctionResourceResponse({}));
  }

  /**
   * Deletes an algorithm resource.
   * @returns DeleteFunctionResourceResponse
   */
  async deleteFunctionResource(appGroupIdentity: string, functionName: string, resourceName: string): Promise<DeleteFunctionResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionResourceWithOptions(appGroupIdentity, functionName, resourceName, headers, runtime);
  }

  /**
   * Deletes a training task. The training task in progress cannot be deleted.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionTaskResponse
   */
  async deleteFunctionTaskWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, generation: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunctionTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances/${OpenApiUtil.getEncodeParam(instanceName)}/tasks/${OpenApiUtil.getEncodeParam(generation)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFunctionTaskResponse>(await this.callApi(params, req, runtime), new DeleteFunctionTaskResponse({}));
  }

  /**
   * Deletes a training task. The training task in progress cannot be deleted.
   * @returns DeleteFunctionTaskResponse
   */
  async deleteFunctionTask(appGroupIdentity: string, functionName: string, instanceName: string, generation: string): Promise<DeleteFunctionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionTaskWithOptions(appGroupIdentity, functionName, instanceName, generation, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSortScriptResponse
   */
  async deleteSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts/${OpenApiUtil.getEncodeParam(scriptName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSortScriptResponse>(await this.callApi(params, req, runtime), new DeleteSortScriptResponse({}));
  }

  /**
   * @returns DeleteSortScriptResponse
   */
  async deleteSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<DeleteSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSortScriptFileResponse
   */
  async deleteSortScriptFileWithOptions(appGroupIdentity: string, appVersionId: string, scriptName: string, fileName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSortScriptFileResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSortScriptFile",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts/${OpenApiUtil.getEncodeParam(scriptName)}/files/src/${OpenApiUtil.getEncodeParam(fileName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSortScriptFileResponse>(await this.callApi(params, req, runtime), new DeleteSortScriptFileResponse({}));
  }

  /**
   * @returns DeleteSortScriptFileResponse
   */
  async deleteSortScriptFile(appGroupIdentity: string, appVersionId: string, scriptName: string, fileName: string): Promise<DeleteSortScriptFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSortScriptFileWithOptions(appGroupIdentity, appVersionId, scriptName, fileName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeABTestExperimentResponse
   */
  async describeABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeABTestExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeABTestExperiment",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeABTestExperimentResponse>(await this.callApi(params, req, runtime), new DescribeABTestExperimentResponse({}));
  }

  /**
   * @returns DescribeABTestExperimentResponse
   */
  async describeABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<DescribeABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeABTestGroupResponse
   */
  async describeABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeABTestGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeABTestGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeABTestGroupResponse>(await this.callApi(params, req, runtime), new DescribeABTestGroupResponse({}));
  }

  /**
   * @returns DescribeABTestGroupResponse
   */
  async describeABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string): Promise<DescribeABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  /**
   * Queries the information about an A/B test scenario.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeABTestSceneResponse
   */
  async describeABTestSceneWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeABTestSceneResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeABTestScene",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeABTestSceneResponse>(await this.callApi(params, req, runtime), new DescribeABTestSceneResponse({}));
  }

  /**
   * Queries the information about an A/B test scenario.
   * @returns DescribeABTestSceneResponse
   */
  async describeABTestScene(appGroupIdentity: string, sceneId: string): Promise<DescribeABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestSceneWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppResponse
   */
  async describeAppWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeApp",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppResponse>(await this.callApi(params, req, runtime), new DescribeAppResponse({}));
  }

  /**
   * @returns DescribeAppResponse
   */
  async describeApp(appGroupIdentity: string, appId: string): Promise<DescribeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries the details of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppGroupResponse
   */
  async describeAppGroupWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppGroupResponse>(await this.callApi(params, req, runtime), new DescribeAppGroupResponse({}));
  }

  /**
   * Queries the details of an OpenSearch application.
   * @returns DescribeAppGroupResponse
   */
  async describeAppGroup(appGroupIdentity: string): Promise<DescribeAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppStatisticsResponse
   */
  async describeAppStatisticsWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppStatistics",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/statistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeAppStatisticsResponse({}));
  }

  /**
   * @returns DescribeAppStatisticsResponse
   */
  async describeAppStatistics(appGroupIdentity: string, appId: string): Promise<DescribeAppStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppStatisticsWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeApps",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppsResponse>(await this.callApi(params, req, runtime), new DescribeAppsResponse({}));
  }

  /**
   * @returns DescribeAppsResponse
   */
  async describeApps(appGroupIdentity: string): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppsWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Queries the details of a data collection task of an application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataCollctionResponse
   */
  async describeDataCollctionWithOptions(appGroupIdentity: string, dataCollectionIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDataCollctionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataCollction",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/data-collections/${OpenApiUtil.getEncodeParam(dataCollectionIdentity)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataCollctionResponse>(await this.callApi(params, req, runtime), new DescribeDataCollctionResponse({}));
  }

  /**
   * Queries the details of a data collection task of an application.
   * @returns DescribeDataCollctionResponse
   */
  async describeDataCollction(appGroupIdentity: string, dataCollectionIdentity: string): Promise<DescribeDataCollctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDataCollctionWithOptions(appGroupIdentity, dataCollectionIdentity, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFirstRankResponse
   */
  async describeFirstRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeFirstRankResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeFirstRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/first-ranks/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeFirstRankResponse>(await this.callApi(params, req, runtime), new DescribeFirstRankResponse({}));
  }

  /**
   * @returns DescribeFirstRankResponse
   */
  async describeFirstRank(appGroupIdentity: string, appId: string, name: string): Promise<DescribeFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFirstRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInterventionDictionaryResponse
   */
  async describeInterventionDictionaryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInterventionDictionaryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeInterventionDictionary",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeInterventionDictionaryResponse>(await this.callApi(params, req, runtime), new DescribeInterventionDictionaryResponse({}));
  }

  /**
   * @returns DescribeInterventionDictionaryResponse
   */
  async describeInterventionDictionary(name: string): Promise<DescribeInterventionDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInterventionDictionaryWithOptions(name, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQueryProcessorResponse
   */
  async describeQueryProcessorWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQueryProcessorResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeQueryProcessor",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/query-processors/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeQueryProcessorResponse>(await this.callApi(params, req, runtime), new DescribeQueryProcessorResponse({}));
  }

  /**
   * @returns DescribeQueryProcessorResponse
   */
  async describeQueryProcessor(appGroupIdentity: string, appId: string, name: string): Promise<DescribeQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQueryProcessorWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * Queries the endpoints of all regions that support OpenSearch.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries the endpoints of all regions that support OpenSearch.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScheduledTaskResponse
   */
  async describeScheduledTaskWithOptions(appGroupIdentity: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeScheduledTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeScheduledTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scheduled-tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeScheduledTaskResponse>(await this.callApi(params, req, runtime), new DescribeScheduledTaskResponse({}));
  }

  /**
   * @returns DescribeScheduledTaskResponse
   */
  async describeScheduledTask(appGroupIdentity: string, taskId: string): Promise<DescribeScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeScheduledTaskWithOptions(appGroupIdentity, taskId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecondRankResponse
   */
  async describeSecondRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSecondRankResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecondRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/second-ranks/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecondRankResponse>(await this.callApi(params, req, runtime), new DescribeSecondRankResponse({}));
  }

  /**
   * @returns DescribeSecondRankResponse
   */
  async describeSecondRank(appGroupIdentity: string, appId: string, name: string): Promise<DescribeSecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSecondRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowQueryStatusResponse
   */
  async describeSlowQueryStatusWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSlowQueryStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowQueryStatus",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/optimizers/slow-query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowQueryStatusResponse>(await this.callApi(params, req, runtime), new DescribeSlowQueryStatusResponse({}));
  }

  /**
   * @returns DescribeSlowQueryStatusResponse
   */
  async describeSlowQueryStatus(appGroupIdentity: string): Promise<DescribeSlowQueryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSlowQueryStatusWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * @param request - DescribeUserAnalyzerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserAnalyzerResponse
   */
  async describeUserAnalyzerWithOptions(name: string, request: DescribeUserAnalyzerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUserAnalyzerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.with)) {
      query["with"] = request.with;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers/${OpenApiUtil.getEncodeParam(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserAnalyzerResponse>(await this.callApi(params, req, runtime), new DescribeUserAnalyzerResponse({}));
  }

  /**
   * @param request - DescribeUserAnalyzerRequest
   * @returns DescribeUserAnalyzerResponse
   */
  async describeUserAnalyzer(name: string, request: DescribeUserAnalyzerRequest): Promise<DescribeUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserAnalyzerWithOptions(name, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSlowQueryResponse
   */
  async disableSlowQueryWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableSlowQueryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DisableSlowQuery",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/optimizers/slow-query/actions/disable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableSlowQueryResponse>(await this.callApi(params, req, runtime), new DisableSlowQueryResponse({}));
  }

  /**
   * @returns DisableSlowQueryResponse
   */
  async disableSlowQuery(appGroupIdentity: string): Promise<DisableSlowQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSlowQueryWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSlowQueryResponse
   */
  async enableSlowQueryWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableSlowQueryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "EnableSlowQuery",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/optimizers/slow-query/actions/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableSlowQueryResponse>(await this.callApi(params, req, runtime), new EnableSlowQueryResponse({}));
  }

  /**
   * @returns EnableSlowQueryResponse
   */
  async enableSlowQuery(appGroupIdentity: string): Promise<EnableSlowQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSlowQueryWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Queries the information about a wide table that is generated after a JOIN operation is performed on multiple tables.
   * 
   * @param request - GenerateMergedTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateMergedTableResponse
   */
  async generateMergedTableWithOptions(request: GenerateMergedTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateMergedTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.spec)) {
      query["spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateMergedTable",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/assist/schema/actions/merge`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateMergedTableResponse>(await this.callApi(params, req, runtime), new GenerateMergedTableResponse({}));
  }

  /**
   * Queries the information about a wide table that is generated after a JOIN operation is performed on multiple tables.
   * 
   * @param request - GenerateMergedTableRequest
   * @returns GenerateMergedTableResponse
   */
  async generateMergedTable(request: GenerateMergedTableRequest): Promise<GenerateMergedTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateMergedTableWithOptions(request, headers, runtime);
  }

  /**
   * Queries the type of an industry.
   * 
   * @param request - GetDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(domainName: string, request: GetDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDomainResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appGroupIdentity)) {
      query["appGroupIdentity"] = request.appGroupIdentity;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDomain",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/domains/${OpenApiUtil.getEncodeParam(domainName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDomainResponse>(await this.callApi(params, req, runtime), new GetDomainResponse({}));
  }

  /**
   * Queries the type of an industry.
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(domainName: string, request: GetDomainRequest): Promise<GetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(domainName, request, headers, runtime);
  }

  /**
   * Queries the version information about the current feature when you create an instance.
   * 
   * @param request - GetFunctionCurrentVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionCurrentVersionResponse
   */
  async getFunctionCurrentVersionWithOptions(functionName: string, request: GetFunctionCurrentVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionCurrentVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      query["category"] = request.category;
    }

    if (!Util.isUnset(request.domain)) {
      query["domain"] = request.domain;
    }

    if (!Util.isUnset(request.functionType)) {
      query["functionType"] = request.functionType;
    }

    if (!Util.isUnset(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionCurrentVersion",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/functions/${OpenApiUtil.getEncodeParam(functionName)}/current-version`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionCurrentVersionResponse>(await this.callApi(params, req, runtime), new GetFunctionCurrentVersionResponse({}));
  }

  /**
   * Queries the version information about the current feature when you create an instance.
   * 
   * @param request - GetFunctionCurrentVersionRequest
   * @returns GetFunctionCurrentVersionResponse
   */
  async getFunctionCurrentVersion(functionName: string, request: GetFunctionCurrentVersionRequest): Promise<GetFunctionCurrentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionCurrentVersionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries the algorithm instance that an application uses by default.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionDefaultInstanceResponse
   */
  async getFunctionDefaultInstanceWithOptions(appGroupIdentity: string, functionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionDefaultInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionDefaultInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/default-instance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionDefaultInstanceResponse>(await this.callApi(params, req, runtime), new GetFunctionDefaultInstanceResponse({}));
  }

  /**
   * Queries the algorithm instance that an application uses by default.
   * @returns GetFunctionDefaultInstanceResponse
   */
  async getFunctionDefaultInstance(appGroupIdentity: string, functionName: string): Promise<GetFunctionDefaultInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionDefaultInstanceWithOptions(appGroupIdentity, functionName, headers, runtime);
  }

  /**
   * Queries the details of an algorithm instance by instance name.
   * 
   * @param request - GetFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionInstanceResponse
   */
  async getFunctionInstanceWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, request: GetFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.output)) {
      query["output"] = request.output;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances/${OpenApiUtil.getEncodeParam(instanceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionInstanceResponse>(await this.callApi(params, req, runtime), new GetFunctionInstanceResponse({}));
  }

  /**
   * Queries the details of an algorithm instance by instance name.
   * 
   * @param request - GetFunctionInstanceRequest
   * @returns GetFunctionInstanceResponse
   */
  async getFunctionInstance(appGroupIdentity: string, functionName: string, instanceName: string, request: GetFunctionInstanceRequest): Promise<GetFunctionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionInstanceWithOptions(appGroupIdentity, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Queries an algorithm resource.
   * 
   * @param request - GetFunctionResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionResourceResponse
   */
  async getFunctionResourceWithOptions(appGroupIdentity: string, functionName: string, resourceName: string, request: GetFunctionResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.output)) {
      query["output"] = request.output;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionResource",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/resources/${OpenApiUtil.getEncodeParam(resourceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionResourceResponse>(await this.callApi(params, req, runtime), new GetFunctionResourceResponse({}));
  }

  /**
   * Queries an algorithm resource.
   * 
   * @param request - GetFunctionResourceRequest
   * @returns GetFunctionResourceResponse
   */
  async getFunctionResource(appGroupIdentity: string, functionName: string, resourceName: string, request: GetFunctionResourceRequest): Promise<GetFunctionResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionResourceWithOptions(appGroupIdentity, functionName, resourceName, request, headers, runtime);
  }

  /**
   * Queries the details of a training task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionTaskResponse
   */
  async getFunctionTaskWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, generation: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances/${OpenApiUtil.getEncodeParam(instanceName)}/tasks/${OpenApiUtil.getEncodeParam(generation)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionTaskResponse>(await this.callApi(params, req, runtime), new GetFunctionTaskResponse({}));
  }

  /**
   * Queries the details of a training task.
   * @returns GetFunctionTaskResponse
   */
  async getFunctionTask(appGroupIdentity: string, functionName: string, instanceName: string, generation: string): Promise<GetFunctionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionTaskWithOptions(appGroupIdentity, functionName, instanceName, generation, headers, runtime);
  }

  /**
   * Queries version information by version ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionVersionResponse
   */
  async getFunctionVersionWithOptions(functionName: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionVersion",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/functions/${OpenApiUtil.getEncodeParam(functionName)}/versions/${OpenApiUtil.getEncodeParam(versionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionVersionResponse>(await this.callApi(params, req, runtime), new GetFunctionVersionResponse({}));
  }

  /**
   * Queries version information by version ID.
   * @returns GetFunctionVersionResponse
   */
  async getFunctionVersion(functionName: string, versionId: string): Promise<GetFunctionVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionVersionWithOptions(functionName, versionId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScriptFileNamesResponse
   */
  async getScriptFileNamesWithOptions(appGroupIdentity: string, appVersionId: string, scriptName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetScriptFileNamesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetScriptFileNames",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts/${OpenApiUtil.getEncodeParam(scriptName)}/file-names`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetScriptFileNamesResponse>(await this.callApi(params, req, runtime), new GetScriptFileNamesResponse({}));
  }

  /**
   * @returns GetScriptFileNamesResponse
   */
  async getScriptFileNames(appGroupIdentity: string, appVersionId: string, scriptName: string): Promise<GetScriptFileNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScriptFileNamesWithOptions(appGroupIdentity, appVersionId, scriptName, headers, runtime);
  }

  /**
   * Queries the details of a query policy.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSearchStrategyResponse
   */
  async getSearchStrategyWithOptions(appGroupIdentity: string, appId: string, strategyName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSearchStrategyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSearchStrategy",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/search-strategies/${OpenApiUtil.getEncodeParam(strategyName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSearchStrategyResponse>(await this.callApi(params, req, runtime), new GetSearchStrategyResponse({}));
  }

  /**
   * Queries the details of a query policy.
   * @returns GetSearchStrategyResponse
   */
  async getSearchStrategy(appGroupIdentity: string, appId: string, strategyName: string): Promise<GetSearchStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSearchStrategyWithOptions(appGroupIdentity, appId, strategyName, headers, runtime);
  }

  /**
   * Queries the details of a sort script.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSortScriptResponse
   */
  async getSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts/${OpenApiUtil.getEncodeParam(scriptName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSortScriptResponse>(await this.callApi(params, req, runtime), new GetSortScriptResponse({}));
  }

  /**
   * Queries the details of a sort script.
   * @returns GetSortScriptResponse
   */
  async getSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<GetSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  /**
   * Queries the content of a sort script.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSortScriptFileResponse
   */
  async getSortScriptFileWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSortScriptFileResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSortScriptFile",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts/${OpenApiUtil.getEncodeParam(scriptName)}/files/src/${OpenApiUtil.getEncodeParam(fileName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSortScriptFileResponse>(await this.callApi(params, req, runtime), new GetSortScriptFileResponse({}));
  }

  /**
   * Queries the content of a sort script.
   * @returns GetSortScriptFileResponse
   */
  async getSortScriptFile(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string): Promise<GetSortScriptFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSortScriptFileWithOptions(appGroupIdentity, scriptName, appVersionId, fileName, headers, runtime);
  }

  /**
   * Queries a list of experiments.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABTestExperimentsResponse
   */
  async listABTestExperimentsWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABTestExperimentsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListABTestExperiments",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListABTestExperimentsResponse>(await this.callApi(params, req, runtime), new ListABTestExperimentsResponse({}));
  }

  /**
   * Queries a list of experiments.
   * @returns ListABTestExperimentsResponse
   */
  async listABTestExperiments(appGroupIdentity: string, sceneId: string, groupId: string): Promise<ListABTestExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestExperimentsWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABTestFixedFlowDividersResponse
   */
  async listABTestFixedFlowDividersWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABTestFixedFlowDividersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListABTestFixedFlowDividers",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}/fixed-flow-dividers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListABTestFixedFlowDividersResponse>(await this.callApi(params, req, runtime), new ListABTestFixedFlowDividersResponse({}));
  }

  /**
   * @returns ListABTestFixedFlowDividersResponse
   */
  async listABTestFixedFlowDividers(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<ListABTestFixedFlowDividersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestFixedFlowDividersWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABTestGroupsResponse
   */
  async listABTestGroupsWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABTestGroupsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListABTestGroups",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListABTestGroupsResponse>(await this.callApi(params, req, runtime), new ListABTestGroupsResponse({}));
  }

  /**
   * @returns ListABTestGroupsResponse
   */
  async listABTestGroups(appGroupIdentity: string, sceneId: string): Promise<ListABTestGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestGroupsWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABTestScenesResponse
   */
  async listABTestScenesWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListABTestScenesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListABTestScenes",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListABTestScenesResponse>(await this.callApi(params, req, runtime), new ListABTestScenesResponse({}));
  }

  /**
   * @returns ListABTestScenesResponse
   */
  async listABTestScenes(appGroupIdentity: string): Promise<ListABTestScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestScenesWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Queries a list of OpenSearch applications.
   * 
   * @remarks
   *   This operation allows you to query applications by application name, instance ID, and application type.
   * *   This operation allows you to sort the applications based on their creation time.
   * *   This operation supports the parameters for paging.
   * 
   * @param tmpReq - ListAppGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppGroupsResponse
   */
  async listAppGroupsWithOptions(tmpReq: ListAppGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppGroupsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAppGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["sortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppGroups",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAppGroupsResponse>(await this.callApi(params, req, runtime), new ListAppGroupsResponse({}));
  }

  /**
   * Queries a list of OpenSearch applications.
   * 
   * @remarks
   *   This operation allows you to query applications by application name, instance ID, and application type.
   * *   This operation allows you to sort the applications based on their creation time.
   * *   This operation supports the parameters for paging.
   * 
   * @param request - ListAppGroupsRequest
   * @returns ListAppGroupsResponse
   */
  async listAppGroups(request: ListAppGroupsRequest): Promise<ListAppGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppGroupsWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListDataCollectionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCollectionsResponse
   */
  async listDataCollectionsWithOptions(appGroupIdentity: string, request: ListDataCollectionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataCollectionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataCollections",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/data-collections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataCollectionsResponse>(await this.callApi(params, req, runtime), new ListDataCollectionsResponse({}));
  }

  /**
   * @param request - ListDataCollectionsRequest
   * @returns ListDataCollectionsResponse
   */
  async listDataCollections(appGroupIdentity: string, request: ListDataCollectionsRequest): Promise<ListDataCollectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCollectionsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Queries all fields in a table of a data source. This operation is for internal use only.
   * 
   * @param request - ListDataSourceTableFieldsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceTableFieldsResponse
   */
  async listDataSourceTableFieldsWithOptions(dataSourceType: string, request: ListDataSourceTableFieldsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSourceTableFieldsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      query["params"] = request.params;
    }

    if (!Util.isUnset(request.rawType)) {
      query["rawType"] = request.rawType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSourceTableFields",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/assist/data-sources/${OpenApiUtil.getEncodeParam(dataSourceType)}/fields`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceTableFieldsResponse>(await this.callApi(params, req, runtime), new ListDataSourceTableFieldsResponse({}));
  }

  /**
   * Queries all fields in a table of a data source. This operation is for internal use only.
   * 
   * @param request - ListDataSourceTableFieldsRequest
   * @returns ListDataSourceTableFieldsResponse
   */
  async listDataSourceTableFields(dataSourceType: string, request: ListDataSourceTableFieldsRequest): Promise<ListDataSourceTableFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceTableFieldsWithOptions(dataSourceType, request, headers, runtime);
  }

  /**
   * @param request - ListDataSourceTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceTablesResponse
   */
  async listDataSourceTablesWithOptions(dataSourceType: string, request: ListDataSourceTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSourceTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      query["params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSourceTables",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/assist/data-sources/${OpenApiUtil.getEncodeParam(dataSourceType)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceTablesResponse>(await this.callApi(params, req, runtime), new ListDataSourceTablesResponse({}));
  }

  /**
   * @param request - ListDataSourceTablesRequest
   * @returns ListDataSourceTablesResponse
   */
  async listDataSourceTables(dataSourceType: string, request: ListDataSourceTablesRequest): Promise<ListDataSourceTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceTablesWithOptions(dataSourceType, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFirstRanksResponse
   */
  async listFirstRanksWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFirstRanksResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListFirstRanks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/first-ranks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFirstRanksResponse>(await this.callApi(params, req, runtime), new ListFirstRanksResponse({}));
  }

  /**
   * @returns ListFirstRanksResponse
   */
  async listFirstRanks(appGroupIdentity: string, appId: string): Promise<ListFirstRanksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFirstRanksWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries all algorithm instances of a user, which meet specified conditions.
   * 
   * @param request - ListFunctionInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionInstancesResponse
   */
  async listFunctionInstancesWithOptions(appGroupIdentity: string, functionName: string, request: ListFunctionInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.functionType)) {
      query["functionType"] = request.functionType;
    }

    if (!Util.isUnset(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    if (!Util.isUnset(request.output)) {
      query["output"] = request.output;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctionInstances",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionInstancesResponse>(await this.callApi(params, req, runtime), new ListFunctionInstancesResponse({}));
  }

  /**
   * Queries all algorithm instances of a user, which meet specified conditions.
   * 
   * @param request - ListFunctionInstancesRequest
   * @returns ListFunctionInstancesResponse
   */
  async listFunctionInstances(appGroupIdentity: string, functionName: string, request: ListFunctionInstancesRequest): Promise<ListFunctionInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionInstancesWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Queries algorithm resources.
   * 
   * @param request - ListFunctionResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionResourcesResponse
   */
  async listFunctionResourcesWithOptions(appGroupIdentity: string, functionName: string, request: ListFunctionResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.output)) {
      query["output"] = request.output;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctionResources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionResourcesResponse>(await this.callApi(params, req, runtime), new ListFunctionResourcesResponse({}));
  }

  /**
   * Queries algorithm resources.
   * 
   * @param request - ListFunctionResourcesRequest
   * @returns ListFunctionResourcesResponse
   */
  async listFunctionResources(appGroupIdentity: string, functionName: string, request: ListFunctionResourcesRequest): Promise<ListFunctionResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionResourcesWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Queries the training tasks. The returned results are sorted by start time in descending order.
   * 
   * @param request - ListFunctionTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionTasksResponse
   */
  async listFunctionTasksWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, request: ListFunctionTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctionTasks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances/${OpenApiUtil.getEncodeParam(instanceName)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionTasksResponse>(await this.callApi(params, req, runtime), new ListFunctionTasksResponse({}));
  }

  /**
   * Queries the training tasks. The returned results are sorted by start time in descending order.
   * 
   * @param request - ListFunctionTasksRequest
   * @returns ListFunctionTasksResponse
   */
  async listFunctionTasks(appGroupIdentity: string, functionName: string, instanceName: string, request: ListFunctionTasksRequest): Promise<ListFunctionTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionTasksWithOptions(appGroupIdentity, functionName, instanceName, request, headers, runtime);
  }

  /**
   * @param request - ListInterventionDictionariesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterventionDictionariesResponse
   */
  async listInterventionDictionariesWithOptions(request: ListInterventionDictionariesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInterventionDictionariesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.types)) {
      query["types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInterventionDictionaries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInterventionDictionariesResponse>(await this.callApi(params, req, runtime), new ListInterventionDictionariesResponse({}));
  }

  /**
   * @param request - ListInterventionDictionariesRequest
   * @returns ListInterventionDictionariesResponse
   */
  async listInterventionDictionaries(request: ListInterventionDictionariesRequest): Promise<ListInterventionDictionariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionariesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the intervention entries in an intervention dictionary.
   * 
   * @param request - ListInterventionDictionaryEntriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterventionDictionaryEntriesResponse
   */
  async listInterventionDictionaryEntriesWithOptions(name: string, request: ListInterventionDictionaryEntriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInterventionDictionaryEntriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.word)) {
      query["word"] = request.word;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInterventionDictionaryEntries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${OpenApiUtil.getEncodeParam(name)}/entries`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInterventionDictionaryEntriesResponse>(await this.callApi(params, req, runtime), new ListInterventionDictionaryEntriesResponse({}));
  }

  /**
   * Queries the intervention entries in an intervention dictionary.
   * 
   * @param request - ListInterventionDictionaryEntriesRequest
   * @returns ListInterventionDictionaryEntriesResponse
   */
  async listInterventionDictionaryEntries(name: string, request: ListInterventionDictionaryEntriesRequest): Promise<ListInterventionDictionaryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryEntriesWithOptions(name, request, headers, runtime);
  }

  /**
   * @param request - ListInterventionDictionaryNerResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterventionDictionaryNerResultsResponse
   */
  async listInterventionDictionaryNerResultsWithOptions(name: string, request: ListInterventionDictionaryNerResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInterventionDictionaryNerResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInterventionDictionaryNerResults",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${OpenApiUtil.getEncodeParam(name)}/ner-results`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInterventionDictionaryNerResultsResponse>(await this.callApi(params, req, runtime), new ListInterventionDictionaryNerResultsResponse({}));
  }

  /**
   * @param request - ListInterventionDictionaryNerResultsRequest
   * @returns ListInterventionDictionaryNerResultsResponse
   */
  async listInterventionDictionaryNerResults(name: string, request: ListInterventionDictionaryNerResultsRequest): Promise<ListInterventionDictionaryNerResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryNerResultsWithOptions(name, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterventionDictionaryRelatedEntitiesResponse
   */
  async listInterventionDictionaryRelatedEntitiesWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInterventionDictionaryRelatedEntitiesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListInterventionDictionaryRelatedEntities",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${OpenApiUtil.getEncodeParam(name)}/related`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInterventionDictionaryRelatedEntitiesResponse>(await this.callApi(params, req, runtime), new ListInterventionDictionaryRelatedEntitiesResponse({}));
  }

  /**
   * @returns ListInterventionDictionaryRelatedEntitiesResponse
   */
  async listInterventionDictionaryRelatedEntities(name: string): Promise<ListInterventionDictionaryRelatedEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryRelatedEntitiesWithOptions(name, headers, runtime);
  }

  /**
   * 查看当前的处理流
   * 
   * @param request - ListProceedingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProceedingsResponse
   */
  async listProceedingsWithOptions(appGroupIdentity: string, request: ListProceedingsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProceedingsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filterFinished)) {
      query["filterFinished"] = request.filterFinished;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProceedings",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/proceedings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProceedingsResponse>(await this.callApi(params, req, runtime), new ListProceedingsResponse({}));
  }

  /**
   * 查看当前的处理流
   * 
   * @param request - ListProceedingsRequest
   * @returns ListProceedingsResponse
   */
  async listProceedings(appGroupIdentity: string, request: ListProceedingsRequest): Promise<ListProceedingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProceedingsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Queries the results of a query analysis test. This API operation is available only to existing applications of OpenSearch Open Source Compatible Edition.
   * 
   * @param request - ListQueryProcessorAnalyzerResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueryProcessorAnalyzerResultsResponse
   */
  async listQueryProcessorAnalyzerResultsWithOptions(appGroupIdentity: string, appId: string, name: string, request: ListQueryProcessorAnalyzerResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQueryProcessorAnalyzerResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.text)) {
      query["text"] = request.text;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQueryProcessorAnalyzerResults",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/query-processors/${OpenApiUtil.getEncodeParam(name)}/analyze`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListQueryProcessorAnalyzerResultsResponse>(await this.callApi(params, req, runtime), new ListQueryProcessorAnalyzerResultsResponse({}));
  }

  /**
   * Queries the results of a query analysis test. This API operation is available only to existing applications of OpenSearch Open Source Compatible Edition.
   * 
   * @param request - ListQueryProcessorAnalyzerResultsRequest
   * @returns ListQueryProcessorAnalyzerResultsResponse
   */
  async listQueryProcessorAnalyzerResults(appGroupIdentity: string, appId: string, name: string, request: ListQueryProcessorAnalyzerResultsRequest): Promise<ListQueryProcessorAnalyzerResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorAnalyzerResultsWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  /**
   * Queries the recommended priority settings of entity types for named entity recognition (NER).
   * 
   * @param request - ListQueryProcessorNersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueryProcessorNersResponse
   */
  async listQueryProcessorNersWithOptions(request: ListQueryProcessorNersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQueryProcessorNersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      query["domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQueryProcessorNers",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/query-processor/ner/default-priorities`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListQueryProcessorNersResponse>(await this.callApi(params, req, runtime), new ListQueryProcessorNersResponse({}));
  }

  /**
   * Queries the recommended priority settings of entity types for named entity recognition (NER).
   * 
   * @param request - ListQueryProcessorNersRequest
   * @returns ListQueryProcessorNersResponse
   */
  async listQueryProcessorNers(request: ListQueryProcessorNersRequest): Promise<ListQueryProcessorNersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorNersWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of query analysis rules that are configured for a version of an OpenSearch application.
   * 
   * @param request - ListQueryProcessorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueryProcessorsResponse
   */
  async listQueryProcessorsWithOptions(appGroupIdentity: string, appId: string, request: ListQueryProcessorsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQueryProcessorsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isActive)) {
      query["isActive"] = request.isActive;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQueryProcessors",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/query-processors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListQueryProcessorsResponse>(await this.callApi(params, req, runtime), new ListQueryProcessorsResponse({}));
  }

  /**
   * Queries a list of query analysis rules that are configured for a version of an OpenSearch application.
   * 
   * @param request - ListQueryProcessorsRequest
   * @returns ListQueryProcessorsResponse
   */
  async listQueryProcessors(appGroupIdentity: string, appId: string, request: ListQueryProcessorsRequest): Promise<ListQueryProcessorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorsWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Queries tickets that are submitted to apply for quotas for an OpenSearch application.
   * 
   * @param request - ListQuotaReviewTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaReviewTasksResponse
   */
  async listQuotaReviewTasksWithOptions(appGroupIdentity: string, request: ListQuotaReviewTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQuotaReviewTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotaReviewTasks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/quota-review-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListQuotaReviewTasksResponse>(await this.callApi(params, req, runtime), new ListQuotaReviewTasksResponse({}));
  }

  /**
   * Queries tickets that are submitted to apply for quotas for an OpenSearch application.
   * 
   * @param request - ListQuotaReviewTasksRequest
   * @returns ListQuotaReviewTasksResponse
   */
  async listQuotaReviewTasks(appGroupIdentity: string, request: ListQuotaReviewTasksRequest): Promise<ListQuotaReviewTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotaReviewTasksWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Queries a list of scheduled tasks of an OpenSearch application.
   * 
   * @param request - ListScheduledTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledTasksResponse
   */
  async listScheduledTasksWithOptions(appGroupIdentity: string, request: ListScheduledTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListScheduledTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScheduledTasks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scheduled-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListScheduledTasksResponse>(await this.callApi(params, req, runtime), new ListScheduledTasksResponse({}));
  }

  /**
   * Queries a list of scheduled tasks of an OpenSearch application.
   * 
   * @param request - ListScheduledTasksRequest
   * @returns ListScheduledTasksResponse
   */
  async listScheduledTasks(appGroupIdentity: string, request: ListScheduledTasksRequest): Promise<ListScheduledTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScheduledTasksWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Queries the details of query policies.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchStrategiesResponse
   */
  async listSearchStrategiesWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSearchStrategiesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSearchStrategies",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/search-strategies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSearchStrategiesResponse>(await this.callApi(params, req, runtime), new ListSearchStrategiesResponse({}));
  }

  /**
   * Queries the details of query policies.
   * @returns ListSearchStrategiesResponse
   */
  async listSearchStrategies(appGroupIdentity: string, appId: string): Promise<ListSearchStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSearchStrategiesWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecondRanksResponse
   */
  async listSecondRanksWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSecondRanksResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSecondRanks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/second-ranks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSecondRanksResponse>(await this.callApi(params, req, runtime), new ListSecondRanksResponse({}));
  }

  /**
   * @returns ListSecondRanksResponse
   */
  async listSecondRanks(appGroupIdentity: string, appId: string): Promise<ListSecondRanksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecondRanksWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries the suggestions that are provided by Optimization Master for slow queries.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSlowQueryCategoriesResponse
   */
  async listSlowQueryCategoriesWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSlowQueryCategoriesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSlowQueryCategories",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/optimizers/slow-query/categories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSlowQueryCategoriesResponse>(await this.callApi(params, req, runtime), new ListSlowQueryCategoriesResponse({}));
  }

  /**
   * Queries the suggestions that are provided by Optimization Master for slow queries.
   * @returns ListSlowQueryCategoriesResponse
   */
  async listSlowQueryCategories(appGroupIdentity: string): Promise<ListSlowQueryCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlowQueryCategoriesWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSlowQueryQueriesResponse
   */
  async listSlowQueryQueriesWithOptions(appGroupIdentity: string, categoryIndex: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSlowQueryQueriesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSlowQueryQueries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/optimizers/slow-query/categories/${OpenApiUtil.getEncodeParam(categoryIndex)}/queries`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSlowQueryQueriesResponse>(await this.callApi(params, req, runtime), new ListSlowQueryQueriesResponse({}));
  }

  /**
   * @returns ListSlowQueryQueriesResponse
   */
  async listSlowQueryQueries(appGroupIdentity: string, categoryIndex: string): Promise<ListSlowQueryQueriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlowQueryQueriesWithOptions(appGroupIdentity, categoryIndex, headers, runtime);
  }

  /**
   * Queries a list of sort expressions that are configured for a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSortExpressionsResponse
   */
  async listSortExpressionsWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSortExpressionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSortExpressions",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/sort-expressions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSortExpressionsResponse>(await this.callApi(params, req, runtime), new ListSortExpressionsResponse({}));
  }

  /**
   * Queries a list of sort expressions that are configured for a version of an OpenSearch application.
   * @returns ListSortExpressionsResponse
   */
  async listSortExpressions(appGroupIdentity: string, appId: string): Promise<ListSortExpressionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSortExpressionsWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries all sort scripts of an application version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSortScriptsResponse
   */
  async listSortScriptsWithOptions(appGroupIdentity: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSortScriptsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSortScripts",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSortScriptsResponse>(await this.callApi(params, req, runtime), new ListSortScriptsResponse({}));
  }

  /**
   * Queries all sort scripts of an application version.
   * @returns ListSortScriptsResponse
   */
  async listSortScripts(appGroupIdentity: string, appVersionId: string): Promise<ListSortScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSortScriptsWithOptions(appGroupIdentity, appVersionId, headers, runtime);
  }

  /**
   * Queries log statistics, such as application error logs, hotword rankings, and slow query logs.
   * 
   * @param request - ListStatisticLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStatisticLogsResponse
   */
  async listStatisticLogsWithOptions(appGroupIdentity: string, moduleName: string, request: ListStatisticLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListStatisticLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columns)) {
      query["columns"] = request.columns;
    }

    if (!Util.isUnset(request.distinct)) {
      query["distinct"] = request.distinct;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["sortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.stopTime)) {
      query["stopTime"] = request.stopTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStatisticLogs",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/statistic-logs/${OpenApiUtil.getEncodeParam(moduleName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListStatisticLogsResponse>(await this.callApi(params, req, runtime), new ListStatisticLogsResponse({}));
  }

  /**
   * Queries log statistics, such as application error logs, hotword rankings, and slow query logs.
   * 
   * @param request - ListStatisticLogsRequest
   * @returns ListStatisticLogsResponse
   */
  async listStatisticLogs(appGroupIdentity: string, moduleName: string, request: ListStatisticLogsRequest): Promise<ListStatisticLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatisticLogsWithOptions(appGroupIdentity, moduleName, request, headers, runtime);
  }

  /**
   * @param request - ListStatisticReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStatisticReportResponse
   */
  async listStatisticReportWithOptions(appGroupIdentity: string, moduleName: string, request: ListStatisticReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListStatisticReportResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columns)) {
      query["columns"] = request.columns;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStatisticReport",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/statistic-report/${OpenApiUtil.getEncodeParam(moduleName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListStatisticReportResponse>(await this.callApi(params, req, runtime), new ListStatisticReportResponse({}));
  }

  /**
   * @param request - ListStatisticReportRequest
   * @returns ListStatisticReportResponse
   */
  async listStatisticReport(appGroupIdentity: string, moduleName: string, request: ListStatisticReportRequest): Promise<ListStatisticReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatisticReportWithOptions(appGroupIdentity, moduleName, request, headers, runtime);
  }

  /**
   * Queries tagged resources.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/resource-tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the entries of a custom analyzer.
   * 
   * @param request - ListUserAnalyzerEntriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserAnalyzerEntriesResponse
   */
  async listUserAnalyzerEntriesWithOptions(name: string, request: ListUserAnalyzerEntriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserAnalyzerEntriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.word)) {
      query["word"] = request.word;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserAnalyzerEntries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers/${OpenApiUtil.getEncodeParam(name)}/entries`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserAnalyzerEntriesResponse>(await this.callApi(params, req, runtime), new ListUserAnalyzerEntriesResponse({}));
  }

  /**
   * Queries the entries of a custom analyzer.
   * 
   * @param request - ListUserAnalyzerEntriesRequest
   * @returns ListUserAnalyzerEntriesResponse
   */
  async listUserAnalyzerEntries(name: string, request: ListUserAnalyzerEntriesRequest): Promise<ListUserAnalyzerEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserAnalyzerEntriesWithOptions(name, request, headers, runtime);
  }

  /**
   * Queries the custom analyzers that belong to the current account.
   * 
   * @param request - ListUserAnalyzersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserAnalyzersResponse
   */
  async listUserAnalyzersWithOptions(request: ListUserAnalyzersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserAnalyzersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserAnalyzers",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserAnalyzersResponse>(await this.callApi(params, req, runtime), new ListUserAnalyzersResponse({}));
  }

  /**
   * Queries the custom analyzers that belong to the current account.
   * 
   * @param request - ListUserAnalyzersRequest
   * @returns ListUserAnalyzersResponse
   */
  async listUserAnalyzers(request: ListUserAnalyzersRequest): Promise<ListUserAnalyzersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserAnalyzersWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the properties of an OpenSearch application or sets the online version of an OpenSearch application.
   * 
   * @param request - ModifyAppGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppGroupResponse
   */
  async modifyAppGroupWithOptions(appGroupIdentity: string, request: ModifyAppGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyAppGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentVersion)) {
      body["currentVersion"] = request.currentVersion;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppGroupResponse>(await this.callApi(params, req, runtime), new ModifyAppGroupResponse({}));
  }

  /**
   * Modifies the properties of an OpenSearch application or sets the online version of an OpenSearch application.
   * 
   * @param request - ModifyAppGroupRequest
   * @returns ModifyAppGroupResponse
   */
  async modifyAppGroup(appGroupIdentity: string, request: ModifyAppGroupRequest): Promise<ModifyAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAppGroupWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * @param request - ModifyAppGroupQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppGroupQuotaResponse
   */
  async modifyAppGroupQuotaWithOptions(appGroupIdentity: string, request: ModifyAppGroupQuotaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyAppGroupQuotaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppGroupQuota",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/quota`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppGroupQuotaResponse>(await this.callApi(params, req, runtime), new ModifyAppGroupQuotaResponse({}));
  }

  /**
   * @param request - ModifyAppGroupQuotaRequest
   * @returns ModifyAppGroupQuotaResponse
   */
  async modifyAppGroupQuota(appGroupIdentity: string, request: ModifyAppGroupQuotaRequest): Promise<ModifyAppGroupQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAppGroupQuotaWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Modifies a rough sort expression for an OpenSearch application. If you set dryRun to true, this operation checks the rough sort expression after the expression is modified. If you do not specify this parameter, false is used by default.
   * 
   * @param request - ModifyFirstRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFirstRankResponse
   */
  async modifyFirstRankWithOptions(appGroupIdentity: string, appId: string, name: string, request: ModifyFirstRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyFirstRankResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFirstRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/first-ranks/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyFirstRankResponse>(await this.callApi(params, req, runtime), new ModifyFirstRankResponse({}));
  }

  /**
   * Modifies a rough sort expression for an OpenSearch application. If you set dryRun to true, this operation checks the rough sort expression after the expression is modified. If you do not specify this parameter, false is used by default.
   * 
   * @param request - ModifyFirstRankRequest
   * @returns ModifyFirstRankResponse
   */
  async modifyFirstRank(appGroupIdentity: string, appId: string, name: string, request: ModifyFirstRankRequest): Promise<ModifyFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFirstRankWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  /**
   * Modifies a query analysis rule for a specific application version. If you set dryRun to true, this operation checks the specified query analysis rule. By default, the value of dryRun is false if you do not specify this parameter.
   * 
   * @param request - ModifyQueryProcessorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyQueryProcessorResponse
   */
  async modifyQueryProcessorWithOptions(appGroupIdentity: string, appId: string, name: string, request: ModifyQueryProcessorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyQueryProcessorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "ModifyQueryProcessor",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/query-processors/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyQueryProcessorResponse>(await this.callApi(params, req, runtime), new ModifyQueryProcessorResponse({}));
  }

  /**
   * Modifies a query analysis rule for a specific application version. If you set dryRun to true, this operation checks the specified query analysis rule. By default, the value of dryRun is false if you do not specify this parameter.
   * 
   * @param request - ModifyQueryProcessorRequest
   * @returns ModifyQueryProcessorResponse
   */
  async modifyQueryProcessor(appGroupIdentity: string, appId: string, name: string, request: ModifyQueryProcessorRequest): Promise<ModifyQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyQueryProcessorWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  /**
   * Modifies a scheduled task.
   * 
   * @param request - ModifyScheduledTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScheduledTaskResponse
   */
  async modifyScheduledTaskWithOptions(appGroupIdentity: string, taskId: string, request: ModifyScheduledTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyScheduledTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "ModifyScheduledTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scheduled-tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyScheduledTaskResponse>(await this.callApi(params, req, runtime), new ModifyScheduledTaskResponse({}));
  }

  /**
   * Modifies a scheduled task.
   * 
   * @param request - ModifyScheduledTaskRequest
   * @returns ModifyScheduledTaskResponse
   */
  async modifyScheduledTask(appGroupIdentity: string, taskId: string, request: ModifyScheduledTaskRequest): Promise<ModifyScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScheduledTaskWithOptions(appGroupIdentity, taskId, request, headers, runtime);
  }

  /**
   * Modifies a fine sort expression that is configured for a specific OpenSearch application version. If you set dryRun to true, the specified fine sort expression is checked after the expression is modified. By default, the value of dryRun is false if you do not specify this parameter.
   * 
   * @param request - ModifySecondRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecondRankResponse
   */
  async modifySecondRankWithOptions(appGroupIdentity: string, appId: string, name: string, request: ModifySecondRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifySecondRankResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecondRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/second-ranks/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifySecondRankResponse>(await this.callApi(params, req, runtime), new ModifySecondRankResponse({}));
  }

  /**
   * Modifies a fine sort expression that is configured for a specific OpenSearch application version. If you set dryRun to true, the specified fine sort expression is checked after the expression is modified. By default, the value of dryRun is false if you do not specify this parameter.
   * 
   * @param request - ModifySecondRankRequest
   * @returns ModifySecondRankResponse
   */
  async modifySecondRank(appGroupIdentity: string, appId: string, name: string, request: ModifySecondRankRequest): Promise<ModifySecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySecondRankWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  /**
   * Accepts the changes in intervention entries.
   * 
   * @param request - PushInterventionDictionaryEntriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushInterventionDictionaryEntriesResponse
   */
  async pushInterventionDictionaryEntriesWithOptions(name: string, request: PushInterventionDictionaryEntriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushInterventionDictionaryEntriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PushInterventionDictionaryEntries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${OpenApiUtil.getEncodeParam(name)}/entries/actions/bulk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushInterventionDictionaryEntriesResponse>(await this.callApi(params, req, runtime), new PushInterventionDictionaryEntriesResponse({}));
  }

  /**
   * Accepts the changes in intervention entries.
   * 
   * @param request - PushInterventionDictionaryEntriesRequest
   * @returns PushInterventionDictionaryEntriesResponse
   */
  async pushInterventionDictionaryEntries(name: string, request: PushInterventionDictionaryEntriesRequest): Promise<PushInterventionDictionaryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushInterventionDictionaryEntriesWithOptions(name, request, headers, runtime);
  }

  /**
   * Accepts the changes in the entries of a custom analyzer.
   * 
   * @param request - PushUserAnalyzerEntriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushUserAnalyzerEntriesResponse
   */
  async pushUserAnalyzerEntriesWithOptions(name: string, request: PushUserAnalyzerEntriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PushUserAnalyzerEntriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.entries)) {
      body["entries"] = request.entries;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushUserAnalyzerEntries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers/${OpenApiUtil.getEncodeParam(name)}/entries/actions/bulk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushUserAnalyzerEntriesResponse>(await this.callApi(params, req, runtime), new PushUserAnalyzerEntriesResponse({}));
  }

  /**
   * Accepts the changes in the entries of a custom analyzer.
   * 
   * @param request - PushUserAnalyzerEntriesRequest
   * @returns PushUserAnalyzerEntriesResponse
   */
  async pushUserAnalyzerEntries(name: string, request: PushUserAnalyzerEntriesRequest): Promise<PushUserAnalyzerEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushUserAnalyzerEntriesWithOptions(name, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseSortScriptResponse
   */
  async releaseSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReleaseSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ReleaseSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts/${OpenApiUtil.getEncodeParam(scriptName)}/actions/release`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReleaseSortScriptResponse>(await this.callApi(params, req, runtime), new ReleaseSortScriptResponse({}));
  }

  /**
   * @returns ReleaseSortScriptResponse
   */
  async releaseSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<ReleaseSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  /**
   * Deletes a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAppResponse
   */
  async removeAppWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveAppResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveApp",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveAppResponse>(await this.callApi(params, req, runtime), new RemoveAppResponse({}));
  }

  /**
   * Deletes a version of an OpenSearch application.
   * @returns RemoveAppResponse
   */
  async removeApp(appGroupIdentity: string, appId: string): Promise<RemoveAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeAppWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAppGroupResponse
   */
  async removeAppGroupWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveAppGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveAppGroupResponse>(await this.callApi(params, req, runtime), new RemoveAppGroupResponse({}));
  }

  /**
   * @returns RemoveAppGroupResponse
   */
  async removeAppGroup(appGroupIdentity: string): Promise<RemoveAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Disables data collection.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDataCollectionResponse
   */
  async removeDataCollectionWithOptions(appGroupIdentity: string, dataCollectionIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveDataCollectionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveDataCollection",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/data-collections/${OpenApiUtil.getEncodeParam(dataCollectionIdentity)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveDataCollectionResponse>(await this.callApi(params, req, runtime), new RemoveDataCollectionResponse({}));
  }

  /**
   * Disables data collection.
   * @returns RemoveDataCollectionResponse
   */
  async removeDataCollection(appGroupIdentity: string, dataCollectionIdentity: string): Promise<RemoveDataCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeDataCollectionWithOptions(appGroupIdentity, dataCollectionIdentity, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFirstRankResponse
   */
  async removeFirstRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveFirstRankResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveFirstRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/first-ranks/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveFirstRankResponse>(await this.callApi(params, req, runtime), new RemoveFirstRankResponse({}));
  }

  /**
   * @returns RemoveFirstRankResponse
   */
  async removeFirstRank(appGroupIdentity: string, appId: string, name: string): Promise<RemoveFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeFirstRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveInterventionDictionaryResponse
   */
  async removeInterventionDictionaryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveInterventionDictionaryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveInterventionDictionary",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveInterventionDictionaryResponse>(await this.callApi(params, req, runtime), new RemoveInterventionDictionaryResponse({}));
  }

  /**
   * @returns RemoveInterventionDictionaryResponse
   */
  async removeInterventionDictionary(name: string): Promise<RemoveInterventionDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeInterventionDictionaryWithOptions(name, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveQueryProcessorResponse
   */
  async removeQueryProcessorWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveQueryProcessorResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveQueryProcessor",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/query-processors/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveQueryProcessorResponse>(await this.callApi(params, req, runtime), new RemoveQueryProcessorResponse({}));
  }

  /**
   * @returns RemoveQueryProcessorResponse
   */
  async removeQueryProcessor(appGroupIdentity: string, appId: string, name: string): Promise<RemoveQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeQueryProcessorWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveScheduledTaskResponse
   */
  async removeScheduledTaskWithOptions(appGroupIdentity: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveScheduledTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveScheduledTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scheduled-tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveScheduledTaskResponse>(await this.callApi(params, req, runtime), new RemoveScheduledTaskResponse({}));
  }

  /**
   * @returns RemoveScheduledTaskResponse
   */
  async removeScheduledTask(appGroupIdentity: string, taskId: string): Promise<RemoveScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeScheduledTaskWithOptions(appGroupIdentity, taskId, headers, runtime);
  }

  /**
   * Deletes a query policy.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSearchStrategyResponse
   */
  async removeSearchStrategyWithOptions(appGroupIdentity: string, appId: string, strategyName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveSearchStrategyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveSearchStrategy",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/search-strategies/${OpenApiUtil.getEncodeParam(strategyName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveSearchStrategyResponse>(await this.callApi(params, req, runtime), new RemoveSearchStrategyResponse({}));
  }

  /**
   * Deletes a query policy.
   * @returns RemoveSearchStrategyResponse
   */
  async removeSearchStrategy(appGroupIdentity: string, appId: string, strategyName: string): Promise<RemoveSearchStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeSearchStrategyWithOptions(appGroupIdentity, appId, strategyName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSecondRankResponse
   */
  async removeSecondRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveSecondRankResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveSecondRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/second-ranks/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveSecondRankResponse>(await this.callApi(params, req, runtime), new RemoveSecondRankResponse({}));
  }

  /**
   * @returns RemoveSecondRankResponse
   */
  async removeSecondRank(appGroupIdentity: string, appId: string, name: string): Promise<RemoveSecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeSecondRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserAnalyzerResponse
   */
  async removeUserAnalyzerWithOptions(name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveUserAnalyzerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveUserAnalyzerResponse>(await this.callApi(params, req, runtime), new RemoveUserAnalyzerResponse({}));
  }

  /**
   * @returns RemoveUserAnalyzerResponse
   */
  async removeUserAnalyzer(name: string): Promise<RemoveUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeUserAnalyzerWithOptions(name, headers, runtime);
  }

  /**
   * Renews an application. This operation is not available now. You must renew an application in the OpenSearch console.
   * 
   * @param request - RenewAppGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAppGroupResponse
   */
  async renewAppGroupWithOptions(appGroupIdentity: string, request: RenewAppGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenewAppGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "RenewAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/actions/renew`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RenewAppGroupResponse>(await this.callApi(params, req, runtime), new RenewAppGroupResponse({}));
  }

  /**
   * Renews an application. This operation is not available now. You must renew an application in the OpenSearch console.
   * 
   * @param request - RenewAppGroupRequest
   * @returns RenewAppGroupResponse
   */
  async renewAppGroup(appGroupIdentity: string, request: RenewAppGroupRequest): Promise<RenewAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewAppGroupWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Converts a service-based application to an instance-based application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceAppGroupCommodityCodeResponse
   */
  async replaceAppGroupCommodityCodeWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReplaceAppGroupCommodityCodeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ReplaceAppGroupCommodityCode",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/actions/to-instance-typed`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReplaceAppGroupCommodityCodeResponse>(await this.callApi(params, req, runtime), new ReplaceAppGroupCommodityCodeResponse({}));
  }

  /**
   * Converts a service-based application to an instance-based application.
   * @returns ReplaceAppGroupCommodityCodeResponse
   */
  async replaceAppGroupCommodityCode(appGroupIdentity: string): Promise<ReplaceAppGroupCommodityCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replaceAppGroupCommodityCodeWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Uploads a sort script.
   * 
   * @param request - SaveSortScriptFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSortScriptFileResponse
   */
  async saveSortScriptFileWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string, request: SaveSortScriptFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SaveSortScriptFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["content"] = request.content;
    }

    if (!Util.isUnset(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveSortScriptFile",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts/${OpenApiUtil.getEncodeParam(scriptName)}/files/src/${OpenApiUtil.getEncodeParam(fileName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SaveSortScriptFileResponse>(await this.callApi(params, req, runtime), new SaveSortScriptFileResponse({}));
  }

  /**
   * Uploads a sort script.
   * 
   * @param request - SaveSortScriptFileRequest
   * @returns SaveSortScriptFileResponse
   */
  async saveSortScriptFile(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string, request: SaveSortScriptFileRequest): Promise<SaveSortScriptFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.saveSortScriptFileWithOptions(appGroupIdentity, scriptName, appVersionId, fileName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSlowQueryAnalyzerResponse
   */
  async startSlowQueryAnalyzerWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartSlowQueryAnalyzerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartSlowQueryAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/optimizers/slow-query/actions/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartSlowQueryAnalyzerResponse>(await this.callApi(params, req, runtime), new StartSlowQueryAnalyzerResponse({}));
  }

  /**
   * @returns StartSlowQueryAnalyzerResponse
   */
  async startSlowQueryAnalyzer(appGroupIdentity: string): Promise<StartSlowQueryAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startSlowQueryAnalyzerWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/resource-tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Unbinds a custom analyzer from an Elasticsearch instance.
   * 
   * @remarks
   * You can call this operation to unbind a custom analyzer from an Elasticsearch instance.
   * 
   * @param request - UnbindESUserAnalyzerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindESUserAnalyzerResponse
   */
  async unbindESUserAnalyzerWithOptions(appGroupIdentity: string, esInstanceId: string, request: UnbindESUserAnalyzerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnbindESUserAnalyzerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UnbindESUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/es/${OpenApiUtil.getEncodeParam(esInstanceId)}/actions/unbind-analyzer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnbindESUserAnalyzerResponse>(await this.callApi(params, req, runtime), new UnbindESUserAnalyzerResponse({}));
  }

  /**
   * Unbinds a custom analyzer from an Elasticsearch instance.
   * 
   * @remarks
   * You can call this operation to unbind a custom analyzer from an Elasticsearch instance.
   * 
   * @param request - UnbindESUserAnalyzerRequest
   * @returns UnbindESUserAnalyzerResponse
   */
  async unbindESUserAnalyzer(appGroupIdentity: string, esInstanceId: string, request: UnbindESUserAnalyzerRequest): Promise<UnbindESUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindESUserAnalyzerWithOptions(appGroupIdentity, esInstanceId, request, headers, runtime);
  }

  /**
   * Unbinds an Elasticsearch instance from an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindEsInstanceResponse
   */
  async unbindEsInstanceWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnbindEsInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UnbindEsInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/actions/unbind-es-instance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnbindEsInstanceResponse>(await this.callApi(params, req, runtime), new UnbindEsInstanceResponse({}));
  }

  /**
   * Unbinds an Elasticsearch instance from an OpenSearch application.
   * @returns UnbindEsInstanceResponse
   */
  async unbindEsInstance(appGroupIdentity: string): Promise<UnbindEsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindEsInstanceWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Remove tags from resources.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!Util.isUnset(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "tagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["all"] = request.all;
    }

    if (!Util.isUnset(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeyShrink)) {
      query["tagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/resource-tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Remove tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the parameters of an A/B test.
   * 
   * @param request - UpdateABTestExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABTestExperimentResponse
   */
  async updateABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: UpdateABTestExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABTestExperimentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateABTestExperiment",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateABTestExperimentResponse>(await this.callApi(params, req, runtime), new UpdateABTestExperimentResponse({}));
  }

  /**
   * Modifies the parameters of an A/B test.
   * 
   * @param request - UpdateABTestExperimentRequest
   * @returns UpdateABTestExperimentResponse
   */
  async updateABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: UpdateABTestExperimentRequest): Promise<UpdateABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, request, headers, runtime);
  }

  /**
   * Modifies whitelists.
   * 
   * @param request - UpdateABTestFixedFlowDividersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABTestFixedFlowDividersResponse
   */
  async updateABTestFixedFlowDividersWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: UpdateABTestFixedFlowDividersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABTestFixedFlowDividersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateABTestFixedFlowDividers",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}/experiments/${OpenApiUtil.getEncodeParam(experimentId)}/fixed-flow-dividers`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateABTestFixedFlowDividersResponse>(await this.callApi(params, req, runtime), new UpdateABTestFixedFlowDividersResponse({}));
  }

  /**
   * Modifies whitelists.
   * 
   * @param request - UpdateABTestFixedFlowDividersRequest
   * @returns UpdateABTestFixedFlowDividersResponse
   */
  async updateABTestFixedFlowDividers(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: UpdateABTestFixedFlowDividersRequest): Promise<UpdateABTestFixedFlowDividersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestFixedFlowDividersWithOptions(appGroupIdentity, sceneId, groupId, experimentId, request, headers, runtime);
  }

  /**
   * Modifies a test group.
   * 
   * @param request - UpdateABTestGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABTestGroupResponse
   */
  async updateABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, request: UpdateABTestGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABTestGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateABTestGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateABTestGroupResponse>(await this.callApi(params, req, runtime), new UpdateABTestGroupResponse({}));
  }

  /**
   * Modifies a test group.
   * 
   * @param request - UpdateABTestGroupRequest
   * @returns UpdateABTestGroupResponse
   */
  async updateABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string, request: UpdateABTestGroupRequest): Promise<UpdateABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, request, headers, runtime);
  }

  /**
   * Modifies an A/B test scenario.
   * 
   * @param request - UpdateABTestSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABTestSceneResponse
   */
  async updateABTestSceneWithOptions(appGroupIdentity: string, sceneId: string, request: UpdateABTestSceneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateABTestSceneResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateABTestScene",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/scenes/${OpenApiUtil.getEncodeParam(sceneId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateABTestSceneResponse>(await this.callApi(params, req, runtime), new UpdateABTestSceneResponse({}));
  }

  /**
   * Modifies an A/B test scenario.
   * 
   * @param request - UpdateABTestSceneRequest
   * @returns UpdateABTestSceneResponse
   */
  async updateABTestScene(appGroupIdentity: string, sceneId: string, request: UpdateABTestSceneRequest): Promise<UpdateABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestSceneWithOptions(appGroupIdentity, sceneId, request, headers, runtime);
  }

  /**
   * @param request - UpdateFetchFieldsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFetchFieldsResponse
   */
  async updateFetchFieldsWithOptions(appGroupIdentity: string, appId: string, request: UpdateFetchFieldsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFetchFieldsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateFetchFields",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/fetch-fields`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFetchFieldsResponse>(await this.callApi(params, req, runtime), new UpdateFetchFieldsResponse({}));
  }

  /**
   * @param request - UpdateFetchFieldsRequest
   * @returns UpdateFetchFieldsResponse
   */
  async updateFetchFields(appGroupIdentity: string, appId: string, request: UpdateFetchFieldsRequest): Promise<UpdateFetchFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFetchFieldsWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Sets the default algorithm instance used by the specified application. The new algorithm instance automatically overwrites the most recently set default instance. If no instance is set, the default instance is canceled.
   * 
   * @param request - UpdateFunctionDefaultInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionDefaultInstanceResponse
   */
  async updateFunctionDefaultInstanceWithOptions(appGroupIdentity: string, functionName: string, request: UpdateFunctionDefaultInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionDefaultInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunctionDefaultInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/default-instance`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionDefaultInstanceResponse>(await this.callApi(params, req, runtime), new UpdateFunctionDefaultInstanceResponse({}));
  }

  /**
   * Sets the default algorithm instance used by the specified application. The new algorithm instance automatically overwrites the most recently set default instance. If no instance is set, the default instance is canceled.
   * 
   * @param request - UpdateFunctionDefaultInstanceRequest
   * @returns UpdateFunctionDefaultInstanceResponse
   */
  async updateFunctionDefaultInstance(appGroupIdentity: string, functionName: string, request: UpdateFunctionDefaultInstanceRequest): Promise<UpdateFunctionDefaultInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionDefaultInstanceWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Updates an algorithm instance.
   * 
   * @param request - UpdateFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionInstanceResponse
   */
  async updateFunctionInstanceWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, request: UpdateFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createParameters)) {
      body["createParameters"] = request.createParameters;
    }

    if (!Util.isUnset(request.cron)) {
      body["cron"] = request.cron;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.usageParameters)) {
      body["usageParameters"] = request.usageParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunctionInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances/${OpenApiUtil.getEncodeParam(instanceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionInstanceResponse>(await this.callApi(params, req, runtime), new UpdateFunctionInstanceResponse({}));
  }

  /**
   * Updates an algorithm instance.
   * 
   * @param request - UpdateFunctionInstanceRequest
   * @returns UpdateFunctionInstanceResponse
   */
  async updateFunctionInstance(appGroupIdentity: string, functionName: string, instanceName: string, request: UpdateFunctionInstanceRequest): Promise<UpdateFunctionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionInstanceWithOptions(appGroupIdentity, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Updates an algorithm resource.
   * 
   * @remarks
   * You can call this operation to update the information about resources by resource name. You can modify only the values of data and description.
   * 
   * @param request - UpdateFunctionResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionResourceResponse
   */
  async updateFunctionResourceWithOptions(appGroupIdentity: string, functionName: string, resourceName: string, request: UpdateFunctionResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunctionResource",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/resources/${OpenApiUtil.getEncodeParam(resourceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionResourceResponse>(await this.callApi(params, req, runtime), new UpdateFunctionResourceResponse({}));
  }

  /**
   * Updates an algorithm resource.
   * 
   * @remarks
   * You can call this operation to update the information about resources by resource name. You can modify only the values of data and description.
   * 
   * @param request - UpdateFunctionResourceRequest
   * @returns UpdateFunctionResourceResponse
   */
  async updateFunctionResource(appGroupIdentity: string, functionName: string, resourceName: string, request: UpdateFunctionResourceRequest): Promise<UpdateFunctionResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionResourceWithOptions(appGroupIdentity, functionName, resourceName, request, headers, runtime);
  }

  /**
   * Modifies a query policy.
   * 
   * @param request - UpdateSearchStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSearchStrategyResponse
   */
  async updateSearchStrategyWithOptions(appGroupIdentity: string, appId: string, strategyName: string, request: UpdateSearchStrategyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSearchStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSearchStrategy",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/search-strategies/${OpenApiUtil.getEncodeParam(strategyName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSearchStrategyResponse>(await this.callApi(params, req, runtime), new UpdateSearchStrategyResponse({}));
  }

  /**
   * Modifies a query policy.
   * 
   * @param request - UpdateSearchStrategyRequest
   * @returns UpdateSearchStrategyResponse
   */
  async updateSearchStrategy(appGroupIdentity: string, appId: string, strategyName: string, request: UpdateSearchStrategyRequest): Promise<UpdateSearchStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSearchStrategyWithOptions(appGroupIdentity, appId, strategyName, request, headers, runtime);
  }

  /**
   * Modifies the description of a sort script.
   * 
   * @remarks
   * You can call this operation to modify the description of a sort script.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSortScriptResponse
   */
  async updateSortScriptWithOptions(appGroupIdentity: string, appVersionId: string, scriptName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UpdateSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appVersionId)}/sort-scripts/${OpenApiUtil.getEncodeParam(scriptName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSortScriptResponse>(await this.callApi(params, req, runtime), new UpdateSortScriptResponse({}));
  }

  /**
   * Modifies the description of a sort script.
   * 
   * @remarks
   * You can call this operation to modify the description of a sort script.
   * @returns UpdateSortScriptResponse
   */
  async updateSortScript(appGroupIdentity: string, appVersionId: string, scriptName: string): Promise<UpdateSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSortScriptWithOptions(appGroupIdentity, appVersionId, scriptName, headers, runtime);
  }

  /**
   * Updates summaries. A dry run is supported.
   * 
   * @param request - UpdateSummariesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSummariesResponse
   */
  async updateSummariesWithOptions(appGroupIdentity: string, appId: string, request: UpdateSummariesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSummariesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSummaries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/apps/${OpenApiUtil.getEncodeParam(appId)}/summaries`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSummariesResponse>(await this.callApi(params, req, runtime), new UpdateSummariesResponse({}));
  }

  /**
   * Updates summaries. A dry run is supported.
   * 
   * @param request - UpdateSummariesRequest
   * @returns UpdateSummariesResponse
   */
  async updateSummaries(appGroupIdentity: string, appId: string, request: UpdateSummariesRequest): Promise<UpdateSummariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSummariesWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Verifies data sources.
   * 
   * @param request - ValidateDataSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateDataSourcesResponse
   */
  async validateDataSourcesWithOptions(request: ValidateDataSourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateDataSourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ValidateDataSources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/assist/data-sources/validations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ValidateDataSourcesResponse>(await this.callApi(params, req, runtime), new ValidateDataSourcesResponse({}));
  }

  /**
   * Verifies data sources.
   * 
   * @param request - ValidateDataSourcesRequest
   * @returns ValidateDataSourcesResponse
   */
  async validateDataSources(request: ValidateDataSourcesRequest): Promise<ValidateDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateDataSourcesWithOptions(request, headers, runtime);
  }

}
