// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobSnapshotInfosResponseBodyDataJobInfoList } from "./ListJobSnapshotInfosResponseBodyDataJobInfoList";


export class ListJobSnapshotInfosResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job snapshots.
   */
  jobInfoList?: ListJobSnapshotInfosResponseBodyDataJobInfoList[];
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
   * The total number of returned results.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobInfoList: 'jobInfoList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfoList: { 'type': 'array', 'itemType': ListJobSnapshotInfosResponseBodyDataJobInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobInfoList)) {
      $dara.Model.validateArray(this.jobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

