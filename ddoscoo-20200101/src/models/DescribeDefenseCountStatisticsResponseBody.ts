// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics extends $dara.Model {
  defenseCountTotalUsageOfCurrentMonth?: number;
  flowPackCountRemain?: number;
  maxUsableDefenseCountCurrentMonth?: number;
  secHighSpeedCountRemain?: number;
  static names(): { [key: string]: string } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'DefenseCountTotalUsageOfCurrentMonth',
      flowPackCountRemain: 'FlowPackCountRemain',
      maxUsableDefenseCountCurrentMonth: 'MaxUsableDefenseCountCurrentMonth',
      secHighSpeedCountRemain: 'SecHighSpeedCountRemain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'number',
      flowPackCountRemain: 'number',
      maxUsableDefenseCountCurrentMonth: 'number',
      secHighSpeedCountRemain: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponseBody extends $dara.Model {
  defenseCountStatistics?: DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseCountStatistics: 'DefenseCountStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountStatistics: DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.defenseCountStatistics && typeof (this.defenseCountStatistics as any).validate === 'function') {
      (this.defenseCountStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

