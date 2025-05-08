// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayRouteRequestPredicatesPathPredicates extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore case sensitivity.
   * 
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The route matching type. Valid values:
   * 
   * *   PRE: prefix matching
   * *   EQUAL: exact matching
   * *   ERGULAR: regular expression matching
   * 
   * @example
   * PRE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreCase: 'IgnoreCase',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreCase: 'boolean',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

