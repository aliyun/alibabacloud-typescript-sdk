// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobInfoResponseBodyDataJobConfigInfo } from "./GetJobInfoResponseBodyDataJobConfigInfo";


export class GetJobInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configurations of the job.
   */
  jobConfigInfo?: GetJobInfoResponseBodyDataJobConfigInfo;
  static names(): { [key: string]: string } {
    return {
      jobConfigInfo: 'JobConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobConfigInfo: GetJobInfoResponseBodyDataJobConfigInfo,
    };
  }

  validate() {
    if(this.jobConfigInfo && typeof (this.jobConfigInfo as any).validate === 'function') {
      (this.jobConfigInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

