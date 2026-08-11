// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableRequestDataProcessConfigParamsSrcFieldConfig extends $dara.Model {
  /**
   * @remarks
   * OSSBucket
   * 
   * @example
   * test-bucket
   */
  ossBucket?: string;
  /**
   * @remarks
   * The OSS region endpoint.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1062017779051424
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucket: 'ossBucket',
      ossEndpoint: 'ossEndpoint',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucket: 'string',
      ossEndpoint: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataProcessConfigParams extends $dara.Model {
  /**
   * @remarks
   * The vectorization information source.
   */
  srcFieldConfig?: CreateTableRequestDataProcessConfigParamsSrcFieldConfig;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * image
   */
  vectorModal?: string;
  /**
   * @remarks
   * The vectorization model.
   * 
   * @example
   * clip
   */
  vectorModel?: string;
  static names(): { [key: string]: string } {
    return {
      srcFieldConfig: 'srcFieldConfig',
      vectorModal: 'vectorModal',
      vectorModel: 'vectorModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcFieldConfig: CreateTableRequestDataProcessConfigParamsSrcFieldConfig,
      vectorModal: 'string',
      vectorModel: 'string',
    };
  }

  validate() {
    if(this.srcFieldConfig && typeof (this.srcFieldConfig as any).validate === 'function') {
      (this.srcFieldConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The destination field.
   * 
   * @example
   * source_image_vector
   */
  dstField?: string;
  /**
   * @remarks
   * The field processing method. Valid values:
   * - copy: copies the source field to the destination field.
   * - vectorize: vectorizes the source field by using a model and stores the vector in the destination field.
   * 
   * @example
   * vectorize
   */
  operator?: string;
  /**
   * @remarks
   * The model configuration.
   */
  params?: CreateTableRequestDataProcessConfigParams;
  /**
   * @remarks
   * The source field.
   * 
   * @example
   * source_image
   */
  srcField?: string;
  static names(): { [key: string]: string } {
    return {
      dstField: 'dstField',
      operator: 'operator',
      params: 'params',
      srcField: 'srcField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstField: 'string',
      operator: 'string',
      params: CreateTableRequestDataProcessConfigParams,
      srcField: 'string',
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataSourceConfig extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the ODPS data source.
   * 
   * @example
   * L***p
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the ODPS data source.
   * 
   * @example
   * 5**9a6
   */
  accessSecret?: string;
  /**
   * @remarks
   * oss bucket
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The catalog name of the DLF data source.
   * 
   * @example
   * test_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The database of the DLF data source.
   * 
   * @example
   * opensearch_db
   */
  database?: string;
  /**
   * @remarks
   * The access endpoint.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The file format type.
   * 
   * @example
   * ha3
   * json
   */
  format?: string;
  /**
   * @remarks
   * The OSS data source path.
   * 
   * @example
   * /opensearch/test.txt
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition. This parameter is required when the data source is ODPS.
   * 
   * @example
   * ds=20220713
   */
  partition?: string;
  /**
   * @remarks
   * The relative path.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The project name of the ODPS data source.
   * 
   * @example
   * test_project
   */
  project?: string;
  /**
   * @remarks
   * The table name of the ODPS or DLF data source.
   * 
   * @example
   * test56
   */
  table?: string;
  /**
   * @remarks
   * The table format of the DLF data source.
   * 
   * @example
   * paimon
   * lance
   * object
   */
  tableFormat?: string;
  /**
   * @remarks
   * The tag of the DLF data source.
   * 
   * @example
   * test
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      format: 'format',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tableFormat: 'tableFormat',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      format: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tableFormat: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestDataSource extends $dara.Model {
  /**
   * @remarks
   * Specifies whether auto index rebuilding is enabled.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The datasource config.
   */
  config?: CreateTableRequestDataSourceConfig;
  /**
   * @remarks
   * The timestamp for incremental data tracking.
   * 
   * @example
   * 1715160176
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The data source type. Only odps, swift, and oss are supported. Valid values: odps, swift, saro, oss, and unKnow.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: CreateTableRequestDataSourceConfig,
      dataTimeSec: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestVectorIndexAdvanceParams extends $dara.Model {
  /**
   * @remarks
   * The index building parameters.
   * 
   * @example
   * {}
   */
  buildIndexParams?: string;
  /**
   * @remarks
   * The threshold for linear building.
   * 
   * @example
   * 5000
   */
  linearBuildThreshold?: string;
  /**
   * @remarks
   * The minimum number of candidate documents for recall.
   * 
   * @example
   * 20000
   */
  minScanDocCnt?: string;
  /**
   * @remarks
   * The index search parameters.
   * 
   * @example
   * {}
   */
  searchIndexParams?: string;
  static names(): { [key: string]: string } {
    return {
      buildIndexParams: 'buildIndexParams',
      linearBuildThreshold: 'linearBuildThreshold',
      minScanDocCnt: 'minScanDocCnt',
      searchIndexParams: 'searchIndexParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildIndexParams: 'string',
      linearBuildThreshold: 'string',
      minScanDocCnt: 'string',
      searchIndexParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestVectorIndex extends $dara.Model {
  /**
   * @remarks
   * The index structure configuration.
   */
  advanceParams?: CreateTableRequestVectorIndexAdvanceParams;
  /**
   * @remarks
   * The vector dimensions.
   * 
   * @example
   * 128
   */
  dimension?: string;
  /**
   * @remarks
   * The distance type.
   * 
   * @example
   * SquaredEuclidean
   */
  distanceType?: string;
  /**
   * @remarks
   * The index structure name.
   * 
   * @example
   * test_index
   */
  indexName?: string;
  /**
   * @remarks
   * The namespace field.
   * 
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The sparse vector index field.
   * 
   * @example
   * sparse_indices
   */
  sparseIndexField?: string;
  /**
   * @remarks
   * The sparse vector value field.
   * 
   * @example
   * sparse_values
   */
  sparseValueField?: string;
  /**
   * @remarks
   * The vector field.
   * 
   * @example
   * source_image_vector
   */
  vectorField?: string;
  /**
   * @remarks
   * The vector index algorithm.
   * 
   * @example
   * Qc
   */
  vectorIndexType?: string;
  static names(): { [key: string]: string } {
    return {
      advanceParams: 'advanceParams',
      dimension: 'dimension',
      distanceType: 'distanceType',
      indexName: 'indexName',
      namespace: 'namespace',
      sparseIndexField: 'sparseIndexField',
      sparseValueField: 'sparseValueField',
      vectorField: 'vectorField',
      vectorIndexType: 'vectorIndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceParams: CreateTableRequestVectorIndexAdvanceParams,
      dimension: 'string',
      distanceType: 'string',
      indexName: 'string',
      namespace: 'string',
      sparseIndexField: 'string',
      sparseValueField: 'string',
      vectorField: 'string',
      vectorIndexType: 'string',
    };
  }

  validate() {
    if(this.advanceParams && typeof (this.advanceParams as any).validate === 'function') {
      (this.advanceParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequest extends $dara.Model {
  /**
   * @remarks
   * The field processing configuration.
   */
  dataProcessConfig?: CreateTableRequestDataProcessConfig[];
  /**
   * @remarks
   * The number of data update resources.
   * 
   * @example
   * 1
   */
  dataProcessorCount?: number;
  /**
   * @remarks
   * The datasource config.
   */
  dataSource?: CreateTableRequestDataSource;
  /**
   * @remarks
   * The field schema. The key is the field name.
   */
  fieldSchema?: { [key: string]: string };
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * api_index_1
   */
  name?: string;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @remarks
   * The primary key field.
   * 
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @remarks
   * The raw schema. If you specify this parameter, the value is used directly as the HA3 schema structure without manual assembly.
   * 
   * @example
   * {}
   */
  rawSchema?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * videoSearcher
   */
  scene?: string;
  /**
   * @remarks
   * The index structure.
   */
  vectorIndex?: CreateTableRequestVectorIndex[];
  /**
   * @remarks
   * Specifies whether to perform a dry run (only validates whether the data source is valid). Valid values:
   * - true: performs a dry run.
   * - false: does not perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataProcessConfig: 'dataProcessConfig',
      dataProcessorCount: 'dataProcessorCount',
      dataSource: 'dataSource',
      fieldSchema: 'fieldSchema',
      name: 'name',
      partitionCount: 'partitionCount',
      primaryKey: 'primaryKey',
      rawSchema: 'rawSchema',
      scene: 'scene',
      vectorIndex: 'vectorIndex',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessConfig: { 'type': 'array', 'itemType': CreateTableRequestDataProcessConfig },
      dataProcessorCount: 'number',
      dataSource: CreateTableRequestDataSource,
      fieldSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      partitionCount: 'number',
      primaryKey: 'string',
      rawSchema: 'string',
      scene: 'string',
      vectorIndex: { 'type': 'array', 'itemType': CreateTableRequestVectorIndex },
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dataProcessConfig)) {
      $dara.Model.validateArray(this.dataProcessConfig);
    }
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.fieldSchema) {
      $dara.Model.validateMap(this.fieldSchema);
    }
    if(Array.isArray(this.vectorIndex)) {
      $dara.Model.validateArray(this.vectorIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

