// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigRuleRequestTag } from "./GetConfigRuleRequestTag";


export class GetConfigRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the ID of a rule, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7f7d626622af0041****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
   */
  tag?: GetConfigRuleRequestTag[];
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      tag: { 'type': 'array', 'itemType': GetConfigRuleRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

