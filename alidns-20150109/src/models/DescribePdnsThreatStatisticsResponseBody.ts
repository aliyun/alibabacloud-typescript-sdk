// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsThreatStatisticsResponseBodyData extends $dara.Model {
  dohTotalCount?: number;
  domainCount?: number;
  domainName?: string;
  latestThreatTime?: number;
  maxThreatLevel?: string;
  sourceIp?: string;
  subDomain?: string;
  threatLevel?: string;
  threatType?: string;
  totalCount?: number;
  udpTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dohTotalCount: 'DohTotalCount',
      domainCount: 'DomainCount',
      domainName: 'DomainName',
      latestThreatTime: 'LatestThreatTime',
      maxThreatLevel: 'MaxThreatLevel',
      sourceIp: 'SourceIp',
      subDomain: 'SubDomain',
      threatLevel: 'ThreatLevel',
      threatType: 'ThreatType',
      totalCount: 'TotalCount',
      udpTotalCount: 'UdpTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dohTotalCount: 'number',
      domainCount: 'number',
      domainName: 'string',
      latestThreatTime: 'number',
      maxThreatLevel: 'string',
      sourceIp: 'string',
      subDomain: 'string',
      threatLevel: 'string',
      threatType: 'string',
      totalCount: 'number',
      udpTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatStatisticsResponseBody extends $dara.Model {
  data?: DescribePdnsThreatStatisticsResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribePdnsThreatStatisticsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

