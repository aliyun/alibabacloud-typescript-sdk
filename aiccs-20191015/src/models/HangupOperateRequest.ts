// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HangupOperateRequest extends $dara.Model {
  /**
   * @remarks
   * The call ID. Obtain this ID from the response of the [LlmSmartCall](https://help.aliyun.com/document_detail/2862828.html) or [LlmSmartCallEncrypt](https://help.aliyun.com/document_detail/2881065.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 14777672****^13452272****
   */
  callId?: string;
  /**
   * @remarks
   * Specifies whether to hang up the call immediately. Valid values:
   * 
   * - true (default): Hangs up the call immediately.
   * 
   * - false: Hangs up the call after the current playback finishes.
   * 
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

