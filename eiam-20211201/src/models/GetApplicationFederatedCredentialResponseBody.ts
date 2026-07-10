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

export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigAzureVmConfig extends $dara.Model {
  principalId?: string;
  resourceGroupName?: string;
  subscriptionId?: string;
  vmNames?: string[];
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      resourceGroupName: 'ResourceGroupName',
      subscriptionId: 'SubscriptionId',
      vmNames: 'VmNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      resourceGroupName: 'string',
      subscriptionId: 'string',
      vmNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vmNames)) {
      $dara.Model.validateArray(this.vmNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigGcpVmConfig extends $dara.Model {
  /**
   * @remarks
   * The list of VM instance IDs. A maximum of 10 instance IDs are supported.
   */
  instanceIds?: string[];
  projectId?: string;
  /**
   * @remarks
   * The service account ID that corresponds to the sub claim.
   */
  serviceAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      projectId: 'ProjectId',
      serviceAccountId: 'ServiceAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      serviceAccountId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigGenericConfig extends $dara.Model {
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * The Kubernetes namespace.
   */
  namespace?: string;
  /**
   * @remarks
   * The pod name prefix.
   */
  podNamePrefix?: string;
  /**
   * @remarks
   * The Kubernetes service account name.
   */
  serviceAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      podNamePrefix: 'PodNamePrefix',
      serviceAccountName: 'ServiceAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      podNamePrefix: 'string',
      serviceAccountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfig extends $dara.Model {
  /**
   * @remarks
   * The Azure VM scenario configuration.
   */
  azureVmConfig?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigAzureVmConfig;
  /**
   * @remarks
   * The GCP VM scenario configuration.
   */
  gcpVmConfig?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigGcpVmConfig;
  genericConfig?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigGenericConfig;
  /**
   * @remarks
   * The Kubernetes scenario configuration.
   */
  kubernetesConfig?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigKubernetesConfig;
  /**
   * @remarks
   * The OIDC scenario profile. Valid values: generic, kubernetes, gcp_vm, and azure_vm.
   */
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      azureVmConfig: 'AzureVmConfig',
      gcpVmConfig: 'GcpVmConfig',
      genericConfig: 'GenericConfig',
      kubernetesConfig: 'KubernetesConfig',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azureVmConfig: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigAzureVmConfig,
      gcpVmConfig: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigGcpVmConfig,
      genericConfig: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigGenericConfig,
      kubernetesConfig: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfigKubernetesConfig,
      profile: 'string',
    };
  }

  validate() {
    if(this.azureVmConfig && typeof (this.azureVmConfig as any).validate === 'function') {
      (this.azureVmConfig as any).validate();
    }
    if(this.gcpVmConfig && typeof (this.gcpVmConfig as any).validate === 'function') {
      (this.gcpVmConfig as any).validate();
    }
    if(this.genericConfig && typeof (this.genericConfig as any).validate === 'function') {
      (this.genericConfig as any).validate();
    }
    if(this.kubernetesConfig && typeof (this.kubernetesConfig as any).validate === 'function') {
      (this.kubernetesConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialPkcs7VerificationConfig extends $dara.Model {
  /**
   * @remarks
   * The list of allowed instance IDs. A maximum of 10 instance IDs are supported.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredential extends $dara.Model {
  /**
   * @remarks
   * The application federated credential ID.
   * 
   * @example
   * afc_aaaaa1111
   */
  applicationFederatedCredentialId?: string;
  /**
   * @remarks
   * The application federated credential name.
   * 
   * @example
   * test
   */
  applicationFederatedCredentialName?: string;
  /**
   * @remarks
   * The application federated credential type.
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
   * The application federated credential description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The federated trust source ID.
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
   * The OIDC structured configuration. This parameter applies when the verification mode is structured and the credential type is oidc.
   */
  oidcVerificationConfig?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfig;
  /**
   * @remarks
   * The PKCS#7 structured configuration. This parameter applies when the verification mode is structured and the credential type is pkcs7.
   */
  pkcs7VerificationConfig?: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialPkcs7VerificationConfig;
  /**
   * @remarks
   * The application federated credential status.
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
  /**
   * @remarks
   * The verification mode. Valid values: freedom and structured.
   */
  verificationMode?: string;
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
      oidcVerificationConfig: 'OidcVerificationConfig',
      pkcs7VerificationConfig: 'Pkcs7VerificationConfig',
      status: 'Status',
      updateTime: 'UpdateTime',
      verificationCondition: 'VerificationCondition',
      verificationMode: 'VerificationMode',
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
      oidcVerificationConfig: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialOidcVerificationConfig,
      pkcs7VerificationConfig: GetApplicationFederatedCredentialResponseBodyApplicationFederatedCredentialPkcs7VerificationConfig,
      status: 'string',
      updateTime: 'number',
      verificationCondition: 'string',
      verificationMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeMappings)) {
      $dara.Model.validateArray(this.attributeMappings);
    }
    if(this.oidcVerificationConfig && typeof (this.oidcVerificationConfig as any).validate === 'function') {
      (this.oidcVerificationConfig as any).validate();
    }
    if(this.pkcs7VerificationConfig && typeof (this.pkcs7VerificationConfig as any).validate === 'function') {
      (this.pkcs7VerificationConfig as any).validate();
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

