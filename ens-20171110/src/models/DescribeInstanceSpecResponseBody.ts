// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 1
   */
  core?: string;
  /**
   * @remarks
   * The display name of the instance type.
   * 
   * @example
   * Computational 1C2G
   */
  displayName?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * ens.sn1.stiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 2048
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      displayName: 'DisplayName',
      instanceType: 'InstanceType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'string',
      displayName: 'string',
      instanceType: 'string',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponseBodyInstanceSpecs extends $dara.Model {
  instanceSpec?: DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec[];
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: { 'type': 'array', 'itemType': DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec },
    };
  }

  validate() {
    if(Array.isArray(this.instanceSpec)) {
      $dara.Model.validateArray(this.instanceSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

