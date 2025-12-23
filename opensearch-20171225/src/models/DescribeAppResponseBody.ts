// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppResponseBodyResultCluster extends $dara.Model {
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

export class DescribeAppResponseBodyResultDataSources extends $dara.Model {
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

export class DescribeAppResponseBodyResultDomainFunctions extends $dara.Model {
  /**
   * @remarks
   * The structure of the algorithm.
   * 
   * @example
   * []
   */
  algo?: string[];
  /**
   * @remarks
   * The information about the layout.
   * 
   * @example
   * []
   */
  qp?: string[];
  /**
   * @remarks
   * The description of each feature.
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

export class DescribeAppResponseBodyResultDomain extends $dara.Model {
  /**
   * @remarks
   * The type of the edition. Valid values: standard, advance, and enhanced. A value of standard indicates a standard edition. A value of advance indicates an advanced edition which is of an old version. New version is not supported for this edition. A value of enhanced indicates an advanced edition which is of a new version.
   * 
   * @example
   * -
   */
  category?: string;
  /**
   * @remarks
   * The search results.
   * 
   * @example
   * {}
   */
  functions?: DescribeAppResponseBodyResultDomainFunctions;
  /**
   * @remarks
   * The name (in English).
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

export class DescribeAppResponseBodyResultFirstRanks extends $dara.Model {
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
   * abc
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
   * STRUCT: The content of the expression is a structure. STRING (default): custom formula.
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

export class DescribeAppResponseBodyResultQueryProcessors extends $dara.Model {
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
   * Then index range.
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

export class DescribeAppResponseBodyResultQuota extends $dara.Model {
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
   * The number of search requests per second. You are charged based on the number of search requests per second in the earlier billing model.
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

export class DescribeAppResponseBodyResultSchemaIndexSortConfig extends $dara.Model {
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

export class DescribeAppResponseBodyResultSchemaIndexes extends $dara.Model {
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

export class DescribeAppResponseBodyResultSchemaTtlField extends $dara.Model {
  /**
   * @remarks
   * The document time field.
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

export class DescribeAppResponseBodyResultSchema extends $dara.Model {
  /**
   * @remarks
   * The sort configurations.
   */
  indexSortConfig?: DescribeAppResponseBodyResultSchemaIndexSortConfig[];
  /**
   * @remarks
   * The index schema.
   */
  indexes?: DescribeAppResponseBodyResultSchemaIndexes;
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
   * The hot values of the level-1 routing field.
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

export class DescribeAppResponseBodyResultSchemasIndexSortConfig extends $dara.Model {
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

export class DescribeAppResponseBodyResultSchemasIndexes extends $dara.Model {
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

export class DescribeAppResponseBodyResultSchemasTtlField extends $dara.Model {
  /**
   * @remarks
   * The document time field.
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

export class DescribeAppResponseBodyResultSchemas extends $dara.Model {
  /**
   * @remarks
   * The sort configurations.
   */
  indexSortConfig?: DescribeAppResponseBodyResultSchemasIndexSortConfig[];
  /**
   * @remarks
   * The index schema.
   */
  indexes?: DescribeAppResponseBodyResultSchemasIndexes;
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
   * The hot values of the level-1 routing field.
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

export class DescribeAppResponseBodyResultSecondRanks extends $dara.Model {
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

export class DescribeAppResponseBodyResultSummariesMeta extends $dara.Model {
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

export class DescribeAppResponseBodyResultSummaries extends $dara.Model {
  /**
   * @remarks
   * The summary configurations.
   */
  meta?: DescribeAppResponseBodyResultSummariesMeta[];
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
      meta: { 'type': 'array', 'itemType': DescribeAppResponseBodyResultSummariesMeta },
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

export class DescribeAppResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the version is automatically switched to an online version.
   * 
   * @example
   * true
   */
  autoSwitch?: boolean;
  /**
   * @remarks
   * The capability opening configurations.
   */
  cluster?: DescribeAppResponseBodyResultCluster;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * -
   */
  clusterName?: string;
  /**
   * @remarks
   * The configurations of the data sources.
   */
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
   * The industry type. Valid values:
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
  /**
   * @remarks
   * The configurations of rough sort.
   */
  firstRanks?: DescribeAppResponseBodyResultFirstRanks[];
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 100303063
   */
  id?: string;
  /**
   * @remarks
   * The industry model module.
   * 
   * @example
   * [ { "table": "table1", "fields": [ { "name": "field1", "interpretation": "Title" }, { "name": "field2", "interpretation": "Number" } ] } ]
   */
  interpretations?: { [key: string]: any };
  /**
   * @remarks
   * Indices whether the version is an online version.
   * 
   * @example
   * True
   */
  isCurrent?: boolean;
  /**
   * @remarks
   * The progress of data import, in percentage. For example, a value of 83 indicates 83%.
   * 
   * @example
   * 100
   */
  progressPercent?: number;
  /**
   * @remarks
   * The prompt configurations.
   */
  prompts?: { [key: string]: any }[];
  /**
   * @remarks
   * The query intent understanding configurations.
   */
  queryProcessors?: DescribeAppResponseBodyResultQueryProcessors[];
  /**
   * @remarks
   * The quota information.
   * 
   * @example
   * {}
   */
  quota?: DescribeAppResponseBodyResultQuota;
  /**
   * @remarks
   * The schema of the application.
   * 
   * @example
   * {}
   */
  schema?: DescribeAppResponseBodyResultSchema;
  /**
   * @remarks
   * The multi-table schema.
   */
  schemas?: DescribeAppResponseBodyResultSchemas[];
  /**
   * @remarks
   * The configurations of fine sort.
   */
  secondRanks?: DescribeAppResponseBodyResultSecondRanks[];
  /**
   * @remarks
   * The status of the version. Valid values:
   * 
   * *   ok: The version is normal.
   * *   stopped: The version is suspended.
   * *   frozen: The version is frozen.
   * *   initializing: The version is being initialized.
   * *   unavailable: The version is invalid.
   * *   data_waiting: Data is to be initialized.
   * *   data_preparing: Data is being initialized.
   * 
   * @example
   * ok
   */
  status?: string;
  /**
   * @remarks
   * The summary configurations of search results.
   */
  summaries?: DescribeAppResponseBodyResultSummaries[];
  /**
   * @remarks
   * The edition type. Valid values:
   * 
   * *   standard: a standard edition application.
   * *   advance: an advanced edition application of an old version. New versions are not supported for this edition.
   * *   enhanced: an advanced edition application of a new version.
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

export class DescribeAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33477D76-C380-1D84-A4AD-043F52876CB1
   */
  requestId?: string;
  /**
   * @remarks
   * The version information.
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

