// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorGroupMemberCreateCmd extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  contactIds?: number[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      contactIds: 'contactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      contactIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.contactIds)) {
      $dara.Model.validateArray(this.contactIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

