// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code returned by the service. Only "SUCCESS" indicates success; all other values indicate failure.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 外部userId映射关系不存在
   */
  message?: string;
  /**
   * @remarks
   * Succeeded in marking as read
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

