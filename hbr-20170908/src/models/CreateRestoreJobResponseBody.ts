// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestoreJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message. The value "successful" is returned for a success. An error message is returned for a failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * @example
   * r-*********************
   */
  restoreId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   *   - true: The request was successful.
   *   - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      restoreId: 'RestoreId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      restoreId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

