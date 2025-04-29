// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportOASTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous API import task that was generated during the import operation. This ID is used to query the execution status of the API import task.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c53ccf1d40c489686d1adf5c2644a7f
   */
  operationId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

