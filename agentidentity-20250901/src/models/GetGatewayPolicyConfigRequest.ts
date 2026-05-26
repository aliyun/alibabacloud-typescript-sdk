// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayPolicyConfigRequest extends $dara.Model {
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:gateway/my-gateway
   */
  gatewayArn?: string;
  gatewayType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayArn: 'GatewayArn',
      gatewayType: 'GatewayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

