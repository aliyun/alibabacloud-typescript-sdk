// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds extends $dara.Model {
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

export class DescribeDrdsInstanceResponseBodyDataVipsVip extends $dara.Model {
  /**
   * @remarks
   * The domain name that is mapped to the VIP.
   * 
   * @example
   * drdssen1243as.drds.aliyuncs.com
   */
  dns?: string;
  /**
   * @remarks
   * The number of remaining days before the VIP expires.
   * 
   * @example
   * 0
   */
  expireDays?: number;
  /**
   * @remarks
   * The ports that are opened on the VIP.
   * 
   * @example
   * 3306
   */
  port?: string;
  removeWeight?: boolean;
  /**
   * @remarks
   * The type of the VIP. Valid values: intranet and internet.
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
   * vpc-bp**********
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp***********
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      dns: 'Dns',
      expireDays: 'ExpireDays',
      port: 'Port',
      removeWeight: 'RemoveWeight',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns: 'string',
      expireDays: 'number',
      port: 'string',
      removeWeight: 'boolean',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataVips extends $dara.Model {
  vip?: DescribeDrdsInstanceResponseBodyDataVipsVip[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': DescribeDrdsInstanceResponseBodyDataVipsVip },
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

export class DescribeDrdsInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the instance.
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
   * drdssen1243as
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
   * *   **MASTER**: The instance is a primary instance.
   * *   **SLAVE**: The instance is a read-only instance to analyze complex queries
   * *   **SLAVE_FLOW**: The instance is a read-only instance for high-concurrency scenarios
   * 
   * @example
   * MASTER
   */
  instRole?: string;
  /**
   * @remarks
   * The instance series of the instance.
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
   * The machine type of the instance. The value of this parameter is **ecs**.
   * 
   * @example
   * ecs
   */
  machineType?: string;
  /**
   * @remarks
   * The ID of the primary instance.
   * 
   * >  This parameter is returned only when the instance is a primary instance.
   * 
   * @example
   * drdssen1243as
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The MySQL version that is supported by the instance.
   * 
   * @example
   * 5
   */
  mysqlVersion?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values: CLASSIC and VPC.
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
   * The version of .
   * 
   * @example
   * 5.3.*
   */
  productVersion?: string;
  /**
   * @remarks
   * The details about each read-only instance that is associated with the instance.
   */
  readOnlyDBInstanceIds?: DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds;
  /**
   * @remarks
   * The ID of the region in which the instance is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. The value of this parameter can be null.
   * 
   * @example
   * NULL
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the instance.
   * 
   * @example
   * RUN
   */
  status?: string;
  /**
   * @remarks
   * The type of the instance used for storage.
   * 
   * @example
   * RDS
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the instance. Valid values: PRIVATE and PUBLIC. The value of PRIVATE indicates that the instance is a dedicated instance. The value of PUBLIC indicates that the instance is a shared instance.
   * 
   * @example
   * PRIVATE
   */
  type?: string;
  /**
   * @remarks
   * The version of the instance. The value of this parameter is 0.
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
   * Upgradeable
   */
  versionAction?: string;
  /**
   * @remarks
   * The list of returned virtual IP addresses (VIPs).
   */
  vips?: DescribeDrdsInstanceResponseBodyDataVips;
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
   * The ID of the zone in which the instance is located.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
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
      mysqlVersion: 'MysqlVersion',
      networkType: 'NetworkType',
      orderInstanceId: 'OrderInstanceId',
      productVersion: 'ProductVersion',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageType: 'StorageType',
      type: 'Type',
      version: 'Version',
      versionAction: 'VersionAction',
      vips: 'Vips',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      zoneId: 'ZoneId',
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
      mysqlVersion: 'number',
      networkType: 'string',
      orderInstanceId: 'string',
      productVersion: 'string',
      readOnlyDBInstanceIds: DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds,
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      storageType: 'string',
      type: 'string',
      version: 'number',
      versionAction: 'string',
      vips: DescribeDrdsInstanceResponseBodyDataVips,
      vpcCloudInstanceId: 'string',
      zoneId: 'string',
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

export class DescribeDrdsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  data?: DescribeDrdsInstanceResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4F76641-BA45-4320-BE7C-9C62CFDAC9B2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

