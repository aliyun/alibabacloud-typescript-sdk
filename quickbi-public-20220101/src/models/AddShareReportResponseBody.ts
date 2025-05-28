// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShareReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 05739b8e-3de0-4204-9669-7f04f02522b9
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
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
      result: 'boolean',
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

