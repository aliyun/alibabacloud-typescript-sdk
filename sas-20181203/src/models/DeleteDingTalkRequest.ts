// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDingTalkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the notification from the DingTalk chatbot. Separate multiple IDs with commas (,).
   * 
   * >  You can call the [DescribeDingTalk](~~DescribeDingTalk~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2170,256
   */
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

