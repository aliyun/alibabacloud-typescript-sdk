// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomHostnamesRequest extends $dara.Model {
  /**
   * @remarks
   * The SaaS domain name.
   * 
   * @example
   * custom.site.com
   */
  hostname?: string;
  /**
   * @remarks
   * The search match mode for the SaaS domain name. Default value: exact. Valid values:
   * - **prefix**: prefix match.
   * - **suffix**: suffix match.
   * - **exact**: exact match.
   * - **fuzzy**: fuzzy match.
   * 
   * @example
   * exact
   */
  nameMatchType?: string;
  /**
   * @remarks
   * The page number for a paged query. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: 1 to 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * The associated record ID. You can call the [ListRecords](https://help.aliyun.com/document_detail/2850265.html) operation to obtain the record ID.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 744571165985008
   */
  siteId?: number;
  /**
   * @remarks
   * The SaaS domain name status. Valid values:
   * - **pending**: pending verification.
   * - **active**: activated.
   * - **conflicted**: occupied.
   * - **offline**: offline.
   * 
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

