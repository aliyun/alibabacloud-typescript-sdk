// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSAMLIdentityProviderResponseBodySSOIdentityProviderConfigurationX509Certificates extends $dara.Model {
  certificateId?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSAMLIdentityProviderResponseBodySSOIdentityProviderConfiguration extends $dara.Model {
  entityId?: string;
  JITProvisionStatus?: string;
  JITUpdateStatus?: string;
  loginURL?: string;
  SAMLBindingType?: string;
  SSOStatus?: string;
  x509Certificates?: SetSAMLIdentityProviderResponseBodySSOIdentityProviderConfigurationX509Certificates[];
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      JITProvisionStatus: 'JITProvisionStatus',
      JITUpdateStatus: 'JITUpdateStatus',
      loginURL: 'LoginURL',
      SAMLBindingType: 'SAMLBindingType',
      SSOStatus: 'SSOStatus',
      x509Certificates: 'X509Certificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      JITProvisionStatus: 'string',
      JITUpdateStatus: 'string',
      loginURL: 'string',
      SAMLBindingType: 'string',
      SSOStatus: 'string',
      x509Certificates: { 'type': 'array', 'itemType': SetSAMLIdentityProviderResponseBodySSOIdentityProviderConfigurationX509Certificates },
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

export class SetSAMLIdentityProviderResponseBody extends $dara.Model {
  requestId?: string;
  SSOIdentityProviderConfiguration?: SetSAMLIdentityProviderResponseBodySSOIdentityProviderConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SSOIdentityProviderConfiguration: 'SSOIdentityProviderConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SSOIdentityProviderConfiguration: SetSAMLIdentityProviderResponseBodySSOIdentityProviderConfiguration,
    };
  }

  validate() {
    if(this.SSOIdentityProviderConfiguration && typeof (this.SSOIdentityProviderConfiguration as any).validate === 'function') {
      (this.SSOIdentityProviderConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

