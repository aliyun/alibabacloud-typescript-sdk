// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitLiveRecordJobRequestRecordOutput } from "./SubmitLiveRecordJobRequestRecordOutput";
import { SubmitLiveRecordJobRequestStreamInput } from "./SubmitLiveRecordJobRequestStreamInput";


export class SubmitLiveRecordJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the recording job.
   * 
   * This parameter is required.
   * 
   * @example
   * live stream record 1
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
   * 
   * This parameter is required.
   */
  recordOutput?: SubmitLiveRecordJobRequestRecordOutput;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * This parameter is required.
   */
  streamInput?: SubmitLiveRecordJobRequestStreamInput;
  /**
   * @remarks
   * The ID of the recording template.
   * 
   * This parameter is required.
   * 
   * @example
   * 69e1f9fe-1e97-11ed-ba64-0c42a1b73d66
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      notifyUrl: 'NotifyUrl',
      recordOutput: 'RecordOutput',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyUrl: 'string',
      recordOutput: SubmitLiveRecordJobRequestRecordOutput,
      streamInput: SubmitLiveRecordJobRequestStreamInput,
      templateId: 'string',
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

