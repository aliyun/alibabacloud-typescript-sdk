// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobInstanceResponseBodyDataJobInstanceDetail } from "./GetJobInstanceResponseBodyDataJobInstanceDetail";


export class GetJobInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the job instance.
   */
  jobInstanceDetail?: GetJobInstanceResponseBodyDataJobInstanceDetail;
  static names(): { [key: string]: string } {
    return {
      jobInstanceDetail: 'JobInstanceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceDetail: GetJobInstanceResponseBodyDataJobInstanceDetail,
    };
  }

  validate() {
    if(this.jobInstanceDetail && typeof (this.jobInstanceDetail as any).validate === 'function') {
      (this.jobInstanceDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

