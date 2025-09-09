// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutStartBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D64DE5944A1E541E0******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the backup task was submitted.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

