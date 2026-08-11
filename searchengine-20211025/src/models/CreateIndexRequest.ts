// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexRequestDataSourceInfoConfig extends $dara.Model {
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
   * The OSS bucket.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The data catalog ID of the DLF data source.
   * 
   * @example
   * test-catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The database of the DLF data source.
   * 
   * @example
   * test-database
   */
  database?: string;
  /**
   * @remarks
   * The endpoint of the ODPS or OSS data source.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The format of the OSS file.
   * 
   * - ha3
   * 
   * - json
   * 
   * @example
   * ha3
   */
  format?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The path of the OSS file.
   * 
   * @example
   * /opensearch/oss.json
   */
  ossPath?: string;
  /**
   * @remarks
   * This parameter is required if the data source type is ODPS.
   * 
   * @example
   * ds=20230114
   */
  partition?: string;
  /**
   * @remarks
   * The path of the HDFS data source.
   * 
   * @example
   * test-hdfs-path
   */
  path?: string;
  /**
   * @remarks
   * The name of the ODPS project.
   * 
   * @example
   * bbt_algo_pai
   */
  project?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * bbt_rec_swing_u2i2i_score_be_v1
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
   * test-tag
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
   * The namespace of the Saro data source. This feature is available only for internal use.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the Saro data table. This feature is available only for internal use.
   * 
   * @example
   * tableA
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
   * Specifies whether to automatically trigger a full indexing.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * ODPS-related configurations.
   */
  config?: CreateIndexRequestDataSourceInfoConfig;
  /**
   * @remarks
   * The UNIX timestamp for incremental data.
   * 
   * @example
   * 1709715164
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The offline data center.
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
   * ha-cn-35t3n1y****_index_1
   */
  name?: string;
  /**
   * @remarks
   * The concurrency for full data processing.
   * 
   * @example
   * 2
   */
  processParallelNum?: number;
  /**
   * @remarks
   * The number of resources for data updates.
   * 
   * @example
   * 4
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configuration of the Saro data source.
   */
  saroConfig?: CreateIndexRequestDataSourceInfoSaroConfig;
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
   * The type of the data source. Valid values:
   * 
   * - odps
   * 
   * - swift
   * 
   * - saro
   * 
   * - oss
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
   * The concurrency for full index building.
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
   * ha-cn-35t3n1y****_index_1
   */
  dataSource?: string;
  /**
   * @remarks
   * Information about the data source. This parameter is required for new versions of Vector Search Edition.
   */
  dataSourceInfo?: CreateIndexRequestDataSourceInfo;
  /**
   * @remarks
   * The data center of the data source.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The extended field configuration.
   * 
   * - key: The field type. Valid values: \\`vector\\` (vector field), \\`embeding\\` (field that requires embedding), and \\`description\\` (description field).
   * 
   * - value: The name of the field in the schema, such as \\`["field_name"]\\`.
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
   * The concurrency for full index merging.
   * 
   * @example
   * 2
   */
  mergeParallelNum?: number;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * index_1
   */
  name?: string;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 2
   */
  partition?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run. A dry run only checks whether the data source is valid. Valid values:
   * 
   * - true
   * 
   * - false
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

