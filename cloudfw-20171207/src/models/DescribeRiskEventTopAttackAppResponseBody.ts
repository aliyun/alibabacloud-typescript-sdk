// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventTopAttackAppResponseBodyAttackApps extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * 20
   */
  attackCnt?: number;
  /**
   * @example
   * 15
   */
  dropCnt?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      attackCnt: 'AttackCnt',
      dropCnt: 'DropCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      attackCnt: 'number',
      dropCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventTopAttackAppResponseBody extends $dara.Model {
  attackApps?: DescribeRiskEventTopAttackAppResponseBodyAttackApps[];
  /**
   * @example
   * C9DDAD29-C6B3-5997-B757-FFB3F1C3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackApps: 'AttackApps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApps: { 'type': 'array', 'itemType': DescribeRiskEventTopAttackAppResponseBodyAttackApps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackApps)) {
      $dara.Model.validateArray(this.attackApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

