// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateChatbotInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the chatbot.
   * 
   * @example
   * chatbot-720edd02b66a
   */
  chatbotInstanceId?: string;
  /**
   * @remarks
   * The name of the chatbot.
   * 
   * @example
   * Customer service chatbot
   */
  chatbotName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  nluServiceParamsJson?: string;
  nluServiceType?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      chatbotInstanceId: 'ChatbotInstanceId',
      chatbotName: 'ChatbotName',
      instanceId: 'InstanceId',
      nluServiceParamsJson: 'NluServiceParamsJson',
      nluServiceType: 'NluServiceType',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatbotInstanceId: 'string',
      chatbotName: 'string',
      instanceId: 'string',
      nluServiceParamsJson: 'string',
      nluServiceType: 'string',
      unionSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

