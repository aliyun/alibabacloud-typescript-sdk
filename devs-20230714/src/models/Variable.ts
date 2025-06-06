// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Variable extends $dara.Model {
  /**
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @example
   * object_value
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      encrypted: 'encrypted',
      sensitive: 'sensitive',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encrypted: 'boolean',
      sensitive: 'boolean',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

