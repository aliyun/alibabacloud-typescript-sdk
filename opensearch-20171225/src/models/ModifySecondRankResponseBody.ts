// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecondRankResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the expression is the default one.
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
   * 1
   */
  created?: number;
  /**
   * @remarks
   * The description of the expression.
   * 
   * @example
   * "11"
   */
  description?: string;
  /**
   * @remarks
   * The ID of the expression. This parameter is returned only in the response.
   * 
   * @example
   * 890473
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the expression is the default expression. This parameter is returned only in the response.
   * 
   * - true: The expression is the default expression.
   * 
   * - false: The expression is not the default expression.
   * 
   * @example
   * true
   */
  isDefault?: string;
  /**
   * @remarks
   * Indicates whether the expression is a system expression. This parameter is returned only in the response.
   * 
   * - true: The expression is a system expression.
   * 
   * - false: The expression is not a system expression.
   * 
   * @example
   * false
   */
  isSys?: string;
  /**
   * @remarks
   * The fine sort expression. You can create an expression that contains fields, scoring features, and mathematical functions to implement complex sorting logic.
   * 
   * @example
   * cate_id > 0 and cate_id < 1000
   */
  meta?: string;
  /**
   * @remarks
   * The name of the expression.
   * 
   * @example
   * lsh_second_1
   */
  name?: string;
  /**
   * @remarks
   * The time when the expression was updated.
   * 
   * @example
   * 1
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

export class ModifySecondRankResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5E2F73C-8241-81F8-3A62-65478C5A3111
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the fine sort expression.
   * 
   * @example
   * {}
   */
  result?: ModifySecondRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifySecondRankResponseBodyResult,
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

