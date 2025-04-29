// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunScriptContinueResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * 这是测试输出
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

