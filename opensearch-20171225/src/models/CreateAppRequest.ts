// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRequestCluster extends $dara.Model {
  chunkModels?: { [key: string]: any }[];
  graphRag?: { [key: string]: any };
  imageContentRecognizerModels?: { [key: string]: any }[];
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
   * The timeout period. Unit: milliseconds.
   * 
   * @example
   * 750
   */
  maxTimeoutMS?: number;
  /**
   * @example
   * ops-text-embedding-002
   */
  textEmbeddingModel?: string;
  /**
   * @example
   * ops-text-sparse-embedding-001
   */
  textSparseEmbeddingModel?: string;
  vectorIndexConfigs?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      chunkModels: 'chunkModels',
      graphRag: 'graphRag',
      imageContentRecognizerModels: 'imageContentRecognizerModels',
      maxQueryClauseLength: 'maxQueryClauseLength',
      maxTimeoutMS: 'maxTimeoutMS',
      textEmbeddingModel: 'textEmbeddingModel',
      textSparseEmbeddingModel: 'textSparseEmbeddingModel',
      vectorIndexConfigs: 'vectorIndexConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkModels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      graphRag: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      imageContentRecognizerModels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      maxQueryClauseLength: 'number',
      maxTimeoutMS: 'number',
      textEmbeddingModel: 'string',
      textSparseEmbeddingModel: 'string',
      vectorIndexConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.chunkModels)) {
      $dara.Model.validateArray(this.chunkModels);
    }
    if(this.graphRag) {
      $dara.Model.validateMap(this.graphRag);
    }
    if(Array.isArray(this.imageContentRecognizerModels)) {
      $dara.Model.validateArray(this.imageContentRecognizerModels);
    }
    if(Array.isArray(this.vectorIndexConfigs)) {
      $dara.Model.validateArray(this.vectorIndexConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestDataSources extends $dara.Model {
  /**
   * @remarks
   * The information about field mappings.
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
   * The information about the data source.
   * 
   * @example
   * {
   *   "instanceId": "rds-instance-id",
   *   "dbName": "my_db",
   *   "dbTableName": "my_table",
   *   "dbUser": "my",
   *   "dbPassword": "my_passwd",
   *   "filter":"",
   *   "autoSync": true
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The plug-ins that are used for data processing.
   * 
   * name:
   * 
   * *   JsonKeyValueExtractor
   * *   MultiValueSpliter
   * *   KeyValueExtractor
   * *   StringCatenateExtractor
   * *   HTMLTagRemover
   * 
   * parameters:
   * 
   * *   JsonKeyValueExtractor
   * *   MultiValueSpliter
   * *   KeyValueExtractor
   * *   StringCatenateExtractor
   * *   HTMLTagRemover
   * 
   * @example
   * {
   *   "name": "JsonKeyValueExtractor",
   *   "parameters": {
   *   "key": "my_field"
   * }
   * }
   */
  plugins?: { [key: string]: any };
  /**
   * @remarks
   * The name of the wide table.
   * 
   * @example
   * table_name
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
   * *   rds
   * *   odps
   * *   opensearch
   * *   polardb
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

export class CreateAppRequestDomain extends $dara.Model {
  /**
   * @remarks
   * The industry category.
   * 
   * @example
   * general
   */
  category?: string;
  /**
   * @remarks
   * The selected feature category. Valid values:
   * 
   * *   qp: query analysis
   * *   algo: sort policy
   * *   service: service
   * 
   * @example
   * {"qp":["spellcheck"],"algo":["pop"],"service":["suggest"]}
   */
  functions?: { [key: string]: any };
  /**
   * @remarks
   * The industry type.
   * 
   * @example
   * ecommerce
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
      functions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.functions) {
      $dara.Model.validateMap(this.functions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestFirstRanks extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the expression is the default one.
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
   * The information about the expression. The information can be of the array or string type.
   * 
   * @example
   * String :"random()*100+now()";
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
   * The name of the rough sort expression.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The expression type. Valid values:
   * 
   * *   STRUCT: The content of the expression is a structure.
   * *   STRING (default): You can configure a custom formula.
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

export class CreateAppRequestQueryProcessors extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the rule is the default one.
   * 
   * @example
   * True
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
   * The industry type. Valid values:
   * 
   * *   GENERAL
   * *   ECOMMERCE
   * *   IT_CONTENT
   * 
   * @example
   * ECOMMERCE
   */
  domain?: string;
  /**
   * @remarks
   * The index range.
   */
  indexes?: string[];
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * name
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

export class CreateAppRequestSchemaIndexSortConfig extends $dara.Model {
  /**
   * @remarks
   * The sort method.
   * 
   * @example
   * ASC;
   * DESC;
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

export class CreateAppRequestSchemaIndexes extends $dara.Model {
  /**
   * @remarks
   * The attribute fields.
   */
  filterFields?: string[];
  /**
   * @remarks
   * The index fields.
   * 
   * @example
   * {
   *   "fields": ["title"],
   *   "analyzer": "chn_standard"
   * }
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

export class CreateAppRequestSchemaTtlField extends $dara.Model {
  /**
   * @remarks
   * The name of the document time field.
   * 
   * @example
   * text1
   */
  name?: string;
  /**
   * @remarks
   * The TTL. Unit: milliseconds.
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

export class CreateAppRequestSchema extends $dara.Model {
  /**
   * @remarks
   * The sort configurations.
   */
  indexSortConfig?: CreateAppRequestSchemaIndexSortConfig[];
  /**
   * @remarks
   * The index schema.
   */
  indexes?: CreateAppRequestSchemaIndexes;
  /**
   * @remarks
   * The name of the wide table.
   * 
   * @example
   * table_name
   */
  name?: string;
  /**
   * @remarks
   * The name of the level-1 routing field.
   * 
   * @example
   * field1
   */
  routeField?: string;
  /**
   * @remarks
   * The hot values of the level-1 routing field. After you configure this parameter, level-2 routing is enabled.
   */
  routeFieldValues?: string[];
  /**
   * @remarks
   * The name of the level-2 routing field. This parameter takes effect only when the `routeFieldValues` parameter is configured. By default, the wide-table primary key field is used as the level-2 routing field.
   * 
   * @example
   * field2
   */
  secondRouteField?: string;
  /**
   * @remarks
   * The table schema.
   * 
   * @example
   * {
   * 	"primaryTable": true,
   * 	"name": "main",
   * 	"fields": {
   * 		"id": {
   * 			"name": "id",
   * 			"type": "LITERAL",
   * 			"primaryKey": true
   * 		},
   * 		"title": {
   * 			"name": "title",
   * 			"type": "TEXT",
   * 			"primaryKey": false
   * 		},
   * 		"buy": {
   * 			"name": "buy",
   * 			"type": "INT",
   * 			"primaryKey": false
   * 		},
   * 		"cate_id": {
   * 			"name": "cate_id",
   * 			"type": "INT",
   * 			"primaryKey": false
   * 		},
   * 		"cate_name": {
   * 			"name": "cate_name",
   * 			"type": "LITERAL",
   * 			"primaryKey": false
   * 		}
   * 	}
   * }
   */
  tables?: { [key: string]: any };
  /**
   * @remarks
   * The document clearing configurations.
   */
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

export class CreateAppRequestSchemasIndexSortConfig extends $dara.Model {
  /**
   * @remarks
   * The sort method.
   * 
   * *   ASC
   * *   DESC
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

export class CreateAppRequestSchemasIndexes extends $dara.Model {
  /**
   * @remarks
   * The attribute fields.
   */
  filterFields?: string[];
  /**
   * @remarks
   * The index fields.
   * 
   * @example
   * {
   *   "fields": ["title"],
   *   "analyzer": "chn_standard"
   * }
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

export class CreateAppRequestSchemasTtlField extends $dara.Model {
  /**
   * @remarks
   * The name of the document time field.
   * 
   * @example
   * text1
   */
  name?: string;
  /**
   * @remarks
   * The TTL. Unit: milliseconds.
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

export class CreateAppRequestSchemas extends $dara.Model {
  /**
   * @remarks
   * The sort configurations.
   */
  indexSortConfig?: CreateAppRequestSchemasIndexSortConfig[];
  /**
   * @remarks
   * The index schema.
   */
  indexes?: CreateAppRequestSchemasIndexes;
  /**
   * @remarks
   * The name of the wide table.
   * 
   * @example
   * table_name
   */
  name?: string;
  /**
   * @remarks
   * The name of the level-1 routing field.
   * 
   * @example
   * field1
   */
  routeField?: string;
  /**
   * @remarks
   * The hot values of the level-1 routing field. After you configure this parameter, level-2 routing is enabled.
   */
  routeFieldValues?: string[];
  /**
   * @remarks
   * The name of the level-2 routing field. This parameter takes effect only when the routeFieldValues parameter is configured. By default, the wide-table primary key field is used as the level-2 routing field.
   * 
   * @example
   * field2
   */
  secondRouteField?: string;
  /**
   * @remarks
   * The table schema.
   * 
   * @example
   * {
   * 	"primaryTable": true,
   * 	"name": "main",
   * 	"fields": {
   * 		"id": {
   * 			"name": "id",
   * 			"type": "LITERAL",
   * 			"primaryKey": true
   * 		},
   * 		"title": {
   * 			"name": "title",
   * 			"type": "TEXT",
   * 			"primaryKey": false
   * 		},
   * 		"buy": {
   * 			"name": "buy",
   * 			"type": "INT",
   * 			"primaryKey": false
   * 		},
   * 		"cate_id": {
   * 			"name": "cate_id",
   * 			"type": "INT",
   * 			"primaryKey": false
   * 		},
   * 		"cate_name": {
   * 			"name": "cate_name",
   * 			"type": "LITERAL",
   * 			"primaryKey": false
   * 		}
   * 	}
   * }
   */
  tables?: { [key: string]: any };
  /**
   * @remarks
   * The document clearing configurations.
   */
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

export class CreateAppRequestSecondRanks extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the expression is the default one.
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
   * The fine sort expression. You can define an expression that contains fields, feature functions, and mathematical functions to implement complex sort logic.
   * 
   * @example
   * "cate_id > 0 and cate_id < 1000"
   */
  meta?: any;
  /**
   * @remarks
   * The name of the fine sort expression.
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

export class CreateAppRequestSummariesMeta extends $dara.Model {
  /**
   * @remarks
   * The element that is used for highlighting.
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
   * 1
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

export class CreateAppRequestSummaries extends $dara.Model {
  /**
   * @remarks
   * The collection of summary configurations.
   */
  meta?: CreateAppRequestSummariesMeta[];
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * default
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
      meta: { 'type': 'array', 'itemType': CreateAppRequestSummariesMeta },
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

export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically switch the created version to an online version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoSwitch?: boolean;
  /**
   * @remarks
   * The capability opening configurations.
   */
  cluster?: CreateAppRequestCluster;
  configItems?: { [key: string]: any }[];
  /**
   * @remarks
   * The configurations of data sources.
   */
  dataSources?: CreateAppRequestDataSources[];
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * "Version description"
   */
  description?: string;
  /**
   * @remarks
   * The industry model module.
   */
  domain?: CreateAppRequestDomain;
  /**
   * @remarks
   * The default display fields.
   */
  fetchFields?: string[];
  /**
   * @remarks
   * The configurations of rough sort.
   */
  firstRanks?: CreateAppRequestFirstRanks[];
  interpretations?: { [key: string]: any }[];
  /**
   * @remarks
   * The zone identifier. Valid values:
   * 
   * *   vpc
   * *   oxs
   * 
   * @example
   * vpc
   */
  networkType?: string;
  prompts?: { [key: string]: any }[];
  /**
   * @remarks
   * The query intent understanding configurations.
   */
  queryProcessors?: CreateAppRequestQueryProcessors[];
  realtimeShared?: boolean;
  /**
   * @remarks
   * The single-table schema.
   */
  schema?: CreateAppRequestSchema;
  /**
   * @remarks
   * The multi-table schema.
   */
  schemas?: CreateAppRequestSchemas[];
  /**
   * @remarks
   * The configurations of fine sort.
   */
  secondRanks?: CreateAppRequestSecondRanks[];
  /**
   * @remarks
   * The summary configurations of search results.
   */
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
      configItems: 'configItems',
      dataSources: 'dataSources',
      description: 'description',
      domain: 'domain',
      fetchFields: 'fetchFields',
      firstRanks: 'firstRanks',
      interpretations: 'interpretations',
      networkType: 'networkType',
      prompts: 'prompts',
      queryProcessors: 'queryProcessors',
      realtimeShared: 'realtimeShared',
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
      configItems: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      dataSources: { 'type': 'array', 'itemType': CreateAppRequestDataSources },
      description: 'string',
      domain: CreateAppRequestDomain,
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      firstRanks: { 'type': 'array', 'itemType': CreateAppRequestFirstRanks },
      interpretations: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      networkType: 'string',
      prompts: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      queryProcessors: { 'type': 'array', 'itemType': CreateAppRequestQueryProcessors },
      realtimeShared: 'boolean',
      schema: CreateAppRequestSchema,
      schemas: { 'type': 'array', 'itemType': CreateAppRequestSchemas },
      secondRanks: { 'type': 'array', 'itemType': CreateAppRequestSecondRanks },
      summaries: { 'type': 'array', 'itemType': CreateAppRequestSummaries },
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.cluster && typeof (this.cluster as any).validate === 'function') {
      (this.cluster as any).validate();
    }
    if(Array.isArray(this.configItems)) {
      $dara.Model.validateArray(this.configItems);
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
    if(Array.isArray(this.interpretations)) {
      $dara.Model.validateArray(this.interpretations);
    }
    if(Array.isArray(this.prompts)) {
      $dara.Model.validateArray(this.prompts);
    }
    if(Array.isArray(this.queryProcessors)) {
      $dara.Model.validateArray(this.queryProcessors);
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

