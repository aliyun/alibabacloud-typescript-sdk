// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound } from "./ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound";
import { ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound } from "./ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound";
import { ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall } from "./ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall";


export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList extends $dara.Model {
  inbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  outbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound;
  overall?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  skillGroupName?: string;
  /**
   * @example
   * 2018-09-13 00:00:00
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound,
      instanceId: 'string',
      outbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound,
      overall: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
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

