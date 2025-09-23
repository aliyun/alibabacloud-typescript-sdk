// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics extends $dara.Model {
  /**
   * @example
   * 0
   */
  defenseCountTotalUsageOfCurrentMonth?: number;
  /**
   * @example
   * 10
   */
  flowPackCountRemain?: number;
  /**
   * @example
   * 0
   */
  maxUsableDefenseCountCurrentMonth?: number;
  static names(): { [key: string]: string } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'DefenseCountTotalUsageOfCurrentMonth',
      flowPackCountRemain: 'FlowPackCountRemain',
      maxUsableDefenseCountCurrentMonth: 'MaxUsableDefenseCountCurrentMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'number',
      flowPackCountRemain: 'number',
      maxUsableDefenseCountCurrentMonth: 'number',
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
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
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

