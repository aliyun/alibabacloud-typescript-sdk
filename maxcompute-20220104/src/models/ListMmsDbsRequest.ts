// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDbsRequestSorter extends $dara.Model {
  /**
   * @remarks
   * Number of data rows in the database
   * 
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @remarks
   * Size of data in the database
   * 
   * @example
   * asc
   */
  size?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-12-17 15:44:17
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      numRows: 'numRows',
      size: 'size',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numRows: 'string',
      size: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDbsRequest extends $dara.Model {
  /**
   * @remarks
   * Data source name
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Sorting conditions
   */
  sorter?: ListMmsDbsRequestSorter;
  /**
   * @remarks
   * Data source status
   * 
   * @example
   * STARTED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      sorter: 'sorter',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sorter: ListMmsDbsRequestSorter,
      status: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

