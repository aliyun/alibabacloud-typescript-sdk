// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnoseReportsResponseBodyReportsDetails } from "./DescribeDiagnoseReportsResponseBodyReportsDetails";


export class DescribeDiagnoseReportsResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The time when the diagnostic report was created.
   * 
   * @example
   * 2024-08-23T02:22:30Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The details of the diagnostic report.
   */
  details?: DescribeDiagnoseReportsResponseBodyReportsDetails[];
  /**
   * @remarks
   * The status of the diagnostic item. Only the severe status is displayed in the diagnostic report. Valid values:
   * 
   * *   Normal: The diagnostic result is normal.
   * *   Warn: The diagnostic result is warning.
   * *   Critical: The diagnostic result is critical.
   * 
   * @example
   * Normal
   */
  diagnoseStatus?: string;
  /**
   * @remarks
   * The status of the diagnostic report. Valid values:
   * 
   * *   processing: The diagnosis is in progress.
   * *   Finished: The diagnosis is complete.
   * 
   * @example
   * Finished
   */
  processStatus?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-bp14p0cjp7wvjob5l6hk
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp124uve5iph3*****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The user ID of the scaling group.
   * 
   * @example
   * 161456884*******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      details: 'Details',
      diagnoseStatus: 'DiagnoseStatus',
      processStatus: 'ProcessStatus',
      regionId: 'RegionId',
      reportId: 'ReportId',
      scalingGroupId: 'ScalingGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      details: { 'type': 'array', 'itemType': DescribeDiagnoseReportsResponseBodyReportsDetails },
      diagnoseStatus: 'string',
      processStatus: 'string',
      regionId: 'string',
      reportId: 'string',
      scalingGroupId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

