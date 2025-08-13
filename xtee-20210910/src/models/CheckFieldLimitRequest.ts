// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckFieldLimitRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * Source of the field
   * 
   * @example
   * DEFINE
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

