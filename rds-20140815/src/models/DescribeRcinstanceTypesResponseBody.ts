// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
  /**
   * @remarks
   * The maximum number of CPU cores.
   * 
   * @example
   * 32
   */
  cpuCoreCount?: number;
  /**
   * @example
   * 16
   */
  diskQuantity?: number;
  /**
   * @remarks
   * The ID of the instance family.
   * 
   * @example
   * gn8.cm
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * rds.gna8.2xlarge.8cm
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB.
   * 
   * @example
   * 256
   */
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      diskQuantity: 'DiskQuantity',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypeId: 'InstanceTypeId',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      diskQuantity: 'number',
      instanceTypeFamily: 'string',
      instanceTypeId: 'string',
      memorySize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceTypesResponseBodyInstanceTypes extends $dara.Model {
  /**
   * @remarks
   * The instance types.
   */
  instanceType?: DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instance types.
   */
  instanceTypes?: DescribeRCInstanceTypesResponseBodyInstanceTypes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2911788-25E8-42E5-A3A3-1B38D263F01E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: DescribeRCInstanceTypesResponseBodyInstanceTypes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceTypes && typeof (this.instanceTypes as any).validate === 'function') {
      (this.instanceTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

