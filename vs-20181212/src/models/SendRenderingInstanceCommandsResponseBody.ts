// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendRenderingInstanceCommandsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the command request. The ID is valid for one day by default. In asynchronous scenarios, if you need the result, query it promptly within the validity period, preferably before the command times out.
   * 
   * @example
   * cmd-81de027b66e442e99c1e0e09a16a0be5
   */
  cmdId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the command response.
   * 
   * @example
   * Thu Jun 27 16:06:26 CST 2024
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      cmdId: 'CmdId',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmdId: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

