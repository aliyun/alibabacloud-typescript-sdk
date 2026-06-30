// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBusinessCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Business category ID
   * 
   * @example
   * 348193421
   */
  data?: string;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F83F12
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
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

