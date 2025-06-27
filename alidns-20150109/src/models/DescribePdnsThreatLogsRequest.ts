// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsThreatLogsRequest extends $dara.Model {
  endDate?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  threatLevel?: string;
  threatSourceIp?: string;
  threatType?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      threatLevel: 'ThreatLevel',
      threatSourceIp: 'ThreatSourceIp',
      threatType: 'ThreatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      threatLevel: 'string',
      threatSourceIp: 'string',
      threatType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

