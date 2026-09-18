// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobPlan } from "./JobPlan";


export class ListJobPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of job plans.
   */
  jobPlans?: JobPlan[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82-9624-EC2B1779848E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobPlans: 'JobPlans',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobPlans: { 'type': 'array', 'itemType': JobPlan },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobPlans)) {
      $dara.Model.validateArray(this.jobPlans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

