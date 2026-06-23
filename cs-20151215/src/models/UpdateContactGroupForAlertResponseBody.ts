// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactGroupForAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned when the operation failed.
   * 
   * @example
   * contact group illegal.
   */
  msg?: string;
  /**
   * @remarks
   * The status of the update result. Valid values:
   * - true: The operation is successful.
   * - false: The operation failed.
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

