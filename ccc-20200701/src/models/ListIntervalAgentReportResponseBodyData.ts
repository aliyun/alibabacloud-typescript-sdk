// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIntervalAgentReportResponseBodyDataBack2Back } from "./ListIntervalAgentReportResponseBodyDataBack2back";
import { ListIntervalAgentReportResponseBodyDataInbound } from "./ListIntervalAgentReportResponseBodyDataInbound";
import { ListIntervalAgentReportResponseBodyDataInternal } from "./ListIntervalAgentReportResponseBodyDataInternal";
import { ListIntervalAgentReportResponseBodyDataOutbound } from "./ListIntervalAgentReportResponseBodyDataOutbound";
import { ListIntervalAgentReportResponseBodyDataOverall } from "./ListIntervalAgentReportResponseBodyDataOverall";


export class ListIntervalAgentReportResponseBodyData extends $dara.Model {
  back2Back?: ListIntervalAgentReportResponseBodyDataBack2Back;
  inbound?: ListIntervalAgentReportResponseBodyDataInbound;
  internal?: ListIntervalAgentReportResponseBodyDataInternal;
  outbound?: ListIntervalAgentReportResponseBodyDataOutbound;
  overall?: ListIntervalAgentReportResponseBodyDataOverall;
  /**
   * @example
   * 1620291600000
   */
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      back2Back: 'Back2Back',
      inbound: 'Inbound',
      internal: 'Internal',
      outbound: 'Outbound',
      overall: 'Overall',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      back2Back: ListIntervalAgentReportResponseBodyDataBack2Back,
      inbound: ListIntervalAgentReportResponseBodyDataInbound,
      internal: ListIntervalAgentReportResponseBodyDataInternal,
      outbound: ListIntervalAgentReportResponseBodyDataOutbound,
      overall: ListIntervalAgentReportResponseBodyDataOverall,
      statsTime: 'number',
    };
  }

  validate() {
    if(this.back2Back && typeof (this.back2Back as any).validate === 'function') {
      (this.back2Back as any).validate();
    }
    if(this.inbound && typeof (this.inbound as any).validate === 'function') {
      (this.inbound as any).validate();
    }
    if(this.internal && typeof (this.internal as any).validate === 'function') {
      (this.internal as any).validate();
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

