// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLakeStorageResponseBodyDataPermissions extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * test
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
   * The account type.
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
   * true
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

