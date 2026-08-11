// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigValue } from "./ConfigValue";


export class ModifyIndexRequestDataSourceInfoConfig extends $dara.Model {
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
   * The data catalog ID for DLF data sources.
   * 
   * @example
   * test-catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The database for DLF data sources.
   * 
   * @example
   * test-database
   */
  database?: string;
  /**
   * @remarks
   * The ODPS endpoint.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The OSS file format type. Valid values:
   * - ha3
   * - json.
   * 
   * @example
   * ha3
   */
  format?: string;
  /**
   * @remarks
   * The namespace for saro data sources.
   * 
   * @example
   * test-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The path for OSS data sources.
   * 
   * @example
   * /opensearch/oss.json
   */
  ossPath?: string;
  /**
   * @remarks
   * The ODPS partition. Example: ds=20180102.
   * 
   * @example
   * ds=20230114
   */
  partition?: string;
  /**
   * @remarks
   * The path for HDFS data sources.
   * 
   * @example
   * test-hdfs-path
   */
  path?: string;
  /**
   * @remarks
   * The ODPS data source project name.
   * 
   * @example
   * bbt_algo_pai
   */
  project?: string;
  /**
   * @remarks
   * The table name for saro or ODPS data sources.
   * 
   * @example
   * item
   */
  table?: string;
  /**
   * @remarks
   * The table format for DLF data sources.
   * 
   * @example
   * paimon
   * lance
   * object
   */
  tableFormat?: string;
  /**
   * @remarks
   * The tag for DLF data sources.
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

export class ModifyIndexRequestDataSourceInfoSaroConfig extends $dara.Model {
  /**
   * @remarks
   * The namespace of the saro data source.
   * 
   * @example
   * flink-test-fjx-default
   */
  namespace?: string;
  /**
   * @remarks
   * The saro data table name.
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

export class ModifyIndexRequestDataSourceInfo extends $dara.Model {
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
   * The index rebuild mode. Valid values: api (push data source through API) and indexRecover (recover data source from the index).
   * 
   * @example
   * api
   */
  buildMode?: string;
  /**
   * @remarks
   * The ODPS datasource config.
   */
  config?: ModifyIndexRequestDataSourceInfoConfig;
  /**
   * @remarks
   * The timestamp for incremental data tracking.
   * 
   * @example
   * 1709715164
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The offline deployment.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The generation of the dump table when recovering the data source from the index.
   * 
   * @example
   * 1718698593
   */
  generation?: number;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * ha-cn-pl32rf0****_index_1
   */
  name?: string;
  /**
   * @remarks
   * The file path selected for index rebuilding from an OSS data source.
   * 
   * @example
   * /opensearch/oss.json
   */
  ossDataPath?: string;
  /**
   * @remarks
   * The ODPS data source partition. This parameter is required when the data source type is ODPS.
   * 
   * @example
   * ds=20230114
   */
  partition?: string;
  /**
   * @remarks
   * The number of concurrent full-indexing processes.
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
   * The saro datasource config.
   */
  saroConfig?: ModifyIndexRequestDataSourceInfoSaroConfig;
  /**
   * @remarks
   * The data source type. Valid values: odps, swift, saro, oss, and unKnow.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      buildMode: 'buildMode',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
      domain: 'domain',
      generation: 'generation',
      name: 'name',
      ossDataPath: 'ossDataPath',
      partition: 'partition',
      processParallelNum: 'processParallelNum',
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      buildMode: 'string',
      config: ModifyIndexRequestDataSourceInfoConfig,
      dataTimeSec: 'number',
      domain: 'string',
      generation: 'number',
      name: 'string',
      ossDataPath: 'string',
      partition: 'string',
      processParallelNum: 'number',
      processPartitionCount: 'number',
      saroConfig: ModifyIndexRequestDataSourceInfoSaroConfig,
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

export class ModifyIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent full-indexing build threads.
   * 
   * @example
   * 2
   */
  buildParallelNum?: number;
  /**
   * @remarks
   * The cluster information.
   */
  cluster?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The cluster.json file name.
   * 
   * @example
   * ha-cn-pl32rf0****@a-cn-pl32rf0****_test_api@hz_pre_vpc_domain_1@test_api@index_config_v1
   */
  clusterConfigName?: string;
  /**
   * @remarks
   * The offline configuration information.
   */
  config?: { [key: string]: ConfigValue };
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * {\\"summarys\\":{\\"summary_fields\\":[\\"id\\"]},\\"indexs\\":[{\\"index_name\\":\\"index_id\\",\\"index_type\\":\\"PRIMARYKEY64\\",\\"index_fields\\":\\"id\\",\\"has_primary_key_attribute\\":true,\\"is_primary_key_sorted\\":false}],\\"attributes\\":[\\"id\\"],\\"fields\\":[{\\"field_name\\":\\"id\\",\\"field_type\\":\\"UINT16\\"}],\\"table_name\\":\\"index_2\\"}
   */
  content?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * ha-cn-pl32rf0****_index_1
   */
  dataSource?: string;
  /**
   * @remarks
   * The data source information. This parameter is required for the new version of AISearch.
   */
  dataSourceInfo?: ModifyIndexRequestDataSourceInfo;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * "test"
   */
  description?: string;
  /**
   * @remarks
   * The data source deployment.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The extended content for field configurations. key: vector (vector field), embeding (field requiring embedding), or description (remarks field). value: ["schema field name"].
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
   * The number of concurrent full-indexing merge threads.
   * 
   * @example
   * 2
   */
  mergeParallelNum?: number;
  /**
   * @remarks
   * The data partition.
   * 
   * @example
   * 2
   */
  partition?: number;
  /**
   * @remarks
   * The push configuration mode. Default value: push configuration only.
   * 
   * @example
   * PUSH_ONLY
   */
  pushMode?: string;
  /**
   * @remarks
   * Specifies whether to only validate the input parameters without performing the actual operation. Default value: false.
   * 
   * Valid values:
   * 
   * - **true**: Only validates the parameter validity.
   * 
   * - **false**: Validates the parameter validity and creates the attribution configuration.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      buildParallelNum: 'buildParallelNum',
      cluster: 'cluster',
      clusterConfigName: 'clusterConfigName',
      config: 'config',
      content: 'content',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      description: 'description',
      domain: 'domain',
      extend: 'extend',
      mergeParallelNum: 'mergeParallelNum',
      partition: 'partition',
      pushMode: 'pushMode',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildParallelNum: 'number',
      cluster: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      clusterConfigName: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': ConfigValue },
      content: 'string',
      dataSource: 'string',
      dataSourceInfo: ModifyIndexRequestDataSourceInfo,
      description: 'string',
      domain: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mergeParallelNum: 'number',
      partition: 'number',
      pushMode: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.cluster) {
      $dara.Model.validateMap(this.cluster);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
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

