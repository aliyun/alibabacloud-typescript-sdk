// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The alert ID. You can all the [ListAlertMessages](https://help.aliyun.com/document_detail/173961.html) operation to obtain the alert ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1421
   */
  alertId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

