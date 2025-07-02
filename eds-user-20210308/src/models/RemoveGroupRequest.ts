// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveGroupRequest extends $dara.Model {
  /**
   * @example
   * ug-12341234****
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

