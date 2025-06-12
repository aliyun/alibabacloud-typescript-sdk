// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHistoricalAgentReportResponseBodyDataListBack2Back } from "./ListHistoricalAgentReportResponseBodyDataListBack2back";
import { ListHistoricalAgentReportResponseBodyDataListInbound } from "./ListHistoricalAgentReportResponseBodyDataListInbound";
import { ListHistoricalAgentReportResponseBodyDataListInternal } from "./ListHistoricalAgentReportResponseBodyDataListInternal";
import { ListHistoricalAgentReportResponseBodyDataListOutbound } from "./ListHistoricalAgentReportResponseBodyDataListOutbound";
import { ListHistoricalAgentReportResponseBodyDataListOverall } from "./ListHistoricalAgentReportResponseBodyDataListOverall";


export class ListHistoricalAgentReportResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * agent1@ccc-test
   */
  agentId?: string;
  agentName?: string;
  back2Back?: ListHistoricalAgentReportResponseBodyDataListBack2Back;
  /**
   * @example
   * 001
   */
  displayId?: string;
  inbound?: ListHistoricalAgentReportResponseBodyDataListInbound;
  internal?: ListHistoricalAgentReportResponseBodyDataListInternal;
  outbound?: ListHistoricalAgentReportResponseBodyDataListOutbound;
  overall?: ListHistoricalAgentReportResponseBodyDataListOverall;
  /**
   * @example
   * ["skillgroup1@ccc-test","skillgroup2@ccc-test"]
   */
  skillGroupIds?: string;
  skillGroupNames?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      back2Back: 'Back2Back',
      displayId: 'DisplayId',
      inbound: 'Inbound',
      internal: 'Internal',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      back2Back: ListHistoricalAgentReportResponseBodyDataListBack2Back,
      displayId: 'string',
      inbound: ListHistoricalAgentReportResponseBodyDataListInbound,
      internal: ListHistoricalAgentReportResponseBodyDataListInternal,
      outbound: ListHistoricalAgentReportResponseBodyDataListOutbound,
      overall: ListHistoricalAgentReportResponseBodyDataListOverall,
      skillGroupIds: 'string',
      skillGroupNames: 'string',
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

