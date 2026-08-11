// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableResponseBodyResultDataProcessConfigParamsSrcFieldConfig extends $dara.Model {
  /**
   * @remarks
   * OSS Bucket
   * 
   * @example
   * test
   */
  ossBucket?: string;
  /**
   * @remarks
   * OSS region endpoint.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * Cloud account ID
   * 
   * @example
   * uid
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

export class GetTableResponseBodyResultDataProcessConfigParams extends $dara.Model {
  /**
   * @remarks
   * Vectorization information source
   */
  srcFieldConfig?: GetTableResponseBodyResultDataProcessConfigParamsSrcFieldConfig;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * image
   */
  vectorModal?: string;
  /**
   * @remarks
   * Vectorization model
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
      srcFieldConfig: GetTableResponseBodyResultDataProcessConfigParamsSrcFieldConfig,
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

export class GetTableResponseBodyResultDataProcessConfig extends $dara.Model {
  /**
   * @remarks
   * Target field
   * 
   * @example
   * source_image_vector
   */
  dstField?: string;
  /**
   * @remarks
   * Field processing method (copy: copies the source field to the target field, vectorize: vectorizes the source field using a model and stores the vector in the target field)
   * 
   * @example
   * vectorize
   */
  operator?: string;
  /**
   * @remarks
   * Model configuration information
   */
  params?: GetTableResponseBodyResultDataProcessConfigParams;
  /**
   * @remarks
   * Source field
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
      params: GetTableResponseBodyResultDataProcessConfigParams,
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

export class GetTableResponseBodyResultDataSourceConfig extends $dara.Model {
  /**
   * @remarks
   * AK
   * 
   * @example
   * ak
   */
  accessKey?: string;
  /**
   * @remarks
   * AS
   * 
   * @example
   * as
   */
  accessSecret?: string;
  /**
   * @remarks
   * OSS namespace
   * 
   * @example
   * heytea-ops-oss
   */
  bucket?: string;
  /**
   * @remarks
   * ODPS-related
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * saro-related
   * 
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * OSS file path
   * 
   * @example
   * /opensearch_index_data/sift_oss_test.data
   */
  ossPath?: string;
  /**
   * @remarks
   * Partition information
   * 
   * @example
   * ds=20220808
   */
  partition?: string;
  /**
   * @remarks
   * HDFS-related
   * 
   * @example
   * vendor/sebastian/comparator/src/exceptions
   */
  path?: string;
  /**
   * @remarks
   * ODPS data source project name
   * 
   * @example
   * dp_pdm_marketing_prod
   */
  project?: string;
  /**
   * @remarks
   * saro/ODPS data source table name
   * 
   * @example
   * test_add
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyResultDataSource extends $dara.Model {
  /**
   * @remarks
   * Whether to automatically rebuild the index
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * Data source configuration
   */
  config?: GetTableResponseBodyResultDataSourceConfig;
  /**
   * @remarks
   * Incremental data timestamp
   * 
   * @example
   * 1715160176
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * Data source type: only supports three types: odps, swift, and oss (odps, swift, saro, oss, unKnow)
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
      config: GetTableResponseBodyResultDataSourceConfig,
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

export class GetTableResponseBodyResultVectorIndexAdvanceParams extends $dara.Model {
  /**
   * @remarks
   * Index building parameters
   * 
   * @example
   * {
   *   "proxima.qc.builder.quantizer_class": "Int8QuantizerConverter",
   *   "proxima.qc.builder.quantize_by_centroid": true,
   *   "proxima.qc.builder.optimizer_class": "BruteForceBuilder",
   *   "proxima.qc.builder.thread_count": 10,
   *   "proxima.qc.builder.optimizer_params": {
   *     "proxima.linear.builder.column_major_order": true
   *   },
   *   "proxima.qc.builder.store_original_features": false,
   *   "proxima.qc.builder.train_sample_count": 3000000,
   *   "proxima.qc.builder.train_sample_ratio": 0.5
   * }
   */
  buildIndexParams?: string;
  /**
   * @remarks
   * Linear build threshold
   * 
   * @example
   * 5000
   */
  linearBuildThreshold?: string;
  /**
   * @remarks
   * Minimum number of recall candidates
   * 
   * @example
   * 20000
   */
  minScanDocCnt?: string;
  /**
   * @remarks
   * Index search parameters
   * 
   * @example
   * {"proxima.qc.searcher.scan_ratio":0.01}
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

export class GetTableResponseBodyResultVectorIndex extends $dara.Model {
  /**
   * @remarks
   * Index structure configuration
   */
  advanceParams?: GetTableResponseBodyResultVectorIndexAdvanceParams;
  /**
   * @remarks
   * Vector dimension
   * 
   * @example
   * 128
   */
  dimension?: string;
  /**
   * @remarks
   * Distance type
   * 
   * @example
   * SquaredEuclidean
   */
  distanceType?: string;
  /**
   * @remarks
   * Index structure name
   * 
   * @example
   * test_odps
   */
  indexName?: string;
  /**
   * @remarks
   * Namespace field
   * 
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Sparse vector index field
   * 
   * @example
   * sparse_indices
   */
  sparseIndexField?: string;
  /**
   * @remarks
   * Sparse vector value field
   * 
   * @example
   * sparse_values
   */
  sparseValueField?: string;
  /**
   * @remarks
   * Vector field
   * 
   * @example
   * source_image_vector
   */
  vectorField?: string;
  /**
   * @remarks
   * Vector index algorithm
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
      advanceParams: GetTableResponseBodyResultVectorIndexAdvanceParams,
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

export class GetTableResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Field processing configuration
   */
  dataProcessConfig?: GetTableResponseBodyResultDataProcessConfig[];
  /**
   * @remarks
   * Number of data update resources
   * 
   * @example
   * 1
   */
  dataProcessorCount?: number;
  /**
   * @remarks
   * Data source configuration
   */
  dataSource?: GetTableResponseBodyResultDataSource;
  /**
   * @remarks
   * Field map collection, key: field name, value: field type
   */
  fieldSchema?: { [key: string]: string };
  /**
   * @remarks
   * Index name
   * 
   * @example
   * test_oss
   */
  name?: string;
  /**
   * @remarks
   * Number of data shards
   * 
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @remarks
   * Primary key field
   * 
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @remarks
   * If the user provides rawSchema, it is used directly as the HA3 schema structure without manual assembly
   * 
   * @example
   * {}
   */
  rawSchema?: string;
  /**
   * @remarks
   * Index table status (NEW, PUBLISH, IN_USE: normal status after the recall engine version is created successfully, NOT_USE, STOP_USE, RESTORE_USE, FAIL: status when a new version of the vector retrieval version fails to create an index for the first time)
   * 
   * @example
   * IN_USE
   */
  status?: string;
  /**
   * @remarks
   * Index structure
   */
  vectorIndex?: GetTableResponseBodyResultVectorIndex[];
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
      status: 'status',
      vectorIndex: 'vectorIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessConfig: { 'type': 'array', 'itemType': GetTableResponseBodyResultDataProcessConfig },
      dataProcessorCount: 'number',
      dataSource: GetTableResponseBodyResultDataSource,
      fieldSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      partitionCount: 'number',
      primaryKey: 'string',
      rawSchema: 'string',
      status: 'string',
      vectorIndex: { 'type': 'array', 'itemType': GetTableResponseBodyResultVectorIndex },
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

export class GetTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * Response result
   */
  result?: GetTableResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetTableResponseBodyResult,
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

