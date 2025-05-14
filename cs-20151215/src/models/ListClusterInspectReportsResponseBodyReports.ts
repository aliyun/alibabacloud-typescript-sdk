// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterInspectReportsResponseBodyReportsSummary } from "./ListClusterInspectReportsResponseBodyReportsSummary";


export class ListClusterInspectReportsResponseBodyReports extends $dara.Model {
  /**
   * @example
   * 2024-12-18T19:40:16.778333+08:00
   */
  endTime?: string;
  /**
   * @example
   * 782df89346054a0000562063a6****
   */
  reportId?: string;
  /**
   * @example
   * 2024-12-18T19:40:16.778333+08:00
   */
  startTime?: string;
  /**
   * @example
   * completed
   */
  status?: string;
  summary?: ListClusterInspectReportsResponseBodyReportsSummary;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      reportId: 'reportId',
      startTime: 'startTime',
      status: 'status',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      reportId: 'string',
      startTime: 'string',
      status: 'string',
      summary: ListClusterInspectReportsResponseBodyReportsSummary,
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

