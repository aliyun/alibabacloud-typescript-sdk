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

