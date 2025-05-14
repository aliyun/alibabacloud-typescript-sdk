// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HangupOperateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 147776727911^134522727911
   */
  callId?: string;
  /**
   * @example
   * true
   */
  immediateHangup?: boolean;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      immediateHangup: 'ImmediateHangup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      immediateHangup: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

