// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMigrateEcuListResponseBodyEcuEntityListEcuEntity extends $dara.Model {
  /**
   * @remarks
   * The number of available CPUs. Unit: cores.
   * 
   * @example
   * 2
   */
  availableCpu?: number;
  /**
   * @remarks
   * The size of available memory. Unit: MB.
   * 
   * @example
   * 2048
   */
  availableMem?: number;
  /**
   * @remarks
   * The CPU quota set by the system. Unit: cores. The value 0 indicates that no quota is set by the system.
   * 
   * @example
   * 0
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the ECU was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281041101
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
   * false
   */
  dockerEnv?: boolean;
  /**
   * @remarks
   * The unique ID of the ECU. To query the ID, you can run the `dmidecode` command on the ECS instance that corresponds to the ECU.
   * 
   * @example
   * 70ed3f59-b476-49aa-****-************
   */
  ecuId?: string;
  /**
   * @remarks
   * The time when the last heartbeat detection was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281041101
   */
  heartbeatTime?: number;
  /**
   * @remarks
   * The ID of the ECU.
   * 
   * @example
   * i-2zej4i2jd***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The private IP address of the ECU.
   * 
   * @example
   * 192.168.0.150
   */
  ipAddr?: string;
  /**
   * @remarks
   * The total size of memory.
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
   * product_test003
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
   * The ID of the region where the ECU resides.
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
   * 1573281041109
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the ECU belongs.
   * 
   * @example
   * edas_com***_****@******-*****.***
   */
  userId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-2zef6ob8m************
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone where the ECU resides.
   * 
   * @example
   * cn-bei****-*
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

export class QueryMigrateEcuListResponseBodyEcuEntityList extends $dara.Model {
  ecuEntity?: QueryMigrateEcuListResponseBodyEcuEntityListEcuEntity[];
  static names(): { [key: string]: string } {
    return {
      ecuEntity: 'EcuEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuEntity: { 'type': 'array', 'itemType': QueryMigrateEcuListResponseBodyEcuEntityListEcuEntity },
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

export class QueryMigrateEcuListResponseBody extends $dara.Model {
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
   * The information about ECUs that can be migrated.
   */
  ecuEntityList?: QueryMigrateEcuListResponseBodyEcuEntityList;
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
   * b197-40ab-9155-7ca7
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
      ecuEntityList: QueryMigrateEcuListResponseBodyEcuEntityList,
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

