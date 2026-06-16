// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialAttributeMappings extends $dara.Model {
  /**
   * @remarks
   * The source value expression.
   * 
   * @example
   * Append(client.applicationFederatedCredentialId, ":", cert.subject.CN, ":", cert.serialNumber)
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * The target field.
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
   * The ID of the application\\"s federated credential.
   * 
   * @example
   * afc_aaaaa1111
   */
  applicationFederatedCredentialId?: string;
  /**
   * @remarks
   * The name of the application\\"s federated credential.
   * 
   * @example
   * test
   */
  applicationFederatedCredentialName?: string;
  /**
   * @remarks
   * The type of the application\\"s federated credential.
   * 
   * @example
   * oidc
   */
  applicationFederatedCredentialType?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The attribute mappings.
   */
  attributeMappings?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialAttributeMappings[];
  /**
   * @remarks
   * The time when the credential was created.
   * 
   * @example
   * 1758785994982
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the application\\"s federated credential.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the federated credential provider.
   * 
   * @example
   * fcp_asda1dasdxxxx
   */
  federatedCredentialProviderId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the credential was last used.
   * 
   * @example
   * 1758785994982
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The status of the application\\"s federated credential.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the credential was last updated.
   * 
   * @example
   * 1758785994982
   */
  updateTime?: number;
  /**
   * @remarks
   * The verification condition.
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
  /**
   * @remarks
   * The application federated credential object.
   */
  applicationFederatedCredential?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredential;
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

