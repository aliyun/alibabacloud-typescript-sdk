// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMiniEngineVersionsResponseBodyKernelVersions extends $dara.Model {
  /**
   * @example
   * LTS
   */
  kernelReleaseType?: string;
  /**
   * @example
   * rds_20220731
   */
  kernelVersion?: string;
  /**
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
  kernelVersions?: ListMiniEngineVersionsResponseBodyKernelVersions[];
  /**
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

