// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceCronScalerResponseBodyScaleJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the most recent CronHPA job was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-24T02:11:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the most recent CronHPA job ran. The time is displayed in UTC.
   * 
   * @example
   * 2022-02-24T06:31:00Z
   */
  lastProbeTime?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * "cron hpa job scale-jobs-0 executed successfully. current replicas:3, desired replicas:2."
   */
  message?: string;
  /**
   * @remarks
   * The name of the CronHPA job.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression that is used to configure the execution time of the CronHPA job.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The status of the most recent CronHPA job.
   * 
   * @example
   * Succeed
   */
  state?: string;
  /**
   * @remarks
   * The number of instances that you expect to configure for the CronHPA job.
   * 
   * @example
   * 1
   */
  targetSize?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastProbeTime: 'LastProbeTime',
      message: 'Message',
      name: 'Name',
      schedule: 'Schedule',
      state: 'State',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastProbeTime: 'string',
      message: 'string',
      name: 'string',
      schedule: 'string',
      state: 'string',
      targetSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

