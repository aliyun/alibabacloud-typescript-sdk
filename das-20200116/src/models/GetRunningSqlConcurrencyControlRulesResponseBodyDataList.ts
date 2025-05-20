// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules } from "./GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules";


export class GetRunningSqlConcurrencyControlRulesResponseBodyDataList extends $dara.Model {
  runningRules?: GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules[];
  static names(): { [key: string]: string } {
    return {
      runningRules: 'runningRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runningRules: { 'type': 'array', 'itemType': GetRunningSqlConcurrencyControlRulesResponseBodyDataListRunningRules },
    };
  }

  validate() {
    if(Array.isArray(this.runningRules)) {
      $dara.Model.validateArray(this.runningRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

