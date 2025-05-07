// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnFixedLineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 绑定id
   * 
   * @example
   * GHX0534X202504221531579290029-2-1-aliaxn
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

