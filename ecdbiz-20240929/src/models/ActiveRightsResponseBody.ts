// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveRightsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing result code.
   * 
   * @example
   * Success
   */
  code?: string;
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
   * The description of the processing result. This parameter is used to help troubleshoot failures.
   * 
   * @example
   * The request is processed
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 01A00000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is processed. A successful activation request does not mean that the resource is created.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
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

