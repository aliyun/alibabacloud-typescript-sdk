// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterAssociationResponseBodyAssociationListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAssociationResponseBodyAssociationList extends $dara.Model {
  /**
   * @remarks
   * The allowed route prefix list.
   */
  allowedPrefixes?: string[];
  /**
   * @remarks
   * The prefix routing mode. Valid values:
   * - MatchMode: match mode.
   * - IncrementalMode: incremental mode.
   * 
   * @example
   * MatchMode
   */
  allowedPrefixesMode?: string;
  /**
   * @remarks
   * The ID used to associate the Express Connect Router (ECR) with a VPC or TR.
   * 
   * @example
   * ecr-assoc-9p2qxx5phpca2m****
   */
  associationId?: string;
  /**
   * @remarks
   * The type of the associated resource. Valid values:
   * 
   * - **VPC**: VPC.
   * 
   * - **TR**: transit router.
   * 
   * @example
   * VPC
   */
  associationNodeType?: string;
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN).
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
   * The instance ID of the Express Connect Router (ECR).
   * 
   * @example
   * ecr-fu8rszhgv7623c****
   */
  ecrId?: string;
  /**
   * @remarks
   * The time when the association was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2024-01-09T12:18:23Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the association was modified. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2024-01-09T12:18:23Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the resource belongs.
   * 
   * @example
   * 167509154715****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The deployment status of the associated resource. Valid values:
   * 
   * - **CREATING**: The resource is being created.
   * 
   * - **ACTIVE**: The resource is created.
   * 
   * - **INACTIVE**: The Express Connect Router (ECR) is associated with the transit router, and the transit router is pending association with the ECR for forward routing.
   * 
   * - **ASSOCIATING**: The resource is being attached.
   * 
   * - **DISSOCIATING**: The resource is being disassociated.
   * 
   * - **UPDATING**: The resource is being modified.
   * 
   * - **DELETING**: The resource is being deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The list of tags added to the associated resource.
   */
  tags?: DescribeExpressConnectRouterAssociationResponseBodyAssociationListTags[];
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-2ze4i71c6be454e2l****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router.
   * 
   * @example
   * test
   */
  transitRouterName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the transit router for forward routing belongs.
   * 
   * @example
   * 189159362009****
   */
  transitRouterOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC-connected instance.
   * 
   * @example
   * vpc-2zeeaxet4i2j1a7n7****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC-connected instance.
   * 
   * @example
   * test
   */
  vpcName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the VPC belongs.
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
      tags: 'Tags',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
      transitRouterOwnerId: 'TransitRouterOwnerId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
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
      tags: { 'type': 'array', 'itemType': DescribeExpressConnectRouterAssociationResponseBodyAssociationListTags },
      transitRouterId: 'string',
      transitRouterName: 'string',
      transitRouterOwnerId: 'number',
      vpcId: 'string',
      vpcName: 'string',
      vpcOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowedPrefixes)) {
      $dara.Model.validateArray(this.allowedPrefixes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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
   * The list of associated resources.
   */
  associationList?: DescribeExpressConnectRouterAssociationResponseBodyAssociationList[];
  /**
   * @remarks
   * The status code. A value of 200 indicates that the call was successful. Other values indicate that the call failed. For more information about the causes of failures, see Error codes.
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
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the specified **DtsJobId** request parameter is invalid.
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
   * The maximum number of entries to return. Valid values: 1 to 2147483647. Default value: 20.
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
   * The token for the next query. Valid values:
   * - If **NextToken** is empty, no next query is required.
   * - If **NextToken** is returned, the value indicates the token for the next query.
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
   * Indicates whether the call was successful. Valid values:
   * 
   * - **True**: successful.
   * - **False**: failed.
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

