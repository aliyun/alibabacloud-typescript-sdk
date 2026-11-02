// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveSnapshotJobResponseBodySnapshotOutput extends $dara.Model {
  /**
   * @remarks
   * The bucket of the output endpoint. The OSS bucket is returned when the type is oss.
   * 
   * @example
   * testbucket
   */
  bucket?: string;
  /**
   * @remarks
   * The output endpoint. The OSS domain name is returned when the type is oss.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The storage type. Currently, only OSS is supported.
   * 
   * @example
   * oss
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveSnapshotJobResponseBodyStreamInput extends $dara.Model {
  /**
   * @remarks
   * The input type. Currently, only RTMP is supported.
   * 
   * @example
   * rtmp
   */
  type?: string;
  /**
   * @remarks
   * The input URL.
   * 
   * @example
   * rtmp://www.aliyun.com/stream
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLiveSnapshotJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The snapshot callback URL.
   * 
   * @example
   * http://www.aliyun.com/snapshot/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format and in UTC (ending with Z).
   * 
   * @example
   * 2022-02-02T22:22:22Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * Snapshot job 1
   */
  jobName?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2022-02-02T22:22:22Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The overwrite snapshot format.
   * 
   * @example
   * snapshot/{JobId}.jpg
   */
  overwriteFormat?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sequence snapshot format.
   * 
   * @example
   * snapshot/{JobId}/{UnixTimestamp}.jpg
   */
  sequenceFormat?: string;
  /**
   * @remarks
   * The output information.
   */
  snapshotOutput?: GetLiveSnapshotJobResponseBodySnapshotOutput;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * started
   */
  status?: string;
  /**
   * @remarks
   * The input information.
   */
  streamInput?: GetLiveSnapshotJobResponseBodyStreamInput;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287666****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The snapshot interval. Unit: seconds.
   * 
   * @example
   * 5
   */
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      createTime: 'CreateTime',
      jobId: 'JobId',
      jobName: 'JobName',
      lastModified: 'LastModified',
      overwriteFormat: 'OverwriteFormat',
      requestId: 'RequestId',
      sequenceFormat: 'SequenceFormat',
      snapshotOutput: 'SnapshotOutput',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      createTime: 'string',
      jobId: 'string',
      jobName: 'string',
      lastModified: 'string',
      overwriteFormat: 'string',
      requestId: 'string',
      sequenceFormat: 'string',
      snapshotOutput: GetLiveSnapshotJobResponseBodySnapshotOutput,
      status: 'string',
      streamInput: GetLiveSnapshotJobResponseBodyStreamInput,
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
    };
  }

  validate() {
    if(this.snapshotOutput && typeof (this.snapshotOutput as any).validate === 'function') {
      (this.snapshotOutput as any).validate();
    }
    if(this.streamInput && typeof (this.streamInput as any).validate === 'function') {
      (this.streamInput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

