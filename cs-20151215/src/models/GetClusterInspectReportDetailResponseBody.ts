// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterInspectReportDetailResponseBodyCheckItemResults } from "./GetClusterInspectReportDetailResponseBodyCheckItemResults";
import { GetClusterInspectReportDetailResponseBodySummary } from "./GetClusterInspectReportDetailResponseBodySummary";


export class GetClusterInspectReportDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results.
   */
  checkItemResults?: GetClusterInspectReportDetailResponseBodyCheckItemResults[];
  /**
   * @remarks
   * The completion time of the inspection report.
   * 
   * @example
   * 2024-12-18T19:41:12.778433+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The token that is used to display the returned tags on multiple pages.
   * 
   * @example
   * AK8uQQrxgFK8sbARvnCj6w9R3kPme4I3
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the inspection report.
   * 
   * @example
   * 782df89346054a0000562063a****
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 49511F2D-D56A-5C24-B9AE-C8491E09B***
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the inspection report.
   * 
   * @example
   * 2024-12-18T19:40:16.778333+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the inspection report. Valid values:
   * 
   * *   completed: The inspection report is generated.
   * *   running: The inspection report is generating.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * Overview of inspection reports.
   */
  summary?: GetClusterInspectReportDetailResponseBodySummary;
  static names(): { [key: string]: string } {
    return {
      checkItemResults: 'checkItemResults',
      endTime: 'endTime',
      nextToken: 'nextToken',
      reportId: 'reportId',
      requestId: 'requestId',
      startTime: 'startTime',
      status: 'status',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItemResults: { 'type': 'array', 'itemType': GetClusterInspectReportDetailResponseBodyCheckItemResults },
      endTime: 'string',
      nextToken: 'string',
      reportId: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      summary: GetClusterInspectReportDetailResponseBodySummary,
    };
  }

  validate() {
    if(Array.isArray(this.checkItemResults)) {
      $dara.Model.validateArray(this.checkItemResults);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

