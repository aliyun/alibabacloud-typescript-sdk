// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLiveTranscodeJobRequestStreamInput } from "./UpdateLiveTranscodeJobRequestStreamInput";
import { UpdateLiveTranscodeJobRequestTimedConfig } from "./UpdateLiveTranscodeJobRequestTimedConfig";
import { UpdateLiveTranscodeJobRequestTranscodeOutput } from "./UpdateLiveTranscodeJobRequestTranscodeOutput";


export class UpdateLiveTranscodeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * mytest3
   */
  name?: string;
  /**
   * @remarks
   * The information about the input stream.
   */
  streamInput?: UpdateLiveTranscodeJobRequestStreamInput;
  /**
   * @remarks
   * The configuration of a timed transcoding job.
   */
  timedConfig?: UpdateLiveTranscodeJobRequestTimedConfig;
  /**
   * @remarks
   * The information about the transcoding output.
   */
  transcodeOutput?: UpdateLiveTranscodeJobRequestTranscodeOutput;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      streamInput: 'StreamInput',
      timedConfig: 'TimedConfig',
      transcodeOutput: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      streamInput: UpdateLiveTranscodeJobRequestStreamInput,
      timedConfig: UpdateLiveTranscodeJobRequestTimedConfig,
      transcodeOutput: UpdateLiveTranscodeJobRequestTranscodeOutput,
    };
  }

  validate() {
    if(this.streamInput && typeof (this.streamInput as any).validate === 'function') {
      (this.streamInput as any).validate();
    }
    if(this.timedConfig && typeof (this.timedConfig as any).validate === 'function') {
      (this.timedConfig as any).validate();
    }
    if(this.transcodeOutput && typeof (this.transcodeOutput as any).validate === 'function') {
      (this.transcodeOutput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

