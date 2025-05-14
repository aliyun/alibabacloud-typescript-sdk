// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaInfoJobRequestInput } from "./SubmitMediaInfoJobRequestInput";
import { SubmitMediaInfoJobRequestScheduleConfig } from "./SubmitMediaInfoJobRequestScheduleConfig";


export class SubmitMediaInfoJobRequest extends $dara.Model {
  /**
   * @remarks
   * The input of the job.
   * 
   * This parameter is required.
   */
  input?: SubmitMediaInfoJobRequestInput;
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
   * The scheduling parameters.
   */
  scheduleConfig?: SubmitMediaInfoJobRequestScheduleConfig;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * user-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      scheduleConfig: 'ScheduleConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitMediaInfoJobRequestInput,
      name: 'string',
      scheduleConfig: SubmitMediaInfoJobRequestScheduleConfig,
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

