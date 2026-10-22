// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePublishTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace key. If not specified, the default workspace is accessed. Obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The publish unit type. To publish a chatbot, use the CreateInstancePublishTask API.
   * 
   * @example
   * faq
   */
  bizType?: string;
  /**
   * @remarks
   * Additional publish information. Currently supported: if BizType is faq, this field specifies category IDs, indicating that only knowledge under these categories is published.
   * 
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

