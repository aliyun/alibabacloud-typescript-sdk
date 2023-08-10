// This file is auto-generated, don't edit it
/**
 *
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
  chargingWay?: string;
  description?: string;
  domain?: string;
  name?: string;
  quota?: Quota;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      chargingWay: 'chargingWay',
      description: 'description',
      domain: 'domain',
      name: 'name',
      quota: 'quota',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      chargingWay: 'string',
      description: 'string',
      domain: 'string',
      name: 'string',
      quota: Quota,
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: BindESUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: BindEsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CompileSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: ABTestExperiment;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: ABTestGroup;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: ABTestScene;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: App;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: App,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  requestId?: string;
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

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: AppGroup;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AppGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBody extends $tea.Model {
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateFirstRankRequest extends $tea.Model {
  body?: FirstRank;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  createParameters?: CreateFunctionInstanceRequestCreateParameters[];
  cron?: string;
  description?: string;
  functionType?: string;
  instanceName?: string;
  modelType?: string;
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
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFunctionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateFunctionTaskResponseBody extends $tea.Model {
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFunctionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  analyzerType?: string;
  name?: string;
  type?: string;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInterventionDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: any;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSearchStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: SecondRank;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateSortScriptResponseBody extends $tea.Model {
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

export class CreateSortScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  business?: string;
  businessAppGroupId?: string;
  businessType?: string;
  name?: string;
  type?: string;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFunctionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteFunctionTaskResponseBody extends $tea.Model {
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFunctionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSortScriptFileResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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

export class DescribeAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDataCollctionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInterventionDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeRegionResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeRegionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeRegionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSlowQueryStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableSlowQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableSlowQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: Schema;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateMergedTableResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  category?: string;
  domain?: string;
  functionType?: string;
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
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
  result?: GetFunctionCurrentVersionResponseBodyResult;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFunctionCurrentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  code?: string;
  functionName?: string;
  httpCode?: number;
  instanceName?: string;
  latency?: number;
  message?: string;
  requestId?: string;
  result?: GetFunctionDefaultInstanceResponseBodyResult;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFunctionDefaultInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
  result?: GetFunctionInstanceResponseBodyResult;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFunctionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetFunctionTaskResponseBody extends $tea.Model {
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
  result?: GetFunctionTaskResponseBodyResult;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFunctionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
  result?: GetFunctionVersionResponseBodyResult;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFunctionVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetModelReportResponseBody extends $tea.Model {
  requestId?: string;
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

export class GetModelReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetModelReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModelReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptFileNamesResponseBody extends $tea.Model {
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetScriptFileNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSearchStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSortScriptFileResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListABTestExperimentsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListABTestFixedFlowDividersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListABTestGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListABTestScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  instanceId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  sortBy?: number;
  tags?: ListAppGroupsRequestTags[];
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
  instanceId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  sortBy?: number;
  tagsShrink?: string;
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
  requestId?: string;
  result?: ListAppGroupsResponseBodyResult[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListAppsRequest extends $tea.Model {
  group?: boolean;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'boolean',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCollectionsRequest extends $tea.Model {
  pageNumber?: number;
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
  requestId?: string;
  result?: ListDataCollectionsResponseBodyResult[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataCollectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  params?: string;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataSourceTableFieldsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataSourceTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFirstRanksResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  functionType?: string;
  modelType?: string;
  output?: string;
  pageNumber?: number;
  pageSize?: number;
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
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
  result?: ListFunctionInstancesResponseBodyResult[];
  status?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFunctionInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListFunctionTasksRequest extends $tea.Model {
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
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
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
  result?: ListFunctionTasksResponseBodyResult[];
  status?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFunctionTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  pageNumber?: number;
  pageSize?: number;
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
  requestId?: string;
  result?: ListInterventionDictionariesResponseBodyResult[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInterventionDictionariesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  pageNumber?: number;
  pageSize?: number;
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
  requestId?: string;
  result?: ListInterventionDictionaryEntriesResponseBodyResult[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInterventionDictionaryEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInterventionDictionaryNerResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInterventionDictionaryRelatedEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListModelsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
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

export class ListModelsResponseBody extends $tea.Model {
  requestId?: string;
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

export class ListModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProceedingsRequest extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProceedingsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQueryProcessorAnalyzerResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQueryProcessorNersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQueryProcessorsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  pageNumber?: number;
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
  requestId?: string;
  result?: ListQuotaReviewTasksResponseBodyResult[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQuotaReviewTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  pageNumber?: number;
  pageSize?: number;
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
  requestId?: string;
  result?: { [key: string]: any }[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListScheduledTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSearchStrategiesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
  result?: ListSecondRanksResponseBodyResult[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecondRanksResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSlowQueryCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSlowQueryQueriesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSortExpressionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSortScriptsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  columns?: string;
  distinct?: boolean;
  pageNumber?: number;
  pageSize?: number;
  query?: string;
  sortBy?: string;
  startTime?: number;
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
  requestId?: string;
  result?: { [key: string]: any }[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStatisticLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  columns?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  query?: string;
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
  requestId?: string;
  result?: { [key: string]: any }[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStatisticReportResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
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
  nextToken?: string;
  resourceIdShrink?: string;
  resourceType?: string;
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
  nextToken?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  pageNumber?: number;
  pageSize?: number;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserAnalyzerEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  pageNumber?: number;
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
  requestId?: string;
  result?: ListUserAnalyzersResponseBodyResult[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserAnalyzersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  currentVersion?: string;
  description?: string;
  domain?: string;
  resourceGroupId?: string;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: Quota;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAppGroupQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: FirstRank;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: any;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: SecondRank;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class PreviewModelRequest extends $tea.Model {
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

export class PreviewModelResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any }[];
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

export class PreviewModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PreviewModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PreviewModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushInterventionDictionaryEntriesRequest extends $tea.Model {
  body?: { [key: string]: any }[];
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PushInterventionDictionaryEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  entries?: PushUserAnalyzerEntriesRequestEntries[];
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PushUserAnalyzerEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class RankPreviewQueryResponseBody extends $tea.Model {
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

export class RankPreviewQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RankPreviewQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RankPreviewQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSortScriptResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAppResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveDataCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveFirstRankResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveInterventionDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveQueryProcessorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveSearchStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveSecondRankResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: PrepayOrderInfo;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ReplaceAppGroupCommodityCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  content?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveSortScriptFileResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StartSlowQueryAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  resourceId?: string[];
  resourceType?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindESUserAnalyzerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindEsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  all?: boolean;
  resourceId?: string[];
  resourceType?: string;
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
  all?: boolean;
  resourceIdShrink?: string;
  resourceType?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: ABTestExperiment;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateABTestExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateABTestFixedFlowDividersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: ABTestGroup;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateABTestGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: ABTestScene;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateABTestSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: string[];
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFetchFieldsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFunctionDefaultInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  createParameters?: UpdateFunctionInstanceRequestCreateParameters[];
  cron?: string;
  description?: string;
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
  code?: string;
  httpCode?: number;
  latency?: number;
  message?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFunctionInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateSearchStrategyRequest extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSearchStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSortScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  body?: UpdateSummariesRequestBody[];
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSummariesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  created?: number;
  id?: string;
  name?: string;
  online?: boolean;
  params?: { [key: string]: any };
  traffic?: number;
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
  created?: number;
  id?: string;
  name?: string;
  status?: number;
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
  created?: number;
  id?: string;
  name?: string;
  status?: number;
  updated?: number;
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

export class CreateAppGroupResponseBodyResultQuota extends $tea.Model {
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

export class CreateAppGroupResponseBodyResult extends $tea.Model {
  chargeType?: string;
  chargingWay?: number;
  commodityCode?: string;
  created?: number;
  currentVersion?: string;
  description?: string;
  domain?: string;
  expireOn?: string;
  firstRankAlgoDeploymentId?: number;
  hasPendingQuotaReviewTask?: number;
  id?: string;
  instanceId?: string;
  lockMode?: string;
  lockedByExpiration?: number;
  name?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  processingOrderId?: string;
  produced?: number;
  projectId?: string;
  quota?: CreateAppGroupResponseBodyResultQuota;
  secondRankAlgoDeploymentId?: number;
  status?: string;
  switchedTime?: number;
  type?: string;
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
      quota: CreateAppGroupResponseBodyResultQuota,
      secondRankAlgoDeploymentId: 'number',
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

export class CreateFirstRankResponseBodyResultMeta extends $tea.Model {
  arg?: string;
  attribute?: string;
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
  active?: boolean;
  meta?: CreateFirstRankResponseBodyResultMeta[];
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
  name?: string;
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
  name?: string;
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

export class CreateInterventionDictionaryResponseBodyResult extends $tea.Model {
  analyzer?: string;
  created?: string;
  name?: string;
  type?: string;
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
  active?: boolean;
  created?: number;
  domain?: string;
  indexes?: string[];
  name?: string;
  processors?: { [key: string]: any }[];
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

export class DescribeABTestExperimentResponseBodyResultParams extends $tea.Model {
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
  created?: number;
  id?: string;
  name?: string;
  online?: boolean;
  params?: DescribeABTestExperimentResponseBodyResultParams;
  traffic?: number;
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
  created?: number;
  id?: string;
  name?: string;
  status?: number;
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
  created?: number;
  id?: string;
  name?: string;
  status?: number;
  updated?: number;
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

export class DescribeAppResponseBodyResultDomainFunctions extends $tea.Model {
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

export class DescribeAppResponseBodyResultDomain extends $tea.Model {
  category?: string;
  functions?: DescribeAppResponseBodyResultDomainFunctions;
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

export class DescribeAppResponseBodyResultQuota extends $tea.Model {
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

export class DescribeAppResponseBodyResult extends $tea.Model {
  algoDeploymentId?: number;
  autoSwitch?: boolean;
  clusterName?: string;
  created?: number;
  description?: string;
  domain?: DescribeAppResponseBodyResultDomain;
  fetchFields?: string[];
  id?: string;
  progressPercent?: number;
  quota?: DescribeAppResponseBodyResultQuota;
  schema?: { [key: string]: any };
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      algoDeploymentId: 'algoDeploymentId',
      autoSwitch: 'autoSwitch',
      clusterName: 'clusterName',
      created: 'created',
      description: 'description',
      domain: 'domain',
      fetchFields: 'fetchFields',
      id: 'id',
      progressPercent: 'progressPercent',
      quota: 'quota',
      schema: 'schema',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoDeploymentId: 'number',
      autoSwitch: 'boolean',
      clusterName: 'string',
      created: 'number',
      description: 'string',
      domain: DescribeAppResponseBodyResultDomain,
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      progressPercent: 'number',
      quota: DescribeAppResponseBodyResultQuota,
      schema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponseBodyResultQuota extends $tea.Model {
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

export class DescribeAppGroupResponseBodyResultTags extends $tea.Model {
  key?: string;
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
  chargeType?: string;
  chargingWay?: number;
  commodityCode?: string;
  created?: number;
  currentVersion?: string;
  description?: string;
  domain?: string;
  expireOn?: string;
  firstRankAlgoDeploymentId?: number;
  hasPendingQuotaReviewTask?: number;
  id?: string;
  instanceId?: string;
  lockMode?: string;
  lockedByExpiration?: number;
  name?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  processingOrderId?: string;
  produced?: number;
  projectId?: string;
  quota?: DescribeAppGroupResponseBodyResultQuota;
  resourceGroupId?: string;
  secondRankAlgoDeploymentId?: number;
  status?: string;
  switchedTime?: number;
  tags?: DescribeAppGroupResponseBodyResultTags[];
  type?: string;
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

export class DescribeDataCollctionResponseBodyResult extends $tea.Model {
  created?: number;
  dataCollectionType?: string;
  id?: string;
  industryName?: string;
  name?: string;
  status?: number;
  sundialId?: string;
  type?: string;
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
  arg?: string;
  attribute?: string;
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
  active?: boolean;
  description?: string;
  meta?: DescribeFirstRankResponseBodyResultMeta[];
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
  analyzer?: string;
  created?: string;
  name?: string;
  type?: string;
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
  active?: boolean;
  created?: number;
  domain?: string;
  indexes?: string[];
  name?: string;
  processors?: { [key: string]: any }[];
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

export class DescribeRegionResponseBodyResult extends $tea.Model {
  config?: { [key: string]: any };
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyResult extends $tea.Model {
  consoleUrl?: string;
  endpoint?: string;
  localName?: string;
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
  active?: boolean;
  created?: number;
  description?: string;
  id?: string;
  isDefault?: string;
  isSys?: string;
  meta?: string;
  name?: string;
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
  appGroupId?: string;
  region?: string;
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
  fromTable?: { [key: string]: any };
  mergeTable?: { [key: string]: any };
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
  name?: string;
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
  condition?: string;
  dependency?: string;
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
  name?: string;
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
  createParameters?: GetFunctionCurrentVersionResponseBodyResultVersionConfigCreateParameters[];
  depends?: GetFunctionCurrentVersionResponseBodyResultVersionConfigDepends[];
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
  functionName?: string;
  functionType?: string;
  modelType?: string;
  versionConfig?: GetFunctionCurrentVersionResponseBodyResultVersionConfig;
  versionId?: number;
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
  category?: string;
  domain?: string;
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
  name?: string;
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
  dagStatus?: string;
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
  name?: string;
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
  belongs?: GetFunctionInstanceResponseBodyResultBelongs;
  createParameters?: GetFunctionInstanceResponseBodyResultCreateParameters[];
  createTime?: number;
  cron?: string;
  description?: string;
  extendInfo?: string;
  functionName?: string;
  functionType?: string;
  instanceName?: string;
  modelType?: string;
  source?: string;
  status?: string;
  task?: GetFunctionInstanceResponseBodyResultTask;
  usageParameters?: GetFunctionInstanceResponseBodyResultUsageParameters[];
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

export class GetFunctionTaskResponseBodyResult extends $tea.Model {
  endTime?: number;
  extendInfo?: string;
  functionName?: string;
  generation?: string;
  progress?: number;
  runId?: string;
  startTime?: number;
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
  name?: string;
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
  condition?: string;
  dependency?: string;
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
  name?: string;
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
  createParameters?: GetFunctionVersionResponseBodyResultVersionConfigCreateParameters[];
  depends?: GetFunctionVersionResponseBodyResultVersionConfigDepends[];
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
  functionName?: string;
  functionType?: string;
  modelType?: string;
  versionConfig?: GetFunctionVersionResponseBodyResultVersionConfig;
  versionId?: number;
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
  createTime?: string;
  fileName?: string;
  modifyTime?: string;
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
  createTime?: string;
  modifyTime?: string;
  scope?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      modifyTime: 'modifyTime',
      scope: 'scope',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      scope: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSortScriptFileResponseBodyResult extends $tea.Model {
  content?: string;
  createTime?: string;
  modifyTime?: string;
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
  created?: number;
  id?: string;
  name?: string;
  online?: boolean;
  params?: { [key: string]: any };
  traffic?: number;
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
  created?: number;
  id?: string;
  name?: string;
  status?: number;
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
  created?: number;
  id?: string;
  name?: string;
  status?: number;
  updated?: number;
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
  key?: string;
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

export class ListAppGroupsResponseBodyResultTags extends $tea.Model {
  key?: string;
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
  chargeType?: string;
  chargingWay?: number;
  commodityCode?: string;
  created?: number;
  currentVersion?: string;
  description?: string;
  domain?: string;
  expireOn?: string;
  firstRankAlgoDeploymentId?: number;
  hasPendingQuotaReviewTask?: number;
  id?: string;
  instanceId?: string;
  lockMode?: string;
  lockedByExpiration?: number;
  name?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  processingOrderId?: string;
  produced?: number;
  projectId?: string;
  quota?: ListAppGroupsResponseBodyResultQuota;
  secondRankAlgoDeploymentId?: number;
  status?: string;
  switchedTime?: number;
  tags?: ListAppGroupsResponseBodyResultTags[];
  type?: string;
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
      quota: ListAppGroupsResponseBodyResultQuota,
      secondRankAlgoDeploymentId: 'number',
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
  created?: number;
  dataCollectionType?: string;
  id?: string;
  industryName?: string;
  name?: string;
  status?: number;
  sundialId?: string;
  type?: string;
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
  arg?: string;
  attribute?: string;
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
  active?: boolean;
  created?: number;
  description?: string;
  meta?: ListFirstRanksResponseBodyResultMeta[];
  name?: string;
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
  category?: string;
  domain?: string;
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
  name?: string;
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
  name?: string;
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
  belongs?: ListFunctionInstancesResponseBodyResultBelongs;
  createParameters?: ListFunctionInstancesResponseBodyResultCreateParameters[];
  createTime?: number;
  cron?: string;
  description?: string;
  extendInfo?: string;
  functionName?: string;
  functionType?: string;
  instanceName?: string;
  modelType?: string;
  source?: string;
  status?: string;
  usageParameters?: ListFunctionInstancesResponseBodyResultUsageParameters[];
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

export class ListFunctionTasksResponseBodyResult extends $tea.Model {
  endTime?: number;
  extendInfo?: string;
  functionName?: string;
  generation?: string;
  progress?: number;
  runId?: string;
  startTime?: number;
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
  analyzer?: string;
  created?: number;
  id?: number;
  name?: string;
  type?: string;
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
  order?: number;
  tag?: string;
  tagLabel?: string;
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
  cmd?: string;
  created?: number;
  relevance?: { [key: string]: any };
  status?: string;
  tokens?: ListInterventionDictionaryEntriesResponseBodyResultTokens[];
  updated?: number;
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
  order?: number;
  tag?: string;
  tagLabel?: string;
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
  label?: string;
  order?: number;
  priority?: string;
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
  active?: boolean;
  created?: number;
  domain?: string;
  indexes?: string[];
  name?: string;
  processors?: { [key: string]: any }[];
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
  appGroupId?: number;
  appGroupName?: string;
  appGroupType?: string;
  approved?: boolean;
  available?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  memo?: string;
  newComputeResource?: number;
  newSocSize?: number;
  newSpec?: string;
  oldComputeResource?: number;
  oldDocSize?: number;
  oldSpec?: string;
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
  active?: boolean;
  created?: number;
  description?: string;
  id?: string;
  isDefault?: string;
  isSys?: string;
  meta?: string;
  name?: string;
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
  analyzeStatus?: string;
  end?: number;
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
  appQuery?: string;
  end?: number;
  index?: number;
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
  active?: boolean;
  created?: number;
  description?: string;
  name?: string;
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
  createTime?: string;
  modifyTime?: string;
  scope?: string;
  scriptName?: string;
  status?: string;
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
  key?: string;
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
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
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
  available?: boolean;
  created?: number;
  entriesCount?: number;
  entriesLimit?: number;
  id?: string;
  type?: string;
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
  available?: boolean;
  business?: string;
  created?: number;
  dicts?: ListUserAnalyzersResponseBodyResultDicts[];
  id?: string;
  name?: string;
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

export class ModifyAppGroupResponseBodyResult extends $tea.Model {
  chargeType?: string;
  chargingWay?: number;
  commodityCode?: string;
  created?: number;
  currentVersion?: string;
  description?: string;
  domain?: string;
  expireOn?: string;
  firstRankAlgoDeploymentId?: number;
  hasPendingQuotaReviewTask?: number;
  id?: string;
  instanceId?: string;
  lockMode?: string;
  lockedByExpiration?: number;
  name?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  processingOrderId?: string;
  produced?: number;
  projectId?: string;
  quota?: ModifyAppGroupResponseBodyResultQuota;
  secondRankAlgoDeploymentId?: number;
  status?: string;
  switchedTime?: number;
  type?: string;
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
      quota: ModifyAppGroupResponseBodyResultQuota,
      secondRankAlgoDeploymentId: 'number',
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

export class ModifyAppGroupQuotaResponseBodyResult extends $tea.Model {
  chargeType?: string;
  chargingWay?: number;
  commodityCode?: string;
  created?: number;
  currentVersion?: string;
  description?: string;
  expireOn?: string;
  firstRankAlgoDeploymentId?: number;
  hasPendingQuotaReviewTask?: number;
  id?: string;
  instanceId?: string;
  lockMode?: string;
  lockedByExpiration?: number;
  name?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  processingOrderId?: string;
  produced?: number;
  projectId?: string;
  quota?: ModifyAppGroupQuotaResponseBodyResultQuota;
  secondRankAlgoDeploymentId?: number;
  status?: string;
  switchedTime?: number;
  type?: string;
  updated?: number;
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
      quota: ModifyAppGroupQuotaResponseBodyResultQuota,
      secondRankAlgoDeploymentId: 'number',
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
  arg?: string;
  attribute?: string;
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
  active?: boolean;
  description?: string;
  meta?: ModifyFirstRankResponseBodyResultMeta[];
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
  active?: boolean;
  created?: number;
  domain?: string;
  indexes?: string[];
  name?: string;
  processors?: { [key: string]: any }[];
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
  active?: boolean;
  created?: number;
  description?: string;
  id?: string;
  isDefault?: string;
  isSys?: string;
  meta?: string;
  name?: string;
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
  cmd?: string;
  key?: string;
  splitEnabled?: boolean;
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
  arg?: string;
  attribute?: string;
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
  active?: boolean;
  description?: string;
  meta?: RemoveFirstRankResponseBodyResultMeta[];
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
  analyzer?: string;
  created?: string;
  name?: string;
  type?: string;
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

export class ReplaceAppGroupCommodityCodeResponseBodyResult extends $tea.Model {
  chargeType?: string;
  chargingWay?: number;
  commodityCode?: string;
  created?: number;
  currentVersion?: string;
  description?: string;
  expireOn?: string;
  firstRankAlgoDeploymentId?: number;
  hasPendingQuotaReviewTask?: number;
  id?: string;
  instanceId?: string;
  lockMode?: string;
  lockedByExpiration?: number;
  name?: string;
  pendingSecondRankAlgoDeploymentId?: number;
  processingOrderId?: string;
  produced?: number;
  projectId?: string;
  quota?: ReplaceAppGroupCommodityCodeResponseBodyResultQuota;
  secondRankAlgoDeploymentId?: number;
  status?: string;
  switchedTime?: number;
  type?: string;
  updated?: number;
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
  key?: string;
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
  created?: number;
  id?: string;
  name?: string;
  online?: boolean;
  params?: { [key: string]: any };
  traffic?: number;
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
  created?: number;
  id?: string;
  name?: string;
  status?: number;
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
  created?: number;
  id?: string;
  name?: string;
  online?: boolean;
  params?: { [key: string]: any };
  traffic?: number;
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
  name?: string;
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
  name?: string;
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

export class UpdateSummariesRequestBody extends $tea.Model {
  element?: string;
  ellipsis?: string;
  field?: string;
  len?: number;
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
  parameters?: { [key: string]: any };
  tableName?: string;
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
  code?: string;
  dataSource?: ValidateDataSourcesResponseBodyResultDataSource;
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

  async bindESUserAnalyzer(appGroupIdentity: string, esInstanceId: string, request: BindESUserAnalyzerRequest): Promise<BindESUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindESUserAnalyzerWithOptions(appGroupIdentity, esInstanceId, request, headers, runtime);
  }

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

  async bindEsInstance(appGroupIdentity: string, request: BindEsInstanceRequest): Promise<BindEsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindEsInstanceWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async compileSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<CompileSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.compileSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

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

  async createABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, request: CreateABTestExperimentRequest): Promise<CreateABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, request, headers, runtime);
  }

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

  async createABTestGroup(appGroupIdentity: string, sceneId: string, request: CreateABTestGroupRequest): Promise<CreateABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestGroupWithOptions(appGroupIdentity, sceneId, request, headers, runtime);
  }

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

  async createABTestScene(appGroupIdentity: string, request: CreateABTestSceneRequest): Promise<CreateABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestSceneWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
    * *   When you create a standard application, a new version of the application is created if the specified application name already exists.
    * *   When you create a version of an existing application, you must set the autoSwitch and realtimeShared parameters.
    * *   When you create a version of an existing application, the value of the quota parameter is the same as that of the quota parameter in the previous version of the application.
    * *   When you create a version of an existing application, the modification of the quota parameter does not take effect.
    *
    * @param request CreateAppRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAppResponse
   */
  async createAppWithOptions(appGroupIdentity: string, request: CreateAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
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
    * *   When you create a standard application, a new version of the application is created if the specified application name already exists.
    * *   When you create a version of an existing application, you must set the autoSwitch and realtimeShared parameters.
    * *   When you create a version of an existing application, the value of the quota parameter is the same as that of the quota parameter in the previous version of the application.
    * *   When you create a version of an existing application, the modification of the quota parameter does not take effect.
    *
    * @param request CreateAppRequest
    * @return CreateAppResponse
   */
  async createApp(appGroupIdentity: string, request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppWithOptions(appGroupIdentity, request, headers, runtime);
  }

  async createAppGroupWithOptions(request: CreateAppGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
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

  async createAppGroup(request: CreateAppGroupRequest): Promise<CreateAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppGroupWithOptions(request, headers, runtime);
  }

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

  async createFirstRank(appGroupIdentity: string, appId: string, request: CreateFirstRankRequest): Promise<CreateFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFirstRankWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
    * You can call the [GetFunctionCurrentVersion](~~421377~~) operation to query the latest version of the current feature. The response of the operation includes the createParameters parameter that is used to create an algorithm instance, the usageParameters parameter, and the requirements for setting these parameters.
    *
    * @param request CreateFunctionInstanceRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateFunctionInstanceResponse
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
    * You can call the [GetFunctionCurrentVersion](~~421377~~) operation to query the latest version of the current feature. The response of the operation includes the createParameters parameter that is used to create an algorithm instance, the usageParameters parameter, and the requirements for setting these parameters.
    *
    * @param request CreateFunctionInstanceRequest
    * @return CreateFunctionInstanceResponse
   */
  async createFunctionInstance(appGroupIdentity: string, functionName: string, request: CreateFunctionInstanceRequest): Promise<CreateFunctionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionInstanceWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

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

  async createFunctionTask(appGroupIdentity: string, functionName: string, instanceName: string): Promise<CreateFunctionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionTaskWithOptions(appGroupIdentity, functionName, instanceName, headers, runtime);
  }

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

  async createInterventionDictionary(request: CreateInterventionDictionaryRequest): Promise<CreateInterventionDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInterventionDictionaryWithOptions(request, headers, runtime);
  }

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

  async createQueryProcessor(appGroupIdentity: string, appId: string, request: CreateQueryProcessorRequest): Promise<CreateQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQueryProcessorWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
    * ****
    *
    * @param request CreateScheduledTaskRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateScheduledTaskResponse
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
    * ****
    *
    * @param request CreateScheduledTaskRequest
    * @return CreateScheduledTaskResponse
   */
  async createScheduledTask(appGroupIdentity: string, request: CreateScheduledTaskRequest): Promise<CreateScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduledTaskWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async createSearchStrategy(appGroupIdentity: string, appId: string, request: CreateSearchStrategyRequest): Promise<CreateSearchStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSearchStrategyWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

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

  async createSecondRank(appGroupIdentity: string, appId: string, request: CreateSecondRankRequest): Promise<CreateSecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSecondRankWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  async createSortScriptWithOptions(appGroupIdentity: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSortScriptResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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

  async createSortScript(appGroupIdentity: string, appVersionId: string): Promise<CreateSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSortScriptWithOptions(appGroupIdentity, appVersionId, headers, runtime);
  }

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

  async createUserAnalyzer(request: CreateUserAnalyzerRequest): Promise<CreateUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserAnalyzerWithOptions(request, headers, runtime);
  }

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

  async deleteABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<DeleteABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

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

  async deleteABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string): Promise<DeleteABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

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

  async deleteABTestScene(appGroupIdentity: string, sceneId: string): Promise<DeleteABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestSceneWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

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

  async deleteFunctionInstance(appGroupIdentity: string, functionName: string, instanceName: string): Promise<DeleteFunctionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionInstanceWithOptions(appGroupIdentity, functionName, instanceName, headers, runtime);
  }

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

  async deleteFunctionTask(appGroupIdentity: string, functionName: string, instanceName: string, generation: string): Promise<DeleteFunctionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionTaskWithOptions(appGroupIdentity, functionName, instanceName, generation, headers, runtime);
  }

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

  async deleteSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<DeleteSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

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

  async deleteSortScriptFile(appGroupIdentity: string, appVersionId: string, scriptName: string, fileName: string): Promise<DeleteSortScriptFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSortScriptFileWithOptions(appGroupIdentity, appVersionId, scriptName, fileName, headers, runtime);
  }

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

  async describeABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<DescribeABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

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

  async describeABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string): Promise<DescribeABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

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

  async describeABTestScene(appGroupIdentity: string, sceneId: string): Promise<DescribeABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestSceneWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

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

  async describeApp(appGroupIdentity: string, appId: string): Promise<DescribeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppWithOptions(appGroupIdentity, appId, headers, runtime);
  }

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

  async describeAppGroup(appGroupIdentity: string): Promise<DescribeAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async describeAppStatistics(appGroupIdentity: string, appId: string): Promise<DescribeAppStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppStatisticsWithOptions(appGroupIdentity, appId, headers, runtime);
  }

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

  async describeApps(appGroupIdentity: string): Promise<DescribeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppsWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async describeDataCollction(appGroupIdentity: string, dataCollectionIdentity: string): Promise<DescribeDataCollctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDataCollctionWithOptions(appGroupIdentity, dataCollectionIdentity, headers, runtime);
  }

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

  async describeFirstRank(appGroupIdentity: string, appId: string, name: string): Promise<DescribeFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFirstRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

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

  async describeInterventionDictionary(name: string): Promise<DescribeInterventionDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInterventionDictionaryWithOptions(name, headers, runtime);
  }

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

  async describeQueryProcessor(appGroupIdentity: string, appId: string, name: string): Promise<DescribeQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQueryProcessorWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  async describeRegionWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegion",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/region`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionResponse>(await this.callApi(params, req, runtime), new DescribeRegionResponse({}));
  }

  async describeRegion(): Promise<DescribeRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionWithOptions(headers, runtime);
  }

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

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

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

  async describeScheduledTask(appGroupIdentity: string, taskId: string): Promise<DescribeScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeScheduledTaskWithOptions(appGroupIdentity, taskId, headers, runtime);
  }

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

  async describeSecondRank(appGroupIdentity: string, appId: string, name: string): Promise<DescribeSecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSecondRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

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

  async describeSlowQueryStatus(appGroupIdentity: string): Promise<DescribeSlowQueryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSlowQueryStatusWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async describeUserAnalyzer(name: string, request: DescribeUserAnalyzerRequest): Promise<DescribeUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserAnalyzerWithOptions(name, request, headers, runtime);
  }

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

  async disableSlowQuery(appGroupIdentity: string): Promise<DisableSlowQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSlowQueryWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async enableSlowQuery(appGroupIdentity: string): Promise<EnableSlowQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSlowQueryWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async generateMergedTable(request: GenerateMergedTableRequest): Promise<GenerateMergedTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateMergedTableWithOptions(request, headers, runtime);
  }

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

  async getDomain(domainName: string, request: GetDomainRequest): Promise<GetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(domainName, request, headers, runtime);
  }

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

  async getFunctionCurrentVersion(functionName: string, request: GetFunctionCurrentVersionRequest): Promise<GetFunctionCurrentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionCurrentVersionWithOptions(functionName, request, headers, runtime);
  }

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

  async getFunctionDefaultInstance(appGroupIdentity: string, functionName: string): Promise<GetFunctionDefaultInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionDefaultInstanceWithOptions(appGroupIdentity, functionName, headers, runtime);
  }

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

  async getFunctionInstance(appGroupIdentity: string, functionName: string, instanceName: string, request: GetFunctionInstanceRequest): Promise<GetFunctionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionInstanceWithOptions(appGroupIdentity, functionName, instanceName, request, headers, runtime);
  }

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

  async getFunctionTask(appGroupIdentity: string, functionName: string, instanceName: string, generation: string): Promise<GetFunctionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionTaskWithOptions(appGroupIdentity, functionName, instanceName, generation, headers, runtime);
  }

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

  async getFunctionVersion(functionName: string, versionId: string): Promise<GetFunctionVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionVersionWithOptions(functionName, versionId, headers, runtime);
  }

  async getModelReportWithOptions(appGroupIdentity: string, modelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModelReportResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetModelReport",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/algorithm/models/${OpenApiUtil.getEncodeParam(modelName)}/report`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModelReportResponse>(await this.callApi(params, req, runtime), new GetModelReportResponse({}));
  }

  async getModelReport(appGroupIdentity: string, modelName: string): Promise<GetModelReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelReportWithOptions(appGroupIdentity, modelName, headers, runtime);
  }

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

  async getScriptFileNames(appGroupIdentity: string, appVersionId: string, scriptName: string): Promise<GetScriptFileNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScriptFileNamesWithOptions(appGroupIdentity, appVersionId, scriptName, headers, runtime);
  }

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

  async getSearchStrategy(appGroupIdentity: string, appId: string, strategyName: string): Promise<GetSearchStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSearchStrategyWithOptions(appGroupIdentity, appId, strategyName, headers, runtime);
  }

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

  async getSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<GetSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

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

  async getSortScriptFile(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string): Promise<GetSortScriptFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSortScriptFileWithOptions(appGroupIdentity, scriptName, appVersionId, fileName, headers, runtime);
  }

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

  async listABTestExperiments(appGroupIdentity: string, sceneId: string, groupId: string): Promise<ListABTestExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestExperimentsWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

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

  async listABTestFixedFlowDividers(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<ListABTestFixedFlowDividersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestFixedFlowDividersWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

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

  async listABTestGroups(appGroupIdentity: string, sceneId: string): Promise<ListABTestGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestGroupsWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

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

  async listABTestScenes(appGroupIdentity: string): Promise<ListABTestScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestScenesWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
    * *   This operation allows you to query applications by application name, instance ID, and application type.
    * *   This operation can sort the applications based on their creation time.
    * *   This operation supports the parameters for paging.
    *
    * @param tmpReq ListAppGroupsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAppGroupsResponse
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
    * *   This operation allows you to query applications by application name, instance ID, and application type.
    * *   This operation can sort the applications based on their creation time.
    * *   This operation supports the parameters for paging.
    *
    * @param request ListAppGroupsRequest
    * @return ListAppGroupsResponse
   */
  async listAppGroups(request: ListAppGroupsRequest): Promise<ListAppGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppGroupsWithOptions(request, headers, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.group)) {
      query["group"] = request.group;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApps",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/apps`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppsWithOptions(request, headers, runtime);
  }

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

  async listDataCollections(appGroupIdentity: string, request: ListDataCollectionsRequest): Promise<ListDataCollectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCollectionsWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async listDataSourceTableFields(dataSourceType: string, request: ListDataSourceTableFieldsRequest): Promise<ListDataSourceTableFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceTableFieldsWithOptions(dataSourceType, request, headers, runtime);
  }

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

  async listDataSourceTables(dataSourceType: string, request: ListDataSourceTablesRequest): Promise<ListDataSourceTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceTablesWithOptions(dataSourceType, request, headers, runtime);
  }

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

  async listFirstRanks(appGroupIdentity: string, appId: string): Promise<ListFirstRanksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFirstRanksWithOptions(appGroupIdentity, appId, headers, runtime);
  }

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

  async listFunctionInstances(appGroupIdentity: string, functionName: string, request: ListFunctionInstancesRequest): Promise<ListFunctionInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionInstancesWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

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

  async listFunctionTasks(appGroupIdentity: string, functionName: string, instanceName: string, request: ListFunctionTasksRequest): Promise<ListFunctionTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionTasksWithOptions(appGroupIdentity, functionName, instanceName, request, headers, runtime);
  }

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

  async listInterventionDictionaries(request: ListInterventionDictionariesRequest): Promise<ListInterventionDictionariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionariesWithOptions(request, headers, runtime);
  }

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

  async listInterventionDictionaryEntries(name: string, request: ListInterventionDictionaryEntriesRequest): Promise<ListInterventionDictionaryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryEntriesWithOptions(name, request, headers, runtime);
  }

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

  async listInterventionDictionaryNerResults(name: string, request: ListInterventionDictionaryNerResultsRequest): Promise<ListInterventionDictionaryNerResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryNerResultsWithOptions(name, request, headers, runtime);
  }

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

  async listInterventionDictionaryRelatedEntities(name: string): Promise<ListInterventionDictionaryRelatedEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryRelatedEntitiesWithOptions(name, headers, runtime);
  }

  async listModelsWithOptions(appGroupIdentity: string, request: ListModelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListModelsResponse> {
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
      action: "ListModels",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/algorithm/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListModelsResponse>(await this.callApi(params, req, runtime), new ListModelsResponse({}));
  }

  async listModels(appGroupIdentity: string, request: ListModelsRequest): Promise<ListModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelsWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async listProceedings(appGroupIdentity: string, request: ListProceedingsRequest): Promise<ListProceedingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProceedingsWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async listQueryProcessorAnalyzerResults(appGroupIdentity: string, appId: string, name: string, request: ListQueryProcessorAnalyzerResultsRequest): Promise<ListQueryProcessorAnalyzerResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorAnalyzerResultsWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

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

  async listQueryProcessorNers(request: ListQueryProcessorNersRequest): Promise<ListQueryProcessorNersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorNersWithOptions(request, headers, runtime);
  }

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

  async listQueryProcessors(appGroupIdentity: string, appId: string, request: ListQueryProcessorsRequest): Promise<ListQueryProcessorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorsWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

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

  async listQuotaReviewTasks(appGroupIdentity: string, request: ListQuotaReviewTasksRequest): Promise<ListQuotaReviewTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotaReviewTasksWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async listScheduledTasks(appGroupIdentity: string, request: ListScheduledTasksRequest): Promise<ListScheduledTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScheduledTasksWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async listSearchStrategies(appGroupIdentity: string, appId: string): Promise<ListSearchStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSearchStrategiesWithOptions(appGroupIdentity, appId, headers, runtime);
  }

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

  async listSecondRanks(appGroupIdentity: string, appId: string): Promise<ListSecondRanksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecondRanksWithOptions(appGroupIdentity, appId, headers, runtime);
  }

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

  async listSlowQueryCategories(appGroupIdentity: string): Promise<ListSlowQueryCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlowQueryCategoriesWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async listSlowQueryQueries(appGroupIdentity: string, categoryIndex: string): Promise<ListSlowQueryQueriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlowQueryQueriesWithOptions(appGroupIdentity, categoryIndex, headers, runtime);
  }

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

  async listSortExpressions(appGroupIdentity: string, appId: string): Promise<ListSortExpressionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSortExpressionsWithOptions(appGroupIdentity, appId, headers, runtime);
  }

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

  async listSortScripts(appGroupIdentity: string, appVersionId: string): Promise<ListSortScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSortScriptsWithOptions(appGroupIdentity, appVersionId, headers, runtime);
  }

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

  async listStatisticLogs(appGroupIdentity: string, moduleName: string, request: ListStatisticLogsRequest): Promise<ListStatisticLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatisticLogsWithOptions(appGroupIdentity, moduleName, request, headers, runtime);
  }

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

  async listStatisticReport(appGroupIdentity: string, moduleName: string, request: ListStatisticReportRequest): Promise<ListStatisticReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatisticReportWithOptions(appGroupIdentity, moduleName, request, headers, runtime);
  }

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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

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

  async listUserAnalyzerEntries(name: string, request: ListUserAnalyzerEntriesRequest): Promise<ListUserAnalyzerEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserAnalyzerEntriesWithOptions(name, request, headers, runtime);
  }

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

  async listUserAnalyzers(request: ListUserAnalyzersRequest): Promise<ListUserAnalyzersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserAnalyzersWithOptions(request, headers, runtime);
  }

  /**
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=OpenSearch\\&api=ModifyAppGroup\\&type=ROA\\&version=2017-12-25)
    *
    * @param request ModifyAppGroupRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyAppGroupResponse
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
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=OpenSearch\\&api=ModifyAppGroup\\&type=ROA\\&version=2017-12-25)
    *
    * @param request ModifyAppGroupRequest
    * @return ModifyAppGroupResponse
   */
  async modifyAppGroup(appGroupIdentity: string, request: ModifyAppGroupRequest): Promise<ModifyAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAppGroupWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async modifyAppGroupQuota(appGroupIdentity: string, request: ModifyAppGroupQuotaRequest): Promise<ModifyAppGroupQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAppGroupQuotaWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async modifyFirstRank(appGroupIdentity: string, appId: string, name: string, request: ModifyFirstRankRequest): Promise<ModifyFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFirstRankWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

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

  async modifyQueryProcessor(appGroupIdentity: string, appId: string, name: string, request: ModifyQueryProcessorRequest): Promise<ModifyQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyQueryProcessorWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

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

  async modifyScheduledTask(appGroupIdentity: string, taskId: string, request: ModifyScheduledTaskRequest): Promise<ModifyScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScheduledTaskWithOptions(appGroupIdentity, taskId, request, headers, runtime);
  }

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

  async modifySecondRank(appGroupIdentity: string, appId: string, name: string, request: ModifySecondRankRequest): Promise<ModifySecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySecondRankWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  async previewModelWithOptions(appGroupIdentity: string, modelName: string, request: PreviewModelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PreviewModelResponse> {
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
      action: "PreviewModel",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/algorithm/models/${OpenApiUtil.getEncodeParam(modelName)}/actions/preview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PreviewModelResponse>(await this.callApi(params, req, runtime), new PreviewModelResponse({}));
  }

  async previewModel(appGroupIdentity: string, modelName: string, request: PreviewModelRequest): Promise<PreviewModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewModelWithOptions(appGroupIdentity, modelName, request, headers, runtime);
  }

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

  async pushInterventionDictionaryEntries(name: string, request: PushInterventionDictionaryEntriesRequest): Promise<PushInterventionDictionaryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushInterventionDictionaryEntriesWithOptions(name, request, headers, runtime);
  }

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

  async pushUserAnalyzerEntries(name: string, request: PushUserAnalyzerEntriesRequest): Promise<PushUserAnalyzerEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushUserAnalyzerEntriesWithOptions(name, request, headers, runtime);
  }

  async rankPreviewQueryWithOptions(appGroupIdentity: string, modelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RankPreviewQueryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RankPreviewQuery",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${OpenApiUtil.getEncodeParam(appGroupIdentity)}/algorithm/models/${OpenApiUtil.getEncodeParam(modelName)}/actions/query-rank`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RankPreviewQueryResponse>(await this.callApi(params, req, runtime), new RankPreviewQueryResponse({}));
  }

  async rankPreviewQuery(appGroupIdentity: string, modelName: string): Promise<RankPreviewQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rankPreviewQueryWithOptions(appGroupIdentity, modelName, headers, runtime);
  }

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

  async releaseSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<ReleaseSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  /**
    * > If an application has two versions, you can delete only the offline version.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveAppResponse
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
    * > If an application has two versions, you can delete only the offline version.
    *
    * @return RemoveAppResponse
   */
  async removeApp(appGroupIdentity: string, appId: string): Promise<RemoveAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeAppWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=OpenSearch\\&api=RemoveAppGroup\\&type=ROA\\&version=2017-12-25)
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveAppGroupResponse
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
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=OpenSearch\\&api=RemoveAppGroup\\&type=ROA\\&version=2017-12-25)
    *
    * @return RemoveAppGroupResponse
   */
  async removeAppGroup(appGroupIdentity: string): Promise<RemoveAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async removeDataCollection(appGroupIdentity: string, dataCollectionIdentity: string): Promise<RemoveDataCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeDataCollectionWithOptions(appGroupIdentity, dataCollectionIdentity, headers, runtime);
  }

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

  async removeFirstRank(appGroupIdentity: string, appId: string, name: string): Promise<RemoveFirstRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeFirstRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

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

  async removeInterventionDictionary(name: string): Promise<RemoveInterventionDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeInterventionDictionaryWithOptions(name, headers, runtime);
  }

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

  async removeQueryProcessor(appGroupIdentity: string, appId: string, name: string): Promise<RemoveQueryProcessorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeQueryProcessorWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

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

  async removeScheduledTask(appGroupIdentity: string, taskId: string): Promise<RemoveScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeScheduledTaskWithOptions(appGroupIdentity, taskId, headers, runtime);
  }

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

  async removeSearchStrategy(appGroupIdentity: string, appId: string, strategyName: string): Promise<RemoveSearchStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeSearchStrategyWithOptions(appGroupIdentity, appId, strategyName, headers, runtime);
  }

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

  async removeSecondRank(appGroupIdentity: string, appId: string, name: string): Promise<RemoveSecondRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeSecondRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

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

  async removeUserAnalyzer(name: string): Promise<RemoveUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeUserAnalyzerWithOptions(name, headers, runtime);
  }

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

  async renewAppGroup(appGroupIdentity: string, request: RenewAppGroupRequest): Promise<RenewAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewAppGroupWithOptions(appGroupIdentity, request, headers, runtime);
  }

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

  async replaceAppGroupCommodityCode(appGroupIdentity: string): Promise<ReplaceAppGroupCommodityCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replaceAppGroupCommodityCodeWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async saveSortScriptFile(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string, request: SaveSortScriptFileRequest): Promise<SaveSortScriptFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.saveSortScriptFileWithOptions(appGroupIdentity, scriptName, appVersionId, fileName, request, headers, runtime);
  }

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

  async startSlowQueryAnalyzer(appGroupIdentity: string): Promise<StartSlowQueryAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startSlowQueryAnalyzerWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request UnbindESUserAnalyzerRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UnbindESUserAnalyzerResponse
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
    * The ID of the request.
    *
    * @param request UnbindESUserAnalyzerRequest
    * @return UnbindESUserAnalyzerResponse
   */
  async unbindESUserAnalyzer(appGroupIdentity: string, esInstanceId: string, request: UnbindESUserAnalyzerRequest): Promise<UnbindESUserAnalyzerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindESUserAnalyzerWithOptions(appGroupIdentity, esInstanceId, request, headers, runtime);
  }

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

  async unbindEsInstance(appGroupIdentity: string): Promise<UnbindEsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindEsInstanceWithOptions(appGroupIdentity, headers, runtime);
  }

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

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

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

  async updateABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: UpdateABTestExperimentRequest): Promise<UpdateABTestExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, request, headers, runtime);
  }

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

  async updateABTestFixedFlowDividers(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: UpdateABTestFixedFlowDividersRequest): Promise<UpdateABTestFixedFlowDividersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestFixedFlowDividersWithOptions(appGroupIdentity, sceneId, groupId, experimentId, request, headers, runtime);
  }

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

  async updateABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string, request: UpdateABTestGroupRequest): Promise<UpdateABTestGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, request, headers, runtime);
  }

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

  async updateABTestScene(appGroupIdentity: string, sceneId: string, request: UpdateABTestSceneRequest): Promise<UpdateABTestSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestSceneWithOptions(appGroupIdentity, sceneId, request, headers, runtime);
  }

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

  async updateFetchFields(appGroupIdentity: string, appId: string, request: UpdateFetchFieldsRequest): Promise<UpdateFetchFieldsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFetchFieldsWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

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

  async updateFunctionDefaultInstance(appGroupIdentity: string, functionName: string, request: UpdateFunctionDefaultInstanceRequest): Promise<UpdateFunctionDefaultInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionDefaultInstanceWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

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

  async updateFunctionInstance(appGroupIdentity: string, functionName: string, instanceName: string, request: UpdateFunctionInstanceRequest): Promise<UpdateFunctionInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionInstanceWithOptions(appGroupIdentity, functionName, instanceName, request, headers, runtime);
  }

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

  async updateSearchStrategy(appGroupIdentity: string, appId: string, strategyName: string, request: UpdateSearchStrategyRequest): Promise<UpdateSearchStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSearchStrategyWithOptions(appGroupIdentity, appId, strategyName, request, headers, runtime);
  }

  /**
    * You can call this operation to modify the description of a sort script.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateSortScriptResponse
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
    * You can call this operation to modify the description of a sort script.
    *
    * @return UpdateSortScriptResponse
   */
  async updateSortScript(appGroupIdentity: string, appVersionId: string, scriptName: string): Promise<UpdateSortScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSortScriptWithOptions(appGroupIdentity, appVersionId, scriptName, headers, runtime);
  }

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

  async updateSummaries(appGroupIdentity: string, appId: string, request: UpdateSummariesRequest): Promise<UpdateSummariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSummariesWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

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

  async validateDataSources(request: ValidateDataSourcesRequest): Promise<ValidateDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateDataSourcesWithOptions(request, headers, runtime);
  }

}
