// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitLiveTranscodeJobRequestStreamInput } from "./SubmitLiveTranscodeJobRequestStreamInput";
import { SubmitLiveTranscodeJobRequestTimedConfig } from "./SubmitLiveTranscodeJobRequestTimedConfig";
import { SubmitLiveTranscodeJobRequestTranscodeOutput } from "./SubmitLiveTranscodeJobRequestTranscodeOutput";


export class SubmitLiveTranscodeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the transcoding job.
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  name?: string;
  /**
   * @remarks
   * The start mode of the transcoding job.
   * 
   * *   0: The transcoding job immediately starts.
   * *   1: The transcoding job starts at the scheduled time.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  startMode?: number;
  /**
   * @remarks
   * The information about the input stream.
   * 
   * This parameter is required.
   */
  streamInput?: SubmitLiveTranscodeJobRequestStreamInput;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The configuration of a timed transcoding job. This parameter is required if you set StartMode to 1.
   */
  timedConfig?: SubmitLiveTranscodeJobRequestTimedConfig;
  /**
   * @remarks
   * The information about the transcoding output.
   * 
   * This parameter is required.
   */
  transcodeOutput?: SubmitLiveTranscodeJobRequestTranscodeOutput;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      startMode: 'StartMode',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      timedConfig: 'TimedConfig',
      transcodeOutput: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      startMode: 'number',
      streamInput: SubmitLiveTranscodeJobRequestStreamInput,
      templateId: 'string',
      timedConfig: SubmitLiveTranscodeJobRequestTimedConfig,
      transcodeOutput: SubmitLiveTranscodeJobRequestTranscodeOutput,
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

