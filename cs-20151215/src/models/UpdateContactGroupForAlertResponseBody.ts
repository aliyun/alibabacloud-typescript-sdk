// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactGroupForAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * contact group illegal.
   */
  msg?: string;
  /**
   * @remarks
   * The update status.
   * 
   * *   true: The update is successful.
   * *   false: The update failed.
   * 
   * @example
   * true
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

