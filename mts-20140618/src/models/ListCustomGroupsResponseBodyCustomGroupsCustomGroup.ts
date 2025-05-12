// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomGroupsResponseBodyCustomGroupsCustomGroup extends $dara.Model {
  customGroupDescription?: string;
  /**
   * @example
   * 1
   */
  customGroupId?: string;
  customGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      customGroupDescription: 'CustomGroupDescription',
      customGroupId: 'CustomGroupId',
      customGroupName: 'CustomGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customGroupDescription: 'string',
      customGroupId: 'string',
      customGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

