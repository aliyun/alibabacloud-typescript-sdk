// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The attacked application.
   */
  attackApp?: string[];
  /**
   * @remarks
   * The attack type of the intrusion prevention event. Valid values:
   * 
   * - **1**: anomalous connection
   * 
   * - **2**: command execution
   * 
   * - **3**: brute-force attack
   * 
   * - **4**: scanning
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
   * - **10**: trojan backdoor
   * 
   * - **11**: virus and worm
   * 
   * - **12**: mining
   * 
   * - **13**: reverse shell
   * 
   * > If you do not specify this parameter, all attack types are queried.
   * 
   * @example
   * 1
   */
  attackType?: string;
  /**
   * @remarks
   * The edition of Cloud Firewall.
   * 
   * @example
   * 10
   */
  buyVersion?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1534408267
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 218.76.30.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
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

