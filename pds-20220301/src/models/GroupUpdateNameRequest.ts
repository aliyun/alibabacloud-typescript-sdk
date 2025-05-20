// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GroupUpdateNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

