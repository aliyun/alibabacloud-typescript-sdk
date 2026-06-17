// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of attacked applications.
   * 
   * @example
   * 10
   */
  attackAppCnt?: number;
  /**
   * @remarks
   * The attack count.
   * 
   * @example
   * 5
   */
  attackCnt?: number;
  /**
   * @remarks
   * The number of attacked assets.
   * 
   * @example
   * 10
   */
  attackIpCnt?: number;
  /**
   * @remarks
   * The drop count.
   * 
   * @example
   * 20
   */
  dropCnt?: number;
  /**
   * @remarks
   * The request ID.
   * 
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

