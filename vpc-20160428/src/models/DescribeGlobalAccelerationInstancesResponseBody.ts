// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServersBackendServer extends $dara.Model {
  /**
   * @remarks
   * The region where the backend servers are deployed.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-2zeg83zvn5d4ed4y****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 172.xx.xx.109
   */
  serverIpAddress?: string;
  /**
   * @remarks
   * The type of the backend server.
   * 
   * *   **EcsInstance**: Elastic Compute Service (ECS) instance
   * *   **SlbInstance**: Server Load Balancer (SLB) instance
   * 
   * @example
   * EcsInstance
   */
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
  /**
   * @remarks
   * The ID of the public IP address of the GA instance.
   * 
   * @example
   * eip-bp19yqraac4w3y0jd****
   */
  allocationId?: string;
  /**
   * @remarks
   * The public IP address of the GA instance.
   * 
   * @example
   * 12.xx.xx.78
   */
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
  /**
   * @remarks
   * The acceleration area of the GA instance.
   * 
   * @example
   * china-mainland
   */
  accelerationLocation?: string;
  /**
   * @remarks
   * The details about the backend servers of the GA instance.
   */
  backendServers?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServers;
  /**
   * @remarks
   * The maximum bandwidth of the GA instance.
   * 
   * @example
   * 10
   */
  bandwidth?: string;
  /**
   * @remarks
   * The bandwidth type of the GA instance.
   * 
   * *   **Sharing**
   * *   **Exclusive** (default)
   * 
   * @example
   * Exclusive
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The billing method of the GA instance.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the GA instance was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-05T03:39:31Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the GA instance.
   * 
   * @example
   * apiDescription
   */
  description?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2018-08-05T16:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1x99kj7kl1ziw5x****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * The billing method of the GA instance.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The public IP address of the dedicated GA instance.
   * 
   * @example
   * 47.xx.xx.99
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the GA instance.
   * 
   * @example
   * instanceName
   */
  name?: string;
  /**
   * @remarks
   * The public IP address.
   */
  publicIpAddresses?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddresses;
  /**
   * @remarks
   * The region ID of the GA instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service area of the GA instance.
   * 
   * @example
   * china-mainland
   */
  serviceLocation?: string;
  /**
   * @remarks
   * The status of the GA instance.
   * 
   * *   **Available**
   * *   **Inuse**
   * *   **Associating**
   * *   **Unassociating**
   * 
   * @example
   * InUse
   */
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
  /**
   * @remarks
   * The details of the GA instances.
   */
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

