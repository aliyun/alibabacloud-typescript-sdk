// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomLineRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the custom line. You can call [DescribeCustomLines](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describecustomlines?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID
   * 
   * @example
   * 597
   */
  lineId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      lineId: 'LineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      lineId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

