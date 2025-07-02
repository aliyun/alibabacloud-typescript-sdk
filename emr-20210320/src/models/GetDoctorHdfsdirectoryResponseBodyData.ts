// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHDFSDirectoryResponseBodyDataMetrics } from "./GetDoctorHdfsdirectoryResponseBodyDataMetrics";


export class GetDoctorHDFSDirectoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The directory level.
   * 
   * @example
   * 2
   */
  depth?: number;
  /**
   * @remarks
   * The group to which the directory belongs.
   * 
   * @example
   * DW
   */
  group?: string;
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHDFSDirectoryResponseBodyDataMetrics;
  /**
   * @remarks
   * The directory owner.
   * 
   * @example
   * DW
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      group: 'Group',
      metrics: 'Metrics',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      group: 'string',
      metrics: GetDoctorHDFSDirectoryResponseBodyDataMetrics,
      user: 'string',
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

