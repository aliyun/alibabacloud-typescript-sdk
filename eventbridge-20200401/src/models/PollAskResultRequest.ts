// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PollAskResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo-luma-agent
   */
  agentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * msg_xxx
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

