// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterRouteEntriesResponseBodyRouteEntriesList extends $dara.Model {
  /**
   * @remarks
   * The AS path traversed by the route entry.
   * 
   * @example
   * [64993,64512]
   */
  asPath?: string;
  /**
   * @remarks
   * The community value carried by the BGP route entry.
   * 
   * @example
   * 9001:9263
   */
  community?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry.
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The MED value carried by the BGP route entry, which takes effect for routing between the Express Connect Router (ECR) and the TR. 
   * - The MED value can be set to 2000. After the configuration, the TR and the Express Connect Router (ECR) serve as the default path. 
   * - For a non-default path, the MED value is empty. 
   * - For TRs in the same Cloud Enterprise Network (CEN), only one associated object can have the MED value set to 2000.
   * 
   * @example
   * 2000
   */
  med?: number;
  /**
   * @remarks
   * The next hop instance ID.
   * 
   * @example
   * vbr-hp3u4u5f03tfuljis****
   */
  nexthopInstanceId?: string;
  /**
   * @remarks
   * The region where the next hop instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  nexthopInstanceRegionId?: string;
  /**
   * @remarks
   * The status of the Express Connect Router (ECR) instance.
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
   * The details of the access denial.
   * 
   * @example
   * Authentication is failed for ****
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code that indicates whether the call is successful. A value of 200 indicates success. Other values indicate failure. For more information about the cause of failure, see Error codes.
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
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** error message.
   * 
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
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
   * The maximum number of entries returned. Valid values: 1 to 2147483647. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The message returned for the instance operation.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no subsequent query is required.
   * - If **NextToken** has a return value, the value indicates the token for the next query.
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
   * The list of route entries.
   */
  routeEntriesList?: DescribeExpressConnectRouterRouteEntriesResponseBodyRouteEntriesList[];
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **True**: The call was successful.
   * - **False**: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
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

