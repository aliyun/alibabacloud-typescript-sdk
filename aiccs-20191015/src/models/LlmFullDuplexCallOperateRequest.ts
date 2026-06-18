// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmFullDuplexCallOperateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique receipt ID of the call. You can obtain this ID by calling the LlmSmartCallFullDuplex operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  callId?: string;
  /**
   * @remarks
   * The action command: play / flush / hangup / sendDtmf.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  command?: string;
  /**
   * @remarks
   * The extension parameter, a JSON character string. The metric description for each command:
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

