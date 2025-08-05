// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDbsRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @example
   * asc
   */
  size?: string;
  /**
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
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  sorter?: ListMmsDbsRequestSorter;
  /**
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

