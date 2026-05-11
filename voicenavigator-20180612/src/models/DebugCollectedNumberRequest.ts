// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugCollectedNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7cefbff0-8d50-4d6f-b93c-73cee23c1555
   */
  conversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7cefbff0-8d50-4d6f-b93c-73cee23c1555
   */
  instanceId?: string;
  /**
   * @example
   * 123
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      instanceId: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

