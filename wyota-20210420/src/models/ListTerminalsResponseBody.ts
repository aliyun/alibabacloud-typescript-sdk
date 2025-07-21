// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTerminalsResponseBodyData extends $dara.Model {
  /**
   * @example
   * DemoDevice
   */
  alias?: string;
  bindUserCount?: number;
  /**
   * @example
   * 7.0.2-RS-20240805.044924
   */
  buildId?: string;
  /**
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @example
   * ecd-drqmaogzbmbdf****
   */
  currentConnectDesktop?: string;
  /**
   * @example
   * alice
   */
  currentLoginUser?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  ipv4?: string;
  lastLoginUser?: string;
  locationInfo?: string;
  manageTime?: string;
  /**
   * @example
   * US01
   */
  model?: string;
  /**
   * @example
   * true
   */
  online?: boolean;
  /**
   * @example
   * alice
   */
  passwordFreeLoginUser?: string;
  publicIpv4?: string;
  /**
   * @example
   * ODN49YQCPQYC****
   */
  serialNumber?: string;
  setPasswordFreeLoginUserTime?: string;
  /**
   * @example
   * tg-default
   */
  terminalGroupId?: string;
  /**
   * @example
   * 04873D3898B51A7DF2455C1E1DC9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      bindUserCount: 'BindUserCount',
      buildId: 'BuildId',
      clientType: 'ClientType',
      currentConnectDesktop: 'CurrentConnectDesktop',
      currentLoginUser: 'CurrentLoginUser',
      ipv4: 'Ipv4',
      lastLoginUser: 'LastLoginUser',
      locationInfo: 'LocationInfo',
      manageTime: 'ManageTime',
      model: 'Model',
      online: 'Online',
      passwordFreeLoginUser: 'PasswordFreeLoginUser',
      publicIpv4: 'PublicIpv4',
      serialNumber: 'SerialNumber',
      setPasswordFreeLoginUserTime: 'SetPasswordFreeLoginUserTime',
      terminalGroupId: 'TerminalGroupId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      bindUserCount: 'number',
      buildId: 'string',
      clientType: 'number',
      currentConnectDesktop: 'string',
      currentLoginUser: 'string',
      ipv4: 'string',
      lastLoginUser: 'string',
      locationInfo: 'string',
      manageTime: 'string',
      model: 'string',
      online: 'boolean',
      passwordFreeLoginUser: 'string',
      publicIpv4: 'string',
      serialNumber: 'string',
      setPasswordFreeLoginUserTime: 'string',
      terminalGroupId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerminalsResponseBody extends $dara.Model {
  /**
   * @example
   * TERMINAL_NOT_FOUND
   */
  code?: string;
  data?: ListTerminalsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * terminal not found
   */
  message?: string;
  /**
   * @example
   * AAAAAdEdsXbwG2ZlbWCzN4wTTg6wQvfp7u1BJl4bxCAby41POSaYAlCvfULQpkAnb0ff****
   */
  nextToken?: string;
  /**
   * @example
   * C5DCE54A-B266-522E-A6ED-468AF45F5AAA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTerminalsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

