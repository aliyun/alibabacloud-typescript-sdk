// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSyncMediaInfoJobRequestInput } from "./SubmitSyncMediaInfoJobRequestInput";
import { SubmitSyncMediaInfoJobRequestScheduleConfig } from "./SubmitSyncMediaInfoJobRequestScheduleConfig";


export class SubmitSyncMediaInfoJobRequest extends $dara.Model {
  /**
   * @remarks
   * The input of the job.
   * 
   * This parameter is required.
   */
  input?: SubmitSyncMediaInfoJobRequestInput;
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
   * The scheduling parameters. This parameter is optional.
   */
  scheduleConfig?: SubmitSyncMediaInfoJobRequestScheduleConfig;
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
      input: SubmitSyncMediaInfoJobRequestInput,
      name: 'string',
      scheduleConfig: SubmitSyncMediaInfoJobRequestScheduleConfig,
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

