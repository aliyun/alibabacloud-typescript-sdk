// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceSpecResponseBodyInstanceSpecs } from "./DescribeInstanceSpecResponseBodyInstanceSpecs";


export class DescribeInstanceSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit for a single instance. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  bandwidthLimit?: number;
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The maximum capacity of a data disk. Unit: GB.
   * 
   * @example
   * 20015
   */
  dataDiskMaxSize?: number;
  /**
   * @remarks
   * The minimum capacity of a data disk. Unit: GB.
   * 
   * @example
   * 0
   */
  dataDiskMinSize?: number;
  /**
   * @remarks
   * The information about instance specifications.
   */
  instanceSpecs?: DescribeInstanceSpecResponseBodyInstanceSpecs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1ECC937A-AE0E-4626-BE51-DED1D6D1C888
   */
  requestId?: string;
  /**
   * @remarks
   * The maximum capacity of the system disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      code: 'Code',
      dataDiskMaxSize: 'DataDiskMaxSize',
      dataDiskMinSize: 'DataDiskMinSize',
      instanceSpecs: 'InstanceSpecs',
      requestId: 'RequestId',
      systemDiskMaxSize: 'SystemDiskMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'number',
      code: 'number',
      dataDiskMaxSize: 'number',
      dataDiskMinSize: 'number',
      instanceSpecs: DescribeInstanceSpecResponseBodyInstanceSpecs,
      requestId: 'string',
      systemDiskMaxSize: 'number',
    };
  }

  validate() {
    if(this.instanceSpecs && typeof (this.instanceSpecs as any).validate === 'function') {
      (this.instanceSpecs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

