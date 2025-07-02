// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorJobResponseBodyDataMetricsMemSeconds } from "./GetDoctorJobResponseBodyDataMetricsMemSeconds";
import { GetDoctorJobResponseBodyDataMetricsVcoreSeconds } from "./GetDoctorJobResponseBodyDataMetricsVcoreSeconds";


export class GetDoctorJobResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The amount of memory consumed.
   */
  memSeconds?: GetDoctorJobResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The CPU usage.
   */
  vcoreSeconds?: GetDoctorJobResponseBodyDataMetricsVcoreSeconds;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      vcoreSeconds: 'VcoreSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: GetDoctorJobResponseBodyDataMetricsMemSeconds,
      vcoreSeconds: GetDoctorJobResponseBodyDataMetricsVcoreSeconds,
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

