// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventTopAttackTypeResponseBodyTopAttackTypeList extends $dara.Model {
  /**
   * @remarks
   * The number of attacks.
   * 
   * @example
   * 38
   */
  attackCnt?: number;
  /**
   * @remarks
   * The attack type of the intrusion prevention event. Valid values:
   * 
   * - **1**: abnormal connection
   * 
   * - **2**: command execution
   * 
   * - **3**: brute-force attack
   * 
   * - **4**: scan
   * 
   * - **5**: other
   * 
   * - **6**: information leakage
   * 
   * - **7**: DoS attack
   * 
   * - **8**: overflow attack
   * 
   * - **9**: web attack
   * 
   * - **10**: trojan and backdoor
   * 
   * - **11**: virus and worm
   * 
   * - **12**: cryptomining
   * 
   * - **13**: reverse shell
   * 
   * > By default, this API queries for all attack types.
   * 
   * @example
   * 2
   */
  attackType?: number;
  /**
   * @remarks
   * The number of protection triggers.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * BECDBF66-91DA-5B40-8B05-0D26541A****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of the top attack types.
   */
  topAttackTypeList?: DescribeRiskEventTopAttackTypeResponseBodyTopAttackTypeList[];
  /**
   * @remarks
   * The total number of attacks.
   * 
   * @example
   * 47
   */
  totalAttackCnt?: number;
  /**
   * @remarks
   * The total number of protection triggers.
   * 
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

