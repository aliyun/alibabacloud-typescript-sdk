// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInsightsEventsCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of Insights events.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The type of the Insights event. Valid values:
   * 
   * - IpInsight: IP request events.
   * 
   * - ApiCallRateInsight: High-risk API call events.
   * 
   * - ApiErrorRateInsight: API error events.
   * 
   * - AkInsight: AccessKey pair call events.
   * 
   * - PolicyChangeInsight: Permission change events.
   * 
   * - PasswordChangeInsight: Password change events.
   * 
   * - TrailConcealmentInsight: Trail concealment events.
   * 
   * @example
   * IpInsight
   */
  insightType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      insightType: 'InsightType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      insightType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInsightsEventsCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the Insights events.
   */
  data?: GetInsightsEventsCountResponseBodyData[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * VjE6bHJlTGoxdm1M****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4ABAEA6E-C740-5CE2-A003-643E5519****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetInsightsEventsCountResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

