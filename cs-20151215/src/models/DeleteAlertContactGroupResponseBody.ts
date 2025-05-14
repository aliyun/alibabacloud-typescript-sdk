// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertContactGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deletion status.
   * 
   * *   true: The alert contact group was deleted.
   * *   false: The alert contact group failed to be deleted.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Delete contact group resource failed.
   */
  msg?: string;
  /**
   * @remarks
   * The alert contact group ID.
   * 
   * @example
   * 12345
   */
  contactGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      msg: 'msg',
      contactGroupId: 'contact_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      msg: 'string',
      contactGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

