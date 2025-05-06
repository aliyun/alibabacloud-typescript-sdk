// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the destination account groups into which the rules are replicated. Separate multiple account group IDs with commas (,).
   * 
   * > If you leave this parameter empty, the compliance packages are replicated into the same account group.
   * 
   * @example
   * ca-4b4e626622af005d****
   */
  desAggregatorIds?: string;
  /**
   * @remarks
   * The ID of the account group to which the rules belong.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * @example
   * ca-24db626622af0060****
   */
  srcAggregatorId?: string;
  /**
   * @remarks
   * The rule IDs. Separate multiple rule IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-4b57626622af0065****,cr-47c1626622af0050****
   */
  srcConfigRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      desAggregatorIds: 'DesAggregatorIds',
      srcAggregatorId: 'SrcAggregatorId',
      srcConfigRuleIds: 'SrcConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desAggregatorIds: 'string',
      srcAggregatorId: 'string',
      srcConfigRuleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

