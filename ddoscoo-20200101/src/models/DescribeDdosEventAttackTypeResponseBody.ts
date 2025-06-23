// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDDosEventAttackTypeResponseBodyAttackTypes } from "./DescribeDdosEventAttackTypeResponseBodyAttackTypes";


export class DescribeDDosEventAttackTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the attack types.
   */
  attackTypes?: DescribeDDosEventAttackTypeResponseBodyAttackTypes[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6F644A6E-40E7-483F-9DBB-CC27E16BB555
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackTypes: 'AttackTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackTypes: { 'type': 'array', 'itemType': DescribeDDosEventAttackTypeResponseBodyAttackTypes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackTypes)) {
      $dara.Model.validateArray(this.attackTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

