// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAttackAppCategoryResponseBodyAppCategories extends $dara.Model {
  attackApps?: string[];
  /**
   * @example
   * test
   */
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      attackApps: 'AttackApps',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApps: { 'type': 'array', 'itemType': 'string' },
      categoryName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackApps)) {
      $dara.Model.validateArray(this.attackApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackAppCategoryResponseBody extends $dara.Model {
  appCategories?: DescribeAttackAppCategoryResponseBodyAppCategories[];
  /**
   * @example
   * B14757D0-4640-4B44-AC67-7F558FE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appCategories: 'AppCategories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCategories: { 'type': 'array', 'itemType': DescribeAttackAppCategoryResponseBodyAppCategories },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appCategories)) {
      $dara.Model.validateArray(this.appCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

