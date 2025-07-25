// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool extends $dara.Model {
  /**
   * @remarks
   * The address pool ID.
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * hra0i9
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools extends $dara.Model {
  addrPool?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.addrPool)) {
      $dara.Model.validateArray(this.addrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The address pools.
   */
  addrPools?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instance-example
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * instance-name-example
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools,
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    if(this.addrPools && typeof (this.addrPools as any).validate === 'function') {
      (this.addrPools as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances extends $dara.Model {
  instance?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instances.
   */
  instances?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8F8EF50-8B7F-4702-B294-97170A423403
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

