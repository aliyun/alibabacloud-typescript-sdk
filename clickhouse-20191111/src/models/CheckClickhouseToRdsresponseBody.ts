// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckClickhouseToRDSResponseBody extends $dara.Model {
  /**
   * @remarks
   * - This parameter is returned only if the connection fails (**Status** is **false**).
   * 
   * - It indicates the reason for the connection failure.
   * 
   * @example
   * NotSameVpc
   */
  errorCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A82758F8-E793-5610-BE11-0E46664305C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether a connection can be established. Valid values:
   * 
   * - **true**: A connection can be established.
   * 
   * - **false**: A connection cannot be established.
   * 
   * @example
   * false
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

