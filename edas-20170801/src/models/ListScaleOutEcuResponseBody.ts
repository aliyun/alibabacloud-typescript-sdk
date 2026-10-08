// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScaleOutEcuResponseBodyEcuInfoListEcuInfo extends $dara.Model {
  availableCpu?: number;
  availableMem?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
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
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
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
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
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

export class ListScaleOutEcuResponseBodyEcuInfoList extends $dara.Model {
  ecuInfo?: ListScaleOutEcuResponseBodyEcuInfoListEcuInfo[];
  static names(): { [key: string]: string } {
    return {
      ecuInfo: 'EcuInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecuInfo: { 'type': 'array', 'itemType': ListScaleOutEcuResponseBodyEcuInfoListEcuInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ecuInfo)) {
      $dara.Model.validateArray(this.ecuInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScaleOutEcuResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  ecuInfoList?: ListScaleOutEcuResponseBodyEcuInfoList;
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
   * AF860D6C-ACE3-4429-9D54-3BD15A******
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
      ecuInfoList: ListScaleOutEcuResponseBodyEcuInfoList,
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

