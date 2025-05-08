// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceServiceResponseBodyResourceInfosInternalIps extends $dara.Model {
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 10.0.2.3
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

