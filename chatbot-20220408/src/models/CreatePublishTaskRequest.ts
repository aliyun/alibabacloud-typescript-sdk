// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePublishTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If you omit this parameter, the default business space is used. You can obtain the key from the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The type of content to publish. To publish a bot, use the `CreateInstancePublishTask` API.
   * 
   * @example
   * faq
   */
  bizType?: string;
  /**
   * @remarks
   * Specifies data to publish by ID. This parameter is used only when `BizType` is set to `faq`. In this case, provide one or more category IDs to publish knowledge exclusively from the specified categories.
   * 
   * @example
   * ["8521"]
   */
  dataIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      bizType: 'BizType',
      dataIdList: 'DataIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      bizType: 'string',
      dataIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataIdList)) {
      $dara.Model.validateArray(this.dataIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

