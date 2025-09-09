// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveBackupsSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 70FED5BE-4DDC-4556-AD35-5A6D27******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SQL audit was disabled for the DRDS database.
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

