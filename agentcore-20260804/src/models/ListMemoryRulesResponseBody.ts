// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryRulesResponseBodyItemsStrategy extends $dara.Model {
  /**
   * @remarks
   * The strategy-level instruction. It takes effect together with the store-level instruction. This field takes precedence in case of conflicts.
   * 
   * @example
   * Retain only long-term preferences explicitly expressed by the user
   */
  instruction?: string;
  /**
   * @remarks
   * type
   * 
   * This parameter is required.
   * 
   * @example
   * auto
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instruction: 'instruction',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instruction: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryRulesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * createdAt
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-23T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * description
   * 
   * @example
   * Extract long-term preferences explicitly expressed by the user
   */
  description?: string;
  /**
   * @remarks
   * enabled
   * 
   * This parameter is required.
   */
  enabled?: boolean;
  /**
   * @remarks
   * memoryStoreId
   * 
   * This parameter is required.
   * 
   * @example
   * ms-2f5f9c5a8d0e4c3b
   */
  memoryStoreId?: string;
  /**
   * @remarks
   * name
   * 
   * This parameter is required.
   * 
   * @example
   * Long-term preference
   */
  name?: string;
  /**
   * @remarks
   * ruleId
   * 
   * This parameter is required.
   * 
   * @example
   * rule-2f5f9c5a8d0e4c3b
   */
  ruleId?: string;
  /**
   * @remarks
   * strategy
   * 
   * This parameter is required.
   */
  strategy?: ListMemoryRulesResponseBodyItemsStrategy;
  /**
   * @remarks
   * updatedAt
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-23T10:00:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      enabled: 'enabled',
      memoryStoreId: 'memoryStoreId',
      name: 'name',
      ruleId: 'ruleId',
      strategy: 'strategy',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      enabled: 'boolean',
      memoryStoreId: 'string',
      name: 'string',
      ruleId: 'string',
      strategy: ListMemoryRulesResponseBodyItemsStrategy,
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * httpStatusCode
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * items
   */
  items?: ListMemoryRulesResponseBodyItems[];
  /**
   * @remarks
   * maxResults
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * eyJvZmZzZXQiOjIwMH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * success
   */
  success?: boolean;
  /**
   * @remarks
   * totalCount
   * 
   * @example
   * 20
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
      items: { 'type': 'array', 'itemType': ListMemoryRulesResponseBodyItems },
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

