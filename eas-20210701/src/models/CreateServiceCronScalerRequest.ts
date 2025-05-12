// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateServiceCronScalerRequestScaleJobs } from "./CreateServiceCronScalerRequestScaleJobs";


export class CreateServiceCronScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The points in time that are excluded when you schedule a CronHPA job. The points in time must be specified by using a cron expression.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The description of the CronHPA job.
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

