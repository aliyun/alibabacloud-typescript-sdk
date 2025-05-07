// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 短信接收者号码签名串(加到短信内容中供解析真实被叫号码)
   * 
   * @example
   * sign23343466
   */
  calledNoSign?: string;
  static names(): { [key: string]: string } {
    return {
      calledNoSign: 'CalledNoSign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNoSign: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

