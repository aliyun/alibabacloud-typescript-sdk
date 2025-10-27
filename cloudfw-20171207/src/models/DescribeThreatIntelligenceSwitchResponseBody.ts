// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatIntelligenceSwitchResponseBodyCategoryList extends $dara.Model {
  /**
   * @example
   * alert
   */
  action?: string;
  categoryDescribe?: string;
  /**
   * @example
   * 3000037
   */
  categoryId?: string;
  categoryName?: string;
  /**
   * @example
   * 123
   */
  categoryParentId?: string;
  /**
   * @example
   * 1
   */
  enableStatus?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      categoryDescribe: 'CategoryDescribe',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      categoryParentId: 'CategoryParentId',
      enableStatus: 'EnableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      categoryDescribe: 'string',
      categoryId: 'string',
      categoryName: 'string',
      categoryParentId: 'string',
      enableStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeThreatIntelligenceSwitchResponseBody extends $dara.Model {
  categoryList?: DescribeThreatIntelligenceSwitchResponseBodyCategoryList[];
  /**
   * @example
   * 6B8E0379-2629-59A1-B811-96F3E****
   */
  requestId?: string;
  /**
   * @example
   * 24
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: { 'type': 'array', 'itemType': DescribeThreatIntelligenceSwitchResponseBodyCategoryList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categoryList)) {
      $dara.Model.validateArray(this.categoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

