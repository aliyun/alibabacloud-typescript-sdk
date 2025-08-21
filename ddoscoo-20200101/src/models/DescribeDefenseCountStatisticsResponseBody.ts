// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of advanced mitigation sessions that are used within the current calendar month.
   * 
   * @example
   * 0
   */
  defenseCountTotalUsageOfCurrentMonth?: number;
  /**
   * @remarks
   * The number of available global advanced mitigation sessions for the Insurance mitigation plan.
   * 
   * @example
   * 0
   */
  flowPackCountRemain?: number;
  /**
   * @remarks
   * The maximum number of advanced mitigation sessions available for the current calendar month. The advanced mitigation sessions include the advanced mitigation sessions that are provided free of charge and the global advanced mitigation sessions that you purchase.
   * 
   * @example
   * 20
   */
  maxUsableDefenseCountCurrentMonth?: number;
  /**
   * @remarks
   * The number of available global advanced mitigation sessions for the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The statistics on the number of advanced mitigation sessions.
   */
  defenseCountStatistics?: DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 310A41FD-0990-5610-92E0-A6A55D7C6444
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

