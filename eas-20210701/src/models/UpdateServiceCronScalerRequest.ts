// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceCronScalerRequestScaleJobs extends $dara.Model {
  /**
   * @remarks
   * The name of the scheduled auto scaling task.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression that specifies when to run the scaling task. For more information about cron expressions, see the **Cron expressions** section in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The target number of instances for the scaling task.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  targetSize?: number;
  /**
   * @remarks
   * The time zone for the cron expression.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schedule: 'Schedule',
      targetSize: 'TargetSize',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schedule: 'string',
      targetSize: 'number',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceCronScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expressions for the dates to exclude from the schedule.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The scheduled scaling tasks.
   * 
   * This parameter is required.
   */
  scaleJobs?: UpdateServiceCronScalerRequestScaleJobs[];
  static names(): { [key: string]: string } {
    return {
      excludeDates: 'ExcludeDates',
      scaleJobs: 'ScaleJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeDates: { 'type': 'array', 'itemType': 'string' },
      scaleJobs: { 'type': 'array', 'itemType': UpdateServiceCronScalerRequestScaleJobs },
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

