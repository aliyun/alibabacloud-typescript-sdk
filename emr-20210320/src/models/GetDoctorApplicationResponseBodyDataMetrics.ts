// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorApplicationResponseBodyDataMetricsMemSeconds } from "./GetDoctorApplicationResponseBodyDataMetricsMemSeconds";
import { GetDoctorApplicationResponseBodyDataMetricsMemUtilization } from "./GetDoctorApplicationResponseBodyDataMetricsMemUtilization";
import { GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds } from "./GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds";
import { GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization } from "./GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization";


export class GetDoctorApplicationResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The aggregated amount of memory that is allocated to the job multiplied by the number of seconds the job has been running.
   */
  memSeconds?: GetDoctorApplicationResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The memory usage.
   */
  memUtilization?: GetDoctorApplicationResponseBodyDataMetricsMemUtilization;
  /**
   * @remarks
   * The aggregated number of vCPUs that are allocated to the job multiplied by the number of seconds the job has been running.
   */
  vcoreSeconds?: GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds;
  /**
   * @remarks
   * The CPU utilization. The meaning is the same as that of the %CPU command in the output of the Linux top command.
   */
  vcoreUtilization?: GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      memUtilization: 'MemUtilization',
      vcoreSeconds: 'VcoreSeconds',
      vcoreUtilization: 'VcoreUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: GetDoctorApplicationResponseBodyDataMetricsMemSeconds,
      memUtilization: GetDoctorApplicationResponseBodyDataMetricsMemUtilization,
      vcoreSeconds: GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds,
      vcoreUtilization: GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization,
    };
  }

  validate() {
    if(this.memSeconds && typeof (this.memSeconds as any).validate === 'function') {
      (this.memSeconds as any).validate();
    }
    if(this.memUtilization && typeof (this.memUtilization as any).validate === 'function') {
      (this.memUtilization as any).validate();
    }
    if(this.vcoreSeconds && typeof (this.vcoreSeconds as any).validate === 'function') {
      (this.vcoreSeconds as any).validate();
    }
    if(this.vcoreUtilization && typeof (this.vcoreUtilization as any).validate === 'function') {
      (this.vcoreUtilization as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

