// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveTranscodeJobShrinkRequest extends $dara.Model {
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
  streamInputShrink?: string;
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
  timedConfigShrink?: string;
  /**
   * @remarks
   * The information about the transcoding output.
   * 
   * This parameter is required.
   */
  transcodeOutputShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      startMode: 'StartMode',
      streamInputShrink: 'StreamInput',
      templateId: 'TemplateId',
      timedConfigShrink: 'TimedConfig',
      transcodeOutputShrink: 'TranscodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      startMode: 'number',
      streamInputShrink: 'string',
      templateId: 'string',
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

