// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachPolicySetFromGatewayRequest extends $dara.Model {
  gatewayArn?: string;
  gatewayType?: string;
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayArn: 'GatewayArn',
      gatewayType: 'GatewayType',
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

