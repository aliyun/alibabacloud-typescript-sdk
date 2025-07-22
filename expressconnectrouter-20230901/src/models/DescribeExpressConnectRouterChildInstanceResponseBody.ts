// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterChildInstanceResponseBodyChildInstanceList extends $dara.Model {
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
   * The VBR ID.
   * 
   * @example
   * vbr-gw8vjq2zjux3ifsc9****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VBR.
   * 
   * @example
   * 112101171212****
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the VBR.
   * 
   * @example
   * cn-hangzhou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the VBR. The value is **VBR**.
   * 
   * @example
   * VBR
   */
  childInstanceType?: string;
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
   * The ID of the Alibaba Cloud account that owns the VBR.
   * 
   * @example
   * 167509154715****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VBR.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The deployment state of the associated resource. Valid values:
   * 
   * - **CREATING**: The resource is being created.
   * - **ACTIVE**: The resource is created.
   * - **ASSOCIATING**: The resource is being associated.
   * - **DISSOCIATING**: The resource is being disassociated.
   * - **UPDATING**: The resource is being modified.
   * - **DELETING**: The resource is being deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      childInstanceId: 'ChildInstanceId',
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
   * The details about the access denial.
   * 
   * @example
   * Authentication is failed for ****
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The VBRs.
   */
  childInstanceList?: DescribeExpressConnectRouterChildInstanceResponseBodyChildInstanceList[];
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
   * >  For example, if the value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the value of **DynamicMessage** is **DtsJobId**, the request parameter **DtsJobId** is invalid.
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

