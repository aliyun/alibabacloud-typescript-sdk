// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecondRanksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
   * 
   * @example
   * false
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the expression was created.
   * 
   * @example
   * 0
   */
  created?: number;
  /**
   * @remarks
   * Description
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The expression ID. This parameter is displayed only in the response.
   * 
   * @example
   * 890473
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the expression is the default one. This parameter is displayed only in the response. Valid values:
   * 
   * *   true: the expression is the default one.
   * *   false: the expression is not the default one.
   * 
   * @example
   * false
   */
  isDefault?: string;
  /**
   * @remarks
   * Indicates whether the expression is a system expression. This parameter is displayed only in the response. Valid values:
   * 
   * *   true: The expression is a system expression.
   * *   false:The expression is not a system expression
   * 
   * @example
   * true
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
   * Parameter
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

export class ListSecondRanksResponseBody extends $dara.Model {
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
   * 
   * For more information, see [SecondRank](https://help.aliyun.com/document_detail/170008.html).
   */
  result?: ListSecondRanksResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSecondRanksResponseBodyResult },
      totalCount: 'number',
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

