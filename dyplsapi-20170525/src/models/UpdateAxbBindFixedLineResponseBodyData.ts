// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAxbBindFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 响应码 0-成功
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * 响应消息
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 是否处理成功  true-成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

