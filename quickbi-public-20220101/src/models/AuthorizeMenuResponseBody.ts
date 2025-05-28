// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeMenuResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 188F0B12-00EF-41B3-944A-FB7EF06C9F43
   */
  requestId?: string;
  /**
   * @remarks
   * The number of authorized menus.
   * 
   * @example
   * 2
   */
  result?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
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
      result: 'number',
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

