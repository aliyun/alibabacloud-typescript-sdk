// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScaleOutEcuResponseBodyEcuInfoListEcuInfo extends $dara.Model {
  /**
   * @remarks
   * The number of available CPU cores for the ECU.
   * 
   * @example
   * 2
   */
  availableCpu?: number;
  /**
   * @remarks
   * The size of available memory for the ECU. Unit: MB.
   * 
   * @example
   * 111
   */
  availableMem?: number;
  /**
   * @remarks
   * The time when the ECU was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281040819
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
   * The ID of the ECU.
   * 
   * @example
   * i-2zej4i2jdf*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The private IP address of the ECU.
   * 
   * @example
   * 192.168.XX.XX
   */
  ipAddr?: string;
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
   * Indicates whether the ECU is online. If the ECU is online, its corresponding ECS instance is managed in EDAS. Valid values:
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
   * The ID of the region where the ECU is located.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the ECU was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281040827
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the ECU belongs.
   * 
   * @example
   * 1172****6608****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the ECU is located.
   * 
   * @example
   * vpc-2zef6ob8**********
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone where the ECU resides.
   * 
   * @example
   * cn-beijing-h
   */
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
  /**
   * @remarks
   * The ECUs.
   */
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

