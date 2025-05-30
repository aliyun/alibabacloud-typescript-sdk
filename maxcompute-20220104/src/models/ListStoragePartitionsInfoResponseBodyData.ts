// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList } from "./ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList";


export class ListStoragePartitionsInfoResponseBodyData extends $dara.Model {
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
   * The partition storage information.
   */
  storagePartitionInfoList?: ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      storagePartitionInfoList: 'storagePartitionInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storagePartitionInfoList: { 'type': 'array', 'itemType': ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storagePartitionInfoList)) {
      $dara.Model.validateArray(this.storagePartitionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

