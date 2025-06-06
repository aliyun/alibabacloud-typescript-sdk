// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput } from "./ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput";
import { ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput } from "./ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput";


export class ListLiveRecordJobsResponseBodyLiveRecordJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-07-20T03:26:36Z
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
  recordOutput?: ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput;
  /**
   * @remarks
   * The state of the recording job.
   * 
   * @example
   * paused
   */
  status?: string;
  /**
   * @remarks
   * The URL of the live stream.
   */
  streamInput?: ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput;
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
      recordOutput: ListLiveRecordJobsResponseBodyLiveRecordJobsRecordOutput,
      status: 'string',
      streamInput: ListLiveRecordJobsResponseBodyLiveRecordJobsStreamInput,
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

