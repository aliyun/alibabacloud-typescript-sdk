// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserSayRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If you omit this parameter, the default business space is used. You can obtain the key from the Business Management page of your Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The keywords used to filter user says. The query returns only user says that contain these keywords.
   * 
   * @example
   * 您做核酸了嘛
   */
  content?: string;
  /**
   * @remarks
   * The ID of the bot.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the intent.
   * 
   * This parameter is required.
   * 
   * @example
   * 232
   */
  intentId?: number;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 10. The maximum value is 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      instanceId: 'string',
      intentId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

