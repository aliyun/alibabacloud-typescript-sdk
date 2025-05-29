// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies } from "./ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies";


export class ListTrafficMarkingPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query.
   * 
   * *   If **NextToken** was not returned in the previous query, it indicates that no additional results exist.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 699989E4-64A0-5F78-8B93-CDB32D98971F
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the traffic marking policy.
   */
  trafficMarkingPolicies?: ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficMarkingPolicies: 'TrafficMarkingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      trafficMarkingPolicies: { 'type': 'array', 'itemType': ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.trafficMarkingPolicies)) {
      $dara.Model.validateArray(this.trafficMarkingPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

