// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageScanAuthCountResponseBodyImageScan extends $dara.Model {
  /**
   * @remarks
   * The quota for container image scan.
   * 
   * @example
   * 15340
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * The instance ID of Security Center.
   * 
   * @example
   * sas-qdl123412****
   */
  instanceId?: string;
  /**
   * @remarks
   * The consumed quota for container image scan.
   * 
   * @example
   * 5489
   */
  scanCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageScanCapacity: 'ImageScanCapacity',
      instanceId: 'InstanceId',
      scanCount: 'ScanCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanCapacity: 'number',
      instanceId: 'string',
      scanCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageScanAuthCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the quota for container image scan.
   */
  imageScan?: DescribeImageScanAuthCountResponseBodyImageScan;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 892NYH839-0EDC-4CD0-A2EF-5BD294656C99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageScan: 'ImageScan',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScan: DescribeImageScanAuthCountResponseBodyImageScan,
      requestId: 'string',
    };
  }

  validate() {
    if(this.imageScan && typeof (this.imageScan as any).validate === 'function') {
      (this.imageScan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

