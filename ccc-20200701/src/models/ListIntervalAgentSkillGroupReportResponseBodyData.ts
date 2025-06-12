// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back } from "./ListIntervalAgentSkillGroupReportResponseBodyDataBack2back";
import { ListIntervalAgentSkillGroupReportResponseBodyDataInbound } from "./ListIntervalAgentSkillGroupReportResponseBodyDataInbound";
import { ListIntervalAgentSkillGroupReportResponseBodyDataInternal } from "./ListIntervalAgentSkillGroupReportResponseBodyDataInternal";
import { ListIntervalAgentSkillGroupReportResponseBodyDataOutbound } from "./ListIntervalAgentSkillGroupReportResponseBodyDataOutbound";
import { ListIntervalAgentSkillGroupReportResponseBodyDataOverall } from "./ListIntervalAgentSkillGroupReportResponseBodyDataOverall";


export class ListIntervalAgentSkillGroupReportResponseBodyData extends $dara.Model {
  back2Back?: ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back;
  inbound?: ListIntervalAgentSkillGroupReportResponseBodyDataInbound;
  internal?: ListIntervalAgentSkillGroupReportResponseBodyDataInternal;
  outbound?: ListIntervalAgentSkillGroupReportResponseBodyDataOutbound;
  overall?: ListIntervalAgentSkillGroupReportResponseBodyDataOverall;
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
      back2Back: ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back,
      inbound: ListIntervalAgentSkillGroupReportResponseBodyDataInbound,
      internal: ListIntervalAgentSkillGroupReportResponseBodyDataInternal,
      outbound: ListIntervalAgentSkillGroupReportResponseBodyDataOutbound,
      overall: ListIntervalAgentSkillGroupReportResponseBodyDataOverall,
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

