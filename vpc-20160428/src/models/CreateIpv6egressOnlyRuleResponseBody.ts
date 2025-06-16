// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpv6EgressOnlyRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress-only rule.
   * 
   * @example
   * ipv6py-hp3w98rmlbqp01245****
   */
  ipv6EgressRuleId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DFEDBEE-E5AB-49E8-A2DC-CC114C67AF75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6EgressRuleId: 'Ipv6EgressRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6EgressRuleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

