// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertActionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert action integration.
   * 
   * @example
   * testId
   */
  alertActionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionId: 'alertActionId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

