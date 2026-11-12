// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceCronScalerRequestScaleJobs extends $dara.Model {
  /**
   * @remarks
   * The name of the scheduled scaling job.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression for the scaling job. For information about how to configure a cron expression, see the **Supplementary request parameter descriptions** section.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The target number of instances for the scaling job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  targetSize?: number;
  /**
   * @remarks
   * The time zone configuration used to parse the execution time of the scheduled scaling job.
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
   * The list of cron expressions for the dates to be excluded.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The scheduled scaling jobs.
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

