// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServiceCronScalerResponseBodyScaleJobs } from "./DescribeServiceCronScalerResponseBodyScaleJobs";


export class DescribeServiceCronScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The points in time that are excluded when you schedule a CronHPA job. The points in time must be specified by using a cron expression.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The CronHPA jobs.
   */
  scaleJobs?: DescribeServiceCronScalerResponseBodyScaleJobs[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      excludeDates: 'ExcludeDates',
      requestId: 'RequestId',
      scaleJobs: 'ScaleJobs',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeDates: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      scaleJobs: { 'type': 'array', 'itemType': DescribeServiceCronScalerResponseBodyScaleJobs },
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeDates)) {
      $dara.Model.validateArray(this.excludeDates);
    }
    if(Array.isArray(this.scaleJobs)) {
      $dara.Model.validateArray(this.scaleJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

