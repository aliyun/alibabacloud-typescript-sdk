// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQueryProcessorResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the query analysis rule is a default rule.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 0
   */
  created?: number;
  /**
   * @remarks
   * The type of the industry to which the query analysis rule is applied. Valid values:
   * 
   * *   GENERAL
   * *   ECOMMERCE
   * *   IT_CONTENT
   * 
   * @example
   * GENERAL
   */
  domain?: string;
  /**
   * @remarks
   * The indexes to which the query analysis rule is applied.
   * 
   * @example
   * ["default"]
   */
  indexes?: string[];
  /**
   * @remarks
   * The name of the query analysis rule.
   * 
   * @example
   * synonym
   */
  name?: string;
  /**
   * @remarks
   * The analysis rule.
   * 
   * @example
   * []
   */
  processors?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the rule was updated.
   * 
   * @example
   * 1
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      domain: 'domain',
      indexes: 'indexes',
      name: 'name',
      processors: 'processors',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      updated: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.indexes)) {
      $dara.Model.validateArray(this.indexes);
    }
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQueryProcessorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the query analysis rule.
   * 
   * @example
   * {}
   */
  result?: ModifyQueryProcessorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyQueryProcessorResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

