// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterRouteEntriesResponseBodyRouteEntriesList extends $dara.Model {
  /**
   * @remarks
   * The AS path of the route.
   * 
   * @example
   * [64993,64512]
   */
  asPath?: string;
  /**
   * @remarks
   * The community value that is carried in the BGP route.
   * 
   * @example
   * 9001:9263
   */
  community?: string;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 192.168.0.0/16
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The MED value of the BGP route, which is used between the ECR and the transit router.
   * 
   * *   You can set the MED value to 2000. In this case, the transit router and the ECR are used as default paths.
   * *   If a non-default path is used, the MED value is empty.
   * *   You can set the MED value to 2000 only for one object associated with a transit router of a CEN instance.
   * 
   * @example
   * 2000
   */
  med?: number;
  /**
   * @remarks
   * The ID of the next-hop instance.
   * 
   * @example
   * br-hp3u4u5f03tfuljis****
   */
  nexthopInstanceId?: string;
  /**
   * @remarks
   * The region ID of the next-hop instance.
   * 
   * @example
   * cn-hangzhou
   */
  nexthopInstanceRegionId?: string;
  /**
   * @remarks
   * The state of the ECR.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
      community: 'Community',
      destinationCidrBlock: 'DestinationCidrBlock',
      med: 'Med',
      nexthopInstanceId: 'NexthopInstanceId',
      nexthopInstanceRegionId: 'NexthopInstanceRegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: 'string',
      community: 'string',
      destinationCidrBlock: 'string',
      med: 'number',
      nexthopInstanceId: 'string',
      nexthopInstanceRegionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * Authentication is failed for ****
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed. For more information, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * IllegalParamFormat.EcrId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the `%s` variable in **ErrMessage**.
   * 
   * >  For example, if the value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the value of **DynamicMessage** is **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * The param format of EcrId **** is illegal.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The total number of entries returned. Valid values: 1 to 2147483647. Default value: 10
   * 
   * @example
   * 6
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * gAAAAABkWwFTUMNCdWC0VMYOIylA56Hx6JUfCZlk5hQ5g_fnKmetN6303tqq5UJ2ouJzyT2fDOdzb-NqyEB5jcY8Z2euX7qHDA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FABF516-FED3-5697-BDA2-B18C5D9A****
   */
  requestId?: string;
  /**
   * @remarks
   * The routes.
   */
  routeEntriesList?: DescribeExpressConnectRouterRouteEntriesResponseBodyRouteEntriesList[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of route entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntriesList: 'RouteEntriesList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      routeEntriesList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterRouteEntriesResponseBodyRouteEntriesList },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeEntriesList)) {
      $dara.Model.validateArray(this.routeEntriesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

