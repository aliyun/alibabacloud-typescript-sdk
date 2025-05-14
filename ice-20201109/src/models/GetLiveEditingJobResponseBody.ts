// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveEditingJobResponseBodyLiveEditingJob } from "./GetLiveEditingJobResponseBodyLiveEditingJob";


export class GetLiveEditingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the live editing job.
   */
  liveEditingJob?: GetLiveEditingJobResponseBodyLiveEditingJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****36-3C1E-4417-BDB2-1E034F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveEditingJob: 'LiveEditingJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveEditingJob: GetLiveEditingJobResponseBodyLiveEditingJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveEditingJob && typeof (this.liveEditingJob as any).validate === 'function') {
      (this.liveEditingJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

