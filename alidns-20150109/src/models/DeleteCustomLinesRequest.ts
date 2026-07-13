// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomLinesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. The default value is **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique IDs of the custom lines. Separate multiple IDs with commas (,). To obtain the unique IDs, call the [DescribeCustomLines](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describecustomlines?spm=a2c63.p38356.help-menu-search-29697.d_0) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1*******,2*********
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

