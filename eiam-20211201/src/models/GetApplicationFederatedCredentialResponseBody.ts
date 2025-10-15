// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialAttributeMappings extends $dara.Model {
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

export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredential extends $dara.Model {
  /**
   * @remarks
   * 应用联邦凭证ID
   * 
   * @example
   * afc_aaaaa1111
   */
  applicationFederatedCredentialId?: string;
  /**
   * @remarks
   * 应用联邦凭证名称
   * 
   * @example
   * test
   */
  applicationFederatedCredentialName?: string;
  /**
   * @remarks
   * 应用联邦凭证类型
   * 
   * @example
   * oidc
   */
  applicationFederatedCredentialType?: string;
  /**
   * @remarks
   * 应用ID
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 属性映射
   */
  attributeMappings?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialAttributeMappings[];
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1758785994982
   */
  createTime?: number;
  /**
   * @remarks
   * 应用联邦凭证描述
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * 应用联邦凭证提供者ID
   * 
   * @example
   * fcp_asda1dasdxxxx
   */
  federatedCredentialProviderId?: string;
  /**
   * @remarks
   * EAIM 实例ID
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 最近使用时间
   * 
   * @example
   * 1758785994982
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * 应用联邦凭证状态
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 1758785994982
   */
  updateTime?: number;
  /**
   * @remarks
   * 验证条件
   * 
   * @example
   * Equals(cert.subject.CN, "test")
   */
  verificationCondition?: string;
  static names(): { [key: string]: string } {
    return {
      applicationFederatedCredentialId: 'ApplicationFederatedCredentialId',
      applicationFederatedCredentialName: 'ApplicationFederatedCredentialName',
      applicationFederatedCredentialType: 'ApplicationFederatedCredentialType',
      applicationId: 'ApplicationId',
      attributeMappings: 'AttributeMappings',
      createTime: 'CreateTime',
      description: 'Description',
      federatedCredentialProviderId: 'FederatedCredentialProviderId',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      status: 'Status',
      updateTime: 'UpdateTime',
      verificationCondition: 'VerificationCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredentialId: 'string',
      applicationFederatedCredentialName: 'string',
      applicationFederatedCredentialType: 'string',
      applicationId: 'string',
      attributeMappings: { 'type': 'array', 'itemType': GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialAttributeMappings },
      createTime: 'number',
      description: 'string',
      federatedCredentialProviderId: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      status: 'string',
      updateTime: 'number',
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

export class GetApplicationFederatedCredentialResponseBody extends $dara.Model {
  applicationFederatedCredential?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredential;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationFederatedCredential: 'ApplicationFederatedCredential',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredential: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredential,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationFederatedCredential && typeof (this.applicationFederatedCredential as any).validate === 'function') {
      (this.applicationFederatedCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

