// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateWebLockFileEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to handle all alert events. Valid values:
   * - **1**: yes
   * - **0**: no.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dealAll?: number;
  /**
   * @remarks
   * The list of alert event IDs.
   * 
   * This parameter is required.
   */
  eventIds?: number[];
  /**
   * @remarks
   * The method to handle the alert event. Valid values:
   * 
   * - **mark_mis_info**: marks the alert as a false positive
   * - **rm_mark_mis_info**: unmarks the false positive
   * - **offline_handled**: handled offline
   * - **whitelist**: adds to the whitelist
   * - **rm_whitelist**: removes from the whitelist.
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

