// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Success
   */
  msg?: string;
  /**
   * @remarks
   * The operation result. Valid values:
   * 
   * *   True: The operation is successful.
   * *   False: The operation failed.
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

