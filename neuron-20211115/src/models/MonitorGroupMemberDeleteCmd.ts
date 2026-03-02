// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorGroupMemberDeleteCmd extends $dara.Model {
  contactIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'contactIds',
      groupId: 'groupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: { 'type': 'array', 'itemType': 'number' },
      groupId: 'number',
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

