// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh**: Chinese. This is the default value.
   * - **en**: English.
   * This parameter determines whether the category names and technology type names are returned in Chinese or English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

