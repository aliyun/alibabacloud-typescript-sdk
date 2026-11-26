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
   * Sample value
   */
  callId?: string;
  /**
   * @remarks
   * The action command. Valid values: play, flush, hangup, and sendDtmf.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample value
   */
  command?: string;
  /**
   * @remarks
   * The extension parameters in JSON character string format. Metric description for each command:
   * 
   * @example
   * Sample value
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

