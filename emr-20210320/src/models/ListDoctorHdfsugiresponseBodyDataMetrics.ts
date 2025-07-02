// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize } from "./ListDoctorHdfsugiresponseBodyDataMetricsTotalDataSize";
import { ListDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount } from "./ListDoctorHdfsugiresponseBodyDataMetricsTotalDirCount";
import { ListDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount } from "./ListDoctorHdfsugiresponseBodyDataMetricsTotalFileCount";


export class ListDoctorHDFSUGIResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The total data size.
   */
  totalDataSize?: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The total number of directories.
   */
  totalDirCount?: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount;
  /**
   * @remarks
   * The total number of files.
   */
  totalFileCount?: ListDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount;
  static names(): { [key: string]: string } {
    return {
      totalDataSize: 'TotalDataSize',
      totalDirCount: 'TotalDirCount',
      totalFileCount: 'TotalFileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDataSize: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize,
      totalDirCount: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount,
      totalFileCount: ListDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount,
    };
  }

  validate() {
    if(this.totalDataSize && typeof (this.totalDataSize as any).validate === 'function') {
      (this.totalDataSize as any).validate();
    }
    if(this.totalDirCount && typeof (this.totalDirCount as any).validate === 'function') {
      (this.totalDirCount as any).validate();
    }
    if(this.totalFileCount && typeof (this.totalFileCount as any).validate === 'function') {
      (this.totalFileCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

