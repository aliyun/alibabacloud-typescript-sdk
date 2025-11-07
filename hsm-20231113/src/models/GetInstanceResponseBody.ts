// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @example
   * GM/T0028_LEVEL_2
   */
  certification?: string;
  certificationUrl?: string;
  /**
   * @remarks
   * The ID of the cluster to which the HSM belongs.
   * 
   * @example
   * cluster-w3G9vOJI2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster_online
   */
  clusterName?: string;
  /**
   * @remarks
   * The time when the HSM was created.
   * 
   * @example
   * 1699515963000
   */
  createTime?: number;
  /**
   * @remarks
   * The type of the device.
   * 
   * @example
   * jnta.SJJ1528-G
   */
  deviceType?: string;
  /**
   * @remarks
   * The time when the HSM expired.
   * 
   * @example
   * 1699496389720
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the HSM.
   * 
   * @example
   * hsm-cn-g4t3jwsc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the HSM in the VPC.
   * 
   * @example
   * 10.192.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * Indicates whether the HSM is for trial use. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTrial?: boolean;
  /**
   * @remarks
   * Indicates whether the HSM is a master HSM. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  master?: boolean;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 23576634952****
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  pqcEnabled?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the HSM.
   * 
   * @example
   * hsmOnline
   */
  remark?: string;
  /**
   * @remarks
   * The status of the HSM. Valid values:
   * 
   * *   PENDING: The HSM is disabled.
   * *   ACTIVE: The HSM is enabled.
   * *   EXPIRED: The HSM expired.
   * *   INVALID: The HSM is invalid.
   * *   FAILURE: The HSM failed to be created.
   * *   RESET: The HSM is being reset.
   * *   PAUSED: The HSM is paused.
   * *   MODIFYING: The HSM is being modified.
   * 
   * @example
   * EXPIRED
   */
  status?: string;
  /**
   * @remarks
   * The type of HSMs that is classified based on resource isolation. Valid values: 
   * - vsm: Virtual security modules (VSMs)
   * - hostedHsm: Dedicated HSMs.
   * 
   * @example
   * vsm
   */
  tenantIsolationType?: string;
  tpsEnabled?: number;
  /**
   * @remarks
   * The ID of the vSwitch that is configured for the HSM.
   * 
   * @example
   * vsw-bp1mvfs31ltt0wyhf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The information about the vendor.
   * 
   * @example
   * jnta
   */
  vendor?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the HSM belongs.
   * 
   * @example
   * vpc-uf69i66j9kmoko52p****
   */
  vpcId?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist.
   * 
   * @example
   * 18.68.XX.XX
   */
  whitelist?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      certification: 'Certification',
      certificationUrl: 'CertificationUrl',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      deviceType: 'DeviceType',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      isTrial: 'IsTrial',
      master: 'Master',
      orderId: 'OrderId',
      pqcEnabled: 'PqcEnabled',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
      tenantIsolationType: 'TenantIsolationType',
      tpsEnabled: 'TpsEnabled',
      vSwitchId: 'VSwitchId',
      vendor: 'Vendor',
      vpcId: 'VpcId',
      whitelist: 'Whitelist',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certification: 'string',
      certificationUrl: 'string',
      clusterId: 'string',
      clusterName: 'string',
      createTime: 'number',
      deviceType: 'string',
      expireTime: 'number',
      instanceId: 'string',
      ip: 'string',
      isTrial: 'boolean',
      master: 'boolean',
      orderId: 'string',
      pqcEnabled: 'number',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      tenantIsolationType: 'string',
      tpsEnabled: 'number',
      vSwitchId: 'string',
      vendor: 'string',
      vpcId: 'string',
      whitelist: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the HSM.
   */
  instance?: GetInstanceResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: GetInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

