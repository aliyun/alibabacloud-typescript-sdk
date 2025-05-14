// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveRecordJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the recording job.
   * 
   * This parameter is required.
   * 
   * @example
   * ab0e3e76-1e9d-11ed-ba64-0c42a1b73d66
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

