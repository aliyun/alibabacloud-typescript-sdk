// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceGrantedToExpressConnectRouterResponseBodyEcrGrantedInstanceList extends $dara.Model {
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
   * The ID of the Alibaba Cloud account to which the Express Connect Router (ECR) instance that receives the authorization belongs.
   * 
   * @example
   * 229845258050****
   */
  ecrOwnerAliUid?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1669023139000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the instance was modified.
   * 
   * @example
   * 1669023139000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the authorization.
   * 
   * @example
   * gr-8gdelo13mi99g1****
   */
  grantId?: string;
  /**
   * @remarks
   * The instance ID of the authorization.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud enterprise account to which the instance belongs.
   * 
   * @example
   * 26842****
   */
  nodeOwnerBid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the instance belongs.
   * 
   * @example
   * 129845258050****
   */
  nodeOwnerUid?: number;
  /**
   * @remarks
   * The ID of the region to which the authorized instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  nodeRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * - **VBR**: VBR instance.
   * - **VPC**: VPC instance.
   * 
   * @example
   * VBR
   */
  nodeType?: string;
  /**
   * @remarks
   * The status of the authorized network instance.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ecrId: 'EcrId',
      ecrOwnerAliUid: 'EcrOwnerAliUid',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      grantId: 'GrantId',
      nodeId: 'NodeId',
      nodeOwnerBid: 'NodeOwnerBid',
      nodeOwnerUid: 'NodeOwnerUid',
      nodeRegionId: 'NodeRegionId',
      nodeType: 'NodeType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecrId: 'string',
      ecrOwnerAliUid: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      grantId: 'string',
      nodeId: 'string',
      nodeOwnerBid: 'string',
      nodeOwnerUid: 'number',
      nodeRegionId: 'string',
      nodeType: 'string',
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

export class DescribeInstanceGrantedToExpressConnectRouterResponseBody extends $dara.Model {
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
   * The status code. A value of 200 indicates that the call was successful. Other values indicate that the call failed. For more information about the failure causes, see the error codes.
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
   * IllegalParamFormat.Name
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** error message.
   * 
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * The param format of Name **** is illegal.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The list of instances authorized to the ECR.
   */
  ecrGrantedInstanceList?: DescribeInstanceGrantedToExpressConnectRouterResponseBodyEcrGrantedInstanceList[];
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
   * The maximum number of entries returned. Valid values: 1 to 2147483647. Default value: 20.
   * 
   * @example
   * 20
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
   * The pagination token. Valid values:
   * 
   * - If **NextToken** is empty, no next query is available.
   * - If **NextToken** returns a value, the value indicates the token for the next query.
   * 
   * @example
   * FFlMqGuJ10uN3l+FX/cBrGDNXUOUifNeOuAJlT4dc3vsWD6DsNSFAC2FtpeH5QOSG2WFdyRoun7gSLCm5o69YnAQ==
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
   * The total number of network instances for which authorization is granted to the Express Connect Router (ECR).
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      ecrGrantedInstanceList: 'EcrGrantedInstanceList',
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
      dynamicCode: 'string',
      dynamicMessage: 'string',
      ecrGrantedInstanceList: { 'type': 'array', 'itemType': DescribeInstanceGrantedToExpressConnectRouterResponseBodyEcrGrantedInstanceList },
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
    if(Array.isArray(this.ecrGrantedInstanceList)) {
      $dara.Model.validateArray(this.ecrGrantedInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

