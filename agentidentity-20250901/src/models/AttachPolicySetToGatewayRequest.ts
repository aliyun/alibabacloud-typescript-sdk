// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachPolicySetToGatewayRequest extends $dara.Model {
  enforcementMode?: string;
  gatewayArn?: string;
  gatewayType?: string;
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      enforcementMode: 'EnforcementMode',
      gatewayArn: 'GatewayArn',
      gatewayType: 'GatewayType',
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enforcementMode: 'string',
      gatewayArn: 'string',
      gatewayType: 'string',
      policySetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

