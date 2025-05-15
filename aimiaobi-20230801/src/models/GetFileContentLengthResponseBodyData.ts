// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileContentLengthResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1024
   */
  wordNum?: number;
  static names(): { [key: string]: string } {
    return {
      wordNum: 'WordNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

