// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsDbsRequestSorter } from "./ListMmsDbsRequestSorter";


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

