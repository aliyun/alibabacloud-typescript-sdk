// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDocumentCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Status, with the following possible values:
   * - **success**: Success.
   * - **fail**: Failure.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

