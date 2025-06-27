// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomLinesRequest extends $dara.Model {
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
   * The unique IDs of the custom lines that you want to delete. Separate the unique IDs with commas (,). You can call the [DescribeCustomLines](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describecustomlines?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234,1235
   */
  lineIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      lineIds: 'LineIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      lineIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

