// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertContactRequest extends $dara.Model {
  contactIds?: string;
  contactName?: string;
  currentPage?: string;
  email?: string;
  pageSize?: string;
  phone?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'ContactIds',
      contactName: 'ContactName',
      currentPage: 'CurrentPage',
      email: 'Email',
      pageSize: 'PageSize',
      phone: 'Phone',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: 'string',
      contactName: 'string',
      currentPage: 'string',
      email: 'string',
      pageSize: 'string',
      phone: 'string',
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

