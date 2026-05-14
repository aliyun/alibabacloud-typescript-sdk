// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkAgentStatusDetailResponseBodyDataAgentStatusDetail extends $dara.Model {
  /**
   * @remarks
   * 绑定号码
   * 
   * @example
   * 示例值示例值
   */
  bindTel?: string;
  /**
   * @remarks
   * 电话类型，1:电话；2:IP话机；3:软电话
   * 
   * @example
   * 1
   */
  bindType?: number;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 企业id
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 登录终端，1:工具条；2:座席；3:管理员；4:接口；6:APP；9:移动SDK
   * 
   * @example
   * 2
   */
  loginType?: number;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * name3
   */
  name?: string;
  /**
   * @remarks
   * 座席状态， IDLE：空闲； PAUSE：置忙； WRAPUP：整理； CALLING： 呼叫中； RINGING：响铃； BUSY：通话
   * 
   * @example
   * IDLE
   */
  status?: string;
  /**
   * @remarks
   * 座席状态详情，空闲，忙碌，整理，呼叫中，响铃，呼入振铃，外呼振铃，通话，呼入通话，外呼通话，自定义置忙状态
   * 
   * @example
   * 示例值示例值示例值
   */
  statusDetails?: string;
  static names(): { [key: string]: string } {
    return {
      bindTel: 'BindTel',
      bindType: 'BindType',
      cno: 'Cno',
      enterpriseId: 'EnterpriseId',
      loginType: 'LoginType',
      name: 'Name',
      status: 'Status',
      statusDetails: 'StatusDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindTel: 'string',
      bindType: 'number',
      cno: 'string',
      enterpriseId: 'number',
      loginType: 'number',
      name: 'string',
      status: 'string',
      statusDetails: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkAgentStatusDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席状态详情
   */
  agentStatusDetail?: ClinkAgentStatusDetailResponseBodyDataAgentStatusDetail;
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * 示例值示例值示例值
   */
  clinkRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatusDetail: 'AgentStatusDetail',
      clinkRequestId: 'ClinkRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatusDetail: ClinkAgentStatusDetailResponseBodyDataAgentStatusDetail,
      clinkRequestId: 'string',
    };
  }

  validate() {
    if(this.agentStatusDetail && typeof (this.agentStatusDetail as any).validate === 'function') {
      (this.agentStatusDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkAgentStatusDetailResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkAgentStatusDetailResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9927CD06-C33A-50CC-A9BB-A3427967A66F
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
      data: ClinkAgentStatusDetailResponseBodyData,
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

