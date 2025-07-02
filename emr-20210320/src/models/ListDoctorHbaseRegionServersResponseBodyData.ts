// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorHBaseRegionServersResponseBodyDataMetrics } from "./ListDoctorHbaseRegionServersResponseBodyDataMetrics";


export class ListDoctorHBaseRegionServersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHBaseRegionServersResponseBodyDataMetrics;
  /**
   * @remarks
   * The RegionServer host.
   * 
   * @example
   * emr-worker-4.cluster-20****
   */
  regionServerHost?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      regionServerHost: 'RegionServerHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: ListDoctorHBaseRegionServersResponseBodyDataMetrics,
      regionServerHost: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

