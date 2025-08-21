// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortCcAttackTopIPResponseBodyTopIp extends $dara.Model {
  /**
   * @remarks
   * The code of the location from which the attack is initiated. For more information, see [Codes of administrative regions in China and codes of countries and areas](https://help.aliyun.com/document_detail/167926.html). For example, **110000** indicates Beijing, China, and **us** indicates the United States.
   * 
   * @example
   * cn-shanghai
   */
  areaId?: string;
  /**
   * @remarks
   * The number of attacks from the IP address.
   * 
   * @example
   * 33971
   */
  pv?: number;
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * @example
   * 172.18.XX.XX
   */
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      pv: 'Pv',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      pv: 'number',
      srcIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortCcAttackTopIPResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 24F36D81-5E2D-52E5-9DB6-A3ED23CF271A
   */
  requestId?: string;
  /**
   * @remarks
   * The top IP addresses from which most attacks are initiated.
   */
  topIp?: DescribePortCcAttackTopIPResponseBodyTopIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topIp: 'TopIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topIp: { 'type': 'array', 'itemType': DescribePortCcAttackTopIPResponseBodyTopIp },
    };
  }

  validate() {
    if(Array.isArray(this.topIp)) {
      $dara.Model.validateArray(this.topIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

