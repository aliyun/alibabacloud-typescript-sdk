// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFirstRankResponseBodyResultMeta extends $dara.Model {
  /**
   * @remarks
   * The parameters of the function in the expression. For more information, see [Rough sort](https://help.aliyun.com/document_detail/170007.html).
   * 
   * @example
   * ""
   */
  arg?: string;
  /**
   * @remarks
   * The attribute. This can be a scoring feature or a search field. For information about available scoring features, see [Rough sort](https://help.aliyun.com/document_detail/170007.html).
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
   * Indicates whether this is the default expression.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The details of the expression.
   */
  meta?: RemoveFirstRankResponseBodyResultMeta[];
  /**
   * @remarks
   * The name of the resource.
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
   * The details of the rough sort expression.
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

