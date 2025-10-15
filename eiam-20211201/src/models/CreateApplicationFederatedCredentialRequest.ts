// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationFederatedCredentialRequestAttributeMappings extends $dara.Model {
  /**
   * @remarks
   * 源值表达式
   * 
   * @example
   * Append(client.applicationFederatedCredentialId, ":", cert.subject.CN, ":", cert.serialNumber)
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * 目标字段
   * 
   * @example
   * client.activeSubjectUrn
   */
  targetField?: string;
  static names(): { [key: string]: string } {
    return {
      sourceValueExpression: 'SourceValueExpression',
      targetField: 'TargetField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceValueExpression: 'string',
      targetField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationFederatedCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * 应用联邦凭证名称
   * 
   * This parameter is required.
   * 
   * @example
   * example_name
   */
  applicationFederatedCredentialName?: string;
  /**
   * @remarks
   * 应用联邦凭证类型
   * 
   * This parameter is required.
   * 
   * @example
   * oidc
   */
  applicationFederatedCredentialType?: string;
  /**
   * @remarks
   * IDaaS的应用资源ID。
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 属性映射
   */
  attributeMappings?: CreateApplicationFederatedCredentialRequestAttributeMappings[];
  /**
   * @remarks
   * 描述
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * 联邦凭证提供方ID
   * 
   * This parameter is required.
   * 
   * @example
   * fcp_adasd
   */
  federatedCredentialProviderId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 校验条件
   * 
   * @example
   * IsNullOrEmpty("jwt.issuer")
   */
  verificationCondition?: string;
  static names(): { [key: string]: string } {
    return {
      applicationFederatedCredentialName: 'ApplicationFederatedCredentialName',
      applicationFederatedCredentialType: 'ApplicationFederatedCredentialType',
      applicationId: 'ApplicationId',
      attributeMappings: 'AttributeMappings',
      description: 'Description',
      federatedCredentialProviderId: 'FederatedCredentialProviderId',
      instanceId: 'InstanceId',
      verificationCondition: 'VerificationCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredentialName: 'string',
      applicationFederatedCredentialType: 'string',
      applicationId: 'string',
      attributeMappings: { 'type': 'array', 'itemType': CreateApplicationFederatedCredentialRequestAttributeMappings },
      description: 'string',
      federatedCredentialProviderId: 'string',
      instanceId: 'string',
      verificationCondition: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeMappings)) {
      $dara.Model.validateArray(this.attributeMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

