// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LinkInstanceCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The capability type of the category. Valid values:
   * 
   * - FAQ: Frequently asked questions.
   * - MRC: Document-based machine reading comprehension.
   * 
   * Default value: FAQ.
   * 
   * @example
   * FAQ,MRC
   */
  abilityType?: string;
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The array of FAQ category IDs to associate with the chatbot.
   * 
   * @example
   * [\\"30000065789\\"]
   */
  categoryIds?: string;
  /**
   * @remarks
   * The unique identifier of the chatbot.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      abilityType: 'AbilityType',
      agentKey: 'AgentKey',
      categoryIds: 'CategoryIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilityType: 'string',
      agentKey: 'string',
      categoryIds: 'string',
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

