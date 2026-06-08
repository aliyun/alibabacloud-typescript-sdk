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

export class GenerateTemplatePolicyResponseBodyPolicyFunctionsActionPolicyFunctionsFunctions extends $dara.Model {
  function?: string;
  operationType?: string;
  relatedProperties?: string[];
  requirementLevel?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      operationType: 'OperationType',
      relatedProperties: 'RelatedProperties',
      requirementLevel: 'RequirementLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      operationType: 'string',
      relatedProperties: { 'type': 'array', 'itemType': 'string' },
      requirementLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedProperties)) {
      $dara.Model.validateArray(this.relatedProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBodyPolicyFunctionsActionPolicyFunctions extends $dara.Model {
  functions?: GenerateTemplatePolicyResponseBodyPolicyFunctionsActionPolicyFunctionsFunctions[];
  logicalResourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      functions: 'Functions',
      logicalResourceId: 'LogicalResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': GenerateTemplatePolicyResponseBodyPolicyFunctionsActionPolicyFunctionsFunctions },
      logicalResourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBodyPolicyFunctions extends $dara.Model {
  action?: string;
  actionPolicyFunctions?: GenerateTemplatePolicyResponseBodyPolicyFunctionsActionPolicyFunctions[];
  requirementLevel?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionPolicyFunctions: 'ActionPolicyFunctions',
      requirementLevel: 'RequirementLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionPolicyFunctions: { 'type': 'array', 'itemType': GenerateTemplatePolicyResponseBodyPolicyFunctionsActionPolicyFunctions },
      requirementLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionPolicyFunctions)) {
      $dara.Model.validateArray(this.actionPolicyFunctions);
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
  policyFunctions?: GenerateTemplatePolicyResponseBodyPolicyFunctions[];
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
      policyFunctions: 'PolicyFunctions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GenerateTemplatePolicyResponseBodyPolicy,
      policyFunctions: { 'type': 'array', 'itemType': GenerateTemplatePolicyResponseBodyPolicyFunctions },
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    if(Array.isArray(this.policyFunctions)) {
      $dara.Model.validateArray(this.policyFunctions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

