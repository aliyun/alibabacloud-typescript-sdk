// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSortExpressionsResponseBodyResult extends $dara.Model {
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
   * The timestamp when the sort expression was created.
   * 
   * @example
   * 1655793690
   */
  created?: number;
  /**
   * @remarks
   * The description of the sort expression.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The name of the sort expression.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The timestamp when the sort expression was updated.
   * 
   * @example
   * 1655793690
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      created: 'created',
      description: 'description',
      name: 'name',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      created: 'number',
      description: 'string',
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

export class ListSortExpressionsResponseBody extends $dara.Model {
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
   * The information about the rough sort or fine sort expressions that are returned.
   * 
   * For more information, see [FirstRank](https://help.aliyun.com/document_detail/170007.html) and [SecondRank](https://help.aliyun.com/document_detail/170008.html).
   */
  result?: ListSortExpressionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSortExpressionsResponseBodyResult },
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

