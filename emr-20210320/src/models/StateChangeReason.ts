// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The status code. Possible values:
   * 
   * - UserRequest: The state change was initiated by the user.
   * 
   * - QuotaExceeded: A service or resource quota was exceeded.
   * 
   * - InternalError: An internal error occurred.
   * 
   * @example
   * MissingParameter
   */
  code?: string;
  /**
   * @remarks
   * A message providing additional details about the status code.
   * 
   * @example
   * The instance type is required.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

