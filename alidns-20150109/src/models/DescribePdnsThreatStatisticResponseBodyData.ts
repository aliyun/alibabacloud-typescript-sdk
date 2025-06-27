// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsThreatStatisticResponseBodyData extends $dara.Model {
  dohTotalCount?: number;
  threatLevel?: string;
  threatType?: string;
  timestamp?: number;
  totalCount?: number;
  udpTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dohTotalCount: 'DohTotalCount',
      threatLevel: 'ThreatLevel',
      threatType: 'ThreatType',
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      udpTotalCount: 'UdpTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dohTotalCount: 'number',
      threatLevel: 'string',
      threatType: 'string',
      timestamp: 'number',
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

