// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterAssociationResponseBodyAssociationList extends $dara.Model {
  /**
   * @remarks
   * The allowed route prefixes.
   */
  allowedPrefixes?: string[];
  /**
   * @remarks
   * The prefix route mode. Valid values:
   * 
   * *   MatchMode
   * *   IncrementalMode
   * 
   * @example
   * MatchMode
   */
  allowedPrefixesMode?: string;
  /**
   * @remarks
   * The ID of the association between the ECR and the VPC or TR.
   * 
   * @example
   * ecr-assoc-9p2qxx5phpca2m****
   */
  associationId?: string;
  /**
   * @remarks
   * The type of the associated resource. Valid values:
   * 
   * *   **VPC**
   * *   **TR**
   * 
   * @example
   * VPC
   */
  associationNodeType?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-5510frtx8zi54q****
   */
  cenId?: string;
  /**
   * @remarks
   * The description of the associated resource.
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
   * ecr-fu8rszhgv7623c****
   */
  ecrId?: string;
  /**
   * @remarks
   * The time when the association was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-01-09T12:18:23Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the association was modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-01-09T12:18:23Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource.
   * 
   * @example
   * 167509154715****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The deployment state of the associated resource. Valid values:
   * 
   * *   **CREATING**: The resource is being created.
   * *   **ACTIVE**: The resource is created.
   * *   **INACTIVE**: The TR is pending to be associated with the ECR.
   * *   **ASSOCIATING**: The resource is being associated.
   * *   **DISSOCIATING**: The resource is being disassociated.
   * *   **UPDATING**: The resource is being modified.
   * *   **DELETING**: The resource is being deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The TR ID.
   * 
   * @example
   * tr-2ze4i71c6be454e2l****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the TR.
   * 
   * @example
   * 189159362009****
   */
  transitRouterOwnerId?: number;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zeeaxet4i2j1a7n7****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 146757288406****
   */
  vpcOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allowedPrefixes: 'AllowedPrefixes',
      allowedPrefixesMode: 'AllowedPrefixesMode',
      associationId: 'AssociationId',
      associationNodeType: 'AssociationNodeType',
      cenId: 'CenId',
      description: 'Description',
      ecrId: 'EcrId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      status: 'Status',
      transitRouterId: 'TransitRouterId',
      transitRouterOwnerId: 'TransitRouterOwnerId',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedPrefixes: { 'type': 'array', 'itemType': 'string' },
      allowedPrefixesMode: 'string',
      associationId: 'string',
      associationNodeType: 'string',
      cenId: 'string',
      description: 'string',
      ecrId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ownerId: 'number',
      regionId: 'string',
      status: 'string',
      transitRouterId: 'string',
      transitRouterOwnerId: 'number',
      vpcId: 'string',
      vpcOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowedPrefixes)) {
      $dara.Model.validateArray(this.allowedPrefixes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAssociationResponseBody extends $dara.Model {
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
   * The associated resources.
   */
  associationList?: DescribeExpressConnectRouterAssociationResponseBodyAssociationList[];
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
   * >  For example, if the value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the value of DynamicMessage is **DtsJobId**, the request parameter **DtsJobId** is invalid.
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
   * The total number of entries returned. Valid values: 1 to 2147483647. Default value: 20.
   * 
   * @example
   * 20
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
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05130E79-588D-5C40-A718-C4863A59****
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
   * The total number of associated resources.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      associationList: 'AssociationList',
      code: 'Code',
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
      associationList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterAssociationResponseBodyAssociationList },
      code: 'string',
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
    if(Array.isArray(this.associationList)) {
      $dara.Model.validateArray(this.associationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

