// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomHostnamesRequest extends $dara.Model {
  /**
   * @example
   * custom.site.com
   */
  hostname?: string;
  /**
   * @example
   * exact
   */
  nameMatchType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 744571165985008
   */
  siteId?: number;
  /**
   * @example
   * active
   */
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

