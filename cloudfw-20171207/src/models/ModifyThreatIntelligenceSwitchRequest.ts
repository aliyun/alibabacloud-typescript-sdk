// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyThreatIntelligenceSwitchRequestCategoryList extends $dara.Model {
  /**
   * @example
   * alert
   */
  action?: string;
  /**
   * @example
   * IpOutThreatTorExit
   */
  categoryId?: string;
  /**
   * @example
   * 1
   */
  enableStatus?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      categoryId: 'CategoryId',
      enableStatus: 'EnableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      categoryId: 'string',
      enableStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyThreatIntelligenceSwitchRequest extends $dara.Model {
  categoryList?: ModifyThreatIntelligenceSwitchRequestCategoryList[];
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: { 'type': 'array', 'itemType': ModifyThreatIntelligenceSwitchRequestCategoryList },
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

