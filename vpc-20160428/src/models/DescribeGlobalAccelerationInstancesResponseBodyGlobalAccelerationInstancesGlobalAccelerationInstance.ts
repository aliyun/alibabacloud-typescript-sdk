// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServers } from "./DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServers";
import { DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddresses } from "./DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddresses";


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

