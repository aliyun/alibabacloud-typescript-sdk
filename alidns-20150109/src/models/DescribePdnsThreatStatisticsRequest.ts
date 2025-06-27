// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsThreatStatisticsRequest extends $dara.Model {
  direction?: string;
  domainName?: string;
  endDate?: string;
  lang?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  subDomain?: string;
  threatLevel?: string;
  threatSourceIp?: string;
  threatType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
      threatLevel: 'ThreatLevel',
      threatSourceIp: 'ThreatSourceIp',
      threatType: 'ThreatType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      subDomain: 'string',
      threatLevel: 'string',
      threatSourceIp: 'string',
      threatType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

