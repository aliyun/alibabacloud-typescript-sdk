// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExporterOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > A status code of 200 indicates success. Other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
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
   * 2DECF751-7AFA-43BB-8C63-2B6B07E51AE1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:  
   * - `true`: success
   * - `false`: failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

