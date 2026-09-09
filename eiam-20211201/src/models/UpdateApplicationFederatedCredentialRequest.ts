// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationFederatedCredentialRequestAttributeMappings extends $dara.Model {
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

export class UpdateApplicationFederatedCredentialRequestOidcVerificationConfigAzureVmConfig extends $dara.Model {
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

export class UpdateApplicationFederatedCredentialRequestOidcVerificationConfigGcpVmConfig extends $dara.Model {
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
   * The sub claim corresponding to the service account.
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

export class UpdateApplicationFederatedCredentialRequestOidcVerificationConfigGenericConfig extends $dara.Model {
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

export class UpdateApplicationFederatedCredentialRequestOidcVerificationConfigKubernetesConfig extends $dara.Model {
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
   * my-pod-
   */
  podNamePrefix?: string;
  /**
   * @remarks
   * The K8s service account name.
   * 
   * @example
   * my-sa
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

export class UpdateApplicationFederatedCredentialRequestOidcVerificationConfig extends $dara.Model {
  /**
   * @remarks
   * The Azure VM scenario configuration.
   */
  azureVmConfig?: UpdateApplicationFederatedCredentialRequestOidcVerificationConfigAzureVmConfig;
  /**
   * @remarks
   * The GCP VM scenario configuration.
   */
  gcpVmConfig?: UpdateApplicationFederatedCredentialRequestOidcVerificationConfigGcpVmConfig;
  /**
   * @remarks
   * The generic scenario configuration.
   */
  genericConfig?: UpdateApplicationFederatedCredentialRequestOidcVerificationConfigGenericConfig;
  /**
   * @remarks
   * The Kubernetes scenario configuration.
   */
  kubernetesConfig?: UpdateApplicationFederatedCredentialRequestOidcVerificationConfigKubernetesConfig;
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
      azureVmConfig: UpdateApplicationFederatedCredentialRequestOidcVerificationConfigAzureVmConfig,
      gcpVmConfig: UpdateApplicationFederatedCredentialRequestOidcVerificationConfigGcpVmConfig,
      genericConfig: UpdateApplicationFederatedCredentialRequestOidcVerificationConfigGenericConfig,
      kubernetesConfig: UpdateApplicationFederatedCredentialRequestOidcVerificationConfigKubernetesConfig,
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

export class UpdateApplicationFederatedCredentialRequestPkcs7VerificationConfig extends $dara.Model {
  /**
   * @remarks
   * The list of VM instance IDs.
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

export class UpdateApplicationFederatedCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The application federated credential ID.
   * 
   * This parameter is required.
   * 
   * @example
   * afc_aaaaa1111
   */
  applicationFederatedCredentialId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The attribute mappings.
   */
  attributeMappings?: UpdateApplicationFederatedCredentialRequestAttributeMappings[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The OIDC structured configuration.
   */
  oidcVerificationConfig?: UpdateApplicationFederatedCredentialRequestOidcVerificationConfig;
  /**
   * @remarks
   * The PKCS#7 structured configuration.
   */
  pkcs7VerificationConfig?: UpdateApplicationFederatedCredentialRequestPkcs7VerificationConfig;
  /**
   * @remarks
   * The verification condition.
   * 
   * @example
   * IsNullOrEmpty("")
   */
  verificationCondition?: string;
  static names(): { [key: string]: string } {
    return {
      applicationFederatedCredentialId: 'ApplicationFederatedCredentialId',
      applicationId: 'ApplicationId',
      attributeMappings: 'AttributeMappings',
      instanceId: 'InstanceId',
      oidcVerificationConfig: 'OidcVerificationConfig',
      pkcs7VerificationConfig: 'Pkcs7VerificationConfig',
      verificationCondition: 'VerificationCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredentialId: 'string',
      applicationId: 'string',
      attributeMappings: { 'type': 'array', 'itemType': UpdateApplicationFederatedCredentialRequestAttributeMappings },
      instanceId: 'string',
      oidcVerificationConfig: UpdateApplicationFederatedCredentialRequestOidcVerificationConfig,
      pkcs7VerificationConfig: UpdateApplicationFederatedCredentialRequestPkcs7VerificationConfig,
      verificationCondition: 'string',
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

