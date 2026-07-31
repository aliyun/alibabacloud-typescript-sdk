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
   * Indicates whether the task is deleted. Valid values:
   * - true: The task is deleted.
   * - false: The task failed to be deleted.
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

