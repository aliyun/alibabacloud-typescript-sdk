// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The input for the snapshot job.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The name of the snapshot job.
   * 
   * @example
   * SampleJob
   */
  name?: string;
  /**
   * @remarks
   * The output destination for the snapshot job.
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
   * Custom user data, passed as a JSON-formatted string.
   * 
   * @example
   * {"test parameter": "test value"}
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

