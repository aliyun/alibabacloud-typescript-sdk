// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterInspectReportsResponseBodyReportsSummary } from "./ListClusterInspectReportsResponseBodyReportsSummary";


export class ListClusterInspectReportsResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The report completion time.
   * 
   * @example
   * 2024-12-18T19:40:16.778333+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * An inspection report ID.
   * 
   * @example
   * 782df89346054a0000562063a6****
   */
  reportId?: string;
  /**
   * @remarks
   * The report start time.
   * 
   * @example
   * 2024-12-18T19:40:16.778333+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The inspection report status.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The inspection summary.
   */
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

