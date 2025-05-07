// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator";


export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators extends $dara.Model {
  operator?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator[];
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator },
    };
  }

  validate() {
    if(Array.isArray(this.operator)) {
      $dara.Model.validateArray(this.operator);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

