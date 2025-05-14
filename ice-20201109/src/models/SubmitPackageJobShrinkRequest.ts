// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitPackageJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The input of the job.
   * 
   * This parameter is required.
   */
  inputsShrink?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job-name
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   * 
   * This parameter is required.
   */
  outputShrink?: string;
  /**
   * @remarks
   * The scheduling settings.
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"param": "value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputsShrink: 'Inputs',
      name: 'Name',
      outputShrink: 'Output',
      scheduleConfigShrink: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputsShrink: 'string',
      name: 'string',
      outputShrink: 'string',
      scheduleConfigShrink: 'string',
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

