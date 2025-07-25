// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsThreatLogsResponseBodyLogs extends $dara.Model {
  sourceIp?: string;
  subDomain?: string;
  threatLevel?: string;
  threatTime?: string;
  threatType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      subDomain: 'SubDomain',
      threatLevel: 'ThreatLevel',
      threatTime: 'ThreatTime',
      threatType: 'ThreatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      subDomain: 'string',
      threatLevel: 'string',
      threatTime: 'string',
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

export class DescribePdnsThreatLogsResponseBody extends $dara.Model {
  logs?: DescribePdnsThreatLogsResponseBodyLogs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribePdnsThreatLogsResponseBodyLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

