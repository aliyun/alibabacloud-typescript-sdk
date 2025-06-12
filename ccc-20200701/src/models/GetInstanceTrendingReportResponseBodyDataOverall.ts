// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTrendingReportResponseBodyDataOverall extends $dara.Model {
  maxLoggedInAgents?: number;
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      maxLoggedInAgents: 'MaxLoggedInAgents',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxLoggedInAgents: 'number',
      statsTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

