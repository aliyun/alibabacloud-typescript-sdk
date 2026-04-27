// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryAgentResponseBodyDataAgentsAgent extends $dara.Model {
  /**
   * @remarks
   * 是否启用，0：停用，1：启用，默认启用
   * 
   * @example
   * 1
   */
  active?: string;
  /**
   * @remarks
   * 座席类型，1：电话座席，2：电脑座席，默认电话座席
   * 
   * @example
   * 1
   */
  agentType?: string;
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
   * 座席绑定电话
   * 
   * @example
   * 41008502
   */
  bindTel?: string;
  /**
   * @remarks
   * 电话类型，1:固话 2:手机 3:分机 4:软电话
   * 
   * @example
   * 1
   */
  bindTelType?: string;
  /**
   * @remarks
   * 呼叫权限，0：无限制，1：国内长途，2：国内本市，3：内部呼叫，默认无限制
   * 
   * @example
   * 0
   */
  callPower?: string;
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
  enterpriseId?: string;
  /**
   * @remarks
   * 呼入是否录音，0：不录用，1：录音，默认录音
   * 
   * @example
   * 1
   */
  ibRecord?: string;
  /**
   * @remarks
   * 座席id
   * 
   * @example
   * 133
   */
  id?: string;
  /**
   * @remarks
   * 是否开启ASR转写：0：不开启，1：开启，默认不开启
   * 
   * @example
   * 1
   */
  isAsr?: string;
  /**
   * @remarks
   * 是否允许外呼，0：不允许，1：可以，默认允许
   * 
   * @example
   * 1
   */
  isOb?: string;
  /**
   * @example
   * 1
   */
  isQualityCheck?: string;
  /**
   * @remarks
   * 座席姓名
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @remarks
   * 外显号码
   * 
   * @example
   * 41008502
   */
  obClid?: string;
  /**
   * @remarks
   * 外显规则 1：企业默认 2：随机 3：按区号 4：动态外显
   * 
   * @example
   * 1
   */
  obClidType?: string;
  /**
   * @remarks
   * 外呼是否录音，0：不录音，1：录音，默认录音
   * 
   * @example
   * 1
   */
  obRecord?: string;
  /**
   * @remarks
   * 1：班长席，0：普通座席，默认普通座席
   * 
   * @example
   * 1
   */
  power?: string;
  /**
   * @remarks
   * 座席状态，0:离线，1：在线
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * webrtc软电话返回地址，0：企业默认 1：公网域名 2：专线域名 3：公网IP 4：专线IP
   * 
   * @example
   * 0
   */
  webrtcUrlType?: string;
  /**
   * @remarks
   * 整理时间，秒数，默认10秒
   * 
   * @example
   * 10
   */
  wrapup?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      agentType: 'AgentType',
      areaCode: 'AreaCode',
      bindTel: 'BindTel',
      bindTelType: 'BindTelType',
      callPower: 'CallPower',
      cno: 'Cno',
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      ibRecord: 'IbRecord',
      id: 'Id',
      isAsr: 'IsAsr',
      isOb: 'IsOb',
      isQualityCheck: 'IsQualityCheck',
      name: 'Name',
      obClid: 'ObClid',
      obClidType: 'ObClidType',
      obRecord: 'ObRecord',
      power: 'Power',
      status: 'Status',
      webrtcUrlType: 'WebrtcUrlType',
      wrapup: 'Wrapup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'string',
      agentType: 'string',
      areaCode: 'string',
      bindTel: 'string',
      bindTelType: 'string',
      callPower: 'string',
      cno: 'string',
      createTime: 'string',
      enterpriseId: 'string',
      ibRecord: 'string',
      id: 'string',
      isAsr: 'string',
      isOb: 'string',
      isQualityCheck: 'string',
      name: 'string',
      obClid: 'string',
      obClidType: 'string',
      obRecord: 'string',
      power: 'string',
      status: 'string',
      webrtcUrlType: 'string',
      wrapup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryAgentResponseBodyDataAgentsQueueList extends $dara.Model {
  /**
   * @remarks
   * 位置播报 0关闭 1大于announce_position_param时播放 2小于等于announce_position_param时播放
   * 
   * @example
   * 1
   */
  announcePosition?: number;
  /**
   * @remarks
   * 位置播报周期，秒数
   * 
   * @example
   * 10
   */
  announcePositionFrequency?: number;
  /**
   * @remarks
   * 多余少余n个时播报，必须大于等于2
   * 
   * @example
   * 4
   */
  announcePositionParam?: number;
  /**
   * @remarks
   * 是否播报\\"您是下一位\\",0关闭，1开启
   * 
   * @example
   * 1
   */
  announcePositionYouarenext?: number;
  /**
   * @remarks
   * 播报固定语音 0关闭 1打开
   * 
   * @example
   * 1
   */
  announceSound?: number;
  /**
   * @remarks
   * 固定语音文件
   * 
   * @example
   * voice_filexxxxx
   */
  announceSoundFile?: string;
  /**
   * @remarks
   * 播放固定语音周期，秒数
   * 
   * @example
   * 17
   */
  announceSoundFrequency?: number;
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
   * 队列名
   * 
   * @example
   * queue_name
   */
  description?: string;
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
   * 队列id
   * 
   * @example
   * 76
   */
  id?: number;
  /**
   * @remarks
   * 队列中为空时是否可以join，取值：1：置忙 2：通话中 4：振铃 8：无效 16：整理
   * 
   * @example
   * 1
   */
  joinEmpty?: number;
  /**
   * @remarks
   * 最大等待数，设置范围0-999，0表示不做任何限制
   * 
   * @example
   * 0
   */
  maxLen?: number;
  /**
   * @remarks
   * 座席超时时间，取值范围20-60秒，默认25秒
   * 
   * @example
   * 25
   */
  memberTimeout?: number;
  /**
   * @remarks
   * 等待语音class
   * 
   * @example
   * class1
   */
  musicClass?: string;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 322
   */
  qno?: string;
  /**
   * @remarks
   * 队列超时时间，取值范围5-600秒，默认600秒
   * 
   * @example
   * 600
   */
  queueTimeout?: number;
  /**
   * @remarks
   * 座席超时无应答,呼叫下一座席的延迟秒数
   * 
   * @example
   * 20
   */
  retry?: number;
  /**
   * @remarks
   * 语音报号，true:播报，false:不播报
   * 
   * @example
   * true
   */
  sayAgentno?: boolean;
  /**
   * @remarks
   * 服务水平秒数，低于此时间内接听的认为是高服务水平
   * 
   * @example
   * 5
   */
  serviceLevel?: number;
  /**
   * @remarks
   * 呼叫策略：rrordered:技能优先 rrmemory:轮选 fewestcalls:平均 random:随机 linear:顺序 leastrecent:最长空闲时间
   * 
   * @example
   * rrordered
   */
  strategy?: string;
  /**
   * @remarks
   * 是否支持vip，1:支持，0:不支持
   * 
   * @example
   * 1
   */
  vipSupport?: number;
  /**
   * @remarks
   * 队列优先级，取值范围1-10，数值越高，优先级越高
   * 
   * @example
   * 10
   */
  weight?: number;
  /**
   * @remarks
   * 整理时间，取值范围3-3600秒
   * 
   * @example
   * 30
   */
  wrapupTime?: number;
  static names(): { [key: string]: string } {
    return {
      announcePosition: 'AnnouncePosition',
      announcePositionFrequency: 'AnnouncePositionFrequency',
      announcePositionParam: 'AnnouncePositionParam',
      announcePositionYouarenext: 'AnnouncePositionYouarenext',
      announceSound: 'AnnounceSound',
      announceSoundFile: 'AnnounceSoundFile',
      announceSoundFrequency: 'AnnounceSoundFrequency',
      createTime: 'CreateTime',
      description: 'Description',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      joinEmpty: 'JoinEmpty',
      maxLen: 'MaxLen',
      memberTimeout: 'MemberTimeout',
      musicClass: 'MusicClass',
      qno: 'Qno',
      queueTimeout: 'QueueTimeout',
      retry: 'Retry',
      sayAgentno: 'SayAgentno',
      serviceLevel: 'ServiceLevel',
      strategy: 'Strategy',
      vipSupport: 'VipSupport',
      weight: 'Weight',
      wrapupTime: 'WrapupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      announcePosition: 'number',
      announcePositionFrequency: 'number',
      announcePositionParam: 'number',
      announcePositionYouarenext: 'number',
      announceSound: 'number',
      announceSoundFile: 'string',
      announceSoundFrequency: 'number',
      createTime: 'string',
      description: 'string',
      enterpriseId: 'number',
      id: 'number',
      joinEmpty: 'number',
      maxLen: 'number',
      memberTimeout: 'number',
      musicClass: 'string',
      qno: 'string',
      queueTimeout: 'number',
      retry: 'number',
      sayAgentno: 'boolean',
      serviceLevel: 'number',
      strategy: 'string',
      vipSupport: 'number',
      weight: 'number',
      wrapupTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryAgentResponseBodyDataAgents extends $dara.Model {
  /**
   * @remarks
   * 座席信息
   */
  agent?: CloudQueryAgentResponseBodyDataAgentsAgent;
  /**
   * @remarks
   * 座席所属队列信息
   */
  queueList?: CloudQueryAgentResponseBodyDataAgentsQueueList[];
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      queueList: 'QueueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: CloudQueryAgentResponseBodyDataAgentsAgent,
      queueList: { 'type': 'array', 'itemType': CloudQueryAgentResponseBodyDataAgentsQueueList },
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    if(Array.isArray(this.queueList)) {
      $dara.Model.validateArray(this.queueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席列表数组
   */
  agents?: CloudQueryAgentResponseBodyDataAgents[];
  /**
   * @remarks
   * 总数
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': CloudQueryAgentResponseBodyDataAgents },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryAgentResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudQueryAgentResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
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
      data: CloudQueryAgentResponseBodyData,
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

