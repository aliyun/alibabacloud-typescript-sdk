// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecuteOperationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * This parameter is required.
   * 
   * @example
   * op_xxxxxxxxxxxxxxxxxxxxxx
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter is specified to verify the permissions on the resource group.
   * 
   * @example
   * testResourceId
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

