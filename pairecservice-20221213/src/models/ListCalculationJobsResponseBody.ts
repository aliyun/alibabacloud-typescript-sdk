// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCalculationJobsResponseBodyCalculationJobs } from "./ListCalculationJobsResponseBodyCalculationJobs";


export class ListCalculationJobsResponseBody extends $dara.Model {
  calculationJobs?: ListCalculationJobsResponseBodyCalculationJobs[];
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      calculationJobs: 'CalculationJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calculationJobs: { 'type': 'array', 'itemType': ListCalculationJobsResponseBodyCalculationJobs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.calculationJobs)) {
      $dara.Model.validateArray(this.calculationJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

