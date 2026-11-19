// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryRuleResponseBodyDataStrategy extends $dara.Model {
  /**
   * @remarks
   * The strategy-level instruction. It takes effect together with the store-level instruction. In case of a conflict, this field takes precedence.
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

export class UpdateMemoryRuleResponseBodyData extends $dara.Model {
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
   * Long-term preferences
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
  strategy?: UpdateMemoryRuleResponseBodyDataStrategy;
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
      strategy: UpdateMemoryRuleResponseBodyDataStrategy,
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

export class UpdateMemoryRuleResponseBody extends $dara.Model {
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
   * data
   */
  data?: UpdateMemoryRuleResponseBodyData;
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
   * message
   * 
   * @example
   * success
   */
  message?: string;
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
      data: UpdateMemoryRuleResponseBodyData,
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

