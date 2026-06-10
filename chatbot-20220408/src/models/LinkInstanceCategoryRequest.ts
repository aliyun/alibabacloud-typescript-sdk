// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LinkInstanceCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category\\"s ability type. Valid values: `FAQ` and `MRC` (machine reading comprehension). Defaults to `FAQ`.
   * 
   * @example
   * FAQ,MRC
   */
  abilityType?: string;
  /**
   * @remarks
   * The key for the business space. If you do not specify this parameter, the default business space is used. You can obtain the key on the Business Management page of your primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * An array of FAQ category IDs to link to the chatbot.
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

