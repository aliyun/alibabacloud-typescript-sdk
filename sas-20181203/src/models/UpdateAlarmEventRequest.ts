// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlarmEventRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the alert events.
   */
  alarmEventIdList?: number[];
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The operation that you want to perform on the alert events. Valid values:
   * 
   * *   **manual_handled**: handle the alert events.
   * *   **ignore**: igore the alert events.
   * *   **cancel_ignore**: remove the alert events from the whitelist.
   * 
   * @example
   * ignore
   */
  operationCode?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventIdList: 'AlarmEventIdList',
      lang: 'Lang',
      operationCode: 'OperationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventIdList: { 'type': 'array', 'itemType': 'number' },
      lang: 'string',
      operationCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alarmEventIdList)) {
      $dara.Model.validateArray(this.alarmEventIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

