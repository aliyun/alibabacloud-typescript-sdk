// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceGroupMatchDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 578B9ADD-FB3E-57E4-AB7D-77BC9D39B591
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

