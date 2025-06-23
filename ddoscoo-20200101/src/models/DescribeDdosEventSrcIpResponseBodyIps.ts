// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventSrcIpResponseBodyIps extends $dara.Model {
  /**
   * @remarks
   * The code or ID of the source region. For more information, see [Codes of administrative regions in China and codes of countries and areas](https://help.aliyun.com/document_detail/167926.html). For example, **110000** indicates Beijing, China, and **us** indicates the United States.
   * 
   * @example
   * 110000
   */
  areaId?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) for the volumetric attack. Valid values:
   * 
   * *   **100017**: China Telecom
   * *   **100026**: China Unicom
   * *   **100025**: China Mobile
   * *   **100027**: China Education and Research Network
   * *   **100020**: China Mobile Tietong
   * *   **1000143**: Dr.Peng Telecom & Media Group
   * *   **100080**: Beijing Gehua CATV Network
   * *   **1000139**: National Radio and Television Administration
   * *   **100023**: Oriental Cable Network
   * *   **100063**: Founder Broadband
   * *   **1000337**: China Internet Exchange
   * *   **100021**: 21Vianet Group
   * *   **1000333**: Wasu Media Holding
   * *   **100093**: Wangsu Science & Technology
   * *   **1000401**: Tencent
   * *   **100099**: Baidu
   * *   **1000323**: Alibaba Cloud
   * *   **100098**: Alibaba
   * 
   * @example
   * 100026
   */
  isp?: string;
  /**
   * @remarks
   * The source IP address of the volumetric attack.
   * 
   * @example
   * 218.***.***.24
   */
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      isp: 'Isp',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      isp: 'string',
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

