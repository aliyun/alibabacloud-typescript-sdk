// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail } from "./DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail";


export class DescribeJobResourceUsageResponseBodyDataJobAcuUsage extends $dara.Model {
  /**
   * @remarks
   * The ACU usage.
   */
  acuUsageDetail?: DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail;
  /**
   * @remarks
   * The end time of the job. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-23T16:00:00Z
   */
  jobEndTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1592
   */
  jobId?: string;
  /**
   * @remarks
   * The start time of the job. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  jobStartTime?: string;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * @example
   * job_default
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      acuUsageDetail: 'AcuUsageDetail',
      jobEndTime: 'JobEndTime',
      jobId: 'JobId',
      jobStartTime: 'JobStartTime',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuUsageDetail: DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail,
      jobEndTime: 'string',
      jobId: 'string',
      jobStartTime: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    if(this.acuUsageDetail && typeof (this.acuUsageDetail as any).validate === 'function') {
      (this.acuUsageDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

