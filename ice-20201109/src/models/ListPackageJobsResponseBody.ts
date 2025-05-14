// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPackageJobsResponseBodyPackageJobList } from "./ListPackageJobsResponseBodyPackageJobList";


export class ListPackageJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of packaging jobs.
   */
  packageJobList?: ListPackageJobsResponseBodyPackageJobList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      packageJobList: 'PackageJobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageJobList: ListPackageJobsResponseBodyPackageJobList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.packageJobList && typeof (this.packageJobList as any).validate === 'function') {
      (this.packageJobList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

