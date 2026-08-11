// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTableRequestDataProcessConfigParamsSrcFieldConfig extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket name.
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

export class ModifyTableRequestDataProcessConfigParams extends $dara.Model {
  /**
   * @remarks
   * The vectorization information source.
   */
  srcFieldConfig?: ModifyTableRequestDataProcessConfigParamsSrcFieldConfig;
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
      srcFieldConfig: ModifyTableRequestDataProcessConfigParamsSrcFieldConfig,
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

export class ModifyTableRequestDataProcessConfig extends $dara.Model {
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
   * The model configuration information.
   */
  params?: ModifyTableRequestDataProcessConfigParams;
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
      params: ModifyTableRequestDataProcessConfigParams,
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

export class ModifyTableRequestDataSourceConfig extends $dara.Model {
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
   * test_bucket
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
   * The OSS file path.
   * 
   * @example
   * /opensearch/test.txt
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition information.
   * 
   * @example
   * ds=20231220
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
   * behavior
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

export class ModifyTableRequestDataSource extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto index rebuilding is enabled.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The datasource config.
   */
  config?: ModifyTableRequestDataSourceConfig;
  /**
   * @remarks
   * The timestamp for incremental data tracking.
   * 
   * @example
   * 1715160176
   */
  dataTimeSec?: number;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: ModifyTableRequestDataSourceConfig,
      dataTimeSec: 'number',
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

export class ModifyTableRequestVectorIndexAdvanceParams extends $dara.Model {
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

export class ModifyTableRequestVectorIndex extends $dara.Model {
  /**
   * @remarks
   * The index structure configuration.
   */
  advanceParams?: ModifyTableRequestVectorIndexAdvanceParams;
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
   * The name of the index structure.
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
      advanceParams: ModifyTableRequestVectorIndexAdvanceParams,
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

export class ModifyTableRequest extends $dara.Model {
  /**
   * @remarks
   * The field processing configuration.
   */
  dataProcessConfig?: ModifyTableRequestDataProcessConfig[];
  /**
   * @remarks
   * The datasource config.
   */
  dataSource?: ModifyTableRequestDataSource;
  /**
   * @remarks
   * The field map collection.
   */
  fieldSchema?: { [key: string]: string };
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
   * If rawSchema is provided, it is used directly as the HA3 schema structure without manual assembly.
   * 
   * @example
   * {}
   */
  rawSchema?: string;
  /**
   * @remarks
   * The index structure.
   */
  vectorIndex?: ModifyTableRequestVectorIndex[];
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
      dataSource: 'dataSource',
      fieldSchema: 'fieldSchema',
      partitionCount: 'partitionCount',
      primaryKey: 'primaryKey',
      rawSchema: 'rawSchema',
      vectorIndex: 'vectorIndex',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessConfig: { 'type': 'array', 'itemType': ModifyTableRequestDataProcessConfig },
      dataSource: ModifyTableRequestDataSource,
      fieldSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitionCount: 'number',
      primaryKey: 'string',
      rawSchema: 'string',
      vectorIndex: { 'type': 'array', 'itemType': ModifyTableRequestVectorIndex },
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

