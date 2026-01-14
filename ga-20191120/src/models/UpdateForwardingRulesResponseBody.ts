// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateForwardingRulesResponseBodyForwardingRules extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * frule-bp1dii16gu9qdvb34****
   */
  forwardingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRuleId: 'ForwardingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the forwarding rules.
   */
  forwardingRules?: UpdateForwardingRulesResponseBodyForwardingRules[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64ADAB1E-0B7F-4FD8-A404-3BECC0E9CCFF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRules: 'ForwardingRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRules: { 'type': 'array', 'itemType': UpdateForwardingRulesResponseBodyForwardingRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forwardingRules)) {
      $dara.Model.validateArray(this.forwardingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

