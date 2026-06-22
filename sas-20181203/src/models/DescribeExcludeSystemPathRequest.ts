// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExcludeSystemPathRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: 1, which indicates that the first page is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page when paging is used for a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
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

