// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorComputeSummaryResponseBodyDataMetricsMemSeconds } from "./GetDoctorComputeSummaryResponseBodyDataMetricsMemSeconds";
import { GetDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio } from "./GetDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio";
import { GetDoctorComputeSummaryResponseBodyDataMetricsMemUtilization } from "./GetDoctorComputeSummaryResponseBodyDataMetricsMemUtilization";
import { GetDoctorComputeSummaryResponseBodyDataMetricsReadSize } from "./GetDoctorComputeSummaryResponseBodyDataMetricsReadSize";
import { GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds } from "./GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds";
import { GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio } from "./GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio";
import { GetDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization } from "./GetDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization";
import { GetDoctorComputeSummaryResponseBodyDataMetricsWriteSize } from "./GetDoctorComputeSummaryResponseBodyDataMetricsWriteSize";


export class GetDoctorComputeSummaryResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The total memory consumption over time in seconds.
   */
  memSeconds?: GetDoctorComputeSummaryResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The day-to-day growth rate of the total memory consumption over time in seconds.
   */
  memSecondsDayGrowthRatio?: GetDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio;
  /**
   * @remarks
   * The average memory usage.
   */
  memUtilization?: GetDoctorComputeSummaryResponseBodyDataMetricsMemUtilization;
  /**
   * @remarks
   * The total amount of data read from the file system.
   */
  readSize?: GetDoctorComputeSummaryResponseBodyDataMetricsReadSize;
  /**
   * @remarks
   * The total CPU consumption over time in seconds.
   */
  vcoreSeconds?: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds;
  /**
   * @remarks
   * The day-to-day growth rate of the total CPU consumption over time in seconds.
   */
  vcoreSecondsDayGrowthRatio?: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio;
  /**
   * @remarks
   * The average CPU utilization. The meaning is the same as the %CPU parameter in the output of the top command in Linux.
   */
  vcoreUtilization?: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization;
  /**
   * @remarks
   * The total amount of data written to the file system.
   */
  writeSize?: GetDoctorComputeSummaryResponseBodyDataMetricsWriteSize;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      memSecondsDayGrowthRatio: 'MemSecondsDayGrowthRatio',
      memUtilization: 'MemUtilization',
      readSize: 'ReadSize',
      vcoreSeconds: 'VcoreSeconds',
      vcoreSecondsDayGrowthRatio: 'VcoreSecondsDayGrowthRatio',
      vcoreUtilization: 'VcoreUtilization',
      writeSize: 'WriteSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: GetDoctorComputeSummaryResponseBodyDataMetricsMemSeconds,
      memSecondsDayGrowthRatio: GetDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio,
      memUtilization: GetDoctorComputeSummaryResponseBodyDataMetricsMemUtilization,
      readSize: GetDoctorComputeSummaryResponseBodyDataMetricsReadSize,
      vcoreSeconds: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds,
      vcoreSecondsDayGrowthRatio: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio,
      vcoreUtilization: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization,
      writeSize: GetDoctorComputeSummaryResponseBodyDataMetricsWriteSize,
    };
  }

  validate() {
    if(this.memSeconds && typeof (this.memSeconds as any).validate === 'function') {
      (this.memSeconds as any).validate();
    }
    if(this.memSecondsDayGrowthRatio && typeof (this.memSecondsDayGrowthRatio as any).validate === 'function') {
      (this.memSecondsDayGrowthRatio as any).validate();
    }
    if(this.memUtilization && typeof (this.memUtilization as any).validate === 'function') {
      (this.memUtilization as any).validate();
    }
    if(this.readSize && typeof (this.readSize as any).validate === 'function') {
      (this.readSize as any).validate();
    }
    if(this.vcoreSeconds && typeof (this.vcoreSeconds as any).validate === 'function') {
      (this.vcoreSeconds as any).validate();
    }
    if(this.vcoreSecondsDayGrowthRatio && typeof (this.vcoreSecondsDayGrowthRatio as any).validate === 'function') {
      (this.vcoreSecondsDayGrowthRatio as any).validate();
    }
    if(this.vcoreUtilization && typeof (this.vcoreUtilization as any).validate === 'function') {
      (this.vcoreUtilization as any).validate();
    }
    if(this.writeSize && typeof (this.writeSize as any).validate === 'function') {
      (this.writeSize as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

