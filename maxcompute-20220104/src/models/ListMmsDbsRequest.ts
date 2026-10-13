// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDbsRequestSorter extends $dara.Model {
  /**
   * @remarks
   * The number of data rows in the database.
   * 
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @remarks
   * The size of data in the database.
   * 
   * @example
   * asc
   */
  size?: string;
  /**
   * @remarks
   * The update time. Format: YYYY-MM-DD HH:mm:ss.
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
   * The name of the data source.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting conditions.
   */
  sorter?: ListMmsDbsRequestSorter;
  /**
   * @remarks
   * The status of the data source.
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

