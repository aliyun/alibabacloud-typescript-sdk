// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 5c9dff***************59d50a967f5
   */
  jobId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   transcode
   * *   snapshot
   * *   ai
   * 
   * This parameter is required.
   * 
   * @example
   * transcode
   */
  jobType?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobType: 'JobType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

