// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultList } from "./SubmitJobsResponseBodyJobResultList";


export class SubmitJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The transcoding jobs that are generated.
   */
  jobResultList?: SubmitJobsResponseBodyJobResultList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A45S71F6-D73936451234
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobResultList: 'JobResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResultList: SubmitJobsResponseBodyJobResultList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobResultList && typeof (this.jobResultList as any).validate === 'function') {
      (this.jobResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

