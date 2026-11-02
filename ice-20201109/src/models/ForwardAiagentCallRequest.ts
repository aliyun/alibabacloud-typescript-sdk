// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForwardAIAgentCallRequest extends $dara.Model {
  /**
   * @remarks
   * The destination phone number to which the call is transferred.
   * 
   * @example
   * 13**********
   */
  calledNumber?: string;
  /**
   * @remarks
   * The caller phone number for the transferred call. This parameter is optional.
   * 
   * 
   * <notice>
   * By default, CallerNumber is the phone number of the agent after the call is started: 1. For inbound lines, the agent number is the agent seat number. 2. For outbound lines, the agent number is the caller number.</notice>
   * <warning>Alibaba Cloud lines do not support this parameter.</warning>
   * 
   * @example
   * 13**********
   */
  callerNumber?: string;
  /**
   * @remarks
   * The error prompt text to play when the transfer fails. Default value: empty.
   * 
   * @example
   * We’re sorry, we’re unable to transfer your call at the moment. Please try again later.
   */
  errorPrompt?: string;
  /**
   * @remarks
   * The current call instance ID. This parameter is used only in inbound call transfer scenarios.
   * 
   * @example
   * call_instance_202******
   */
  instanceId?: string;
  /**
   * @remarks
   * The prompt text to play before the transfer begins. If this parameter is left empty, the prompt is skipped and the ringtone is played directly. Default value: empty.
   * 
   * @example
   * Please hold while I transfer your call.
   */
  transferPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      errorPrompt: 'ErrorPrompt',
      instanceId: 'InstanceId',
      transferPrompt: 'TransferPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callerNumber: 'string',
      errorPrompt: 'string',
      instanceId: 'string',
      transferPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

