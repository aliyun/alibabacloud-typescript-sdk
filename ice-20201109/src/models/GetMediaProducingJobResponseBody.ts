// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaProducingJobResponseBodyMediaProducingJob } from "./GetMediaProducingJobResponseBodyMediaProducingJob";


export class GetMediaProducingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the online editing project.
   */
  mediaProducingJob?: GetMediaProducingJobResponseBodyMediaProducingJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****83B7-7F87-4792-BFE9-63CD2137****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaProducingJob: 'MediaProducingJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaProducingJob: GetMediaProducingJobResponseBodyMediaProducingJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaProducingJob && typeof (this.mediaProducingJob as any).validate === 'function') {
      (this.mediaProducingJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

