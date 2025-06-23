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

