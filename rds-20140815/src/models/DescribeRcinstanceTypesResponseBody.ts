// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
  cpuCoreCount?: number;
  /**
   * @example
   * 16
   */
  diskQuantity?: number;
  instanceTypeFamily?: string;
  instanceTypeId?: string;
  jumboFrameSupport?: boolean;
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      diskQuantity: 'DiskQuantity',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypeId: 'InstanceTypeId',
      jumboFrameSupport: 'JumboFrameSupport',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      diskQuantity: 'number',
      instanceTypeFamily: 'string',
      instanceTypeId: 'string',
      jumboFrameSupport: 'boolean',
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
  instanceTypes?: DescribeRCInstanceTypesResponseBodyInstanceTypes;
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

