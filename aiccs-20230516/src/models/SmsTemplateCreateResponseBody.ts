// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmsTemplateCreateResponseBody extends $dara.Model {
  /**
   * @example
   * 23
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
   */
  model?: string;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      model: 'string',
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

