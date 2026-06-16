// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRequestHitRequest extends $dara.Model {
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
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 60C97040-D5D5-4906-9522-B9B413730CAA
   */
  sRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
      sRequestId: 'sRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      sRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

