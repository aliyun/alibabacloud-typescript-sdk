// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result. A value of `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The template ID returned after the template is created.
   * 
   * @example
   * b-0cc7rx533*****
   */
  data?: string;
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
   * The creation result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 791CC0D3-1A38-573B-8F5F-********
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * True
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
      data: 'string',
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

