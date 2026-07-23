// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingBusinessOptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * - Success: The request was successful.
   * 
   * - Other values indicate an error. For more information, see the Error codes section.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the configuration was updated. Valid values: true and false.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
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

