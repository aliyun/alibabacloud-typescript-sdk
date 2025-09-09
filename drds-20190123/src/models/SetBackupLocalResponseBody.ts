// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBackupLocalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6F70CE62-5077-4B7B-95BC-4DAC45614DBE
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned.
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

