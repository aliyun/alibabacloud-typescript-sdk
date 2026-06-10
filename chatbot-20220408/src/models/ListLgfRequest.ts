// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLgfRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If you do not specify this parameter, the default business space is used. You can obtain the key from the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the chatbot.
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
   * 123
   */
  intentId?: number;
  /**
   * @remarks
   * The text used to filter the advanced semantic configurations.
   * 
   * @example
   * .{0,5}北京天气
   */
  lgfText?: string;
  /**
   * @remarks
   * The number of the page to return. Defaults to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Defaults to 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      lgfText: 'LgfText',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentId: 'number',
      lgfText: 'string',
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

