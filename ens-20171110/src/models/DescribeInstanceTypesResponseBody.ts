// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
  cpuCoreCount?: number;
  instanceBandwidthRx?: number;
  instanceBandwidthTx?: number;
  instanceType?: string;
  instanceTypeId?: string;
  instanceTypeName?: string;
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceBandwidthTx: 'InstanceBandwidthTx',
      instanceType: 'InstanceType',
      instanceTypeId: 'InstanceTypeId',
      instanceTypeName: 'InstanceTypeName',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      instanceBandwidthRx: 'number',
      instanceBandwidthTx: 'number',
      instanceType: 'string',
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
   * The business code. A value of 0 indicates success. An error code is returned upon failure.
   * 
   * @example
   * 0
   */
  code?: number;
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

