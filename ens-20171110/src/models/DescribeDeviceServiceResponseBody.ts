// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceServiceResponseBodyAppMetaData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 97a32f2a-aa2c-436a-b19c-05b20d258618
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * iotx-api-admin
   */
  appName?: string;
  /**
   * @remarks
   * The stable version number of the application.
   * 
   * @example
   * v1
   */
  appStableVersion?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * - Common: common.
   * - Scheduler: schedule resource.
   * 
   * @example
   * Common
   */
  appType?: string;
  /**
   * @remarks
   * The application cluster name.
   * 
   * @example
   * poc
   */
  clusterName?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2022-03-03T03:42:11
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Test application
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStableVersion: 'AppStableVersion',
      appType: 'AppType',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStableVersion: 'string',
      appType: 'string',
      clusterName: 'string',
      createTime: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyAppStatus extends $dara.Model {
  /**
   * @remarks
   * The application status. Valid values:
   * 
   * Three intermediate states:
   * -   CREATING
   * -   UPDATING
   * -   DELETING
   * 
   * Four final states:
   *   
   * - CREATE_FAILED
   * -   UPDATE_FAILED
   * -   DELETE_FAILED
   * -   RUNNING
   * 
   * @example
   * CREATING
   */
  phase?: string;
  /**
   * @remarks
   * The description of the application status.
   * 
   * @example
   * Creating
   */
  statusDescrip?: string;
  /**
   * @remarks
   * The most recent status update time.
   * 
   * @example
   * 2021-01-26T05:04Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceDetailInfos extends $dara.Model {
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * 5JhF100NEgdBcpNren32
   */
  deviceName?: string;
  /**
   * @remarks
   * The cloud device ID.
   * 
   * @example
   * h-uf6009zoaexs5pefypbo
   */
  ID?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 120.27.219.219
   */
  IP?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) information.
   * 
   * @example
   * cmcc
   */
  ISP?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-2ze40oyhjorpyw61k7be
   */
  imageID?: string;
  /**
   * @remarks
   * The MAC address of the device.
   * 
   * @example
   * AA:BB:77:88:99:03
   */
  mac?: string;
  /**
   * @remarks
   * The ID of the ENS edge node.
   * 
   * @example
   * cn-jiaozuo-2
   */
  regionID?: string;
  /**
   * @remarks
   * The server NC name of the ENS edge node.
   * 
   * @example
   * ens-nc2
   */
  server?: string;
  /**
   * @remarks
   * The device status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The device type.
   * 
   * @example
   * ens.ac6.large
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      ID: 'ID',
      IP: 'IP',
      ISP: 'ISP',
      imageID: 'ImageID',
      mac: 'Mac',
      regionID: 'RegionID',
      server: 'Server',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      ID: 'string',
      IP: 'string',
      ISP: 'string',
      imageID: 'string',
      mac: 'string',
      regionID: 'string',
      server: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork extends $dara.Model {
  /**
   * @remarks
   * The container port.
   * 
   * @example
   * 10000-10010
   */
  containerPorts?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 39.105.62.120
   */
  externalIp?: string;
  /**
   * @remarks
   * The host port range.
   * 
   * @example
   * 80-8080
   */
  hostPorts?: string;
  /**
   * @remarks
   * The gateway protocol. Valid values:
   * 
   * - TCP
   * - UDP
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      containerPorts: 'ContainerPorts',
      externalIp: 'ExternalIp',
      hostPorts: 'HostPorts',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerPorts: 'string',
      externalIp: 'string',
      hostPorts: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos extends $dara.Model {
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * test-api
   */
  name?: string;
  /**
   * @remarks
   * The list of network information.
   */
  network?: DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork[];
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      network: 'Network',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      network: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfosInternalIps extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 10.0.2.3
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfosPublicIps extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 122.13.173.137
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfos extends $dara.Model {
  /**
   * @remarks
   * The application version number.
   * 
   * @example
   * v1
   */
  appVersion?: string;
  /**
   * @remarks
   * The area code.
   * 
   * @example
   * 410800
   */
  areaCode?: string;
  /**
   * @remarks
   * The area name.
   * 
   * @example
   * Central China, Henan Province, Jiaozuo City
   */
  areaName?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2019-10-02T08:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of device information.
   */
  deviceInfos?: DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-5s9boobrmh5000kv4jmi0oeai
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The list of internal IP addresses.
   */
  internalIps?: DescribeDeviceServiceResponseBodyResourceInfosInternalIps[];
  /**
   * @remarks
   * The public IP addresses.
   */
  publicIps?: DescribeDeviceServiceResponseBodyResourceInfosPublicIps[];
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-jiaozuo-2
   */
  regionCode?: string;
  /**
   * @remarks
   * The ID of the ENS edge node.
   * 
   * @example
   * cn-jiaozuo-2
   */
  regionId?: string;
  /**
   * @remarks
   * The area name.
   * 
   * @example
   * China Jiaozuo-2
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      areaCode: 'AreaCode',
      areaName: 'AreaName',
      createTime: 'CreateTime',
      deviceInfos: 'DeviceInfos',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internalIps: 'InternalIps',
      publicIps: 'PublicIps',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      areaCode: 'string',
      areaName: 'string',
      createTime: 'string',
      deviceInfos: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos },
      instanceId: 'string',
      instanceStatus: 'string',
      internalIps: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfosInternalIps },
      publicIps: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfosPublicIps },
      regionCode: 'string',
      regionId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceInfos)) {
      $dara.Model.validateArray(this.deviceInfos);
    }
    if(Array.isArray(this.internalIps)) {
      $dara.Model.validateArray(this.internalIps);
    }
    if(Array.isArray(this.publicIps)) {
      $dara.Model.validateArray(this.publicIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic properties of the application.
   */
  appMetaData?: DescribeDeviceServiceResponseBodyAppMetaData;
  /**
   * @remarks
   * The application status information.
   */
  appStatus?: DescribeDeviceServiceResponseBodyAppStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A535110-3EE3-5EC5-B1ED-10B7067A1FC8
   */
  requestId?: string;
  /**
   * @remarks
   * The device list.
   */
  resourceDetailInfos?: DescribeDeviceServiceResponseBodyResourceDetailInfos[];
  /**
   * @remarks
   * The list of resource instance information.
   */
  resourceInfos?: DescribeDeviceServiceResponseBodyResourceInfos[];
  static names(): { [key: string]: string } {
    return {
      appMetaData: 'AppMetaData',
      appStatus: 'AppStatus',
      requestId: 'RequestId',
      resourceDetailInfos: 'ResourceDetailInfos',
      resourceInfos: 'ResourceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appMetaData: DescribeDeviceServiceResponseBodyAppMetaData,
      appStatus: DescribeDeviceServiceResponseBodyAppStatus,
      requestId: 'string',
      resourceDetailInfos: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceDetailInfos },
      resourceInfos: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfos },
    };
  }

  validate() {
    if(this.appMetaData && typeof (this.appMetaData as any).validate === 'function') {
      (this.appMetaData as any).validate();
    }
    if(this.appStatus && typeof (this.appStatus as any).validate === 'function') {
      (this.appStatus as any).validate();
    }
    if(Array.isArray(this.resourceDetailInfos)) {
      $dara.Model.validateArray(this.resourceDetailInfos);
    }
    if(Array.isArray(this.resourceInfos)) {
      $dara.Model.validateArray(this.resourceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

