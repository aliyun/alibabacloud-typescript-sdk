// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRecursionZoneRequest extends $dara.Model {
  /**
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @example
   * record
   */
  proxyPattern?: string;
  /**
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      proxyPattern: 'ProxyPattern',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      proxyPattern: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

