// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmNotifyRequest extends $dara.Model {
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

