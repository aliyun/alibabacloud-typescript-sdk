// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSAMLIdentityProviderShrinkRequest extends $dara.Model {
  entityId?: string;
  JITProvisionStatus?: string;
  JITUpdateStatus?: string;
  loginURL?: string;
  SAMLBindingType?: string;
  SSOStatus?: string;
  userPoolName?: string;
  x509CertificatesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      JITProvisionStatus: 'JITProvisionStatus',
      JITUpdateStatus: 'JITUpdateStatus',
      loginURL: 'LoginURL',
      SAMLBindingType: 'SAMLBindingType',
      SSOStatus: 'SSOStatus',
      userPoolName: 'UserPoolName',
      x509CertificatesShrink: 'X509Certificates',
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
      userPoolName: 'string',
      x509CertificatesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

