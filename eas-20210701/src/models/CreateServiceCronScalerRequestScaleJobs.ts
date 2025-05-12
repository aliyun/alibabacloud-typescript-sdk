// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceCronScalerRequestScaleJobs extends $dara.Model {
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
   * The cron expression that is used to configure the execution time of the CronHPA job. For more information about how to configure cron expressions, see **Description of special characters** in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The number of instances that you want to configure for the CronHPA job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  targetSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schedule: 'Schedule',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schedule: 'string',
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

