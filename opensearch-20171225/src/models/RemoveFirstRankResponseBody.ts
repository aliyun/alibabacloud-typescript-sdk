// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFirstRankResponseBodyResultMeta extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used by a function in the expression. For more information, see Rough sort functions.[](~~170007~~)
   * 
   * @example
   * ""
   */
  arg?: string;
  /**
   * @remarks
   * The attribute, which refers to the scoring feature or search field, For more information about supported feature functions, see Rough sort functions.[](~~170007~~)
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

export class RemoveFirstRankResponseBodyResult extends $dara.Model {
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
   * Description
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The information about the expression.
   */
  meta?: RemoveFirstRankResponseBodyResultMeta[];
  /**
   * @remarks
   * Parameter
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
      meta: { 'type': 'array', 'itemType': RemoveFirstRankResponseBodyResultMeta },
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

export class RemoveFirstRankResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E676FAB6-A0AC-64D9-F9D7-D0D33C930CFF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the rough sort expression.
   */
  result?: RemoveFirstRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RemoveFirstRankResponseBodyResult,
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

