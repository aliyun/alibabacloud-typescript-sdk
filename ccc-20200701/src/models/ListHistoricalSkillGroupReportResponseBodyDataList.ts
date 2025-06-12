// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHistoricalSkillGroupReportResponseBodyDataListBack2Back } from "./ListHistoricalSkillGroupReportResponseBodyDataListBack2back";
import { ListHistoricalSkillGroupReportResponseBodyDataListInbound } from "./ListHistoricalSkillGroupReportResponseBodyDataListInbound";
import { ListHistoricalSkillGroupReportResponseBodyDataListOutbound } from "./ListHistoricalSkillGroupReportResponseBodyDataListOutbound";
import { ListHistoricalSkillGroupReportResponseBodyDataListOverall } from "./ListHistoricalSkillGroupReportResponseBodyDataListOverall";


export class ListHistoricalSkillGroupReportResponseBodyDataList extends $dara.Model {
  back2Back?: ListHistoricalSkillGroupReportResponseBodyDataListBack2Back;
  inbound?: ListHistoricalSkillGroupReportResponseBodyDataListInbound;
  outbound?: ListHistoricalSkillGroupReportResponseBodyDataListOutbound;
  overall?: ListHistoricalSkillGroupReportResponseBodyDataListOverall;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      back2Back: 'Back2Back',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      back2Back: ListHistoricalSkillGroupReportResponseBodyDataListBack2Back,
      inbound: ListHistoricalSkillGroupReportResponseBodyDataListInbound,
      outbound: ListHistoricalSkillGroupReportResponseBodyDataListOutbound,
      overall: ListHistoricalSkillGroupReportResponseBodyDataListOverall,
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

