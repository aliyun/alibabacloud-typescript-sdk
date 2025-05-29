// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCollectionDataMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of effective entries.
   * 
   * @example
   * 10
   */
  appliedRows?: number;
  /**
   * @remarks
   * Detailed information when the request fails.
   * 
   * @example
   * failed to connect database, detailMsg: getConnection fail::SQL State: 28P01, Error Code: 0, Error Message: FATAL: password
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
   * Status, with the following values:
   * 
   * - **success**: Success.
   * - **fail**: Failure.
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

