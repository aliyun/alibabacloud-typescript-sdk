// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveTranscodeJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  name?: string;
  /**
   * @remarks
   * The start mode. Valid values:
   * 
   * - 0: Starts the task immediately.
   * - 1: Starts the task at a scheduled time.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  startMode?: number;
  /**
   * @remarks
   * The stream input information.
   * 
   * This parameter is required.
   */
  streamInputShrink?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The configuration of the scheduled task.
   * This parameter is required when StartMode is set to 1.
   */
  timedConfigShrink?: string;
  /**
   * @remarks
   * The transcoding output information.
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

