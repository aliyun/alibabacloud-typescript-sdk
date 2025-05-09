// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the ID.
   * 
   * @example
   * 99EBE7CF-69C0-5089-BE3E-79563C31XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

