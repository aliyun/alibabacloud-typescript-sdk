// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFirstRanksResponseBodyResultMeta extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used by a function in the expression.
   * 
   * For more information, see [Rough sort functions](https://help.aliyun.com/document_detail/180765.html).
   * 
   * @example
   * ""
   */
  arg?: string;
  /**
   * @remarks
   * The attribute, feature function, or field to be searched for.
   * 
   * For more information about supported feature functions, see [Rough sort functions](https://help.aliyun.com/document_detail/180765.html).
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
   * 1
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

export class ListFirstRanksResponseBodyResult extends $dara.Model {
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
   * The information about the expression.
   * 
   * @example
   * []
   */
  meta?: ListFirstRanksResponseBodyResultMeta[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The time when the expression was updated.
   * 
   * @example
   * 0
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      description: 'description',
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
      meta: { 'type': 'array', 'itemType': ListFirstRanksResponseBodyResultMeta },
      name: 'string',
      updated: 'number',
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

export class ListFirstRanksResponseBody extends $dara.Model {
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
   * 
   * For more information, see [FirstRank](https://help.aliyun.com/document_detail/170007.html).
   * 
   * @example
   * []
   */
  result?: ListFirstRanksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFirstRanksResponseBodyResult },
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

