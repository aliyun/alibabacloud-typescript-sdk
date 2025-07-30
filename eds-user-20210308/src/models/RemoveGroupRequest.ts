// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveGroupRequest extends $dara.Model {
  /**
   * @example
   * ug-12341234****
   */
  groupId?: string;
  groupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupIds: 'GroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

