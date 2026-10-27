// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSipTrunksResponseBodyListIps extends $dara.Model {
  /**
   * @remarks
   * The IP address of the SIP trunk.
   * 
   * @example
   * 192.0.2.1
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

export class ListSipTrunksResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The description of the SIP trunk.
   * 
   * @example
   * Test environment SIP trunk
   */
  description?: string;
  /**
   * @remarks
   * The creation timestamp, in milliseconds.
   * 
   * @example
   * 1727654400000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The list of IP addresses of the SIP trunk.
   */
  ips?: ListSipTrunksResponseBodyListIps[];
  /**
   * @remarks
   * The unique identifier of the SIP trunk.
   * 
   * @example
   * 6bf8a1d2-3c4e-4f5a-9b8c-7d6e5f4a3b2c
   */
  trunkId?: string;
  /**
   * @remarks
   * The name of the SIP trunk.
   * 
   * @example
   * sip-trunk-demo
   */
  trunkName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      ips: 'Ips',
      trunkId: 'TrunkId',
      trunkName: 'TrunkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      ips: { 'type': 'array', 'itemType': ListSipTrunksResponseBodyListIps },
      trunkId: 'string',
      trunkName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSipTrunksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of SIP trunks.
   */
  list?: ListSipTrunksResponseBodyList[];
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': ListSipTrunksResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

