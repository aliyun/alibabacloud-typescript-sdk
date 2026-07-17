// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsResponseBodyResultCluster extends $dara.Model {
  /**
   * @remarks
   * The maximum length of the query clause.
   * 
   * @example
   * 1024
   */
  maxQueryClauseLength?: number;
  /**
   * @remarks
   * The timeout period for the cluster. Unit: ms.
   * 
   * @example
   * 750
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultDataSources extends $dara.Model {
  /**
   * @remarks
   * The field mappings.
   */
  fields?: { [key: string]: any }[];
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * id
   */
  keyField?: string;
  /**
   * @remarks
   * The data source parameters.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The data processing plug-ins for fields.
   * 
   * Plug-in name (name)
   * 
   * - JsonKeyValueExtractor
   * 
   * - MultiValueSpliter
   * 
   * - KeyValueExtractor
   * 
   * - StringCatenateExtractor
   * 
   * - HTMLTagRemover
   * 
   * Plug-in parameters (parameters):
   * 
   * - JsonKeyValueExtractor
   * 
   * - MultiValueSpliter
   * 
   * - KeyValueExtractor
   * 
   * - StringCatenateExtractor
   * 
   * - HTMLTagRemover
   */
  plugins?: { [key: string]: any };
  /**
   * @remarks
   * The name of the wide table.
   * 
   * @example
   * name
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table in the application.
   * 
   * @example
   * main
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - rds
   * 
   * - odps
   * 
   * - opensearch
   * 
   * - polardb
   * 
   * @example
   * rds
   */
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

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.plugins) {
      $dara.Model.validateMap(this.plugins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultDomainFunctions extends $dara.Model {
  /**
   * @remarks
   * Structure 1
   */
  algo?: string[];
  /**
   * @remarks
   * The query processing features.
   */
  qp?: string[];
  /**
   * @remarks
   * The service features.
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

  validate() {
    if(Array.isArray(this.algo)) {
      $dara.Model.validateArray(this.algo);
    }
    if(Array.isArray(this.qp)) {
      $dara.Model.validateArray(this.qp);
    }
    if(Array.isArray(this.service)) {
      $dara.Model.validateArray(this.service);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultDomain extends $dara.Model {
  /**
   * @remarks
   * The edition of the application. Valid values: standard (Standard Edition), advance (the legacy Premium Edition, which is not available for new applications), and enhanced (the new Premium Edition).
   * 
   * @example
   * -
   */
  category?: string;
  /**
   * @remarks
   * The search features.
   */
  functions?: DescribeAppsResponseBodyResultDomainFunctions;
  /**
   * @remarks
   * The name in English.
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
      functions: DescribeAppsResponseBodyResultDomainFunctions,
      name: 'string',
    };
  }

  validate() {
    if(this.functions && typeof (this.functions as any).validate === 'function') {
      (this.functions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultFirstRanks extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is the default expression.
   * 
   * @example
   * False
   */
  active?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The expression, which can be an array or a string.
   * 
   * @example
   * String :"random()*100+now()"；
   * Array: [
   *     {
   *       "attribute": "static_bm25()",
   *       "arg": "",
   *       "weight": 10
   *     }
   *   ]
   */
  meta?: any;
  /**
   * @remarks
   * The name of the coarse-grained sorting expression.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The expression type. Valid values: STRUCT: a structured expression. STRING (default): a custom formula.
   * 
   * STRUCT: The content of the expression is a structure. STRING (default): You can configure a custom formula.
   * 
   * @example
   * STRING
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultQueryProcessors extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is the default rule.
   * 
   * @example
   * False
   */
  active?: boolean;
  /**
   * @remarks
   * The industry category.
   * 
   * @example
   * ""
   */
  category?: string;
  /**
   * @remarks
   * The industry. Valid values:
   * 
   * - GENERAL
   * 
   * - ECOMMERCE
   * 
   * - IT_CONTENT
   * 
   * @example
   * GENERAL
   */
  domain?: string;
  /**
   * @remarks
   * The indexes.
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
   * The features.
   */
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

  validate() {
    if(Array.isArray(this.indexes)) {
      $dara.Model.validateArray(this.indexes);
    }
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultQuota extends $dara.Model {
  /**
   * @remarks
   * The computing resources. Unit: logical compute unit (LCU).
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
   * The number of queries per second (QPS). This parameter is used in an earlier billing model.
   * 
   * @example
   * 5
   */
  qps?: number;
  /**
   * @remarks
   * The specifications. Valid values:
   * 
   * - opensearch.share.junior: Basic
   * 
   * - opensearch.share.common: Shared general-purpose
   * 
   * - opensearch.share.compute: Shared compute-optimized
   * 
   * - opensearch.share.storage: Shared storage-optimized
   * 
   * - opensearch.private.common: Dedicated general-purpose
   * 
   * - opensearch.private.compute: Dedicated compute-optimized
   * 
   * - opensearch.private.storage: Dedicated storage-optimized
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemaIndexSortConfig extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - ASC
   * 
   * - DESC
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * field1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemaIndexes extends $dara.Model {
  /**
   * @remarks
   * The attribute fields.
   */
  filterFields?: string[];
  /**
   * @remarks
   * The index fields.
   */
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

  validate() {
    if(Array.isArray(this.filterFields)) {
      $dara.Model.validateArray(this.filterFields);
    }
    if(this.searchFields) {
      $dara.Model.validateMap(this.searchFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemaTtlField extends $dara.Model {
  /**
   * @remarks
   * The document TTL field.
   * 
   * @example
   * text1
   */
  name?: string;
  /**
   * @remarks
   * The time to live (TTL). Unit: milliseconds.
   * 
   * @example
   * 1000
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchema extends $dara.Model {
  /**
   * @remarks
   * The index sorting settings.
   */
  indexSortConfig?: DescribeAppsResponseBodyResultSchemaIndexSortConfig[];
  /**
   * @remarks
   * The index schema.
   */
  indexes?: DescribeAppsResponseBodyResultSchemaIndexes;
  /**
   * @remarks
   * The name of the wide table.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The level-1 routing field.
   * 
   * @example
   * field1
   */
  routeField?: string;
  /**
   * @remarks
   * The hot data values of the level-1 routing field.
   */
  routeFieldValues?: string[];
  /**
   * @remarks
   * The level-2 routing field. This parameter takes effect only if the routeFieldValues parameter is configured. By default, the primary key of the wide table is used as the level-2 routing field.
   * 
   * @example
   * field2
   */
  secondRouteField?: string;
  /**
   * @remarks
   * The table schema.
   */
  tables?: { [key: string]: any };
  /**
   * @remarks
   * The document time-to-live (TTL) settings.
   */
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

  validate() {
    if(Array.isArray(this.indexSortConfig)) {
      $dara.Model.validateArray(this.indexSortConfig);
    }
    if(this.indexes && typeof (this.indexes as any).validate === 'function') {
      (this.indexes as any).validate();
    }
    if(Array.isArray(this.routeFieldValues)) {
      $dara.Model.validateArray(this.routeFieldValues);
    }
    if(this.tables) {
      $dara.Model.validateMap(this.tables);
    }
    if(this.ttlField && typeof (this.ttlField as any).validate === 'function') {
      (this.ttlField as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemasIndexSortConfig extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - ASC
   * 
   * - DESC
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * fIeld1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemasIndexes extends $dara.Model {
  /**
   * @remarks
   * The attribute fields.
   */
  filterFields?: string[];
  /**
   * @remarks
   * The index fields.
   */
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

  validate() {
    if(Array.isArray(this.filterFields)) {
      $dara.Model.validateArray(this.filterFields);
    }
    if(this.searchFields) {
      $dara.Model.validateMap(this.searchFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemasTtlField extends $dara.Model {
  /**
   * @remarks
   * The document TTL field.
   * 
   * @example
   * fIeld1
   */
  name?: string;
  /**
   * @remarks
   * The time to live (TTL). Unit: milliseconds.
   * 
   * @example
   * 1000
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSchemas extends $dara.Model {
  /**
   * @remarks
   * The index sorting settings.
   */
  indexSortConfig?: DescribeAppsResponseBodyResultSchemasIndexSortConfig[];
  /**
   * @remarks
   * The index schema.
   */
  indexes?: DescribeAppsResponseBodyResultSchemasIndexes;
  /**
   * @remarks
   * The name of the wide table.
   * 
   * @example
   * main
   */
  name?: string;
  /**
   * @remarks
   * The level-1 routing field.
   * 
   * @example
   * field1
   */
  routeField?: string;
  /**
   * @remarks
   * The hot data values of the level-1 routing field.
   */
  routeFieldValues?: string[];
  /**
   * @remarks
   * The level-2 routing field. This parameter takes effect only if the routeFieldValues parameter is configured. By default, the primary key of the wide table is used as the level-2 routing field.
   * 
   * @example
   * field2
   */
  secondRouteField?: string;
  /**
   * @remarks
   * The table schema.
   */
  tables?: { [key: string]: any };
  /**
   * @remarks
   * The document TTL settings.
   */
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

  validate() {
    if(Array.isArray(this.indexSortConfig)) {
      $dara.Model.validateArray(this.indexSortConfig);
    }
    if(this.indexes && typeof (this.indexes as any).validate === 'function') {
      (this.indexes as any).validate();
    }
    if(Array.isArray(this.routeFieldValues)) {
      $dara.Model.validateArray(this.routeFieldValues);
    }
    if(this.tables) {
      $dara.Model.validateMap(this.tables);
    }
    if(this.ttlField && typeof (this.ttlField as any).validate === 'function') {
      (this.ttlField as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSecondRanks extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is the default expression.
   * 
   * @example
   * False
   */
  active?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The fine-grained sorting expression. You can define an expression that consists of fields, feature functions, and mathematical functions to implement complex sorting logic.
   * 
   * @example
   * "cate_id > 0 and cate_id < 1000"
   */
  meta?: any;
  /**
   * @remarks
   * The name of the fine-grained sorting expression.
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
      meta: 'any',
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

export class DescribeAppsResponseBodyResultSummariesMeta extends $dara.Model {
  /**
   * @remarks
   * The HTML tag for highlighting.
   * 
   * @example
   * em
   */
  element?: string;
  /**
   * @remarks
   * The connector that is used to connect segments.
   * 
   * @example
   * ...
   */
  ellipsis?: string;
  /**
   * @remarks
   * The field.
   * 
   * @example
   * field1
   */
  field?: string;
  /**
   * @remarks
   * The length of the segment. Valid values: 1 to 300.
   * 
   * @example
   * 50
   */
  len?: number;
  /**
   * @remarks
   * The number of segments. Valid values: 1 to 5.
   * 
   * @example
   * 5
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResultSummaries extends $dara.Model {
  /**
   * @remarks
   * The summary settings.
   */
  meta?: DescribeAppsResponseBodyResultSummariesMeta[];
  /**
   * @remarks
   * The name of the summary group.
   * 
   * @example
   * fefault
   */
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

  validate() {
    if(Array.isArray(this.meta)) {
      $dara.Model.validateArray(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic switchover is enabled.
   * 
   * @example
   * true
   */
  autoSwitch?: boolean;
  /**
   * @remarks
   * The cluster settings.
   */
  cluster?: DescribeAppsResponseBodyResultCluster;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * vpc_sh_domain_1
   */
  clusterName?: string;
  /**
   * @remarks
   * The data source settings.
   */
  dataSources?: DescribeAppsResponseBodyResultDataSources[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The industry. Valid values:
   * 
   * - GENERAL
   * 
   * - ECOMMERCE
   * 
   * - IT_CONTENT
   */
  domain?: DescribeAppsResponseBodyResultDomain;
  /**
   * @remarks
   * The default display fields.
   */
  fetchFields?: string[];
  /**
   * @remarks
   * The coarse-grained sorting settings.
   */
  firstRanks?: DescribeAppsResponseBodyResultFirstRanks[];
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
   * The Large Language Model (LLM) settings for fields.
   */
  interpretations?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the version is an online version.
   * 
   * @example
   * 12333
   */
  isCurrent?: boolean;
  /**
   * @remarks
   * The progress of data import in percentage. For example, a value of 83 indicates 83%.
   * 
   * @example
   * 100
   */
  progressPercent?: number;
  /**
   * @remarks
   * The prompt settings.
   */
  prompts?: { [key: string]: any }[];
  /**
   * @remarks
   * The query analysis settings.
   */
  queryProcessors?: DescribeAppsResponseBodyResultQueryProcessors[];
  /**
   * @remarks
   * The quota information.
   */
  quota?: DescribeAppsResponseBodyResultQuota;
  realtimeShared?: boolean;
  /**
   * @remarks
   * The application schema.
   */
  schema?: DescribeAppsResponseBodyResultSchema;
  /**
   * @remarks
   * The schema of a non-partitioned table.
   */
  schemas?: DescribeAppsResponseBodyResultSchemas[];
  /**
   * @remarks
   * The fine-grained sorting settings.
   */
  secondRanks?: DescribeAppsResponseBodyResultSecondRanks[];
  /**
   * @remarks
   * The status of the version. Valid values:
   * 
   * - ok: The version is normal.
   * 
   * - stopped: The version is paused.
   * 
   * - frozen: The version is frozen.
   * 
   * - initializing: The version is being initialized.
   * 
   * - unavailable: The version is invalid.
   * 
   * - data_waiting: Data is pending initialization.
   * 
   * - data_preparing: Data is being initialized.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The search result summary settings.
   */
  summaries?: DescribeAppsResponseBodyResultSummaries[];
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * - standard: a Standard Edition application.
   * 
   * - advance: an Advanced Edition application of an old version. This edition is not supported for new applications.
   * 
   * - enhanced: a new version of Advanced Edition.
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
      realtimeShared: 'realtimeShared',
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
      realtimeShared: 'boolean',
      schema: DescribeAppsResponseBodyResultSchema,
      schemas: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultSchemas },
      secondRanks: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultSecondRanks },
      status: 'string',
      summaries: { 'type': 'array', 'itemType': DescribeAppsResponseBodyResultSummaries },
      type: 'string',
    };
  }

  validate() {
    if(this.cluster && typeof (this.cluster as any).validate === 'function') {
      (this.cluster as any).validate();
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.domain && typeof (this.domain as any).validate === 'function') {
      (this.domain as any).validate();
    }
    if(Array.isArray(this.fetchFields)) {
      $dara.Model.validateArray(this.fetchFields);
    }
    if(Array.isArray(this.firstRanks)) {
      $dara.Model.validateArray(this.firstRanks);
    }
    if(this.interpretations) {
      $dara.Model.validateMap(this.interpretations);
    }
    if(Array.isArray(this.prompts)) {
      $dara.Model.validateArray(this.prompts);
    }
    if(Array.isArray(this.queryProcessors)) {
      $dara.Model.validateArray(this.queryProcessors);
    }
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    if(Array.isArray(this.schemas)) {
      $dara.Model.validateArray(this.schemas);
    }
    if(Array.isArray(this.secondRanks)) {
      $dara.Model.validateArray(this.secondRanks);
    }
    if(Array.isArray(this.summaries)) {
      $dara.Model.validateArray(this.summaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $dara.Model {
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
   * The response parameters.
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

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

