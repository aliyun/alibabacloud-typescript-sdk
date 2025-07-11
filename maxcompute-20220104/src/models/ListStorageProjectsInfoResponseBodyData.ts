// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList } from "./ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList";


export class ListStorageProjectsInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  storageProjectInfoList?: ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList[];
  /**
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      storageProjectInfoList: 'storageProjectInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storageProjectInfoList: { 'type': 'array', 'itemType': ListStorageProjectsInfoResponseBodyDataStorageProjectInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storageProjectInfoList)) {
      $dara.Model.validateArray(this.storageProjectInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

