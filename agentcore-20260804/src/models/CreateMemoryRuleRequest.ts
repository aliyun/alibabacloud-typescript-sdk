// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryRuleRequestBodyStrategy extends $dara.Model {
  /**
   * @remarks
   * The strategy-level instruction. It takes effect together with the store-level instruction and takes precedence in case of conflicts.
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

export class CreateMemoryRuleRequestBody extends $dara.Model {
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
   */
  enabled?: boolean;
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
   * strategy
   * 
   * This parameter is required.
   */
  strategy?: CreateMemoryRuleRequestBodyStrategy;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      enabled: 'enabled',
      name: 'name',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enabled: 'boolean',
      name: 'string',
      strategy: CreateMemoryRuleRequestBodyStrategy,
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

export class CreateMemoryRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON request body.
   * 
   * This parameter is required.
   */
  body?: CreateMemoryRuleRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateMemoryRuleRequestBody,
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

