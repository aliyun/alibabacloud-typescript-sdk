// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateWebLockFileEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to handle all alert events that are generated for web tamper proofing. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dealAll?: number;
  /**
   * @remarks
   * The IDs of alert events.
   * 
   * This parameter is required.
   */
  eventIds?: number[];
  /**
   * @remarks
   * The operation that you want to perform on the alert events. Valid values:
   * 
   * *   **mark_mis_info**: marks the alert events as false positives
   * *   **rm_mark_mis_info**: cancels marking the alerts events as false positives
   * *   **offline_handled**: marks the alert events as handled offline
   * *   **whitelist**: adds the alert events to the whitelist
   * *   **rm_whitelist**: cancels adding the alert events to the whitelist
   * 
   * This parameter is required.
   * 
   * @example
   * whitelist
   */
  operationCode?: string;
  static names(): { [key: string]: string } {
    return {
      dealAll: 'DealAll',
      eventIds: 'EventIds',
      operationCode: 'OperationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealAll: 'number',
      eventIds: { 'type': 'array', 'itemType': 'number' },
      operationCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventIds)) {
      $dara.Model.validateArray(this.eventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

