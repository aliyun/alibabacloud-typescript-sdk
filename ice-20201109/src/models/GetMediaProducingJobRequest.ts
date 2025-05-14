// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaProducingJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media editing and production job.
   * 
   * @example
   * ****cdb3e74639973036bc84****
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

