// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterResponseBodyEcrListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterResponseBodyEcrList extends $dara.Model {
  /**
   * @remarks
   * The autonomous system number (ASN) of the ECR.
   * 
   * @example
   * 45104
   */
  alibabaSideAsn?: number;
  /**
   * @remarks
   * The business state of the ECR. Valid values:
   * 
   * *   **Normal:** The ECR is running as expected.
   * *   **FinancialLocked**: The ECR is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The description of the ECR.
   * 
   * @example
   * test
   */
  description?: string;
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
   * The time when the ECR was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-16T01:44:50Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the ECR was modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-16T01:44:50Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the ECR.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the ECR.
   * 
   * @example
   * 170646818729****
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the ECR belongs.
   * 
   * @example
   * rg-aekzuscospt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The deployment state of the ECR. Valid values:
   * 
   * *   **ACTIVE**: The ECR is created.
   * *   **UPDATING**: The ECR is being modified.
   * *   **ASSOCIATING**: The ECR is being associated with resources.
   * *   **DISSOCIATING**: The resource is being disassociated from resources.
   * *   **LOCKED_ATTACHING**: The ECR is locked because it is being associated with an external system.
   * *   **LOCKED_DETACHING**: The ECR is locked because it is being disassociated from an external system.
   * *   **RECLAIMING**: The ECR is waiting to release resources.
   * *   **DELETING**: The ECR is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeExpressConnectRouterResponseBodyEcrListTags[];
  static names(): { [key: string]: string } {
    return {
      alibabaSideAsn: 'AlibabaSideAsn',
      bizStatus: 'BizStatus',
      description: 'Description',
      ecrId: 'EcrId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alibabaSideAsn: 'number',
      bizStatus: 'string',
      description: 'string',
      ecrId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      name: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeExpressConnectRouterResponseBodyEcrListTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterResponseBody extends $dara.Model {
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
   * The ECRs.
   */
  ecrList?: DescribeExpressConnectRouterResponseBodyEcrList[];
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
   * 10
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
   * AAAAAdDWBF2w6Olxc+cMPjUtUMpttDGZkffvHCfhBKKNEyCVaq+WUEzuUWpp9+QOApNf6g==
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
   * The total number of ECRs.
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
      ecrList: 'EcrList',
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
      ecrList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterResponseBodyEcrList },
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
    if(Array.isArray(this.ecrList)) {
      $dara.Model.validateArray(this.ecrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

