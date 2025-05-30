// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResourceUsageResponseBodyDataJobResourceUsageList } from "./GetJobResourceUsageResponseBodyDataJobResourceUsageList";


export class GetJobResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list returned.
   */
  jobResourceUsageList?: GetJobResourceUsageResponseBodyDataJobResourceUsageList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
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
   * The total number of returned entries.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobResourceUsageList: 'jobResourceUsageList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResourceUsageList: { 'type': 'array', 'itemType': GetJobResourceUsageResponseBodyDataJobResourceUsageList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobResourceUsageList)) {
      $dara.Model.validateArray(this.jobResourceUsageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

