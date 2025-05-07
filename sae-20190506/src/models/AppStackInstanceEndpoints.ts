// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AppStackInstanceEndpoints extends $dara.Model {
  /**
   * @example
   * 127.0.0.1:8211
   */
  address?: string;
  /**
   * @example
   * game
   */
  name?: string;
  /**
   * @example
   * UDP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      name: 'Name',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

