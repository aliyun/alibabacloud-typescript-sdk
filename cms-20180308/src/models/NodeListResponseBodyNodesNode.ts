// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeListResponseBodyNodesNode extends $dara.Model {
  aliUid?: number;
  aliyunHost?: boolean;
  eipAddress?: string;
  eipId?: string;
  hostName?: string;
  instanceId?: string;
  instanceTypeFamily?: string;
  ipGroup?: string;
  natIp?: string;
  networkType?: string;
  operatingSystem?: string;
  region?: string;
  serialNumber?: string;
  tianjimonVersion?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      aliyunHost: 'AliyunHost',
      eipAddress: 'EipAddress',
      eipId: 'EipId',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceTypeFamily: 'InstanceTypeFamily',
      ipGroup: 'IpGroup',
      natIp: 'NatIp',
      networkType: 'NetworkType',
      operatingSystem: 'OperatingSystem',
      region: 'Region',
      serialNumber: 'SerialNumber',
      tianjimonVersion: 'TianjimonVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      aliyunHost: 'boolean',
      eipAddress: 'string',
      eipId: 'string',
      hostName: 'string',
      instanceId: 'string',
      instanceTypeFamily: 'string',
      ipGroup: 'string',
      natIp: 'string',
      networkType: 'string',
      operatingSystem: 'string',
      region: 'string',
      serialNumber: 'string',
      tianjimonVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

