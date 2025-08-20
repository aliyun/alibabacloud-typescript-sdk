// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTemplatePolicyResponseBodyPolicyStatement extends $dara.Model {
  /**
   * @remarks
   * The operations that are performed on the specified resource.
   */
  action?: string[];
  /**
   * @remarks
   * The condition that is required for the policy to take effect.
   * 
   * @example
   * {
   *     "StringEquals": {
   *         "acs:Service": "fc.aliyuncs.com"
   *     }
   * }
   */
  condition?: { [key: string]: any };
  /**
   * @remarks
   * The effect of the statement. Valid values:
   * 
   * *   Allow
   * *   Deny
   * 
   * @example
   * Allow
   */
  effect?: string;
  /**
   * @remarks
   * The objects that the statement covers. An asterisk (\\*) indicates all resources.
   * 
   * @example
   * *
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      condition: 'Condition',
      effect: 'Effect',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      condition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effect: 'string',
      resource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    if(this.condition) {
      $dara.Model.validateMap(this.condition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The statements that are contained in the policy.
   */
  statement?: GenerateTemplatePolicyResponseBodyPolicyStatement[];
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      statement: 'Statement',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statement: { 'type': 'array', 'itemType': GenerateTemplatePolicyResponseBodyPolicyStatement },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statement)) {
      $dara.Model.validateArray(this.statement);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the policy.
   */
  policy?: GenerateTemplatePolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GenerateTemplatePolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

