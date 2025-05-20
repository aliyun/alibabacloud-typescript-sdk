// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSqlConcurrencyControlRulesHistoryResponseBodyDataListRules } from "./GetSqlConcurrencyControlRulesHistoryResponseBodyDataListRules";


export class GetSqlConcurrencyControlRulesHistoryResponseBodyDataList extends $dara.Model {
  rules?: GetSqlConcurrencyControlRulesHistoryResponseBodyDataListRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': GetSqlConcurrencyControlRulesHistoryResponseBodyDataListRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

