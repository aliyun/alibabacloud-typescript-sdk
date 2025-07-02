// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DNSOption extends $dara.Model {
  /**
   * @example
   * ndots
   */
  name?: string;
  /**
   * @example
   * 2
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

