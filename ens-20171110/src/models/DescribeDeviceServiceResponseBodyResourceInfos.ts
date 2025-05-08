// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos } from "./DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos";
import { DescribeDeviceServiceResponseBodyResourceInfosInternalIps } from "./DescribeDeviceServiceResponseBodyResourceInfosInternalIps";
import { DescribeDeviceServiceResponseBodyResourceInfosPublicIps } from "./DescribeDeviceServiceResponseBodyResourceInfosPublicIps";


export class DescribeDeviceServiceResponseBodyResourceInfos extends $dara.Model {
  /**
   * @remarks
   * The version of the application.
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
   * The region name.
   * 
   * @example
   * Jiaozuo City, Henan Province, Central China
   */
  areaName?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2019-10-02T08:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The information about the devices.
   */
  deviceInfos?: DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5s9boobrmh5000kv4jmi0oeai
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The internal IP addresses.
   */
  internalIps?: DescribeDeviceServiceResponseBodyResourceInfosInternalIps[];
  /**
   * @remarks
   * The public IP addresses.
   */
  publicIps?: DescribeDeviceServiceResponseBodyResourceInfosPublicIps[];
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-jiaozuo-2
   */
  regionCode?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-jiaozuo-2
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region.
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

