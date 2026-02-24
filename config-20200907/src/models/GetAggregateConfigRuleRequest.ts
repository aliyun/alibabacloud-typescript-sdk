// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * You can add a maximum of 20 tag keys.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * You can add a maximum of 20 tag values.
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

export class GetAggregateConfigRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-7f00626622af0041****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7f7d626622af0041****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The tags.
   * This parameter is deprecated. If you specify this parameter, the value does not take effect.
   * 
   * @deprecated
   */
  tag?: GetAggregateConfigRuleRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      tag: { 'type': 'array', 'itemType': GetAggregateConfigRuleRequestTag },
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

