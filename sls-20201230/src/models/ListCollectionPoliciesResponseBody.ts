// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCollectionPoliciesResponseBodyData } from "./ListCollectionPoliciesResponseBodyData";
import { ListCollectionPoliciesResponseBodyStatistics } from "./ListCollectionPoliciesResponseBodyStatistics";


export class ListCollectionPoliciesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentCount?: number;
  /**
   * @remarks
   * The data of the policies that are matched against the query conditions. The data is returned based on paginated results.
   */
  data?: ListCollectionPoliciesResponseBodyData[];
  statistics?: ListCollectionPoliciesResponseBodyStatistics[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'currentCount',
      data: 'data',
      statistics: 'statistics',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      data: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyData },
      statistics: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyStatistics },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

