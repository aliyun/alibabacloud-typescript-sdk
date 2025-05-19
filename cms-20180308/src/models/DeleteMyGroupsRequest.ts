// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMyGroupsRequest extends $dara.Model {
  groupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

