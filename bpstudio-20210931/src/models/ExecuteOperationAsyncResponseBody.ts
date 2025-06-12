// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteOperationASyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code, 200 for success; Other representatives fail.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The operation ID. You can call the GetExecuteOperationResult operation to asynchronously query the result of an operation. The ID expires after one hour.
   * 
   * @example
   * op_xxxxxxxxxxxxxxxxxx_ecs_modifyInstanceType_BYSOQGWUV6PME412_ERMEZLXNN3K9N3OL
   */
  data?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * " "
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * SD-WEF-DSW-32ED-323DDSD-2332D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

