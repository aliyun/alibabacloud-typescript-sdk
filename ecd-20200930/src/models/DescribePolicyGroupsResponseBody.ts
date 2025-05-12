// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePolicyGroupsResponseBodyDescribePolicyGroups } from "./DescribePolicyGroupsResponseBodyDescribePolicyGroups";


export class DescribePolicyGroupsResponseBody extends $dara.Model {
  count?: number;
  /**
   * @remarks
   * The cloud computer policies.
   */
  describePolicyGroups?: DescribePolicyGroupsResponseBodyDescribePolicyGroups[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      describePolicyGroups: 'DescribePolicyGroups',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      describePolicyGroups: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroups },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

