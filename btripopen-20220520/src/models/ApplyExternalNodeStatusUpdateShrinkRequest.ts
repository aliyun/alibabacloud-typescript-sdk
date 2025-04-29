// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyExternalNodeStatusUpdateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  nodeId?: string;
  operationRecordsShrink?: string;
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
      operationRecordsShrink: 'operation_records',
      processActionResult: 'process_action_result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      operationRecordsShrink: 'string',
      processActionResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

