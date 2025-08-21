// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebReportTopIpResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The ID of the location.
   * 
   * @example
   * 90998690
   */
  areaId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The Internet service provider (ISP) for the attack. Valid values:
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
   * 100017
   */
  isp?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 117.186.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      count: 'Count',
      isp: 'Isp',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      count: 'number',
      isp: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebReportTopIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the IP addresses.
   */
  dataList?: DescribeWebReportTopIpResponseBodyDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D21BE0C4-8E83-5E32-86C6-AA6BE9B1B5BD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeWebReportTopIpResponseBodyDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

