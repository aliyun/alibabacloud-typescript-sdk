// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustVariableConfigListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * TIME_TYPE
   */
  bizType?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The time type. Valid values:
   * 
   * @example
   * CURRENT
   */
  timeType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      bizType: 'bizType',
      regId: 'regId',
      timeType: 'timeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      bizType: 'string',
      regId: 'string',
      timeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

