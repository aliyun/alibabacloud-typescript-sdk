// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiRoutePredicatesPathPredicates extends $dara.Model {
  ignoreCase?: boolean;
  path?: string;
  /**
   * @example
   * Prefix/Exact/Regex
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

