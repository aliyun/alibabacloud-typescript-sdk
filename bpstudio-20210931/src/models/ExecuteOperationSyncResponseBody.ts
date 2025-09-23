// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteOperationSyncResponseBodyData extends $dara.Model {
  arguments?: string;
  message?: string;
  operationId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      message: 'Message',
      operationId: 'OperationId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      message: 'string',
      operationId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationSyncResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * op_xxxxxxxxxxxxxxxxxx_dds_modifyInstanceType_BYSOQGWUV6PME412_ERMEZLXNN3K9N3OL
   */
  data?: ExecuteOperationSyncResponseBodyData;
  /**
   * @example
   * Access key ID cannot be null.
   */
  message?: string;
  /**
   * @example
   * FDC73B05-5331-57AA-BA93-4C9882792FF5
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
      code: 'string',
      data: ExecuteOperationSyncResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

