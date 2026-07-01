// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicImageJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The job input.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The job output.
   * 
   * This parameter is required.
   */
  outputShrink?: string;
  /**
   * @remarks
   * The scheduling configuration.
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * The snapshot template configuration.
   * 
   * This parameter is required.
   */
  templateConfigShrink?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"SampleKey": "SampleValue"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      name: 'Name',
      outputShrink: 'Output',
      scheduleConfigShrink: 'ScheduleConfig',
      templateConfigShrink: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      name: 'string',
      outputShrink: 'string',
      scheduleConfigShrink: 'string',
      templateConfigShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

