// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactListByContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudMonitor
   */
  contactGroupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
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

