// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecondRankResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to set the fine sort expression as the default sort expression.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the expression was created.
   * 
   * @example
   * 1587052801
   */
  created?: number;
  /**
   * @remarks
   * Description
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The ID of the expression. This parameter appears only in the response.
   * 
   * @example
   * 89047
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the expression is the default one. This parameter appears only in the response. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isDefault?: string;
  /**
   * @remarks
   * Indicates whether the expression is a system expression. This parameter appears only in the response. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isSys?: string;
  /**
   * @remarks
   * The content of the fine sort expression. You can define an expression that consists of fields, feature functions, and mathematical functions to implement complex sort logic.
   * 
   * @example
   * random()+now()
   */
  meta?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * tests
   */
  name?: string;
  /**
   * @remarks
   * The time when the expression was updated.
   * 
   * @example
   * 1587052801
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      description: 'description',
      id: 'id',
      isDefault: 'isDefault',
      isSys: 'isSys',
      meta: 'meta',
      name: 'name',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      description: 'string',
      id: 'string',
      isDefault: 'string',
      isSys: 'string',
      meta: 'string',
      name: 'string',
      updated: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecondRankResponseBody extends $dara.Model {
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
   * The information about the fine sort expression.
   */
  result?: DescribeSecondRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeSecondRankResponseBodyResult,
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

