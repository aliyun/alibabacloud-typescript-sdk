// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopAttackListResponseBodyAttackList } from "./DescribeDomainTopAttackListResponseBodyAttackList";


export class DescribeDomainTopAttackListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The peak QPS of the website.
   */
  attackList?: DescribeDomainTopAttackListResponseBodyAttackList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
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

