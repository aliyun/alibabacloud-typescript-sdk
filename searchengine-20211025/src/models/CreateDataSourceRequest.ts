// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequestConfig extends $dara.Model {
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
   * opensearch
   */
  bucket?: string;
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute or Object Storage Service (OSS) data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * aegis-ops
   */
  namespace?: string;
  /**
   * @remarks
   * The path of the OSS object.
   * 
   * @example
   * /opensearch/search
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table.
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
   * test-hdfs-path
   */
  path?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * kubenest
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
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
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

export class CreateDataSourceRequestSaroConfig extends $dara.Model {
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * igraph-cn-x0r3e3abe02
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * index_hdfs
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

export class CreateDataSourceRequest extends $dara.Model {
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
   * The configuration information.
   */
  config?: CreateDataSourceRequestConfig;
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
   * The configurations of the SARO data source.
   */
  saroConfig?: CreateDataSourceRequestSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, oss, and swift.
   * 
   * @example
   * odps
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. This parameter is only used to check whether the data source is valid. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      domain: 'domain',
      name: 'name',
      saroConfig: 'saroConfig',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: CreateDataSourceRequestConfig,
      domain: 'string',
      name: 'string',
      saroConfig: CreateDataSourceRequestSaroConfig,
      type: 'string',
      dryRun: 'boolean',
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

