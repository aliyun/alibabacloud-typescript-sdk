// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelRecycleBinJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task that you want to cancel.
   * 
   * You can call the [ListRecycleBinJobs](https://help.aliyun.com/document_detail/2412172.html) operation to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rb-15****ed-r-1625****2441
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

