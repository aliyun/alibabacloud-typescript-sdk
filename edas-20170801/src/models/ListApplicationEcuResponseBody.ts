// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationEcuResponseBodyEcuInfoListEcuEntity extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * e809****-43d7-4c6b-8e01-b0d9d1db****
   */
  appId?: string;
  /**
   * @remarks
   * The number of available CPU cores.
   * 
   * @example
   * 1
   */
  availableCpu?: number;
  /**
   * @remarks
   * The size of available memory. Unit: MB.
   * 
   * @example
   * 200
   */
  availableMem?: number;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the ECU was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1542692376066
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
   * 0de2ebdb-9490-4fc4-be41***************
   */
  ecuId?: string;
  /**
   * @remarks
   * The time when the last heartbeat detection was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281040819
   */
  heartbeatTime?: number;
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) instance.
   * 
   * @example
   * i-2zej4i2jdf*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The internal IP address allocated to the ECU.
   * 
   * @example
   * 192.168.XXX.XXX
   */
  ipAddr?: string;
  /**
   * @remarks
   * The total size of memory. Unit: MB.
   * 
   * @example
   * 500
   */
  mem?: number;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * test
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
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the ECU was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1599803995894
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the ECU belongs.
   * 
   * @example
   * ****_common_****@aliyun.com
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2zef6ob8**********
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
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
      appId: 'string',
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

export class ListApplicationEcuResponseBodyEcuInfoList extends $dara.Model {
  ecuEntity?: ListApplicationEcuResponseBodyEcuInfoListEcuEntity[];
  static names(): { [key: string]: string } {
    return {
      ecuEntity: 'EcuEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuEntity: { 'type': 'array', 'itemType': ListApplicationEcuResponseBodyEcuInfoListEcuEntity },
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

export class ListApplicationEcuResponseBody extends $dara.Model {
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
  ecuInfoList?: ListApplicationEcuResponseBodyEcuInfoList;
  /**
   * @remarks
   * The message that is returned.
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
   * b197-40ab-9155-7ca7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecuInfoList: 'EcuInfoList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ecuInfoList: ListApplicationEcuResponseBodyEcuInfoList,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.ecuInfoList && typeof (this.ecuInfoList as any).validate === 'function') {
      (this.ecuInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

