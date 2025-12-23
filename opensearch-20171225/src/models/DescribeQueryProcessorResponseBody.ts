// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryProcessorResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the query analysis rule is the default one.
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
   * The type of the industry. Valid values:
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
   * The indexes to which the query analysis rule applies.
   */
  indexes?: string[];
  /**
   * @remarks
   * The name of the query analysis rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The features that are used in the query analysis rule.
   */
  processors?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the query analysis rule was last updated.
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

export class DescribeQueryProcessorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the query analysis rule.
   */
  result?: DescribeQueryProcessorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeQueryProcessorResponseBodyResult,
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

