// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned when the execution fails.
   * 
   * @example
   * Success
   */
  msg?: string;
  /**
   * @remarks
   * The execution result status. Valid values:
   * - True: The execution is successful.
   * - False: The execution failed.
   * 
   * @example
   * True
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

