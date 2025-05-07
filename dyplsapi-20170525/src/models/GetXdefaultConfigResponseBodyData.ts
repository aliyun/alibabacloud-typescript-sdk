// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetXDefaultConfigResponseBodyDataReachJson } from "./GetXdefaultConfigResponseBodyDataReachJson";
import { GetXDefaultConfigResponseBodyDataSequenceCall } from "./GetXdefaultConfigResponseBodyDataSequenceCall";


export class GetXDefaultConfigResponseBodyData extends $dara.Model {
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
  reachJson?: GetXDefaultConfigResponseBodyDataReachJson[];
  /**
   * @remarks
   * 顺振控制参数
   */
  sequenceCall?: GetXDefaultConfigResponseBodyDataSequenceCall[];
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
      reachJson: 'ReachJson',
      sequenceCall: 'SequenceCall',
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
      reachJson: { 'type': 'array', 'itemType': GetXDefaultConfigResponseBodyDataReachJson },
      sequenceCall: { 'type': 'array', 'itemType': GetXDefaultConfigResponseBodyDataSequenceCall },
      sequenceEndTime: 'string',
      sequenceStartTime: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reachJson)) {
      $dara.Model.validateArray(this.reachJson);
    }
    if(Array.isArray(this.sequenceCall)) {
      $dara.Model.validateArray(this.sequenceCall);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

