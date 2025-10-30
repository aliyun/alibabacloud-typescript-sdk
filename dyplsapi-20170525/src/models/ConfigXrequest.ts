// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigXRequestSequenceCalls extends $dara.Model {
  /**
   * @remarks
   * 顺振提示音放音编号，格式如callNoPlayCode
   * 
   * @example
   * 01
   */
  sequenceCallNoPlayCode?: string;
  /**
   * @remarks
   * 顺振被叫号码
   * 
   * @example
   * 18*******33
   */
  sequenceCalledNo?: string;
  /**
   * @remarks
   * 接通后主被叫放音编号，格式如calledPlayCode
   * 
   * @example
   * 02
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

export class ConfigXRequest extends $dara.Model {
  /**
   * @remarks
   * 开/关呼叫能力状态‘0’：禁用‘1’：开启
   * 
   * @example
   * 0
   */
  callAbility?: string;
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * 1898871967585852
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * 是否透传来显为真实主叫：00-非透传：互相拨打时都显示工作号;10-透传：A客户为主叫时,B员工的来显为客户A号码;B员工为主叫时,A客户的来显为工作号;默认为 00
   * 
   * @example
   * 0
   */
  GNFlag?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 顺振控制参数
   */
  sequenceCalls?: ConfigXRequestSequenceCalls[];
  /**
   * @remarks
   * 顺振模式：0-不顺振（默认）1-有条件顺振，先接续calledNo指定被叫，如果该被叫未能接通，再顺振sequenceCalls号码列表2-无条件顺振，不接续calledNo指定被叫，直接顺振sequenceCalls号码列表
   * 
   * @example
   * 0
   */
  sequenceMode?: string;
  /**
   * @remarks
   * 开/关短信功能状态‘0’：禁用；‘1’：开启；
   * 
   * @example
   * 0
   */
  smsAbility?: string;
  /**
   * @remarks
   * 是否透传来显为真实用户0：不透传; 1：透传默认：0不透传
   * 
   * @example
   * 0
   */
  smsSignMode?: string;
  /**
   * @remarks
   * X号码
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      callAbility: 'CallAbility',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      GNFlag: 'GNFlag',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sequenceCalls: 'SequenceCalls',
      sequenceMode: 'SequenceMode',
      smsAbility: 'SmsAbility',
      smsSignMode: 'SmsSignMode',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callAbility: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      GNFlag: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sequenceCalls: { 'type': 'array', 'itemType': ConfigXRequestSequenceCalls },
      sequenceMode: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
      telX: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sequenceCalls)) {
      $dara.Model.validateArray(this.sequenceCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

