// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound } from "./ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound";
import { ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound } from "./ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound";
import { ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall } from "./ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall";


export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  agentName?: string;
  inbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * agent
   */
  loginName?: string;
  outbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound;
  overall?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall;
  /**
   * @example
   * ["skillgroup1@ccc-test","skillgroup2@ccc-test"]
   */
  skillGroupIds?: string;
  skillGroupNames?: string;
  /**
   * @example
   * 2018-09-13 00:00:00
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      inbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound,
      instanceId: 'string',
      loginName: 'string',
      outbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound,
      overall: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall,
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      timestamp: 'string',
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

