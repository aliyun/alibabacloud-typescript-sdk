// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStorageTablesInfoResponseBodyDataStorageTableInfoList } from "./ListStorageTablesInfoResponseBodyDataStorageTableInfoList";


export class ListStorageTablesInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The date on which the statistics are collected.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The table storage information.
   */
  storageTableInfoList?: ListStorageTablesInfoResponseBodyDataStorageTableInfoList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      storageTableInfoList: 'storageTableInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storageTableInfoList: { 'type': 'array', 'itemType': ListStorageTablesInfoResponseBodyDataStorageTableInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storageTableInfoList)) {
      $dara.Model.validateArray(this.storageTableInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

