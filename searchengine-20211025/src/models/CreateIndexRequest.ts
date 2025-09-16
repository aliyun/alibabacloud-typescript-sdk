// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexRequestDataSourceInfoConfig extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * L***p
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * 5**9a6
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute or Object Storage Service (OSS) data source.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  format?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * test-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The path of the OSS object.
   * 
   * @example
   * /opensearch/oss.json
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. This parameter is required if type is set to odps.
   * 
   * @example
   * ds=20230114
   */
  partition?: string;
  /**
   * @remarks
   * The path of the Apsara File Storage for HDFS data source.
   * 
   * @example
   * test-hdfs-path
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * bbt_algo_pai
   */
  project?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * bbt_rec_swing_u2i2i_score_be_v1
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
      format: 'format',
      namespace: 'namespace',
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
      namespace: 'string',
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

export class CreateIndexRequestDataSourceInfoSaroConfig extends $dara.Model {
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * flink-test-fjx-default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * device_event_shy_summary_
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic full indexing.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The information about the MaxCompute data source.
   */
  config?: CreateIndexRequestDataSourceInfoConfig;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
   * 
   * @example
   * 1709715164
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-35t3n1yuj0d_index_1
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently processed.
   * 
   * @example
   * 2
   */
  processParallelNum?: number;
  /**
   * @remarks
   * The number of resources used for data update.
   * 
   * @example
   * 4
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: CreateIndexRequestDataSourceInfoSaroConfig;
  scene?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   odps
   * *   swift
   * *   saro
   * *   oss
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
      domain: 'domain',
      name: 'name',
      processParallelNum: 'processParallelNum',
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      scene: 'scene',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: CreateIndexRequestDataSourceInfoConfig,
      dataTimeSec: 'number',
      domain: 'string',
      name: 'string',
      processParallelNum: 'number',
      processPartitionCount: 'number',
      saroConfig: CreateIndexRequestDataSourceInfoSaroConfig,
      scene: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.saroConfig && typeof (this.saroConfig as any).validate === 'function') {
      (this.saroConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently built.
   * 
   * @example
   * 2
   */
  buildParallelNum?: number;
  /**
   * @remarks
   * The index schema.
   * 
   * @example
   * {\\"summarys\\":{\\"summary_fields\\":[\\"id\\"]},\\"indexs\\":[{\\"index_name\\":\\"index_id\\",\\"index_type\\":\\"PRIMARYKEY64\\",\\"index_fields\\":\\"id\\",\\"has_primary_key_attribute\\":true,\\"is_primary_key_sorted\\":false}],\\"attributes\\":[\\"id\\"],\\"fields\\":[{\\"field_name\\":\\"id\\",\\"field_type\\":\\"UINT16\\"}],\\"table_name\\":\\"index_2\\"}
   */
  content?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test1
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source. This parameter is required for an OpenSearch Vector Search Edition instance of the new version.
   */
  dataSourceInfo?: CreateIndexRequestDataSourceInfo;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The extended content of the field configuration. key specifies the vector field and the field that requires embedding.
   * 
   * @example
   * {
   *         "vector":
   *         [
   *             "source_image_vector"
   *         ],
   *         "embeding":
   *         [
   *             "source_image"
   *         ],
   *         "description":
   *         []
   *     }
   */
  extend?: { [key: string]: any };
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently merged.
   * 
   * @example
   * 2
   */
  mergeParallelNum?: number;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 20211202
   */
  partition?: number;
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
      buildParallelNum: 'buildParallelNum',
      content: 'content',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      domain: 'domain',
      extend: 'extend',
      mergeParallelNum: 'mergeParallelNum',
      name: 'name',
      partition: 'partition',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildParallelNum: 'number',
      content: 'string',
      dataSource: 'string',
      dataSourceInfo: CreateIndexRequestDataSourceInfo,
      domain: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mergeParallelNum: 'number',
      name: 'string',
      partition: 'number',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

