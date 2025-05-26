// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLakeStoragesResponseBodyItemsPermissions extends $dara.Model {
  /**
   * @remarks
   * The database account ID.
   * 
   * @example
   * -
   */
  account?: string;
  /**
   * @remarks
   * The read permissions.
   * 
   * @example
   * true
   */
  read?: boolean;
  /**
   * @remarks
   * The type of the database account.
   * 
   * @example
   * -
   */
  type?: string;
  /**
   * @remarks
   * The write permissions.
   * 
   * @example
   * false
   */
  write?: boolean;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      read: 'Read',
      type: 'Type',
      write: 'Write',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      read: 'boolean',
      type: 'string',
      write: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

