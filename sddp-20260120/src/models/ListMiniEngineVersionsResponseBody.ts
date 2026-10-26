// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMiniEngineVersionsResponseBodyKernelVersions extends $dara.Model {
  /**
   * @remarks
   * The release type of the kernel version, which follows the return values of the corresponding database service. For example, for RDS, LTS indicates the long-term support version and BETA indicates the preview version. For PolarDB, the value may be Stable, Old, HighRisk, or Beta.
   * 
   * @example
   * LTS
   */
  kernelReleaseType?: string;
  /**
   * @remarks
   * The available kernel version number.
   * 
   * @example
   * rds_20220731
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The display name of the kernel version.
   * 
   * @example
   * MySQL 8.0
   */
  kernelVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      kernelReleaseType: 'KernelReleaseType',
      kernelVersion: 'KernelVersion',
      kernelVersionName: 'KernelVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kernelReleaseType: 'string',
      kernelVersion: 'string',
      kernelVersionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMiniEngineVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of available kernel versions.
   */
  kernelVersions?: ListMiniEngineVersionsResponseBodyKernelVersions[];
  /**
   * @remarks
   * The request ID, which can be used to locate this API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kernelVersions: 'KernelVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kernelVersions: { 'type': 'array', 'itemType': ListMiniEngineVersionsResponseBodyKernelVersions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kernelVersions)) {
      $dara.Model.validateArray(this.kernelVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

