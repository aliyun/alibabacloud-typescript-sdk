// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * e15ad21c-b0e9-4792-8f55-b037xxxxxxxx
   */
  operationId?: string;
  /**
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

