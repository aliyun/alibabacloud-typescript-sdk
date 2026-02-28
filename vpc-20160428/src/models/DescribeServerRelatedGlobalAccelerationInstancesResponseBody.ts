// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance extends $dara.Model {
  globalAccelerationInstanceId?: string;
  ipAddress?: string;
  regionId?: string;
  serverIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      ipAddress: 'IpAddress',
      regionId: 'RegionId',
      serverIpAddress: 'ServerIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstanceId: 'string',
      ipAddress: 'string',
      regionId: 'string',
      serverIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances extends $dara.Model {
  globalAccelerationInstance?: DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance[];
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstance: 'GlobalAccelerationInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstance: { 'type': 'array', 'itemType': DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance },
    };
  }

  validate() {
    if(Array.isArray(this.globalAccelerationInstance)) {
      $dara.Model.validateArray(this.globalAccelerationInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerRelatedGlobalAccelerationInstancesResponseBody extends $dara.Model {
  globalAccelerationInstances?: DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8252014-D8DE-4D85-AF35-AFEXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstances: 'GlobalAccelerationInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstances: DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.globalAccelerationInstances && typeof (this.globalAccelerationInstances as any).validate === 'function') {
      (this.globalAccelerationInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

