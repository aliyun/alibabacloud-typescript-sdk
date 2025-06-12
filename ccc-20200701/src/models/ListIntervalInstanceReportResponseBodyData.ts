// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIntervalInstanceReportResponseBodyDataInbound } from "./ListIntervalInstanceReportResponseBodyDataInbound";
import { ListIntervalInstanceReportResponseBodyDataOutbound } from "./ListIntervalInstanceReportResponseBodyDataOutbound";
import { ListIntervalInstanceReportResponseBodyDataOverall } from "./ListIntervalInstanceReportResponseBodyDataOverall";


export class ListIntervalInstanceReportResponseBodyData extends $dara.Model {
  inbound?: ListIntervalInstanceReportResponseBodyDataInbound;
  outbound?: ListIntervalInstanceReportResponseBodyDataOutbound;
  overall?: ListIntervalInstanceReportResponseBodyDataOverall;
  /**
   * @example
   * 1620230400000
   */
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: ListIntervalInstanceReportResponseBodyDataInbound,
      outbound: ListIntervalInstanceReportResponseBodyDataOutbound,
      overall: ListIntervalInstanceReportResponseBodyDataOverall,
      statsTime: 'number',
    };
  }

  validate() {
    if(this.inbound && typeof (this.inbound as any).validate === 'function') {
      (this.inbound as any).validate();
    }
    if(this.outbound && typeof (this.outbound as any).validate === 'function') {
      (this.outbound as any).validate();
    }
    if(this.overall && typeof (this.overall as any).validate === 'function') {
      (this.overall as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

