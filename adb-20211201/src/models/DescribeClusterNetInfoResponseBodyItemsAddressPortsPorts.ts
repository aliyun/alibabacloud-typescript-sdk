// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts extends $dara.Model {
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **tcp**
   * *   **http**
   * *   **https**
   * *   **mysql**
   * 
   * @example
   * mysql
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
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

