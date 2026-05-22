// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateWafRulesResponseBody extends $dara.Model {
  ids?: number[];
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rulesetId?: number;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
      rulesetId: 'RulesetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
      rulesetId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

