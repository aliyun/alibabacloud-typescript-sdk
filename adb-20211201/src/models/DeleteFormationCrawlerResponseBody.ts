// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFormationCrawlerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the deletion is successful. Valid values: - true: The deletion is successful. - false: The deletion fails.
   * 
   * @example
   * True
   */
  data?: boolean;
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
   * The error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E8DA77FA-FF0F-5516-A551-86C6E2D4BE92
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: 'boolean',
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

