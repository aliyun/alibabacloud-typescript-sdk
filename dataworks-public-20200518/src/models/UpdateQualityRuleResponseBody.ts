// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the validation rule was successfully updated.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * You have no permission.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request, used for troubleshooting.
   * 
   * @example
   * 576b9457-2cf5-4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

