// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHBaseRegionResponseBodyDataMetrics } from "./GetDoctorHbaseRegionResponseBodyDataMetrics";


export class GetDoctorHBaseRegionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Metrics information.
   */
  metrics?: GetDoctorHBaseRegionResponseBodyDataMetrics;
  /**
   * @remarks
   * Host of the RegionServer.
   * 
   * @example
   * emr-worker-2.cluster-20****
   */
  regionServerHost?: string;
  /**
   * @remarks
   * Table name.
   * 
   * @example
   * tb_item
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      regionServerHost: 'RegionServerHost',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: GetDoctorHBaseRegionResponseBodyDataMetrics,
      regionServerHost: 'string',
      tableName: 'string',
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

