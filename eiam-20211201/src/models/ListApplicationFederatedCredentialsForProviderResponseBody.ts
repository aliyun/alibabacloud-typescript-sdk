// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigAzureVmConfig extends $dara.Model {
  /**
   * @remarks
   * The principal ID.
   * 
   * @example
   * 5dee234a-1b4c-4ad7-a19f-fxxxxx
   */
  principalId?: string;
  /**
   * @remarks
   * The Azure resource group name.
   * 
   * @example
   * user_default
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The subscription ID.
   * 
   * @example
   * 4342a1f4-7e5d-4371-97dc-d4f33f4xxxx
   */
  subscriptionId?: string;
  /**
   * @remarks
   * The list of virtual machine names.
   */
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

export class ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigGcpVmConfig extends $dara.Model {
  /**
   * @remarks
   * The list of VM instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The GCP project ID.
   * 
   * @example
   * turnkey-axiom-475109-xx
   */
  projectId?: string;
  /**
   * @remarks
   * The subject corresponding to the service account.
   * 
   * @example
   * 123456789
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

export class ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigGenericConfig extends $dara.Model {
  /**
   * @remarks
   * The subject identifier.
   * 
   * @example
   * test_subject
   */
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

export class ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * The K8s namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The pod name prefix.
   * 
   * @example
   * test-pod
   */
  podNamePrefix?: string;
  /**
   * @remarks
   * The K8s service account name.
   * 
   * @example
   * default
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

export class ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfig extends $dara.Model {
  /**
   * @remarks
   * The Azure VM scenario configuration.
   */
  azureVmConfig?: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigAzureVmConfig;
  /**
   * @remarks
   * The GCP VM scenario configuration.
   */
  gcpVmConfig?: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigGcpVmConfig;
  /**
   * @remarks
   * The generic scenario configuration.
   */
  genericConfig?: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigGenericConfig;
  /**
   * @remarks
   * The Kubernetes scenario configuration.
   */
  kubernetesConfig?: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigKubernetesConfig;
  /**
   * @remarks
   * The OIDC scenario profile. Different profiles correspond to different configurations. Valid values:
   * - generic
   * - kubernetes
   * - gcp_vm
   * - azure_vm
   * 
   * @example
   * kubernetes
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
      azureVmConfig: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigAzureVmConfig,
      gcpVmConfig: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigGcpVmConfig,
      genericConfig: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigGenericConfig,
      kubernetesConfig: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfigKubernetesConfig,
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

export class ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsPkcs7VerificationConfig extends $dara.Model {
  /**
   * @remarks
   * The list of allowed instance IDs.
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

export class ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentials extends $dara.Model {
  /**
   * @remarks
   * The application federated credential ID.
   * 
   * @example
   * afc_dads12sadxxxxx
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
   * app_asda1dsadxxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The creation time.
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
   * fcp_adasd12dxxxxx
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
   * The last used time.
   * 
   * @example
   * 1758785994982
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The OIDC structured configuration.
   */
  oidcVerificationConfig?: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfig;
  /**
   * @remarks
   * The PKCS#7 structured configuration.
   */
  pkcs7VerificationConfig?: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsPkcs7VerificationConfig;
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
   * The update time.
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
   * The verification mode. Valid values:
   * - freedom: free mode.
   * - structured: structured mode.
   * 
   * @example
   * structured
   */
  verificationMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationFederatedCredentialId: 'ApplicationFederatedCredentialId',
      applicationFederatedCredentialName: 'ApplicationFederatedCredentialName',
      applicationFederatedCredentialType: 'ApplicationFederatedCredentialType',
      applicationId: 'ApplicationId',
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
      createTime: 'number',
      description: 'string',
      federatedCredentialProviderId: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      oidcVerificationConfig: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsOidcVerificationConfig,
      pkcs7VerificationConfig: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentialsPkcs7VerificationConfig,
      status: 'string',
      updateTime: 'number',
      verificationCondition: 'string',
      verificationMode: 'string',
    };
  }

  validate() {
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

export class ListApplicationFederatedCredentialsForProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of application federated credentials.
   */
  applicationFederatedCredentials?: ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentials[];
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * The request ID.
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
      applicationFederatedCredentials: 'ApplicationFederatedCredentials',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredentials: { 'type': 'array', 'itemType': ListApplicationFederatedCredentialsForProviderResponseBodyApplicationFederatedCredentials },
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationFederatedCredentials)) {
      $dara.Model.validateArray(this.applicationFederatedCredentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

