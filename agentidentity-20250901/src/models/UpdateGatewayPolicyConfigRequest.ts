// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayPolicyConfigRequest extends $dara.Model {
  /**
   * @example
   * ENFORCE
   */
  enforcementMode?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:gateway/my-gateway
   */
  gatewayArn?: string;
  gatewayType?: string;
  static names(): { [key: string]: string } {
    return {
      enforcementMode: 'EnforcementMode',
      gatewayArn: 'GatewayArn',
      gatewayType: 'GatewayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enforcementMode: 'string',
      gatewayArn: 'string',
      gatewayType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

