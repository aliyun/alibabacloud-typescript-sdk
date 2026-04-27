// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetAgentResponseBodyDataAgent extends $dara.Model {
  /**
   * @remarks
   * 是否启用，0：停用，1：启用，默认启用
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 座席类型，1：电话座席，2：电脑座席，默认电话座席
   * 
   * @example
   * 1
   */
  agentType?: number;
  /**
   * @remarks
   * 区号格式
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 允许语音识别的通话类型，1:呼入 4：预览外呼 9：主叫外呼 5：预测外呼 2：webcall
   * 
   * @example
   * 2
   */
  asrCallType?: string;
  /**
   * @remarks
   * 座席绑定电话
   * 
   * @example
   * 22223333
   */
  bindTel?: string;
  /**
   * @remarks
   * 电话类型，1:固话 2:手机 3:分机 4:软电话
   * 
   * @example
   * 1
   */
  bindTelType?: number;
  /**
   * @remarks
   * 呼叫权限，0：无限制，1：国内长途，2：国内本市，3：内部呼叫，默认无限制
   * 
   * @example
   * 0
   */
  callPower?: number;
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
   * 备注
   * 
   * @example
   * 示例值示例值示例值
   */
  comment?: string;
  /**
   * @remarks
   * 创建时间，格式: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 呼入是否录音，0：不录用，1：录音，默认录音
   * 
   * @example
   * 1
   */
  ibRecord?: number;
  /**
   * @remarks
   * 座席id
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * 是否开启ASR转写：0：不开启，1：开启，默认不开启
   * 
   * @example
   * 1
   */
  isAsr?: number;
  /**
   * @remarks
   * 是否允许axb外呼，默认1开启 0关闭
   * 
   * @example
   * 0
   */
  isAxbCall?: string;
  /**
   * @remarks
   * 是否允许外呼，0：不允许，1：可以，默认允许
   * 
   * @example
   * 1
   */
  isOb?: number;
  /**
   * @remarks
   * 外呼主叫记忆 1：开启 0：关闭
   * 
   * @example
   * 1
   */
  isObRemember?: string;
  /**
   * @remarks
   * 坐席最后一次登陆的时间
   * 
   * @example
   * 1774821736
   */
  loginTime?: string;
  /**
   * @remarks
   * 座席axb外呼是否使用mrcp方式推送语音流配置JSON Str格式数据
   * 
   * @example
   * {}
   */
  mrcpProperty?: string;
  /**
   * @remarks
   * 座席姓名
   * 
   * @example
   * 示例值示例值
   */
  name?: string;
  /**
   * @remarks
   * 外显号码
   * 
   * @example
   * 22223333
   */
  obClid?: string;
  /**
   * @remarks
   * 外显规则属性，JSON格式
   * 
   * @example
   * {"isMatchCapital":0,"areaCodeRule":1,"isRandom":1}
   */
  obClidProperty?: string;
  /**
   * @remarks
   * 外显规则 1：企业默认 2：随机 3：按区号 4：动态外显
   * 
   * @example
   * 1
   */
  obClidType?: number;
  /**
   * @remarks
   * 外呼是否录音，0：不录音，1：录音，默认录音
   * 
   * @example
   * 1
   */
  obRecord?: number;
  /**
   * @remarks
   * 可外呼时间段用,号分割
   * 
   * @example
   * 08:00,20:00
   */
  permitObPreviewTime?: string;
  /**
   * @remarks
   * 1：班长席，0：普通座席，默认普通座席
   * 
   * @example
   * 1
   */
  power?: number;
  /**
   * @remarks
   * 座席主动挂机配置Json Str 格式数据 unLink 是否允许主动挂断, 0:关, 1:开，prohibitDuration禁止时长
   * 
   * @example
   * 0
   */
  property?: string;
  /**
   * @remarks
   * 坐席所属队列
   */
  queueList?: string[];
  /**
   * @remarks
   * 座席状态，0:离线，1：在线
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * 更新时间，格式: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * webrtc软电话返回地址，0：企业默认 1：公网域名 2：专线域名 3：公网IP 4：专线IP
   * 
   * @example
   * 1
   */
  webrtcUrlType?: string;
  /**
   * @remarks
   * 整理时间，秒数，默认10秒
   * 
   * @example
   * 20
   */
  wrapup?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      agentType: 'AgentType',
      areaCode: 'AreaCode',
      asrCallType: 'AsrCallType',
      bindTel: 'BindTel',
      bindTelType: 'BindTelType',
      callPower: 'CallPower',
      cno: 'Cno',
      comment: 'Comment',
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      ibRecord: 'IbRecord',
      id: 'Id',
      isAsr: 'IsAsr',
      isAxbCall: 'IsAxbCall',
      isOb: 'IsOb',
      isObRemember: 'IsObRemember',
      loginTime: 'LoginTime',
      mrcpProperty: 'MrcpProperty',
      name: 'Name',
      obClid: 'ObClid',
      obClidProperty: 'ObClidProperty',
      obClidType: 'ObClidType',
      obRecord: 'ObRecord',
      permitObPreviewTime: 'PermitObPreviewTime',
      power: 'Power',
      property: 'Property',
      queueList: 'QueueList',
      status: 'Status',
      updateTime: 'UpdateTime',
      webrtcUrlType: 'WebrtcUrlType',
      wrapup: 'Wrapup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      agentType: 'number',
      areaCode: 'string',
      asrCallType: 'string',
      bindTel: 'string',
      bindTelType: 'number',
      callPower: 'number',
      cno: 'string',
      comment: 'string',
      createTime: 'string',
      enterpriseId: 'number',
      ibRecord: 'number',
      id: 'number',
      isAsr: 'number',
      isAxbCall: 'string',
      isOb: 'number',
      isObRemember: 'string',
      loginTime: 'string',
      mrcpProperty: 'string',
      name: 'string',
      obClid: 'string',
      obClidProperty: 'string',
      obClidType: 'number',
      obRecord: 'number',
      permitObPreviewTime: 'string',
      power: 'number',
      property: 'string',
      queueList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      updateTime: 'string',
      webrtcUrlType: 'string',
      wrapup: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.queueList)) {
      $dara.Model.validateArray(this.queueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席列表数组
   */
  agent?: CloudGetAgentResponseBodyDataAgent[];
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: { 'type': 'array', 'itemType': CloudGetAgentResponseBodyDataAgent },
    };
  }

  validate() {
    if(Array.isArray(this.agent)) {
      $dara.Model.validateArray(this.agent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAgentResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudGetAgentResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 53D0F0Fe-cbbB-De28-6FCd-DdbBcefA46dD
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
      data: CloudGetAgentResponseBodyData,
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

