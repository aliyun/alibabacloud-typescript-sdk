// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRerunWorkflowInstancesResultRequest extends $dara.Model {
  /**
   * @remarks
   * The operation ID used to asynchronously query the result of the workflow instance rerun. This value is obtained from the RerunWorkflowInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * e15ad21c-b0e9-4792-8f55-b037xxxxxxxx
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

