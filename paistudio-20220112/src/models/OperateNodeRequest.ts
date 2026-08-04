// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeOperationParameters } from "./NodeOperationParameters";


export class OperateNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The operation to perform.
   * 
   * - Cordon: Disables scheduling on the node.
   * 
   * - Uncordon: Enables scheduling on the node.
   * 
   * - Drain: Evicts pods from the node.
   * 
   * This parameter is required.
   * 
   * @example
   * Cordon
   */
  operation?: string;
  /**
   * @remarks
   * The parameter settings for the node operation.
   */
  operationParameters?: NodeOperationParameters;
  /**
   * @remarks
   * The ID of the resource group that contains the node.
   * 
   * @example
   * rgaekzbrflewn6jjq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      operationParameters: 'OperationParameters',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      operationParameters: NodeOperationParameters,
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(this.operationParameters && typeof (this.operationParameters as any).validate === 'function') {
      (this.operationParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

