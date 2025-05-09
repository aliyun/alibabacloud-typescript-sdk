// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the operation. You can use this field to query the results of the creation operation through the GetCreateWorkflowInstancesResult interface.
   * 
   * @example
   * e15ad21c-b0e9-4792-8f55-b037xxxxxxxx
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the request. It is used to locate logs and troubleshoot problems.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

