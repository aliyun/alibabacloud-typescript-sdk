// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code:
   * 
   * *   `200`: Success.
   * *   `400`: An error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Whether the deletion is successful.
   * 
   * Enumerated values:
   * 
   * *   true:Deleted successfully.
   * *   false:Deletion failure.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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

