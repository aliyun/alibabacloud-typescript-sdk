// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEmployeeLeaveStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isLeave?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isLeave: 'is_leave',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLeave: 'boolean',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

