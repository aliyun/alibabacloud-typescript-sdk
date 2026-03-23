// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmNotifyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  confirmor?: number;
  /**
   * @remarks
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

