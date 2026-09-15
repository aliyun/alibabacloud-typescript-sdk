// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmVirusEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to handle all alerts. Valid values:
   * - **1**: Yes.
   * - **0**: No.
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
   * - **manual_handled**: manually handled
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  operationCode?: string;
  /**
   * @remarks
   * The scope of the trojan scan alert handling. This parameter is required when OperationAll is set to 0. This parameter is ignored when OperationAll is set to 1.
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

