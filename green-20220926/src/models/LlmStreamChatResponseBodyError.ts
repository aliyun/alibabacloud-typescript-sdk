// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmStreamChatResponseBodyError extends $dara.Model {
  /**
   * @example
   * data_inspection_failed
   */
  code?: string;
  /**
   * @example
   * Input data may contain inappropriate content.
   */
  message?: string;
  /**
   * @example
   * null
   */
  param?: string;
  /**
   * @example
   * data_inspection_failed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      param: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

