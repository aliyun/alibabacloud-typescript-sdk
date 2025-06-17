// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage } from "./DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage";


export class DescribeUserUsageDetailDataExportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A91BE91F-0B34-4CBF-8E0F-A2977E15AA52
   */
  requestId?: string;
  /**
   * @remarks
   * The usage details returned per page.
   */
  usageDataPerPage?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageDataPerPage: 'UsageDataPerPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageDataPerPage: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPage,
    };
  }

  validate() {
    if(this.usageDataPerPage && typeof (this.usageDataPerPage as any).validate === 'function') {
      (this.usageDataPerPage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

