// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyJobInfoDeploymentPolicyNetwork extends $dara.Model {
  enableENIMapping?: boolean;
  enableExternalIpAddress?: boolean;
  vswitch?: string[];
  static names(): { [key: string]: string } {
    return {
      enableENIMapping: 'EnableENIMapping',
      enableExternalIpAddress: 'EnableExternalIpAddress',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableENIMapping: 'boolean',
      enableExternalIpAddress: 'boolean',
      vswitch: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswitch)) {
      $dara.Model.validateArray(this.vswitch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

