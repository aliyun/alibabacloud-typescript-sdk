// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds } from "./ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds";
import { ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio } from "./ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio";
import { ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization } from "./ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization";
import { ListDoctorComputeSummaryResponseBodyDataMetricsReadSize } from "./ListDoctorComputeSummaryResponseBodyDataMetricsReadSize";
import { ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds } from "./ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds";
import { ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio } from "./ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio";
import { ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization } from "./ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization";
import { ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize } from "./ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize";


export class ListDoctorComputeSummaryResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The total memory consumption over time in seconds.
   */
  memSeconds?: ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The day-to-day growth rate of the total memory consumption over time in seconds.
   */
  memSecondsDayGrowthRatio?: ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio;
  /**
   * @remarks
   * The average memory usage.
   */
  memUtilization?: ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization;
  /**
   * @remarks
   * The total amount of data read from the file system.
   */
  readSize?: ListDoctorComputeSummaryResponseBodyDataMetricsReadSize;
  /**
   * @remarks
   * The total CPU consumption over time in seconds.
   */
  vcoreSeconds?: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds;
  /**
   * @remarks
   * The day-to-day growth rate of the total CPU consumption over time in seconds.
   */
  vcoreSecondsDayGrowthRatio?: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio;
  /**
   * @remarks
   * The average CPU utilization. The meaning is the same as the %CPU parameter in the output of the top command in Linux.
   */
  vcoreUtilization?: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization;
  /**
   * @remarks
   * The total amount of data written to the file system.
   */
  writeSize?: ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize;
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
      memSeconds: ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds,
      memSecondsDayGrowthRatio: ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio,
      memUtilization: ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization,
      readSize: ListDoctorComputeSummaryResponseBodyDataMetricsReadSize,
      vcoreSeconds: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds,
      vcoreSecondsDayGrowthRatio: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio,
      vcoreUtilization: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization,
      writeSize: ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize,
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

