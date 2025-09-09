// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceInternetAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the activity fails.
   * 
   * >  This parameter appears only when an error occurs during the API call.
   * 
   * @example
   * 404
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the public IP address was created.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1DF6052F-15E2-4E69-9628-D6BCC3******
   */
  requestId?: string;
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
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
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

