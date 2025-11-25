// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventStatisticResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  attackAppCnt?: number;
  /**
   * @example
   * 5
   */
  attackCnt?: number;
  /**
   * @example
   * 10
   */
  attackIpCnt?: number;
  /**
   * @example
   * 20
   */
  dropCnt?: number;
  /**
   * @example
   * F93A490D-9E92-5AA4-BA79-600FFC09****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackAppCnt: 'AttackAppCnt',
      attackCnt: 'AttackCnt',
      attackIpCnt: 'AttackIpCnt',
      dropCnt: 'DropCnt',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackAppCnt: 'number',
      attackCnt: 'number',
      attackIpCnt: 'number',
      dropCnt: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

