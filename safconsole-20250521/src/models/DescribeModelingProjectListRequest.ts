// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelingProjectListRequest extends $dara.Model {
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Pagination parameter: number of items per page, with a default value of 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Project status.
   * 
   * @example
   * PREPARING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
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

