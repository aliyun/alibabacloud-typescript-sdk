// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back } from "./ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2back";
import { ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound } from "./ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound";
import { ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal } from "./ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal";
import { ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound } from "./ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound";
import { ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall } from "./ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall";


export class ListHistoricalAgentSkillGroupReportResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * agent1@ccc-test
   */
  agentId?: string;
  agentName?: string;
  back2Back?: ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back;
  /**
   * @example
   * 1001
   */
  displayId?: string;
  inbound?: ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound;
  internal?: ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal;
  outbound?: ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound;
  overall?: ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall;
  /**
   * @example
   * skillgroup1@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * Default
   */
  skillGroupName?: string;
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
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      back2Back: ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back,
      displayId: 'string',
      inbound: ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound,
      internal: ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal,
      outbound: ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound,
      overall: ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
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

