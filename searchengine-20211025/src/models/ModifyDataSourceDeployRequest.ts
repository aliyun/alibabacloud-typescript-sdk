// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataSourceDeployRequestExtendHdfs extends $dara.Model {
  /**
   * @remarks
   * The path of the Apsara File Storage for HDFS data source.
   * 
   * @example
   * ymsh-service/src/main/java/cn/ymsh/util/jd
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendOdps extends $dara.Model {
  /**
   * @remarks
   * The partitions in the MaxCompute table.
   */
  partitions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendOss extends $dara.Model {
  /**
   * @remarks
   * The path of the OSS data source.
   * 
   * @example
   * oss://test
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtendSaro extends $dara.Model {
  /**
   * @remarks
   * The path of the SARO data source.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The version number of the SARO data source.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestExtend extends $dara.Model {
  /**
   * @remarks
   * The information about the Apsara File Storage for HDFS data source.
   */
  hdfs?: ModifyDataSourceDeployRequestExtendHdfs;
  /**
   * @remarks
   * The information about the MaxCompute data source.
   */
  odps?: ModifyDataSourceDeployRequestExtendOdps;
  /**
   * @remarks
   * The information about the OSS data source.
   */
  oss?: ModifyDataSourceDeployRequestExtendOss;
  /**
   * @remarks
   * The information about the SARO data source. This parameter is applicable to the SARO data source used in the intranet of Alibaba Group.
   */
  saro?: ModifyDataSourceDeployRequestExtendSaro;
  static names(): { [key: string]: string } {
    return {
      hdfs: 'hdfs',
      odps: 'odps',
      oss: 'oss',
      saro: 'saro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hdfs: ModifyDataSourceDeployRequestExtendHdfs,
      odps: ModifyDataSourceDeployRequestExtendOdps,
      oss: ModifyDataSourceDeployRequestExtendOss,
      saro: ModifyDataSourceDeployRequestExtendSaro,
    };
  }

  validate() {
    if(this.hdfs && typeof (this.hdfs as any).validate === 'function') {
      (this.hdfs as any).validate();
    }
    if(this.odps && typeof (this.odps as any).validate === 'function') {
      (this.odps as any).validate();
    }
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    if(this.saro && typeof (this.saro as any).validate === 'function') {
      (this.saro as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestProcessor extends $dara.Model {
  /**
   * @remarks
   * The startup parameters of the process.
   * 
   * @example
   * {}
   */
  args?: string;
  /**
   * @remarks
   * The resource information.
   * 
   * @example
   * {}
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequestStorage extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * ak
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * as
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
  /**
   * @remarks
   * The namespace. This parameter is applicable to the SARO data source used in the intranet of Alibaba Group.
   * 
   * @example
   * dp-dev
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * /opensearch
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
   * /ude_jobs/iflow_offline_data_access
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

export class ModifyDataSourceDeployRequestSwift extends $dara.Model {
  /**
   * @remarks
   * The topic.
   * 
   * @example
   * ha-cn-0ju2rps6c08_api
   */
  topic?: string;
  /**
   * @remarks
   * zk
   * 
   * @example
   * zk
   */
  zk?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'topic',
      zk: 'zk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      zk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceDeployRequest extends $dara.Model {
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
   * The extended information.
   */
  extend?: ModifyDataSourceDeployRequestExtend;
  /**
   * @remarks
   * The parameters of the process.
   */
  processor?: ModifyDataSourceDeployRequestProcessor;
  /**
   * @remarks
   * The information about the data source.
   */
  storage?: ModifyDataSourceDeployRequestStorage;
  /**
   * @remarks
   * The information about the incremental data source Swift.
   */
  swift?: ModifyDataSourceDeployRequestSwift;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The system only checks the validity of the data source. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1708674867
   */
  generationId?: number;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      extend: 'extend',
      processor: 'processor',
      storage: 'storage',
      swift: 'swift',
      dryRun: 'dryRun',
      generationId: 'generationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      extend: ModifyDataSourceDeployRequestExtend,
      processor: ModifyDataSourceDeployRequestProcessor,
      storage: ModifyDataSourceDeployRequestStorage,
      swift: ModifyDataSourceDeployRequestSwift,
      dryRun: 'boolean',
      generationId: 'number',
    };
  }

  validate() {
    if(this.extend && typeof (this.extend as any).validate === 'function') {
      (this.extend as any).validate();
    }
    if(this.processor && typeof (this.processor as any).validate === 'function') {
      (this.processor as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    if(this.swift && typeof (this.swift as any).validate === 'function') {
      (this.swift as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

