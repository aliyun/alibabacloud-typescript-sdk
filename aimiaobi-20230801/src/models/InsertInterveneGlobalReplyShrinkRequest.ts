// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneGlobalReplyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  replyMessagListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      replyMessagListShrink: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      replyMessagListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

