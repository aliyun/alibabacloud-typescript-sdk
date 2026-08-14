// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopAttackListResponseBodyAttackList extends $dara.Model {
  attack?: number;
  count?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      attack: 'Attack',
      count: 'Count',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attack: 'number',
      count: 'number',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopAttackListResponseBody extends $dara.Model {
  attackList?: DescribeDomainTopAttackListResponseBodyAttackList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackList: 'AttackList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackList: { 'type': 'array', 'itemType': DescribeDomainTopAttackListResponseBodyAttackList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackList)) {
      $dara.Model.validateArray(this.attackList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

