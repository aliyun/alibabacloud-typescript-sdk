// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentConversationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * conversation-request-001
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 消息堆积排查
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

