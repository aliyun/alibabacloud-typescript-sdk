// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceDeployResponseBodyResultExtendHdfs extends $dara.Model {
  /**
   * @example
   * dist-dmj-job/src/main/java
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

export class GetDataSourceDeployResponseBodyResultExtendOdps extends $dara.Model {
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

export class GetDataSourceDeployResponseBodyResultExtendOss extends $dara.Model {
  /**
   * @example
   * oss://opensearch
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

export class GetDataSourceDeployResponseBodyResultExtendSaro extends $dara.Model {
  /**
   * @example
   * dist-dmj-job/src/main/java
   */
  path?: string;
  /**
   * @example
   * 0.6.0
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

export class GetDataSourceDeployResponseBodyResultExtend extends $dara.Model {
  hdfs?: GetDataSourceDeployResponseBodyResultExtendHdfs;
  odps?: GetDataSourceDeployResponseBodyResultExtendOdps;
  oss?: GetDataSourceDeployResponseBodyResultExtendOss;
  saro?: GetDataSourceDeployResponseBodyResultExtendSaro;
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
      hdfs: GetDataSourceDeployResponseBodyResultExtendHdfs,
      odps: GetDataSourceDeployResponseBodyResultExtendOdps,
      oss: GetDataSourceDeployResponseBodyResultExtendOss,
      saro: GetDataSourceDeployResponseBodyResultExtendSaro,
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

export class GetDataSourceDeployResponseBodyResultProcessor extends $dara.Model {
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

export class GetDataSourceDeployResponseBodyResultStorage extends $dara.Model {
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
   * antsys-miniapp-chongwen-static
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
   * @example
   * lazada-campaign-flink
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * oss://opensearch
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. Example: ds=20180102.
   * 
   * @example
   * ds=20220926
   */
  partition?: string;
  /**
   * @example
   * /beiming_xobject/dwd_xobjectsandbox__list_create_action_by_new/
   */
  path?: string;
  /**
   * @example
   * wireless_1688_personal_rec
   */
  project?: string;
  /**
   * @example
   * behavior
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

export class GetDataSourceDeployResponseBodyResultSwift extends $dara.Model {
  /**
   * @remarks
   * The topic.
   * 
   * @example
   * topic
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

export class GetDataSourceDeployResponseBodyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  extend?: GetDataSourceDeployResponseBodyResultExtend;
  /**
   * @remarks
   * The parameters of the process.
   */
  processor?: GetDataSourceDeployResponseBodyResultProcessor;
  /**
   * @remarks
   * The information about the data source.
   */
  storage?: GetDataSourceDeployResponseBodyResultStorage;
  /**
   * @remarks
   * The information about the incremental data source Swift.
   */
  swift?: GetDataSourceDeployResponseBodyResultSwift;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      extend: 'extend',
      processor: 'processor',
      storage: 'storage',
      swift: 'swift',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      extend: GetDataSourceDeployResponseBodyResultExtend,
      processor: GetDataSourceDeployResponseBodyResultProcessor,
      storage: GetDataSourceDeployResponseBodyResultStorage,
      swift: GetDataSourceDeployResponseBodyResultSwift,
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

export class GetDataSourceDeployResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: GetDataSourceDeployResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDataSourceDeployResponseBodyResult,
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

