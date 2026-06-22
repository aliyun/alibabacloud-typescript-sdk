// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateVirusEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to handle all alerts. Valid values:
   * - **1**: yes
   * - **0**: no.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  operationAll?: number;
  /**
   * @remarks
   * The method to handle the alert event. Valid values:
   * 
   * - **default**: deep scan and removal
   * - **ignore**: ignore
   * - **advance_mark_mis_info**: add to whitelist
   * - **manual_handled**: manually handled.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  operationCode?: string;
  /**
   * @remarks
   * The scope of the handling operation.
   * 
   * @example
   * [{\\"type\\":\\"machine\\",\\"list\\":[\\"xxxxxxxxx-4cbf-4ca6-a1b7-8a09d1f86ab0\\"]}]
   */
  operationRange?: string;
  static names(): { [key: string]: string } {
    return {
      operationAll: 'OperationAll',
      operationCode: 'OperationCode',
      operationRange: 'OperationRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationAll: 'number',
      operationCode: 'string',
      operationRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

