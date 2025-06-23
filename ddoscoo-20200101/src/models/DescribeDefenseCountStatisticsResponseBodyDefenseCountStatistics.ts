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

