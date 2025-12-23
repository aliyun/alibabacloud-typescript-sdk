// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryProcessorsResponseBodyResult extends $dara.Model {
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
   * The time when the query analysis rule was created.
   * 
   * @example
   * 1587398402
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
   */
  indexes?: string[];
  /**
   * @remarks
   * The name of the query analysis rule.
   * 
   * @example
   * ner
   */
  name?: string;
  /**
   * @remarks
   * The features that are used in the query analysis rule.
   */
  processors?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the query analysis rule was last modified.
   * 
   * @example
   * 1587398402
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

export class ListQueryProcessorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the query analysis rule.
   * 
   * For more information, see [QueryProcessor](https://help.aliyun.com/document_detail/170014.html).
   */
  result?: ListQueryProcessorsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListQueryProcessorsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

