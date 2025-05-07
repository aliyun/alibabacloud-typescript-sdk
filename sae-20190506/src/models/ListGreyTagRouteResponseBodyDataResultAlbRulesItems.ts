// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGreyTagRouteResponseBodyDataResultAlbRulesItems extends $dara.Model {
  /**
   * @example
   * ==
   */
  cond?: string;
  /**
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @example
   * N/A
   */
  index?: number;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @example
   * cookie
   */
  type?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

