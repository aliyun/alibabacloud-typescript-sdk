// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorHDFSDirectoriesResponseBodyDataMetrics } from "./ListDoctorHdfsdirectoriesResponseBodyDataMetrics";


export class ListDoctorHDFSDirectoriesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  depth?: number;
  /**
   * @example
   * /tmp/test
   */
  dirPath?: string;
  /**
   * @example
   * DW
   */
  group?: string;
  metrics?: ListDoctorHDFSDirectoriesResponseBodyDataMetrics;
  /**
   * @example
   * DW
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      dirPath: 'DirPath',
      group: 'Group',
      metrics: 'Metrics',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      dirPath: 'string',
      group: 'string',
      metrics: ListDoctorHDFSDirectoriesResponseBodyDataMetrics,
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

