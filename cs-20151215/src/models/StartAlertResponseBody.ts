// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The status.
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

