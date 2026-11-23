// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterResponseBodyEcrListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the Express Connect Router (ECR) instance.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the Express Connect Router (ECR) instance.
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
   * The ASN of the Express Connect Router (ECR) instance.
   * 
   * @example
   * 45104
   */
  alibabaSideAsn?: number;
  /**
   * @remarks
   * The business status of the service instance. Valid values:
   * 
   * - **Normal**: Normal.
   * 
   * - **FinancialLocked**: Locked due to overdue payment.
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The description of the Express Connect Router (ECR) instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Express Connect Router (ECR) instance.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The time when the Express Connect Router (ECR) instance was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2023-02-16T01:44:50Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the Express Connect Router (ECR) instance was modified. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2023-02-16T01:44:50Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the Express Connect Router (ECR) instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the Express Connect Router (ECR) instance belongs.
   * 
   * @example
   * 170646818729****
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the Express Connect Router (ECR) instance belongs.
   * 
   * @example
   * rg-aekzuscospt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The deployment status of the service instance. Valid values:
   * 
   * - **ACTIVE**: Created.
   * 
   * - **UPDATING**: Updating.
   * 
   * - **ASSOCIATING**: Associating resources.
   * 
   * - **DISSOCIATING**: Dissociating resources.
   * 
   * - **LOCKED_ATTACHING**: Locked for association by an external system.
   * 
   * - **LOCKED_DETACHING**: Locked for dissociation by an external system.
   * 
   * - **RECLAIMING**: Pending resource release.
   * 
   * - **DELETING**: Deleting.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
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
   * The details of the access denial.
   * 
   * @example
   * Authentication is failed for ****
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A return value of 200 indicates success, while other values indicate failure. For the cause of failure, see the error codes.
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
   * The list of Express Connect Router (ECR) instances.
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
   * The maximum number of entries to return. Valid values: 1 to 2147483647. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The message returned for the operation.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If NextToken is empty, no next query is available.
   * - If NextToken has a return value, the value indicates the token for the next query.
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
   * Indicates whether the query for created ECR instances was successful. Valid values:
   * - **True**: The query was successful.
   * - **False**: The query failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of Express Connect Router (ECR) instances.
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

