// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnycastEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * > You must specify **Ip** or **AnycastId**.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The ID of the endpoint with which the Anycast EIP is associated.
   * 
   * @example
   * lb-2zebb08phyczzawe****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The IP address of the Anycast EIP.
   * 
   * > You must specify **Ip** or **AnycastId**.
   * 
   * @example
   * 139.95.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      bindInstanceId: 'BindInstanceId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      bindInstanceId: 'string',
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

