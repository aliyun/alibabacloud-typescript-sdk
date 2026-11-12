// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionRulesResponseBodyItems extends $dara.Model {
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
   * The list of rule targets.
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

export class ListPermissionRulesResponseBody extends $dara.Model {
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of permission rules.
   */
  items?: ListPermissionRulesResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of results returned in this response.
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
   * The token for the next page.
   * 
   * @example
   * token-example
   */
  nextToken?: string;
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
  /**
   * @remarks
   * The total number of rules that match the criteria.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListPermissionRulesResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

