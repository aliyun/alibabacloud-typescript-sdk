// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialConfigChain extends $dara.Model {
  assumeRoleFor?: string;
  role?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      role: 'Role',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      role: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfig extends $dara.Model {
  chain?: CredentialConfigChain[];
  policy?: string;
  serviceRole?: string;
  static names(): { [key: string]: string } {
    return {
      chain: 'Chain',
      policy: 'Policy',
      serviceRole: 'ServiceRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chain: { 'type': 'array', 'itemType': CredentialConfigChain },
      policy: 'string',
      serviceRole: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chain)) {
      $dara.Model.validateArray(this.chain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

