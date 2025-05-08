// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateServiceResponseBodyDryRunResultRolePolicy } from "./UpdateServiceResponseBodyDryRunResultRolePolicy";


export class UpdateServiceResponseBodyDryRunResult extends $dara.Model {
  /**
   * @remarks
   * The required ram policy for deploying role.
   */
  rolePolicy?: UpdateServiceResponseBodyDryRunResultRolePolicy;
  static names(): { [key: string]: string } {
    return {
      rolePolicy: 'RolePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePolicy: UpdateServiceResponseBodyDryRunResultRolePolicy,
    };
  }

  validate() {
    if(this.rolePolicy && typeof (this.rolePolicy as any).validate === 'function') {
      (this.rolePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

