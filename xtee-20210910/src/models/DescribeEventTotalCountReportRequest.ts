// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventTotalCountReportRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and responses. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

