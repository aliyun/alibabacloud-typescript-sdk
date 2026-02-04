// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTrialStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  trialStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trialStatus: 'TrialStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trialStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

