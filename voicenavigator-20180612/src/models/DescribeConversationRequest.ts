// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConversationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15608cce-36be-43d5-9361-178cbe64127b
   */
  conversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5daac920-d6c1-429f-a95f-2a798f5255b5
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

