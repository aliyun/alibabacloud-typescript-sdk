// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPackageJobResponseBodyPackageJob } from "./GetPackageJobResponseBodyPackageJob";


export class GetPackageJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the packaging job.
   */
  packageJob?: GetPackageJobResponseBodyPackageJob;
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
      packageJob: 'PackageJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageJob: GetPackageJobResponseBodyPackageJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.packageJob && typeof (this.packageJob as any).validate === 'function') {
      (this.packageJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

