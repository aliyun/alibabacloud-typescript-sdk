// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterChildInstanceResponseBodyChildInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID used to associate the Express Connect Router (ECR) with the VBR.
   * 
   * @example
   * ecr-assoc-9p2qxx5phpca2m****
   */
  associationId?: string;
  /**
   * @remarks
   * The instance ID of the border router for routing.
   * 
   * @example
   * vbr-gw8vjq2zjux3ifsc9****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The name of the child instance.
   * 
   * @example
   * test
   */
  childInstanceName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the child instance belongs.
   * 
   * @example
   * 112101171212****
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * The region where the child instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the child instance. Valid values: **VBR**: virtual border router.
   * 
   * @example
   * VBR
   */
  childInstanceType?: string;
  /**
   * @remarks
   * The description of the child instance.
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
   * ecr-mezk2idmsd0vx2****
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
   * The Alibaba Cloud account ID to which the border router for routing belongs.
   * 
   * @example
   * 167509154715****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region where the VBR resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The deployment status of the associated resource. Valid values:
   * 
   * - **CREATING**: creating.
   * 
   * - **ACTIVE**: created.
   * 
   * - **ASSOCIATING**: associating.
   * 
   * - **DISSOCIATING**: dissociating.
   * 
   * - **UPDATING**: updating.
   * 
   * - **DELETING**: deleting.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      childInstanceId: 'ChildInstanceId',
      childInstanceName: 'ChildInstanceName',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      description: 'Description',
      ecrId: 'EcrId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      childInstanceId: 'string',
      childInstanceName: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      description: 'string',
      ecrId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ownerId: 'number',
      regionId: 'string',
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

export class DescribeExpressConnectRouterChildInstanceResponseBody extends $dara.Model {
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
   * The list of child instances.
   */
  childInstanceList?: DescribeExpressConnectRouterChildInstanceResponseBodyChildInstanceList[];
  /**
   * @remarks
   * The status code that indicates whether the call was successful. A value of 200 indicates that the attachment was successful. Other values indicate that the attachment failed. For more information about the causes of failures, see the error codes.
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
   * The token for the next query. Valid values:
   * 
   * - If NextToken is empty, no next query is required.
   * - If NextToken is returned, the value indicates the token for the next query.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 05130E79-588D-5C40-A718-C4863A59****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
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
      childInstanceList: 'ChildInstanceList',
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
      childInstanceList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterChildInstanceResponseBodyChildInstanceList },
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
    if(Array.isArray(this.childInstanceList)) {
      $dara.Model.validateArray(this.childInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

