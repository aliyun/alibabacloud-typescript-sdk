// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePermissionRulesRequestBodyRules extends $dara.Model {
  /**
   * @remarks
   * The authorization effect.
   * 
   * This parameter is required.
   * 
   * @example
   * PERMIT
   */
  effect?: string;
  /**
   * @remarks
   * The rule enforcement mode.
   * 
   * This parameter is required.
   * 
   * @example
   * ENFORCE
   */
  enforcementMode?: string;
  /**
   * @remarks
   * The principal ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123456
   */
  principalId?: string;
  /**
   * @remarks
   * The principal type.
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  principalType?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-1234567890
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * AGENT
   */
  resourceType?: string;
  /**
   * @remarks
   * The rule source.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentCore
   */
  source?: string;
  /**
   * @remarks
   * The target scope.
   * 
   * This parameter is required.
   * 
   * @example
   * SPECIFIED
   */
  targetScope?: string;
  /**
   * @remarks
   * The list of targets for the rule.
   */
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      enforcementMode: 'enforcementMode',
      principalId: 'principalId',
      principalType: 'principalType',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      source: 'source',
      targetScope: 'targetScope',
      targets: 'targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      enforcementMode: 'string',
      principalId: 'string',
      principalType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      source: 'string',
      targetScope: 'string',
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePermissionRulesRequestBody extends $dara.Model {
  /**
   * @remarks
   * The list of permission rules to be created.
   * 
   * This parameter is required.
   */
  rules?: CreatePermissionRulesRequestBodyRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': CreatePermissionRulesRequestBodyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePermissionRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for creating permission rules.
   */
  body?: CreatePermissionRulesRequestBody;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreatePermissionRulesRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

