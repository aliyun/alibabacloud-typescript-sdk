// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAccountResourceResponseBodyCloudAccountResourceCloudAccountResourceMeta extends $dara.Model {
  /**
   * @remarks
   * The Tencent Cloud CAM policy document in JSON format. This parameter is returned only for Tencent Cloud accounts.
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
   * The AWS IAM policy document in JSON format. This parameter is returned only for AWS cloud accounts.
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
   * The RAM policy document in JSON format. This parameter is returned only by the Get operation.
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

export class GetCloudAccountResourceResponseBodyCloudAccountResource extends $dara.Model {
  /**
   * @remarks
   * The cloud account ID.
   * 
   * @example
   * 123456789012xxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The unique remote identifier of the resource entity.
   * 
   * @example
   * System:AliyunIntelligentcockpitReadOnlyAccess
   */
  cloudAccountResourceEntityId?: string;
  /**
   * @remarks
   * The resource entity type. Valid values: ram_policy.
   * 
   * @example
   * ram_policy
   */
  cloudAccountResourceEntityType?: string;
  /**
   * @remarks
   * The cloud account resource ID.
   * 
   * @example
   * car_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  cloudAccountResourceId?: string;
  /**
   * @remarks
   * The resource metadata information.
   */
  cloudAccountResourceMeta?: GetCloudAccountResourceResponseBodyCloudAccountResourceCloudAccountResourceMeta;
  /**
   * @remarks
   * The resource name.
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
   * The update time.
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
   * The request ID.
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

