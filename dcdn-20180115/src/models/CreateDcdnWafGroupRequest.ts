// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDcdnWafGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the WAF rule group. The name can be up to 128 characters in length. This parameter is required when you create a custom WAF rule group.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable subscription. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * When you replicate a custom rule group, do not specify this parameter.
   * 
   * @example
   * on
   */
  subscribe?: string;
  /**
   * @remarks
   * The ID of the rule group to be replicated. This parameter is required when you replicate a custom WAF rule group. You can call the [DescribeDcdnWafGroups](~~DescribeDcdnWafGroups~~) operation to query the ID of the rule group. If no template is used, set the value to 0 or do not specify this parameter.
   * 
   * @example
   * 0
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subscribe: 'Subscribe',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subscribe: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

