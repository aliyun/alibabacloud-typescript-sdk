// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHBaseRegionServerResponseBodyDataMetrics } from "./GetDoctorHbaseRegionServerResponseBodyDataMetrics";


export class GetDoctorHBaseRegionServerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHBaseRegionServerResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: GetDoctorHBaseRegionServerResponseBodyDataMetrics,
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

