// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmFullDuplexCallOperateRequest extends $dara.Model {
  /**
   * @remarks
   * 通话的唯一回执 ID。可通过 llmSmartCallFullDuplex 接口获取。
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  callId?: string;
  /**
   * @remarks
   * 动作指令：play / flush / hangup / sendDtmf
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  command?: string;
  /**
   * @remarks
   * 扩展参数，JSON 字符串。各 command 参数说明：
   * 
   * @example
   * 示例值示例值
   */
  param?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      command: 'string',
      param: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

