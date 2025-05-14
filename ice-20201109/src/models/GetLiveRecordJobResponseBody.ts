// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveRecordJobResponseBodyRecordJob } from "./GetLiveRecordJobResponseBodyRecordJob";


export class GetLiveRecordJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the recording job.
   */
  recordJob?: GetLiveRecordJobResponseBodyRecordJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B57A046C-CE33-5FBB-B57A-D2B89ACF6907
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordJob: 'RecordJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordJob: GetLiveRecordJobResponseBodyRecordJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordJob && typeof (this.recordJob as any).validate === 'function') {
      (this.recordJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

