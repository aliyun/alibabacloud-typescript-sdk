// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventTopAttackTypeResponseBodyTopAttackTypeList extends $dara.Model {
  /**
   * @example
   * 38
   */
  attackCnt?: number;
  /**
   * @example
   * 2
   */
  attackType?: number;
  /**
   * @example
   * 42
   */
  protectCnt?: number;
  static names(): { [key: string]: string } {
    return {
      attackCnt: 'AttackCnt',
      attackType: 'AttackType',
      protectCnt: 'ProtectCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackCnt: 'number',
      attackType: 'number',
      protectCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventTopAttackTypeResponseBody extends $dara.Model {
  /**
   * @example
   * BECDBF66-91DA-5B40-8B05-0D26541A****
   */
  requestId?: string;
  topAttackTypeList?: DescribeRiskEventTopAttackTypeResponseBodyTopAttackTypeList[];
  /**
   * @example
   * 47
   */
  totalAttackCnt?: number;
  /**
   * @example
   * 65
   */
  totalProtectCnt?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topAttackTypeList: 'TopAttackTypeList',
      totalAttackCnt: 'TotalAttackCnt',
      totalProtectCnt: 'TotalProtectCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topAttackTypeList: { 'type': 'array', 'itemType': DescribeRiskEventTopAttackTypeResponseBodyTopAttackTypeList },
      totalAttackCnt: 'number',
      totalProtectCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.topAttackTypeList)) {
      $dara.Model.validateArray(this.topAttackTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

