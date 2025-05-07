// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInterveneRulesResponseBodyDataInterveneRuleList } from "./ListInterveneRulesResponseBodyDataInterveneRuleList";


export class ListInterveneRulesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  interveneRuleList?: ListInterveneRulesResponseBodyDataInterveneRuleList[];
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interveneRuleList: 'InterveneRuleList',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interveneRuleList: { 'type': 'array', 'itemType': ListInterveneRulesResponseBodyDataInterveneRuleList },
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.interveneRuleList)) {
      $dara.Model.validateArray(this.interveneRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

