// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendRenderingInstanceCommandsResponseBody extends $dara.Model {
  cmdId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
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

