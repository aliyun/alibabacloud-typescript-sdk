// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKernelVersionResponseBodyAvailableKernelVersions extends $dara.Model {
  /**
   * @remarks
   * The end-of-support date of the version. The time is in the yyyy-MM-DD HH:mm:ss format. After this date, the system no longer maintains this version. If any issues occur, upgrade to a later version.
   * 
   * @example
   * 2025-07-17T16:00:00Z
   */
  expireDate?: string;
  /**
   * @remarks
   * The kernel version number of the cluster. Example: **3.1.9**.
   * 
   * @example
   * 3.1.9
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The release time of the kernel version. The time format is yyyy-MM-DD HH:mm:ss.
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

export class DescribeKernelVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of target versions to which the current version can be upgraded.
   */
  availableKernelVersions?: DescribeKernelVersionResponseBodyAvailableKernelVersions[];
  /**
   * @remarks
   * The end-of-support date of the version. The time is in the yyyy-MM-DD HH:mm:ss format. After this date, the system no longer maintains this version. If any issues occur, upgrade to a later version.
   * 
   * @example
   * 2025-01-12T16:00:00Z
   */
  expireDate?: string;
  /**
   * @remarks
   * The kernel version number of the cluster. Example: **3.1.8**.
   * 
   * @example
   * 3.1.8
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableKernelVersions: 'AvailableKernelVersions',
      expireDate: 'ExpireDate',
      kernelVersion: 'KernelVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableKernelVersions: { 'type': 'array', 'itemType': DescribeKernelVersionResponseBodyAvailableKernelVersions },
      expireDate: 'string',
      kernelVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableKernelVersions)) {
      $dara.Model.validateArray(this.availableKernelVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

