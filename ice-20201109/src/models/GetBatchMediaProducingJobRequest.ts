// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchMediaProducingJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the quick video production job.
   * 
   * @example
   * ****b4549d46c88681030f6e****
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

