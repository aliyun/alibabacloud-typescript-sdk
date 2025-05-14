// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLifecycleResponseBodyLifecycle extends $dara.Model {
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Creating
   * *   SaveFailed: The instance image failed to be saved.
   * *   Stopped
   * *   Failed
   * *   ResourceAllocating
   * *   Stopping
   * *   Updating
   * *   Saving
   * *   Starting
   * *   Running
   * *   Saved
   * *   EnvPreparing: Preparing environment.
   * *   ArrearStopping: The service is being stopped due to overdue payments.
   * *   Arrearge: The service is stopped due to overdue payments.
   * *   Queuing
   * *   Recovering
   * 
   * @example
   * Starting
   */
  status?: string;
  /**
   * @remarks
   * The reason code that corresponds to an event.
   * 
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @remarks
   * The reason message that corresponds to an event.
   * 
   * @example
   * “”
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The time the status was created, specifically the time the instance transitioned to this status (in GMT).
   * 
   * @example
   * 2022-10-21T07:27:44Z
   */
  gmtCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      gmtCreateTime: 'GmtCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      gmtCreateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

