// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigValue } from "./ConfigValue";


export class ModifyIndexRequestDataSourceInfoConfig extends $dara.Model {
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
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  format?: string;
  /**
   * @remarks
   * The namespace. This parameter is applicable to the SARO data source used in the intranet of Alibaba Group.
   * 
   * @example
   * test-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * /opensearch/oss.json
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. Example: ds=20180102.
   * 
   * @example
   * ds=20230114
   */
  partition?: string;
  /**
   * @remarks
   * The file path in the Apsara File Storage for HDFS file system.
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
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * item
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

export class ModifyIndexRequestDataSourceInfoSaroConfig extends $dara.Model {
  /**
   * @remarks
   * The namespace to which the SARO data source belongs.
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

export class ModifyIndexRequestDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic full indexing feature.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The reindexing method. Valid values: api: API data source. indexRecover: data recovery by using indexing.
   * 
   * @example
   * api
   */
  buildMode?: string;
  /**
   * @remarks
   * The configurations of the MaxCompute data source.
   */
  config?: ModifyIndexRequestDataSourceInfoConfig;
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
   * The offline deployment name of the data source.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the index version from which data is restored.
   * 
   * @example
   * 4
   */
  generation?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-35t3n1yuj0d_index_1
   */
  name?: string;
  ossDataPath?: string;
  partition?: string;
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
  saroConfig?: ModifyIndexRequestDataSourceInfoSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, swift, saro, oss, and unKnow.
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
   * The maximum number of full indexes that can be concurrently built.
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
   * The name of the configuration file.
   * 
   * @example
   * ha-cn-35t3r02iq03@ha-cn-35t3r02iq03_test_api@hz_pre_vpc_domain_1@test_api@index_config_v1
   */
  clusterConfigName?: string;
  /**
   * @remarks
   * The information about the offline configuration.
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
   * The name of the data source.
   * 
   * @example
   * ha-cn-35t3n1yuj0d_index_1
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source, which is required for the new version of OpenSearch Vector Search Edition.
   */
  dataSourceInfo?: ModifyIndexRequestDataSourceInfo;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
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
   * The number of shards.
   * 
   * @example
   * 2
   */
  partition?: number;
  /**
   * @remarks
   * The push mode of the configuration. By default, only the configuration is pushed.
   * 
   * @example
   * PUSH_ONLY
   */
  pushMode?: string;
  /**
   * @remarks
   * Specifies whether to check the validity of input parameters. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**: checks only the validity of input parameters.
   * *   **false**: checks the validity of input parameters and creates an attribution configuration.
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

