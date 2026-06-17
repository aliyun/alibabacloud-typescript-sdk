// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * Identity card
   */
  categoryName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent class.
   * 
   * @example
   * universal_industry_template
   */
  parentCategory?: string;
  /**
   * @remarks
   * The type of the sensitive credential.
   * 
   * @example
   * id_card
   */
  sensitiveCategory?: string;
  /**
   * @remarks
   * The sensitivity level.
   * 
   * @example
   * S3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The status of the sensitive data detection switch.
   * 
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

