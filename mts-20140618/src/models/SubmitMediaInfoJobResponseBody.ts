// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaInfoJobResponseBodyMediaInfoJob } from "./SubmitMediaInfoJobResponseBodyMediaInfoJob";


export class SubmitMediaInfoJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media information analysis job.
   */
  mediaInfoJob?: SubmitMediaInfoJobResponseBodyMediaInfoJob;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62D9BE16-B7D5-550C-A482-7A0F60E09877
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJob: 'MediaInfoJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJob: SubmitMediaInfoJobResponseBodyMediaInfoJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaInfoJob && typeof (this.mediaInfoJob as any).validate === 'function') {
      (this.mediaInfoJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

