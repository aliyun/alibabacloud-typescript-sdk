// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleConfigActionsBypass extends $dara.Model {
  customRules?: number[];
  regularRules?: number[];
  regularTypes?: string[];
  skip?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      customRules: 'CustomRules',
      regularRules: 'RegularRules',
      regularTypes: 'RegularTypes',
      skip: 'Skip',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRules: { 'type': 'array', 'itemType': 'number' },
      regularRules: { 'type': 'array', 'itemType': 'number' },
      regularTypes: { 'type': 'array', 'itemType': 'string' },
      skip: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customRules)) {
      $dara.Model.validateArray(this.customRules);
    }
    if(Array.isArray(this.regularRules)) {
      $dara.Model.validateArray(this.regularRules);
    }
    if(Array.isArray(this.regularTypes)) {
      $dara.Model.validateArray(this.regularTypes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

