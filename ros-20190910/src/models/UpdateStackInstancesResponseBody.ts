// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
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

