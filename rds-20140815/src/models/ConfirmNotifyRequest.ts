// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmNotifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to confirm the notification. You can set this parameter to **0**, which indicates that the notification is confirmed by the system.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  confirmor?: number;
  /**
   * @remarks
   * The notification IDs.
   * 
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  notifyIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      confirmor: 'Confirmor',
      notifyIdList: 'NotifyIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmor: 'number',
      notifyIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.notifyIdList)) {
      $dara.Model.validateArray(this.notifyIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

