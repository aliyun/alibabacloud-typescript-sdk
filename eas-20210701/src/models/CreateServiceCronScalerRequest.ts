// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceCronScalerRequestScaleJobs extends $dara.Model {
  /**
   * @remarks
   * The name of the scheduled auto-scaling task.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression that specifies when to run the scaling task. For more information about how to configure a cron expression, see the **Cron expressions** section.
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
   * 1
   */
  targetSize?: number;
  /**
   * @remarks
   * The time zone for the scheduled scaling task.
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

export class CreateServiceCronScalerRequest extends $dara.Model {
  /**
   * @remarks
   * A list of cron expressions for dates to exclude.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The scheduled scaling tasks.
   * 
   * This parameter is required.
   */
  scaleJobs?: CreateServiceCronScalerRequestScaleJobs[];
  static names(): { [key: string]: string } {
    return {
      excludeDates: 'ExcludeDates',
      scaleJobs: 'ScaleJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeDates: { 'type': 'array', 'itemType': 'string' },
      scaleJobs: { 'type': 'array', 'itemType': CreateServiceCronScalerRequestScaleJobs },
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

