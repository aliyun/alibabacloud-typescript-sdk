// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCubeBySqlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05739b************02522b9
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the API call. Valid values:
   * 
   * - true: The request is successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
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

