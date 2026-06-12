// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadJobRequestConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * The destination Object Storage Service (OSS) bucket.
   * 
   * @example
   * oss-test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The compression format of the file. Valid values: \\`zstd\\`, \\`lz4\\`, \\`gzip\\`, and \\`none\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionType?: string;
  /**
   * @remarks
   * The format of the downloaded file. Valid values: \\`csv\\` and \\`json\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @remarks
   * The prefix of the path in the destination OSS bucket.
   * 
   * @example
   * download/
   */
  prefix?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role to use for the download.
   * 
   * @example
   * acs:ram::0123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the destination. Set the value to \\`AliyunOSS\\`.
   * 
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
   * Specifies whether to allow the download of incomplete results. Valid values: \\`true\\` and \\`false\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  allowInComplete?: boolean;
  /**
   * @remarks
   * The start time. This is a UNIX timestamp that is accurate to the second.
   * 
   * This parameter is required.
   * 
   * @example
   * 1722406260
   */
  fromTime?: number;
  /**
   * @remarks
   * The source Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * Specifies whether to enable PowerSQL. Valid values: \\`true\\` and \\`false\\`.
   * 
   * @example
   * true
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The search statement.
   * 
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * The export configuration.
   * 
   * This parameter is required.
   */
  sink?: CreateDownloadJobRequestConfigurationSink;
  /**
   * @remarks
   * The end time. This is a UNIX timestamp that is accurate to the second.
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
   * The download configuration.
   * 
   * This parameter is required.
   */
  configuration?: CreateDownloadJobRequestConfiguration;
  /**
   * @remarks
   * The description of the log download task.
   * 
   * @example
   * Log download task
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * download-123456789
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the job. The name must meet the following requirements:
   * 
   * The job name must be unique within a project.
   * 
   * - It can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * - It must start and end with a lowercase letter or a digit.
   * 
   * - The name must be 2 to 64 characters in length.
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

