// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveTranscodeJobShrinkRequest extends $dara.Model {
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
  streamInputShrink?: string;
  /**
   * @remarks
   * The configuration of a timed transcoding job.
   */
  timedConfigShrink?: string;
  /**
   * @remarks
   * The information about the transcoding output.
   */
  transcodeOutputShrink?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      streamInputShrink: 'StreamInput',
      timedConfigShrink: 'TimedConfig',
      transcodeOutputShrink: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      streamInputShrink: 'string',
      timedConfigShrink: 'string',
      transcodeOutputShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

