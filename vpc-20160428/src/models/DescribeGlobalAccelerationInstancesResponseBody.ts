// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServersBackendServer extends $dara.Model {
  regionId?: string;
  serverId?: string;
  serverIpAddress?: string;
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serverId: 'ServerId',
      serverIpAddress: 'ServerIpAddress',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serverId: 'string',
      serverIpAddress: 'string',
      serverType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServers extends $dara.Model {
  backendServer?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServersBackendServer },
    };
  }

  validate() {
    if(Array.isArray(this.backendServer)) {
      $dara.Model.validateArray(this.backendServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddressesPublicIpAddress extends $dara.Model {
  allocationId?: string;
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddresses extends $dara.Model {
  publicIpAddress?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddressesPublicIpAddress[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: { 'type': 'array', 'itemType': DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddressesPublicIpAddress },
    };
  }

  validate() {
    if(Array.isArray(this.publicIpAddress)) {
      $dara.Model.validateArray(this.publicIpAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance extends $dara.Model {
  accelerationLocation?: string;
  backendServers?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServers;
  bandwidth?: string;
  bandwidthType?: string;
  chargeType?: string;
  creationTime?: string;
  description?: string;
  expiredTime?: string;
  globalAccelerationInstanceId?: string;
  internetChargeType?: string;
  ipAddress?: string;
  name?: string;
  publicIpAddresses?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddresses;
  regionId?: string;
  serviceLocation?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationLocation: 'AccelerationLocation',
      backendServers: 'BackendServers',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      name: 'Name',
      publicIpAddresses: 'PublicIpAddresses',
      regionId: 'RegionId',
      serviceLocation: 'ServiceLocation',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationLocation: 'string',
      backendServers: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServers,
      bandwidth: 'string',
      bandwidthType: 'string',
      chargeType: 'string',
      creationTime: 'string',
      description: 'string',
      expiredTime: 'string',
      globalAccelerationInstanceId: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      name: 'string',
      publicIpAddresses: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddresses,
      regionId: 'string',
      serviceLocation: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.backendServers && typeof (this.backendServers as any).validate === 'function') {
      (this.backendServers as any).validate();
    }
    if(this.publicIpAddresses && typeof (this.publicIpAddresses as any).validate === 'function') {
      (this.publicIpAddresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances extends $dara.Model {
  globalAccelerationInstance?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance[];
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstance: 'GlobalAccelerationInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstance: { 'type': 'array', 'itemType': DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance },
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

export class DescribeGlobalAccelerationInstancesResponseBody extends $dara.Model {
  globalAccelerationInstances?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B4EE38D-C75B-4E1F-844E-863A94430676
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstances: 'GlobalAccelerationInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstances: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

