// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountDescriptionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * testuser
   */
  account?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

