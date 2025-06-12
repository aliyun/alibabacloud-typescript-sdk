// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIntervalSkillGroupReportResponseBodyDataBack2Back } from "./ListIntervalSkillGroupReportResponseBodyDataBack2back";
import { ListIntervalSkillGroupReportResponseBodyDataInbound } from "./ListIntervalSkillGroupReportResponseBodyDataInbound";
import { ListIntervalSkillGroupReportResponseBodyDataOutbound } from "./ListIntervalSkillGroupReportResponseBodyDataOutbound";
import { ListIntervalSkillGroupReportResponseBodyDataOverall } from "./ListIntervalSkillGroupReportResponseBodyDataOverall";


export class ListIntervalSkillGroupReportResponseBodyData extends $dara.Model {
  back2Back?: ListIntervalSkillGroupReportResponseBodyDataBack2Back;
  inbound?: ListIntervalSkillGroupReportResponseBodyDataInbound;
  outbound?: ListIntervalSkillGroupReportResponseBodyDataOutbound;
  overall?: ListIntervalSkillGroupReportResponseBodyDataOverall;
  /**
   * @example
   * 1604639129000
   */
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      back2Back: 'Back2Back',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      back2Back: ListIntervalSkillGroupReportResponseBodyDataBack2Back,
      inbound: ListIntervalSkillGroupReportResponseBodyDataInbound,
      outbound: ListIntervalSkillGroupReportResponseBodyDataOutbound,
      overall: ListIntervalSkillGroupReportResponseBodyDataOverall,
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

