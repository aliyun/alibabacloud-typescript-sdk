// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HTTPHeader extends $dara.Model {
  /**
   * @remarks
   * The header name.
   * 
   * @example
   * Content-Type
   */
  name?: string;
  /**
   * @remarks
   * The header value.
   * 
   * @example
   * application/json
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

