// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The unique IP identifier.
   * 
   * @example
   * sip-8exxqa2r
   */
  ipName?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipName: 'string',
      networkInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: AssignPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: AssignPrivateIpAddressResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

