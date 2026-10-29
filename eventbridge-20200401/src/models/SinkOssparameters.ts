// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkOSSParametersContentTransform extends $dara.Model {
  /**
   * @remarks
   * The transformation method for the delivered content.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template string used to format parameter values. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value expression used to generate the delivered content.
   * 
   * @example
   * $.data.message
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkOSSParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket used to store event data.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * The compression type of the delivered files.
   * 
   * @example
   * gzip
   */
  compressionType?: string;
  /**
   * @remarks
   * The event content transformation configuration before delivery to OSS.
   */
  contentTransform?: SinkOSSParametersContentTransform;
  /**
   * @remarks
   * The endpoint of the destination OSS service.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The storage path for event data in the OSS bucket.
   * 
   * @example
   * /EB-test/
   */
  pathFormat?: string;
  /**
   * @remarks
   * The region ID of the destination OSS service.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ARN of the RAM role used to deliver data to OSS.
   * 
   * @example
   * acs:ram::1234567890123456:role/example-eventbridge-role
   */
  roleArn?: string;
  /**
   * @remarks
   * The time window for batch aggregation of event data.
   * 
   * @example
   * 60000
   */
  rotateIntervalMs?: string;
  /**
   * @remarks
   * The file size threshold for batch aggregation.
   * 
   * @example
   * 1048576
   */
  rotateSizeBytes?: string;
  /**
   * @remarks
   * Specifies whether SSL is enabled.
   */
  SSLEnabled?: boolean;
  /**
   * @remarks
   * The number of concurrent delivery tasks.
   * 
   * @example
   * 1
   */
  taskConcurrency?: string;
  /**
   * @remarks
   * The time zone used for time variables in the storage path.
   * 
   * @example
   * UTC+8:00
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      compressionType: 'CompressionType',
      contentTransform: 'ContentTransform',
      endpoint: 'Endpoint',
      pathFormat: 'PathFormat',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      rotateIntervalMs: 'RotateIntervalMs',
      rotateSizeBytes: 'RotateSizeBytes',
      SSLEnabled: 'SSLEnabled',
      taskConcurrency: 'TaskConcurrency',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      compressionType: 'string',
      contentTransform: SinkOSSParametersContentTransform,
      endpoint: 'string',
      pathFormat: 'string',
      regionId: 'string',
      roleArn: 'string',
      rotateIntervalMs: 'string',
      rotateSizeBytes: 'string',
      SSLEnabled: 'boolean',
      taskConcurrency: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(this.contentTransform && typeof (this.contentTransform as any).validate === 'function') {
      (this.contentTransform as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

