// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxbFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 绑定id
   * 
   * @example
   * 示例值
   */
  subid?: string;
  /**
   * @remarks
   * X号码
   * 
   * @example
   * 示例值
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      subid: 'Subid',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subid: 'string',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

