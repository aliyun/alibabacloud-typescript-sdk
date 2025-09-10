// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadJobResponseBodyConfigurationSink extends $dara.Model {
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
   * acs:ram::0123456789:role/aliyunlogdefaultrole
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

export class GetDownloadJobResponseBodyConfiguration extends $dara.Model {
  /**
   * @example
   * true
   */
  allowInComplete?: boolean;
  /**
   * @remarks
   * 起点时间戳（精确到秒）
   * 
   * @example
   * 1722409860
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
   * false
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
  sink?: GetDownloadJobResponseBodyConfigurationSink;
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
      allowInComplete: 'boolean',
      fromTime: 'number',
      logstore: 'string',
      powerSql: 'boolean',
      query: 'string',
      sink: GetDownloadJobResponseBodyConfigurationSink,
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

export class GetDownloadJobResponseBodyExecutionDetails extends $dara.Model {
  /**
   * @example
   * EXSFGSDASDASDG123ASD
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
   * https://xxx.csv.zst?xxx
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

export class GetDownloadJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * 下载配置
   */
  configuration?: GetDownloadJobResponseBodyConfiguration;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
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
   * download-123456
   */
  displayName?: string;
  /**
   * @remarks
   * 任务执行细节
   */
  executionDetails?: GetDownloadJobResponseBodyExecutionDetails;
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
   * The status of the log download task.
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
      configuration: GetDownloadJobResponseBodyConfiguration,
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      executionDetails: GetDownloadJobResponseBodyExecutionDetails,
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

