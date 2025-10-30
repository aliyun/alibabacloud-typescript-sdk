// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetXConfigResponseBodyDataReachJsons extends $dara.Model {
  /**
   * @remarks
   * 呼叫方向 1:员工B呼叫客户A 2:客户A呼叫员工B
   * 
   * @example
   * 1
   */
  callDir?: string;
  /**
   * @remarks
   * 通话状态 1:通话振铃 2:接通前 3:接通后 4:通话结束 5:已接通6:未接通
   * 
   * @example
   * 1
   */
  callStatus?: string;
  /**
   * @remarks
   * 接收方向 1:主叫 2:被叫
   * 
   * @example
   * 1
   */
  receiveDir?: string;
  /**
   * @remarks
   * 规则ID
   * 
   * @example
   * 345
   */
  ruleId?: string;
  /**
   * @remarks
   * 规则名称
   * 
   * @example
   * 企业名片-短信规则
   */
  ruleName?: string;
  /**
   * @remarks
   * 规则类型： 1：企业名片-短信 2：企业名片-闪信 3：企业名片-视频 4：企业名片-音频
   * 
   * @example
   * 1
   */
  ruleType?: string;
  /**
   * @remarks
   * 模板ID
   * 
   * @example
   * 12345
   */
  tempId?: string;
  static names(): { [key: string]: string } {
    return {
      callDir: 'CallDir',
      callStatus: 'CallStatus',
      receiveDir: 'ReceiveDir',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      tempId: 'TempId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDir: 'string',
      callStatus: 'string',
      receiveDir: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
      tempId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXConfigResponseBodyDataSequenceCalls extends $dara.Model {
  /**
   * @remarks
   * 顺振提示音放音编号，格式如callNoPlayCode
   * 
   * @example
   * 示例值示例值示例值
   */
  sequenceCallNoPlayCode?: string;
  /**
   * @remarks
   * 顺振被叫号码
   * 
   * @example
   * 示例值示例值示例值
   */
  sequenceCalledNo?: string;
  /**
   * @remarks
   * 接通后主被叫放音编号，格式如calledPlayCode
   * 
   * @example
   * 示例值示例值示例值
   */
  sequenceCalledPlayCode?: string;
  static names(): { [key: string]: string } {
    return {
      sequenceCallNoPlayCode: 'SequenceCallNoPlayCode',
      sequenceCalledNo: 'SequenceCalledNo',
      sequenceCalledPlayCode: 'SequenceCalledPlayCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sequenceCallNoPlayCode: 'string',
      sequenceCalledNo: 'string',
      sequenceCalledPlayCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 开/关呼叫能力状态： ‘0’：禁用； ‘1’：开启；
   * 
   * @example
   * 0
   */
  callAbility?: string;
  /**
   * @remarks
   * 是否透传来显为真实主叫： 00-非透传：互相拨打时都显示工作号; 10-透传：A客户为主叫时,B员工的来显为客户A号码;B员工为主叫时,A客户的来显为工作号; 默认为 00
   * 
   * @example
   * 00
   */
  GNFlag?: string;
  /**
   * @remarks
   * 企业名片规则控制参数
   */
  reachJsons?: GetXConfigResponseBodyDataReachJsons[];
  /**
   * @remarks
   * 顺振控制参数
   */
  sequenceCalls?: GetXConfigResponseBodyDataSequenceCalls[];
  /**
   * @remarks
   * 顺振结束时间 格式：HH:mm:ss 18:00:00
   * 
   * @example
   * 09:00:00
   */
  sequenceEndTime?: string;
  /**
   * @remarks
   * 顺振开启时间 格式：HH:mm:ss 09:00:00
   * 
   * @example
   * 09:00:00
   */
  sequenceStartTime?: string;
  /**
   * @remarks
   * 开/关短信功能状态： ‘0’：禁用； ‘1’：开启；
   * 
   * @example
   * 0
   */
  smsAbility?: string;
  /**
   * @remarks
   * 是否透传来显为真实主叫： 00-非透传：互相拨打时都显示工作号; 10-透传：A客户为主叫时,B员工的来显为客户A号码;B员工为主叫时,A客户的来显为工作号; 默认为 00
   * 
   * @example
   * 0
   */
  smsSignMode?: string;
  static names(): { [key: string]: string } {
    return {
      callAbility: 'CallAbility',
      GNFlag: 'GNFlag',
      reachJsons: 'ReachJsons',
      sequenceCalls: 'SequenceCalls',
      sequenceEndTime: 'SequenceEndTime',
      sequenceStartTime: 'SequenceStartTime',
      smsAbility: 'SmsAbility',
      smsSignMode: 'SmsSignMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callAbility: 'string',
      GNFlag: 'string',
      reachJsons: { 'type': 'array', 'itemType': GetXConfigResponseBodyDataReachJsons },
      sequenceCalls: { 'type': 'array', 'itemType': GetXConfigResponseBodyDataSequenceCalls },
      sequenceEndTime: 'string',
      sequenceStartTime: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reachJsons)) {
      $dara.Model.validateArray(this.reachJsons);
    }
    if(Array.isArray(this.sequenceCalls)) {
      $dara.Model.validateArray(this.sequenceCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  data?: GetXConfigResponseBodyData;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetXConfigResponseBodyData,
      message: 'string',
      success: 'boolean',
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

