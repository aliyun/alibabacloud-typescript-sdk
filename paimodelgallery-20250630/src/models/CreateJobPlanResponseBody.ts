// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job plan ID.
   * 
   * @example
   * jp-xxxxxx
   */
  jobPlanId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82-9624-EC2B1779848E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobPlanId: 'JobPlanId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobPlanId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

