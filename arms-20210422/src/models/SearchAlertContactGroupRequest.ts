// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertContactGroupRequest extends $dara.Model {
  contactGroupIds?: string;
  contactGroupName?: string;
  contactId?: number;
  contactName?: string;
  isDetail?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'ContactGroupIds',
      contactGroupName: 'ContactGroupName',
      contactId: 'ContactId',
      contactName: 'ContactName',
      isDetail: 'IsDetail',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: 'string',
      contactGroupName: 'string',
      contactId: 'number',
      contactName: 'string',
      isDetail: 'boolean',
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

