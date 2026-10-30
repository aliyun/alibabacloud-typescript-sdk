// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCopilotSessionRequest extends $dara.Model {
  /**
   * @example
   * sre_agent
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c356bc310e4345c3a602a2912322ad21
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

