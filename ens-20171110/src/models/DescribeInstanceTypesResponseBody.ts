// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpuCoreCount?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * This parameter is not needed temporarily.
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * The name of the instance type.
   * 
   * @example
   * ens.xxx.small
   */
  instanceTypeName?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      instanceTypeId: 'InstanceTypeId',
      instanceTypeName: 'InstanceTypeName',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      instanceTypeId: 'string',
      instanceTypeName: 'string',
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

export class DescribeInstanceTypesResponseBodyInstanceTypes extends $dara.Model {
  instanceType?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypesInstanceType },
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

export class DescribeInstanceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. If the request is successful, 0 is returned. If the request fails, a non-zero error code is returned.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details about the instance types.
   */
  instanceTypes?: DescribeInstanceTypesResponseBodyInstanceTypes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D452D190-BADF-5D09-910D-599B96D42AAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceTypes: DescribeInstanceTypesResponseBodyInstanceTypes,
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

