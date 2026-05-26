// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayPolicyConfigResponseBodyGatewayPolicyConfig extends $dara.Model {
  /**
   * @example
   * ENFORCE
   */
  enforcementMode?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:policyset/default-policy-set
   */
  policySetArn?: string;
  static names(): { [key: string]: string } {
    return {
      enforcementMode: 'EnforcementMode',
      policySetArn: 'PolicySetArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enforcementMode: 'string',
      policySetArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayPolicyConfigResponseBody extends $dara.Model {
  gatewayPolicyConfig?: UpdateGatewayPolicyConfigResponseBodyGatewayPolicyConfig;
  /**
   * @example
   * 2A48EB1D-D645-5758-91AF-EDF8E36E257B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayPolicyConfig: 'GatewayPolicyConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayPolicyConfig: UpdateGatewayPolicyConfigResponseBodyGatewayPolicyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.gatewayPolicyConfig && typeof (this.gatewayPolicyConfig as any).validate === 'function') {
      (this.gatewayPolicyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

