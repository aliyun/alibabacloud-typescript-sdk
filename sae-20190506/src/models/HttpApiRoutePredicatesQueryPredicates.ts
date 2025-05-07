// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiRoutePredicatesQueryPredicates extends $dara.Model {
  name?: string;
  /**
   * @example
   * Prefix/Exact/Regex
   */
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

