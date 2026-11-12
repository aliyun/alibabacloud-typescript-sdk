// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAccountResourcesForCloudPermissionTemplateResponseBodyCloudAccountResourcesCloudAccountResourceMeta extends $dara.Model {
  /**
   * @remarks
   * The JSON string of the Tencent Cloud CAM policy document. This parameter is returned only for Tencent Cloud accounts.
   * 
   * @example
   * {"Version":"1","Statement":[]}
   */
  camPolicyDocument?: string;
  /**
   * @remarks
   * The Tencent Cloud CAM policy type. Valid values: qcs and local. This parameter is returned only for Tencent Cloud accounts.
   * 
   * @example
   * qcs
   */
  camPolicyType?: string;
  /**
   * @remarks
   * The JSON string of the AWS IAM policy document. This parameter is returned only for AWS cloud accounts.
   * 
   * @example
   * {"Version":"2012-10-17","Statement":[]}
   */
  iamPolicyDocument?: string;
  /**
   * @remarks
   * The AWS IAM policy type. Valid values: aws and local. This parameter is returned only for AWS cloud accounts.
   * 
   * @example
   * aws
   */
  iamPolicyType?: string;
  /**
   * @remarks
   * The JSON string of the RAM policy document. This parameter is returned only by the get operation.
   * 
   * @example
   * {"Version":"1","Statement":[]}
   */
  ramPolicyDocument?: string;
  /**
   * @remarks
   * The RAM policy type. Valid values: system and custom.
   * 
   * @example
   * custom
   */
  ramPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      camPolicyDocument: 'CamPolicyDocument',
      camPolicyType: 'CamPolicyType',
      iamPolicyDocument: 'IamPolicyDocument',
      iamPolicyType: 'IamPolicyType',
      ramPolicyDocument: 'RamPolicyDocument',
      ramPolicyType: 'RamPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      camPolicyDocument: 'string',
      camPolicyType: 'string',
      iamPolicyDocument: 'string',
      iamPolicyType: 'string',
      ramPolicyDocument: 'string',
      ramPolicyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccountResourcesForCloudPermissionTemplateResponseBodyCloudAccountResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account to which the resource belongs.
   * 
   * @example
   * 123456789012xxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The resource entity identifier, which is a unique remote identifier.
   * 
   * @example
   * System:AliyunIntelligentcockpitReadOnlyAccessexample
   */
  cloudAccountResourceEntityId?: string;
  /**
   * @remarks
   * The resource entity type. Valid values: ram_role.
   * 
   * @example
   * ram_role
   */
  cloudAccountResourceEntityType?: string;
  /**
   * @remarks
   * The identifier of the cloud account resource.
   * 
   * @example
   * car_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  cloudAccountResourceId?: string;
  /**
   * @remarks
   * The resource metadata.
   */
  cloudAccountResourceMeta?: ListCloudAccountResourcesForCloudPermissionTemplateResponseBodyCloudAccountResourcesCloudAccountResourceMeta;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * eiam-sso-role
   */
  cloudAccountResourceName?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Cloud account resource used for SSO
   */
  description?: string;
  /**
   * @remarks
   * The last update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649916625000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccountId: 'CloudAccountId',
      cloudAccountResourceEntityId: 'CloudAccountResourceEntityId',
      cloudAccountResourceEntityType: 'CloudAccountResourceEntityType',
      cloudAccountResourceId: 'CloudAccountResourceId',
      cloudAccountResourceMeta: 'CloudAccountResourceMeta',
      cloudAccountResourceName: 'CloudAccountResourceName',
      createTime: 'CreateTime',
      description: 'Description',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountId: 'string',
      cloudAccountResourceEntityId: 'string',
      cloudAccountResourceEntityType: 'string',
      cloudAccountResourceId: 'string',
      cloudAccountResourceMeta: ListCloudAccountResourcesForCloudPermissionTemplateResponseBodyCloudAccountResourcesCloudAccountResourceMeta,
      cloudAccountResourceName: 'string',
      createTime: 'number',
      description: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.cloudAccountResourceMeta && typeof (this.cloudAccountResourceMeta as any).validate === 'function') {
      (this.cloudAccountResourceMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccountResourcesForCloudPermissionTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cloud account resources.
   */
  cloudAccountResources?: ListCloudAccountResourcesForCloudPermissionTemplateResponseBodyCloudAccountResources[];
  /**
   * @remarks
   * The number of entries per page in a paging query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token returned by the current call. Use this token for the next paginated query.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccountResources: 'CloudAccountResources',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountResources: { 'type': 'array', 'itemType': ListCloudAccountResourcesForCloudPermissionTemplateResponseBodyCloudAccountResources },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAccountResources)) {
      $dara.Model.validateArray(this.cloudAccountResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

