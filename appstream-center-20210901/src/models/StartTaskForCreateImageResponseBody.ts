// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTaskForCreateImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates that the request is processed successfully. Other values indicate that the request fails.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned image ID.
   * 
   * @example
   * imgc-dabde****
   */
  data?: string;
  /**
   * @remarks
   * The error message returned when an error occurs.
   * 
   * @example
   * Success
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
   * Indicates whether the request is successful.
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

