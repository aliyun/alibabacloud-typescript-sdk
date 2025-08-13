// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustVariableConfigListRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Configuration type
   * 
   * This parameter is required.
   * 
   * @example
   * TIME_TYPE
   */
  bizType?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Time type
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

