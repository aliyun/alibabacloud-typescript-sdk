// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics } from "./DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics";


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

