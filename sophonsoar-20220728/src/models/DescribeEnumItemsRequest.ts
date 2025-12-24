// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnumItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the enumeration item. Valid values:
   * 
   * *   **process**: scenarios
   * 
   * This parameter is required.
   * 
   * @example
   * process
   */
  enumType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      enumType: 'EnumType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enumType: 'string',
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

