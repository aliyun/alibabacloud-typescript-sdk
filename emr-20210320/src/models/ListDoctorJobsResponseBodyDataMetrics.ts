// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorJobsResponseBodyDataMetricsMemSeconds } from "./ListDoctorJobsResponseBodyDataMetricsMemSeconds";
import { ListDoctorJobsResponseBodyDataMetricsVcoreSeconds } from "./ListDoctorJobsResponseBodyDataMetricsVcoreSeconds";


export class ListDoctorJobsResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The amount of memory consumed.
   */
  memSeconds?: ListDoctorJobsResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The CPU usage.
   */
  vcoreSeconds?: ListDoctorJobsResponseBodyDataMetricsVcoreSeconds;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      vcoreSeconds: 'VcoreSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: ListDoctorJobsResponseBodyDataMetricsMemSeconds,
      vcoreSeconds: ListDoctorJobsResponseBodyDataMetricsVcoreSeconds,
    };
  }

  validate() {
    if(this.memSeconds && typeof (this.memSeconds as any).validate === 'function') {
      (this.memSeconds as any).validate();
    }
    if(this.vcoreSeconds && typeof (this.vcoreSeconds as any).validate === 'function') {
      (this.vcoreSeconds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

