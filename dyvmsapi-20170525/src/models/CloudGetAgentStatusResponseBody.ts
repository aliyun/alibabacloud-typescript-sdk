// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetAgentStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席设备状态，座席登录状态不是离线时返回  -1：错误的状态  0：空闲状态  1：锁定状态   2：邀请中状态  3：响铃状态  4：使用中状态
   * 
   * @example
   * 1
   */
  deviceStatus?: number;
  /**
   * @remarks
   * 座席登录状态   0：离线状态  1：在线状态  2：置忙状态  3：整理状态
   * 
   * @example
   * 1
   */
  loginStatus?: number;
  /**
   * @remarks
   * 座席当前参与的通话唯一标识，座席设备状态为1/2/3/4时返回
   * 
   * @example
   * medias_1-162046xxxx.12
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 座席状态描述（结合了登录状态和设备状态），离线，空闲，置忙，整理，呼叫中，响铃，保持，通话
   * 
   * @example
   * 示例值示例值
   */
  state?: string;
  /**
   * @remarks
   * 状态对应的动作，座席登录状态不是离线时返回
   * 
   * @example
   * idle
   */
  stateAction?: string;
  static names(): { [key: string]: string } {
    return {
      deviceStatus: 'DeviceStatus',
      loginStatus: 'LoginStatus',
      mainUniqueId: 'MainUniqueId',
      state: 'State',
      stateAction: 'StateAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceStatus: 'number',
      loginStatus: 'number',
      mainUniqueId: 'string',
      state: 'string',
      stateAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAgentStatusResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudGetAgentStatusResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudGetAgentStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

