// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxnExtensionBindFixedLineResponseBodyDataExtraaxx extends $dara.Model {
  /**
   * @remarks
   * 回拨控制
   * 
   * @example
   * 示例值示例值
   */
  callback?: string;
  /**
   * @remarks
   * 录音控制
   * 
   * @example
   * 示例值示例值
   */
  callrecording?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      callrecording: 'Callrecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      callrecording: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

