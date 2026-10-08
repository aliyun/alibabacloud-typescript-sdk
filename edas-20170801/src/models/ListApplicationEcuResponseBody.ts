// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationEcuResponseBodyEcuInfoListEcuEntity extends $dara.Model {
  appId?: string;
  availableCpu?: number;
  availableMem?: number;
  cpu?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
  mem?: number;
  name?: string;
  online?: boolean;
  regionId?: string;
  updateTime?: number;
  userId?: string;
  vpcId?: string;
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

