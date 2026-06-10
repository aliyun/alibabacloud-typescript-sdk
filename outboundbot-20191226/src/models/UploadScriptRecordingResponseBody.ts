// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadScriptRecordingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Interface message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Unique recording ID
   * 
   * @example
   * 5feaab8a-97fd-4720-8108-79e017f2d3ac
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

