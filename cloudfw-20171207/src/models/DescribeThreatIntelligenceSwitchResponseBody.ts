// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatIntelligenceSwitchResponseBodyCategoryList extends $dara.Model {
  /**
   * @remarks
   * The action of the rule. Valid values:
   * 
   *  **alert**: monitor mode.
   * 
   *  **drop**: Block Mode.
   * 
   * @example
   * alert
   */
  action?: string;
  /**
   * @remarks
   * The category description.
   * 
   * @example
   * Tor Export Malicious IP
   */
  categoryDescribe?: string;
  /**
   * @remarks
   * The ID of the threat intelligence category.
   * 
   * @example
   * 3000037
   */
  categoryId?: string;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * Tor Export Malicious IP
   */
  categoryName?: string;
  /**
   * @remarks
   * The ID of the parent threat intelligence category.
   * 
   * @example
   * 123
   */
  categoryParentId?: string;
  /**
   * @remarks
   * The enabling status. Valid values:
   * 
   *  **1**: enabled.
   * 
   *  **0**: disabled.
   * 
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
  /**
   * @remarks
   * The list of threat intelligence categories.
   */
  categoryList?: DescribeThreatIntelligenceSwitchResponseBodyCategoryList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B8E0379-2629-59A1-B811-96F3E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

