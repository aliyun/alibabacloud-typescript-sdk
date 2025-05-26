// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKernelVersionResponseBodyAvailableKernelVersions extends $dara.Model {
  /**
   * @remarks
   * The maintenance expiration time of the version. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. After the time arrives, the system no longer maintains the version. If any issues occur, update the minor version of the cluster to a later version.
   * 
   * @example
   * 2025-07-17T16:00:00Z
   */
  expireDate?: string;
  /**
   * @remarks
   * The minor version. Example: **3.1.9**.
   * 
   * @example
   * 3.1.9
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The time when the minor version was released. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-07-17T16:00:00Z
   */
  releaseDate?: string;
  static names(): { [key: string]: string } {
    return {
      expireDate: 'ExpireDate',
      kernelVersion: 'KernelVersion',
      releaseDate: 'ReleaseDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDate: 'string',
      kernelVersion: 'string',
      releaseDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

