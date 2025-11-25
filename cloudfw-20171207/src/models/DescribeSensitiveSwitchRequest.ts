// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveSwitchRequest extends $dara.Model {
  categoryName?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * universal_industry_template
   */
  parentCategory?: string;
  /**
   * @example
   * id_card
   */
  sensitiveCategory?: string;
  /**
   * @example
   * S3
   */
  sensitiveLevel?: string;
  /**
   * @example
   * 1
   */
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      parentCategory: 'ParentCategory',
      sensitiveCategory: 'SensitiveCategory',
      sensitiveLevel: 'SensitiveLevel',
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      parentCategory: 'string',
      sensitiveCategory: 'string',
      sensitiveLevel: 'string',
      switchStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

