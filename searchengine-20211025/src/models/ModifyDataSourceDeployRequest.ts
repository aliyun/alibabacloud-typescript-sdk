// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataSourceDeployRequestExtendHdfs extends $dara.Model {
  /**
   * @remarks
   * The HDFS data source path.
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
   * The partition information of the data source.
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
   * The OSS data source path.
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
   * The path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The version number.
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
   * The HDFS information.
   */
  hdfs?: ModifyDataSourceDeployRequestExtendHdfs;
  /**
   * @remarks
   * The ODPS data source information.
   */
  odps?: ModifyDataSourceDeployRequestExtendOdps;
  /**
   * @remarks
   * The OSS information.
   */
  oss?: ModifyDataSourceDeployRequestExtendOss;
  /**
   * @remarks
   * The Saro data source information.
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
   * The process startup parameters.
   * 
   * @example
   * {
   * 	"processInfos": [],
   * 	"groupId": "opensearch",
   * 	"containerConfigs": [],
   * 	"priority": {
   * 		"minor_priority": 0,
   * 		"major_priority": 64
   * 	}
   * }
   */
  args?: string;
  /**
   * @remarks
   * The resource information.
   * 
   * @example
   * [{
   * 	"_bs_role": "processor.*.inc",
   * 	"priority": {
   * 		"major_priority": 32,
   * 		"minor_priority": 0
   * 	},
   * 	"slotResources": [{
   * 		"slotResources": [{
   * 			"amount": 200,
   * 			"name": "cpu"
   * 		}, {
   * 			"amount": 8192,
   * 			"name": "mem"
   * 		}, {
   * 			"amount": 0,
   * 			"name": "T4"
   * 		}, {
   * 			"amount": 10,
   * 			"type": "SCALAR",
   * 			"name": "disk_ratio_9999"
   * 		}, {
   * 			"amount": 20480,
   * 			"type": "SCALAR",
   * 			"name": "disk_size_9999"
   * 		}]
   * 	}]
   * }]
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
   * The bucket name.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The data catalog name of the DLF data source.
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
   * odps endpoint
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace. This parameter is related to Saro.
   * 
   * @example
   * dp-dev
   */
  namespace?: string;
  /**
   * @remarks
   * The path. This parameter is related to the OSS data source.
   * 
   * @example
   * /opensearch
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition information.
   * 
   * @example
   * ds=20220713
   */
  partition?: string;
  /**
   * @remarks
   * The path. This parameter is related to HDFS.
   * 
   * @example
   * /ude_jobs/iflow_offline_data_access
   */
  path?: string;
  /**
   * @remarks
   * The project name of the ODPS data source.
   * 
   * @example
   * kubenest
   */
  project?: string;
  /**
   * @remarks
   * The table name. This parameter is related to Saro or ODPS.
   * 
   * @example
   * item
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
   * test
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
   * topic
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
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
   * Specifies whether to enable automatic full indexing.
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
   * The process parameters.
   */
  processor?: ModifyDataSourceDeployRequestProcessor;
  /**
   * @remarks
   * The data source information.
   */
  storage?: ModifyDataSourceDeployRequestStorage;
  /**
   * @remarks
   * The incremental Swift information.
   */
  swift?: ModifyDataSourceDeployRequestSwift;
  /**
   * @remarks
   * Specifies whether to perform a dry run (only validates whether the data source is valid). Valid values:
   * - true: performs a dry run.
   * - false: does not perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The full index version.
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

