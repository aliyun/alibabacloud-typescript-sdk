// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableServiceAddressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The service address.
   * 
   * @example
   * 192.168.1.1
   */
  address?: string;
  /**
   * @remarks
   * The type of service address.
   * 
   * @example
   * ProbeTask
   */
  addressType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableServiceAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  data?: ListAvailableServiceAddressResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 324223F3-93D3-4CE4-B26F-66C0C3809922
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAvailableServiceAddressResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

