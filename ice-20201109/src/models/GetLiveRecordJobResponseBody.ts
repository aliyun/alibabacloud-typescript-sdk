// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveRecordJobResponseBodyRecordJobRecordOutput extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * imsbucket1
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint of the storage service.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The type of the storage address.
   * 
   * Valid values:
   * 
   * *   vod
   * *   oss
   * 
   * @example
   * oss
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
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

export class GetLiveRecordJobResponseBodyRecordJobStreamInput extends $dara.Model {
  /**
   * @remarks
   * The type of the live stream. The value can only be rtmp.
   * 
   * @example
   * rtmp
   */
  type?: string;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * @example
   * rtmp://example.com/app/stream
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

export class GetLiveRecordJobResponseBodyRecordJob extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-07-20T02:48:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the recording job.
   * 
   * @example
   * ab0e3e76-1e9d-11ed-ba64-0c42a1b73d66
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the recording job.
   */
  name?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * https://example.com/imsnotify
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The storage address of the recording.
   */
  recordOutput?: GetLiveRecordJobResponseBodyRecordJobRecordOutput;
  /**
   * @remarks
   * The state of the recording job.
   * 
   * Valid values:
   * 
   * *   paused: The job is paused.
   * *   initial: The job is not started.
   * *   started: The job is in progress.
   * 
   * @example
   * paused
   */
  status?: string;
  /**
   * @remarks
   * The URL of the live stream.
   */
  streamInput?: GetLiveRecordJobResponseBodyRecordJobStreamInput;
  /**
   * @remarks
   * The ID of the recording template.
   * 
   * @example
   * 69e1f9fe-1e97-11ed-ba64-0c42a1b73d66
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the recording template.
   * 
   * @example
   * test template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      name: 'Name',
      notifyUrl: 'NotifyUrl',
      recordOutput: 'RecordOutput',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      name: 'string',
      notifyUrl: 'string',
      recordOutput: GetLiveRecordJobResponseBodyRecordJobRecordOutput,
      status: 'string',
      streamInput: GetLiveRecordJobResponseBodyRecordJobStreamInput,
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(this.recordOutput && typeof (this.recordOutput as any).validate === 'function') {
      (this.recordOutput as any).validate();
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

export class GetLiveRecordJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the recording job.
   */
  recordJob?: GetLiveRecordJobResponseBodyRecordJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B57A046C-CE33-5FBB-B57A-D2B89ACF6907
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordJob: 'RecordJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordJob: GetLiveRecordJobResponseBodyRecordJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordJob && typeof (this.recordJob as any).validate === 'function') {
      (this.recordJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

