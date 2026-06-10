// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobDataParsingTaskProgressRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c209abb3-6804-4a75-b2c7-dd55c8c61b6a
   */
  instanceId?: string;
  /**
   * @remarks
   * ID of the job data parsing task.
   * 
   * > Get this value from the CreateJobDataParsingTask operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 50d5e164-9365-4261-980e-3d979c2c948c
   */
  jobDataParsingTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobDataParsingTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

