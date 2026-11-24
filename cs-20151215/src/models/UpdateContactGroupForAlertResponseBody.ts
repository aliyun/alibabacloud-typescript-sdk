// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactGroupForAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned when the operation fails.
   * 
   * @example
   * contact group illegal.
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the update was successful. Valid values:
   * - true: The update was successful.
   * - false: The update failed.
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

