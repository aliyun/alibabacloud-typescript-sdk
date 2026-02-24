// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7f7d626622af0041****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The tags of the resource. This parameter is deprecated and has no effect.
   * 
   * You can add a maximum of 20 tags to a resource.
   * 
   * @deprecated
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

