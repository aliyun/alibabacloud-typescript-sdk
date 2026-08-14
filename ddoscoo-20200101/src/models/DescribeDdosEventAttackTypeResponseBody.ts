// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventAttackTypeResponseBodyAttackTypes extends $dara.Model {
  attackType?: string;
  inPkts?: number;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      inPkts: 'InPkts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'string',
      inPkts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventAttackTypeResponseBody extends $dara.Model {
  attackTypes?: DescribeDDosEventAttackTypeResponseBodyAttackTypes[];
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

