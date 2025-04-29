// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberAnalysisTransparentResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  deviceRisk?: string;
  /**
   * @example
   * 示例值示例值
   */
  ipRisk?: string;
  /**
   * @example
   * 0.6
   */
  score1?: string;
  /**
   * @example
   * 0.2
   */
  score2?: string;
  /**
   * @example
   * 0.8
   */
  score3?: string;
  static names(): { [key: string]: string } {
    return {
      deviceRisk: 'Device_risk',
      ipRisk: 'Ip_risk',
      score1: 'Score1',
      score2: 'Score2',
      score3: 'Score3',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceRisk: 'string',
      ipRisk: 'string',
      score1: 'string',
      score2: 'string',
      score3: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

