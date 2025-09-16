// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResultClusterValue } from "./ResultClusterValue";


export class GetIndexResponseBodyResultDataSourceInfoConfig extends $dara.Model {
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
   * ha3test-oss
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
   * TEST_dump_demo_sj_na61hunbu2_share_holo
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * /test_opensearch/sift_oss_test.data
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. Example: ds=20180102.
   * 
   * @example
   * ds=20220713
   */
  partition?: string;
  /**
   * @remarks
   * The file path in the Apsara File Storage for HDFS file system.
   * 
   * @example
   * http://test_opensearch/sift_oss_test.data
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * tisplus_dev
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * dump_odps_demo
   */
  table?: string;
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

export class GetIndexResponseBodyResultDataSourceInfoSaroConfig extends $dara.Model {
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * TEST_dump_demo_sj_na61hunbu2_share_holo
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * llm
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

export class GetIndexResponseBodyResultDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic full indexing feature is enabled.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configuration of MaxCompute data sources.
   */
  config?: GetIndexResponseBodyResultDataSourceInfoConfig;
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
   * ha-cn-pl32rf0****_test_api
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
   * 2
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: GetIndexResponseBodyResultDataSourceInfoSaroConfig;
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
      config: 'config',
      domain: 'domain',
      name: 'name',
      processParallelNum: 'processParallelNum',
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: GetIndexResponseBodyResultDataSourceInfoConfig,
      domain: 'string',
      name: 'string',
      processParallelNum: 'number',
      processPartitionCount: 'number',
      saroConfig: GetIndexResponseBodyResultDataSourceInfoSaroConfig,
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

export class GetIndexResponseBodyResultVersionsFiles extends $dara.Model {
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * " "
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory.
   * 
   * @example
   * True
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the file is a template.
   * 
   * @example
   * True
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * qrs.json
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
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

export class GetIndexResponseBodyResultVersions extends $dara.Model {
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * close alarm, by 3.9.2 hotfix workflow
   */
  desc?: string;
  /**
   * @remarks
   * The information about the files.
   */
  files?: GetIndexResponseBodyResultVersionsFiles[];
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * ha-cn-7pp2ngv4s02_qrs
   */
  name?: string;
  /**
   * @remarks
   * The status of the index version. Valid values:
   * 
   * *   NEW: The index version is created.
   * *   PUBLISH: The index version is normal.
   * *   IN_USE: The index version is in use.
   * *   NOT_USE: The index version is not used.
   * *   STOP_USE: The index version is being stopped.
   * *   RESTORE_USE: The index version is being restored.
   * *   FAIL: The index version failed to be created.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The time when the index version was updated.
   * 
   * @example
   * " "
   */
  updateTime?: number;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      files: { 'type': 'array', 'itemType': GetIndexResponseBodyResultVersionsFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
      versionId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The cluster information.
   */
  cluster?: { [key: string]: ResultClusterValue };
  /**
   * @remarks
   * The configuration information.
   */
  config?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The configuration that takes effect next time.
   */
  configWhenBuild?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * {"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}
   */
  content?: string;
  createTime?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-tl32nd2nq01_00
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSourceInfo?: GetIndexResponseBodyResultDataSourceInfo;
  /**
   * @remarks
   * The description of the index version.
   * 
   * @example
   * test index
   */
  description?: string;
  /**
   * @remarks
   * The deployment name of the index.
   * 
   * @example
   * sz_vpc_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * Extended information
   */
  extend?: { [key: string]: string[] };
  /**
   * @remarks
   * The time when full data in the index was last updated.
   * 
   * @example
   * 2024-06-20 08:52:54
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The data version.
   * 
   * @example
   * 1688523414
   */
  fullVersion?: number;
  /**
   * @remarks
   * The time when incremental data in the index was last updated.
   * 
   * @example
   * 2024-06-20 08:52:54
   */
  incUpdateTime?: string;
  /**
   * @remarks
   * The index size.
   * 
   * @example
   * 4689
   */
  indexSize?: number;
  /**
   * @remarks
   * The status of the index version. Valid values:
   * 
   * *   NEW: The index version is created.
   * *   PUBLISH: The index version is normal.
   * *   IN_USE: The index version is in use.
   * *   NOT_USE: The index version is not used.
   * *   STOP_USE: The index version is being stopped.
   * *   RESTORE_USE: The index version is being restored.
   * *   FAIL: The index version failed to be created.
   * 
   * @example
   * IN_USE
   */
  indexStatus?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * general
   */
  name?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 2
   */
  partition?: number;
  updateTime?: string;
  /**
   * @remarks
   * The information about the versions.
   */
  versions?: GetIndexResponseBodyResultVersions[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      config: 'config',
      configWhenBuild: 'configWhenBuild',
      content: 'content',
      createTime: 'createTime',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      description: 'description',
      domain: 'domain',
      extend: 'extend',
      fullUpdateTime: 'fullUpdateTime',
      fullVersion: 'fullVersion',
      incUpdateTime: 'incUpdateTime',
      indexSize: 'indexSize',
      indexStatus: 'indexStatus',
      name: 'name',
      partition: 'partition',
      updateTime: 'updateTime',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'map', 'keyType': 'string', 'valueType': ResultClusterValue },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      configWhenBuild: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      content: 'string',
      createTime: 'string',
      dataSource: 'string',
      dataSourceInfo: GetIndexResponseBodyResultDataSourceInfo,
      description: 'string',
      domain: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      fullUpdateTime: 'string',
      fullVersion: 'number',
      incUpdateTime: 'string',
      indexSize: 'number',
      indexStatus: 'string',
      name: 'string',
      partition: 'number',
      updateTime: 'string',
      versions: { 'type': 'array', 'itemType': GetIndexResponseBodyResultVersions },
    };
  }

  validate() {
    if(this.cluster) {
      $dara.Model.validateMap(this.cluster);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.configWhenBuild) {
      $dara.Model.validateMap(this.configWhenBuild);
    }
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FB0325E-8C37-5525-96AC-0333523170A3
   */
  requestId?: string;
  /**
   * @remarks
   * The index information.
   */
  result?: GetIndexResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetIndexResponseBodyResult,
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

