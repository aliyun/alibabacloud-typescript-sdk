// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationFederatedCredentialRequestAttributeMappings extends $dara.Model {
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

export class CreateApplicationFederatedCredentialRequestOidcVerificationConfigAzureVmConfig extends $dara.Model {
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

export class CreateApplicationFederatedCredentialRequestOidcVerificationConfigGcpVmConfig extends $dara.Model {
  instanceIds?: string[];
  projectId?: string;
  /**
   * @remarks
   * The sub claim that corresponds to the service account.
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

export class CreateApplicationFederatedCredentialRequestOidcVerificationConfigGenericConfig extends $dara.Model {
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

export class CreateApplicationFederatedCredentialRequestOidcVerificationConfigKubernetesConfig extends $dara.Model {
  /**
   * @remarks
   * The Kubernetes namespace.
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
   * The Kubernetes service account name.
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

export class CreateApplicationFederatedCredentialRequestOidcVerificationConfig extends $dara.Model {
  /**
   * @remarks
   * The Azure VM scenario configuration.
   */
  azureVmConfig?: CreateApplicationFederatedCredentialRequestOidcVerificationConfigAzureVmConfig;
  /**
   * @remarks
   * The GCP VM scenario configuration.
   */
  gcpVmConfig?: CreateApplicationFederatedCredentialRequestOidcVerificationConfigGcpVmConfig;
  genericConfig?: CreateApplicationFederatedCredentialRequestOidcVerificationConfigGenericConfig;
  /**
   * @remarks
   * The Kubernetes scenario configuration.
   */
  kubernetesConfig?: CreateApplicationFederatedCredentialRequestOidcVerificationConfigKubernetesConfig;
  /**
   * @remarks
   * The OIDC scenario profile. Valid values:
   * 
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
      azureVmConfig: CreateApplicationFederatedCredentialRequestOidcVerificationConfigAzureVmConfig,
      gcpVmConfig: CreateApplicationFederatedCredentialRequestOidcVerificationConfigGcpVmConfig,
      genericConfig: CreateApplicationFederatedCredentialRequestOidcVerificationConfigGenericConfig,
      kubernetesConfig: CreateApplicationFederatedCredentialRequestOidcVerificationConfigKubernetesConfig,
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

export class CreateApplicationFederatedCredentialRequestPkcs7VerificationConfig extends $dara.Model {
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

export class CreateApplicationFederatedCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application federated identity credential.
   * 
   * This parameter is required.
   * 
   * @example
   * example_name
   */
  applicationFederatedCredentialName?: string;
  /**
   * @remarks
   * The type of the application federated identity credential.
   * 
   * This parameter is required.
   * 
   * @example
   * oidc
   */
  applicationFederatedCredentialType?: string;
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
  attributeMappings?: CreateApplicationFederatedCredentialRequestAttributeMappings[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description_text
   */
  description?: string;
  /**
   * @remarks
   * The federated credential provider ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fcp_adasd
   */
  federatedCredentialProviderId?: string;
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
   * The OIDC structured configuration. This parameter applies when the verification mode is structured and the credential type is oidc.
   */
  oidcVerificationConfig?: CreateApplicationFederatedCredentialRequestOidcVerificationConfig;
  /**
   * @remarks
   * The PKCS#7 structured configuration. This parameter applies when the verification mode is structured and the credential type is pkcs7.
   */
  pkcs7VerificationConfig?: CreateApplicationFederatedCredentialRequestPkcs7VerificationConfig;
  /**
   * @remarks
   * The verification condition.
   * 
   * @example
   * IsNullOrEmpty("jwt.issuer")
   */
  verificationCondition?: string;
  /**
   * @remarks
   * The verification mode. Valid values:
   * 
   * - freedom (default)
   * - structured
   * 
   * @example
   * freedom
   */
  verificationMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationFederatedCredentialName: 'ApplicationFederatedCredentialName',
      applicationFederatedCredentialType: 'ApplicationFederatedCredentialType',
      applicationId: 'ApplicationId',
      attributeMappings: 'AttributeMappings',
      description: 'Description',
      federatedCredentialProviderId: 'FederatedCredentialProviderId',
      instanceId: 'InstanceId',
      oidcVerificationConfig: 'OidcVerificationConfig',
      pkcs7VerificationConfig: 'Pkcs7VerificationConfig',
      verificationCondition: 'VerificationCondition',
      verificationMode: 'VerificationMode',
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
      oidcVerificationConfig: CreateApplicationFederatedCredentialRequestOidcVerificationConfig,
      pkcs7VerificationConfig: CreateApplicationFederatedCredentialRequestPkcs7VerificationConfig,
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

