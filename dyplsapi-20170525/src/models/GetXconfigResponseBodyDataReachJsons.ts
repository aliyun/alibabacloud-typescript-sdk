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

