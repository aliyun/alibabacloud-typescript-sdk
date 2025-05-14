// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveTranscodeJobResponseBodyJob } from "./GetLiveTranscodeJobResponseBodyJob";


export class GetLiveTranscodeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the transcoding job.
   */
  job?: GetLiveTranscodeJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetLiveTranscodeJobResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

