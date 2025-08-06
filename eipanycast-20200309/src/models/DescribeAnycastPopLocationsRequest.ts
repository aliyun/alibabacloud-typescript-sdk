// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnycastPopLocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The access area of the Anycast elastic IP address (EIP).
   * 
   * Set the value to **international**, which specifies the areas outside the Chinese mainland.
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

