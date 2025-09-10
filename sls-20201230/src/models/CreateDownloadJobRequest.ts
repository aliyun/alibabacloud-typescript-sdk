// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadJobRequestConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * 对象存储桶
   * 
   * @example
   * oss-test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * 压缩格式
   * 
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionType?: string;
  /**
   * @remarks
   * 下载文件格式
   * 
   * This parameter is required.
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
   * @remarks
   * This parameter is required.
   * 
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

export class CreateDownloadJobRequestConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  allowInComplete?: boolean;
  /**
   * @remarks
   * 起点时间戳（精确到秒）
   * 
   * This parameter is required.
   * 
   * @example
   * 1722406260
   */
  fromTime?: number;
  /**
   * @remarks
   * 源logstore
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
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
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * 导出配置
   * 
   * This parameter is required.
   */
  sink?: CreateDownloadJobRequestConfigurationSink;
  /**
   * @remarks
   * 结束时间戳（精确到秒）
   * 
   * This parameter is required.
   * 
   * @example
   * 1722409860
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
      sink: CreateDownloadJobRequestConfigurationSink,
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

export class CreateDownloadJobRequest extends $dara.Model {
  /**
   * @remarks
   * 下载配置
   * 
   * This parameter is required.
   */
  configuration?: CreateDownloadJobRequestConfiguration;
  /**
   * @remarks
   * 任务描述
   */
  description?: string;
  /**
   * @remarks
   * 任务显示名称
   * 
   * This parameter is required.
   * 
   * @example
   * download-123456789
   */
  displayName?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * This parameter is required.
   * 
   * @example
   * download-123
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: CreateDownloadJobRequestConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

