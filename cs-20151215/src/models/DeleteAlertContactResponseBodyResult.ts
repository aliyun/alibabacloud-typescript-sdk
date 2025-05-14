// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertContactResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The deletion status.
   * 
   * *   true: The alert contact was deleted.
   * *   false: The alert contact failed to be deleted.
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
   * Delete contact resource failed.
   */
  msg?: string;
  /**
   * @remarks
   * An alert contact ID.
   * 
   * @example
   * 12345
   */
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      msg: 'msg',
      contactId: 'contact_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      msg: 'string',
      contactId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

