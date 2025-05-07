// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnExtensionFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 绑定id
   * 
   * @example
   * GHX0534X202504221531579290029
   */
  subid?: string;
  /**
   * @remarks
   * 隐私号码
   * 
   * @example
   * 0571409312
   */
  telX?: string;
  /**
   * @remarks
   * 分机号，只有4位
   * 
   * @example
   * 1001
   */
  telXext?: string;
  static names(): { [key: string]: string } {
    return {
      subid: 'Subid',
      telX: 'TelX',
      telXext: 'TelXext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subid: 'string',
      telX: 'string',
      telXext: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

