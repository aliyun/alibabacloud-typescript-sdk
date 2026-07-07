// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * example
   */
  keyword?: string;
  /**
   * @remarks
   * The page number of the data to return.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to query the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to return only valid certificates.
   * 
   * @example
   * true
   */
  validOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      validOnly: 'ValidOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
      validOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

