// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies } from "./ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies";


export class ListCenInterRegionTrafficQosPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 113BFD47-63DF-5D9D-972C-033FB9C360CD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of QoS policies.
   */
  trafficQosPolicies?: ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficQosPolicies: 'TrafficQosPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      trafficQosPolicies: { 'type': 'array', 'itemType': ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.trafficQosPolicies)) {
      $dara.Model.validateArray(this.trafficQosPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

