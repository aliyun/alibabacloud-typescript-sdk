// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitLiveSnapshotJobRequestSnapshotOutput } from "./SubmitLiveSnapshotJobRequestSnapshotOutput";
import { SubmitLiveSnapshotJobRequestStreamInput } from "./SubmitLiveSnapshotJobRequestStreamInput";


export class SubmitLiveSnapshotJobRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot callback URL.
   * 
   * *   It cannot exceed 255 characters in length.
   * *   Both HTTP and HTTPS URLs are supported.
   * 
   * @example
   * http://www.aliyun.com/snapshot/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * *   It cannot exceed 128 characters in length.
   * 
   * This parameter is required.
   */
  jobName?: string;
  /**
   * @remarks
   * The information about the output snapshot.
   * 
   * This parameter is required.
   */
  snapshotOutput?: SubmitLiveSnapshotJobRequestSnapshotOutput;
  /**
   * @remarks
   * The information about the input stream.
   * 
   * This parameter is required.
   */
  streamInput?: SubmitLiveSnapshotJobRequestStreamInput;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      jobName: 'JobName',
      snapshotOutput: 'SnapshotOutput',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      jobName: 'string',
      snapshotOutput: SubmitLiveSnapshotJobRequestSnapshotOutput,
      streamInput: SubmitLiveSnapshotJobRequestStreamInput,
      templateId: 'string',
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

