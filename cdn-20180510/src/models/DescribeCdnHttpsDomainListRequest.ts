// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnHttpsDomainListRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword that is used to search for certificates.
   * 
   * @example
   * com
   */
  keyword?: string;
  /**
   * @remarks
   * The number of the page to return. Valid values: **1** to **100000**.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

