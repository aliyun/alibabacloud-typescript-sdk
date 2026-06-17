// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventTopAttackTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The edition of Cloud Firewall.
   * 
   * @example
   * 2
   */
  buyVersion?: string;
  /**
   * @remarks
   * The traffic direction.
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range for the query. The value must be a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1743387943
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 140.210.153.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start of the time range for the query. The value must be a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1670307484
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      buyVersion: 'BuyVersion',
      direction: 'Direction',
      endTime: 'EndTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyVersion: 'string',
      direction: 'string',
      endTime: 'string',
      lang: 'string',
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

