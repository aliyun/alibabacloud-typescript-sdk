// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderRequestBodyMetadata extends $dara.Model {
  /**
   * @remarks
   * The App ID of the Lark application. If this parameter is omitted during an update, the existing value is retained. If explicitly submitted, it must be a non-empty value. The merged configuration for Lark must include this field.
   * 
   * @example
   * cli_exampleappid01
   */
  appId?: string;
  /**
   * @remarks
   * The AppKey of the DingTalk application. If this parameter is omitted during an update, the existing value is retained. If explicitly submitted, it must be a non-empty value. The merged configuration for DingTalk must include this field.
   * 
   * @example
   * dingexampleappkey01
   */
  appKey?: string;
  /**
   * @remarks
   * The AppSecret of the DingTalk or Lark application. If this parameter is omitted during an update, the existing secret is retained and does not need to be retransmitted each time. If explicitly submitted, it must be a non-empty value, and the merged configuration must include this field. This is sensitive input and is not echoed in queries. The example is a fictitious value.
   * 
   * @example
   * example-app-secret
   */
  appSecret?: string;
  /**
   * @remarks
   * The CorpId of the organization to which the DingTalk application belongs. If this parameter is omitted during an update, the existing value is retained. If explicitly submitted, it must be a non-empty value and must match the organization to which the application belongs. The merged configuration for DingTalk must include this field.
   * 
   * @example
   * dingexamplecorpid01
   */
  corpId?: string;
  /**
   * @remarks
   * The encryption key for vendor event callbacks, which must be consistent with the vendor application configuration. If this parameter is omitted during an update, the existing value is retained. When incremental synchronization is enabled, the merged configuration must include this field. This is sensitive input and is not echoed in queries.
   * 
   * @example
   * example-encrypt-key
   */
  encryptKey?: string;
  /**
   * @remarks
   * The verification token for vendor event callbacks, which must be consistent with the vendor application configuration. If this parameter is omitted during an update, the existing value is retained. When incremental synchronization is enabled, the merged configuration must include this field. This is sensitive input and is not echoed in queries.
   * 
   * @example
   * example-verification-token
   */
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appKey: 'appKey',
      appSecret: 'appSecret',
      corpId: 'corpId',
      encryptKey: 'encryptKey',
      verificationToken: 'verificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      appSecret: 'string',
      corpId: 'string',
      encryptKey: 'string',
      verificationToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestBodySaml extends $dara.Model {
  /**
   * @remarks
   * The binding type for manual SAML configuration. HTTP-Redirect and HTTP-POST are supported. This parameter must be submitted together with entityId, loginUrl, and x509Certificates, and cannot be mixed with metadataXml.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The entity ID of the enterprise IdP. This parameter is required for manual configuration. It must be non-empty and up to 2,048 characters, and cannot be changed after saving. It must be submitted together with loginUrl, bindingType, and x509Certificates, and cannot be mixed with metadataXml.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The SSO logon URL of the enterprise IdP. This parameter is required for manual configuration. It must be an absolute HTTPS URL without user credentials and fragments. It must be submitted together with entityId, bindingType, and x509Certificates, and cannot be mixed with metadataXml.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * The original SAML metadata XML text of the enterprise IdP, not a URL or file path. The maximum size is 1 MiB. It must contain a single EntityDescriptor. DTDs and external entities are prohibited. It cannot be mixed with the four manual configuration fields. After saving, queries return the standardized configuration and do not echo the original XML text.
   * 
   * @example
   * <EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://idp.example.com/entity"><IDPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><KeyDescriptor use="signing"><KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#"><X509Data><X509Certificate>MIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQELBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoXDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8oGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYNW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbYEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Okkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0EBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUWld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImcaWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTqP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjocJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdVjfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5</X509Certificate></X509Data></KeyInfo></KeyDescriptor><SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.example.com/sso"/></IDPSSODescriptor></EntityDescriptor>
   */
  metadataXml?: string;
  /**
   * @remarks
   * The list of X.509 signing certificates for the enterprise IdP. For manual configuration, a non-empty list must be provided, with a maximum of 10 certificates. The certificates must be valid. This parameter must be submitted together with entityId, loginUrl, and bindingType, and cannot be mixed with metadataXml.
   * 
   * @example
   * ["-----BEGIN CERTIFICATE-----\\\\nMIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQEL\\\\nBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoX\\\\nDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjAN\\\\nBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8\\\\noGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYN\\\\nW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbY\\\\nEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Ok\\\\nkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0E\\\\nBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQAB\\\\nMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUW\\\\nld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImca\\\\nWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTq\\\\nP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjoc\\\\nJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdV\\\\njfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5\\\\n-----END CERTIFICATE-----"]
   */
  x509Certificates?: string[];
  static names(): { [key: string]: string } {
    return {
      bindingType: 'bindingType',
      entityId: 'entityId',
      loginUrl: 'loginUrl',
      metadataXml: 'metadataXml',
      x509Certificates: 'x509Certificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingType: 'string',
      entityId: 'string',
      loginUrl: 'string',
      metadataXml: 'string',
      x509Certificates: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.x509Certificates)) {
      $dara.Model.validateArray(this.x509Certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestBodySyncScope extends $dara.Model {
  /**
   * @remarks
   * The list of department IDs in the synchronization scope, obtained from ListIdentityProviderDepartments. In SelectedDepartments mode, at least one non-empty department ID must be provided. In AllAuthorized mode, this parameter should be omitted or an empty array should be passed.
   * 
   * @example
   * ["10001"]
   */
  departmentIds?: string[];
  /**
   * @remarks
   * The synchronization scope mode. AllAuthorized: all members within the authorization scope of the application address book. SelectedDepartments: the selected departments and all their sub-departments. A valid mode must be provided when syncScope is explicitly submitted.
   * 
   * @example
   * SelectedDepartments
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      departmentIds: 'departmentIds',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departmentIds)) {
      $dara.Model.validateArray(this.departmentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow logon by using this identity provider. If this parameter is omitted or set to null during an update, the original value is retained. For CustomSSO, a valid SAML configuration must exist before logon is enabled. Disabling logon does not delete the saved SAML or SCIM configurations.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * Applies only to DingTalk and Lark. The application configuration is merged by field. Omitted fields and existing keys retain their original values. Explicitly submitted fields must not be null, empty strings, or blank strings. The merged configuration must meet the complete configuration requirements of the vendor. CustomSSO does not accept this field.
   * 
   * @example
   * {"appSecret":"example-app-secret"}
   */
  metadata?: UpdateIdentityProviderRequestBodyMetadata;
  /**
   * @remarks
   * The logon protocol, which applies only to CustomSSO. Currently, only SAML is supported. DingTalk and Lark do not accept this field. If submitted with a non-empty saml configuration, this field can be omitted and the server processes it as SAML.
   * 
   * @example
   * SAML
   */
  protocol?: string;
  /**
   * @remarks
   * Applies only to CustomSSO. You can either provide metadataXml or provide the four complete manual configuration fields. The two methods cannot be mixed. If a valid configuration already exists, you can also modify only the JIT switches. Saving the configuration does not automatically enable logon.
   */
  saml?: UpdateIdentityProviderRequestBodySaml;
  /**
   * @remarks
   * Applies only to DingTalk and Lark. Controls the incremental synchronization of subsequent address book change events. If this parameter is omitted or set to null during an update, the original value is retained. It does not control the initial synchronization or manual synchronization. When enabled, the merged metadata must include encryptKey and verificationToken. For CustomSSO, use UpdateIdentityProviderSCIM to manage the synchronization switch.
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * The address book synchronization scope, which applies only to DingTalk and Lark. If this parameter is omitted or set to null, the current scope is retained. Saving the scope does not automatically trigger a full synchronization. CustomSSO does not accept this field.
   */
  syncScope?: UpdateIdentityProviderRequestBodySyncScope;
  static names(): { [key: string]: string } {
    return {
      loginEnabled: 'loginEnabled',
      metadata: 'metadata',
      protocol: 'protocol',
      saml: 'saml',
      syncEnabled: 'syncEnabled',
      syncScope: 'syncScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginEnabled: 'boolean',
      metadata: UpdateIdentityProviderRequestBodyMetadata,
      protocol: 'string',
      saml: UpdateIdentityProviderRequestBodySaml,
      syncEnabled: 'boolean',
      syncScope: UpdateIdentityProviderRequestBodySyncScope,
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.saml && typeof (this.saml as any).validate === 'function') {
      (this.saml as any).validate();
    }
    if(this.syncScope && typeof (this.syncScope as any).validate === 'function') {
      (this.syncScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration fields to be modified. For DingTalk and Lark, you must submit at least one of loginEnabled, syncEnabled, metadata, and syncScope. For CustomSSO, use protocol, saml, and loginEnabled. You cannot submit vendor metadata, syncEnabled, or syncScope.
   */
  body?: UpdateIdentityProviderRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateIdentityProviderRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

