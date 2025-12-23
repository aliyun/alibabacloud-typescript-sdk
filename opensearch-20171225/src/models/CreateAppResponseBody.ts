// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppResponseBodyResultCluster extends $dara.Model {
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
  textEmbeddingModel?: string;
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

export class CreateAppResponseBodyResultDataSources extends $dara.Model {
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

export class CreateAppResponseBodyResultDomainFunctions extends $dara.Model {
  /**
   * @remarks
   * The features of the sort policy category.
   */
  algo?: string[];
  /**
   * @remarks
   * The features of the query analysis category.
   */
  qp?: string[];
  /**
   * @remarks
   * The features of the service category.
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

export class CreateAppResponseBodyResultDomain extends $dara.Model {
  /**
   * @remarks
   * The industry category.
   * 
   * @example
   * -
   */
  category?: string;
  /**
   * @remarks
   * The selected features.
   */
  functions?: CreateAppResponseBodyResultDomainFunctions;
  /**
   * @remarks
   * The industry type. Valid values:
   * 
   * *   GENERAL
   * *   ECOMMERCE
   * *   IT_CONTENT
   * 
   * @example
   * GENERAL
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
      functions: CreateAppResponseBodyResultDomainFunctions,
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

export class CreateAppResponseBodyResultFirstRanks extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
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

export class CreateAppResponseBodyResultQueryProcessors extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rule is the default one.
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
   * The industry type. Valid values:
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
   * The index range.
   */
  indexes?: string[];
  /**
   * @remarks
   * The rule name.
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

export class CreateAppResponseBodyResultQuota extends $dara.Model {
  /**
   * @remarks
   * The computing resources.
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
   * The search request.
   * 
   * @example
   * 5
   */
  qps?: number;
  /**
   * @remarks
   * The specifications. Valid values:
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
  /**
   * @example
   * 100
   */
  usedComputeResource?: number;
  /**
   * @example
   * 1024
   */
  usedDocSize?: number;
  /**
   * @example
   * 100
   */
  usedQps?: number;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      qps: 'qps',
      spec: 'spec',
      usedComputeResource: 'usedComputeResource',
      usedDocSize: 'usedDocSize',
      usedQps: 'usedQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      qps: 'number',
      spec: 'string',
      usedComputeResource: 'number',
      usedDocSize: 'number',
      usedQps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResultSchemaIndexSortConfig extends $dara.Model {
  /**
   * @remarks
   * The sort method. Valid values:
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

export class CreateAppResponseBodyResultSchemaIndexes extends $dara.Model {
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

export class CreateAppResponseBodyResultSchemaTtlField extends $dara.Model {
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

export class CreateAppResponseBodyResultSchema extends $dara.Model {
  /**
   * @remarks
   * The sort configurations.
   */
  indexSortConfig?: CreateAppResponseBodyResultSchemaIndexSortConfig[];
  /**
   * @remarks
   * The index schema.
   */
  indexes?: CreateAppResponseBodyResultSchemaIndexes;
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
   * The name of the level-1 routing field.
   * 
   * @example
   * field1
   */
  routeField?: string;
  /**
   * @remarks
   * The name of the level-2 routing field. This parameter takes effect only when the routeFieldValues parameter is configured. By default, the wide-table primary key field is used as the level-2 routing field.
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

export class CreateAppResponseBodyResultSchemasIndexSortConfig extends $dara.Model {
  /**
   * @remarks
   * The sort method. Valid values:
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

export class CreateAppResponseBodyResultSchemasIndexes extends $dara.Model {
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

export class CreateAppResponseBodyResultSchemasTtlField extends $dara.Model {
  /**
   * @remarks
   * The name of the document time field.
   * 
   * @example
   * fIeld1
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

export class CreateAppResponseBodyResultSchemas extends $dara.Model {
  /**
   * @remarks
   * The sort configurations.
   */
  indexSortConfig?: CreateAppResponseBodyResultSchemasIndexSortConfig[];
  /**
   * @remarks
   * The index schema.
   */
  indexes?: CreateAppResponseBodyResultSchemasIndexes;
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

export class CreateAppResponseBodyResultSecondRanks extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
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
   * default
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

export class CreateAppResponseBodyResultSummariesMeta extends $dara.Model {
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

export class CreateAppResponseBodyResultSummaries extends $dara.Model {
  /**
   * @remarks
   * The collection of summary configurations.
   */
  meta?: CreateAppResponseBodyResultSummariesMeta[];
  /**
   * @remarks
   * The group name.
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
      meta: { 'type': 'array', 'itemType': CreateAppResponseBodyResultSummariesMeta },
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

export class CreateAppResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The capability opening configurations.
   */
  cluster?: CreateAppResponseBodyResultCluster;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * vpc_sh_domain_1
   * 
   * @deprecated
   */
  clusterName?: string;
  configItems?: { [key: string]: any }[];
  created?: number;
  /**
   * @remarks
   * The configurations of the data sources.
   */
  dataSources?: CreateAppResponseBodyResultDataSources[];
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * My application
   */
  description?: string;
  /**
   * @remarks
   * The industry model module.
   */
  domain?: CreateAppResponseBodyResultDomain;
  /**
   * @remarks
   * The default display fields.
   */
  fetchFields?: string[];
  /**
   * @remarks
   * The configurations of rough sort.
   */
  firstRanks?: CreateAppResponseBodyResultFirstRanks[];
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 12888
   */
  id?: string;
  /**
   * @remarks
   * The descriptions of the LLM table fields.
   * 
   * @example
   * { "name": "longyu_llm_1", "schemas": [], "interpretations": [ { "table": "table1", "fields": [ { "name": "field1", "interpretation": "Title" }, { "name": "field2", "interpretation": "Number" } ] } ] }
   */
  interpretations?: { [key: string]: any }[];
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
   * The percentage for the data import progress.
   * 
   * @example
   * 100
   */
  progressPercent?: number;
  /**
   * @remarks
   * The prompt configurations
   */
  prompts?: { [key: string]: any }[];
  /**
   * @remarks
   * The query intent understanding configurations.
   */
  queryProcessors?: CreateAppResponseBodyResultQueryProcessors[];
  /**
   * @remarks
   * The quota.
   */
  quota?: CreateAppResponseBodyResultQuota;
  /**
   * @remarks
   * The single-table schema.
   */
  schema?: CreateAppResponseBodyResultSchema;
  /**
   * @remarks
   * The multi-table schema.
   */
  schemas?: CreateAppResponseBodyResultSchemas[];
  /**
   * @remarks
   * The configurations of fine sort.
   */
  secondRanks?: CreateAppResponseBodyResultSecondRanks[];
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   OK
   * *   STOPPED
   * *   FROZEN
   * *   INITIALIZING
   * *   UNAVAILABLE
   * *   DATA_WAITING
   * *   DATA_PREPARING
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The summary configurations of search results.
   */
  summaries?: CreateAppResponseBodyResultSummaries[];
  switchTime?: number;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard
   * *   enhanced
   * 
   * @example
   * standard
   */
  type?: string;
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      clusterName: 'clusterName',
      configItems: 'configItems',
      created: 'created',
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
      switchTime: 'switchTime',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: CreateAppResponseBodyResultCluster,
      clusterName: 'string',
      configItems: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      created: 'number',
      dataSources: { 'type': 'array', 'itemType': CreateAppResponseBodyResultDataSources },
      description: 'string',
      domain: CreateAppResponseBodyResultDomain,
      fetchFields: { 'type': 'array', 'itemType': 'string' },
      firstRanks: { 'type': 'array', 'itemType': CreateAppResponseBodyResultFirstRanks },
      id: 'string',
      interpretations: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
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
      switchTime: 'number',
      type: 'string',
      updated: 'number',
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

export class CreateAppResponseBody extends $dara.Model {
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
   * The response parameters.
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

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

