// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCheckInfoResponseBodyDataCheckDetailListBlockRuleScopeNodeList } from "./QueryCheckInfoResponseBodyDataCheckDetailListBlockRuleScopeNodeList";


export class QueryCheckInfoResponseBodyDataCheckDetailListBlockRule extends $dara.Model {
  blockHarm?: string;
  blockId?: number;
  express?: string;
  scopeEndTime?: number;
  scopeNodeList?: QueryCheckInfoResponseBodyDataCheckDetailListBlockRuleScopeNodeList[];
  scopeRuleId?: number;
  scopeStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      blockHarm: 'BlockHarm',
      blockId: 'BlockId',
      express: 'Express',
      scopeEndTime: 'ScopeEndTime',
      scopeNodeList: 'ScopeNodeList',
      scopeRuleId: 'ScopeRuleId',
      scopeStartTime: 'ScopeStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHarm: 'string',
      blockId: 'number',
      express: 'string',
      scopeEndTime: 'number',
      scopeNodeList: { 'type': 'array', 'itemType': QueryCheckInfoResponseBodyDataCheckDetailListBlockRuleScopeNodeList },
      scopeRuleId: 'number',
      scopeStartTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scopeNodeList)) {
      $dara.Model.validateArray(this.scopeNodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

