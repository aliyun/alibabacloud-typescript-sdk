// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTableRequestDataProcessConfigParamsSrcFieldConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test
   */
  ossBucket?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
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

export class ModifyTableRequestDataProcessConfigParams extends $dara.Model {
  /**
   * @remarks
   * The source of the data to be vectorized.
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
   * The method used to process the field. Valid values: copy and vectorize. A value of copy specifies that the value of the source field is copied to the destination field. A value of vectorize specifies that the value of the source field is vectorized by a vectorization model and the output vector is stored in the destination field.
   * 
   * @example
   * vectorize
   */
  operator?: string;
  /**
   * @remarks
   * The information about the model.
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
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * AK
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * AS
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * antsys-shujiang-osstest
   */
  bucket?: string;
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The path of the Object Storage Service (OSS) object.
   * 
   * @example
   * oss://opensearch
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table.
   * 
   * @example
   * ds=20231220
   */
  partition?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * yw_dw_rpt
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * behavior
   */
  table?: string;
  tableFormat?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      ossPath: 'ossPath',
      partition: 'partition',
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
      ossPath: 'string',
      partition: 'string',
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
   * Specifies whether to automatically rebuild the index.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configurations of the data source.
   */
  config?: ModifyTableRequestDataSourceConfig;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
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
   * The minimum number of retrieved candidate sets.
   * 
   * @example
   * 20000
   */
  minScanDocCnt?: string;
  /**
   * @remarks
   * The index retrieval parameters.
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
   * The configurations of the index schema.
   */
  advanceParams?: ModifyTableRequestVectorIndexAdvanceParams;
  /**
   * @remarks
   * The dimension of the vector.
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
   * The name of the index schema.
   * 
   * @example
   * test_api
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
   * The field that stores the indexes of the elements in sparse vectors.
   * 
   * @example
   * sparse_indices
   */
  sparseIndexField?: string;
  /**
   * @remarks
   * The field that stores the elements in sparse vectors.
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
   * The vector retrieval algorithm.
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
   * The configurations about field processing.
   */
  dataProcessConfig?: ModifyTableRequestDataProcessConfig[];
  /**
   * @remarks
   * The configurations of the data source.
   */
  dataSource?: ModifyTableRequestDataSource;
  /**
   * @remarks
   * The fields.
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
   * The instance schema. If this parameter is specified, the parameters about the index are not required.
   * 
   * @example
   * {}
   */
  rawSchema?: string;
  /**
   * @remarks
   * The index schema.
   */
  vectorIndex?: ModifyTableRequestVectorIndex[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The system only checks the validity of the data source. Valid values:
   * 
   * *   true
   * *   false
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

