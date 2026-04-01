// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmNotifyShrinkRequest extends $dara.Model {
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
  notifyIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      confirmor: 'Confirmor',
      notifyIdListShrink: 'NotifyIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmor: 'number',
      notifyIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

