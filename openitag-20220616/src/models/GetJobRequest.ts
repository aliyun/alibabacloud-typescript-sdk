// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobRequest extends $dara.Model {
  /**
   * @remarks
   * Task Type. Currently, only DOWNLOWD_MARKRESULT_FLOW is available.
   * 
   * @example
   * DOWNLOWD_MARKRESULT_FLOW
   */
  jobType?: string;
  static names(): { [key: string]: string } {
    return {
      jobType: 'JobType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

