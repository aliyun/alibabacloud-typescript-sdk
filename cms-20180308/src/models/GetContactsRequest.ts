// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
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

