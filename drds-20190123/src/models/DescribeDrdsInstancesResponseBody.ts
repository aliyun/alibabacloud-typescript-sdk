// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds extends $dara.Model {
  readOnlyDBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyDBInstanceId)) {
      $dara.Model.validateArray(this.readOnlyDBInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip extends $dara.Model {
  /**
   * @remarks
   * The virtual IP address.
   * 
   * @example
   * 10.23.***.***
   */
  IP?: string;
  /**
   * @remarks
   * The ports that are opened on the VIP.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The type of the VIP. Valid values:
   * 
   * *   intranet: a private IP address
   * *   internet: a public IP address
   * 
   * @example
   * intranet
   */
  type?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bpxxxxxxxxxxxy
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bpxxxxxxxxxxxxx96
   */
  vswitchId?: string;
  /**
   * @remarks
   * The domain name that is mapped to the VIP.
   * 
   * @example
   * drdssen1243as.drds.aliyuncs.com
   */
  dns?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      port: 'Port',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      dns: 'dns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      port: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      dns: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstancesInstanceVips extends $dara.Model {
  vip?: DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip },
    };
  }

  validate() {
    if(Array.isArray(this.vip)) {
      $dara.Model.validateArray(this.vip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the service.
   * 
   * @example
   * drdsPost
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp that indicates when the instance is created.
   * 
   * @example
   * 1568620311000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * drds_test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * drdssen12****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the instance expires.
   * 
   * @example
   * 4724323200000
   */
  expireDate?: number;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   MASTER: The instance is a primary instance.
   * *   SLAVE: The instance is a read-only instance to analyze complex queries.
   * *   SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
   * 
   * @example
   * MASTER
   */
  instRole?: string;
  /**
   * @remarks
   * The instance series.
   * 
   * @example
   * drds.sn2.4c16g
   */
  instanceSeries?: string;
  /**
   * @remarks
   * The specification of the instance.
   * 
   * @example
   * drds.sn2.4c16g.8C32G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The tag of the instance. Valid values:
   * 
   * *   **NORMAL**: The instance is a standard instance.
   * *   **HA**: The instance is a high-availability (HA) instance.
   * *   **VPC**: The instance is a VPC-based instance.
   * 
   * @example
   * NORMAL
   */
  label?: string;
  /**
   * @remarks
   * The machine type of the instance. Valid value: ecs.
   * 
   * @example
   * ecs
   */
  machineType?: string;
  /**
   * @remarks
   * The ID of the primary instance.
   * 
   * @example
   * drdssen12****
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **CLASSIC**
   * *   **VPC**
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the purchased instance.
   * 
   * @example
   * drdssen12****
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * V1
   */
  productVersion?: string;
  /**
   * @remarks
   * The IDs of read-only instances that are associated with the instance.
   */
  readOnlyDBInstanceIds?: DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou-e
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek2ljh3ye4****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * RUN
   */
  status?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * *   **PUBLIC**: The returned instance is a shared instance.
   * *   **PRIVATE**: The returned instance is a dedicated instance.
   * 
   * @example
   * PRIVATE
   */
  type?: string;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * 0
   */
  version?: number;
  /**
   * @remarks
   * Indicates whether the version of the instance can be upgraded.
   * 
   * @example
   * Upgradable
   */
  versionAction?: string;
  /**
   * @remarks
   * The list of returned virtual IP addresses (VIPs).
   */
  vips?: DescribeDrdsInstancesResponseBodyInstancesInstanceVips;
  /**
   * @remarks
   * The ID of the instance that is deployed in the VPC.
   * 
   * @example
   * drdssen12****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-bp**********
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone in which the resource is located.
   * 
   * @example
   * vsw-bpxxxxxxxxxxxxx96
   */
  zoneId?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * 
   * *   **starter**: Starter Edition
   * *   **enterprise**: Enterprise Edition
   * *   **standard**: Standard Edition
   * 
   * @example
   * enterprise
   */
  series?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
      expireDate: 'ExpireDate',
      instRole: 'InstRole',
      instanceSeries: 'InstanceSeries',
      instanceSpec: 'InstanceSpec',
      label: 'Label',
      machineType: 'MachineType',
      masterInstanceId: 'MasterInstanceId',
      networkType: 'NetworkType',
      orderInstanceId: 'OrderInstanceId',
      productVersion: 'ProductVersion',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      type: 'Type',
      version: 'Version',
      versionAction: 'VersionAction',
      vips: 'Vips',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'number',
      description: 'string',
      drdsInstanceId: 'string',
      expireDate: 'number',
      instRole: 'string',
      instanceSeries: 'string',
      instanceSpec: 'string',
      label: 'string',
      machineType: 'string',
      masterInstanceId: 'string',
      networkType: 'string',
      orderInstanceId: 'string',
      productVersion: 'string',
      readOnlyDBInstanceIds: DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds,
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      type: 'string',
      version: 'number',
      versionAction: 'string',
      vips: DescribeDrdsInstancesResponseBodyInstancesInstanceVips,
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      series: 'string',
    };
  }

  validate() {
    if(this.readOnlyDBInstanceIds && typeof (this.readOnlyDBInstanceIds as any).validate === 'function') {
      (this.readOnlyDBInstanceIds as any).validate();
    }
    if(this.vips && typeof (this.vips as any).validate === 'function') {
      (this.vips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstances extends $dara.Model {
  instance?: DescribeDrdsInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDrdsInstancesResponseBodyInstancesInstance },
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

export class DescribeDrdsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned instances.
   */
  instances?: DescribeDrdsInstancesResponseBodyInstances;
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
   * The number of instances returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8734773E-7B21-4A22-9106-CBD245F8****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeDrdsInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
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

