// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData } from "./DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData";


export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPage extends $dara.Model {
  /**
   * @remarks
   * The information about the tasks.
   */
  data?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageData,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

