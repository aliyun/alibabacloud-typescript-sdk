// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadJobsResponseBodyResultsConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * 对象存储桶
   * 
   * @example
   * ali-test-oss-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * 压缩格式
   * 
   * @example
   * none
   */
  compressionType?: string;
  /**
   * @remarks
   * 下载文件格式
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @example
   * download/
   */
  prefix?: string;
  /**
   * @remarks
   * 下载使用roleArn
   * 
   * @example
   * acs:ram::123456:role/aliyunlogimportossrole
   */
  roleArn?: string;
  /**
   * @example
   * AliyunOSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      compressionType: 'compressionType',
      contentType: 'contentType',
      prefix: 'prefix',
      roleArn: 'roleArn',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      compressionType: 'string',
      contentType: 'string',
      prefix: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBodyResultsConfiguration extends $dara.Model {
  /**
   * @example
   * false
   */
  allowInComplete?: string;
  /**
   * @remarks
   * 起点时间戳（精确到秒）
   * 
   * @example
   * 1722409260
   */
  fromTime?: number;
  /**
   * @remarks
   * 源logstore
   * 
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * 是否启用powerSql
   * 
   * @example
   * true
   */
  powerSql?: boolean;
  /**
   * @remarks
   * 查询语句
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * 导出配置
   */
  sink?: ListDownloadJobsResponseBodyResultsConfigurationSink;
  /**
   * @remarks
   * 结束时间戳（精确到秒）
   * 
   * @example
   * 1722411060
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      allowInComplete: 'allowInComplete',
      fromTime: 'fromTime',
      logstore: 'logstore',
      powerSql: 'powerSql',
      query: 'query',
      sink: 'sink',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInComplete: 'string',
      fromTime: 'number',
      logstore: 'string',
      powerSql: 'boolean',
      query: 'string',
      sink: ListDownloadJobsResponseBodyResultsConfigurationSink,
      toTime: 'number',
    };
  }

  validate() {
    if(this.sink && typeof (this.sink as any).validate === 'function') {
      (this.sink as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBodyResultsExecutionDetails extends $dara.Model {
  /**
   * @example
   * ETASFGASDASQWDasd
   */
  checkSum?: string;
  /**
   * @remarks
   * 下载错误信息
   * 
   * @example
   * timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * 下载执行时间
   * 
   * @example
   * 123
   */
  executeTime?: number;
  /**
   * @remarks
   * 下载结果链接
   * 
   * @example
   * https://sls-downloaded-xxxx.csv.gzip?Expiresxxx
   */
  filePath?: string;
  /**
   * @remarks
   * 下载文件大小
   * 
   * @example
   * 123456
   */
  fileSize?: number;
  /**
   * @remarks
   * 下载日志条数
   * 
   * @example
   * 123
   */
  logCount?: number;
  notice?: string;
  /**
   * @remarks
   * 下载进度
   * 
   * @example
   * 100
   */
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      checkSum: 'checkSum',
      errorMessage: 'errorMessage',
      executeTime: 'executeTime',
      filePath: 'filePath',
      fileSize: 'fileSize',
      logCount: 'logCount',
      notice: 'notice',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkSum: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      filePath: 'string',
      fileSize: 'number',
      logCount: 'number',
      notice: 'string',
      progress: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * 下载配置
   */
  configuration?: ListDownloadJobsResponseBodyResultsConfiguration;
  /**
   * @example
   * 1722411060
   */
  createTime?: string;
  /**
   * @remarks
   * 任务描述
   * 
   * @example
   * a download job
   */
  description?: string;
  /**
   * @remarks
   * 任务显示名称
   * 
   * @example
   * download-123
   */
  displayName?: string;
  /**
   * @remarks
   * The execution details.
   */
  executionDetails?: ListDownloadJobsResponseBodyResultsExecutionDetails;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * download-123
   */
  name?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      executionDetails: 'executionDetails',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ListDownloadJobsResponseBodyResultsConfiguration,
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      executionDetails: ListDownloadJobsResponseBodyResultsExecutionDetails,
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    if(this.executionDetails && typeof (this.executionDetails as any).validate === 'function') {
      (this.executionDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Array, to return a list of log download tasks.
   */
  results?: ListDownloadJobsResponseBodyResults[];
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': ListDownloadJobsResponseBodyResults },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

