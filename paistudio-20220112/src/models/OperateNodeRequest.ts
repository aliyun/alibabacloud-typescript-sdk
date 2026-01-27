// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeOperationParameters } from "./NodeOperationParameters";


export class OperateNodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Cordon
   */
  operation?: string;
  operationParameters?: NodeOperationParameters;
  /**
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

