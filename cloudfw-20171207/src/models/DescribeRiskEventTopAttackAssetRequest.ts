// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventTopAttackAssetRequest extends $dara.Model {
  attackApp?: string[];
  /**
   * @example
   * 3
   */
  attackType?: string;
  /**
   * @example
   * 10
   */
  buyVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1742955867
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 125.33.253.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1754273436
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      attackType: 'AttackType',
      buyVersion: 'BuyVersion',
      endTime: 'EndTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: { 'type': 'array', 'itemType': 'string' },
      attackType: 'string',
      buyVersion: 'string',
      endTime: 'string',
      lang: 'string',
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackApp)) {
      $dara.Model.validateArray(this.attackApp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

