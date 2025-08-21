// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LinkInstanceCategoryRequest extends $dara.Model {
  /**
   * @example
   * FAQ,MRC
   */
  abilityType?: string;
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * [\\"30000065789\\"]
   */
  categoryIds?: string;
  /**
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

