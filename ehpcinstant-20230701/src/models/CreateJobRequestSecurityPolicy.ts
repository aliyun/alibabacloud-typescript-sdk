// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestSecurityPolicySecurityGroup } from "./CreateJobRequestSecurityPolicySecurityGroup";


export class CreateJobRequestSecurityPolicy extends $dara.Model {
  securityGroup?: CreateJobRequestSecurityPolicySecurityGroup;
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: CreateJobRequestSecurityPolicySecurityGroup,
    };
  }

  validate() {
    if(this.securityGroup && typeof (this.securityGroup as any).validate === 'function') {
      (this.securityGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

