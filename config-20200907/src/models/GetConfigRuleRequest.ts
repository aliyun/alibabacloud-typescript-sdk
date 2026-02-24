// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * You can add a maximum of 20 tag keys to a resource.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * You can add a maximum of 20 tag values to a resource.
   * 
   * @example
   * value-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleRequest extends $dara.Model {
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

