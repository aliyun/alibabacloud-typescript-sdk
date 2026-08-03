// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code returned by the service; "SUCCESS" indicates success, otherwise it indicates failure
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Error message; if present, the send operation failed
   * 
   * @example
   * 外部userId映射关系不存在
   */
  message?: string;
  /**
   * @remarks
   * Message sending result
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

