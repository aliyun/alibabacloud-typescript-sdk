// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportIntervenesResponseBodyData extends $dara.Model {
  code?: number;
  /**
   * @remarks
   * File URL
   * 
   * @example
   * http://xxx/xxx.xls
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportIntervenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: ExportIntervenesResponseBodyData;
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
   * Error message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Success status: true for success, false for failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExportIntervenesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

