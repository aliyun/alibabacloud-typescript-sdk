// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypeResponseBodyInstanceTypeSpecListInstanceTypeSpec extends $dara.Model {
  /**
   * @example
   * 8
   */
  cpuSize?: number;
  /**
   * @example
   * hbase.n2.4xlarge
   */
  instanceType?: string;
  /**
   * @example
   * 16
   */
  memSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuSize: 'CpuSize',
      instanceType: 'InstanceType',
      memSize: 'MemSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuSize: 'number',
      instanceType: 'string',
      memSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeResponseBodyInstanceTypeSpecList extends $dara.Model {
  instanceTypeSpec?: DescribeInstanceTypeResponseBodyInstanceTypeSpecListInstanceTypeSpec[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeSpec: 'InstanceTypeSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeSpec: { 'type': 'array', 'itemType': DescribeInstanceTypeResponseBodyInstanceTypeSpecListInstanceTypeSpec },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeSpec)) {
      $dara.Model.validateArray(this.instanceTypeSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeResponseBody extends $dara.Model {
  instanceTypeSpecList?: DescribeInstanceTypeResponseBodyInstanceTypeSpecList;
  /**
   * @example
   * DD23BBB4-64C2-42A4-B2E2-7E56C7AA815A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeSpecList: 'InstanceTypeSpecList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeSpecList: DescribeInstanceTypeResponseBodyInstanceTypeSpecList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceTypeSpecList && typeof (this.instanceTypeSpecList as any).validate === 'function') {
      (this.instanceTypeSpecList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

