// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagListRequest extends $dara.Model {
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 433102
   */
  id?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
      regId: 'RegId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lang: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

