// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForwardAIAgentCallRequest extends $dara.Model {
  /**
   * @remarks
   * The target phone number for call transfer.
   * 
   * @example
   * 13**********
   */
  calledNumber?: string;
  /**
   * @remarks
   * The caller phone number for the transferred call. Optional.
   * 
   * >Notice: 
   * 
   * By default, the CallerNumber is the agent\\"s phone number after the call starts:
   * 1\\. For inbound lines, the agent number is the agent’s seat number.
   * 2\\. For outbound lines, the agent number is the original caller number.
   * 
   * 
   * 
   * 
   * >Warning: 
   * 
   * Alibaba Cloud lines do not support this parameter.
   * 
   * @example
   * 13**********
   */
  callerNumber?: string;
  /**
   * @remarks
   * Abnormal prompt text played when the transfer fails. Default is empty.
   * 
   * @example
   * We’re sorry, we’re unable to transfer your call at the moment. Please try again later.
   */
  errorPrompt?: string;
  /**
   * @remarks
   * Current call instance ID, used only in inbound call transfer scenarios.
   * 
   * @example
   * call_instance_202******
   */
  instanceId?: string;
  /**
   * @remarks
   * Prompt message played before initiating the transfer. If empty, the system skips the prompt and plays the ringing tone directly. Default is empty.
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

