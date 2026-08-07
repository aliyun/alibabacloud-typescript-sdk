// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataMaskingTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The service to which the destination data source belongs. Valid values:
   * - **1**: MaxCompute.
   * - **2**: OSS.
   * - **3**: ADS.
   * - **4**: OTS.
   * - **5**: RDS.
   * - **6**: SELF_DB.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The end time of the task creation period. Format: timestamp. Unit: milliseconds.
   * 
   * @example
   * 1583856000000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used to search for tasks. You can search by task name or task ID.
   * 
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * The start time of the task creation period. Format: timestamp. Unit: milliseconds.
   * 
   * @example
   * 1582992000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dstType: 'DstType',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dstType: 'number',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      searchKey: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

