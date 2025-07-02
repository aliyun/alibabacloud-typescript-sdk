// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorJobsStatsResponseBodyDataAppsCount } from "./ListDoctorJobsStatsResponseBodyDataAppsCount";
import { ListDoctorJobsStatsResponseBodyDataMemSeconds } from "./ListDoctorJobsStatsResponseBodyDataMemSeconds";
import { ListDoctorJobsStatsResponseBodyDataVcoreSeconds } from "./ListDoctorJobsStatsResponseBodyDataVcoreSeconds";


export class ListDoctorJobsStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of jobs.
   */
  appsCount?: ListDoctorJobsStatsResponseBodyDataAppsCount;
  /**
   * @remarks
   * The aggregated amount of memory that is allocated to the job multiplied by the number of seconds the job has been running.
   */
  memSeconds?: ListDoctorJobsStatsResponseBodyDataMemSeconds;
  /**
   * @remarks
   * The YARN queue to which the job was submitted.
   * 
   * @example
   * DW
   */
  queue?: string;
  /**
   * @remarks
   * The type of the compute engine.
   * 
   * @example
   * SPARK
   */
  type?: string;
  /**
   * @remarks
   * The username that is used to submit the job.
   * 
   * @example
   * DW
   */
  user?: string;
  /**
   * @remarks
   * The aggregated number of vCPUs that are allocated to the job multiplied by the number of seconds the job has been running.
   */
  vcoreSeconds?: ListDoctorJobsStatsResponseBodyDataVcoreSeconds;
  static names(): { [key: string]: string } {
    return {
      appsCount: 'AppsCount',
      memSeconds: 'MemSeconds',
      queue: 'Queue',
      type: 'Type',
      user: 'User',
      vcoreSeconds: 'VcoreSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appsCount: ListDoctorJobsStatsResponseBodyDataAppsCount,
      memSeconds: ListDoctorJobsStatsResponseBodyDataMemSeconds,
      queue: 'string',
      type: 'string',
      user: 'string',
      vcoreSeconds: ListDoctorJobsStatsResponseBodyDataVcoreSeconds,
    };
  }

  validate() {
    if(this.appsCount && typeof (this.appsCount as any).validate === 'function') {
      (this.appsCount as any).validate();
    }
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

