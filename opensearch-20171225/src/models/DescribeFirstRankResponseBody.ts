// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirstRankResponseBodyResultMeta extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used by a function in the expression.
   * 
   * @example
   * ar_edit_time
   */
  arg?: string;
  /**
   * @remarks
   * The attribute, feature function, or field to be searched for.
   * 
   * @example
   * timeliness_ms()
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

export class DescribeFirstRankResponseBodyResult extends $dara.Model {
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
   * Description
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The information about the expression.
   */
  meta?: DescribeFirstRankResponseBodyResultMeta[];
  /**
   * @remarks
   * Parameter
   * 
   * @example
   * ar_wear_edit_time
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
      meta: { 'type': 'array', 'itemType': DescribeFirstRankResponseBodyResultMeta },
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

export class DescribeFirstRankResponseBody extends $dara.Model {
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
  result?: DescribeFirstRankResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeFirstRankResponseBodyResult,
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

