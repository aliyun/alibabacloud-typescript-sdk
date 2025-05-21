// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpRouteMatchHeaders extends $dara.Model {
  /**
   * @example
   * dev
   */
  name?: string;
  /**
   * @example
   * Exact
   */
  type?: string;
  /**
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
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

