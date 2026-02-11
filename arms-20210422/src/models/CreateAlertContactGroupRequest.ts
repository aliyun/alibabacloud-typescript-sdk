// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactGroupName?: string;
  contactIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactIds: 'string',
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

