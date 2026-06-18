// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDataImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The response message. > This parameter is empty if the request is successful. If the request fails, an exception message is returned, such as an error code.
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
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

