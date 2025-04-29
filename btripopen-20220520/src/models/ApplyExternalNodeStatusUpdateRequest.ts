// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyExternalNodeStatusUpdateRequestOperationRecords } from "./ApplyExternalNodeStatusUpdateRequestOperationRecords";


export class ApplyExternalNodeStatusUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  nodeId?: string;
  operationRecords?: ApplyExternalNodeStatusUpdateRequestOperationRecords[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROCESS_AGREE
   */
  processActionResult?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'node_id',
      operationRecords: 'operation_records',
      processActionResult: 'process_action_result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      operationRecords: { 'type': 'array', 'itemType': ApplyExternalNodeStatusUpdateRequestOperationRecords },
      processActionResult: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationRecords)) {
      $dara.Model.validateArray(this.operationRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

