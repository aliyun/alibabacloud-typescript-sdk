// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConversationContextRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  conversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 026ca0f4-483b-4252-ae1d-1f15f056f8b9
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

