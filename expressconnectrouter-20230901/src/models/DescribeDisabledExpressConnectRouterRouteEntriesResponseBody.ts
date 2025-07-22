// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisabledExpressConnectRouterRouteEntriesResponseBodyDisabledRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 192.168.100.110/32
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ECR ID.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The time when the route entry was created.
   * 
   * @example
   * 1682317345
   */
  gmtCreate?: string;
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
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      ecrId: 'EcrId',
      gmtCreate: 'GmtCreate',
      nexthopInstanceId: 'NexthopInstanceId',
      nexthopInstanceRegionId: 'NexthopInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      ecrId: 'string',
      gmtCreate: 'string',
      nexthopInstanceId: 'string',
      nexthopInstanceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisabledExpressConnectRouterRouteEntriesResponseBody extends $dara.Model {
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
   * The routes that are queried.
   */
  disabledRouteEntryList?: DescribeDisabledExpressConnectRouterRouteEntriesResponseBodyDisabledRouteEntryList[];
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
   * >  For example, if the value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the value of **DynamicMessage** is **DtsInstanceId**, the request parameter **DtsInstanceId** is invalid.
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
   * The total number of entries returned. Valid values: 1 to 2147483647. Default value: 10.
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
   * *   If NextToken is empty, no next page exists.
   * *   If a value of NextToken is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * gAAAAABkDTaRFnmxUoMLVOn8YTIgYFeL2ch8j0sJs8VCIU8SS5438m3D9X1VqspCcaUEHRN9I_AfVwMhZHAhcNivifK_OtQxJQ==
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
   * Indicates whether routes are disabled by the ECR. Valid values:
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
   * The total number of routes.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      disabledRouteEntryList: 'DisabledRouteEntryList',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      disabledRouteEntryList: { 'type': 'array', 'itemType': DescribeDisabledExpressConnectRouterRouteEntriesResponseBodyDisabledRouteEntryList },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disabledRouteEntryList)) {
      $dara.Model.validateArray(this.disabledRouteEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

