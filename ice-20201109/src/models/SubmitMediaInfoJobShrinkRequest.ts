// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The input for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * job-name
   */
  inputShrink?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job-name
   */
  name?: string;
  /**
   * @remarks
   * The scheduling settings.
   * 
   * @example
   * user-data
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * The custom user data.
   * 
   * @example
   * user-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      name: 'Name',
      scheduleConfigShrink: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      name: 'string',
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

