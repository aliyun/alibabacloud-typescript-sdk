// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexesResponseBodyResultDataSourceInfoConfig extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * root
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * root123
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
   * The shard name.
   * 
   * @example
   * ds=12345
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

export class ListIndexesResponseBodyResultDataSourceInfoSaroConfig extends $dara.Model {
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
  config?: ListIndexesResponseBodyResultDataSourceInfoConfig;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * index1
   */
  name?: string;
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
  saroConfig?: ListIndexesResponseBodyResultDataSourceInfoSaroConfig;
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
   * ha-cn-7mz2iv7sq01_qrs
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
   * The description of the index version.
   * 
   * @example
   * close alarm, by 3.9.2 hotfix workflow
   */
  desc?: string;
  /**
   * @remarks
   * The files.
   */
  files?: ListIndexesResponseBodyResultVersionsFiles[];
  /**
   * @remarks
   * The name of the index version.
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
   * The ID of the index version. If the index version is modified, the returned value is null.
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
   * The index schema, which is a JSON string.
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
   * ha-cn-7mz2kvu2c01_table4
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
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The deployment name of the index.
   * 
   * @example
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The time when full data in the index was last updated.
   * 
   * @example
   * 2023-07-05 10:40:38
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The full version of the index.
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
   * The index ststus. Valid values: NEW and PUBLISH.
   * 
   * @example
   * " "
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
   * The index versions.
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
   * The details of indexes.
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

