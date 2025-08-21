// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePublishTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * faq
   */
  bizType?: string;
  /**
   * @example
   * ["8521"]
   */
  dataIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      bizType: 'BizType',
      dataIdListShrink: 'DataIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      bizType: 'string',
      dataIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

