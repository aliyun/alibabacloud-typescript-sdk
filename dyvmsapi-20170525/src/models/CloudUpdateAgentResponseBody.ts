// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudUpdateAgentResponseBodyDataAgent extends $dara.Model {
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
  bindTelType?: string;
  /**
   * @remarks
   * 呼叫权限，0：无限制，1：国内长途，2：国内本市，3：内部呼叫，默认无限制
   * 
   * @example
   * 1
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
   * 100012
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
   * 示例值示例值示例值
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
   * {"isMatchCapital":0,"areaCodeRule":1}
   */
  obClidProperty?: string;
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
   * 0
   */
  status?: string;
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
   * 22
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
      obClidProperty: 'ObClidProperty',
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
      obClidProperty: 'string',
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

export class CloudUpdateAgentResponseBodyDataAgentSkills extends $dara.Model {
  /**
   * @remarks
   * 座席id
   * 
   * @example
   * 1234
   */
  agentId?: string;
  /**
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
   * queueSkill关系表中id
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * skill的id
   * 
   * @example
   * 111
   */
  skillId?: string;
  /**
   * @remarks
   * 技能值
   * 
   * @example
   * 2
   */
  skillLevel?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      cno: 'Cno',
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      skillId: 'SkillId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      cno: 'string',
      createTime: 'string',
      enterpriseId: 'string',
      id: 'string',
      skillId: 'string',
      skillLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudUpdateAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席配置信息
   */
  agent?: CloudUpdateAgentResponseBodyDataAgent;
  /**
   * @remarks
   * 座席所需技能数组
   */
  agentSkills?: CloudUpdateAgentResponseBodyDataAgentSkills[];
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      agentSkills: 'AgentSkills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: CloudUpdateAgentResponseBodyDataAgent,
      agentSkills: { 'type': 'array', 'itemType': CloudUpdateAgentResponseBodyDataAgentSkills },
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    if(Array.isArray(this.agentSkills)) {
      $dara.Model.validateArray(this.agentSkills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudUpdateAgentResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudUpdateAgentResponseBodyData;
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
      data: CloudUpdateAgentResponseBodyData,
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

