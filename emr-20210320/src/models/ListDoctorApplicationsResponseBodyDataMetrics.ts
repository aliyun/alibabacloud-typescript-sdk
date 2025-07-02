// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorApplicationsResponseBodyDataMetricsMemSeconds } from "./ListDoctorApplicationsResponseBodyDataMetricsMemSeconds";
import { ListDoctorApplicationsResponseBodyDataMetricsMemUtilization } from "./ListDoctorApplicationsResponseBodyDataMetricsMemUtilization";
import { ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds } from "./ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds";
import { ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization } from "./ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization";


export class ListDoctorApplicationsResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The amount of memory consumed.
   */
  memSeconds?: ListDoctorApplicationsResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The memory usage
   */
  memUtilization?: ListDoctorApplicationsResponseBodyDataMetricsMemUtilization;
  /**
   * @remarks
   * The CPU usage.
   */
  vcoreSeconds?: ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds;
  /**
   * @remarks
   * The CPU utilization. This parameter has the same meaning as %CPU in the Linux top command.
   */
  vcoreUtilization?: ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization;
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
      memSeconds: ListDoctorApplicationsResponseBodyDataMetricsMemSeconds,
      memUtilization: ListDoctorApplicationsResponseBodyDataMetricsMemUtilization,
      vcoreSeconds: ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds,
      vcoreUtilization: ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization,
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

