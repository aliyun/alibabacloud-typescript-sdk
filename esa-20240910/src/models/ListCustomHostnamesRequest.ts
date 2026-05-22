// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomHostnamesRequest extends $dara.Model {
  hostname?: string;
  nameMatchType?: string;
  pageNumber?: number;
  pageSize?: number;
  recordId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      nameMatchType: 'NameMatchType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordId: 'RecordId',
      siteId: 'SiteId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      nameMatchType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recordId: 'number',
      siteId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

