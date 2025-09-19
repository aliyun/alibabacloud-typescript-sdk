// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkMonitorAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the members.
   * 
   * This parameter is required.
   * 
   * @example
   * 131331822340XXXX,140649175187XXXX
   */
  accountIds?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

