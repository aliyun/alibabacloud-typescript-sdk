// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSAMLIdentityProviderRequest extends $dara.Model {
  entityId?: string;
  JITProvisionStatus?: string;
  JITUpdateStatus?: string;
  loginURL?: string;
  SAMLBindingType?: string;
  SSOStatus?: string;
  userPoolName?: string;
  x509Certificates?: string[];
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      JITProvisionStatus: 'JITProvisionStatus',
      JITUpdateStatus: 'JITUpdateStatus',
      loginURL: 'LoginURL',
      SAMLBindingType: 'SAMLBindingType',
      SSOStatus: 'SSOStatus',
      userPoolName: 'UserPoolName',
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
      userPoolName: 'string',
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

