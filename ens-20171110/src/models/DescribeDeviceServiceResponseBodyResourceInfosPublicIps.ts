// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceServiceResponseBodyResourceInfosPublicIps extends $dara.Model {
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 122.13.173.137
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

