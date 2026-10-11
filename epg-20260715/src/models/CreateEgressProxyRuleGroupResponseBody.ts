// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyRuleGroupResponseBodyEgressProxyRulesPostResponse extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress proxy rule.
   * 
   * @example
   * epr-g2w80bb6a91dbb775****
   */
  egressProxyRuleId?: string;
  /**
   * @remarks
   * The priority of the egress proxy rule in the stage to which it belongs. Valid values: 1 to 1000. A smaller value indicates a higher priority.
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

export class CreateEgressProxyRuleGroupResponseBodyEgressProxyRulesPreDns extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress proxy rule.
   * 
   * @example
   * epr-gw80bb6a91dbb775****
   */
  egressProxyRuleId?: string;
  /**
   * @remarks
   * The priority of the egress proxy rule in the stage to which it belongs. Valid values: 1 to 1000. A smaller value indicates a higher priority.
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

export class CreateEgressProxyRuleGroupResponseBodyEgressProxyRulesPreRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress proxy rule.
   * 
   * @example
   * epr-g1w80bb6a91dbb775****
   */
  egressProxyRuleId?: string;
  /**
   * @remarks
   * The priority of the egress proxy rule in the stage to which it belongs. Valid values: 1 to 1000. A smaller value indicates a higher priority.
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

export class CreateEgressProxyRuleGroupResponseBodyEgressProxyRules extends $dara.Model {
  /**
   * @remarks
   * The list of rules in the PostResponse stage, which is executed after the response is returned.
   */
  postResponse?: CreateEgressProxyRuleGroupResponseBodyEgressProxyRulesPostResponse[];
  /**
   * @remarks
   * The list of rules in the PreDns stage, which is executed before DNS resolution.
   */
  preDns?: CreateEgressProxyRuleGroupResponseBodyEgressProxyRulesPreDns[];
  /**
   * @remarks
   * The list of rules in the PreRequest stage, which is executed before the request is forwarded.
   */
  preRequest?: CreateEgressProxyRuleGroupResponseBodyEgressProxyRulesPreRequest[];
  static names(): { [key: string]: string } {
    return {
      postResponse: 'PostResponse',
      preDns: 'PreDns',
      preRequest: 'PreRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postResponse: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupResponseBodyEgressProxyRulesPostResponse },
      preDns: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupResponseBodyEgressProxyRulesPreDns },
      preRequest: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupResponseBodyEgressProxyRulesPreRequest },
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

export class CreateEgressProxyRuleGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress proxy rule group.
   * 
   * @example
   * eprg-uf60966a9633667c51d7
   */
  egressProxyRuleGroupId?: string;
  /**
   * @remarks
   * The list of egress rules grouped by phase (PreDns, PreRequest, and PostResponse).
   */
  egressProxyRules?: CreateEgressProxyRuleGroupResponseBodyEgressProxyRules;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019F3A67-2D1B-537B-B08D-B2DEB69E8E8B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      egressProxyRuleGroupId: 'EgressProxyRuleGroupId',
      egressProxyRules: 'EgressProxyRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRuleGroupId: 'string',
      egressProxyRules: CreateEgressProxyRuleGroupResponseBodyEgressProxyRules,
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

