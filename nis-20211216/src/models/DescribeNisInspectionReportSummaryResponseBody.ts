// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNisInspectionReportSummaryResponseBodySummary } from "./DescribeNisInspectionReportSummaryResponseBodySummary";


export class DescribeNisInspectionReportSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 2024-06-03 09:36:00
   */
  endTime?: string;
  /**
   * @example
   * nir-38abb318b27b49cc9a01
   */
  inspectionReportId?: string;
  /**
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * 4838F3F2-30E1-5D82-B25A-B9FE33BC3E25
   */
  requestId?: string;
  /**
   * @example
   * 2024-06-03 09:35:00
   */
  startTime?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  summary?: DescribeNisInspectionReportSummaryResponseBodySummary;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inspectionReportId: 'InspectionReportId',
      inspectionTaskId: 'InspectionTaskId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      inspectionReportId: 'string',
      inspectionTaskId: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      summary: DescribeNisInspectionReportSummaryResponseBodySummary,
    };
  }

  validate() {
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

