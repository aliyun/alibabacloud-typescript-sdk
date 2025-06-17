// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address. You can specify only one IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.1
   */
  IP?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

