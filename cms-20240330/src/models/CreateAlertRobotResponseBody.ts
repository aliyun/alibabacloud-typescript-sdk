// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertRobotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The robot ID.
   * 
   * @example
   * testId
   */
  alertRobotId?: string;
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
      alertRobotId: 'alertRobotId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRobotId: 'string',
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

