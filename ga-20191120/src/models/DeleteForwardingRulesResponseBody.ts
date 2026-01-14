// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteForwardingRulesResponseBodyForwardingRules extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * frule-bp19a3t3yzr21q3****
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

export class DeleteForwardingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The forwarding rules.
   */
  forwardingRules?: DeleteForwardingRulesResponseBodyForwardingRules[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CFC67ED9-4AB1-431F-B6E3-A752B7B8CCD4
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
      forwardingRules: { 'type': 'array', 'itemType': DeleteForwardingRulesResponseBodyForwardingRules },
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

