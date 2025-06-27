// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRerunWorkflowInstancesResultResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The failure message. Returned if the rerun fails.
   * 
   * @example
   * Invalid Param xxx
   */
  failureMessage?: string;
  /**
   * @remarks
   * The status. NotRun Success Failure
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failureMessage: 'FailureMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

