// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the current page. Starting value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for paging in a paged query. Settings: Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  search?: string;
  withoutMeteringData?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      search: 'Search',
      withoutMeteringData: 'WithoutMeteringData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      search: 'string',
      withoutMeteringData: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

