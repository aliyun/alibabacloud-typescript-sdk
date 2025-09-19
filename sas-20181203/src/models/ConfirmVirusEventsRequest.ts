// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmVirusEventsRequest extends $dara.Model {
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
   * The server on which you want to perform the alert events.
   * 
   * @example
   * [{\\"type\\":\\"machine\\",\\"list\\":[\\"3aedba3d-bd4d-4dfb-bb0d-xxxxxxxxxxxx\\"]}]
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

