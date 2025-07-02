// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorHDFSUGIResponseBodyDataMetrics } from "./ListDoctorHdfsugiresponseBodyDataMetrics";


export class ListDoctorHDFSUGIResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHDFSUGIResponseBodyDataMetrics;
  /**
   * @remarks
   * The actual name of the owner or group returned based on the value of Type.
   * 
   * @example
   * DW
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: ListDoctorHDFSUGIResponseBodyDataMetrics,
      name: 'string',
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

