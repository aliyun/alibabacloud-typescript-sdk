// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyExternalNodeStatusUpdateRequestOperationRecords extends $dara.Model {
  comment?: string;
  operateTime?: string;
  operatorName?: string;
  result?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      operateTime: 'operate_time',
      operatorName: 'operator_name',
      result: 'result',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      operateTime: 'string',
      operatorName: 'string',
      result: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyExternalNodeStatusUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nodeId?: string;
  operationRecords?: ApplyExternalNodeStatusUpdateRequestOperationRecords[];
  /**
   * @remarks
   * This parameter is required.
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

