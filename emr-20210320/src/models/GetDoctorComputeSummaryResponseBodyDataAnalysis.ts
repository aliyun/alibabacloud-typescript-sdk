// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorComputeSummaryResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The total number of healthy jobs.
   * 
   * @example
   * 3
   */
  healthyJobCount?: number;
  /**
   * @remarks
   * The total number of jobs that require attention.
   * 
   * @example
   * 234
   */
  needAttentionJobCount?: number;
  /**
   * @remarks
   * The score for jobs.
   * 
   * @example
   * 73
   */
  score?: number;
  /**
   * @remarks
   * The day-to-day growth rate of the score for jobs.
   * 
   * @example
   * 0.02
   */
  scoreDayGrowthRatio?: number;
  /**
   * @remarks
   * The total number of sub-healthy jobs.
   * 
   * @example
   * 1123
   */
  subHealthyJobCount?: number;
  /**
   * @remarks
   * The total number of unhealthy jobs.
   * 
   * @example
   * 23
   */
  unhealthyJobCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthyJobCount: 'HealthyJobCount',
      needAttentionJobCount: 'NeedAttentionJobCount',
      score: 'Score',
      scoreDayGrowthRatio: 'ScoreDayGrowthRatio',
      subHealthyJobCount: 'SubHealthyJobCount',
      unhealthyJobCount: 'UnhealthyJobCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthyJobCount: 'number',
      needAttentionJobCount: 'number',
      score: 'number',
      scoreDayGrowthRatio: 'number',
      subHealthyJobCount: 'number',
      unhealthyJobCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

