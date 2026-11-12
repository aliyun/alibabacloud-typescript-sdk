// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCollectionDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applied rows.
   * 
   * @example
   * 10
   */
  appliedRows?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The execution status of the API operation. Valid values:
   * - **success**: Execution succeeded.
   * - **fail**: Execution failed.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appliedRows: 'AppliedRows',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedRows: 'number',
      message: 'string',
      requestId: 'string',
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

