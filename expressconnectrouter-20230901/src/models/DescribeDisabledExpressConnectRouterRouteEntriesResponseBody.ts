// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisabledExpressConnectRouterRouteEntriesResponseBodyDisabledRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route entry.
   * 
   * @example
   * 192.168.100.110/32
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
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
   * The instance ID of the next hop.
   * 
   * @example
   * br-hp3u4u5f03tfuljis****
   */
  nexthopInstanceId?: string;
  /**
   * @remarks
   * The region ID of the next hop instance.
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
   * The status code. A value of 200 indicates that the call was successful. Other values indicate that the call failed. For more information about the causes of failure, see error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of queried route entries.
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
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** error message.
   * 
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsInstanceId**, it indicates that the **DtsInstanceId** request parameter is invalid.
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
   * The maximum number of entries to return. Valid values: 1 to 2147483647. Default value: 10.
   * 
   * @example
   * 6
   */
  maxResults?: number;
  /**
   * @remarks
   * The message returned by the operation.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If NextToken is empty, no next query is required.
   * - If NextToken is returned, the value indicates the token for the next query.
   * 
   * @example
   * gAAAAABkDTaRFnmxUoMLVOn8YTIgYFeL2ch8j0sJs8VCIU8SS5438m3D9X1VqspCcaUEHRN9I_AfVwMhZHAhcNivifK_OtQxJQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6FABF516-FED3-5697-BDA2-B18C5D9A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the disabled Express Connect Router (ECR) routing is successfully queried. Valid values:
   * - **True**: The query was successful.
   * - **False**: The query failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of route entry.
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

