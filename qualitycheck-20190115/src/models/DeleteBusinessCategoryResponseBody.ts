// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBusinessCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates that the request was successful. Other values indicate that the request failed. Use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * 无
   */
  data?: string;
  /**
   * @remarks
   * If the request fails, this parameter returns the error details. If the request is successful, this parameter returns **successful**.
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
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * Use this field to determine whether the request was successful:
   * 
   * - **true**: The request was successful.
   * 
   * - false or **null**: The request failed.
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

