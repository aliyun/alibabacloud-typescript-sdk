// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayPolicyConfigResponseBodyGatewayPolicyConfig extends $dara.Model {
  enforcementMode?: string;
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

