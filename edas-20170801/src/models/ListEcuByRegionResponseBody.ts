// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcuByRegionResponseBodyEcuEntityListEcuEntity extends $dara.Model {
  /**
   * @remarks
   * The number of available CPU cores for the ECU.
   * 
   * @example
   * 4
   */
  availableCpu?: number;
  /**
   * @remarks
   * The size of available memory for the ECU. Unit: MB.
   * 
   * @example
   * 8192
   */
  availableMem?: number;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 0
   */
  cpu?: number;
  /**
   * @remarks
   * The timestamp when the ECU was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1572539283168
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether Docker is installed. Valid values:
   * 
   * *   true: Docker is installed.
   * *   false: Docker is not installed.
   * 
   * @example
   * true
   */
  dockerEnv?: boolean;
  /**
   * @remarks
   * The unique ID of the ECU. To query the ID, you can run the `dmidecode` command on the ECS instance that corresponds to the ECU.
   * 
   * @example
   * c96c494c-1b91-4456-bbb3-b5afcd16****
   */
  ecuId?: string;
  /**
   * @remarks
   * The timestamp when the last heartbeat detection was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1572867865221
   */
  heartbeatTime?: number;
  /**
   * @remarks
   * The ID of the ECU.
   * 
   * @example
   * i-2ze82h8f4zcn449y****
   */
  instanceId?: string;
  /**
   * @remarks
   * The private IP address of the ECU.
   * 
   * @example
   * 192.168.xxx.xxx
   */
  ipAddr?: string;
  /**
   * @remarks
   * The total size of memory. Unit: MB.
   * 
   * @example
   * 0
   */
  mem?: number;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * worker-k8s-for
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the ECU is online. Valid values:
   * 
   * *   true: The ECU is online.
   * *   false: The ECU is offline.
   * 
   * @example
   * false
   */
  online?: boolean;
  /**
   * @remarks
   * The ID of the region in which the ECU resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The timestamp when the ECU was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1572867895575
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * edas@aliyun-****.com
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the ECU resides.
   * 
   * @example
   * vpc-2zew8mi6gqbo5wf****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone in which the ECU resides.
   * 
   * @example
   * cn-beijing-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      mem: 'Mem',
      name: 'Name',
      online: 'Online',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCpu: 'number',
      availableMem: 'number',
      cpu: 'number',
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
      mem: 'number',
      name: 'string',
      online: 'boolean',
      regionId: 'string',
      updateTime: 'number',
      userId: 'string',
      vpcId: 'string',
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

export class ListEcuByRegionResponseBodyEcuEntityList extends $dara.Model {
  ecuEntity?: ListEcuByRegionResponseBodyEcuEntityListEcuEntity[];
  static names(): { [key: string]: string } {
    return {
      ecuEntity: 'EcuEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuEntity: { 'type': 'array', 'itemType': ListEcuByRegionResponseBodyEcuEntityListEcuEntity },
    };
  }

  validate() {
    if(Array.isArray(this.ecuEntity)) {
      $dara.Model.validateArray(this.ecuEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcuByRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about ECUs.
   */
  ecuEntityList?: ListEcuByRegionResponseBodyEcuEntityList;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 00000000-0000-0000-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecuEntityList: 'EcuEntityList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ecuEntityList: ListEcuByRegionResponseBodyEcuEntityList,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.ecuEntityList && typeof (this.ecuEntityList as any).validate === 'function') {
      (this.ecuEntityList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

