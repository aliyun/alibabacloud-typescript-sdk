// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * cs-d6d6bc841c0d415fb81808bc6d09****
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

