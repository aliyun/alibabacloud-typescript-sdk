// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceGrantedToExpressConnectRouterResponseBodyEcrGrantedInstanceList extends $dara.Model {
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
   * The ID of the Alibaba Cloud account that owns the ECR to which you want to grant permissions.
   * 
   * @example
   * 1456408190545060
   */
  ecrOwnerAliUid?: string;
  /**
   * @remarks
   * The time when the network instance was created.
   * 
   * @example
   * 1669023139000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the network instance was modified.
   * 
   * @example
   * 1669023139000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The authorization ID.
   * 
   * @example
   * gr-8gdelo13mi99g1****
   */
  grantId?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud enterprise account that owns the network instance.
   * 
   * @example
   * 26842
   */
  nodeOwnerBid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the network instance.
   * 
   * @example
   * 129845258050****
   */
  nodeOwnerUid?: number;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * @example
   * cn-hangzhou
   */
  nodeRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VBR**
   * *   **VPC**
   * 
   * @example
   * VBR
   */
  nodeType?: string;
  /**
   * @remarks
   * The state of the network instance.
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
   * IllegalParamFormat.Name
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the `%s` variable in **ErrMessage**.
   * 
   * >  For example, if the value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the value of **DynamicMessage** is **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * The param format of Name **** is illegal.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The network instances whose permissions are granted to the ECR.
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
   * The total number of entries returned. Valid values: 1 to 2147483647. Default value: 20.
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
   * FFlMqGuJ10uN3l+FX/cBrGDNXUOUifNeOuAJlT4dc3vsWD6DsNSFAC2FtpeH5QOSG2WFdyRoun7gSLCm5o69YnAQ==
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
   * The total number of network instances whose permissions are granted to the ECR.
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

