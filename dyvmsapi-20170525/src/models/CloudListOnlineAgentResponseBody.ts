// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListOnlineAgentResponseBodyDataAgentStatuses extends $dara.Model {
  /**
   * @remarks
   * 绑定电话
   * 
   * @example
   * 22223333
   */
  bindTel?: string;
  /**
   * @remarks
   * 座席工号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 设备状态，-1 失效，0 空闲，1 已锁定，2 呼叫中，3 响铃，4 通话中
   * 
   * @example
   * 0
   */
  deviceStatus?: number;
  /**
   * @remarks
   * 设备状态时长
   * 
   * @example
   * 0
   */
  deviceStatusDuration?: number;
  /**
   * @remarks
   * 登录状态，0离线，1在线，2置忙，3整理
   * 
   * @example
   * 1
   */
  loginStatus?: number;
  /**
   * @remarks
   * 登录状态时长
   * 
   * @example
   * 7
   */
  loginStatusDuration?: number;
  /**
   * @remarks
   * 登录时间
   * 
   * @example
   * 1774821736
   */
  loginTime?: string;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * 示例值示例值
   */
  name?: string;
  /**
   * @remarks
   * 座席状态（结合了登录状态和设备状态），失效，空闲，置忙，整理，呼叫中，响铃，通话
   * 
   * @example
   * 示例值示例值示例值
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      bindTel: 'BindTel',
      cno: 'Cno',
      deviceStatus: 'DeviceStatus',
      deviceStatusDuration: 'DeviceStatusDuration',
      loginStatus: 'LoginStatus',
      loginStatusDuration: 'LoginStatusDuration',
      loginTime: 'LoginTime',
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindTel: 'string',
      cno: 'string',
      deviceStatus: 'number',
      deviceStatusDuration: 'number',
      loginStatus: 'number',
      loginStatusDuration: 'number',
      loginTime: 'string',
      name: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListOnlineAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席状态数组
   */
  agentStatuses?: CloudListOnlineAgentResponseBodyDataAgentStatuses[];
  static names(): { [key: string]: string } {
    return {
      agentStatuses: 'AgentStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatuses: { 'type': 'array', 'itemType': CloudListOnlineAgentResponseBodyDataAgentStatuses },
    };
  }

  validate() {
    if(Array.isArray(this.agentStatuses)) {
      $dara.Model.validateArray(this.agentStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListOnlineAgentResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListOnlineAgentResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
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
      data: CloudListOnlineAgentResponseBodyData,
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

