// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepairClusterNodePoolRequestOperations extends $dara.Model {
  /**
   * @remarks
   * The parameters of a repair operation.
   */
  args?: string[];
  /**
   * @remarks
   * The ID of a repair operation.
   * 
   * @example
   * remove.containerdContainer
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      operationId: 'operation_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      operationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

