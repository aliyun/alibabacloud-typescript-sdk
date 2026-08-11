// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexesResponseBodyResultDataSourceInfoConfig extends $dara.Model {
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
   * The OSS bucket.
   * 
   * @example
   * ha3test-oss
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the data catalog for the DLF data source.
   * 
   * @example
   * clg-paimon-21cc136237a6457f8618f5f82d116d7e
   */
  catalog?: string;
  /**
   * @remarks
   * The database name of the DLF data source.
   * 
   * @example
   * dlf_test
   */
  database?: string;
  /**
   * @remarks
   * Information about the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The file format for OSS.
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
   * Information about the saro data source.
   * 
   * @example
   * TEST_dump_demo_sj_na61hunbu2_share_holo
   */
  namespace?: string;
  /**
   * @remarks
   * Information about the OSS data source.
   * 
   * @example
   * /test_opensearch/sift_oss_test.data
   */
  ossPath?: string;
  /**
   * @remarks
   * The data partition.
   * 
   * @example
   * ds=20231220
   */
  partition?: string;
  /**
   * @remarks
   * Information about the Hadoop Distributed File System (HDFS) data source.
   * 
   * @example
   * http://test_opensearch/sift_oss_test.data
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * tisplus_dev
   */
  project?: string;
  /**
   * @remarks
   * Information about the saro or MaxCompute data source.
   * 
   * @example
   * dump_odps_demo
   */
  table?: string;
  /**
   * @remarks
   * The tag of the DLF data source.
   * 
   * @example
   * test_tag
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

export class ListIndexesResponseBodyResultDataSourceInfoSaroConfig extends $dara.Model {
  /**
   * @remarks
   * The namespace of the saro data source.
   * 
   * @example
   * TEST_dump_demo_sj_na61hunbu2_share_holo
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the saro data table.
   * 
   * @example
   * dump_odps_demo
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

export class ListIndexesResponseBodyResultDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to automatically build a full index.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configurations of the MaxCompute data source.
   */
  config?: ListIndexesResponseBodyResultDataSourceInfoConfig;
  /**
   * @remarks
   * The offline deployment.
   * 
   * @example
   * vpc_hz_domain_2
   */
  domain?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  name?: string;
  /**
   * @remarks
   * The number of resources for data updates.
   * 
   * @example
   * 2
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configurations of the saro data source.
   */
  saroConfig?: ListIndexesResponseBodyResultDataSourceInfoSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values: odps (MaxCompute), swift, saro, oss (Object Storage Service), and unKnow.
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
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: ListIndexesResponseBodyResultDataSourceInfoConfig,
      domain: 'string',
      name: 'string',
      processPartitionCount: 'number',
      saroConfig: ListIndexesResponseBodyResultDataSourceInfoSaroConfig,
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

export class ListIndexesResponseBodyResultVersionsFiles extends $dara.Model {
  /**
   * @remarks
   * The name of the folder after a full-text index is created.
   * 
   * @example
   * /qrs.json
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether a folder exists.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the file is a template.
   * 
   * @example
   * true
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

export class ListIndexesResponseBodyResultVersions extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Index Note
   */
  desc?: string;
  /**
   * @remarks
   * The list of file names.
   */
  files?: ListIndexesResponseBodyResultVersionsFiles[];
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The status.
   * 
   * - NEW: The index is being created.
   * 
   * - PUBLISH: The index is in the Normal state.
   * 
   * - IN_USE: The index is in use.
   * 
   * - NOT_USE: The index is not in use.
   * 
   * - STOP_USE: The index is being stopped.
   * 
   * - RESTORE_USE: The index is being resumed.
   * 
   * - FAIL: The index failed.
   * 
   * @example
   * PUBLISH
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-06-20 08:52:54
   */
  updateTime?: number;
  /**
   * @remarks
   * The version ID. This parameter is null for an edit version.
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
      files: { 'type': 'array', 'itemType': ListIndexesResponseBodyResultVersionsFiles },
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

export class ListIndexesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The schema in the JSON format.
   * 
   * @example
   * {"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}
   */
  content?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-05-21 16:05:26
   */
  createTime?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSourceInfo?: ListIndexesResponseBodyResultDataSourceInfo;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * note
   */
  description?: string;
  /**
   * @remarks
   * The deployment name of the data source.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The time when the full index was switched.
   * 
   * @example
   * 2023-07-05 10:40:38
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The full version, which is the index version.
   * 
   * @example
   * 1688523414
   */
  fullVersion?: number;
  /**
   * @remarks
   * The time of the incremental update.
   * 
   * @example
   * 2023-07-05 10:58:33
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
   * NEW, PUBLISH
   * 
   * @example
   * PUBLISH
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
   * The number of data shards.
   * 
   * @example
   * 2
   */
  partition?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-05-21 16:05:26
   */
  updateTime?: string;
  /**
   * @remarks
   * The list of versions.
   */
  versions?: ListIndexesResponseBodyResultVersions[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      description: 'description',
      domain: 'domain',
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
      content: 'string',
      createTime: 'string',
      dataSource: 'string',
      dataSourceInfo: ListIndexesResponseBodyResultDataSourceInfo,
      description: 'string',
      domain: 'string',
      fullUpdateTime: 'string',
      fullVersion: 'number',
      incUpdateTime: 'string',
      indexSize: 'number',
      indexStatus: 'string',
      name: 'string',
      partition: 'number',
      updateTime: 'string',
      versions: { 'type': 'array', 'itemType': ListIndexesResponseBodyResultVersions },
    };
  }

  validate() {
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
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

export class ListIndexesResponseBody extends $dara.Model {
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
   * The list of index details.
   */
  result?: ListIndexesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListIndexesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

