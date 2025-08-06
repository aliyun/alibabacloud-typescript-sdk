// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnycastServerRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The access area from which you use the Anycast EIP to communicate with the Internet.
   * 
   * Set the value to **international**, which specifies the areas outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * international
   */
  serviceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      serviceLocation: 'ServiceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

