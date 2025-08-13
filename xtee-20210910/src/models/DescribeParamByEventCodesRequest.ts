// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParamByEventCodesRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for request and response, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Event code.
   * 
   * This parameter is required.
   * 
   * @example
   * account_abuse_pro,account_abuse
   */
  eventCodes?: string;
  /**
   * @remarks
   * Query condition
   * 
   * @example
   * 标题/描述
   */
  parma?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventCodes: 'eventCodes',
      parma: 'parma',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventCodes: 'string',
      parma: 'string',
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

