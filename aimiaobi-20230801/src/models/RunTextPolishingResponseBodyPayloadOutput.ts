// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTextPolishingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

