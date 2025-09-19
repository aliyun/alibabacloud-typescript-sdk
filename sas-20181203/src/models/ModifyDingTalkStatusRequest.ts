// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDingTalkStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The notification IDs of DingTalk chatbots. Separate multiple IDs with commas (,).
   * 
   * >  You can call the [DescribeDingTalk](~~DescribeDingTalk~~) operation to query the notification IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 2259
   */
  ids?: string;
  /**
   * @remarks
   * The notification status of a DingTalk chatbot. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

