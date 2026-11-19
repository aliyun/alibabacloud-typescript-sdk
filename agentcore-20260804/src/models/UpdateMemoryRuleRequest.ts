// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryRuleRequestBodyStrategy extends $dara.Model {
  /**
   * @remarks
   * The custom extraction instruction. If omitted, the original value is retained. An empty string clears the value.
   * 
   * @example
   * Retain only long-term preferences explicitly expressed by the user
   */
  instruction?: string;
  /**
   * @remarks
   * type
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

export class UpdateMemoryRuleRequestBody extends $dara.Model {
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
   * @example
   * Long-term preferences
   */
  name?: string;
  /**
   * @remarks
   * The extraction strategy. Uses partial merging, where omitted fields retain their original values.
   */
  strategy?: UpdateMemoryRuleRequestBodyStrategy;
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
      strategy: UpdateMemoryRuleRequestBodyStrategy,
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

export class UpdateMemoryRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON request body.
   * 
   * This parameter is required.
   */
  body?: UpdateMemoryRuleRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateMemoryRuleRequestBody,
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

