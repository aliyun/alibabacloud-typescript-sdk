// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKernelVersionResponseBodyAvailableKernelVersions } from "./DescribeKernelVersionResponseBodyAvailableKernelVersions";


export class DescribeKernelVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The minor versions to which you can update the current minor version of the cluster.
   */
  availableKernelVersions?: DescribeKernelVersionResponseBodyAvailableKernelVersions[];
  /**
   * @remarks
   * The maintenance expiration time of the version. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. After the time arrives, the system no longer maintains the version. If any issues occur, update the minor version of the cluster to a later version.
   * 
   * @example
   * 2025-01-12T16:00:00Z
   */
  expireDate?: string;
  /**
   * @remarks
   * The minor version of the cluster. Example: **3.1.8**.
   * 
   * @example
   * 3.1.8
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The request ID.
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

