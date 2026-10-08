// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcuByRegionResponseBodyEcuEntityListEcuEntity extends $dara.Model {
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

