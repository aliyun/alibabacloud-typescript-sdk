// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyThreatIntelligenceSwitchRequestCategoryList extends $dara.Model {
  /**
   * @remarks
   * The action of the rule. Valid values:
   * 
   * - **alert**: observation
   * 
   * - **drop**: block
   * 
   * @example
   * alert
   */
  action?: string;
  /**
   * @remarks
   * The ID of the threat intelligence category.
   * 
   * @example
   * IpOutThreatTorExit
   */
  categoryId?: string;
  /**
   * @remarks
   * The status of the switch. Valid values:
   * 
   * - **1**: enabled
   * 
   * - **0**: disabled
   * 
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
  /**
   * @remarks
   * The list of threat intelligence categories.
   */
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

