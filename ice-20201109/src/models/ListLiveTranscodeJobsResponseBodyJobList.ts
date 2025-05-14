// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveTranscodeJobsResponseBodyJobListOutputStream } from "./ListLiveTranscodeJobsResponseBodyJobListOutputStream";
import { ListLiveTranscodeJobsResponseBodyJobListStreamInput } from "./ListLiveTranscodeJobsResponseBodyJobListStreamInput";


export class ListLiveTranscodeJobsResponseBodyJobList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2022-07-20T02:48:58Z
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
   * The name of the transcoding job.
   * 
   * @example
   * mytask
   */
  name?: string;
  /**
   * @remarks
   * The information about the output stream.
   */
  outputStream?: ListLiveTranscodeJobsResponseBodyJobListOutputStream;
  /**
   * @remarks
   * The start mode of the job.
   * 
   * @example
   * 0
   */
  startMode?: number;
  /**
   * @remarks
   * The state of the job.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The information about the input stream.
   */
  streamInput?: ListLiveTranscodeJobsResponseBodyJobListStreamInput;
  /**
   * @remarks
   * The ID of the transcoding template used by the transcoding job.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287666****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the transcoding template used by the transcoding job.
   * 
   * @example
   * normal
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      name: 'Name',
      outputStream: 'OutputStream',
      startMode: 'StartMode',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      name: 'string',
      outputStream: ListLiveTranscodeJobsResponseBodyJobListOutputStream,
      startMode: 'number',
      status: 'number',
      streamInput: ListLiveTranscodeJobsResponseBodyJobListStreamInput,
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(this.outputStream && typeof (this.outputStream as any).validate === 'function') {
      (this.outputStream as any).validate();
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

