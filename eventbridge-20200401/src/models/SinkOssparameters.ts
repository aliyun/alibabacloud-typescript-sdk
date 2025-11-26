// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkOSSParametersContentTransform extends $dara.Model {
  form?: string;
  template?: string;
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
  bucketName?: string;
  compressionType?: string;
  contentTransform?: SinkOSSParametersContentTransform;
  endpoint?: string;
  pathFormat?: string;
  regionId?: string;
  roleArn?: string;
  rotateIntervalMs?: string;
  rotateSizeBytes?: string;
  SSLEnabled?: boolean;
  taskConcurrency?: string;
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

