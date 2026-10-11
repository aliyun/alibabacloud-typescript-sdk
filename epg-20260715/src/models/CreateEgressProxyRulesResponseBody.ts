// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyRulesResponseBodyEgressProxyRulesPostResponse extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress rule.
   * 
   * @example
   * epr-gw80bb6a91dbb775****
   */
  egressProxyRuleId?: string;
  /**
   * @remarks
   * The priority of the egress rule within its stage. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      egressProxyRuleId: 'EgressProxyRuleId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRuleId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyRulesResponseBodyEgressProxyRulesPreDns extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress rule.
   * 
   * @example
   * epr-gw80bb6a91dbb775****
   */
  egressProxyRuleId?: string;
  /**
   * @remarks
   * The priority of the egress rule within its stage. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      egressProxyRuleId: 'EgressProxyRuleId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRuleId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyRulesResponseBodyEgressProxyRulesPreRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress rule.
   * 
   * @example
   * epr-gw80bb6a91dbb775****
   */
  egressProxyRuleId?: string;
  /**
   * @remarks
   * The priority of the egress rule within its stage. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      egressProxyRuleId: 'EgressProxyRuleId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRuleId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyRulesResponseBodyEgressProxyRules extends $dara.Model {
  /**
   * @remarks
   * The list of rules in the PostResponse phase (after the response is returned).
   */
  postResponse?: CreateEgressProxyRulesResponseBodyEgressProxyRulesPostResponse[];
  /**
   * @remarks
   * The list of rules for the pre-DNS stage (before DNS resolution).
   */
  preDns?: CreateEgressProxyRulesResponseBodyEgressProxyRulesPreDns[];
  /**
   * @remarks
   * The list of rules in the PreRequest stage (before request forwarding).
   */
  preRequest?: CreateEgressProxyRulesResponseBodyEgressProxyRulesPreRequest[];
  static names(): { [key: string]: string } {
    return {
      postResponse: 'PostResponse',
      preDns: 'PreDns',
      preRequest: 'PreRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postResponse: { 'type': 'array', 'itemType': CreateEgressProxyRulesResponseBodyEgressProxyRulesPostResponse },
      preDns: { 'type': 'array', 'itemType': CreateEgressProxyRulesResponseBodyEgressProxyRulesPreDns },
      preRequest: { 'type': 'array', 'itemType': CreateEgressProxyRulesResponseBodyEgressProxyRulesPreRequest },
    };
  }

  validate() {
    if(Array.isArray(this.postResponse)) {
      $dara.Model.validateArray(this.postResponse);
    }
    if(Array.isArray(this.preDns)) {
      $dara.Model.validateArray(this.preDns);
    }
    if(Array.isArray(this.preRequest)) {
      $dara.Model.validateArray(this.preRequest);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of egress rules grouped by effective phase (PreDns, PreRequest, or PostResponse).
   */
  egressProxyRules?: CreateEgressProxyRulesResponseBodyEgressProxyRules;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01A05AB5-5BED-56ED-8EE9-304FBC2F8537
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      egressProxyRules: 'EgressProxyRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRules: CreateEgressProxyRulesResponseBodyEgressProxyRules,
      requestId: 'string',
    };
  }

  validate() {
    if(this.egressProxyRules && typeof (this.egressProxyRules as any).validate === 'function') {
      (this.egressProxyRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

