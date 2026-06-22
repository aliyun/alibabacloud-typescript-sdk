// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebPathRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Paging is used to display results.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Paging is used to display results.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The alert configuration type. Valid values:
   * 
   * - **web_path**.
   * 
   * @example
   * web_path
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

