// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePermissionRulesResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The creation time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The authorization effect.
   * 
   * @example
   * PERMIT
   */
  effect?: string;
  /**
   * @remarks
   * The rule enforcement mode.
   * 
   * @example
   * ENFORCE
   */
  enforcementMode?: string;
  /**
   * @remarks
   * The permission rule ID.
   * 
   * @example
   * pr-1234567890
   */
  permissionRuleId?: string;
  /**
   * @remarks
   * The principal ID.
   * 
   * @example
   * 1234567890123456
   */
  principalId?: string;
  /**
   * @remarks
   * The principal name.
   * 
   * @example
   * example-user
   */
  principalName?: string;
  /**
   * @remarks
   * The principal type.
   * 
   * @example
   * USER
   */
  principalType?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * agent-1234567890
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * AGENT
   */
  resourceType?: string;
  /**
   * @remarks
   * The rule source.
   * 
   * @example
   * AgentCore
   */
  source?: string;
  /**
   * @remarks
   * The rule source details.
   * 
   * @example
   * EXPLICIT
   */
  sourceDetail?: string;
  /**
   * @remarks
   * The target scope.
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
  /**
   * @remarks
   * The update time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      effect: 'effect',
      enforcementMode: 'enforcementMode',
      permissionRuleId: 'permissionRuleId',
      principalId: 'principalId',
      principalName: 'principalName',
      principalType: 'principalType',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      source: 'source',
      sourceDetail: 'sourceDetail',
      targetScope: 'targetScope',
      targets: 'targets',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      effect: 'string',
      enforcementMode: 'string',
      permissionRuleId: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      source: 'string',
      sourceDetail: 'string',
      targetScope: 'string',
      targets: { 'type': 'array', 'itemType': 'string' },
      updatedAt: 'string',
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

export class CreatePermissionRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of created permission rules.
   */
  rules?: CreatePermissionRulesResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': CreatePermissionRulesResponseBodyDataRules },
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

export class CreatePermissionRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The creation result.
   */
  data?: CreatePermissionRulesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request processing result message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreatePermissionRulesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

