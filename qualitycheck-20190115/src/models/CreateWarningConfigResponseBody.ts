// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWarningConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** indicates success. Other values indicate failure. The caller can determine the failure reason based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the warning configuration successfully created.
   * 
   * @example
   * 30
   */
  data?: string;
  /**
   * @remarks
   * Error details when an error occurs. Returns \\"successful\\" on success.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful. The caller can determine if the request was successful based on this field: true indicates success, false/null indicates failure.
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
      data: 'string',
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

