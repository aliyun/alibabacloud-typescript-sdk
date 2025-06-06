// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenterPolicyListResponseBodyDescribePolicyGroups } from "./DescribeCenterPolicyListResponseBodyDescribePolicyGroups";


export class DescribeCenterPolicyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud computer policies.
   */
  describePolicyGroups?: DescribeCenterPolicyListResponseBodyDescribePolicyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      describePolicyGroups: 'DescribePolicyGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describePolicyGroups: { 'type': 'array', 'itemType': DescribeCenterPolicyListResponseBodyDescribePolicyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.describePolicyGroups)) {
      $dara.Model.validateArray(this.describePolicyGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

