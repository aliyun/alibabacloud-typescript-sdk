// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyConfigRulesRequest extends $dara.Model {
  desAggregatorIds?: string;
  srcAggregatorId?: string;
  /**
   * @remarks
   * This parameter is required.
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

