// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFirstRankResponseBodyResultMeta extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used by a function in the expression.
   * 
   * @example
   * “1 ”
   */
  arg?: string;
  /**
   * @remarks
   * The attribute, feature function, or field to be searched for.
   * 
   * @example
   * static_bm25()
   */
  attribute?: string;
  /**
   * @remarks
   * The weight. Valid values: -100000 to 100000. The value cannot be 0.
   * 
   * @example
   * 10
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'arg',
      attribute: 'attribute',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      attribute: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponseBodyResult extends $dara.Model {
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
   * The description of the rough sort expression.
   * 
   * @example
   * 1
   */
  description?: string;
  /**
   * @remarks
   * The information about the expression.
   */
  meta?: ModifyFirstRankResponseBodyResultMeta[];
  /**
   * @remarks
   * The name of the expression.
   * 
   * @example
   * default
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: { 'type': 'array', 'itemType': ModifyFirstRankResponseBodyResultMeta },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.meta)) {
      $dara.Model.validateArray(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirstRankResponseBody extends $dara.Model {
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
   * The information about the rough sort expression.
   */
  result?: ModifyFirstRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyFirstRankResponseBodyResult,
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

