// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DingTalkOnlineTestRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DingTalk notification configuration.
   * > You can call the [DescribeDingTalk](~~DescribeDingTalk~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2373
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

