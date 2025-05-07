// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAxnExtensionBindFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 响应码 0：成功，其它失败，具体见文档
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * 描述信息
   * 
   * @example
   * success
   */
  message?: string;
  /**
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

