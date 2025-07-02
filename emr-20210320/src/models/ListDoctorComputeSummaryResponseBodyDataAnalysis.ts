// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorComputeSummaryResponseBodyDataAnalysis extends $dara.Model {
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
   * 23
   */
  needAttentionJobCount?: number;
  /**
   * @remarks
   * The score for jobs.
   * 
   * @example
   * 56
   */
  score?: number;
  /**
   * @remarks
   * The day-to-day growth rate of the score for jobs.
   * 
   * @example
   * 0.03
   */
  scoreDayGrowthRatio?: number;
  /**
   * @remarks
   * The total number of sub-healthy jobs.
   * 
   * @example
   * 13
   */
  subHealthyJobCount?: number;
  /**
   * @remarks
   * The total number of unhealthy jobs.
   * 
   * @example
   * 123
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

