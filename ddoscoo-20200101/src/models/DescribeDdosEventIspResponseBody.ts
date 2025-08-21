// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventIspResponseBodyIsps extends $dara.Model {
  /**
   * @remarks
   * The number of request packets that were sent from the ISP.
   * 
   * @example
   * 230
   */
  inPkts?: number;
  /**
   * @remarks
   * The code of the ISP. Valid values:
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
   * 1000323
   */
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      inPkts: 'InPkts',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inPkts: 'number',
      isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventIspResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ISPs for the volumetric attack.
   */
  isps?: DescribeDDosEventIspResponseBodyIsps[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C4A3BCD1-4A32-4342-941A-4745AE69508C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: { 'type': 'array', 'itemType': DescribeDDosEventIspResponseBodyIsps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.isps)) {
      $dara.Model.validateArray(this.isps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

