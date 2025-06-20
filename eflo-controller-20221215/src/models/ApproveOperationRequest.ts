// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  /**
   * @remarks
   * The O\\&M operation type
   * 
   * Valid value:
   * 
   * *   RepairMachine
   * 
   * @example
   * RepairMachine
   */
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      operationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

