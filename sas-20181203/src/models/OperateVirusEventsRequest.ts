// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateVirusEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to handle all alert events. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  operationAll?: number;
  /**
   * @remarks
   * The operation that you want to perform on the alert events. Valid values:
   * 
   * *   **default**: performs in-depth detection and removal
   * *   **ignore**: ignores the alert event
   * *   **advance_mark_mis_info**: adds the alert events to the whitelist
   * *   **manual_handled**: marks the alert events as manually handled
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  operationCode?: string;
  /**
   * @remarks
   * The handling scope.
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

