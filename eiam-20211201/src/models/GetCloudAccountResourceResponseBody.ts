// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAccountResourceResponseBodyCloudAccountResourceCloudAccountResourceMeta extends $dara.Model {
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
   * The type of the Tencent Cloud CAM policy. Valid values: qcs and local. This parameter is returned only for Tencent Cloud accounts.
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
   * The type of the AWS IAM policy. Valid values: aws and local. This parameter is returned only for AWS cloud accounts.
   * 
   * @example
   * aws
   */
  iamPolicyType?: string;
  /**
   * @remarks
   * The JSON string of the RAM policy document. This parameter is returned only by the Get operation.
   * 
   * @example
   * {"Version":"1","Statement":[]}
   */
  ramPolicyDocument?: string;
  /**
   * @remarks
   * The type of the RAM policy. Valid values: system and custom.
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

export class GetCloudAccountResourceResponseBodyCloudAccountResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123456789012xxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The identifier of the resource entity, which is a unique remote identifier.
   * 
   * @example
   * System:AliyunIntelligentcockpitReadOnlyAccess
   */
  cloudAccountResourceEntityId?: string;
  /**
   * @remarks
   * The type of the resource entity. Valid values: ram_policy.
   * 
   * @example
   * ram_policy
   */
  cloudAccountResourceEntityType?: string;
  /**
   * @remarks
   * The ID of the cloud account resource.
   * 
   * @example
   * car_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  cloudAccountResourceId?: string;
  /**
   * @remarks
   * The metadata information of the resource.
   */
  cloudAccountResourceMeta?: GetCloudAccountResourceResponseBodyCloudAccountResourceCloudAccountResourceMeta;
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
   * The time when the resource was created. The value is a UNIX timestamp in milliseconds.
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
   * The time when the resource was updated.
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
      cloudAccountResourceMeta: GetCloudAccountResourceResponseBodyCloudAccountResourceCloudAccountResourceMeta,
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

export class GetCloudAccountResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud account resource information.
   */
  cloudAccountResource?: GetCloudAccountResourceResponseBodyCloudAccountResource;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccountResource: 'CloudAccountResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountResource: GetCloudAccountResourceResponseBodyCloudAccountResource,
      requestId: 'string',
    };
  }

  validate() {
    if(this.cloudAccountResource && typeof (this.cloudAccountResource as any).validate === 'function') {
      (this.cloudAccountResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

